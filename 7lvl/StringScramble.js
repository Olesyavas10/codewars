/* Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.

 */
function scramble(str, arr) {
  let newStr=[]
  for (let i=0; i<arr.length; i++)
    {
      newStr[arr[i]]=str[i]

    }
  return newStr.join(""); 
};