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
      {/* <h1>Top post</h1> */}
      <Header headertext={"Top Post"}/>
      <div>
      {count.filter((item) => item.cat === 'newtoptech').map((d, index) => {
        return(<>
        <Link to={`/dynamic/${d.id}`} state={d}>
                          <img src={d.img} height={"270px"} alt="" />
                          </Link>
        </>)
      })}
        {/* <img src="https://travelspoonfood.files.wordpress.com/2012/02/img_6791.jpg" alt="" height={"270px"}/> */}
        <h4>images in my mind too: a strapping man he is mine<br /> Lorem ipsum dolor sit amet.</h4>
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
                          <h5>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit.</h5>
                          
                          </div>
                      
                        </div>
                        </>
                    )
                })}
        </div>
        <div style={{height:"410px",width:"320px", border:"2px solid black", display:"flex", justifyContent:"center", alignItems:"center"}}><p>Advertisement</p></div>
    </div>
    </>
  )
}

export default TopPost