function coordinates(degrees, radius) {
  const radians = degrees * Math.PI / 180;
 let x=Math.cos(radians)*radius
 let y=Math.sin(radians)*radius
    return [x, y];
}