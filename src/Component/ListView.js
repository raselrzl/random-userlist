import React, { lazy, Suspense} from 'react'
import Loading from './Loading';
import Nouser from './Nouser';


const ListViewCard = lazy(() => import('./ListViewCard'));

export default function ListView({userList, inputval}) {
          const filtered= userList.filter((username)=>{
                              if(inputval===''){
                                return username
                              }else if(username.name.first.toLowerCase().includes(inputval.toLocaleLowerCase())){
                                return username
                              }   
                              return false    
                            }) 

          const listviewcard=filtered.map((userinfo)=>{  
                                    return <ListViewCard 
                                              email={userinfo.email} 
                                              gender={userinfo.gender} 
                                              city={userinfo.location.city} 
                                              name={userinfo.name.first}
                                              key={userinfo.email}
                                              picture={userinfo.picture.medium}
                                              cell={userinfo.cell}
                                              className='card-item-list-view'
                                      />
                                    })

          const viewcard=listviewcard.length? listviewcard : <Nouser inputValue={inputval}/>


                            return (                                          
                                <div className='card-items-list-view '>
                                          <Suspense fallback={<Loading />}>                                                   
                                                  {viewcard}                     
                                          </Suspense>
                                </div>                              
                            )
                          }
