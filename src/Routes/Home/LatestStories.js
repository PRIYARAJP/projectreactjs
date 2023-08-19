import React,{useContext} from 'react'
import { store } from '../../Utility/ContextStore/ContextApi'
import { Header } from '../../Component/Common'

import Travel from '../Travel'

const LatestStories = () => {
  let [count] = useContext(store)
  return (<>
     <div className='backererr'>
    <div><Header headertext={"The Latest"}/></div>
          <div style={{display:"flex", gap:"15px", justifyContent:" space-between" ,}}>  
             <div className='newbarer'>
              {count.filter((item) => item.cat === 'LateststoryHome').map((d, index) => {
                console.log(d.icon);
                  return (<>
                    <div style={{margin:"10px"}}>
                          <div className='comms'>
              
                      
                          <h2 >{d.img}</h2>     
                          <hr /><p>{d.command}</p>
                       
                          <Travel/>
                          </div>
          
                        </div></>
                  )
              })}</div>
          </div>
     
  </div>
{/*   
  <div className='backer'>
 <div>  <Header headertext={"Latest Stories"}/></div>
 <div>
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
         </div>
    </div>
    </div>

 */}


    {/* <div className='moger'> 
      <div ><div><Header headertext={"Latest Articles"}/></div>
      <div  style={{display:"flex", gap:"15px", justifyContent:"center" }}  className='adverrrrer'>
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
    
                </div>
            </div>
          
   
    </div> */}



    </>
  )
}

export default LatestStories