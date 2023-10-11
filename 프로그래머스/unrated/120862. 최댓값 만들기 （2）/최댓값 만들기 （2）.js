const solution = numbers => {
    let answer = -Infinity
    for (let k = 0; k < numbers.length; k++) {
        for (let i = k + 1; i < numbers.length; i++) {
            const product = numbers[k] * numbers[i];
            if (product > answer) { // 곱셈 결과가 이전의 최대값보다 큰 경우만 확인
                answer = product;
            }
        }
    }
    return answer;
}


