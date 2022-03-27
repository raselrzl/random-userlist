import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import {MdOutlineWifiCalling3} from 'react-icons/md'




export default function GridViewCard({city, name, picture}) {
  return (
    <div className='card'>
            <h3 className='user-name'>{name}</h3>  
        <div className='user-image-div'> 
            <img className='user-image' src={picture} alt='User Pic' /> 
        </div>

        <div className='address'>
          <h5>{city}</h5>
        </div>
        
        <div className='e-p-icons'>
            <div><a href='page'> <AiOutlineMail className='icons'/></a></div>
            <div><a href='page'> <MdOutlineWifiCalling3 className='icons'/> </a></div>
        </div>
        
    </div>
    
  )
}
