function numberIncreasing(n) {
  for (let i=0; i<20000; i++)
    {
      for (let j=0; j<=10; j++)
        {
          if (n===1*Math.pow(3, j)+i*5)
            {
               return true
            }
        }
     
    }
  return  false ;
}