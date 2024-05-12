function solution(num_list) {
    let oddSum = 0;
    let evenSum = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        if ((i + 1) % 2 === 1) { // 홀수 번째 원소
            oddSum += num_list[i];
        } else { // 짝수 번째 원소
            evenSum += num_list[i];
        }
    }
    
    return Math.max(oddSum, evenSum); // 두 값 중 큰 값을 반환
}
