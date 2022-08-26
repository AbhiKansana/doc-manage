import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import CheckHome from "./CheckHome";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "../comp/Navbar";
import PatDesc from "./PatDesc";

const Router = () => {
  return (<Box>
    <Navbar/>
    <Routes>
        <Route path='/' element={<CheckHome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/patient/:id' element={<PatDesc/>}/>
    </Routes>
     
 </Box>);
};

export default Router;
