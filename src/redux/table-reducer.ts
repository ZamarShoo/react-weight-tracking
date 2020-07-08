import {ItemsType} from "../../types/type";
import { InferActionsTypes } from "./store";


let initialState = {
    userHeight: 180 as number,
    userAge: 22 as number,
    userSex: 'male' as 'male' | 'female',
    userCorrectWeight: 87 as number,
    items: [
        {id: 0, date: '2020-06-12', weight: 90, waist: 86, chest: 104, arm: 39, leg: 68},
        {id: 1, date: '2020-06-13', weight: 89, waist: 85, chest: 104, arm: 40, leg: 69},
        {id: 2, date: '2020-06-14', weight: 90, waist: 85, chest: 105, arm: 41, leg: 69},
        {id: 3, date: '2020-06-15', weight: 88, waist: 84, chest: 105, arm: 41, leg: 70},
        {id: 4, date: '2020-06-16', weight: 88, waist: 83, chest: 107, arm: 41, leg: 70},
        {id: 5, date: '2020-06-17', weight: 87, waist: 83, chest: 107, arm: 42, leg: 71},
        {id: 6, date: '2020-06-18', weight: 86, waist: 82, chest: 108, arm: 43, leg: 72},
        {id: 7, date: '2020-06-19', weight: 90, waist: 86, chest: 104, arm: 39, leg: 68},
        {id: 8, date: '2020-06-20', weight: 89, waist: 85, chest: 104, arm: 40, leg: 69},
        {id: 9, date: '2020-06-21', weight: 90, waist: 85, chest: 105, arm: 41, leg: 69},
        {id: 10, date: '2020-06-22', weight: 88, waist: 84, chest: 105, arm: 41, leg: 70},
        {id: 11, date: '2020-06-23', weight: 88, waist: 83, chest: 107, arm: 41, leg: 70},
        {id: 12, date: '2020-06-24', weight: 87, waist: 83, chest: 107, arm: 42, leg: 71},
    ] as Array<ItemsType>
}

const tableReducer = (state = initialState, action : ActionsType) : InitialStateType => {
    switch (action.type) {
        case 'ADD_ITEM': {
            return {
                ...state,
                userCorrectWeight: state.items[state.items.length - 2].weight,
                items: [...state.items,
                    {id: state.items.length === 0 ? 0 : state.items[state.items.length - 1].id + 1,
                        date: action.date, weight: action.weight,
                        waist: action.waist, chest: action.chest,
                        arm: action.arm, leg: action.leg}]
            }
        }

        case 'DELETE_ITEM': {
            return {
                ...state,
                userCorrectWeight: state.items[state.items.length - 2].weight,
                items: [...state.items.filter(n => n.id !== action.id)]
            }
        }

        case 'CHANGE_AGE': {
            return {
                ...state,
                userAge: action.userAge
            }
        }

        case "CHANGE_HEIGHT": {
            return {
                ...state,
                userHeight: action.userHeight
            }
        }

        case "CHANGE_SEX": {
            return {
                ...state,
                userSex: action.userSex
            }
        }

        default: {
            return state
        }

    }
}


export const actions = {
    addItem: (date : string, weight: number, waist: number, chest: number, arm: number, leg: number) => (
        {type: 'ADD_ITEM', date, weight, waist, leg, arm, chest} as const),
    deleteItem: (id : number) => ({type: 'DELETE_ITEM', id} as const),
    changeAge: (userAge : number) => ({type: 'CHANGE_AGE', userAge} as const),
    changeHeight: (userHeight: number) => ({type: 'CHANGE_HEIGHT', userHeight} as const),
    changeSex: (userSex : 'male' | 'female') => ({type: 'CHANGE_SEX', userSex} as const)
}


type ActionsType = InferActionsTypes<typeof actions>
export type InitialStateType = typeof initialState

export default tableReducer