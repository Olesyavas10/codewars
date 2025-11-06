function repeats(arr){
const result=[]
  for (let i=0; i<arr.length; i++)
    {
      let newArr=[...arr.slice(0, i), ...arr.slice(i+1, arr.length)]
      if (!newArr.includes(arr[i]))
        {
          result.push(arr[i])
        }
    }
  return result.reduce((sum, acc)=>sum+acc, 0)
};

//Another solution
function repeats(arr) {
  return arr
    .filter(num => arr.indexOf(num) === arr.lastIndexOf(num))
    .reduce((sum, num) => sum + num, 0);
}