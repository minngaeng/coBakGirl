const solution = array => {
    let newArray = [...array]
    let newArray1 = array.flatMap(el => el.toString().split(''));
    let newArray3 =   newArray1.map((e) => Number(e))
    return newArray3.filter((e) => e === 7).length
}