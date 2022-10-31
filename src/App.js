import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';


const App=()=>{
  
const [allData,setAllData]=useState([]);

const [filterData, setFilterData]=useState(allData);





const handleSearch=(event)=>{
 

<div className= "App">
<div style={{margin: 'auto',marginTop: '10' }}>
<label>Search:</label>
<input type="text" onChange={(event)=>
handleSearch(event)}/>
</div>
<div style={{padding:10}}>
{filterData.map((value,_index)=>{
  return(
    <div key={value.id}>
  
    {value.title}
    </div>
   
  )
    
  
})}
</div>
</div>
}
useEffect(()=>{
  axios('https://jsonplaceholder.typicode.com/posts')
  .then(response =>{
    console.log(response.data)
    setAllData(response.data)
    setFilterData(response.data)
  })
  .catch(error =>{
    console.log('Error getting fake data' +error)
  })
},[])


}

export default App