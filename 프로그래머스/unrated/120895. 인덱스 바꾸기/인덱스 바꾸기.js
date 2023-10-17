const solution = (my_string, num1, num2) => {
   const newArray =  my_string.split('')   
   let temp =  newArray[num1]  
   newArray[num1] = newArray[num2]
    newArray[num2] = temp
    return newArray.join('')
}
