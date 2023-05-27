import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./homepage";
import './reduce.css';
import Bollywood from "./Bollywood";
import Technology from "./Technology";
// import Hollywood from "./Hollywood";
// import Fitness from "./Fitness";
// import Food from "./Food";
// import Heading from "./heading";
// import Nav from "./links";
function Routerof() {
   return (<> 
<span className="App">
      <header className="App-header">
      {/* <div className='app'>
  <nav className='rotate'>The</nav>
  <h1>Siren<span className="i"><i class="fa fa-bars" ></i></span></h1>
  </div> */}

       <BrowserRouter>
    <Routes>
    <Route path='/projectreactjs'element={<Home />}/>
      <Route path='/'element={<Home />}/>
      <Route path='/Bollywood'element={<Bollywood />}/> 
      <Route path='/Technology'element={<Technology />}/> 
      <Route path='/Hollywood'element={<Home />}/> 
      <Route path='/Fitness'element={<Bollywood />}/> 
      <Route path='/Food'element={<Technology />}/> 
      <Route path='/Options'element={<Home />}/> 
     
    </Routes>
            </BrowserRouter>
    
      </header>
    </span>

            </>)
           
}
export default Routerof;   