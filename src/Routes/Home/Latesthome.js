import React,{useContext} from 'react'
import { Header } from '../../Component/Common'
import { store } from '../../Utility/ContextStore/ContextApi'
import { Link } from 'react-router-dom'
import "./Home.style.css"
import Travel from '../Travel'

const Latesthome = () => {
  let [count] = useContext(store)
  return (<>
    <div >
 
      <div className='HEEEE'><Header headertext={"The Latest"}/></div>
            <div style={{display:"flex", gap:"15px", justifyContent:" space-between" ,}}>  
               <div className='newbarer'>
                {count.filter((item) => item.cat === 'the latest').map((d, index) => {
                  console.log(d.icon);
                    return (<>
                      <div className=''>
                      <div style={{margin:"20px"}}>
                  
                      
                      <Link to={`/${d.icon}/${d.id}`} state={d}>
                      <img src={d.img} alt="" className='img5'/>
                      </Link>
                    </div>
                    <div>
                        <h2 className='comm'>
                        {d.heading}
                        </h2>
                  
                    <p className='comm'>{d.command}</p>
                    <p><Travel/></p>
                      </div>
                
                    </div>
             
                    </>
                    )
                })}</div>
            </div>
       
    </div>
    
    
    </>
  )
}

export default Latesthome
