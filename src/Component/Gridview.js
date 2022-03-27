import React from 'react'
import GridViewCard from './GridViewCard'

export default function Gridview({userList}) {

  const gridviewcard= userList.map((userinfo)=>{
    return (  <div key={userinfo.email} className='card-item fade-in'>
                  <GridViewCard 
                      email={userinfo.email} 
                        gender={userinfo.gender} 
                        city={userinfo.location.city} 
                        name={userinfo.name.first}
                        picture={userinfo.picture.medium}
                  />        
                </div>)
      })


              return (
                <div className='card-items'>
                {gridviewcard}

            </div>
              )
            }
