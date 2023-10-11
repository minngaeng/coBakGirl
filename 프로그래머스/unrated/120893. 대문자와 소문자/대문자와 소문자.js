const solution = my_string => 
    [...my_string].map(c => 
        c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
    ).join('');

console.log(solution("AbCdEfG"));  // 출력: "aBcDeFg"
