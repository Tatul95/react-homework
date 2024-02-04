import React, { useState } from "react";

export const XndirFor = () =>{

    const [count,setCount] = useState(0)

   const countClick = () =>{

    setCount(count+1)
   }

    return <div>
        <button onClick={countClick}>Click me</button>
        <p>{count}</p>
    </div>
}