import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import {MdOutlineWifiCalling3} from 'react-icons/md'
import  '../Data/Userdata';


export default function ListViewCard({city, name,picture}) {
  return (
    <div id='List-View-Card' className='fade-in'>
         <div className='user-image-container-list-view'> 
            <img className='user-image-list-view' src={picture} alt='User Pic' /> 
        </div>  
            <div id='name-address'>
                <h4>{name}</h4>
                <h6>{city}</h6>
            </div> 
            <div className='e-p-icons' id='icons-container-list-view'>
            <div><a href='page'> <AiOutlineMail className='icons'/></a></div>
            <div><a href='page'> <MdOutlineWifiCalling3 className='icons'/> </a></div>
        </div>       
    </div>
  )
}
