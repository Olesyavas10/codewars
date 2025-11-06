function fifa(ticket, results){
  let winnings=0
  let result1 = '';
  const [home1, away1] = results[0].split('-').map(Number);
  if (home1 > away1) winnings += Number(ticket['Home'].slice(1)); 
   const [home2, away2] = results[1].split('-').map(Number); 
  if (home2 < away2)  winnings += Number(ticket['Away'].slice(1)); 
   const [home3, away3] = results[2].split('-').map(Number);
 if (home3 === away3)  winnings += Number(ticket['Draw'].slice(1)); 
  
  
    return `£${winnings}`;
}