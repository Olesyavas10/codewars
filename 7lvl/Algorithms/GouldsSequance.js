
function* gould() {
  for (let i = 0; i < Infinity; i++) {
     const exponent = i.toString(2).replace(/0/g, '').length;
    yield exponent;
  }
 
}