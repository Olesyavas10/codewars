function shuffleIt(arr,...ex){
  
  for (let [a,b] of ex)
    {
      [arr[a], arr[b]]=[arr[b], arr[a]]
    }
  return arr
    
}