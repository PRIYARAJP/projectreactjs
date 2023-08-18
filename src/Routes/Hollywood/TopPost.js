import React,{useContext} from 'react'
import { Header } from '../../Component/Common'
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import "./Hollywood.style.css"

const TopPost = () => {
  let [count] = useContext(store)
  return (<>
    <div>
      {/* <h1>Top post</h1> */}
      <div  >
      <Header headertext={"Top Post"}/></div>
      <div  >
      <div >
      <div className='tophome'>
      {count.filter((item) => item.cat === 'newtophollywood').map((d, index) => {
        return(<><div className='newone'> <div>
        <Link to={`/${d.icon}/${d.id}`} state={d}>
        <img src={d.img} alt="" className='imgss'  height={"270px"}/>
                          {/* <img src={}, height={"270px"} alt="" /> */}
                          </Link>
                        <p className='comm'><p>{d.command}</p></p>
                   
                        </div></div> </>)
      })}
          </div>
      {/* {count.filter((item) => item.cat === 'newtophollywood').map((d, index) => {
        return(<>
        <Link to={`/dynamic/${d.id}`} state={d}>
                          <img src={d.img} height={"170px"} alt="" />
                          </Link>
                       <p>{d.heading}</p>
        <p className='comms'>{d.command}</p>
        </>)  
      })} */}
        {/* <img src="https://cdn.lifestyleasia.com/wp-content/uploads/sites/2/2021/05/26090406/money-heist-season-5-hero.png" alt="" height={"270px"}/> */}
       
      </div>
      <div>
                {count.filter((item) => item.cat === 'hollywoodtop').map((d, index) => {
                    return (<>
                        <div style={{display:"flex", gap:"15px", marginTop:"25px"}}>
                          <div>
                          <Link to={`/${d.icon}/${d.id}`} state={d}>
                          <img src={d.img} alt="" className='img3'/>
                          </Link>
                          </div>
                          <div>
                          <h5><p>{d.heading}</p> </h5>
                          <p className='comm'>{d.command}</p>
                          </div>
                      
                        </div></>
                    )
                })}
        </div>
        <div className='adverrrr'><div className='Advertisement'><p>Advertisement</p></div></div>
  </div>
    </div> </>
  )
}

export default TopPost