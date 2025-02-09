
type  DataState = {
    status: LoadingStatus,
    } & {

    error: string
}& {
    
    data: number
}

enum LoadingStatus {
    Loading,
    Error,
    Success
}

function handleData(data: DataState):string {
    console.log(data)
    if (data.status == LoadingStatus.Loading) return 'loading...';
    if (data.status == LoadingStatus.Error) {

        return data.error;
    }

    return "YES"

}

export {LoadingStatus,DataState}
export default handleData