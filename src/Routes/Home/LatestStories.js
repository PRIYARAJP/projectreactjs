import React,{useContext} from 'react'
import { store } from '../../Utility/ContextStore/ContextApi'
import { Header } from '../../Component/Common'

import Travel from '../Travel'

const LatestStories = () => {
  let [count] = useContext(store)
  return (<>
   <Header headertext={"Latest Stories"}/>
            <div  style={{display:"flex", gap:"15px", justifyContent:"center" }} className='avatarsss'>
                {count.filter((item) => item.cat === 'LateststoryHome').map((d, index) => {
                    return (<>
                        <div >
                          <div className='comms'>
              
                      
                          <h2 >{d.img}</h2>     
                          <hr /><p>{d.command}</p>
                       
                          <Travel/>
                          </div>
          
                        </div></>
                    )
                })}
         
    </div></>
  )
}

export default LatestStories