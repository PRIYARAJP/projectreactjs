import React,{useContext} from 'react'
// import { Header } from '../../Component/Common'
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import "./Bollywood.style.css"

const TopPost = () => {
  let [count] = useContext(store)
  return (
    <div>
      <h1>Top post</h1>
      {/* <Header headertext={"Top Post"}/> */}
      <div className='tophome'>
      {count.filter((item) => item.cat === 'BollywoodTopposthigh').map((d, index) => {
        return(<><div className='newone'>
           {/* <Header headertext={"Top Post"}/> */}<div>
        <Link to={`/${d.icon}/${d.id}`} state={d}>
        <img src={d.img} alt="" className='imgss'  height={"270px"}/>
                          {/* <img src={}, height={"270px"} alt="" /> */}
                          </Link>
                        <p className='comm'><p>{d.command}</p></p>
                   
                        </div> </div></>)
      })}
          </div>
      {/* {count.filter((item) => item.cat === 'BollywoodTopposthigh').map((d, index) => {
        return(<>
        <Link to={`/dynamic/${d.id}`} state={d}>
        <img src={d.img} alt=""  height={"270px"}/>
                        
                          </Link>
                          <p className='commer'><p>{d.command}</p></p>
        </>)
      })} */}
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
                            <Link to={`/${d.icon}/${d.id}`} state={d}>
                          <img src={d.img} alt="" className='img3'/>
                          </Link>
                          </div>
                          <div>
                             <p className='comm'><p>{d.command}</p></p>
                          {/* <p>{d.heading}</p> */}
                          </div>
                      
                        </div>
                    )
                })}
        </div>
        <div className='adverrrr'><div className='Advertisement'><p>Advertisement</p></div></div>
       
           </div>
    
  )
}

export default TopPost