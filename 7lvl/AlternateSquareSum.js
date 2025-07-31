/* The values at even positions need to be squared. For a language with zero-based indices, this will occur at oddly-indexed locations. For instance, in Python, the values at indices 1, 3, 5, etc. should be squared because these are the second, fourth, and sixth positions in the list.

 */
function alternateSqSum(arr){
    let sum=0
  for (let i=0; i<arr.length;i++)
    {
    
      if (i%2===1)
        {
          sum+=arr[i]*arr[i]
         
        }
      if (i%2===0)
        {
          sum+=arr[i]
        }
      
    }
  return sum
  console.log(sum)
}