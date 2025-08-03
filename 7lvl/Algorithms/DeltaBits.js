/* Complete the function to determine the number of bits required to convert integer A to integer B (where A and B >= 0)

The upper limit for A and B is 216, int.MaxValue or similar.

For example, you can change 31 to 14 by flipping the 4th and 0th bit:

 */
function convertBits(a, b){
  let diff=a^b

  return diff.toString(2).split('1').length-1
}