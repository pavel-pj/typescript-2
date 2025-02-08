export enum ModalStatus{
    Opened = '0',
    Closed = '1'
}
export function buildModal(text:string, status: ModalStatus): object {
    return {text, status};
}

export default {ModalStatus,buildModal}