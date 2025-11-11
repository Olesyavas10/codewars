function openOrSenior(data){
  let output=[]
  
  for (let i=0; i<data.length; i++)
    {
      if (data[i][0]<55 || data[i][1]<=7 ) output.push('Open')
     else  output.push('Senior')
  
    }
  return output
}