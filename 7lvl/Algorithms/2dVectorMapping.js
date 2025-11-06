function mapVector(vector, circle1, circle2) {
  let k=circle2[2]/circle1[2] //отношение радиусов
  let dx=vector[0]-circle1[0]
  let dy=vector[1]-circle1[1]
  
  let newX=dx*k+circle2[0]
  let newY=dy*k+circle2[1]
  
  const round = n => Math.round(n * 100) / 100;
  return [round(newX), round(newY)]
}