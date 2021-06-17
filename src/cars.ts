export const cars: Cars = {
    moto: {
        name: "Мотоцикл",
        racers: [
            {
                speed: 120,
                punctureWheel: 0.1,
                hasStroller: true
            }
        ]
    },
    auto: {
        name: "Легковой автомобиль",
        racers: [
            {
                speed: 100,
                punctureWheel: 0.1,
                passengerCount: 2
            }
        ]
    },
    trucks: {
        name: "Грузовой автомобиль",
        racers: [
            {
                speed: 60,
                punctureWheel: 0.1,
                cargoWeight: 500
            }
        ]
    }
}

type Cars = {
    moto: {
        name: string,
        racers: Array<Moto>
    },
    auto: {
        name: string,
        racers: Array<Auto>
    },
    trucks: {
        name: string,
        racers: Array<Trucks>
    },
}

export type Moto = {
    speed: number,
    punctureWheel: number,
    hasStroller: boolean
}

export type Auto = {
    speed: number,
    punctureWheel: number,
    passengerCount: number
}

export type Trucks = {
    speed: number,
    punctureWheel: number,
    cargoWeight: number
}






/*export const cars: Cars2 = [
    {
        id: 1,
        speed: 120,
        punctureWheel: 0.1,
        hasStroller: true
    },
    {
        id: 2,
        speed: 100,
        punctureWheel: 0.2,
        passengerCount: 2
    },
    {
        id: 3,
        speed: 80,
        punctureWheel: 0.3,
        cargoWeight: 500
    }
]

type Cars2 = Array<Moto | Auto | Trucks>

type Cars = {
    moto: Moto,
    auto: Auto,
    trucks: Trucks
}

type Moto = {
    id: number
    speed: number,
    punctureWheel: number,
    hasStroller: boolean
}

type Auto = {
    id: number
    speed: number,
    punctureWheel: number,
    passengerCount: number
}

type Trucks = {
    id: number
    speed: number,
    punctureWheel: number,
    cargoWeight: number
}*/
