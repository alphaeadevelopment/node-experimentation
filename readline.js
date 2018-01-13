(function() {
  
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();

  const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl2.prompt(false);

  rl2.on('line', (input) => {
    
    if (input === 'end') rl2.close()
    readline.cursorTo(process.stdout, 5, 5);
  });
});

})();