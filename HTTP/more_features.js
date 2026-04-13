// here it what in the req object

//=> here is the prop which get us the url which is gonna be the address

const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Welcome to our home page');
  res.end();
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});