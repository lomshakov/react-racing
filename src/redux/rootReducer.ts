// initial state
import {Auto, Cars, CarType, Moto, Result, Trucks} from "../types/types";
import {v4 as uuidv4} from 'uuid'

let initialState = {
    isStarted: false as boolean,
    isFinished: false as boolean,
    trackLength: 500,
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
            speed: 180,
            punctureWheel: 0.1,
            cargoWeight: 500,
            isFinished: false
        }
    ] as Cars,
    result: [] as Array<Result>
}

// reducer
const rootReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET_RACE_STATE":
            return {
                ...state,
                isStarted: action.payload
            }

        case "SET_FINISH_STATE":
            return {
                ...state,
                isFinished: action.payload
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

        case "ADD_CAR_TO_RESULT":
            return {
                ...state,
                result: [...state.result, action.payload]
            }

        case "SET_IS_FINISHED_TO_ALL_CARS":
            return {
                ...state,
                cars: [
                    ...state.cars.map(car => {
                        car.isFinished = action.payload
                        return car
                    })
                ]
            }

        case "CLEAR_RESULTS":
            return {
                ...state,
                result: []
            }

        case "SET_RACE_LENGTH":
            return {
                ...state,
                trackLength: action.payload
            }

        case "ADD_NEW_CAR":
            return {
                ...state,
                cars: [...state.cars, action.payload]
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
    setFinishState: (isFinished: boolean) => ({ type: 'SET_FINISH_STATE', payload: isFinished } as const),
    setCarIsFinished: (id: string) => ({ type: 'SET_CAR_IS_FINISHED', payload: id } as const),
    addCarToResult: (result: Result) => ({ type: 'ADD_CAR_TO_RESULT', payload: result } as const),
    setIsFinishedToAllCars: (isFinished: boolean) => ({ type: 'SET_IS_FINISHED_TO_ALL_CARS', payload: isFinished } as const),
    setClearResults: () => ({ type: 'CLEAR_RESULTS' } as const),
    setRaceLength: (length: number) => ({ type: 'SET_RACE_LENGTH', payload: length } as const),
    addNewCar: (car: Auto | Moto | Trucks) => ({ type: 'ADD_NEW_CAR', payload: car } as const),
}

export default rootReducer