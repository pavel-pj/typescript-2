interface IVehicle {
    seats: number;
    colour: string;
    canHavePassengers: boolean;
    fuelPer100Kilometers: number;
    calcFuelNeeded(distance:number): number;
}

class Car implements IVehicle{

    constructor (
        public seats:number,
        public colour:string,
        public canHavePassengers: boolean,
        public fuelPer100Kilometers: number,
        ){}
    calcFuelNeeded(distance:number): number {
        return   this.fuelPer100Kilometers * distance/100;
    }
}

export default Car;
