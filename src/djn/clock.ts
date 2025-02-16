
abstract class Clock {

    constructor (public hours:number,public minutes:number,public seconds:number) {};

    tick():void {
        this.seconds += 1;
        (this.seconds) === 60 ? this.minutes += 1 : '';

        if (this.minutes === 60){
            this.minutes = 0;
            this.hours += 1;
        }
        if (this.hours === 24) {
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
        }
    }

    abstract render (): string;
}

export {Clock}