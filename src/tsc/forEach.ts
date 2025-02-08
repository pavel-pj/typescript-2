 function forEach(
    numbers:number[],
    callback: (n:number, index:number)=>void
    ):void
{
    let index:number = 0;
    for(const item of numbers){
        const f = callback(item,index );
        index += 1;
    }

}
 function isPlainObject(value:unknown):boolean {

    if(value === null) return false

    if(Array.isArray(value)){
        return false;
    }

    if (typeof(value)==='object') {
         return true;
    }

     return false;
 }

 //{user:"vava",name:"vseef}
 function  lessonsCount({lessons}:{lessons:string[]}):number{

    return lessons.length

 }

 function newYearCongratulate(name:string):string
 function newYearCongratulate(par1:unknown,par2?:unknown):string

 function newYearCongratulate(par1:unknown,par2?:unknown):string{

    if (par2){
        return "Hi "+par2+"! Happy New Year "+String(par1)+ "!"
    }
    else {
        return "Hi "+par1+"! Happy New Year!"
    }


 }
 function max(first:number, ...numbers: number[]): number {

    return Math.max(first,...numbers);
 }


 function last(value:number|string): number|string {
    if(typeof(value)=='number') {
        const str = String(value);
        const num = str[str.length-1];
        return Number(num)
    }
     if(value.length==0) return '';
     return value[value.length-1]
 }

 function uniq(array:(number|string)[] ): (number|string)[] {
    const result: (string|number)[] = [];
    for(const item of array){
        if (! result.includes(item)) {
              result.push(item)
        }
    }
    return result;
 }

 function getField(size:number):(null|string)[][]{

    const result: (null|string)[][] = [];
    for(let x = 0;x < size;x++) {
        result.push([])
        const row = result[x];
        for (let j = 0;j < size; j++){
            row.push(null)
        }
    }
    return result;
 }

 function  reverse(numbers: readonly number[]):number[]{

    const arr: number[] =[];
    for(let x=numbers.length-1;x >=0; x--){
        arr.push(numbers[x])
    }
    return arr;

 }
 type Point = [number,number,number]

 function isTheSamePoint(point1:Point,point2:Point):boolean{

    if( point1[0]==point2[0] &&
        point1[1]==point2[1] &&
        point1[2]==point2[2]
    ) {
        return true
    }
     return false;
 }

 function anagrams(word:string, words:string[]):string[]{

    const example = word.split('').sort().join('');
    const result:string[] = [];
    for(const item of words) {
        const checked = item.split('').sort().join('');

        if (example === checked) {
            result.push(item)
        }
    }
    return result;

 }

 function lastIndex(text:string,char:string): number|null{

      if(!text.includes(char)) return null;
      const array = text.split('');
      for (let x = array.length-1;x >= 0; x--){
          if (array[x]==char){
              return x;
          }
      }

      return null

 }

 function formatPrice(value?:number|null|undefined):string
 {
     if(value == null || value ==undefined) return "$0.00";

     return `$${value.toFixed(2)}`;

 }


 function fail():any {
    return "HELLOr"
}
export {forEach,fail,isPlainObject,anagrams,lastIndex,formatPrice,
    lessonsCount,max,last,uniq,getField, reverse,isTheSamePoint,Point};