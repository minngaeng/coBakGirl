const solution = (my_string) => {
 
    let myArray = []
    let newArray = [...my_string]
    newArray.map((el) => {
        if (!myArray.includes(el)) {
             myArray.push(el)
        }
        return
    })
    return myArray.join('')
}
