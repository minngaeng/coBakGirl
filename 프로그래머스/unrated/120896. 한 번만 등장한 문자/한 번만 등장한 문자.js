function solution(s) {
  let newArray = s.split('')
  let result = {}
  let newArray1=[]
   for(let key of newArray){
     result[key] = (result[key] || 0) + 1
   }
  
  for (let key in result) {
   if (result[key] === 1){
     newArray1.push(key)
   }
     
   
     
}
  return newArray1.sort().join('')
  
}