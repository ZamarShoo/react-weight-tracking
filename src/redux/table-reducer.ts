import {ItemsType} from "../../types/type";

const ADD_ITEM = 'ADD_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const CHANGE_HEIGHT = 'CHANGE_HEIGHT'


let initialState = {
    userHeight: 180 as number,
    items: [
        {id: 0, date: '09.06.2020', weight: 90, waist: 86, chest: 104, arm: 39, leg: 68},
        {id: 1, date: '10.06.2020', weight: 89, waist: 85, chest: 104, arm: 40, leg: 69},
        {id: 2, date: '11.06.2020', weight: 90, waist: 85, chest: 105, arm: 41, leg: 69},
        {id: 3, date: '12.06.2020', weight: 88, waist: 84, chest: 105, arm: 41, leg: 70},
        {id: 4, date: '13.06.2020', weight: 88, waist: 83, chest: 107, arm: 41, leg: 70},
        {id: 5, date: '14.06.2020', weight: 87, waist: 83, chest: 107, arm: 42, leg: 71},
        {id: 6, date: '15.06.2020', weight: 86, waist: 82, chest: 108, arm: 43, leg: 72},
        {id: 7, date: '16.06.2020', weight: 90, waist: 86, chest: 104, arm: 39, leg: 68},
        {id: 8, date: '17.06.2020', weight: 89, waist: 85, chest: 104, arm: 40, leg: 69},
        {id: 9, date: '18.06.2020', weight: 90, waist: 85, chest: 105, arm: 41, leg: 69},
        {id: 10, date: '19.06.2020', weight: 88, waist: 84, chest: 105, arm: 41, leg: 70},
        {id: 11, date: '20.06.2020', weight: 88, waist: 83, chest: 107, arm: 41, leg: 70},
        {id: 12, date: '21.06.2020', weight: 87, waist: 83, chest: 107, arm: 42, leg: 71},
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

        case CHANGE_HEIGHT: {
            return {
                ...state,
                userHeight: action.userHeight
            }
        }

        default: {
            return state
        }

    }
}

type ActionType = ActionCreatorAddType | ActionCreatorDeleteType | ActionCreateChangeType

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

export const changeHeight = (userHeight : number) : ActionCreateChangeType => ({type: CHANGE_HEIGHT, userHeight})
type ActionCreateChangeType = {
    type: typeof CHANGE_HEIGHT,
    userHeight: number
}

export default tableReducer