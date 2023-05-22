const { connect } = require("./client");
const { setupInput } = require("./input");
const net = require("net");

const conn = connect();
setupInput(conn);

console.log("Connecting ...");