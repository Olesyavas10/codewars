function displayValue(value) {
     let str = '';
  
  const monthMin = 28 * 24 * 60;
  const weekMin = 7 * 24 * 60;
  const dayMin = 24 * 60;
  const hourMin = 60;
  
  let months = Math.floor(value / monthMin);
  value %= monthMin;
  let weeks = Math.floor(value / weekMin);
  value %= weekMin;
  let days = Math.floor(value / dayMin);
  value %= dayMin;
  let hours = Math.floor(value / hourMin);
  let minutes = value % hourMin;
  
  if (months) str += ` ${months} month${months>1?'s':''}`;
  if (weeks) str += ` ${weeks} week${weeks>1?'s':''}`;
  if (days) str += ` ${days} day${days>1?'s':''}`;
  if (hours) str += ` ${hours} hour${hours>1?'s':''}`;
  if (minutes) str += ` ${minutes} minute${minutes>1?'s':''}`;
  
  return str.trim();
}