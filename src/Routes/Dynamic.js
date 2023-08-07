import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Dynamic.style.css"
import { useNavigate } from 'react-router-dom'

const Dynamic = () => {
  let loc = useLocation()
  let navi = useNavigate()
  console.log(loc);
  const handleCancel=()=>{
    navi(-1);
  }
  return (
    <div className='container'>
        <h1>{loc.state.heading}</h1>
        <div className=''></div>
        <img src={loc.state.img} alt="" className='img'/>
        <h3 className='cent'>{loc.state.command}</h3>
        {/* <h3 >1.Nature always wears the colors of the spirit.<br/>2.Look deep into nature, and then you will understand everything better<br/>3.Heaven is under our feet as well as over our heads. <br/>4.To me a lush carpet of pine needles or spongy grass is more welcome than the most luxurious Persian rug. <br/>5.We don’t inherit the earth from our ancestors, we borrow it from our children. —Native American proverb <br/>6.I believe in God, only I spell it Nature. —Frank Lloyd Wright<br/>7. I believe in God, only I spell it Nature. —Frank Lloyd Wright<br/>8. Choose only one master—nature. —Rembrandt<br/>9. Nature does not hurry, yet everything is accomplished. —Lao Tzu<br/>10. If you truly love nature, you will find beauty everywhere</h3> */}
                
        <div>
         <h1 onClick={handleCancel}>BACK</h1>
          {/* {
            loc.map((item) => {
              return(
                <div key={item.id}>
                  <div>{item.state.title}</div>
                </div>
              )
            })
          } */}

        </div>
    </div>
  )
}

export default Dynamic