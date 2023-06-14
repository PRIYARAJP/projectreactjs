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
                {count.filter((item) => item.cat === 'the latest').map((d, index) => {
                    return (
                        <div >
                          <div >
              
                          {/* <img src={d.img} alt="" height={"150"}/> */}
                          <h2>Look deep into nature, and then you<br></br> will understand everything better</h2>     
 <hr /><p>1.Nature always wears the colors of the spirit.<br/>2.Look deep into nature, and then you<br/> will understand everything better<br/>3.Heaven is under our feet as well as over our heads. <br/>4.To me a lush carpet of pine needles or<br></br> spongy grass is more welcome than the most<br></br> luxurious Persian rug. <br/></p>
                            <p>{d.heading}</p>
                          
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