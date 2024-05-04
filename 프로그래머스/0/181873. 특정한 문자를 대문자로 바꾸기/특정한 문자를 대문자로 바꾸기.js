function solution(my_string,alp) {
let result = '';

    // 문자열을 순회하면서 각 문자의 대소문자를 확인하고 대문자로 변경
    for (let i = 0; i < my_string.length; i++) {
        // 현재 문자가 alp에 해당하는지 확인
        if (my_string[i] === alp) {
            // 대문자로 변경하여 결과에 추가
            result += my_string[i].toUpperCase();
        } else {
            // 그 외의 경우는 그대로 결과에 추가
            result += my_string[i];
        }
    }

    return result;
    }