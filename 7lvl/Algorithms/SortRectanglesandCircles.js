function sortByArea(array) {
  const areas = array.map(shape => {
    if (Array.isArray(shape) && shape.length === 2) {
      return { shape, area: shape[0] * shape[1] };
    } else {
      return { shape, area: Math.PI * shape ** 2 };
    }
  });
  
 areas.sort((a, b) => a.area - b.area);
  
   return areas.map(obj => obj.shape);

}

//One more
function sortByArea(array) {
  const areas=array.map(shape=>
                       {
    if (Array.isArray(shape) && shape.length===2) 
      return {shape, area: shape[0]*shape[1]}
    else return {shape, area: Math.PI*shape**2}
  })
  
  areas.sort((a,b)=>a.area-b.area)
  return areas.map(obj => obj.shape); 
}