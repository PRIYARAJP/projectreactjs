import React,{useContext} from 'react'

import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import "./Home.style.css"
import Travel from '../Travel'

const TopPost = () => {
  let [count] = useContext(store)
  return (<>
    <div className='newfont'>
      <h1 className='topppps'><span>Top post</span><hr className='toppppsnew'></hr> </h1>
     <div className='tophome'>
      {count.filter((item) => item.cat === 'newtophome').map((d, index) => {
        return(<><div className='newone'> 
        
        <Link to={`/${d.icon}/${d.id}`} state={d}>
        <img src={d.img} alt="" className='imgss'  height={"270px"}/>
                          
                          </Link>
                        <p className='comm'><p>{d.command}</p></p>
                   
                        </div> </>)
      })}
          </div>
      <div>
                {count.filter((item) => item.cat === 'Hometop').map((d, index) => {
                    return (<>
                        <div style={{display:"flex", gap:"15px", marginTop:"25px"}}>
                          <div>
                            {/* <Link to={`/dynamic/${d.id}`}>
                             <img src={d.img} alt="" className='img3'/>
                            </Link> */}
                            <Link to={`/${d.icon}/${d.id}`} state={d}>
                          <img src={d.img} alt="" className='img3'/>
                          </Link>
                          </div>
                          <div>
                         
                          <p className='com'>{d.command}<br/>  <br/> <Travel/></p>
                          </div>
                   
                        </div></>
                    )
                })}
        </div>
        <div className='adverrrr'><div className='Advertisement'><p>Advertisement</p></div></div>
    </div></>
    
  )
}

export default TopPost