const http = require('http');

const port = 8000;

const listener = (req, res) => {
  const endpoint = req.url;

  let message = '';

  switch (endpoint) {
    case '/':
      message = 'Hello World!';
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(message);
      break;
    case '/about':
      message = 'Welcome to about us page';
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(message);
      break;
    case '/contact':
      message = 'Welcome to contact us page';
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(message);
      break;
    default:
      message = 'Hello World!';
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(message);
      break;
  }

  res.end();
};

const server = http.createServer(listener);

server.on('listening', () => {
  console.log(`Server listening on http://127.0.0.1:${port}`);
});

server.listen(port);
