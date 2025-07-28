/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

//Solution:
function sumMix(x){
 
  return x.reduce((sum, val) => sum + Number(val), 0);

} // number(val) приводит val к числу, reduce суммирует все значения массива, начиная с начального значения 0
console.log(sumMix([1, '2', 3, '4', 5])); // Output: 15