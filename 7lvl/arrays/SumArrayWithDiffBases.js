function sumItUp(numbersWithBases){
  let sum=0
  for (let i=0; i<numbersWithBases.length; i++)
    {
      sum+=parseInt(numbersWithBases[i][0],numbersWithBases[i][1])
    }
  return sum
}

//Another solution
sumItUp=a=>a.reduce((a,[n,b])=>a+parseInt(n,b),0)