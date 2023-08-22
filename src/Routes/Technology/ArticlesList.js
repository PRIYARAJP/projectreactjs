import React,{useContext} from 'react'
import { store } from '../../Utility/ContextStore/ContextApi'
import { Header } from '../../Component/Common'
import { Link } from 'react-router-dom'
import Travel from '../Travel'

const ArticlesList = () => {
  let [count] = useContext(store)
  return (<>
   <div>
   <div><Header headertext={"Latest Articles"}/></div>
      <div className='moger'> 
   
      <div > 
                {count.filter((item) => item.cat === 'technology').map((d, index) => {
                    return (<>
                        <div>
                          <div className='mogering'>
                          
                          <div>
                          <Link to={`/${d.icon}/${d.id}`} state={d}>
                            <img src={d.img} alt="" className='imger'/>
                            </Link>
                            </div>
                          <div>
                        
                          
                          < div className='com'><b>{d.heading}</b><br></br>
                          {d.command}</div>
                      
                          <p className='com'> <Travel/></p>
                         {/* <Travel/> */}
                          </div>
                          
                          </div>

                        </div>    <hr/></>
                    )
                })}
             
                
            </div>
          
            </div>
    </div></>
  )
}

export default ArticlesList
