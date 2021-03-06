const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

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

app.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  const user = users.find(
    (el) => el.username === username && el.password === password
  );

  if (user) {
    const token = jwt.sign(
      {
        username: user.username,
        password: user.password,
        role: user.role,
      },
      accessTokenSecret
    );
    res.json({ accessToken: token });
  } else {
    res.send('Failed to login');
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:3000`);
});
