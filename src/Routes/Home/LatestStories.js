import React,{useContext} from 'react'
import { store } from '../../Utility/ContextStore/ContextApi'
import { Header } from '../../Component/Common'

const LatestStories = () => {
  let [count] = useContext(store)
  return (
    <div>
       <div>
      <div><Header headertext={"Latest Stories"}/></div>
      <div >
            <div style={{display:"flex", gap:"15px", justifyContent:"center"}} className='avatarsss'>
                {count.filter((item) => item.cat === 'LateststoryHome').map((d, index) => {
                    return (
                        <div >
                          <div className='comms'>
              
                      
                          <h2 >{d.img}</h2>     
 <hr /><p>{d.command}</p>
                       
                          
                          </div>
          
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    </div>
  )
}

export default LatestStories