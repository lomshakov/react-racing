// initial state
import {Cars, CarType} from "../types/types";
import {v4 as uuidv4} from 'uuid'

let initialState = {
    isStarted: false as boolean,
    trackLength: 1000,
    cars: [
        {
            id: uuidv4(),
            type: CarType.Moto,
            speed: 120,
            punctureWheel: 0.1,
            hasStroller: true,
            isFinished: false
        },
        {
            id: uuidv4(),
            type: CarType.Auto,
            speed: 100,
            punctureWheel: 0.1,
            passengerCount: 2,
            isFinished: false
        },
        {
            id: uuidv4(),
            type: CarType.Truck,
            speed: 60,
            punctureWheel: 0.1,
            cargoWeight: 500,
            isFinished: false
        }
    ] as Cars
}

// reducer
const rootReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET_RACE_STATE":
            return {
                ...state,
                isStarted: action.payload
            }

        case "SET_CAR_IS_FINISHED":
            return {
                ...state,
                cars: [
                    ...state.cars.map(car => {
                        if (car.id === action.payload) {
                            car.isFinished = true
                        }
                        return car
                    })
                ]
            }

        default:
            return state
    }
}

type InferActionsType<T> = T extends { [keys:string]: (...args: any[]) => infer U } ? U : never

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsType<typeof actions>

// actions
export const actions = {
    setRaceState: (isStarted: boolean) => ({ type: 'SET_RACE_STATE', payload: isStarted } as const),
    setCarIsFinished: (id: string) => ({ type: 'SET_CAR_IS_FINISHED', payload: id } as const),
}

export default rootReducer