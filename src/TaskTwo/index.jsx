import React, { useEffect, useState } from "react";
import './style.css';

export const TaskTwo = () =>{

    const [uniqueArr,setUniqueArr] = useState([3, 2, 2, 3, 2, 3, 2, 3, 5, 2, 4, 9, 3])
    const [newUniqueArr,setNewUniqueArr] = useState('')

    useEffect(()=>{
       
        let newArr = []

        uniqueArr.filter((item,index)=>{
            if(uniqueArr.indexOf(item)===index){
                newArr.push(item)
            }
        })

        setNewUniqueArr(newArr)
           
    },[])

    return <div>
        <p>{newUniqueArr}</p>
    </div>
}