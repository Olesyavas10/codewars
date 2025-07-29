/* Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence [] */
function first(arr, n) {
  let newArray=[]
  if (n==0)
    {
      return []
    }
  else if (n>1)
  {
     
    return arr.slice(0,(n))
  }
  
  else {
    return [arr[0]]
  }
}

/* function first(arr, n=1) {
   return arr.slice(0,n);
} */ //умный вариант
