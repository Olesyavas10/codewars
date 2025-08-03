/* Given a number n we will define it's sXORe to be 0 XOR 1 XOR 2 ... XOR n where XOR is the bitwise XOR operator.

Write a function that takes n and returns it's sXORe.

 */
const sxore = function(n){
  if (n%4==0)
    {
      return n
    }
  else if (n%4==1)
    {
      return 1
    }
  else if (n%4==2)
    {
      return n+1
    }
  else if (n%4==3)
    {
      return 0
    }
  
}