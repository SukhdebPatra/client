import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom'


const RestoSearch = () => {
  const [searchData, setSearchData] = useState("");
  const [lastSearch, setLastSearch] = useState('')

  const nevigate=useNavigate();

  // const search=(key)=>{
  //   console.log(key);
  //   fetch(`http://localhost:3000/restaurant?q=${key}`).then((data)=>{
  //     data.json().then((resp)=>{
  //       console.log(resp);
  //       setSearchData({searchData:resp})
  //     })
  //   })

  // }

  const serachHandler = async (e) => {
    setLastSearch({lastSearch:e})
    console.log(e.target.value);
    let key = e.target.value;
    let result = await fetch(`http://localhost:3000/restaurant?q=${key}`);
    result = await result.json();
    if (result) {
      setSearchData(result);
      setLastSearch(lastSearch)
    
      
    }
  };


  const deleteUser=(id)=>{
    fetch(`http://localhost:3000/restaurant/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((res)=>{
        console.log(res);
        setLastSearch(id);
        setLastSearch(lastSearch)
        nevigate("/list");
        
       

 
      })
    })
 
   }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">

         
      <h1> RestoSearch</h1>
      {/* <input type="text" onChange={(e)=>search(e.target.value)} /> */}
      <div>
        <input
          className="form-control"
          aria-label="Small"
          placeholder="Search Restro"
          type="text"
          onChange={serachHandler}
        />
      </div>
      <div>
       
            {searchData ? (
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
                {searchData.map((ele) => {
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
            ) : null}
         
      </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default RestoSearch;
