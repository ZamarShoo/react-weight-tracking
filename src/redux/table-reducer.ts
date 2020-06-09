import {ItemsType} from "../../types/type";
import {act} from "react-dom/test-utils";

const ADD_ITEM = 'ADD_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'



let initialState = {
    items: [
        {id: 0, date: '09.06.2020', weight: 90, waist: 86, chest: 104, arm: 39, leg: 68},
        {id: 1, date: '09.06.2020', weight: 90, waist: 86, chest: 104, arm: 39, leg: 68},
        {id: 2, date: '09.06.2020', weight: 90, waist: 86, chest: 104, arm: 39, leg: 68},
        {id: 3, date: '09.06.2020', weight: 90, waist: 86, chest: 104, arm: 39, leg: 68},
        {id: 4, date: '09.06.2020', weight: 90, waist: 86, chest: 104, arm: 39, leg: 68},
        {id: 5, date: '09.06.2020', weight: 90, waist: 86, chest: 104, arm: 39, leg: 68},
        {id: 6, date: '09.06.2020', weight: 90, waist: 86, chest: 104, arm: 39, leg: 68}
    ] as Array<ItemsType>
}

type InitialStateType = typeof initialState

const tableReducer = (state = initialState, action : ActionType) : InitialStateType => {
    switch (action.type) {
        case ADD_ITEM: {
            return {
                ...state,
                items: [...state.items,
                    {id: state.items.length, date: action.date, weight: action.weight,
                        waist: action.waist, chest: action.chest, arm: action.arm, leg: action.leg}]
            }
        }

        case DELETE_ITEM: {
            return {
                ...state,
                items: [...state.items.filter(n => n.id !== action.id)]
            }
        }

        default: {
            return state
        }

    }
}

type ActionType = ActionCreatorAddType | ActionCreatorDeleteType

export const addItem = (date : string, weight: number, waist: number,
                        chest: number, arm: number, leg: number) : ActionCreatorAddType => (
                            {type: ADD_ITEM, date, weight, waist, leg, arm, chest})
type ActionCreatorAddType = {
    type: typeof ADD_ITEM, date : string, weight: number,
    waist: number, chest: number, arm: number, leg: number
}

export const deleteItem = (id : number) : ActionCreatorDeleteType => ({type: DELETE_ITEM, id})
type ActionCreatorDeleteType = {
    type: typeof DELETE_ITEM,
    id: number
}

export default tableReducer