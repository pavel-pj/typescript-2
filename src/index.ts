//https://github.com/stemmlerjs/simple-typescript-starter/tree/master
// import {EmployeeSalary,buildSalaryStatistics}  from './djn/salary'

function getPet<T, K extends keyof T>(pets: T, key: K){
    return pets[key];
}

type Pet = {
    [key: string]:number;
}

const pets:Pet = {
    "cat":10,"dog":20,"bird":15
}

console.log(getPet(pets,"cat"))