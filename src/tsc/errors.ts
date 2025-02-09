class HttpError extends Error {

    constructor (public status:string,public message:string){
        super(message)
    }
}

class NotFoundError extends HttpError {
       constructor(public message:string){
            super('404',message)
       }
}
class UnauthorizedError extends HttpError {
    constructor(public message:string){
        super('401',message)
    }
}
class ForbiddenError extends HttpError {
    constructor(public message:string){
        super('403',message)
    }
}

export {NotFoundError,UnauthorizedError,ForbiddenError}