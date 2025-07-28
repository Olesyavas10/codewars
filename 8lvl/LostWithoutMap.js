/* Given an array of integers, return a new array with each value doubled.

 */
function maps(x){
  let NewX=[]
  for (let i=0; i<x.length; i++)
    {
      NewX[i]=x[i]*2 // x.map(n => n * 2); map создаёт новый массив, применяя функцию к каждому элементу.
    }
return NewX
} 