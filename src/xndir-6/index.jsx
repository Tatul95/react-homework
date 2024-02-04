import React, { useState } from "react";

export const XndirSix = () =>{

    const [inputValue,setInputValue] = useState('')

    const handleChange = (e) =>{

        if(setInputValue(e.target.value.length>15) && setInputValue(e.target.value.length<20)){
            setInputValue()
        }
        else{setInputValue(e.target.value)}
    }

    return <div>
        <input onChange={handleChange} type="text" />
        <p>{inputValue}</p>
    </div>
}