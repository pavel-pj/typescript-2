export function map(
    numbers:number[],
    callback: (
        n:number,
        index:number
    )=>number
):number[]
{
    const result:number[] =[];

    let index = 0;
    for(const item of numbers){
        result.push(callback(item,index))
        index +=1;
    }

    return result;
}
export default map