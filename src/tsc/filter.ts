type callback = (n:number) =>boolean
export function filter(array:number[], cb:callback): number[]
{

        const result :number[] = [];
       /* for(const item  of array)
        {
             if(cb(item)){
                     result.push(item)
             }
        }
*/
        array.forEach((item)=>{
            if(cb(item)){
                result.push(item)
            }
        })

        return result;

}
export default filter
