const solution = array => {
    const newArray = []
    newArray.push(Math.max(...array)) 
    for (let i = 0; i <array.length; i++){
        if (array[i] === newArray[0]){
            newArray.push(i)
        }
    } 
    return newArray
}