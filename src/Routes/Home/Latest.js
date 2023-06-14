import React,{useContext} from 'react'
import { Header } from '../../Component/Common'
import { store } from '../../Utility/ContextStore/ContextApi'
import { Link } from 'react-router-dom'
import "./Home.style.css"

const Latest = () => {
  let [count] = useContext(store)
  return (
    <div >
      <div><Header headertext={"The Latest"}/></div>
      <div >
            <div style={{display:"flex", gap:"15px", justifyContent:"center" }}>
               <div className='newbar'>
                {count.filter((item) => item.cat === 'the latest').map((d, index) => {
                    return (
                        <div>
                          <div className='mog'>
                            
                          <Link to={`/dynamic/${d.id}`} state={d}>
                          <img src={d.img} alt="" className='img4'/>
                          </Link>
                <h4>Nature always wears the colors of<br/> the spirit.</h4>
                   <h4>Look deep into nature, and then you<br></br> will understand everything better</h4>     
                          <p>{d.heading}</p>
                          
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