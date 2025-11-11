function uniquePush(arr, obj) {
if (!obj.phoneNumber) return false
  const exists = arr.some(item => item.phoneNumber === obj.phoneNumber);
  
  if (!exists)
   {
    arr.push(obj) 
    return true}
  else return false
  
}