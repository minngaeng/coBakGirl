const solution=(before, after) => {
    let beforeArray=[...before]
    let afterArray = [...after]
    
 for (let i = 0; i < afterArray.length;i++){
     if (beforeArray.includes(afterArray[i])){
      let where = beforeArray.indexOf(afterArray[i])
       beforeArray.splice(where,1)
     }
     
 }
    return beforeArray.length === 0 ? 1 : 0
 
}