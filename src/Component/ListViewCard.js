import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import {MdOutlineWifiCalling3} from 'react-icons/md'

export default function ListViewCard({city, name, picture, email, cell}) {
  
  let bgArr=['ListViewCard1Bg', 'ListViewCard2Bg', 'ListViewCard3Bg', 'ListViewCard4Bg', 'ListViewCard5Bg','ListViewCard6Bg']
  let randomBg=Math.floor(Math.random()*bgArr.length);
  const ListViewCard=(bgArr[randomBg]);
  
  return (
    <div id={ListViewCard} className='fade-in ListViewCardBg'>
         <div className='user-image-container-list-view'> 
            <img className='user-image-list-view' src={picture} alt='User Pic' /> 
        </div>  
            <div id='name-address'>
                <h4>{name}</h4>
                <h6>{city}</h6>
            </div> 
            <div className='e-p-icons' id='icons-container-list-view'>
            <div><a href={`mailto:${email}`} > <AiOutlineMail className='icons'/></a></div>
            <div><a href={`tel:${cell}`}> <MdOutlineWifiCalling3 className='icons'/> </a></div>
        </div>       
    </div>
  )
}
