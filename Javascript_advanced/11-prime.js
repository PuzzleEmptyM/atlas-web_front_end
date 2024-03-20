function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

function countPrimeNumbers() {
  let count = 0;
  for (let number = 2; number <= 100; number++) {
    if (isPrime(number)) {
      count++;
    }
  }
  return count;
}

let startTime = performance.now();

// Wrap the calculation in a single setTimeout to start after current call stack clears
setTimeout(() => {
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
  let endTime = performance.now();
  console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
}, 0);
