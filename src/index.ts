//https://github.com/stemmlerjs/simple-typescript-starter/tree/master
 import {User}  from './djn/interface'


const user: User<string,number> = new User ("Вася","Из Москв", 45);

console.log(user.getName() + " " + user.getAge())