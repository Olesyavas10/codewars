function matrixDiagonal(matrix,value) {
  let sum=0
  let n=matrix.length
  for (let i=0; i<n; i++)
    {
      let j=i-value //сдвиг
      if (j>=0 && j<n)
        {
           sum+=matrix[i][j]
        }
     
    }
 
  return sum
}