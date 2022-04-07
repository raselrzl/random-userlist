import React, { Suspense, useState } from 'react'

import {BsSearch} from 'react-icons/bs'
import Loading from './Loading';

const GridViewCard = React.lazy(() => import('./GridViewCard'));

export default function Gridview({userList}) {
  const [input, setInput]=useState('')
  const val=userList
  const gridviewcard= val.filter((name)=>{
      if(input===''){
        return true
      }else if(name.name.first.toLowerCase().includes(input.toLocaleLowerCase())){        
        return true        
      }  
      return false    
   } 
   
  ) 
  
  .map((userinfo)=>{
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


              return (
                <div id='grid-view'>
                      <div id="input-form">          
                        <BsSearch /><input type="search" placeholder="" name="search" className='search-box' value={input}
                                        onChange={(e) => {setInput(e.target.value)}}
                                  />                        
                      </div>

                      <Suspense fallback={<Loading />}>
                          <div className='card-items'>                          
                              {gridviewcard}
                          </div>
                      </Suspense>


                      
                </div>
                   
                  )
                }
