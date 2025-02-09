// @ts-check
interface IFlying {
    canFly: true;
}

interface IBird extends IFlying {
    isLiving: true;
}

interface IPlane extends IFlying {
    canCarryPeople: true;
}

interface ISuperman extends IPlane,IBird {
    guessWho(value:string):string ;

}

class SuperMan implements ISuperman {
     canCarryPeople:true = true;
     canFly:true = true;
     isLiving:true = true;
     constructor(){

    };



    guessWho(value:string):string {
        if( value !=='superman') return `It's a ${value}?`;
        return `It's a superman!`;
    }
}

const superman = new SuperMan();

export default superman;
