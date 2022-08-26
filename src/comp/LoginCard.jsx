import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Spinner,
    Center,
  } from '@chakra-ui/react';
import axios from 'axios'
import { useState } from 'react';
import {Link as Link1} from 'react-router-dom'
import { mainloginRequest } from '../redux/login/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Error from './Error';

  
  export default function LoginCard() {

    const[password,setPassword] = useState("")
    const[email,setEmail] = useState("")

    const dispatch = useDispatch()
    const nav = useNavigate()
    const state = useSelector(state=>state.login)
    const isLoading = state.isLoading
    const isAuth = state.isAuth
    const isError = state.isError

    useEffect(()=>{
      if(isAuth){
        nav('/')
      }
    },[isAuth])

    function handleClick(){
      const obj = {password,email}
      if(email && password){
        dispatch(mainloginRequest(obj))
        
      }
      else{
        alert("Fill proper info")
      }

    }

    return (
      <>
      {isError && <Center mb='-6rem' mt='2rem'>
      <Error/>
      </Center>}
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Log in to your account</Heading>
            {isLoading && <Center>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
/>
            </Center>}
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  onClick={handleClick}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Don't have a account? <Link1 to='/signup'><span style={{color:"blue"}}>Singup</span></Link1> 
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </>
    );
  }