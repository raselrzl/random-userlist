import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import {MdOutlineWifiCalling3} from 'react-icons/md'





export default function GridViewCard({city, name, picture, email, cell}) {
  let bgArr=['cardBg1', 'cardBg2', 'cardBg3', 'cardBg4', 'cardBg5','cardBg6']
  let randomBg=Math.floor(Math.random()*bgArr.length);
  const gvcardBg=(bgArr[randomBg]);

  return (
    <div id={gvcardBg} className='card'>
            <h3 className='user-name'>{name}</h3>  
        <div className='user-image-div'> 
            <img className='user-image' src={picture} alt='User Pic' /> 
        </div>
        {console.log('From Grid View')}

        <div className='address'>
          <h5>{city}</h5>
        </div>
        
        <div className='e-p-icons'>
            <div><a href={`mailto:${email}`}> <AiOutlineMail className='icons'/></a></div>
            <div><a href={`tel:${cell}`}> <MdOutlineWifiCalling3 className='icons'/> </a></div>
        </div>
        
    </div>
    
  )
}
