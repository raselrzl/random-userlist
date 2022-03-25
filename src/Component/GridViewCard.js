import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import {MdOutlineWifiCalling3} from 'react-icons/md'




export default function Card(props) {
  return (
    <div className='card'>
            <h3 className='user-name'>Abdus Sobur</h3>  
        <div className='user-image-div'> 
            <img className='user-image' src='https://randomuser.me/api/portraits/women/61.jpg' alt='User Pic' /> 
        </div>
        <div className='address'>
          <h5>Oslo</h5>
        </div>
        <div className='e-p-icons'>
            <div><a href='page'> <AiOutlineMail className='icons'/></a></div>
            <div><a href='page'> <MdOutlineWifiCalling3 className='icons'/> </a></div>
        </div>
        
    </div>
    
  )
}
