const counter = arr => {
  return `There are ${arr.length} elements in this array`;
};
const adder = (a, b) => {
  return `The sum of the two numbers is : ${a + b}`;
};

const PI = 3.142;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.PI = PI;

// module.exports.counter = arr => {
//   return `There are ${arr.length} elements in this array`;
// };
// module.exports.adder = (a, b) => {
//   return `The sum of the two numbers is : ${a + b}`;
// };

// module.exports.PI = 3.142;

module.exports = {
  counter: counter,
  adder: adder,
  PI: PI
};
