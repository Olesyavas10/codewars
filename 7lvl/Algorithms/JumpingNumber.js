function jumpingNumber(n){
 if (n<10) return "Jumping!!"
let arr=n.toString().split('').map(num=>Number(num))

for (let i=0; i<arr.length-1; i++)
  {
    if (Math.abs(arr[i]-arr[i+1])!==1) return "Not!!"
  }
  return 'Jumping!!'
}