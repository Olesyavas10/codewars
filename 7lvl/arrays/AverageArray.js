function avgArray(arr) {
const result=[]
  for (let i=0; i<arr[0].length; i++)
    {
      let sum = 0;
      for (let k=0; k<arr.length; k++)
        {
          sum += arr[k][i];
        }
      result.push(sum/arr.length)
    }
  return result
}