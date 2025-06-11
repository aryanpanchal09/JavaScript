function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial([10]));

/* 
Recersive function 
10 - 10 9 8 7 6 5 4 3 2 1 
array store - multiply 
missing element use 

multiply for loop ... 
condition 0 1 and 2 
same answer 

Pseudo Code 
FUNCTION factorial(n)
    IF n is 0 OR n is 1 THEN
        RETURN 1

    SET result to 1

    FOR i FROM 2 TO n DO
        result = result * i

    RETURN result
*/
