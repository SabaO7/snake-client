const net = require("net");
const { IP, PORT } = require("./constants");


// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Event handler for incoming data
  conn.on("data", (data) => {
    console.log("Message from server:", data);
  });

  // Event handler for successful connection
  conn.on("connect", (connect) => {
    console.log("Successfully connected to game server");
    conn.write("Name: GR8"); // Send the name message
    //conn.write("Move: up"); // Commented out the "Move: up" command
  });

  return conn;
};

module.exports = { connect };

