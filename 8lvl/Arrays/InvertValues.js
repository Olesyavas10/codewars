/* Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives. */
function invert(array) {
for (let i=0; i<array.length; i++)
  {
    array[i]=array[i]*(-1); //return array.map(num => -num); лучше Он проходит по каждому элементу массива и возвращает новый массив с результатами применения функции к каждому элементу. Оригинальный массив не меняется.
  }
   return array;
}