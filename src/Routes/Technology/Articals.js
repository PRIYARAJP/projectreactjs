import React ,{ useContext } from "react";
import "./Technology.style.css"



import { store } from "../../Utility/ContextStore/ContextApi"
import { Link } from 'react-router-dom'

const ArticlesListt = () => {
    
    
        const user = {
            name: 'Nature',
            content1:'5 Ways to animate a React app.',
            conj:'Joshua Tree Overnight Adventure',
            named:'Dmitry Nozhenko',
            datee:'Jan 28, 2019 · 10 min read',
            con:'Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags.This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.',
            imageUrl: 'https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=699.825&fit=crop&h=1133.05',
            imageSizewidth: 452,
            imageSizehight: 229,
          };
          let [count] = useContext(store)
  
        return <>


 <nav className="formorgin">
  
 <div className="techfirst">
 <div className="techfirstbox">
<h3>{user.content1}</h3>
<div className="instalogoes"></div>
<div className="homepageone">
    <div className="boyimg">
    </div>
      <div >
    <div >{user.named}</div>
    <div className="Travel">{user.datee}</div>
    </div>
    

    <div className="instalogo"></div>
 
    </div>
    {count.filter((item) => item.cat === 'Reactjs').map((d, index) => {
                    return (<>
                        <div style={{display:"flex", gap:"15px", marginTop:"35px"}}>
                          <div className='avatarsss'>
                          <Link to={`/${d.icon}/${d.id}`} state={d}>
                          <img src={d.img} alt="" className='reactjsanimation'/>
                          </Link>
                          
                          
                          </div>
                        </div></>
                    )
                })}
    
 <p>

    {user.con}
    <br/><br/>
     Let’s talk about them</p>
     {count.filter((item) => item.cat === 'Reactjsscr').map((d, index) => {
                    return (
                        <div style={{display:"flex", gap:"15px", marginTop:"35px"}}>
                          <div className='avatarsss'>
                          <Link to={`/${d.icon}/${d.id}`} state={d}>
                          <img src={d.img} alt="" className='rectpgsc'/>
                          </Link>
                          
                          
                          </div>
                        </div>
                    )
                })}
 
        <div  className="homepageone">
        <div className="RJArja">React</div>
        <div className="RJArja">JavaScript</div>
        <div className="RJArja">Animation</div>
        </div>
        <div  className="homepageone">
        <div className="handclap"></div> <div className="Travelleft">9.3K claps</div> 
        </div><hr/>
        <div className="homepageone">
    <div className="boyimgdown">
    </div>
      <div >
      <span className="Travelleft">WRITTEN BY</span>
    <div >{user.named}</div>
    <div className="Travel">{user.datee}</div>
    </div>
    </div><hr/>
    </div>
 </div>
 

              


        <hr/>     

           </nav>

          </>
          
         
        
    }


export default ArticlesListt;
 

              
