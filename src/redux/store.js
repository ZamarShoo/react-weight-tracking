import {combineReducers, createStore} from "redux";
import tableReducer from "./table-reducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    table: tableReducer,
    form: formReducer
})

const store = createStore(reducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;


export default store;