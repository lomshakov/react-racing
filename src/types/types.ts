export interface Truck extends Transport {
    type: CarType.Truck;
    cargoWeight: number;
}

export interface Moto extends Transport {
    type: CarType.Moto;
    hasStroller: boolean;
}

export interface Auto extends Transport {
    type: CarType.Auto;
    passengerCount: number;
}

interface Transport {
    id: string,
    speed: number,
    punctureWheel: number,
    isFinished: boolean
}

export enum CarType {
    Moto = "Мотоцикл",
    Auto = "Легковой автомобиль",
    Truck = "Грузовой автомобиль"
}

export type Result = {
    indexNumber: number,
    type: CarType,
    time: number
}