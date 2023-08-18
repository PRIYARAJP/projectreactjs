import React,{useContext} from 'react'
import { Header } from '../../Component/Common'
import { store } from '../../Utility/ContextStore/ContextApi'
import { Link } from 'react-router-dom'
import "./Home.style.css"

const Latest = () => {
  let [count] = useContext(store)
  return (<>
    <div >
    
      <div><Header headertext={"The Latest"}/></div>
            <div style={{display:"flex", gap:"15px", justifyContent:" space-between" ,}}>  
               <div className='newbarer'>
                {count.filter((item) => item.cat === 'Hometop').map((d, index) => {
                  console.log(d.icon);
                    return (<>
                      <div className='newapp'>
                      <div className='mog'>
                      {/* <p className='com'>{d.command}</p>  */}
                      
                      <Link to={`/${d.icon}/${d.id}`} state={d}>
                      <img src={d.img} alt="" className='imger'/>
                      </Link>
                    </div>
                    <div>
                   
                    <p className='comer'>{d.command}</p>
                      </div>
                    </div></>
                    )
                })}</div>
            </div>
       
    </div></>
  )
}

export default Latest