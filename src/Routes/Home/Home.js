import React from "react"
import Banner from "./Banner"

import LatestArticles from "./LatestArticles"
import LatestStories from "./LatestStories"
// import { store } from "../../Utility/ContextStore/ContextApi"
import { TopNavigation } from "../../Component/Common"
import TopPost from "./TopPost"

import Latesthome from "./Latesthome"


let Home = () =>{
    // let [count] = useContext(store)
    // console.log(count);
    return(<>
        <div >
            <TopNavigation/>
            <div className="flexeeeeeeeeeee">
            <Banner/>
            </div>
            {/* <Latest/>  */}
            <span className="flexeeeeeeeeeeess">
                
               
            <Latesthome/></span>
            {/* <div className="flexeeeeeeeeeeess"> */}
            <div className="flexeeeeeeeeeee">
            <LatestArticles/>
            <TopPost/> 
            </div>
            
            <span className="flexeeeeeeeeeeess">
            <LatestStories/></span>
        </div></>
    )
}
export default Home