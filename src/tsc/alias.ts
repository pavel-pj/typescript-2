type User = {name:string, age:number}
export function getOlderUser(userA:User,userB:User): User|null
{
    if (userA.age === userB.age) return null;
    return (userA.age > userB.age) ? userA : userB;

}

export default getOlderUser