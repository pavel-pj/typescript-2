class UserResponse
{
    constructor(public user:string){
    }
    public static fromArray(array: Array<string>) : Array<UserResponse>
    {
        const result: Array<UserResponse> = [];

        for(const item of array) {
            result.push(new UserResponse(item))
        }
        return result;
    }

}

export {UserResponse}