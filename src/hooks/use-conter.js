import { useState,useEffect } from "react"

function useCounter(initialCount){
    const [count,setCount]=useState(initialCount)
  
    useEffect(()=>{
        console.log(count)
    },[count])
  
    const incerment=()=>{
        setCount(count+1)
    }
  
    return{
      count,
      incerment
    }
  }

  export default useCounter;