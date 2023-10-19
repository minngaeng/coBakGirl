function solution(array) {
    if (array.length === 0) return null;  // 배열이 비어있을 때
    
    const countMap = {};
    
    array.forEach(num => {
        countMap[num] = (countMap[num] || 0) + 1;
    });

    const maxCount = Math.max(...Object.values(countMap));
    const mode = Object.keys(countMap).filter(key => countMap[key] === maxCount).map(Number);

    if (mode.length > 1) return -1;
    
    return mode[0];
}

console.log(solution([1, 2, 3, 4, 5, 2]));    // 출력: 2
console.log(solution([1, 2, 3, 4, 5, 2, 3]));  // 출력: -1
