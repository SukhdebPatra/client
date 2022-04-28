import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

const RestoUpdate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [address, setAddress] = useState("");

  const params=useParams();

  useEffect(() => {
    
    getproductDetails();
    
  }, [])
  
const getproductDetails=async()=>{
  console.log(params);
  let result=await  fetch(`http://localhost:3000/restaurant/${params.id}`);
  result =await result.json()
  console.log(result);
  setName(result.name)
  setEmail(result.email)
  setRating(result.rating)
  setAddress(result.address)
  

}

const update=(e)=>{
  e.preventDefault();
  console.log(name,email,rating,address);
}
  
  return (
    <div>
      <h1>RestoUpdate</h1>
      <form>
      <input className="form-control"
        type="text"
        placeholder="Restaurant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input className='form-control'
        type="text"
        placeholder="Restaurant Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text" className='form-control'
        placeholder="Restaurant Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <br />
      <input
        type="text" className='form-control'
        placeholder="Restaurant Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />

      <button className='btn btn-outline-danger' onClick={update} type="submit">
        Edit Restaurant
      </button>
      </form>

    </div>
  )
}

export default RestoUpdate