//https://github.com/stemmlerjs/simple-typescript-starter/tree/master
import form from './djn/form';

console.log(form.name.validator(form.name.value)); // true
console.log(form.age.validator(form.age.value)); // false
