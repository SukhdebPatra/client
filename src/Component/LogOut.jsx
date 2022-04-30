import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

const LogOut = () => {
    const nevigate=useNavigate();
  let clare=  localStorage.clear()
  if(clare){
      nevigate('/login');
  }
    
  return (
      <>
      <Navbar/>
      </>
  )
  
}

export default LogOut