import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Common'
import  "./TopNavigation.style.css"

const TopNavigation = () => {
   
  const [formvalues, setformvalues] =useState({
    Contant:"",
   
  });
const opentag=()=>{
setformvalues(
   {
    Contant :<>      <div>
    <div>
        {/* <Logo/> */}
    </div>
  
  <Link to ='/'> 
  <div className="up">Home </div></Link><br/>
    <Link to ='/bollywood'><div className="up">Bollywood </div></Link><br/>
    <Link to ='/Technology'><div className="up">Technology </div></Link><br/>
    <Link to ='/hollywood'><div className="up">Hollywood </div></Link><br/>
    <Link to ='/fitness'><div className="up">Fitness </div></Link><br/>
    <Link to ='/food'><div className="up">Food </div></Link><br/>
  </div>
  <div>

  </div>

    </>,
   }

);
}
return(
<>    
<div className='app'>

<nav className='rotate'>The</nav>
<h1>Siren<span className="i" onClick={opentag}>

<i class="fa fa-bars" ></i></span></h1>

</div>
<br/>
<div>{formvalues.Contant}</div>

    {/* <nav  className="heading">     */}

       
      <div className='nav'>
      <Link to="/"><div className="updates">Home</div></Link>
      <Link to="/bollywood"><div className="updates">Bollywood</div></Link>
      <Link to="/hollywood"><div className="updates">Hollywood</div></Link>
      <Link to="/Technology"><div className="updates">Technology</div></Link>
      <Link to="/fitness"><div className="updates">Fitness</div></Link>
      <Link to="/food"><div className="updates">Food</div></Link>
      </div>
      {/* </nav> */}
  
      
    
<hr/> 

</>)
  // return (
    // <div>
    //     <div>
    //         <Logo/>
    //     </div>
    //   <div className='nav'>
    //   <Link to="/">Home</Link>
    //   <Link to="/bollywood">Bollywood</Link>
    //   <Link to="/hollywood">Hollywood</Link>
    //   <Link to="/Technology">Technology</Link>
    //   <Link to="/fitness">Fitness</Link>
    //   <Link to="/food">Food</Link>
    //   </div>
    //   <div>
    //     <hr />
    //   </div>
    // </div>
  // )
}

export default TopNavigation