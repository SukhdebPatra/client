import React,{useState} from "react";

const RestoSearch = () => {
  
const [searchData, setSearchData] = useState('')


  // const search=(key)=>{
  //   console.log(key);
  //   fetch(`http://localhost:3000/restaurant?q=${key}`).then((data)=>{
  //     data.json().then((resp)=>{
  //       console.log(resp);
  //       setSearchData({searchData:resp})
  //     })
  //   })

  // }

  const serachHandler=async(e)=>{
    console.log(e.target.value);
    let key =e.target.value;
    let result=await fetch(`http://localhost:3000/restaurant?q=${key}`)
    result= await result.json();
    if(result){
      setSearchData(result)
    }
  }
  return (
    <div>
    
      <h1> RestoSearch</h1>
      {/* <input type="text" onChange={(e)=>search(e.target.value)} /> */}
      <div>
      <input type="text" onChange={serachHandler} />
      </div>
      <div>
        {
          searchData ?
          <div>
            {
           searchData.map((item)=>{
             return (
              <ul key={item.id}>
                <li>{item.name}</li>
              </ul>

              

             )
               
              })
            }
            </div>
            : null
        }
      </div>
      
    </div>
  );
};


export default RestoSearch;
