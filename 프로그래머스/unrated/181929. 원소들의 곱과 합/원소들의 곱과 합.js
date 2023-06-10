function solution(num_list) {
  let result1 = Math.pow(num_list.reduce((a, b) => (a + b)) ,2)  //모든 원소의 합의 제곱
    let result2 = num_list.reduce((a,b) => (a*b))  //모든 원소의 곱
  return result2 < result1 ? 1 : 0 
}