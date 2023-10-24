function solution(hp) {
    // 각 개미의 공격력을 상수로 정의
    const GENERAL_ANT_POWER = 5;
    const SOLDIER_ANT_POWER = 3;
    const WORKER_ANT_POWER = 1;

    let count = 0;

    // 장군개미를 최대한 많이 사용
    while (hp >= GENERAL_ANT_POWER) {
        hp -= GENERAL_ANT_POWER;
        count++;
    }

    // 병정개미를 최대한 많이 사용
    while (hp >= SOLDIER_ANT_POWER) {
        hp -= SOLDIER_ANT_POWER;
        count++;
    }

    // 남은 체력을 일개미로 채우기
    count += hp;  // 여기서 hp는 0, 1, 또는 2 중 하나일 것이다.

    return count;
}
