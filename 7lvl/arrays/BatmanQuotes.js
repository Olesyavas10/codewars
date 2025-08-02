/* Batman & Robin have gotten into quite a pickle this time. The Joker has mixed up their iconic quotes and also replaced one of the characters in their names, with a number. They need help getting things back in order.

Implement the getQuote method which takes in an array of quotes, and a string comprised of letters and a single number (e.g. "Rob1n") where the number corresponds to their quote indexed in the passed in array.

Return the quote along with the character who said it: */
let getQuote = function(quotes, hero){
  let num=hero.match(/\d+/);
  for(let i=0; i<hero.length;i++)
    {
      if (hero[i]=="R")
        {
          return `Robin: ${quotes[num[0]]}`
        }
      else if (hero[i]=="J")
        {
          return `Joker: ${quotes[num[0]]}`
        }
      else {
        return `Batman: ${quotes[num[0]]}`
      }
    }
}

