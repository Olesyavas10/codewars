function womensAge(n) {
  
  let rad=Math.floor(n/2)
  let age=n%2 ===0?20:21
  
  return `${n}? `+'That\'s just '+`${age}`+', in base '+ `${rad}`+'!'
}