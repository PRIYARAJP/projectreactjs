import React,{useContext} from 'react'
import { Header } from '../../Component/Common'
import { store } from '../../Utility/ContextStore/ContextApi'
import { Link } from 'react-router-dom'

const BottomFitness = () => {
    let [count] = useContext(store)
    return (
      <div >
      
        <div >
        <div><Header headertext={"The Latest"}/></div>
              <div style={{display:"flex", gap:"15px", justifyContent:"center" }}>  
                 <div className='newbar'>
                  {count.filter((item) => item.cat === 'fitnesstop').map((d, index) => {
                      return (
                        <div className='newapp'>
                        <div className='mog'>
                        {/* <p className='com'>{d.command}</p>  */}
                        <Link to={`/home-img/${d.id}`} state={d}>
                        <img src={d.img} alt="" className='imger'/>
                        </Link>
                      </div>
                      <div>
                     
                      <p className='comer'>{d.command}</p>
                        </div>
                      </div>
                      )
                  })}</div>
              </div>
          </div>
      </div>
    )
  }




export default BottomFitness