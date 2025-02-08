//https://github.com/stemmlerjs/simple-typescript-starter/tree/master
 import filter from './tsc/filter'
// Определите тип исходя из структуры объекта

const numbers = [1, -5, 2, 3, 4, 133];
console.log(filter(numbers,  (n)=> n %2 ==0))    ; // [4, 133]
//filter(numbers, (n) => n % 2 == 0); // [2, 4]
