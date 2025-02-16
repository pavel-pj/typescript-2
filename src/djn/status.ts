
enum ModalStatus {
    Closed,
    Opened
}

type Modal = {
    text : string;
    status : ModalStatus;
}

const  buildModal = (text:string, status: ModalStatus): Modal =>{

    return {text,status}

}


export { buildModal, ModalStatus };