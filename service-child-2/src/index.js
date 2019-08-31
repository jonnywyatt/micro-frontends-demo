import http from 'http';

let app = require('./server').default;

const server = http.createServer(app);

const port = process.env.PORT;

server.listen(port, error => {
  if (error) {
    console.log(error);
  }

  console.log(`🚀 started on ${port}`);
});
