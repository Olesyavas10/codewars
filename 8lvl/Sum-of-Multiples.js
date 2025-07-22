/* Find the sum of all multiples of n below m

Keep in Mind

n and m are natural numbers (positive integers)
m is excluded from the multiples */
function sumMul(n,m){
  const count=Math.floor((m-1)/n)
  
if (n <= 0 || m <= 0) return "INVALID"
  
  return n*count*(count+1)/2
}