import * as Types from "./../constants/ActionTypes";
// import * as MSG from "./../constants/Message";

let inittialState = {};

const user = (state = inittialState, action) => {
    switch (action.type) {
        case Types.FETCH_USER_DATA:
            state = action.user;
            return state;
        case Types.REMOVE_USER:
            state = {};
            return state;
        default: return state;
    }
}

export default user;