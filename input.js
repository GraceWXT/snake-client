const { shortMsg } = require("./constants");

// setup interface to handle user input from stdin

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)

// Stores the active TCP connection object.
let connection;

//keep handler outside for better readability, and easiler testing
const handleUserInput = (input) => {
  if (input === '\u0003') {
    process.stdout.write('Exiting the game.\n');
    process.exit();
  }
  if (input === "w") {
    // console.log("You pressed 'w'.\n")
    connection.write("Move: up");
  }
  if (input === "a") {
    // console.log("You pressed 'a'.\n")
    connection.write("Move: left");
  }
  if (input === "s") {
    // console.log("You pressed 's'.\n")
    connection.write("Move: down");
  }
  if (input === "d") {
    // console.log("You pressed 'd'.\n")
    connection.write("Move: right");
  }
  for (let key of Object.keys(shortMsg)) {
    if (input === key) {
      connection.write(`Say: ${shortMsg[key]}`);
      // console.log(`${shortMsg[key]}`);
    }
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;