import React from "react"
import TopPost from "./TopPost"
import ArticlesList from "./ArticlesList"
import "./Fitness.style.css"
import { TopNavigation } from "../../Component/Common"


let Bollywood = () =>{
    
    return(
       <div>
        <TopNavigation/>
        <div className="flexeeeeeeeeeee">
            <ArticlesList/>
            <TopPost/>
       </div>
       </div>
    )
}
export default Bollywood