function solution(array) {
    // var answer = 0;
    // return Math.floor(array.sort().length /2 )
    return array[Math.floor(array.sort((a, b) => a - b).length / 2)]

    
    
}