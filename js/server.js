const net = require('net');

let connections = [];

const server = net.createServer((socket) => {
  console.log('Client connected');
  socket.on('end', () => {
    console.log('Client disconnected');
  });
  socket.write('You are connected\r\n');
  connections.push(socket);

  socket.on('data', (chunk) => {
    socket.setEncoding('utf8');
    console.log(chunk.toString('utf8'));

    connections.filter(element => {
        return element !== socket;
      })
      .forEach(element => {
        element.setEncoding('utf8');
        element.write(chunk)
      })
  });
})

server.on('error', (err) => {
  throw err;
});

server.listen(6969, '0.0.0.0', () => {
  console.log('server bound');
});