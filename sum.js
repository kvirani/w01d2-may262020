// Write a node program that takes in an unlimited number of command line arguments, 
//   goes through each and prints out the sum of them.

let data = process.argv.slice(2);

let sum = 0;

for (let numStr of data) {
  let num = Number(numStr);
  sum += num;
}

console.log('final sum: ', sum);

