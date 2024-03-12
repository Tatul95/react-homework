import React, { useEffect, useState } from "react";
import './style.css';

export const List = () =>{

    const [menuList,setMenuList] = useState('')

    const handleClick = (value) =>{
        
        setMenuList(value)
        localStorage.setItem('active', value);
    }

    useEffect(()=>{
        let x = localStorage.getItem('active')
        if(x){
            setMenuList(+x)
        }
    },[])



    return <div>
        <div className="menu-list">
            <ul>
                <li className={`${menuList===1?'active':''}`} onClick={()=>{handleClick(1)}}>List 1</li>
                <li className={`${menuList===2?'active':''}`} onClick={()=>{handleClick(2)}}>List 2</li>
                <li className={`${menuList===3?'active':''}`} onClick={()=>{handleClick(3)}}>List 3</li>
            </ul>
        </div>
    </div>
}