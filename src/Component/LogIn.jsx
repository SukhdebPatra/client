import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


const LogIn = (props) => {
    const [name, setName] = useState('')
const [password, setPassword] = useState('')
let nevigate=useNavigate();


const LogIn=(e)=>{
    e.preventDefault();
    fetch('http://localhost:3000/login?q='+ name)
    .then((data)=>{
        data.json().then((res)=>{
            console.log(res);
            if(res.length>0){
                localStorage.setItem('login',JSON.stringify(res))
             nevigate('/List')

            }else{
                alert('plz check user name and password')
            }
        })
    })
    console.log(name,password);

}
    return (
    <div>
        <Navbar/>
      <h1>LogIn</h1>
      <form action="">
      <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} />
      <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={LogIn}>LogIn</button>
      </form>
   
    </div>
  );
};

export default LogIn;
