# Daily-Programmers
<br />
[230602] 프로그래머스 약 2 주차 for 문이 무서워지지 않았다

<br />

[230603] reduce() 공부 중 .. 너무 어려워 ㅜ ㅜ <a href='https://velog.io/@minngaeng/%EC%BD%94%ED%85%8C'>아직도 아라가는 중 ..</a>

<br /> 
[230610] Math.pow() 에 대해 <a href='https://velog.io/@minngaeng/%EC%BD%94%ED%85%8C'> 아라보자 </a>
[230612] filter() 에 대해 <a href='https://velog.io/@minngaeng/230612-%EC%BD%94%EB%B0%95%EA%B1%B8'> 아라보자 </a>
<hr>






# 🫵 번외 

## 언젠간 이해해 주겠어 SERIES 01 <a href='https://velog.io/@minngaeng/230612-%EC%BD%94%EB%B0%95%EA%B1%B8'> 아라보자 </a> 참고
```javascript
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}
``` 
