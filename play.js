const connect = require("./client");
const { setupInput, handleUserInput } = require("./input");
const net = require("net");


console.log("Connecting ...");
connect();


const stdin = setupInput();
stdin.on("data", handleUserInput);
