import React, { lazy, Suspense, useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import Loading from './Loading';


const ListViewCard = lazy(() => import('./ListViewCard'));

export default function ListView({userList}) {
  const [input, setInput]=useState('')  
  const val=userList

  const listviewcard= val.filter((name)=>{
    if(input===''){
      return name
    }else if(name.name.first.toLowerCase().includes(input.toLocaleLowerCase())){
      return name
    }   
    return false    
  }) 
  
  .map((userinfo)=>{    

             return <ListViewCard 
                      email={userinfo.email} 
                      gender={userinfo.gender} 
                      city={userinfo.location.city} 
                      name={userinfo.name.first}
                      key={userinfo.email}
                      picture={userinfo.picture.medium}
                      cell={userinfo.cell}
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
              <Suspense fallback={<Loading />}>
                                                   
                              {listviewcard}
                          
                      </Suspense>
          </div>
          
          
        )
      }
