const solution = (a, b) => {
 
    
    const strSum = String(a) + String(b)
    
    const numMul = 2 * a * b
    
   if (strSum === numMul) {
       return Number(strSum)
   } 
    
    return strSum > numMul ? Number(strSum) : numMul
}