/* Write a function that checks if two non-negative integers make an "interlocking binary pair".

Interlock ?

numbers can be interlocked if their binary representations have no 1's in the same place
comparisons are made by bit position, starting from right to left (see the examples below)
when representations are of different lengths, the unmatched left-most bits are ignored
 */
function interlockable(a, b) {
  
  return (a & b) == 0; //1011*0100=0; 1011*1000=1000!=0
}