import {AUTH, LOGOUT} from '../constants/actionTypes'

const authReducer = (state = { authData: null , loggedIn: false}, action) => {
    switch (action.type){
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return {...state, authData: action?.data, loggedIn : true, loading: false, errors: null};
        case LOGOUT:
            localStorage.clear();
            return {...state, authData: null, loggedIn: false, loading: false, errors: null};    
        default:
            return state;
    }

}

export default authReducer;