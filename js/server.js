const net = require('net');

let connections = [];

const server = net.createServer((socket) => {
  console.log('Client connected');
  socket.on('end', () => {
    console.log('Client disconnected');
  });
//   socket.write('You are connected\r\n');
//   socket.userList = {};
// if(socket.userList.userName === undefined){
//   socket.write('Please enter a username');
//   socket.userList.userName = `${chunk}`
// }
  
//socket.write('Please enter a username');
socket.write('You are connected\r\n');
connections.push(socket);

socket.userList = {};

if (socket.userList.name === undefined){
  socket.write('Please enter a username');
}
//connections.DATATA

socket.on('data', (chunk) => {

  let chunkStr = chunk.toString('utf8');

if (socket.userList.name === undefined){
socket.userList.name = chunkStr.trim();
console.log(socket.userList.name);
  }else{
    let userName = socket.userList.name;
  
console.log(chunkStr);

    connections.filter(element => {
        return element !== socket;
      })
      .forEach(element => {
        element.write(`${userName} ${chunk}`);
      });
    };
  });
})

server.on('error', (err) => {
  throw err;
});

server.listen(6969, '0.0.0.0', () => {
  console.log('server bound');
});