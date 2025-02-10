interface EmployeeSalary {
    [key:string] : number;
}


interface SalaryStatistics {
    min:number;
    max:number;
    avg:number;
}

function buildSalaryStatistics(employees: EmployeeSalary):SalaryStatistics
{
    const values = Object.entries(employees).map((item )=>item[1] );
    const min = Math.min(...values);
    const max = Math.max(...values);
    const avg = values.reduce((acc,item)=> acc + item,0)

    const statistic:SalaryStatistics =  {
        min:min,
        max:max,
        avg:avg
    }
    return statistic;

}


export {EmployeeSalary,buildSalaryStatistics}