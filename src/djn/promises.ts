class Queue<T> {
    private values:Array<T>;
    constructor( ){
        this.values = [];
    };
    enqueue(value: T):void{
        this.values.push(value);
    }
    dequeue():T|never|undefined   {

        if (this.values.length == 0) {
            throw  new Error("Массива пустой")

        }
        return this.values.pop();




    }

}
export {Queue}