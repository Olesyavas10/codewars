function process2Arrays(arr1, arr2) {
    let bothArrs=0;
  let remainArr1=arr1.length;
  let remainArr2=arr2.length;
  let len=Math.max(arr1.length, arr2.length)
  for (let i=0; i<len; i++)
    {
      if (arr1.includes(arr2[i])) bothArrs++
      if (arr1.includes(arr2[i])) remainArr1--
      if (arr2.includes(arr1[i])) remainArr2--
    }
  let oneArr=arr1.length+arr2.length-2*bothArrs
  
    return [bothArrs, oneArr, remainArr1, remainArr2 ];
}
//Another solution
function process2Arrays(arr1, arr2) {
  const s = new Set(arr1), t = new Set(arr2);
  const i = new Set([...s].filter(x => t.has(x)));
  const dst = new Set([...s].filter(x => !t.has(x)));
  const dts = new Set([...t].filter(x => !s.has(x)));
  return [i.size, dst.size + dts.size, dst.size, dts.size];
}