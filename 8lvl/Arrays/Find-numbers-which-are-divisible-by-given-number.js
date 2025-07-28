/* Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor. */
function divisibleBy(numbers, divisor){
return  numbers.filter(num=>(num%divisor===0));//фильтруем массив numbers, оставляя только те элементы, которые делятся на divisor без остатка. Возвращаем новый массив с отфильтрованными элементами.
  
}