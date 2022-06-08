const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You are now connected.");
  });
  
  conn.on("connect", () => {
    conn.write("Name: KCM");
  });

  conn.on("data", () => {
    console.log('You dead! You idled.');
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
connect
};