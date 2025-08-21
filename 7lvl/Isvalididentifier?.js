function isValid(idn) {
  const array=idn.split("")
  if (!(/^[a-z$_]$/i.test(array[0])))
    {
       return  false;
      }
   for (let i=1; i<array.length; i++)
   {
          if (!/^[a-z0-9$_]$/i.test(array[i]))
            {
               return false
            }
           
        }
    
  return  true;
}