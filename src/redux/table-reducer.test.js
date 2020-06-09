import tableReducer, {addItem, changeHeight, deleteItem} from "./table-reducer";


const testState = {
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




describe('table actions', () => {
    it('count of items should be incremented',  () => {
        const action = addItem('11.09.2020', 100, 23, 32, 32, 32)
        const newState = tableReducer(testState, action)
        expect(newState.items.length).toBe(8)
    })

    it('count of items should be decremented',  () => {
        const action = deleteItem(2)
        const newState = tableReducer(testState, action)
        expect(newState.items.length).toBe(6)
    })

    it('change my height', () => {
        const action = changeHeight(179)
        const newState = tableReducer(testState, action)
        expect(newState.userHeight).toBe(179)
    })
})