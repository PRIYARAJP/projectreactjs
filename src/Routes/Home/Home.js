import React from "react"
import Banner from "./Banner"

import LatestArticles from "./LatestArticles"
import LatestStories from "./LatestStories"
// import { store } from "../../Utility/ContextStore/ContextApi"
import { TopNavigation } from "../../Component/Common"
import TopPost from "./TopPost"

import Latesthome from "./Latesthome"
import { Link } from "react-router-dom"


let Home = () =>{
    // let [count] = useContext(store)
    // console.log(count);
    return(<>
        <div >
            <TopNavigation/>
            <span className="flexeeeeeeeeeee">
            <Banner/>
            </span>
            {/* <Latest/>  */}
            <span className="flexeeeeeeeeeeess">
                
               
            <Latesthome/></span>
            <span className="flexeeeeeeeeeeess">
            {/* <span className="flexeeeeeeeeeee"> */}
            <LatestArticles/>
            <TopPost/> 
            </span>
            
            <span className="flexeeeeeeeeeeess">
            <LatestStories/></span>
            <Link to={`/bollywood`} className="uper">
            <p >View more <i className='	fa fa-arrow-right' style={{color:"red"}}></i></p>
   
                      </Link>
        </div></>
    )
}
export default Home