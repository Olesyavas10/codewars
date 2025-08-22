function binaryToString(binary) {
  
 
return binary.split("0b").filter(el=>el!=="").map(b => String.fromCharCode(parseInt(b, 2))).join("")
    
}