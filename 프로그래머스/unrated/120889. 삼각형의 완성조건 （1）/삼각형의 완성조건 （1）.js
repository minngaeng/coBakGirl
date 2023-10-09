
const solution = sides => {
   const answer = sides.sort((a,b) => b-a)
   let answers = answer[0] < answer[1]+answer[2] ? 1 :2
   return answers
}