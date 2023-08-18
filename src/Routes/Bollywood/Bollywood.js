import React from "react"
import TopPost from "./TopPost"
import ArticlesList from "./ArticlesList"
import "./Bollywood.style.css"
import { TopNavigation } from "../../Component/Common"


let Bollywood = () =>{
    
    return(
       <div>
        <TopNavigation/>
        <span className="flexeeeeeeeeeee">
            <ArticlesList/>
            <TopPost/>
       </span>
       </div>
    )
}
export default Bollywood