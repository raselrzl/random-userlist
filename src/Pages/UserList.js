import React, { useState, useEffect } from 'react'
import {BiSortAZ, BiSortZA} from 'react-icons/bi'
import {FaThList} from 'react-icons/fa'
import {BsGrid3X3GapFill} from 'react-icons/bs'
import Gridview from '../Component/Gridview'
import ListView from '../Component/ListView'
import axios from 'axios'
import Loading from '../Component/Loading'


export default function UserList() {
        const [viewcard, setViewcard]=useState(false)
        const [user, setUser]=useState(null)
        const [userSort, setUserSort]=useState(true)
        const url='https://randomuser.me/api/?results=50'

        useEffect(()=>{
            axios.get('https://randomuser.me/api/?results=50')
                 .then(response=>{
                  setUser(response.data)                      
                })
            },[ url])

        if (!user) return <Loading />

        
        
        const userlist={...user}; 
                
        const view=(viewcard?<ListView userList={userlist.results} />: <Gridview userList={userlist.results}/>)
        const viewicon=(viewcard?<BsGrid3X3GapFill className='icons' id="list-icon"/>:<FaThList className='icons' id="list-icon"/>)
        const viewSortingicon=(userSort?<BiSortZA className='icons'/>:<BiSortAZ className='icons'/>)    
      


        const handleClick=()=>{
                setViewcard(!viewcard)
        }
        const handleSort=()=>{
          if(userSort){
            userlist.results.sort(function(a, b) {
              const nameA = a.name.first.toUpperCase();
              const nameB = b.name.first.toUpperCase(); 
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }    
              return 0;
            });
            setUserSort(false)
          }else{
            userlist.results.sort(function(a, b) {
              const nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
              const nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
              if (nameA > nameB) {
                return -1;
              }
              if (nameA < nameB) {
                return 1;
              }    
              return 0;
            });
            setUserSort(true)
          }
        }
  
        return (
          <div className="App">              
          <a href='/' className='home-button'>Meet The Team</a>
          <div className='search-bar'>
              <button className='click-button' onClick={()=>handleSort()}> {viewSortingicon}</button>              
              <button className='click-button' onClick={handleClick}> {viewicon} </button>
          </div>     
              {view}
          </div>
        )
      }
