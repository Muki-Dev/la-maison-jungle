const initialState = {userInfo: null};

export default function userReducer(state = initialState, action){
    switch(action.type){
        case 'USER_LOGIN': 
            return {...state,userInfo: action.payload};
        case 'USER_LOGOUT':
            return {...state,userInfo: null};
        default:
            return state;
    }
}