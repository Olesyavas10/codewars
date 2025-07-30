/* You are the developer working on a website which features a large counter on its homepage, proudly displaying the number of happy customers who have downloaded your companies software.

You have been tasked with adding an effect to this counter to make it more interesting.

Instead of just displaying the count value immediatley when the page loads, we want to create the effect of each digit cycling through its preceding numbers before stopping on the actual value.
As a step towards achieving this; you have decided to create a function that will produce a multi-dimensional array out of the hit count value. Each inner dimension of the array represents an individual digit in the hit count, and will include all numbers that come before it, going back to 0.

Rules

The function will take one argument which will be a four character string representing hit count
The function must return a multi-dimensional array containing four inner arrays
The final value in each inner array must be the actual value to be displayed
Values returned in the array must be of the type number
 */
function counterEffect(hitCount) {

let array=hitCount.split("").map(Number)
//можно добавить еще один цикл, чтобы проверить, что все элементы массива 
let arr0=[array[0]]
let arr1=[array[1]]
let arr2=[array[2]]
let arr3=[array[3]]
for (let i=0; i<array[0]; i++)
  {
    arr0.push(i)
  }
for (let i=0; i<array[1]; i++)
  {
    arr1.push(i)
  }
  for (let i=0; i<array[2]; i++)
  {
    arr2.push(i)
  }
  for (let i=0; i<array[3]; i++)
  {
    arr3.push(i)

  }
console.log(arr0)
return [arr0.sort((a, b)=>a-b), arr1.sort((a, b)=>a-b), arr2.sort((a, b)=>a-b), arr3.sort((a, b)=>a-b)]
 
}