/* Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number. */
function squareOrSquareRoot(array) {
  for (let i=0; i<array.length; i++)
    {
      if ((Math.sqrt(array[i]))%1===0)
        {
          array[i]=Math.sqrt(array[i])
        }
    else 
      {
        array[i]=array[i]*array[i]
      }
      }
  return array
}