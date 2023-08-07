import React, { useContext } from 'react'
import { store } from '../../Utility/ContextStore/ContextApi'
import "./Home.style.css"
import { Link } from 'react-router-dom'

const Banner = () => {
  let [count] = useContext(store)
  return (
    <div><div className='banner'>
      {count.filter((item) => item.cat === "homebanner").map((d, index) =>{
                return(<>
                 
                     
                     <Link to={`/home-img/${d.id}`} state={d}>
                      <div className='one'></div> </Link>
                    
                  
                  
                  </> 
                )
            })}
 <div className='two'>
{count.filter((item) => item.cat === "homebanner1").map((d, index) =>{
                return(<>
                 
                 <Link to={`/home-img/${d.id}`} state={d}>
                    
                  
                     
                          <div className='a'></div></Link>
                         
                     
                  
                  </> 
                )
            })}
{count.filter((item) => item.cat === "homebanner2").map((d, index) =>{
                return(<>
                 
                  
                 <Link to={`/home-img/${d.id}`} state={d}>
                    
                  
                     
                    <div className='b'></div></Link>
                   
               
                  
                  
                  </> 
                )
            })}


</div>
</div>
    </div>
  )
}

export default Banner