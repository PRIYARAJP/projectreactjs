import React,{useContext} from 'react'

import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'

import Travel from '../Travel'
import { Header } from '../../Component/Common'

const TopPost = () => {
  let [count] = useContext(store)
  return (<>
    <div className='newfont'>
    <div><Header headertext={"Top Post"}/></div>   
   <div>
          
        <div className='centring'>
                {count.filter((item) => item.cat === 'newtoptech').map((d, index) => {
                    return (<>
                      <div className='adverrrring'>
                          <div>
                            
                            <Link to={`/${d.icon}/${d.id}`} state={d}>
                          <img src={d.img} alt="" className='imgeeeee'/>
                          </Link>
                          </div>
                          <div>
                          <div className='newbarer'>
                          <div >
                          <div className=''>
                          <div>
                          <div className='commsnum'>
                         <div className='comm'>
                          <h3 >{d.command}</h3></div>
                          <div className='numbers'>{d.num}</div>
                         
                          </div>
                          <div className='com' style={{marginLeft:"20px"}}><Travel/></div>
                          </div>
                          </div>
          
                        </div>
                          </div>
                          
                        </div> 
                        
                         </div>   
                           </>
                    )
                })}
      
      </div>
   
                {count.filter((item) => item.cat === 'technologytop').map((d, index) => {
                    return (<>
                      <div className='adverrrrer'>
                          <div>
                            
                            <Link to={`/${d.icon}/${d.id}`} state={d}>
                          <img src={d.img} alt="" className='img3' />
                          </Link>
                          </div>
                          <div>
                          <div>
                         
                          <h3 className='com'>{d.heading}</h3>
                          <p className='com'><Travel/></p>
                          </div>
                         
                          </div>
                          <div className='numbers'>{d.num}</div>
                        </div>    <hr/></>
                    )
                })}</div>
                 <div className='adverrrr'><div className='Advertisement2'><p>Advertisement</p></div></div>
   
        </div>
       
                      
     </>
    
  )
}

export default TopPost

