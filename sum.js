console.log(process.argv);

const [, , num,num1] = process.argv;
// const sum = parseInt(num) + parseInt(num2);
const sum=(a, b) => a + b;
console.log(sum(+num, +num1));