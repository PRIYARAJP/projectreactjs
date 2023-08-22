import React,{useContext} from 'react'
import { store } from '../../Utility/ContextStore/ContextApi'
import { Header } from '../../Component/Common'

import "./Home.style.css"
import { Link } from 'react-router-dom'
import Travel from '../Travel'

const LatestArticles = () => {
  let [count] = useContext(store)
  return (<>
   <div>
   <div><Header headertext={"Latest Articles"}/></div>
      <div className='moger'> 
      {/* <Header headertext={"Latest Articles"}/> */}
      <div > 
                {count.filter((item) => item.cat === 'latestarticles').map((d, index) => {
                    return (<>
                        <div>
                          <div className='mogering'>
                          
                          <div>
                          <Link to={`/${d.icon}/${d.id}`} state={d}>
                            <img src={d.img} alt="" className='imger'/>
                            </Link>
                            </div>
                          <div>
                            <div>
                          
                          <p className='com'><b>{d.heading}</b></p></div>
                          <p className='com'>{d.command}</p>
                      
                          <p className='com'> <Travel/></p>
                         {/* <Travel/> */}
                          </div>
                          
                          </div>

                        </div>    <hr/></>
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
            </div>
    </div></>
  )
}

export default LatestArticles