const express = require('express');
const path = require('path');
const sessions = require('express-session');
const cookieparser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));
app.use(cookieparser());

app.use(
  sessions({
    secret: 'secret sekali',
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
    resave: false,
  })
);

const myusername = 'user1';
const mypassword = 'mypassword';

var session;

app.get('/', (req, res, next) => {
  session = req.session;

  if (session.userid) {
    res.send(`Hello ${myusername} <a href='/logout'>click to logout</a>`);
  }
  res.render('index');
});

app.post('/user', (req, res, next) => {
  const { username, password } = req.body;
  if (username === myusername && password === mypassword) {
    session = req.session;
    session.userid = username;
    res.send(`Hello ${myusername} <a href='/logout'>click to logout</a>`);
  } else {
    res.redirect('/');
  }
});

app.get('/logout', (req, res, next) => {
  req.session.destroy;
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
