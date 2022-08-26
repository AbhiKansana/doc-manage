
import { actionTypes } from "./actions";

const init = {
    isLoading : false,
    isError   : false,
    isSigned    : false,

}


export default function singupReducer (state = init,action){
    switch(action.type){
        case actionTypes.SIGNUP_REQUEST :
            return {
                ...state,
                isLoading : true,
                isError : false,
                
            }
        case actionTypes.SIGNUP_SUCCESS :
            return {
                ...state,
                isLoading : false,
                isError : false,
                isSigned : true
            }
        case actionTypes.SIGNUP_FAILURE :
            return {
                ...state,
                isLoading : false,
                isError : true,
            }
        case actionTypes.SINGUP_STATUS_FALSE :
            return {
                ...state,
                isSigned : false
            }
        default :
        return state
    }
}