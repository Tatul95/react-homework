import React, { useEffect, useState } from "react";
import './style.css';

export const TaskThree = () => {

    const [usersList, setUsersList] = useState([
        { name: 'User1', age: 25, email: 'user1@example.com', verified: true },
        { name: 'User2', age: 30, email: 'user2@example.com', verified: true },
        { name: 'User3', age: 28, email: 'user3@example.com', verified: true },
        { name: 'User4', age: 22, email: 'user4@example.com', verified: true },
        { name: 'User5', age: 35, email: 'user5@example.com', verified: true },
        { name: 'User6', age: 27, email: 'user6@example.com', verified: true },
        { name: 'User7', age: 32, email: 'user7@example.com', verified: true },
        { name: 'User8', age: 29, email: 'user8@example.com', verified: true },
        { name: 'User9', age: 26, email: 'user9@example.com', verified: true },
        { name: 'User10', age: 31, email: 'user10@example.com', verified: true },
    ])

    const [newUsersList, setNewUsersList] = useState([])

    const newUserName = (newList) =>{
        
            return  usersList.every(x=>x.verified)
    }

    // const userName = (name,bool) =>{
           

    
    //       usersList.forEach((item,index)=>{
    //              if(item.name===name){
    //                     item.verified = bool
    //              }
    //       })

    //       return usersList
        
    // }

    useEffect(() => {

        // console.log(userName('User1', false))
        // console.log(newUserName(usersList));


        // let newList = []

        // usersList.forEach((item, index) => {
        //     if (item.verified === true) {
        //         newList.push(item)
        //     }

        // })
        // setNewUsersList(newList)
        

    }, [])

    return <div>
        <p></p>
        {/* {newUsersList.map((item, index) => {
            return <div key={index} className="box"> 
                <h1>{item.name}</h1>
                <span>{item.age}</span>
                <p>{item.email}</p>
            </div>
        })} */}
    </div>
    





}