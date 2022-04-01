import React, { useState } from 'react'
import GridViewCard from './GridViewCard'
import {BsSearch} from 'react-icons/bs'

export default function Gridview({userList}) {
  const [input, setInput]=useState('')
  const val=userList
  console.log(val)

  const gridviewcard= val.filter((name)=>{
    if(input===''){
      return name
    }else if(name.name.first.toLowerCase().includes(input.toLocaleLowerCase())){
      return name
    }
  }) 
  
  .map((userinfo)=>{
    return    (<div key={userinfo.email} className='card-item fade-in'>
                  <GridViewCard 
                        email={userinfo.email} 
                        city={userinfo.location.city} 
                        name={userinfo.name.first}
                        picture={userinfo.picture.medium}
                  />        
                </div>)
              })


              return (
                <div id='grid-view'>
                      <div id="input-form">          
                        <BsSearch /><input type="search" placeholder="" name="search" className='search-box' value={input}
                                        onChange={(e) => {setInput(e.target.value)}}
                                  />                        
                      </div>
                      <div className='card-items'>
                          
                          {gridviewcard}
                      </div>
                </div>
                   
                  )
                }
