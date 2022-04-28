import React, { useState, useEffect } from "react";

const RestoCreate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [address, setAddress] = useState("");

  const create = (e) => {
    e.preventDefault();
   const data={name, email, rating, address};
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch("http://localhost:3000/restaurant", requestOptions)
      .then(response => response.json())
      .then(res => console.log(res));
  };
 
  return (
    <div className="App">
      <h1 className="text-primary">Create Restaurant</h1>
      <input
        type="text"
        placeholder="Restaurant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Restaurant Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Restaurant Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Restaurant Email"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />

      <button onClick={create} type="submit">
        Add Restaurant
      </button>
    </div>
  );
};

export default RestoCreate;
