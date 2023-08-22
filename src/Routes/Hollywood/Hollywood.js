import React from "react"
import TopPost from "./TopPost"
import ArticlesList from "./ArticlesList"
import "./Hollywood.style.css"
import { TopNavigation } from "../../Component/Common"
import { Link } from "react-router-dom"


let Bollywood = () =>{
    
    return(<>
      
        <TopNavigation/>
        <span className="flexeeeeeeeeeee">
            <ArticlesList/>
            <TopPost/>
            </span>
            <Link to={`/Technology`} className="uper">
            <p >View more <i className='	fa fa-arrow-right' style={{color:"red"}}></i></p>
   
                      </Link>
       </>
    )
}
export default Bollywood