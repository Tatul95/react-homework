import React, { useState } from "react";
import './style.css';

export const ExampleOne = () => {

    const [numData, setNumData] = useState('')
    const [numValue, setNumValue] = useState('')
    const [errorData, setErrorData] = useState({
        errorMassage: ''
    })

    const handleChange = (e) => {
        setNumData(e.target.value)
    }

    const handleClick = () => {
        if (+numData) {
            setNumData(numData * numData)
            setNumValue(numData * numData)
        }
        else {
            setErrorData({ errorMassage: 'tiv chi' })
        }


    }


    return <div>

        <label htmlFor="">
            <input onChange={handleChange} type="text" />
        </label>
        <button onClick={handleClick}>Click me</button>

     { numValue ? <p>{numValue}</p> : <p>{errorData.errorMassage}</p>}

   </div>
}