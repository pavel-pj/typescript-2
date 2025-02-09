// @ts-check
type User = {
    id: number,
    name: string,
    age: number,
};

type Friends = [number, number];

export type UserResponse = {
    users: User[],
    friends: Friends[]
};

function getUserFriends(userJson: string, id:number):Array<User>
{
    const data: UserResponse = JSON.parse(userJson);
    const friendsData = data.friends;
    const usersData = data.users;

    const friendIds: Array<number> = [];

    for(const item of friendsData){

        const id1= item[0];
        const id2= item[1];

        if(id1 == id) {
            friendIds.push(id2);
        } else if(id2 == id){
            friendIds.push(id1)
        }

    }

    const result = usersData.filter((item)=>{
        return friendIds.includes(item.id);
    })


    return result;

}

export default getUserFriends;
