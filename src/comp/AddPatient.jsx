import { Flex, useDisclosure } from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    Input,
    Button,
    FormLabel
  } from '@chakra-ui/react'
  import React,{useState, useEffect} from "react"
import { useDispatch } from "react-redux"
  import { addPatientRequest } from "../redux/patient/actions"

export default function AddPatient() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const dispatch = useDispatch()
    const finalRef = React.useRef(null)

    const[name,setName] = useState("")
    const[age,setAge] = useState("")
    const[gender,setGender] = useState("")
    const[medicine,setMedicine] = useState("")
    const[quantity,setQuantity] = useState("")

    function handleSave(){
        if(name && age && gender && medicine && quantity){

            const arr = [{mName:medicine,mqty:quantity}]
            const obj = {name,age,gender,medicine:arr}
            // console.log(obj)
            dispatch(addPatientRequest(obj))
        }
        else{
            alert("Fill Proper information")
        }
    }
  
    return (
      <>
        <Button onClick={onOpen}>Add Patient</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input onChange={(e)=>setName(e.target.value)} ref={initialRef} placeholder='Name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Age</FormLabel>
                <Input onChange={(e)=>setAge(e.target.value)} placeholder='Age' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Gender</FormLabel>
                <Input onChange={(e)=>setGender(e.target.value)} placeholder='Gender' />
              </FormControl>

           <Flex gap={'25px'}>
              <FormControl mt={4}>
                <FormLabel>Medicine Name</FormLabel>
                <Input onChange={(e)=>setMedicine(e.target.value)} placeholder='Name' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Quantity in no.</FormLabel>
                <Input type={'number'} onChange={(e)=>setQuantity(e.target.value)} placeholder='Quantity' />
              </FormControl>
              </Flex>

            </ModalBody>
  
            <ModalFooter>
              <Button onClick={handleSave} colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }