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
    ]
}

const tableReducer = (state = initialState, action : any) => {
    switch (action.type) {
        case ADD_ITEM: {
            return {
                ...state,
                items: []
            }
        }

        case DELETE_ITEM: {
            return {
                ...state,
                items: []
            }
        }

        default: {
            return state
        }

    }
}


export const addItem = () => ({type: ADD_ITEM})
export const deleteItem = () => ({type: DELETE_ITEM})

export default tableReducer