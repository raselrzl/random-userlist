import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {BsSearch} from 'react-icons/bs'
import {BiSortAZ} from 'react-icons/bi'
import {FaThList} from 'react-icons/fa'
import {BsGrid3X3GapFill} from 'react-icons/bs'
import Gridview from '../Component/Gridview'
import ListView from '../Component/ListView'

export default function UserList() {
    const [user, setUser]=useState(null)
    const [listview, setListview]=useState(true)
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


 const view=(listview?<ListView />: <Gridview/>)
 const viewicon=(listview?<BsGrid3X3GapFill className='icons' id="list-icon"/>:<FaThList className='icons' id="list-icon"/>)

 const handleClick=()=>{
        setListview(!listview)
 }
  
  return (
    <div className="App">         
     <h1>Meet The Team</h1>
     <div className='search-bar'>
        <button className='click-button'> <BiSortAZ className='icons'/></button>
        <form action="/action_page.php">          
          <BsSearch /><input type="text" placeholder="  Search" name="search" className='search-box'/>
        </form>
        <button className='click-button' onClick={handleClick}> {viewicon}</button>
     </div>

         {/*         {userList.map((email, key)=>{
          return <>
            <p key={key}>{email.email}</p>
          </>
        })} */}

        {view}

    </div>
  )
}
