import React, { useState } from "react";

export const XndirOne = ()=>{

const [size,setSize] = useState(18)

function clickSize (){
    if(size===30){
        setSize(18)
    }else{
        setSize(30)

    }


}
    return <div>
        <button onClick={clickSize}>Click me</button>
        <p style={{fontSize:size+'px'}}>Lorem ipsum dolor sit amet.</p>
    </div>
} 