const net = require('net');
const { IP, PORT, msgOnConnect, username } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: IP, // change to IP address of computer or ngrok host if tunneling
    port: PORT // or change to the ngrok port if tunneling
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(`${data}`);
  });
  conn.on("connect", () => {
    console.log(`${msgOnConnect}`);
    conn.write(`Name: ${username}`);
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, 600);
  });
  return conn;
};

// connect();

module.exports = { connect };