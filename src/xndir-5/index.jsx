import React, { useState } from "react";
import "./style.css"

export const XndirFife = () =>{

    const [darkMode,setDaarkMode] = useState(false)

   const inClick = () =>{   
        
        setDaarkMode(!darkMode)

   }

    return <div className={`${darkMode?'div-box-dark':'div-box'}`}> 
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, eum.</p>
        <button onClick={inClick}>Click me</button>
    </div>
}