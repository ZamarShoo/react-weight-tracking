import {combineReducers, createStore} from "redux";
import tableReducer from "./table-reducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    table: tableReducer,
    form: formReducer
})

type ReducerType = typeof reducers


// @ts-ignore
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers,  devTools);

// @ts-ignore
window.store = store;



export type AppStateType = ReturnType<ReducerType>
export default store;