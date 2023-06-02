function solution(number, n, m) {
  if ((number % n === 0) && (number % m ===0)) {
      return 1 
  } else if ((number % n !== 0) || (number % m !==0))  {
      return 0
  }
   
}

//다른 사람 풀이


function solution(number, n, m) {
    return (number%n ===0) ? (number%m===0) ? 1 : 0 : 0;
}

//이렇게 쓴 삼항연산자는 처음 봤다.. 오늘의 공부.... 미친거 아이고!!!!
