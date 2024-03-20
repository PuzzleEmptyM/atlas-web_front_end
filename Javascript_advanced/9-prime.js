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
let primeCount = countPrimeNumbers();
let endTime = performance.now();

console.log(`Number of primes found: ${primeCount}`);
console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);
