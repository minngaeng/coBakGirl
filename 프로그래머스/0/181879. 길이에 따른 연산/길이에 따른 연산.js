function solution(num_list) {
    let sum = 0;
    let mul =0
 if (num_list.length >= 11) {
for (let i = 0; i < num_list.length; i++ ) {
  sum += num_list[i];
}
     return sum
 } else if (num_list.length <= 10) {
      mul = num_list.reduce((a, c) => {return a*c ;}, 1)
 }
    return mul
}