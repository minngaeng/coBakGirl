
const solution = (num,k) =>  {
    let new_num_array =  num.toString().split('').map(Number)
    for (let i = 0; i < new_num_array.length; i++){
    if (new_num_array[i] === k ){
            return i + 1     
        }
        
    }
    return -1
}