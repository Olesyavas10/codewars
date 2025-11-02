function itinerary(travel) {
  
  const result = [travel[0].in];
  
  for (let i=0; i<travel.length; i++) {
    // Добавляем out, если он не совпадает с последним аэропортом
    if (i > 0 && travel[i].in !== travel[i-1].out) {
      result.push(travel[i].in);
    }
    result.push(travel[i].out)
  }
  
  return result.join('-');
  
}