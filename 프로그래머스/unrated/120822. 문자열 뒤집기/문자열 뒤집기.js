
const solution=(my_string) => {
    
let divided = my_string.split('')
const answer = []
for (let i = divided.length - 1; i >= 0 ; i -- ) {
    answer.push(divided[i])
}
// return `${answer.join()}`
    return answer.join('')

}
