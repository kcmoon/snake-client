let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key));
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log('terminating program')
    process.exit();
  };
  if (key === 'w') {
    connection.write('Move: up');
  };
  if (key ==='a') {
    connection.write('Move: left');
  };
  if (key === 's') {
    connection.write('Move: down');
  };
  if (key === 'd') {
    connection.write('Move: right');
  };
  if (key === 'b') {
    connection.write('Say: Beep Beep!');
  };
};

module.exports = {
  setupInput
}