import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import {MdOutlineWifiCalling3} from 'react-icons/md'

export default function ListViewCard() {
  return (
    <div id='List-View-Card'>
         <div className='user-image-container-list-view'> 
            <img className='user-image-list-view' src='https://randomuser.me/api/portraits/women/61.jpg' alt='User Pic' /> 
        </div>  
            <div id='name-address'>
                <h3>Name</h3>
                <h6>Address</h6>
            </div> 
            <div className='e-p-icons' id='icons-container-list-view'>
            <div><a href='page'> <AiOutlineMail className='icons'/></a></div>
            <div><a href='page'> <MdOutlineWifiCalling3 className='icons'/> </a></div>
        </div>       
    </div>
  )
}
