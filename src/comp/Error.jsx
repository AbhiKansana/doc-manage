import { Button, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const Error = () => {
    const[view,setView] = useState(true)

  return (
    <div>
       {view &&  <Center borderRadius={'10px'} padding={'10px'} bg='red.300'   w='300px' >
            <Text fontSize={'1.25rem'}>There is some error</Text>
            <Button p='0' colorScheme={'red'} ml='30px' onClick={()=>setView(false)}>X</Button>
        </Center>}
    </div>
  )
}

export default Error