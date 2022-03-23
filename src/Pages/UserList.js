import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function UserList() {
    const [user, setUser]=useState(null)
    const url='https://randomuser.me/api/?results=50'

    useEffect(()=>{
        axios.get(url)
        .then(response=>{
           setUser(response.data)                      
        })
    },[ url])

    if (!user) return null
    
  const userList=user.results 
  console.log(userList)
 
  
  return (
    <div className="App">

        <h1>Meet The Team</h1>
        <h2>Name</h2>
        {userList.map((email, key)=>{
          return <>
            <p key={key}>{email.email}</p>
          </>
        })}
    </div>
  )
}
