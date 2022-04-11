import React, { useState } from 'react'
import GridViewCard from './GridViewCard'
import {BsSearch} from 'react-icons/bs'
import Nouser from './Nouser'


export default function Gridview({userList}) {
  const [input, setInput]=useState('')
  const val=userList


  const filtered=val.filter((username)=>{
    if(input===''){
      return username
    }else if(username.name.first.toLowerCase().includes(input.toLocaleLowerCase())){        
      return username        
    }  
    return false    
 })

  const gridviewcard=filtered.map((userinfo)=>{
    return    (<div key={userinfo.email} className='card-item fade-in'>
                  <GridViewCard 
                        email={userinfo.email} 
                        city={userinfo.location.city} 
                        name={userinfo.name.first}
                        picture={userinfo.picture.medium}
                        cell={userinfo.cell}
                  />        
                </div>)
              })

              const viewcard=gridviewcard.length? gridviewcard : <Nouser />
              return (
                <div id='grid-view'>
                      <div id="input-form">          
                        <BsSearch /><input type="search" placeholder="" name="search" className='search-box' value={input}
                                        onChange={(e) => {setInput(e.target.value)}}
                                  />                        
                      </div>

                      
                          <div className='card-items'>                     
                              {viewcard}
                          </div>
                      


                      
                </div>
                   
                  )
                }
