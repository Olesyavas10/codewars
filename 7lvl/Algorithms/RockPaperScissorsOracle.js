function oracle(gestures) {
  let result=[]
  const beats = {
    rock: 0,
    scissors: 0,
    paper: 0
  }

  for (let i=0; i<gestures.length; i++)
    {
      let gesture=gestures[i]
      
      beats[gesture]++
    }
  
  if (beats.scissors>beats.paper) result.push('rock')
  if (beats.rock>beats.scissors) result.push('paper')
  if (beats.paper>beats.rock) result.push('scissors')
  
  return result.join('/')||'tie'
}