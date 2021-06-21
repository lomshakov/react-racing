import {AppStateType} from "./store";

export const getIsStartedSelector = (state: AppStateType) => {
    return state.isStarted
}

export const getIsFinishedSelector = (state: AppStateType) => {
    return state.isFinished
}

export const getCarsSelector = (state: AppStateType) => {
    return state.cars
}

export const getTrackLengthSelector = (state: AppStateType) => {
    return state.trackLength
}

export const getResultSelector = (state: AppStateType) => {
    return state.result
}

