export const initialState = {
    userName: null
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "adduser" :
            return {
                ...state,
                userName: action.userName
            }

        default:
            return state;
    }
};

export default reducer;