import React, { useState } from "react";
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
  Box,
  Flex,
  Text,
  Image,
  Select,
  Spinner,
  Center,
} from "@chakra-ui/react";
import {
  mainPatientDataRequest,
  patientDeleteRequest,
  patientDataSort,
} from "../redux/patient/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AddPatient from "./AddPatient";

const PatientTable = () => {
  const state = useSelector((state) => state.patientsData);
  const dispatch = useDispatch();
  const load = state.isLoading;

  useEffect(() => {
    dispatch(mainPatientDataRequest());
  }, []);

  function handleDelete(id) {
    dispatch(patientDeleteRequest(id));
  }

  // Handling Sort
  function handleSort(e) {
    if (e.target.value === "l2h") {
      const arr = state.data.sort((a, b) => a.age - b.age);
      dispatch(patientDataSort(arr));
    } else if (e.target.value === "h2l") {
      const arr = state.data.sort((a, b) => b.age - a.age);
      dispatch(patientDataSort(arr));
    }
  }

  function handleGender(e) {
    console.log(e.target.value);
    if (e.target.value === "male") {
      const arr = state.data.filter((ele) => {
        return ele.gender === "male";
      });
      dispatch(patientDataSort(arr));
    } else if (e.target.value === "female") {
      const arr = state.data.filter((ele) => {
        return ele.gender === "female";
      });
      dispatch(patientDataSort(arr));
    } else {
      dispatch(mainPatientDataRequest());
    }
  }

  const arr = state?.data?.map((ele, ind) => {
    return (
      <Tr key={ele.id}>
        <Td>{ele.id}</Td>
        <Td>{ele.name}</Td>
        <Td>{ele.age}</Td>
        <Td>{ele.gender}</Td>
        <Td>
          <Link to={`/patient/${ele.id}`}>
            <Text
              textDecoration={"underline"}
              color="blackAlpha.800"
              w="fit-content"
              p="5px 10px"
              bg="blue.300"
            >
              View
            </Text>
          </Link>
        </Td>
        <Td>
          <Button onClick={() => handleDelete(ele.id)}>Delete</Button>
        </Td>
        <Td>
          <Image
            width={"40px"}
            src="https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
          />
        </Td>
      </Tr>
    );
  });

  return (
    <Box position={"relative"} w="80%" m="auto" maxw="1000px">
      <Box position={"absolute"} right="120px" top="5px">
        <AddPatient />
      </Box>
      {load && (
        <Text textAlign={"center"} fontSize="1.25rem" mt="25px">
          Loading...
          <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        </Text>
      )}
      {!load && (
        <Text textAlign={"center"} fontSize="1.25rem" mt="25px">
          Patients Table
        </Text>
      )}
      <Flex mt="30px" gap="30px">
        <Select
          w="180px"
          onChange={(e) => handleSort(e)}
          placeholder="Sort By Age"
        >
          <option value="l2h">Low to High</option>
          <option value="h2l">High to Low</option>
        </Select>

        <Select
          w="180px"
          onChange={(e) => handleGender(e)}
          placeholder="Sort By Gender"
        >
          <option value="">Reset</option>
          <option value="male">Male</option>
        </Select>
      </Flex>
      <Box marginTop={"2rem"} border={"2px solid #777"}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>S.No</Th>
                <Th>Patient Name</Th>
                <Th>Age</Th>
                <Th>Gender</Th>
                <Th>View</Th>
                <Th>Delete</Th>
                <Th>Image</Th>
              </Tr>
            </Thead>
            <Tbody>{arr}</Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PatientTable;
