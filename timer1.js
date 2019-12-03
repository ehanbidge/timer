/*
alarm clock / timer which will beep after a specified amount of time has passed.
 The user can specify an unlimited number of alarms using command line arguments

 ie node timer1.js 10 3 5 15 9


 1. No numbers are provided: Easy. It should just not beep at all and end
 immediately since no beeps should get scheduled.
2. An input is a negative number: Ignore/skip any numbers that are negative.
    We can't schedule anything in the past.
3. An input is not a number: Ignore/skip these as well, instead of attempting
   to call setTimeout with a non-number.

   beep: process.stdout.write('\x07');
*/

//get imput from terminal and create an array of times;

let arguements = process.argv.slice(2);
console.log(arguements);

const timer1 = function(array) {

  if (array.length === 0) {
    return;
  }
  for (let i = 0; i < array.length; i++) {
    
    if (array[i] > 0) {
      //console.log(array[i]);
      setTimeout(() => console.log("\007"), array[i] * 1000);
    }

  }
};

timer1(arguements);


