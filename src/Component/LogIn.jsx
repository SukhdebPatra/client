import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from 'axios'
import Hello from "./Hello";

const LogIn = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let nevigate = useNavigate();

  const LogIn = (e) => {
    e.preventDefault();
    
    axios.get("http://localhost:3000/login?q=" + name).then((res) => {
          
   
   
    if(res.data && res.data.length){
        console.log('success');  
        console.log(res.data[0].name);
        localStorage.setItem("login",JSON.stringify(res));
        nevigate("/List");


    }
    else{
        console.log('not found');
    }





    //   data.json().then((res) => {
    //     console.log(res);
    //     if (res.length>0) {
    //       localStorage.setItem("login",JSON.stringify(res));
    //       nevigate("/List");
    //     } else {
    //       alert("plz check user name and password");
    //     }
    //   });
    }).catch((error)=>{

        console.log('error');
        console.log(error);

    })
   
  };
  return (
    <div>
      <Navbar />
      
      <center>
          <Marquee pauseOnHover speed={[60]}  gradientColor={[153,603,193]} gradientWidth={200}>
              <h2 className="text-secondary">You Have to Enter Admin's UserName And Password For Login 😂😂😂</h2>
          </Marquee>
        <div className="contaniner">
          <div className="row ">
            <div className="col">
            <h1 className="mt-5 mb-5 text-danger ">Login</h1>
              <form action="">
                <input
                  className="form-control col-sm-4"
                  type="text"
                  value={name} placeholder='Enter Name'
                  onChange={(e) => setName(e.target.value)}
                />
                <br /> <br />
                <input
                  className="form-control col-sm-4"
                  type="password"
                  value={password}  placeholder='Enter Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br /> <br />
                <button className="btn btn-primary mb-2" onClick={LogIn}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default LogIn;
