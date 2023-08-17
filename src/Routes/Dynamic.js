import React from 'react'
import { useLocation } from 'react-router-dom'
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
  // let locat = useLocation()
  // const locs =[locat.state.id+1,locat.state.id+2,locat.state.id+3]
  let navi = useNavigate()
// const [threeip,setthreeip]=useState();
  console.log(loc);
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
    <>
  <div className='apper'>
<div className='apper'>
<span className='upro'>The</span>
<b className='booold'>Siren</b>
</div>

<div className="getstartbor" 
onClick={handleCancel}
><p className='getstart'>
Get Started</p></div>
</div>  
<hr></hr>
    <div className='container'>
        <h1>{loc.state.heading}</h1>

 <div className="homepageone">
 <div className="splits">
     <img src="https://cdn.openart.ai/uploads/image_hpHpbgvV_1680141414858_raw.jpg" alt="" className='imageanime'/>
       <div>
     <div className='myname'>Priyadharshini R</div>
     <div className="Travel">August 17 2023</div>
     </div>
     </div>  <div className="instalogoes"></div>
</div>
<div className="apperstricky">
<div className="apper">
        <div className=" handclaper"></div>
         <div className="Travelleftered">9.3K </div> 
         </div>
         <div className="apper">
        <div className=" sharesimble">
          <img src="https://friconix.com/jpg/fi-xwluxx-share-wide.jpg" alt="" width={25}/>
        </div>
         <div className="Travelleftered">Share this article</div> 
         </div>
         </div>
        <img src={loc.state.img} alt="" className='img'/>
        <p className='cent'>{loc.state.command}</p>

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
          {/* {
            loc.map((item) => {
              return(
                <div key={item.id}>
                  <div>{item.state.title}</div>
                </div>
              )
            })
          } */}

        </div>
   </>
  )
}

export default Dynamic