import React, { useContext } from 'react'
import { Header } from '../../Component/Common'
import "./Hollywood.style.css"
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const ArticlesList = () => {
  let [count] = useContext(store)
  let navi = useNavigate()
  return (
    <div>
      <Header headertext={"Hollywood"}/>
      <div>
            <div >
                {count.filter((item) => item.cat === 'hollywood').map((d, index) => {
                    return (
                        <div style={{display:"flex", gap:"15px", marginTop:"35px"}}>
                        <div className='avatarsss'>
                          <div>
                          <Link to={`/dynamic/${d.id}`} state={d}>
                          <img src={d.img} alt="" className='img2'/>
                          </Link>
                          </div>
                          <div>
                          <h2>Look deep into nature, and then you<br></br> will understand everything better</h2>     
 <hr /><p>1.Nature always wears the colors of the spirit.<br/>2.Look deep into nature, and then you<br/> will understand everything better<br/></p>
                            <p>{d.heading}</p>
                          </div>
                      </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ArticlesList