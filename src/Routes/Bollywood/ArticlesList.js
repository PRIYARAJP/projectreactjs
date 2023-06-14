import React, { useContext } from 'react'
import { Header } from '../../Component/Common'
import "./Bollywood.style.css"
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const ArticlesList = () => {
  let [count] = useContext(store)
  let navi = useNavigate()
  return (
    <div>
      <Header headertext={"Bollywood"}/>
      <div>
            <div>
                {count.filter((item) => item.cat === 'bollywood').map((d, index) => {
                    return (
                        <div style={{display:"flex", gap:"15px", marginTop:"35px"}}>
                          <div>
                          <Link to={`/dynamic/${d.id}`} state={d}>
                          <img src={d.img} alt="" className='img2'/>
                          </Link>
                          </div>
                          <div>
                          <h4>Thalapathi Vijay</h4>
                          <p> Stay Positive <br></br> When Negativity Sourrounds you <br/> Smile When other Frown</p>
                          
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