/* There are several katas like "Flatten a list". These katas are done by so many warriors, that the count of available list to flatten goes down!

So you have to build a method, that creates new arrays, that can be flattened!

In short: You have to unflatten a list/an array.

You get an array of integers and have to unflatten it by these rules: */

function unflatten(flatArray) {
let unflatten=[]
  for (let i=0; i<flatArray.length; i++)
    {
      if (flatArray[i]<3)
        {
          unflatten.push(flatArray[i])
          
        }
      else if (flatArray[i]>2)
        {
          unflatten.push(flatArray.slice(i, i+flatArray[i]))
          i+=flatArray[i]-1
        }
    }
  return unflatten
}