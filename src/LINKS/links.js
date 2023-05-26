import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./reduce.css"
// import TOP from "./heading";

function Nav(){
  
 
  const [formvalues, setformvalues] =useState({
                Contant:"",
               
              });
           const opentag=()=>{
            setformvalues(
               {
                Contant :<> <Link to ='/'> <div className="up">Home </div></Link><br/>
                <Link to ='/Bollywood'><div className="up">Bollywood </div></Link><br/>
    <Link to ='/Technology'><div className="up">Technology </div></Link><br/>
    <Link to ='/Hollywood'><div className="up">Hollywood </div></Link><br/>
    <Link to ='/Fitness'><div className="up">Fitness </div></Link><br/>
    <Link to ='/Food'><div className="up">Food </div></Link><br/>
                </>,
               }
    
            );
           }
    return(<>    
 <div className='app'>
        
 <nav className='rotate'>The</nav>
  <h1>Siren<span className="i" onClick={opentag}>
            
   <i class="fa fa-bars" ></i></span></h1>
        </div>
        
          <div>{formvalues.Contant}</div>
    <nav  className="heading">        
    <Link to ='/'> <div className="updates">Home </div></Link><br/>
    <Link to ='/Bollywood'><div className="updates">Bollywood </div></Link><br/>
    <Link to ='/Technology'><div className="updates">Technology </div></Link><br/>
    <Link to ='/Hollywood'><div className="updates">Hollywood </div></Link><br/>
    <Link to ='/Fitness'><div className="updates">Fitness </div></Link><br/>
    <Link to ='/Food'><div className="updates">Food </div></Link><br/>
    </nav>
  <hr/> 
    </>)
}
export default Nav;