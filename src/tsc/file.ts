type FileObject = {
    name:string,
    size:number
}

class File {
    name:string;
    size:number;

     constructor (object : FileObject){
         this.name = object.name;
         this.size = object.size;
     }

    toString() {
         return this.name +" ("+ String (this.size) + " bytes)"
    }

}

export default File