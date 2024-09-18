import React,{useState} from 'react'

const Counter = () => {
   const [data,setData]=useState(0);
    const increment=()=>{
      
      setData(data+1);
      
     }
    const decrement=()=>{
      if(data>0){
        setData(data-1);
      }
      
     }
    
     return <div>
     
     <button onClick={increment}>+</button>
     <h1>{data}</h1> 
     <button onClick={decrement}>-</button>
    
    </div>
}


export default Counter
