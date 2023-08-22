import React from "react"
import TopPost from "./TopPost"
// import Latest from "./Latest";
import ArticlesList from "./ArticlesList"
// import ArticlesListt from "./Articals";
import "./Technology.style.css"
import { TopNavigation } from "../../Component/Common"
import { Link } from "react-router-dom"


let Technology = () =>{
    
    return(<>
       <div>
        <TopNavigation/>
         {/* <div className="flexeeeeeeeeeee"> */}
         <span className="flexeeeeeeeeeeess">
        <ArticlesList/>
            <TopPost/>
            {/* <Latest/> */}
            </span> 
      
            <Link to={`/fitness`} className="uper">
            <p >View more <i className='	fa fa-arrow-right' style={{color:"red"}}></i></p>
   
                      </Link>
       </div></>
    )
}
export default Technology