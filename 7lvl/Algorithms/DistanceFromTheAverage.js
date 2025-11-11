function distancesFromAverage(arr) {
 let sum=arr.reduce((acc, num)=>acc+num, 0)
 return arr.map(num=>Math.round((-num+sum/arr.length)*100)/100)
}