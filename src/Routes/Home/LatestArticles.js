import React,{useContext} from 'react'
import { store } from '../../Utility/ContextStore/ContextApi'
import { Header } from '../../Component/Common'

import "./Home.style.css"
import { Link } from 'react-router-dom'
import Travel from '../Travel'

const LatestArticles = () => {
  let [count] = useContext(store)
  return (<>
   
     
      <div className='moger'> 
      {/* <Header headertext={"Latest Articles"}/> */}
      <div ><Header headertext={"Latest Articles"}/>
                {count.filter((item) => item.cat === 'latestarticles').map((d, index) => {
                    return (<>
                        <div>
                          <div className='moger'>
                          
                          <div>
                          <Link to={`/${d.icon}/${d.id}`} state={d}>
                            <img src={d.img} alt="" className='img5'/>
                            </Link>
                            </div>
                          <div>
                         
                          <p className='comm'>{d.command}</p>
                      
                          <p>{d.heading}</p>
                         <Travel/>
                          </div>
                          
                          </div>

                        </div></>
                    )
                })}
                {count.filter((item) => item.cat === 'latestarticlesimg').map((d, index) => {
    
                return (<>
                      
                          <Link to={`/home-img/${d.id}`} state={d}>
                            <img src={d.img} alt="" className='hh'/>
                            </Link>
                  
                            </>
                    )
             
                })}
                
            </div>
            <span>
            {/* */}
            </span>
   
    </div></>
  )
}

export default LatestArticles