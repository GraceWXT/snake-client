const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // change to IP address of computer or ngrok host if tunneling
    port: 50541 // or change to the ngrok port if tunneling
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(`${data}`)
  });

  return conn;
};

console.log("Connecting ...");
connect();