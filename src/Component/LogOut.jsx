import React from 'react'
import { useNavigate,Navigate } from "react-router-dom";
import Navbar from './Navbar';

const LogOut = () => {
    // const nevigate=useNavigate();
  localStorage.clear()
//   if(clare){
//       nevigate('/login');
//   }
 
    
  return (
      <>
      <Navigate to='/login'/>

      <Navbar/>
      </>
  )
  
}

export default LogOut