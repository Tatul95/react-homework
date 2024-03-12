import React, { useState } from "react";
import './style.css'

export const XndirSix = () =>{

    const [inputValue,setInputValue] = useState('')
    

    const handleChange = (e) =>{
        setInputValue(e.target.value)
        if(e.target.value.length>15 && e.target.value.length<20){
           
        }
    }

    return <div>
        <input onChange={handleChange} type="text"/>
        <p>{inputValue}</p>
    </div>
}