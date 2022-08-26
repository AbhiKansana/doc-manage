
import { actionTypes } from "./actions";

const init = {
    isLoading : false,
    isError   : false,
    data : null
}


export default function pateintDataReducer (state = init,action){
    switch(action.type){
        case actionTypes.PATIENT_DATA_REQUEST :
            return {
                ...state,
                isLoading : true,
                isError : false,
                
            }
        case actionTypes.PATIENT_DATA_SUCCESS :
            return {
                ...state,
                isLoading : false,
                isError : false,
                isAuth  : true,
                data : action.payload
            }
        case actionTypes.PATIENT_DATA_FAILURE :
            return {
                ...state,
                isLoading : false,
                isError : true,
            }
        case actionTypes.PATIENT_DATA_SORT :
            return {
                ...state,
                data : action.payload
            }
        default :
        return state
    }
}