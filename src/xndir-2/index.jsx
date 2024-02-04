import React, { useState } from "react";

export const XndirTwo = () =>{

    const [toggleText,setToggleText] = useState(true)

    function toggleFoo(){

        setToggleText(!toggleText)
    }

    return <div>
        <button onClick={toggleFoo}>Click me</button>
        {toggleText?<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, iste.</p>:null}    
    </div>
}