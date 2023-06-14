import React,{useContext} from 'react'
import { store } from '../../Utility/ContextStore/ContextApi'
import { Header } from '../../Component/Common'
import TopPost from '../Bollywood/TopPost'
import "./Home.style.css"
import { Link } from 'react-router-dom'

const LatestArticles = () => {
  let [count] = useContext(store)
  return (
    <div >
      <div><Header headertext={"Latest Articles"}/></div>
      <div className='moger'>
        
      <div >
                {count.filter((item) => item.cat === 'latestarticles').map((d, index) => {
                    return (
                        <div>
                          <div className='moger'>
                          
                          <div>
                          <Link to={`/dynamic/${d.id}`} state={d}>
                            <img src={d.img} alt="" className='img5'/>
                            </Link>
                            </div>
                          <div>
                          <h4>Nature always wears the colors of<br/> the spirit.</h4>
                   <h4>Look deep into nature, and then you<br></br> will understand everything better</h4>     
                      
                          <p>{d.heading}</p>
                          </div>
                          
                          </div>

                        </div>
                    )
                })}
                
                <div className='hh'></div>
                
            </div>
            <div><TopPost/></div>
      </div>
    </div>
  )
}

export default LatestArticles