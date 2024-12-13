/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:

function createSequence(length, num1 = Math.floor(Math.random() * 16), num2 = Math.floor(Math.random() * 16)) {
    if (length === 0) {
      return [];
    }
  
    const sequence = [num1, num2];
    return sequence.concat(createSequence(length - 2, num2, (num1 + num2) * 2));
  }
  
  const mySequence = createSequence(10);
  console.log(mySequence);