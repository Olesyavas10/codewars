/* Given a length, an offset, and a list, slide a window of that length, moving by that offset every step, over the list, returning a list of lists.

The windows may overlap each other, or skip certain elements. All windows should be of the given length; if insufficient elements remain after a certain offset, end the list of lists. It is possible to take 0 elements from an empty list, so take care to handle window(0,offset,list) correctly.

The length will always be non-negative; the offset will always be strictly positive.

 */
function window(length,offset,list) {
  let result=[]
  if (length===0)
    {
      for (let i=0; i<=list.length; i+=offset)
        {
          result.push([])
        }
      return result
    }
  else
    {
  for (let i=0; i+length<=list.length; i+=offset)
    {
      
      result.push(list.slice(i,i+length))
      
    }
  return result}
}