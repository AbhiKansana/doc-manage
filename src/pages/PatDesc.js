import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Desc from '../comp/Desc'

const PatDesc = () => {
    const auth1 = useSelector(state=>state.login.isAuth)
    const nav = useNavigate()
    useEffect(()=>{
        if(auth1===false){
            nav('/')
        }
    },[])
  return (
    <div>
        <Desc/>
    </div>
  )
}

export default PatDesc