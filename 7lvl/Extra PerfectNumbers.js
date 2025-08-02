/* An extra perfect number is a positive integer whose first and last bits in binary representation are set (i.e., both are 1).

Task

Given a positive integer N, return all the extra perfect numbers in the range from 1 to N, inclusive.

Warm-up (Recommended)

Part of the Playing With Numbers Series

Notes

The input is always a positive integer.
The returned list/array should contain the extra perfect numbers in ascending order, from lowest to highest.
Extra perfect numbers correspond to binary representations that start and end with 1.
 */
function extraPerfect(n){
  let result=[]
  for (let i=1; i<n+1; i++)
    {
      if (i.toString(2)%2==1)
        {
          result.push(i)
        }
      
    }
  return result
}