import React, { useState, useEffect } from 'react'
import {BiSortAZ, BiSortZA} from 'react-icons/bi'
import {FaThList} from 'react-icons/fa'
import {BsGrid3X3GapFill} from 'react-icons/bs'
import Gridview from '../Component/Gridview'
import ListView from '../Component/ListView'
import axios from 'axios'
import Loading from '../Component/Loading'
import {BsSearch} from 'react-icons/bs'


export default function UserList() {
        const [viewcard, setViewcard]=useState(false)
        const [user, setUser]=useState(null)
        const [userSort, setUserSort]=useState(true)
        const [input, setInput]=useState('')
        const url='https://randomuser.me/api/?results=50'

        useEffect(()=>{
            axios.get('https://randomuser.me/api/?results=50')
                 .then(response=>{
                  setUser(response.data)                      
                })
            },[ url])

        if (!user) return <Loading />
        
        
        const userlist={...user};                 
        const view=(viewcard?<ListView userList={userlist.results} inputval={input}/>: <Gridview userList={userlist.results} inputval={input}/>)
        const viewicon=(viewcard?<BsGrid3X3GapFill className='icons'/>:<FaThList className='icons'/>)
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
                      const nameA = a.name.first.toUpperCase(); 
                      const nameB = b.name.first.toUpperCase(); 
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
                <a href='/' className='heading'>Meet The Team</a>

                <div className='search-bar'>
                    <button 
                        className='sort-button' 
                        onClick={()=>handleSort()}> 
                            {viewSortingicon}
                    </button> 

                    <div id="search-form">          
                          <BsSearch className='icons'id= 'search-icon'/>
                          <input 
                                        type="search" 
                                        placeholder="" 
                                        name="search" 
                                        className='search-box' 
                                        value={input}
                                        onChange={(e) => {setInput(e.target.value)}}
                            />                        
                    </div> 

                    <button 
                      className='grid-And-list-view-button' 
                      onClick={handleClick}> 
                          {viewicon} 
                    </button>

                </div>     
                    
                 {view}
          </div>
        )
      }
