function arbitrate(input, n) {
  
  for (let i=0; i<n; i++)
    {
      if (input[i]==='1') return input.slice(0, i+1)+'0'.repeat(n-1-i)
    }
return input
}