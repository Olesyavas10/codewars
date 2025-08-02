/* An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example: */
function solve(arr) {
  let newArr=[]
  for (let i=0; i<arr.length; i++)
    {
      
      if (arr[i]>Math.max(...arr.slice(i+1)))
        {
          newArr.push(arr[i])
         
        }
     
 
    }
 return newArr
  
}