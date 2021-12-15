const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const port = 4000;

app.use(bodyParser.json());
const accessTokenSecret = "youraccesstokensecret";

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

app.get('/books', authenticateJWT, (req, res, next) => {
  res.json(books);
});

app.post('/books', authenticateJWT, (req, res, next) => {
  const { author, country, language, pages, title, year } = req.body;

  const { role } = req.user;

  if (role != "admin") {
    return res.sendStatus(403);
  }
  
  const newBook = {
    author: author,
    country: country,
    language: language,
    pages: pages,
    title: title,
    year: year,
  };

  books.push(newBook);
  res.status(201).send('Book added successfully!');
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:4000`);
});
