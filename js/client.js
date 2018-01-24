const net = require('net');

const client = new net.Socket();

client.connect(6969, '0.0.0.0', function () {
  console.log('Connected');
  process.stdin.pipe(client);
});

client.on('end', () => {
  console.log('Disconnected from server');

});

client.on('data', (data) => {
  console.log(":" + data.toString('utf8'));
});