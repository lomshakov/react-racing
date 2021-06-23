import {Action, applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./rootReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";

export type AppStateType = ReturnType<typeof rootReducer>
export type BaseThunkType<A extends Action, R = void> = ThunkAction<R, AppStateType, unknown, A>
export type BaseAsyncThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store