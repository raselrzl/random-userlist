import React from 'react'
import GridViewCard from './GridViewCard'
import Nouser from './Nouser'


export default function Gridview({userList, inputval}) {

                    const filtered=userList.filter((username)=>{
                                                  if(inputval===''){
                                                    return username
                                                  }else if(username.name.first.toLowerCase().includes(inputval.toLocaleLowerCase())){        
                                                    return username        
                                                  }  
                                                  return false    
                                              })

                    const gridviewcard=filtered.map((userinfo)=>{
                                              return(<div key={userinfo.email} className='card-item fade-in'>
                                                  <GridViewCard 
                                                        email={userinfo.email} 
                                                        city={userinfo.location.city} 
                                                        name={userinfo.name.first}
                                                        picture={userinfo.picture.medium}
                                                        cell={userinfo.cell}
                                                  />        
                                                </div>)
                                              })

                    const viewcard=gridviewcard.length? gridviewcard : <Nouser inputValue={inputval}/>


                    return (
                      <div id='grid-view'>                      
                            <div className='card-items'>                     
                                    {viewcard}
                            </div>                        
                      </div>                        
                  )
                }
