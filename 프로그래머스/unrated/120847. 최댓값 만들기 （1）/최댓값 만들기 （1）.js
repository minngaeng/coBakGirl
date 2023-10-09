// const solution = numbers => {
//     // 첫번째 큰거 
//      const first =  numbers.reduce((prev, cur) => Math.max(prev,cur) ,1)
//      // 첫번째 큰값 빼고 만든 배열 
//   let firsts = numbers.filter((el) => el !== first)
//   // 두번째 큰거 
//    let second = firsts.reduce((prev,cur) => Math.max(prev,cur),1)
//      return  first * second
    
//     }

const solution = numbers => {
    const array = numbers.sort((a,b) => b-a)
    
    return array [0] * array[1]
}