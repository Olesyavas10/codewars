function sum(matrix) {
  let diagSum=0;
  for (let i=0; i<matrix.length; i++)
    {
      diagSum=diagSum+matrix[i][i]+matrix[i][matrix.length-1-i]
    }
  return diagSum
}