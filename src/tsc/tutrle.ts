type Turtle = 'turtle' | null;

type Game = {
    makeTurn: (direction: 'left' | 'right') => void;
    state: Array<Turtle>;
};

const startGame = (): Game => {
    const state: Array<Turtle> = ['turtle', null, null, null, null];

    function  makeTurn(value:('left'|'right')):any{
        const position = state.findIndex((item)=>item=='turtle')
        if (value=='left'){
            if(position==0){
                return 'ERROR'
            }else {
                state[position] = null;
                state[position-1] = 'turtle';

            }
        }else if(value =='right'){
            if(position==4){
                return 'ERROR'
            }
            else {
                state[position] = null;
                state[position+1] = 'turtle';
            }
        }

    }

    return { makeTurn, state };
};

function test():any{

    const arr: Turtle[] =[null,null,'turtle'];
    return arr;
}

export {test,startGame };
