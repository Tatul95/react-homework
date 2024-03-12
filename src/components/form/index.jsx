import { useReducer, useState } from "react"
import { useDispatch } from "react-redux"

export const Form = () =>{
     
    const [userName,setUserName] = useState('')
    const disputch = useDispatch()

    const handleClick = () =>{
           
        disputch({type:'ADD_USER', payload:userName})
        setUserName('')
        
    }

    const handleChange = (e) =>{
           
        setUserName(e.target.value)

    }

    return <div>
        <div>
            <label htmlFor="">
                <input type="text" value={userName} onChange={handleChange} />
            </label>
        </div>
        <button onClick={handleClick}>Click me</button>
    </div>
}