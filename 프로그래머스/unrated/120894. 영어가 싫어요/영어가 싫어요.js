const solution = (numbers) => {
    let num = {
        'zero': '0',
        'one': '1',
        'two':'2',
        'three':'3',
        'four':'4',
        'five':'5',
        'six':'6',
        'seven':'7',
        'eight':'8',
        'nine':'9'
    };

    let result = numbers;
    for (let key in num) {
        result = result.split(key).join(num[key]);
    }

    return Number(result)
};