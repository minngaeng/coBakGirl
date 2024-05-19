function solution(numbers, n) {
 
//    let sum = 0
//  numbers.forEach((num) => {
   
//      sum += num
//      if (sum > n) break
//  })
//     return sum
    
     let sum = 0;
    for (let num of numbers) {
        sum += num;
        if (sum > n) break;
    }
    return sum;
    
    
}