// cấu hình store
const initState = {
    users: [
        { id: 1, name: "Eric" },
        { id: 2, name: "Hoi Dan IT" },
    ],
    posts: [],
};
// mặc định trả về state được hardcore là initState
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_USER":
            let users = state.users;
            // lọc users mới đã xóa id này
            users = users.filter((item) => item.id !== action.payload.id);
            // copy state cũ, đồng thời ghi đè users mới
            return {
                ...state,
                users,
            };

        case "CREATE_USER":
            let id = Math.floor(Math.random() * 10000);
            let user = { id: id, name: `random - ${id}` };

            return {
                ...state,
                users: [...state.users, user],
            };

        default:
            // mặc định không làm gì cả
            return state;
    }
};

export default rootReducer;
