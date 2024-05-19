function solution(n, k) {
 
    let array =[]
    for (let i =1; i<= n; i ++){
        if (i % k === 0) {
            array.push(i)
        }
    }
    return array
}