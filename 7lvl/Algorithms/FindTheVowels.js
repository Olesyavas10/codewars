function vowelIndices(word){
 const vowels=['a','e','i','o','u','y']
 const result=[]
 const arr=word.toLowerCase().split('')
 
 for (let i=0; i<arr.length; i++)
   {
     if (vowels.includes(arr[i])) result.push(i+1)
   }
  return result
}