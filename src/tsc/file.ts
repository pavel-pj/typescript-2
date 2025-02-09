type fileOptions = {
    name:string,
    size:number
}

class File {
    name:string;
    size:number;
    private isCopy: boolean;
     constructor (object : fileOptions ){
         this.name = object.name;
         this.size = object.size;
         (object instanceof File) ? this.isCopy = true : this.isCopy = false;


     }

    toString() {
         let copy ='';
        ( this.isCopy) ? copy = '(copy) ' : '';

         return copy + this.name +" ("+ String (this.size) + " bytes)"
    }

}

export default File