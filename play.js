const { connect } = require("./client");

connect();

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)

// setup interface to handle user input from stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = (input) => {
    if (input === '\u0003') {
      process.stdout.write('Exiting the game.\n');
      process.exit();
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();

