function maxDiff(list) {
  if (list.length<=1) return 0
  list.sort((a, b)=>b-a)
  
  return list[0]-list[list.length-1]
};