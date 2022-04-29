import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit,faTrash} from '@fortawesome/free-solid-svg-icons'


import {Link} from 'react-router-dom'


const RestoList = () => {
  const [list, setList] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/restaurant")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="App">
        <h1>Restaurant List</h1>
      </div>
      <div>
        <table className="table table-hover table-dark table-sm">
          <thead className="bg-success">
            <tr >
              <th className="bg-danger">Id</th>
              <th className="bg-info">name</th>
              <th>Address</th>
              <th className="bg-warning">Rating</th>
              <th className="bg-primary">Email</th>
              <th className="bg-warning">Opration</th>
            </tr>
          </thead>
      <tbody>

     
        {
          list.map((ele)=>{
            return(
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.address}</td>
                <td>{ele.rating}</td>
                <td>{ele.email}</td>
                <td> <Link  to={"/update/"+ele.id}><FontAwesomeIcon icon={faEdit }color='yellow'/></Link>
                <Link  to={"/update/"+ele.id}><FontAwesomeIcon icon={faTrash }color='red'/></Link></td>
              </tr>
             
            )

          })
        }
         </tbody>
          </table>
      </div>
    
    </>
  );
};

export default RestoList;
