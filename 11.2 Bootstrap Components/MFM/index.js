// Imagine you have an array of numbers, like this:
const numbers = [1, 2, 3, 4];
// Let’s say we want to double each number. We could write a loop, but there’s a much easier way — using map():
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8]
//  map() takes a function as an argument.
// It runs that function on every element of the array.
// It returns a new array with the results.
// What’s powerful about map() is that it doesn’t change the original array —
// it creates a brand new one. That’s important for writing clean, predictable code!
// You can use map() for tons of things — like changing strings to uppercase, formatting objects,
// or anything where you need to turn one list into a new version.
// It’s one of the most useful tools when working with arrays in JavaScript.
var array = [];
function fibonnaci(n) {
  if (n === 0) {
    array.push(n);
    return array;
  }
  if (n === 1) {
    array.push(0, n);
    return array;
  }
  if (n > 1) {
  }
}
console.log(fibonnaci(1));
