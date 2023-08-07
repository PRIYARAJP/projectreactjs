import React,{useContext} from 'react'
import { Header } from '../../Component/Common'
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import "./Home.style.css"

const TopPost = () => {
  let [count] = useContext(store)
  return (
    <div className='newfont'>
      {/* <h1>Top post</h1> */}
     
      {count.filter((item) => item.cat === 'newtophome').map((d, index) => {
        return(<><div className='newone'> <Header headertext={"Top Post"}/>
        <Link to={`/dynamic/${d.id}`} state={d}>
        <img src={d.img} alt="" className='imgss'  height={"270px"}/>
                          {/* <img src={}, height={"270px"} alt="" /> */}
                          </Link>
                        <h4 className='comm'><p>{d.command}</p></h4>

                        </div> </>)
      })}
      <div>
        {/* <img src="https://miro.medium.com/max/1024/1*XNEc7sImHVsOADV_iY8xYQ.png" alt="" height={"270px"}/> */}
        
      </div>
      <div>
                {count.filter((item) => item.cat === 'Hometop').map((d, index) => {
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
                    )
                })}
        </div>
        <div style={{height:"410px",width:"320px", border:"2px solid black", display:"flex", justifyContent:"center", alignItems:"center"}}><p>Advertisement</p></div>
    </div>
    
  )
}

export default TopPost