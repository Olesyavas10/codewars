function piecesValue(arr, s) {
 let black=[]
  let white=[]
  
   let output=0
  const hash = {
  queen: 9, rook: 5, bishop: 3, knight: 3, pawn: 1
};
  
  for (let i=0; i<8; i++)
    {
      const newArr=arr[i].filter(el => el !==" ")
      black=newArr.filter(el=>el.match(/b-/)).map(el => el.replace("b-", ""));
      white=newArr.filter(el=>el.match(/w-/)).map(el => el.replace("w-", ""));
     let whiteSum= white.reduce((acc, el)=>{return acc+(hash[el]||0)}, 0)
  let  blackSum=  black.reduce((acc, el)=>{return acc+(hash[el]||0)}, 0)
      
      if (s=="white")
        {
          output+=whiteSum
        }
      else {
         output+= blackSum
      }
     
    }
return output
  
}