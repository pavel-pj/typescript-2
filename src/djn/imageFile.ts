type FileOptions = {
    name: string;
    size: number;
    width:number ;
    height: number ;
};

class File {
    private name: string;
    private size: number;

    constructor(options: FileOptions) {
        this.name = options.name;
        this.size = options.size;
    }

    protected toString() {
        return `${this.name} (${this.size} bytes)`;
    }
}
/*
class File {
    constructor( public name:string, public size: number){};
}
type userFile = {
    name : string;
    size:number;
    width:number;
    height:number;
}
*/
class ImageFile extends File{
    private width:number;
    private height:number;
    constructor(obj:FileOptions) {
        super(obj);
        this.width = obj.width;
        this.height= obj.height;
    }


     toString():string {
         return `${super.toString()} ${this.width}x${this.height}`;
     }

}

export { ImageFile }