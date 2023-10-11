
const solution =(cipher,code) => {
    const array = [...cipher]
    const answer = []
    for (let i = 1; i<= array.length; i++){
         if (i % code === 0){
          answer.push(array[i-1]  )
        } 
    }
    return answer.join('')
 
}