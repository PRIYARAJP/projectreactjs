import React,{useContext} from 'react'
import { Header } from '../../Component/Common'
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import "./Food.style.css"

const TopPost = () => {
  let [count] = useContext(store)
  return (
    <>
    <div>
      <h1 className='Top'>Top post</h1>
      <Header headertext={"Top Post"}/>
      <div>
      <div className='tophome'>
      {count.filter((item) => item.cat === 'newtopfood').map((d, index) => {
        return(<><div className='newone'> 
        {/* <Header headertext={"Top Post"}/> */}
        <Link to={`/dynamic/${d.id}`} state={d}>
        <img src={d.img} alt="" className='imgss'  height={"270px"}/>
                          {/* <img src={}, height={"270px"} alt="" /> */}
                          </Link>
                        <p className='comm'><p>{d.command}</p></p>
                   
                        </div> </>)
      })}
          </div>
      {/* {count.filter((item) => item.cat === 'newtopfood').map((d, index) => {
        return(<>
        <Link to={`/dynamic/${d.id}`} state={d}>
                          <img src={d.img} height={"270px"} alt="" />
                          </Link>
                          <h4><p>{d.heading}</p></h4>
        <p className='commer'>{d.command}</p>
        </>)
      })} */}
        {/* <img src="https://travelspoonfood.files.wordpress.com/2012/02/img_6791.jpg" alt="" height={"270px"}/> */}
      
      </div>
      <div>
                {count.filter((item) => item.cat === 'foodtop').map((d, index) => {
                    return (
                      <>
                      
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
                          <h5><p>{d.heading}</p></h5>
                          <p className='comm'>{d.command}</p>
                          </div>
                      
                        </div>
                        </>
                    )
                })}
                 
        </div>
        <div className='adverrrr'><div className='Advertisement'><p>Advertisement</p></div></div>
    </div>
    </>
  )
}

export default TopPost