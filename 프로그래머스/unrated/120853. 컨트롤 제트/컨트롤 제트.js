function solution(s) {
 let newArray = s.split(' ')
    let result = []
    for (let i = 0; i< newArray.length; i ++){
        if (newArray[i] === 'Z'){
            result.pop()
        }
        result.push(newArray[i])
        
    }
    let multiArray = result.filter((el) => el !== 'Z').map((el) => Number(el))
    
    if (multiArray.length > 0 ){
       return multiArray.reduce((prev,cur) => prev+ cur,0)
    } else {
        return 0
    }
    
    
}