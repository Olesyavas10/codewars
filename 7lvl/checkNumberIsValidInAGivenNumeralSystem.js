function validateBase(num, base) {
  const letterToNumber=letter=>letter.charCodeAt(0) - 55;
  const array=num.split("").map((el)=>/[a-z]/i.test(el)?letterToNumber(el) : Number(el))
for (let i=0; i<array.length; i++)
  {
    if (array[i]>=base)
      {
        return false
      }
    
  }
  return true
}