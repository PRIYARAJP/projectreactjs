import React from "react"
import TopPost from "./TopPost"
import ArticlesList from "./ArticlesList"
import "./Bollywood.style.css"
import { TopNavigation } from "../../Component/Common"
import { Link } from "react-router-dom"


let Bollywood = () =>{
    
    return(
       <div>
        <TopNavigation/>
        <span className="flexeeeeeeeeeee">
            <ArticlesList/>
            <TopPost/>
       </span>
       <Link to={`/hollywood`} className="uper">
            <p >View more <i className='	fa fa-arrow-right' style={{color:"red"}}></i></p>
   
                      </Link>
       </div>
    )
}
export default Bollywood