export function isComplete (param:{ name:string, lessons:string[]}):boolean{

    if (param.lessons.length>3) return true;
    return false;
}

export default isComplete