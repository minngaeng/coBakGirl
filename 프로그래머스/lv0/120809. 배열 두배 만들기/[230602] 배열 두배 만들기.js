function solution(numbers) {
    var answer = [];
    
    for(let i = 0; i < numbers.length; i++) {
       const push = answer.push(numbers[i] * 2);
    }
    
    return answer;
}

//다른 사람 풀이

function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}

//reduce() 사용법 익히기 
