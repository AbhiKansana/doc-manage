import React from 'react'
import Home from './Home'
import Login from './Login'
import { useSelector } from 'react-redux'

const CheckHome = () => {
    const auth1 = useSelector(state=>state.login.isAuth)
    if(auth1){
        return (
            <Home/>
        )
    }

    else{
        return(
            <Login/>
        )
    }
}

export default CheckHome