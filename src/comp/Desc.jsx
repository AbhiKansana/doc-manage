
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import url from '../utils/commonURL'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Input,
    Text,
    Box,
    Flex,
    Center,
    Spinner,
  } from "@chakra-ui/react";

const Desc = () => {
    const {id} = useParams()
    // console.log("id",id)
    const[med,setMid] = useState({})
    const[isLoading,setIsLoading] = useState(false)


    const arr =  med.medicine?.map((ele,ind)=>{
        return (
            <Tr key={ind}>
                <Td>{ele.mName}</Td>
                <Td>{ele.mqty}</Td>
            </Tr>
        )
    })

    useEffect(()=>{
        setIsLoading(true)
        axios.get(`${url}/patientsData/${id}`)
        .then(res=>{
            // console.log(res.data)
            setMid(res.data)
            setIsLoading(false)
        })
        .catch(err=>{
            console.log("error",err)
        })

    },[])

  return (
    <Box w='500px' m='4rem auto'>
        <Text textAlign={'center'} fontSize='2.75em' my='40px'>Patient Information</Text>
         {isLoading && <Center>
            <Text>Loading...</Text>
            </Center>}
        <Flex pl='50px' mb='50px' flexDirection='column' alignItems={'left'} justifyContent='center'  >
        <Text>Name : {med.name}</Text>
        <Text>Age : {med.age}</Text>
        <Text>Gender : {med.gender}</Text>
        <Text>Medicine Information</Text>
        </Flex>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Medicine</Th>
                <Th>Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>
                {arr}
            </Tbody>
          </Table>
        </TableContainer>
    </Box>
  )
}

export default Desc