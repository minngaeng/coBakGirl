
// const solution =(s1,s2) =>{
//     // const count = 0
//     // s1.reduce((prev,cur) => )
//     // const new =  [...s1, ...s2] 
//     // new.map((el) => el === new[])
//     return  s1.filter((el) => s2.includes(el)).length
                             
// }

const solution =(s1,s2) => {
    const answer = s1.reduce((prev,cur) => {
        if (s2.includes(cur))  prev++
        return prev
    } ,0)
    return answer
}