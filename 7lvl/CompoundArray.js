/* You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

Input - {1,2,3,4,5,6} and {9,8,7,6} 
Output - {1,9,2,8,3,7,4,6,5,6} */
function compoundArray(a, b) {
  let output=[]
  let newOutput=[]
  if (a.length<b.length)
    {
      let b1=b.slice(a.length)
      for (let i=0; i<a.length; i++)
        {
          output.push(a[i], b[i]) 
        }
      return [...output,...b1]
    }
  if (b.length<=a.length)
    {
      let a1=a.slice(b.length)
      for (let i=0; i<b.length; i++)
        {
          output.push(a[i], b[i]) 
        }
      return [...output,...a1]
    }
}