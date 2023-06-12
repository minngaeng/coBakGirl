// function solution(num_list) {
//     var evenNum = []; //짝수
//     var oddNum = [] //홀수
//     // return answer;
//     for (let i = 0; i < num_list.length; i++) {
//         if (num_list[i] % 2 === 0) {
//             evenNum.push(num_list[i])
//         } else {
//             oddNum.push(num_list[i])
//         }
//     } return [ evenNum.length, oddNum.length]  // [짝수의 개수, 홀수의 개수]
// }


function solution(num_list) {
    return (
    [
        num_list.filter((num) => num % 2 === 0 ).length,
        num_list.filter((num) => num % 2 === 1).length
    ]
    )
}