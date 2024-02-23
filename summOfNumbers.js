const numbers = [7, 4, 2, 5, 1];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
},0);

console.log(`Sum = ${sum}`);