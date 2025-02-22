function foo(x) {
  if (x === null) {
    return 0;
  } else if (x === undefined) {
    return -1; // Or handle undefined as needed
  } else if (x > 10) {
    return x * 2;
  } else {
    return x + 1;
  }
}

console.log(foo(null)); // 0
console.log(foo(12));  // 24
console.log(foo(5));   // 6
console.log(foo(undefined)); // -1