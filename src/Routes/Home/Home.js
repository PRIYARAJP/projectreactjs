import React from "react"
import Banner from "./Banner"
// import Latest from "./Latest"
import LatestArticles from "./LatestArticles"
import LatestStories from "./LatestStories"
// import { store } from "../../Utility/ContextStore/ContextApi"
import { TopNavigation } from "../../Component/Common"
import TopPost from "./TopPost"


let Home = () =>{
    // let [count] = useContext(store)
    // console.log(count);
    return(<>
        <div >
            <TopNavigation/>
           
            <Banner/>
            {/* <Latest/>  */}
            <span className="flexeeeeeeeeeeess">
            <LatestArticles/>
            <TopPost/> </span>
            <LatestStories/>
        </div></>
    )
}
export default Home