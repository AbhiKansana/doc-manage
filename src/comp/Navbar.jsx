import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginLogout } from '../redux/login/actions'

const Navbar = () => {
   const state = useSelector(state=>state.login)
   const dispatch = useDispatch()
   const nav = useNavigate()
  //  console.log("state",state)
  const loggedUser = state.loggedUser
  const auth = state.isAuth
  function handleLogout(){
    localStorage.removeItem("mock11")
    dispatch(loginLogout())
    nav('/')
  }


  return (
    <Box bg={'#cbf3f0'}  p='20px'>
        <Flex m='auto' w={'400px'} justifyContent='space-between'>
            <Link to='/'><Text>Home</Text></Link>
           {!auth && <Link to='/login'><Text>Login</Text></Link>}
           {auth && <Text cursor={'pointer'} onClick={handleLogout}>Logout</Text>}
            <Link to='/signup'><Text>Signup</Text></Link>
            {auth &&  <Text color={'blue.400'}>Hi, Dr {loggedUser}</Text>}   
        </Flex>
    </Box>
  )
}

export default Navbar