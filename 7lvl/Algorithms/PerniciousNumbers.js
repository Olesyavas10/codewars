/* A pernicious number is a positive integer whose binary digit sum (or Hamming weight) is a prime number.

25 = 11001  -->  digit sum = 3 --> 3 is prime --> therefore 25 is a pernicious number 

75 = 1001011  -->  digit sum = 4 --> 4 is not prime --> therefore 75 is not a pernicious number
#Task

Your job is to create a function that will list all of the pernicious numbers up to the given value (inclusive). The values given will increase in size, meaning the list will be very large.

 */
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
} //ФУНКЦИЯ НА ПРОСТОЕ ЧИСЛО

function pernicious(n) {
  let result = [];
  if (n < 2) return "No pernicious numbers";

  for (let i = 2; i <= n; i++) {
    let count = i.toString(2).split("1").length - 1; // кол-во 1 в бинарном числе
    if (isPrime(count)) {
      result.push(i);
    }
  }

  return result.length>0? result:"No pernicious numbers";
}