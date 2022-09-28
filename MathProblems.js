// Math AlgorithmsF

// fibonacci
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  return fib;
}

// console.log(fibonacci(12));

// factorial of number

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(factorial(5));






