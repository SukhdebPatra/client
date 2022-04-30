import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";


import { Link } from "react-router-dom";

const RestoList = () => {
  const [list, setList] = useState([]);



  useEffect(() => {
    fetchData();
  }, []);

  // api call 
  const fetchData = () => {
    fetch("http://localhost:3000/restaurant")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data);
      });
  };

 

// Delete 1 data
  const deleteUser=(id)=>{
   fetch(`http://localhost:3000/restaurant/${id}`,{
     method:'DELETE'
   }).then((result)=>{
     result.json().then((res)=>{
       console.log(res);
       fetchData(id);

     })
   })

  }

  
  return (
    <>
      <div className="App">
        <h1 className="text-white  bg-info">Restaurant List</h1>
      </div>
      <div>
        <table className="table table-hover table-dark">
          <thead className="bg-success">
            <tr>
              <th className="bg-danger">Id</th>
              <th className="bg-info">name</th>
              <th>Address</th>
              <th className="bg-warning">Rating</th>
              <th className="bg-primary">Email</th>
              <th className="bg-warning">Opration</th>
            </tr>
          </thead>
          <tbody>
            {list.map((ele) => {
              return (
                <tr key={ele.id}>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.address}</td>
                  <td>{ele.rating}</td>
                  <td>{ele.email}</td>
                  <td>
                   
                    <Link cursor='pointer'  className="px-5" to={"/update/" + ele.id}>
                      <FontAwesomeIcon icon={faEdit} color="yellow" />
                    </Link>
                    <span  className="px-5" onClick={()=>deleteUser(ele.id)}>
                      <FontAwesomeIcon icon={faTrash} color="red"  />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RestoList;
