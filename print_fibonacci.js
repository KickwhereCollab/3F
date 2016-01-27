/* Print out an array of Fibonacci sequence up to the nth number in the sequence
*/

printFib = (n) => {
  let result = [];
  let num = 0, next = 1;
  for(let i = 0; i <= n; i++) {
    result.push(num);
    let temp = num;
    num = next;
    next = temp + next;
  }
  return result;
};
