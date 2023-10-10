

// const solution = my_string => my_string.replace(/[^0-9]/g,'').split('').map(Number).reduce((prev,cur)=>prev+cur,0)

const solution = my_string => [...my_string].reduce((prev,cur)=>Number(cur) ? Number(cur) + prev : prev ,0)