import http from 'http';
const port = process.env.PORT || 80;
const env = process.env.NODE_ENV || 'undefined';

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(`<h1>Data from backend!</h1><p>NODE_ENV = ${env}</p>`);
});

server.listen(port, () => {
  console.log(`Server available by the url - http://localhost:${port}`);
});