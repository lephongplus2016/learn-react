// cấu hình store
const initState = {
    users: [
        { id: 1, name: 'Eric' },
        { id: 2, name: 'Hoi Dan IT' }
    ]
}
// mặc định trả về state được hardcore là initState
const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;