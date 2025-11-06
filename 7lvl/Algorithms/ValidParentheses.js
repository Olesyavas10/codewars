function validParentheses(parenStr) {
 
  let balance=0;
  for (char of parenStr)
    {
      if (char==='(') balance++
      if (char===')') balance--
      
      if (balance<0) return false
    }
  
  return balance===0
}