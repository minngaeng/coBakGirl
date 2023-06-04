// function solution(numbers) {
//     return numbers.reduce((prev, cur) => [...prev, cur * 2], []);
// }

const solution = (numbers) => {
    return numbers.reduce((prev, cur) => {
       prev.push(cur * 2 )
    return prev
    },[])
}
