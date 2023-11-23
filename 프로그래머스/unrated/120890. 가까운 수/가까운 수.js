const solution = (array, n) => {

    
    let difference = array.map((el) => Math.abs(n-el))
    let minDifference = Math.min(...difference)
    
    let closetNumbers= array.filter((el,index) => difference[index] ===minDifference )
    return Math.min(...closetNumbers)
};