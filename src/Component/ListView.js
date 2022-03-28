import React from 'react'
import ListViewCard from './ListViewCard'

export default function ListView({userList}) {

  const listviewcard= userList.map((userinfo)=>{
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
              {listviewcard}
          </div>
        )
      }
