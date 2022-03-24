import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Component/Card'
import '../CSS/UserList.css'
import {BsSearch} from 'react-icons/bs'
import {BiSortAZ} from 'react-icons/bi'
import {FaThList} from 'react-icons/fa'

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
     <div className='search-bar'>
        <a href='#'> <BiSortAZ className='icons'/></a>
        <form action="/action_page.php">
          
          <BsSearch /><input type="text" placeholder="Search.." name="search" className='search-box'/>
        </form>
        <a> <FaThList className='icons'/></a>
     </div>

         {/*         {userList.map((email, key)=>{
          return <>
            <p key={key}>{email.email}</p>
          </>
        })} */}
        <div className='card-items'>
            <div className='card-item'><Card /></div>
            <div className='card-item'><Card /></div>
            <div className='card-item'><Card /></div>
            <div className='card-item'><Card /></div>
            <div className='card-item'><Card /></div>
            <div className='card-item'><Card /></div>
            <div className='card-item'><Card /></div>
            <div className='card-item'><Card /></div>
            <div className='card-item'><Card /></div>
            <div className='card-item'><Card /></div>

        </div>

    </div>
  )
}
