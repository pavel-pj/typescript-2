/*const sanitize = <T extends object, K extends keyof T>(obj: T, keys: Array<K>) => {
    const entries = Object.entries(obj).filter(([key]) => !keys.includes(key as K));

    return Object.fromEntries(entries) as Omit<T, K>;
};

export {sanitize}

*/
type User = {
     [key:string]:boolean
}
const user:User = {
   334:"sefsef",
}


function sanitize <T extends object, K extends keyof T>(obj:T,keys:K[]) {

   const newArray =  Object.entries(obj).filter(([key])=>!keys.includes(key as K));

   return Object.fromEntries(newArray) as Omit<T,K>;


}

export {sanitize}