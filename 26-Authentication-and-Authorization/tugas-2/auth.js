const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 4000;

const users = [
  {
    username: 'terra',
    password: 'password123admin',
    role: 'admin',
  },
  {
    username: 'dave',
    password: 'password123member',
    role: 'member',
  },
];

const accessTokenSecret = 'youraccesstokensecret';

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  const user = users.filter((el) => el.username === username);
  const passwordUsers = users.filter((el) => el.password === password);

  if (user && passwordUsers && username === 'terra') {
    const token = jwt.sign(
      {
        username: users.username,
        password: users.password,
      },
      accessTokenSecret
    );
    res.json({ accessToken: token });
  } else {
    res.send('Failed to login');
  }
});

/* Books Service */

const books = [
  {
    author: 'Robert Martin',
    country: 'USA',
    language: 'English',
    pages: 209,
    title: 'Clean Code',
    year: 2008,
  },
  {
    author: 'Dave Thomas & Andy Hunt',
    country: 'USA',
    language: 'English',
    pages: 784,
    title: 'The Pragmatic Programmer',
    year: 1999,
  },
  {
    author: 'Kathy Sierra, Bert Bates',
    country: 'USA',
    language: 'English',
    pages: 928,
    title: 'Head First Java',
    year: 2003,
  },
];

app.get('/books', (req, res, next) => {
  res.json(books);
});

app.post('/books', authenticateJWT, (req, res, next) => {
  const { author, country, language, pages, title, year } = req.body;

  const newBook = {
    author: author,
    country: country,
    language: language,
    pages: pages,
    title: title,
    year: year,
  };

  books.push(newBook);
  res.status(201).send('Book added successfully');
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:4000`);
});
