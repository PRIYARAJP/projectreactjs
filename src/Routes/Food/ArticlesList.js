import React, { useContext } from 'react'
import { Header } from '../../Component/Common'
import "./Food.style.css"
import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'




const ArticlesList = () => {
  let [count] = useContext(store)

  return (
    <div>
      <Header headertext={"Food"}/>
      <div>
            <div>
                {count.filter((item) => item.cat === 'food').map((d, index) => {
                    return ( 
                    
                      <div>
                      <div className='moger'>
                      
                      <div>
                      <Link to={`/home-img/${d.id}`} state={d}>
                        <img src={d.img} alt="" className='img5'/>
                        </Link>
                        </div>
                      <div>
                     
                      <h4 className='comm'>{d.command}</h4>
                  
                      <p>{d.heading}</p>
                      </div>
                      
                      </div>

                    </div>
                  //   <div style={{display:"flex", gap:"15px", marginTop:"35px"}}>
                  //   <div className='avatarsss'>
                      
                  //     <Link to={`/dynamic/${d.id}`} state={d}>
                  //     <img src={d.img} alt="" className='img2'/>
                  //     </Link>
                  //     </div>
                  //     <div>
                  //     <h2>                          <h4><p>{d.heading}</p> </h4></h2>     
                  //       <hr /><p className='comm'>{d.command}</p>
                      
                     
                  // </div>
                  //   </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ArticlesList