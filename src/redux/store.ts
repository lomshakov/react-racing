import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./rootReducer";

let store = createStore(rootReducer, composeWithDevTools())

export type AppStateType = ReturnType<typeof rootReducer>

export default store