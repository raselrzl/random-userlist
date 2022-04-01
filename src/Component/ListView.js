import React, { useState } from 'react'
import ListViewCard from './ListViewCard'
import {BsSearch} from 'react-icons/bs'

export default function ListView({userList}) {
  const [input, setInput]=useState('')  
  const val=userList
  console.log(val)
  
  const listviewcard= val.filter((name)=>{
    if(input===''){
      return name
    }else if(name.name.first.toLowerCase().includes(input.toLocaleLowerCase())){
      return name
    }
  }) 
  
  .map((userinfo)=>{    

             return <ListViewCard 
                      email={userinfo.email} 
                      gender={userinfo.gender} 
                      city={userinfo.location.city} 
                      name={userinfo.name.first}
                      key={userinfo.email}
                      picture={userinfo.picture.medium}
                      className='card-item-list-view'
              />
            })
        return (
                      
            <div className='card-items-list-view '>
            <div id="form-input">          
                <BsSearch /><input type="search" placeholder="" name="search" className='search-box' value={input}
                                onChange={(e) => {setInput(e.target.value)}}
                           />
                
              </div>
              {listviewcard}
          </div>
          
          
        )
      }
