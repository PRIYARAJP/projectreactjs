import React,{useContext} from 'react'

import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'

import Travel from '../Travel'
import { Header } from '../../Component/Common'

const TopPost = () => {
  let [count] = useContext(store)
  return (<>
    <div className='newfont'>
    <div><Header headertext={"Top Post"}/></div>   
   <div>
          
        <div className='centring'>
                {count.filter((item) => item.cat === 'newtopfood').map((d, index) => {
                    return (<>
                      <div className='adverrrring'>
                          <div>
                            
                            <Link to={`/${d.icon}/${d.id}`} state={d}>
                          <img src={d.img} alt="" className='imgeeeee'/>
                          </Link>
                          </div>
                          <div>
                          <div className='newbarer'>
                          <div >
                          <div className=''>
                          <div>
                          <div className='commsnum'>
                         <div className='comm'>
                          <h3 >{d.command}</h3></div>
                          <div className='numbers'>{d.num}</div>
                         
                          </div>
                          <div className='com' style={{marginLeft:"20px"}}><Travel/></div>
                          </div>
                          </div>
          
                        </div>
                          </div>
                          
                        </div> 
                        
                         </div>   
                           </>
                    )
                })}
      
      </div>
   
                {count.filter((item) => item.cat === 'foodtop').map((d, index) => {
                    return (<>
                      <div className='adverrrrer'>
                          <div>
                            
                            <Link to={`/${d.icon}/${d.id}`} state={d}>
                          <img src={d.img} alt="" className='img3' />
                          </Link>
                          </div>
                          <div>
                          <div>
                         
                          <h3 className='com'>{d.heading}</h3>
                          <p className='com'><Travel/></p>
                          </div>
                         
                          </div>
                          <div className='numbers'>{d.num}</div>
                        </div>    <hr/></>
                    )
                })}</div>
                 <div className='adverrrr'><div className='Advertisement2'><p>Advertisement</p></div></div>
   
        </div>
       
                      
     </>
    
  )
}

export default TopPost









// import React,{useContext} from 'react'

// import { store } from "../../Utility/ContextStore/ContextApi"
// import { Link } from 'react-router-dom'

// import Travel from '../Travel'


// const TopPost = () => {
//   let [count] = useContext(store)
//   return (<>
//     <div className='newfont'>
//     <h1 className='topppps'><span>Top post</span><hr className='toppppsnew'></hr> </h1>
//      <div className='tophome'>
//       {count.filter((item) => item.cat === 'newtopfood').map((d, index) => {
//         return(<>
//         <div className='adverrrr'>
//         <div className='newone'> 
        
//         <Link to={`/${d.icon}/${d.id}`} state={d}>
//         <img src={d.img} alt="" className='imgss'  height={"270px"}/>
                          
//                           </Link>
//                         <p className='comm'><p>{d.command}</p></p>
                   
//                         </div>
//                          </div></>)
//       })}
//           </div>
         
//                 {count.filter((item) => item.cat === 'foodtop').map((d, index) => {
//                     return (<>
//                         {/* <div style={{display:"flex", gap:"15px", marginTop:"25px"}}> */}
//                         <div className='adverrrr'>
//                           <div>
                          
//                             <Link to={`/${d.icon}/${d.id}`} state={d}>
//                           <img src={d.img} alt="" className='img3'/>
//                           </Link>
//                           </div>
//                           <div>
                         
//                           <p className='com'>{d.command}<br/>  <br/> <Travel/></p>
//                           </div>
                   
//                         </div></>
//                     )
//                 })}
//                  <div className='adverrrr'><div className='Advertisement'><p>Advertisement</p></div></div>
      
//         </div>


        
//     </>
    
//   )
// }

// export default TopPost





// // import React,{useContext} from 'react'
// // import { Header } from '../../Component/Common'
// // import { store } from "../../Utility/ContextStore/ContextApi"
// // import { Link } from 'react-router-dom'
// // import "./Food.style.css"
// // import Travel from '../Travel'

// // const TopPost = () => {
// //   let [count] = useContext(store)
// //   return (
// //     <>
// //     <div>
// //     <Header headertext={"Top Post"}/>
// //       <div>
      


      
// //       <div className='tophome'>
// //       {count.filter((item) => item.cat === 'newtopfood').map((d, index) => {
// //         return(<><div className='newone'> <div>
       
// //         <Link to={`/${d.icon}/${d.id}`} state={d}>
// //         <img src={d.img} alt="" className='imgss'  height={"220px"}/>
// //                           {/* <img src={}, height={"270px"} alt="" /> */}
// //                           </Link>
// //                         <p className='comm'><p>{d.command}</p><Travel/></p>
// //                         </div>
// //                         </div> </>)
// //       })}
// //           </div>
// //       {/* {count.filter((item) => item.cat === 'newtopfood').map((d, index) => {
// //         return(<>
// //         <Link to={`/dynamic/${d.id}`} state={d}>
// //                           <img src={d.img} height={"270px"} alt="" />
// //                           </Link>
// //                           <h4><p>{d.heading}</p></h4>
// //         <p className='commer'>{d.command}</p>
// //         </>)
// //       })} */}
// //         {/* <img src="https://travelspoonfood.files.wordpress.com/2012/02/img_6791.jpg" alt="" height={"270px"}/> */}
      
// //       </div>
// //       <div>
// //                 {count.filter((item) => item.cat === 'foodtop').map((d, index) => {
// //                     return (
// //                       <>
                      
// //                         <div style={{display:"flex", gap:"15px", marginTop:"25px"}}>
// //                           <div>
// //                             {/* <Link to={`/dynamic/${d.id}`}>
// //                              <img src={d.img} alt="" className='img3'/>
// //                             </Link> */}
// //                              <Link to={`/${d.icon}/${d.id}`} state={d}>
// //                           <img src={d.img} alt="" className='img3'/>
// //                           </Link>
// //                           </div>
// //                           <div>
// //                           <h5><p>{d.heading}</p></h5>
// //                           <p className='comm'>{d.command}</p><Travel/>
// //                           </div>
                      
// //                         </div>
// //                         </>
// //                     )
// //                 })}
                 
// //         </div>
// //         <div className='adverrrr'><div className='Advertisement'><p>Advertisement</p></div></div>
// //     </div>
// //     </>
// //   )
// // }

// // export default TopPost