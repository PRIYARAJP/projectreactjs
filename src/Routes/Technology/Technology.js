import React from "react"
// import TopPost from "./TopPost"
import Latest from "../Home/Latest";
import ArticlesList from "./ArticlesList"
import "./Technology.style.css"
import { TopNavigation } from "../../Component/Common"


let Technology = () =>{
    
    return(
       <div>
        <TopNavigation/>
        <div className="bollywood">
        <ArticlesList/>
            {/* <TopPost/> */}
            <Latest/>
        
       </div>
      
       </div>
    )
}
export default Technology