const solution = rsp => {
    const object ={
        2:0,
        0:5,
        5:2
    }
   const answer = [...rsp].map((el) => object[el])
                               return answer.join('')
    
}
// const solution = rsp => {
//     const answer = []
//     const array = [...rsp]
//     for (let i = 0; i <  rsp.length; i++){
//         if (rsp[i] === '2'){
//              answer.push('0')
//         } else if (rsp[i] === '0'){
//              answer.push('5')
//         } else if (rsp[i] === '5'){
//              answer.push('2')
//         }
//     }
//     return answer.join('')
// }
                