import {AppStateType} from "./store";

export const getIsStartedSelector = (state: AppStateType) => {
    return state.isStarted
}

export const getCarsSelector = (state: AppStateType) => {
    return state.cars
}

export const getTrackLengthSelector = (state: AppStateType) => {
    return state.trackLength
}

