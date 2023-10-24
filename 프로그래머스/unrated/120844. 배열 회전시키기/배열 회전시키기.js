const solution = (numbers, direction) => {
    if (direction === 'right') {
        const last = numbers[numbers.length - 1]; // 마지막 원소 저장
        for (let i = numbers.length - 1; i > 0; i--) {
            numbers[i] = numbers[i - 1];  // 원소들을 오른쪽으로 이동
        }
        numbers[0] = last; // 처음 위치에 마지막 원소 저장
    } else if (direction === 'left') {
        const first = numbers[0];  // 첫 번째 원소 저장
        for (let i = 0; i < numbers.length - 1; i++) {
            numbers[i] = numbers[i + 1]; // 원소들을 왼쪽으로 이동
        }
        numbers[numbers.length - 1] = first; // 마지막 위치에 첫 번째 원소 저장
    }

    return numbers;
}
