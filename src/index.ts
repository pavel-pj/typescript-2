//https://github.com/stemmlerjs/simple-typescript-starter/tree/master
 import map from './tsc/map'
// Определите тип исходя из структуры объекта

//const numbers = [1, -5, 2, 3, 4, 133];
console.log(map([10, 10, 10], (n: number, index) => n + index))    ; // [4, 133]
//filter(numbers, (n) => n % 2 == 0); // [2, 4]
