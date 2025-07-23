/* Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 */
// Solution:
function boolToWord( bool ){
  let str = ''
 if (bool == true) {str = 'Yes'}
  else {str ='No'}
  return str
}