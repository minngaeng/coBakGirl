const solution = age => {
    let abc = 'abcdefghij'
    return age.toString().split('').map((el)=> abc[parseInt(el)]).join('')
}
