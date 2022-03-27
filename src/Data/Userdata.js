import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListViewCard from '../Component/ListViewCard'
import GridViewCard from '../Component/GridViewCard'
export default function Userdata() {
       const [user, setUser]=useState(null)
       const url='https://randomuser.me/api/?results=50'

    useEffect(()=>{
            axios.get(url)
            .then(response=>{
            setUser(response.data)                      
            })
        },[ url])

    if (!user) return null
    
    const userList=user.results

   const listviewcard= userList.map((userinfo)=>{
        return <ListViewCard 
                  email={userinfo.email} 
                  gender={userinfo.gender} 
                  city={userinfo.location.city} 
                  name={userinfo.name.first}
                  key={userinfo.key}
                  picture={userinfo.picture.medium}
                  className='card-item-list-view'
          />

        
      })

  
  console.log(userList)
  return (
    <div>
        {listviewcard} 
    </div>
  )
}
