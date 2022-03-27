import React, { useState, useEffect } from 'react'
import {BsSearch} from 'react-icons/bs'
import {BiSortAZ} from 'react-icons/bi'
import {FaThList} from 'react-icons/fa'
import {BsGrid3X3GapFill} from 'react-icons/bs'
import Gridview from '../Component/Gridview'
import ListView from '../Component/ListView'
import axios from 'axios'

export default function UserList() {

const [listview, setListview]=useState(true)

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
 const view=(listview?<ListView userList={userList} />: <Gridview userList={userList}/>)
 const viewicon=(listview?<BsGrid3X3GapFill className='icons' id="list-icon"/>:<FaThList className='icons' id="list-icon"/>)

 const handleClick=()=>{
        setListview(!listview)
 }
  
  return (
    <div className="App">  
        
     <h1>Meet The Team</h1>
     <div className='search-bar'>
        <button className='click-button'> <BiSortAZ className='icons' id="sort-icon"/></button>
        <form action="/" id="form">          
          <BsSearch /><input type="text" placeholder="" name="search" className='search-box'/>
        </form>
        <button className='click-button' onClick={handleClick}> {viewicon} </button>
     </div>     
        {view}
    </div>
  )
}
