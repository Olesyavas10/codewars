function generatePairs(n) {
  let arr=[]
  for (let i=0; i<n+1; i++)
    {
      for (let j=i; j<n+1; j++)
        {
          arr.push([i, j])
        }
      
    }
  return arr
}