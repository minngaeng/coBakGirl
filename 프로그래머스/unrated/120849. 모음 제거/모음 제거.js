const solution = my_string => {
  // const a =['a','e','i','o','u']
    const a = 'aeiou'
    
      const answer = [...my_string].filter((el) => !a.includes(el))
      return answer.join('')
}