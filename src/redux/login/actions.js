
import axios from 'axios'
import url from '../../utils/commonURL'

export const actionTypes = {
    LOGIN_REQUEST : "LOGIN_REQUEST",
    LOGIN_SUCCESS : "LOGIN_SUCCESS",
    LOGIN_FAILURE : "LOGIN_FAILURE",
    LOGIN_LOGOUT : "LOGIN_LOGOUT"
}





function loginRequest(){
    return{
        type : actionTypes.LOGIN_REQUEST       
    }
}

function loginSucess(data){
    return{
        type : actionTypes.LOGIN_SUCCESS,
        payload: data
    }
}


function loginFailure(){
    return{
        type : actionTypes.LOGIN_FAILURE
    }
}

export function loginLogout(){
    return{
        type : actionTypes.LOGIN_LOGOUT
    }
}


export function mainloginRequest(obj){
    return (dispatch)=>{
        dispatch(loginRequest())
        axios.get(`${url}/usersData`)
        .then(res=>{
            let flag = false
            res.data.forEach(ele=>{
                if(ele.email===obj.email && ele.password===obj.password){
                    flag = true
                    // user verified //
                    dispatch(loginSucess(ele.name))
                    let name = ele.name
                    // console.log("name",name)
                    localStorage.setItem("mock11",name)

                }
            })
            if(!flag){
                // Didn't verified
                dispatch(loginFailure())
            }
        })
        .catch(err=>{
            console.log("login error",err)
            dispatch(loginFailure())
        })
    }
}



