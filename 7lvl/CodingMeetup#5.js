/* You will be given an array of objects (associative arrays in PHP, table in COBOL, dictionaries in Python) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL, dictionary in Python) which includes the count of each coding language represented at the meetup.

 */
function countLanguages(list) {
  let obj={ C: 0, JavaScript: 0, Ruby: 0}
  for (let i=0; i<list.length; i++)
    {
if (list[i].language==="C")
  {
    obj.C++
  }
else if ((list[i].language==="JavaScript"))
  {
    obj.JavaScript++
  }
      else if ((list[i].language==="Ruby"))
  {
    obj.Ruby++
  } 
    }
  return obj
}