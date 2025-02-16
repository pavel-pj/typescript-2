
type  DataState = {
    status: LoadingStatus,
    error?: Error
    data?: number
}

enum LoadingStatus {
    Loading = 'loading...',
    Error = 'error',
    Success = 'seccess'
}

function handleData(data: DataState):string|unknown  {
    if (data.status == LoadingStatus.Loading) {
        return LoadingStatus.Loading
    }
    else if (data.error) {
        return data.error.message as string
    }
    else if (data.data) {
        return String(data.data)
    }
    return 'unknown';


}

export {LoadingStatus,DataState}
export default handleData