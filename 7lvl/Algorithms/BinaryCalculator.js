/* In this kata you need to write a function that will receive two strings (n1 and n2), each representing an integer as a binary number. A third parameter will be provided (o) as a string representing one of the following operators: add, subtract, multiply.

Your task is to write the calculate function so that it will perform the arithmetic and the result returned should be a string representing the binary result.

 */
function calculate(n1, n2, o) {
 let result=0
  if (o=='add')
    {
      result= (parseInt(n1,2)+parseInt(n2,2)).toString(2)
    }
   else if (o=='subtract')
    {
      
      result= (parseInt(n1,2)-parseInt(n2,2)).toString(2)
    }
  else 
    {
      
      result= (parseInt(n1,2)*parseInt(n2,2)).toString(2)
    }
  return result
  
}