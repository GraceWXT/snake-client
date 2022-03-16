// setup interface to handle user input from stdin

const handleUserInput = (input) => {
  if (input === '\u0003') {
    process.stdout.write('Exiting the game.\n');
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;