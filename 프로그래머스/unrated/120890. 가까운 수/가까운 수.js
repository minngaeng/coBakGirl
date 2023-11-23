const solution = (array, n) => {
    let differences = array.map(item => Math.abs(n - item));
    let minDifference = Math.min(...differences);

    // 최소 차이값을 가진 모든 인덱스를 찾음
    let closestNumbers = array.filter((item, index) => differences[index] === minDifference);

    // 가장 작은 수를 반환
    return Math.min(...closestNumbers);
};