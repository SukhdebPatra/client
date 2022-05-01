import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const LogIn = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let nevigate = useNavigate();

  const LogIn = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login?q=" + name).then((data) => {
      data.json().then((res) => {
        console.log(res);
        if (res.length > 0) {
          localStorage.setItem("login", JSON.stringify(res));
          nevigate("/List");
        } else {
          alert("plz check user name and password");
        }
      });
    });
    console.log(name, password);
  };
  return (
    <div>
      <Navbar />
      <h1 className="App ">Login</h1>
      <center>
        <div className="contaniner">
          <div className="row ">
            <div className="col">
              <form action="">
                <input
                  className="form-control col-sm-4"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br /> <br />
                <input
                  className="form-control col-sm-4"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />{" "}
                <br /> <br />
                <button className="btn btn-primary mb-2" onClick={LogIn}>
                  LogIn
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
