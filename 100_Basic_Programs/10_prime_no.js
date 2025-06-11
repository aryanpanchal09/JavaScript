/* 
FUNCTION isPrime(num)
    IF num <= 1 THEN
        RETURN false
    IF num == 2 THEN
        RETURN true
    IF num is divisible by 2 THEN
        RETURN false

    FOR i FROM 3 TO square root of num, increment by 2 DO
        IF num is divisible by i THEN
            RETURN false

    RETURN true

FUNCTION primesUpTo(n)
    CREATE empty list called primes
    FOR i FROM 2 TO n DO
        IF isPrime(i) THEN
            ADD i to primes
    RETURN primes
*/

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

const number = 111;
console.log(isPrime(number));

function primesUpTo(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

console.log(primesUpTo(number));
