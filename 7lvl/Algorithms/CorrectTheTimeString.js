function timeCorrect(timestring) {
  
  let result=''
  
  if (timestring=='') return ''
  if (!timestring) return null
  
  const time=timestring.split(':')
  if (time.length !== 3) return null;
  let [h, m, s] = time.map(Number);
  if ([h, m, s].some(isNaN)) return null; 
  
 
  m+=Math.floor(s/60)
  s=s%60
  
   h+=Math.floor(m/60)
  m=m%60
  
  h=h%24
  
  const pad = n => n.toString().padStart(2, '0');
  return `${pad(h)}:${pad(m)}:${pad(s)}`
}