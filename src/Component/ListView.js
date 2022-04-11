import React, { lazy, Suspense, useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import Loading from './Loading';
import Nouser from './Nouser';


const ListViewCard = lazy(() => import('./ListViewCard'));

export default function ListView({userList}) {
  const [input, setInput]=useState('')  
  const val=userList

  const filtered= val.filter((username)=>{
              if(input===''){
                return username
              }else if(username.name.first.toLowerCase().includes(input.toLocaleLowerCase())){
                return username
              }   
              return false    
            }) 

  const listviewcard=filtered.map((userinfo)=>{    

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

          const viewcard=listviewcard.length? listviewcard : <Nouser />
        return (
                      
            <div className='card-items-list-view '>
            <div id="form-input">          
                <BsSearch /><input type="search" placeholder="" name="search" className='search-box' value={input}
                                onChange={(e) => {setInput(e.target.value)}}
                           />
                
              </div>
              <Suspense fallback={<Loading />}>                                                   
                              {viewcard}                     
                      </Suspense>
          </div>
          
          
        )
      }
