/* You are working at a lower league football stadium and you've been tasked with automating the scoreboard.

The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!

e.g. "The score is four nil" should return [4,0]

Either teams score has a range of 0-9, and the ref won't say the same string every time e.g. */
function scoreboard(string) {
  
  let arrayStr=string.split(" ") 
   const scores = {
    "nil": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
  };

      /* if (arrayStr[arrayStr.length-2]==='nil')
        {
          arrayStr[arrayStr.length-2]=0
        }
      else  if (arrayStr[arrayStr.length-2]==='one')
        {
          arrayStr[arrayStr.length-2]=1
        }
       else  if (arrayStr[arrayStr.length-2]==='two')
        {
          arrayStr[arrayStr.length-2]=2
        }
       else  if (arrayStr[arrayStr.length-2]==='three')
        {
          arrayStr[arrayStr.length-2]=3
        }
       else  if (arrayStr[arrayStr.length-2]==='four')
        {
          arrayStr[arrayStr.length-2]=4
        }
       else  if (arrayStr[arrayStr.length-2]==='five')
        {
          arrayStr[arrayStr.length-2]=5
        }
       else  if (arrayStr[arrayStr.length-2]==='six')
        {
          arrayStr[arrayStr.length-2]=6
        }
       else  if (arrayStr[arrayStr.length-2]==='seven')
        {
          arrayStr[arrayStr.length-2]=7
        }
       else  if (arrayStr[arrayStr.length-2]==='eight')
        {
          arrayStr[arrayStr.length-2]=8
        }
       else  if (arrayStr[arrayStr.length-2]==='nine')
        {
          arrayStr[arrayStr.length-2]=9
        }
 if (arrayStr[arrayStr.length-1]==='nil')
        {
          arrayStr[arrayStr.length-1]=0
        }
      else  if (arrayStr[arrayStr.length-1]==='one')
        {
          arrayStr[arrayStr.length-1]=1
        }
       else  if (arrayStr[arrayStr.length-1]==='two')
        {
          arrayStr[arrayStr.length-1]=2
        }
       else  if (arrayStr[arrayStr.length-1]==='three')
        {
          arrayStr[arrayStr.length-1]=3
        }
       else  if (arrayStr[arrayStr.length-1]==='four')
        {
          arrayStr[arrayStr.length-1]=4
        }
       else  if (arrayStr[arrayStr.length-1]==='five')
        {
          arrayStr[arrayStr.length-1]=5
        }
       else  if (arrayStr[arrayStr.length-1]==='six')
        {
          arrayStr[arrayStr.length-1]=6
        }
       else  if (arrayStr[arrayStr.length-1]==='seven')
        {
          arrayStr[arrayStr.length-1]=7
        }
       else  if (arrayStr[arrayStr.length-1]==='eight')
        {
          arrayStr[arrayStr.length-1]=8
        }
       else  if (arrayStr[arrayStr.length-1]==='nine')
        {
          arrayStr[arrayStr.length-1]=9
        } */ //лучше через словарь
 
    
 return [scores[arrayStr[arrayStr.length-2]], scores[arrayStr[arrayStr.length-1]]]
}