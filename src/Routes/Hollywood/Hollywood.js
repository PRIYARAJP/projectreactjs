import React from "react"
import TopPost from "./TopPost"
import ArticlesList from "./ArticlesList"
import "./Hollywood.style.css"
import { TopNavigation } from "../../Component/Common"


let Bollywood = () =>{
    
    return(<>
      
        <TopNavigation/>
        <span className="flexeeeeeeeeeee">
            <ArticlesList/>
            <TopPost/>
            </span>
       
       </>
    )
}
export default Bollywood