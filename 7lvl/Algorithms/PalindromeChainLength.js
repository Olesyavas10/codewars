
var palindromeChainLength = function(n) {
  let steps=0;

 
  
  while (n!==Number(n.toString().split('').reverse().join('')))
    {
      const newN=Number(n.toString().split('').reverse().join(''))
      n=n+newN
      steps++
    }
  
  return steps;
};