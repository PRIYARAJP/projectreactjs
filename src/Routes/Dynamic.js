import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Dynamic.style.css"
import { useNavigate } from 'react-router-dom'
import Latest from './Home/Latest'
import BottomBollywood from './Bollywood/BottomBollywood'
import BottomHollywood from './Hollywood/BottomHollywood'
import BottomTechnology from './Technology/BottomTechnology'
import BottomFitness from './Fitness/BottomFitness'
import BottomFood from './Food/BottomFood'
const Dynamic = () => {
  let loc = useLocation()

  let navi = useNavigate()

  const handleCancel=()=>{
    navi(-1);
  }
  const locatelocat=()=>{
  
  if( loc.state.id<=18){
        
  return(<>
  <div className='back'>
     <Latest/>
     </div>
    </>)
  }
  else if((19 >= loc.state.id )||(loc.state.id<=37)){
   
    return(<>  <div className='back'>
      < BottomBollywood/></div>
     </>)
  }
  else if((38 >= loc.state.id )||(loc.state.id<=46)){
   
    return(<>  <div className='back'>
      < BottomHollywood/></div>
     </>)
      
  }
  else if((47 >= loc.state.id )||(loc.state.id<=60)){
   
    return(<>  <div className='back'>
      < BottomTechnology/></div>
     </>)
}
else if((47 >= loc.state.id )||(loc.state.id<=60)){
   
  return(<>  <div className='back'>
    < BottomTechnology/></div>
   </>)
}
else if((61 >= loc.state.id )||(loc.state.id<=72)){
   
  return(<> 
   <div className='back'>
    < BottomFitness/></div>
   </>)
}
else {
   
  return(<> <div className='back'>
    < BottomFood/></div>
   </>)
}
  }
  
  return (
    <><div className='lefter'><div className='posstr'>
  <div className='apper'> <Link to ='/projectreactjs'>
    <div>
<div className='apper'>
  
<span className='upro'>The</span>
<b className='booold'>Siren</b>
</div>
</div>
</Link>
<div className="getstartbor" 
onClick={handleCancel}
><p className='getstart'>
Get Started</p></div>
</div> <hr></hr> </div>

    <div className='container'>
        <h1>{loc.state.heading}</h1>

 <div className="homepageone">
 <div className="splits">
     <img src="https://cdn.openart.ai/uploads/image_hpHpbgvV_1680141414858_raw.jpg" alt="" className='imageanime'/>
       <div>
     <div className='myname'>Priyadharshini R</div>
     <div className="Travel">August 17 2023</div>
     </div>
     </div> 
     <div >
     <Link to={`https://www.instagram.com/`} target="_blank" >   
     <b className='fa fa-instagram'  style={{fontSize:"36px" ,margin:"10px", color:"black"}} ></b>   
       </Link>
       <Link to={`https://github.com/PRIYARAJP`} target="_blank" >   
     <b className='fa fa-github'  style={{fontSize:"36px"  ,margin:"10px",color:"black"}} ></b>   
       </Link>
       <Link to={`https://www.facebook.com/`} target="_blank" >   
     <b className='fa fa-facebook-square'  style={{fontSize:"36px" ,color:"black" ,margin:"10px"}} ></b>   
       </Link>
       <Link to={`https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D`} target="_blank" >   
     <b className='fa fa-twitter-square'  style={{fontSize:"36px" ,color:"black" ,margin:"10px"}} ></b>   
       </Link>
   </div>
   

</div>
 <Link to={`https://priyarajp.github.io/projectreactjs/`} target="_blank" >   
 <div className="apperstrickyER"></div></Link>
<div className="apperstricky">
<div className="apperen">
        <div className=" handclaper"></div>
         <span className="Travelleftered" >9.3K </span> 
         </div>
       
          <div className="apper">
        <div className=" sharesimble">

         <img src="https://friconix.com/jpg/fi-xwluxx-share-wide.jpg" alt="" width={25}/>
        </div>
         <div className="Travelleftered">Share</div> 
</div>
       
</div>


        <img src={loc.state.img} alt="" className='img'/>
        <p className='cent'>{loc.state.command} {loc.state.extrecom}</p>

               <div className='homepageone'>
   
               <div className="RJArja">React</div>
        <div className="RJArja">JavaScript</div>
        <div className="RJArja">Animation</div>
        </div>
     <div className='homepageone'>
     <div className="apper">
        <div className="handclap"></div>
         <div className="Travellefter">9.3K claps</div> 
         </div><div></div>
      </div>
      <div className='homepageone'>
        <div className="apper">

   
       
        <img src="https://cdn.openart.ai/uploads/image_hpHpbgvV_1680141414858_raw.jpg" alt="" className='imageanime'/>
      
      <div >
      <span className="Travelleft">WRITTEN BY</span>
    <div > Priyadharshini R </div>
    <div className="Travel"> August 17 2023</div>
    </div>
    
   </div><div></div>
 </div>


       <p>{locatelocat()}</p>
  
       
      
         <h1 onClick={handleCancel}>BACK</h1>
        

        </div></div>
   </>
  )
}

export default Dynamic