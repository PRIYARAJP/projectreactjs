import React,{useContext} from 'react'
import { Header } from '../../Component/Common'
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import "./Bollywood.style.css"

const TopPost = () => {
  let [count] = useContext(store)
  return (
    <div>
      {/* <h1>Top post</h1> */}
      <Header headertext={"Top Post"}/>
      {count.filter((item) => item.cat === 'BollywoodTopposthigh').map((d, index) => {
        return(<>
        <Link to={`/dynamic/${d.id}`} state={d}>
        <img src={d.img} alt=""  height={"270px"}/>
                        
                          </Link>
                          <h4 className='comms'><p>{d.command}</p></h4>
        </>)
      })}
      <div>
        {/* <img src="https://miro.medium.com/max/1024/1*XNEc7sImHVsOADV_iY8xYQ.png" alt="" height={"270px"}/> */}
       
      </div>
      <div>
                {count.filter((item) => item.cat === 'bollywoodtop').map((d, index) => {
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
                          <h5>     <h4 className='comm'><p>{d.command}</p></h4></h5>
                          {/* <p>{d.heading}</p> */}
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