export function getParams(params:string):any {

  //  getParams('name=hexlet&count=3&order=asc');
// { name: 'hexlet', count: '3', order: 'asc' }

    const subParams  = params.split('&');
    const initial: any = {};

    const f = subParams.reduce((acc,item) =>{

        const data = item.split('=');
        console.log(data)


            acc[data[0]] = data[1];
            return acc;
    },initial)

    return f;


}