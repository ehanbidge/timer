/*
The user can press b and it should beep right away
The user can input any number from 1 to 9 and it should
immediately output "setting timer for x seconds...", and
beep after that number of seconds has passed
The user can use ctrl + c to exit the program, at which 
point the program should say "Thanks for using me, ciao!" before terminating
*/

const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

const userInput = ['1','2','3','4','5','6','7','8','9'];

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
// \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!");
    process.exit();
  }
  if (userInput.includes(key)) {
    process.stdout.write(`setting timer for ${key} seconds`);
    setTimeout(() => console.log("\007"), key * 1000);
  }
  else if (key === 'b') {
    console.log("\007");
  }

  
});



