function solution(num_list) {
    var arr1 = []; //짝수 [4,2]
    var arr2 = []  //홀수 [1,3]
    for (let i =0; i < num_list.length; i++){
        if (num_list[i] % 2 === 0 ){
            arr1.push(num_list[i])
        } else {
            arr2.push(num_list[i])
        }
    }
    let stringArrEven = arr1.map((el) => el.toString()) // 짝수 문자로 바꿈  ["4","2"]
    let stringArrOdd = arr2.map((el) =>el.toString() ) // 홀수 문자로 바꿈 ["3","5","1"] 
    let finalJoinArrEven = Number(stringArrEven.join('')) // 42
     let finalJoinArrOdd = Number(stringArrOdd.join('')) // 351
    return finalJoinArrEven + finalJoinArrOdd
    
}