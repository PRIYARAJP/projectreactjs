import React,{useContext} from 'react'
import { Header } from '../../Component/Common'
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import "./Fitness.style.css"

const TopPost = () => {
  let [count] = useContext(store)
  return (
    <div>
      {/* <h1>Top post</h1> */}
      <Header headertext={"Top Post"}/>
      <div>
      {count.filter((item) => item.cat === 'newtopfit').map((d, index) => {
        return(<>
        <Link to={`/dynamic/${d.id}`} state={d}>
                          <img src={d.img} height={"210px"} alt="" />
                          </Link>
                          <h2><p className='comms'>{d.heading}</p> </h2>
                          <p className='comms'>{d.command}</p>
        </>)
      })}
       {count.filter((item) => item.cat === 'newtopfit2').map((d, index) => {
        return(<>
        <Link to={`/dynamic/${d.id}`} state={d}>
                          <img src={d.img} height={"210px"} alt="" />
                          </Link>
                          <h2 className='comms'><p>{d.heading}</p> </h2>
                          <p className='comms'>{d.command}</p>
        </>)
      })}
      </div>
      <div>
                {count.filter((item) => item.cat === 'fitnesstop').map((d, index) => {
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
                      <div>
                     
                      <p className='com'>{d.command}</p>
                      </div>
                  
                    </div>
                        // <div style={{display:"flex", gap:"15px", marginTop:"25px"}}>
                        //   <div>
                        //     {/* <Link to={`/dynamic/${d.id}`}>
                        //      <img src={d.img} alt="" className='img3'/>
                        //     </Link> */}
                        //     <Link to={`/dynamic/${d.id}`} state={d}>
                        //   <img src={d.img} alt="" className='img3'/>
                        //   </Link>
                        //   </div>
                        //   <div>
                         
                          
                        //   </div>
                      
                        // </div>
                    )
                })}
        </div>
        <div style={{height:"410px",width:"320px", border:"2px solid black", display:"flex", justifyContent:"center", alignItems:"center"}}><p>Advertisement</p></div>
    </div>
    
  )
}

export default TopPost