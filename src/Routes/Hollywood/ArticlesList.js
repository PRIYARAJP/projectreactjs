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
                {count.filter((item) => item.cat === 'hollywood').map((d, index) => {
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



// import React, { useContext } from 'react'
// import { Header } from '../../Component/Common'
// import "./Hollywood.style.css"
// import { store } from "../../Utility/ContextStore/ContextApi"
// import { Link } from 'react-router-dom'
// import Travel from '../Travel'




// const ArticlesList = () => {
//   let [count] = useContext(store)

//   return (
//     <div>
//       <Header headertext={"Hollywood"}/>
//       <div>
//       <div >
//                 {count.filter((item) => item.cat === 'hollywood').map((d, index) => {
//                     return (
//                       <div>
//                       <div className='moger'>
                      
//                       <div>
//                       <Link to={`/${d.icon}/${d.id}`} state={d}>
//                         <img src={d.img} alt="" className='img5'/>
//                         </Link>
//                         </div>
//                       <div>
//                       <h3 className='comm'>{d.heading}</h3>
//                           <p className='comm'>{d.command}</p>
                      
//                           <p className='comm'> <Travel/></p>
//                       </div>
                      
//                       </div>

//                     </div>
//                       //   <div style={{display:"flex", gap:"15px", marginTop:"35px"}}>
//                       //   <div className='avatarsss'>
                          
//                       //     <Link to={`/dynamic/${d.id}`} state={d}>
//                       //     <img src={d.img} alt="" className='img2'/>
//                       //     </Link>
//                       //     </div>
//                       //     <div>
//                       //     <h2>                          <h4><p>{d.heading}</p> </h4></h2>     
//                       //       <hr /><p className='comm'>{d.command}</p>
                          
                         
//                       // </div>
//                       //   </div>
//                     )
//                 })}
//             </div> 
//             {/* <div >
//                 {count.filter((item) => item.cat === 'hollywood').map((d, index) => {
//                     return (
//                         <div style={{display:"flex", gap:"15px", marginTop:"35px"}}>
//                         <div className='avatarsss'>
                          
//                           <Link to={`/dynamic/${d.id}`} state={d}>
//                           <img src={d.img} alt="" className='img2'/>
//                           </Link>
//                           </div>
//                           <div>
//                           <h2>                          <h4><p>{d.heading}</p> </h4></h2>     
//                             <hr /><p className='comm'>{d.command}</p>
                          
                         
//                       </div>
//                         </div>
//                     )
//                 })}
//             </div> */}
//         </div>
//     </div>
//   )
// }

// export default ArticlesList