import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import {MdOutlineWifiCalling3} from 'react-icons/md'

export default function GridViewCard({city, name, picture, email, cell}) {
                      let bgArr=['cardBg1', 'cardBg2', 'cardBg3', 'cardBg4', 'cardBg5','cardBg6']
                      let randomBg=Math.floor(Math.random()*bgArr.length);
                      const gridViewCardBg=(bgArr[randomBg]);

                      return (
                              <div id={gridViewCardBg} className='card'>
                                      <h3 className='user-name'>
                                          {name}
                                      </h3>  

                                      <div className='user-image-container'> 
                                          <img className='user-image' src={picture} alt={name} /> 
                                      </div>

                                      <div className='address'>
                                        <h5>{city}</h5>
                                      </div>
                                      
                                      <div className='email-cell-icons'>
                                          <div><a href={`mailto:${email}`}> <AiOutlineMail className='icons'/></a></div>
                                          <div><a href={`tel:${cell}`}> <MdOutlineWifiCalling3 className='icons'/> </a></div>
                                      </div>              
                              </div>
                              
                            )
                          }
