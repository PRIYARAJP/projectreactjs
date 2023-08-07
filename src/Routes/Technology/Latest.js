import React,{useContext} from 'react'
import { Header } from '../../Component/Common'
import { store } from '../../Utility/ContextStore/ContextApi'
import { Link } from 'react-router-dom'
import "./Technology.style.css"

const Latest = () => {
  let [count] = useContext(store)
  return (
    <div >
    
      <div >
      <div><Header headertext={"The Latest"}/></div>
            <div style={{display:"flex", gap:"15px", justifyContent:"center" }}>  
               <div className='newbar'>
                {count.filter((item) => item.cat === 'the latesttech').map((d, index) => {
                    return (
                        <div>
                          <div className='mog'>
                            
                          <Link to={`/home-img/${d.id}`} state={d}>
                          <img src={d.img} alt="" className='img4'/>
                          </Link>
                <h4 className='comm'>{d.command}</h4>
                    

                          
                          </div>
                          
                          
                      
                        </div>
                    )
                })}</div>
            </div>
        </div>
    </div>
  )
}

export default Latest