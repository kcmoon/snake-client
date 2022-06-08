const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You are now connected.")
  });

  conn.on("data", () => {
    console.log('You dead! You idled.')
  });

  return conn;
};

console.log("Connecting ...");
connect();