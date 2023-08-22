import React, { useContext } from 'react'
import { store } from '../../Utility/ContextStore/ContextApi'
import "./Home.style.css"
import { Link } from 'react-router-dom'

const Banner = () => {
  let [count] = useContext(store)
  return (<>
 
 <div className='banner'>
    
      <div >
            <div style={{display:"flex", gap:"15px", justifyContent:" space-between" ,}}>  
               <div className='newbarer'>
                {count.filter((item) => item.cat === 'homebanner').map((d, index) => {
                  console.log(d.icon);
                    return (<>
                     <div className='adverrrring'>
                          <div>
                            
                            <Link to={`/${d.icon}/${d.id}`} state={d}>
                          <img src={d.img} alt="" className='imginger'/>
                          </Link>
                          </div>
                   </div>
                      {/* <div className=''>
                      <div style={{margin:"20px"}}>
                  
                      
                      <Link to={`/${d.icon}/${d.id}`} state={d}>
                          </Link>
                  </div></div>
              */}
               {/* <div style={{display:"flex", gap:"15px", justifyContent:" space-between" }}>  
               <div className='newbarer'>
           
              <div className=''>
                      <div style={{margin:"20px"}}>
                  
                      
                      <Link to={`/${d.icon}/${d.id}`} state={d}>
                      <img src={d.img} alt="" className='imginger'/>
                      </Link>
                    </div>
                    </div></div></div> */}
                    </>
                    )
                })}</div>
            </div>
       
    </div>
    
{/* 
 <div className='newfont'>

    <div className='centring'>
                {count.filter((item) => item.cat === 'newtophome').map((d, index) => {
                    return (<>
                      <div className='adverrrring'>
                          <div >
                            
                            <Link to={`/${d.icon}/${d.id}`} state={d}>
                     
                          <div className='oneeeeess'>Title of vertical gallery<Travel/></div>
                          </Link>
                          </div>
                          
          
           
                       
              
                        
                         </div> </>
                    )
                })}
      
      </div></div></div> */}
      {/* <div className='banner'> */}
    {/* <div className='homebanner'>
      {count.filter((item) => item.cat === "homebanner").map((d, index) =>{
                return(<>
                  <div className='adverrrring'>
                     <Link to={`/${d.icon}/${d.id}`} state={d}>
                      <div className='oneeeee'>Title of vertical gallery<Travel/></div> </Link>
                    
                  
                  </div>
                     
                  </> 
                )
            })}
            </div> */}
 <div className='two'>
{count.filter((item) => item.cat === "homebanner1").map((d, index) =>{
                return(<>
                 
                 <Link to={`/home-img/${d.id}`} state={d}>
                    
                  
                     
                          <div className='aaaaaaaaaaaaaa'> </div></Link>
                         
                     
                  
                  </> 
                )
            })}
{count.filter((item) => item.cat === "homebanner2").map((d, index) =>{
                return(<>
                 
                  
                 <Link to={`/home-img/${d.id}`} state={d}>
                    
                  
                     
                    <div className='bbbbbbbbbbbbb'></div></Link>
                   
               
                  
                  
                  </> 
                )
            })}


</div>

    </div> 
{/* </div> */}
</>
  )
}

export default Banner