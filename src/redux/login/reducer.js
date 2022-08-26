
import { actionTypes } from "./actions";

const name = localStorage.getItem("mock11")
let auth = false
if(name){
    auth = true
}


const init = {
    isLoading : false,
    isError   : false,
    isAuth    : auth,
    loggedUser : name || null
}


export default function loginReducer (state = init,action){
    switch(action.type){
        case actionTypes.LOGIN_REQUEST :
            return {
                ...state,
                isLoading : true,
                isError : false,
                
            }
        case actionTypes.LOGIN_SUCCESS :
            return {
                ...state,
                isLoading : false,
                isError : false,
                isAuth  : true,
                loggedUser : action.payload
            }
        case actionTypes.LOGIN_FAILURE :
            return {
                ...state,
                isLoading : false,
                isError : true,
            }
        case actionTypes.LOGIN_LOGOUT :
            return {
                ...state,
                isAuth : false,
                loggedUser:null
            }
        default :
        return state
    }
}