//https://github.com/stemmlerjs/simple-typescript-starter/tree/master
import {isComplete} from './tsc/filter'
// Определите тип исходя из структуры объекта
const course = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions','fsef'],
};
console.log(isComplete(course)); // false
