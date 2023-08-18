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
      <div className='tophome'>
      {count.filter((item) => item.cat === 'newtopfit').map((d, index) => {
        return(<><div className='newone'> <div>
        <Link to={`/dynamic/${d.id}`} state={d}>
        <img src={d.img} alt="" className='imgss'  height={"270px"}/>
                          {/* <img src={}, height={"270px"} alt="" /> */}
                          </Link>
                        <p className='comm'><p>{d.command}</p></p>
                   
                        </div></div> </>)
      })}
          </div>
      {/* {count.filter((item) => item.cat === 'newtopfit').map((d, index) => {
        return(<>
        <Link to={`/dynamic/${d.id}`} state={d}>
                          <img src={d.img} height={"210px"} alt="" />
                          </Link>
                          <h2><p className='comms'>{d.heading}</p> </h2>
                          <p className='comms'>{d.command}</p>
        </>)
      })} */}
      <div className='tophome'>
      {count.filter((item) => item.cat === 'newtopfit2').map((d, index) => {
        return(<><div className='newone'> <div>
        <Link to={`/${d.icon}/${d.id}`} state={d}>
        <img src={d.img} alt="" className='imgss'  height={"250px"}/>
                          {/* <img src={}, height={"270px"} alt="" /> */}
                          </Link>
                        <p className='comm'><p>{d.command}</p></p>
                   
                        </div></div> </>)
      })}
          </div>
       {/* {count.filter((item) => item.cat === 'newtopfit2').map((d, index) => {
        return(<>
        <Link to={`/dynamic/${d.id}`} state={d}>
                          <img src={d.img} height={"210px"} alt="" />
                          </Link>
                          <h4 className='comms'><p>{d.heading}</p> </h4>
                          <p className='comms'>{d.command}</p>
        </>)
      })} */}
      </div>
      <div>
                {count.filter((item) => item.cat === 'fitnesstop').map((d, index) => {
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
        <div className='adverrrr'><div className='Advertisement'><p>Advertisement</p></div></div>
       
         </div>
    
  )
}

export default TopPost