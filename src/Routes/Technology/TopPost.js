import React,{useContext} from 'react'
import { Header } from '../../Component/Common'
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import "./Technology.style.css"

const TopPost = () => {
  let [count] = useContext(store)
  return (
    <div>
      {/* <h1>Top post</h1> */}
      <Header headertext={"Top Post"}/>
      <div>
      {count.filter((item) => item.cat === 'newtoptech').map((d, index) => {
        return(<>
        <Link to={`/dynamic/${d.id}`} state={d}>
                          <img src={d.img} height={"270px"} alt="" />
                          </Link>
                           <h4> <p className='comms'>{d.command}</p> </h4>
        </>)
      })}
        {/* <img src="https://jooinn.com/images/modern-communication-technology.jpg" alt="" height={"270px"}/> */}
       
      </div>
      <div>
                {count.filter((item) => item.cat === 'technologytop').map((d, index) => {
                    return (
                        <div style={{display:"flex", gap:"15px", marginTop:"25px"}}>
                          <div>
                            {/* <Link to={`/dynamic/${d.id}`}>
                             <img src={d.img} alt="" className='img3'/>
                            </Link> */}
                            <Link to={`/dynamic/${d.id}`} state={d}>
                          <img src={d.img} alt="" className='img3'/>
                          </Link>
                          </div>
                          <div> <h5><p>{d.heading}</p> </h5>
                         
                          <p className='com'>{d.command}</p> 
                          </div>
                      
                        </div>
                    )
                })}
        </div>
        <div style={{height:"410px",width:"320px", border:"2px solid black", display:"flex", justifyContent:"center", alignItems:"center"}}><p>Advertisement</p></div>
    </div>
    
  )
}

export default TopPost