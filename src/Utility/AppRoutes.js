import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Bollywood, Hollywood, Technology, Fitness, Food } from '../Routes/Routes'
import Dynamic from '../Routes/Dynamic'
// import Share from '../Routes/Share'

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>    
      <Routes>
      <Route path='/projectreactjs'element={<Home />}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/bollywood" element={<Bollywood/>}/>
        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path='/food' element={<Food/>}/>
        {/* <Route path="/:producticon/:productId:share" element={<Share/>}/> */}
        <Route path="/:producticon/:productId" element={<Dynamic/>}/>
        {/* <Route path="/home-img/:productId" element={<Dynamic/>}/>
        <Route path="/home-img/:productId" element={<Dynamic/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes