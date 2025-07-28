/* Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples */
function countBy(x, n) {
  let numbers=[]
  for (let i=1; i<=(n*x); i++)
    {
      numbers.push(i);
    }
  return numbers.filter(num=>(num%x===0));
}