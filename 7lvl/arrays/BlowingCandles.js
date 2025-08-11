function blowCandles(str) {
  let moves=0;
 let arr=str.split('').map(Number)
  for (let i=0; i<arr.length; i++)
    {
      while (arr[i]>0)
        {
          moves++
     for (let j = i; j < i + 3 && j < arr.length; j++) {
        if (arr[j] > 0) arr[j]--;
       }
        }
    }
  return moves
}