const solution = my_string => {
    const old_arr = my_string.split('')
    const NumberNNull = old_arr.map(Number)
     return NumberNNull.filter((el) => !isNaN(el)).sort((a,b) => a- b)
    }
