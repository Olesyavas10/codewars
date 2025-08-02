/* You will be given an array of objects (associative arrays in PHP, table in COBOL, dictionaries in Python) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL, dictionary in Python) which includes the count of each coding language represented at the meetup.

 */
function countLanguages(list) {
  let obj={}
  for (let i=0; i<list.length; i++)
    {
let lang=list[i].language
obj[lang] = (obj[lang] || 0) + 1; //смотрим есть ли уже такой язык в объекте, если есть, то увеличиваем счетчик на 1, если нет, то создаем его со значением 1
    }
  return obj
}