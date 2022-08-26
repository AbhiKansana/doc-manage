
import axios from 'axios'
import url from '../../utils/commonURL'

export const actionTypes = {
    SIGNUP_REQUEST : "SIGNUP_REQUEST",
    SIGNUP_SUCCESS : "SIGNUP_SUCCESS",
    SIGNUP_FAILURE : "SIGNUP_FAILURE",
    SINGUP_STATUS_FALSE:"SINGUP_STATUS_FALSE"
}





function singupRequest(){
    return{
        type : actionTypes.SIGNUP_REQUEST       
    }
}

function signupSucess(data){
    return{
        type : actionTypes.SIGNUP_SUCCESS,
        payload: data
    }
}


function signupFailure(){
    return{
        type : actionTypes.SIGNUP_FAILURE
    }
}

export function signupStatusFalse(){
    return{
        type : actionTypes.SINGUP_STATUS_FALSE
    }
}



export function mainSignupRequest(obj){
        
    return (dispatch) =>{
        // console.log(obj)
         dispatch(singupRequest())
         axios.post(`${url}/usersData`,obj)
         .then(res=>{
            dispatch(signupSucess())
         })
         .catch(err=>{
            console.log('signup_Error',err)
            dispatch(signupFailure())
         })
    }

}



