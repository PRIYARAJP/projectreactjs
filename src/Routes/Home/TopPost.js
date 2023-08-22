import React,{useContext} from 'react'

import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import "./Home.style.css"
import Travel from '../Travel'
import { Header } from '../../Component/Common'

const TopPost = () => {
  let [count] = useContext(store)
  return (<>
    <div className='newfont'>
    <div className='adverrrr'><div className='Advertisement'><p>Advertisement</p></div></div>
    <div><Header headertext={"Top post"}/></div>
   
      {/* <h1 className='topppps'><span>Top post</span><hr className='toppppsnew'></hr> </h1> */}
     {/* <div className='tophome'>
      {count.filter((item) => item.cat === 'newtophome').map((d, index) => {
        return(<> <div className='adverrrr'><div className='newone'> 
        
        <Link to={`/${d.icon}/${d.id}`} state={d}>
        <img src={d.img} alt="" className='imgss'  height={"270px"}/>
                          
                          </Link>
                        <p className='comm'><b>{d.command}</b>  <p><Travel/></p></p>
                   
                   </div>
                        </div>     <hr/></>)
      })}
          </div> */}
        
   <div>
          
        <div className='centring'>
                {count.filter((item) => item.cat === 'newtophome').map((d, index) => {
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
                        
                         </div>    <hr/></>
                    )
                })}
      
      </div>
   
                {count.filter((item) => item.cat === 'Hometop').map((d, index) => {
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
        </div>
    
     </>
    
  )
}

export default TopPost