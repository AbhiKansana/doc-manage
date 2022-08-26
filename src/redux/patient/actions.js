
import axios from 'axios'
import url from '../../utils/commonURL'

export const actionTypes = {
    PATIENT_DATA_REQUEST : "PATIENT_DATA_REQUEST",
    PATIENT_DATA_SUCCESS : "PATIENT_DATA_SUCCESS",
    PATIENT_DATA_FAILURE : "PATIENT_DATA_FAILURE",
    PATIENT_DATA_SORT : "PATIENT_DATA_SORT"
    
}





function patientDataRequest(){
    return{
        type : actionTypes.PATIENT_DATA_REQUEST       
    }
}

function patientDataSucess(data){
    return{
        type : actionTypes.PATIENT_DATA_SUCCESS,
        payload: data
    }
}


function patientDataFailure(){
    return{
        type : actionTypes.PATIENT_DATA_FAILURE
    }
}

export function patientDataSort(data){
    return {
        type : actionTypes.PATIENT_DATA_SORT,
        payload :data
    }
}


export function mainPatientDataRequest(){
    return (dispatch)=>{
        dispatch(patientDataRequest())
        axios.get(`${url}/patientsData`)
        .then(res=>{
           dispatch(patientDataSucess(res.data))
        })
        .catch(err=>{
            console.log("patient_Data_Error",err)
            dispatch(patientDataFailure())
        })
    }
}

export function patientDeleteRequest(id){
    return (dispatch) => {
         axios.delete(`${url}/patientsData/${id}`)
         .then((res)=>{
            dispatch(mainPatientDataRequest())
            // console.log(res)
         })
         .catch(err=>{
            console.log("delete_err",err)
         })
    }
}

export function addPatientRequest(obj){
    return (dispatch) =>{
            console.log(obj)
            axios.post(`${url}/patientsData`,obj)
            .then(res=>{
                // console.log(res)
                dispatch(mainPatientDataRequest())
            })
            .catch(err=>{
                console.log("add_patient_error",err)
            })
    }
}



