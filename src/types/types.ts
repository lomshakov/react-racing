export type Cars = Array<Moto | Auto | Trucks>

export type Moto = {
    id: string,
    type: CarType,
    speed: number,
    punctureWheel: number,
    hasStroller: boolean,
    isFinished: boolean
}

export type Auto = {
    id: string,
    type: CarType,
    speed: number,
    punctureWheel: number,
    passengerCount: number,
    isFinished: boolean
}

export type Trucks = {
    id: string,
    type: CarType,
    speed: number,
    punctureWheel: number,
    cargoWeight: number,
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