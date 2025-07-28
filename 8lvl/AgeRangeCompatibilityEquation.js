/* Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

This equation doesn't work when the age <= 14, so if the age <= 14, use this equation instead:
You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form "[min]-[max]"
     */
function datingRange(age){
  if (age<=14)
    {
      let min = Math.floor(age-0.1*age);
      let max = Math.floor(age+0.1*age);
      return `${min}-${max}`
    }
  else {
    let min=Math.floor(age/2+7);
   let  max=2*(age-7);
    return `${min}-${max}`
  }
}