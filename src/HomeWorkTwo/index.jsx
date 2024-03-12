import React, { useEffect, useState } from "react";
import './style.css'

export const ExampleTwo = () =>{

    const [numArray,setNumArray] = useState([1,5,8,4,98,3,7])
    const [sumValue,setSumValue] = useState('')
    const [sumZuyg, setSumZuyg] = useState('')
    const [sumBazmapatik,setSumBazmapatik] = useState('')

    useEffect (()=>{
        let sum = 0
        let zuyg = 0
        let count = 0

        numArray.forEach((item,index)=>{
            

            sum = sum+item

            if(item%2===0){zuyg=zuyg+item}

            if(item%5===0){count=count+1}
           
        })
        setSumValue(sum)
        setSumZuyg(zuyg)
        setSumBazmapatik(count)
        
    },[])

    return <div>
      <p>{sumValue}</p>
      <p>{sumZuyg}</p>
      <p>{sumBazmapatik}</p>
    </div>
}