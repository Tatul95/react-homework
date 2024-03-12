import React, { useEffect, useState } from "react";
import './style.css';

export const TaskOne = () =>{

    const [numValue,setNumValue] = useState([3, 'a', 'a', 'a', 2, 3,'a', 3, 'a', 2, 4, 9, 3])
    const [newValue,setNewValue] = useState('')

    useEffect (()=>{
       let count = 0

       numValue.forEach((item,index)=>{

        if(item!==+item){count = count + 1}
       })

       setNewValue(count)

    },[])

    return <div>
        <p>{newValue}</p>
    </div>
}