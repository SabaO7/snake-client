// setup interface to handle user input from stdin

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  return stdin;
};

let interval;

const handleUserInput = (key) => {
  const move = function (key) {
    clearInterval(interval);
    interval = setInterval(() => {
      connection.write(key);
    }, 100);
  };

  if (key === 'x') {
    move("Move: wrong button!");
  }  
  if (key === '1') {
    move("Move: what are you doing?");
  }  
  if (key === 'w') {
    move("Move: up");
  }  
  if (key === 'a') {
    move("Move: left");
  } 
  if (key === 's') {
    move("Move: down");
  } 
  if (key === 'd') {
    move("Move: right");
  } 
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput };
