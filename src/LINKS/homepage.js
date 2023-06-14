import React ,{ Component } from "react";
import Nav from "./links";
import { Link } from "react-router-dom";
// import "./wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass.jpg"
class Home extends Component{
    
    render(){
        const user = {
            name: 'Nature',
            imageUrl: 'https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=699.825&fit=crop&h=1133.05',
            imageSizewidth: 452,
            imageSizehight: 229,
            namej:' Joshua Tree Overnight Adventure',
          };
          const userlast = {
            name: 'Nature',
            imageUrl: 'https://images.pexels.com/photos/3444648/pexels-photo-3444648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imageSizewidth: 452,
            imageSizehight: 229,
          };
          const usertop = {
            name: 'Nature',
            imageUrl: 'https://images.pexels.com/photos/13368192/pexels-photo-13368192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imageSizewidth: 101,
            imageSizehight: 104,
          };
          const icon = {
            name: 'Nature',
            forward: 'https://cdn.onlinewebfonts.com/svg/img_276831.png',
            imageSizewidth: 25,
            imageSizehight: 25,
          };
          const Latestst = {
            title: 'Catch waves with an adventure guide',
            contant: 'Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces',
            contant1:'Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces', 
            Tech: 'TECH',
            Techa: '/ August 21 2017',
          };
          
        return <><h1  >
            <Nav/>
          
{/*           
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
        
      ></img> */}
<div className="homepg">
            <div className="homepageone">

            <div className="istimg">

                <p className="cont">Title of vertical gallery
                <p className="Travel">Travel / August 21 2017</p>
                </p>

            </div >
            <div className="homepageoneleft">
              
            <div className="twostimg">
            <p className="contleft">Title of vertical gallery
                <p className="Travelleft">Travel / August 21 2017</p>
                </p>
            </div>
           <div className="twostimg">
           <p className="contleft">Title of vertical gallery
                <p className="Travelleft">Travel / August 21 2017</p>
                </p>
            </div>
            </div>
            </div >
<nav className="formorgin">
            <p> The Latestw</p>
            <p className="redline"></p>
            <div className="homepageone">
             <br></br>
              
<div className="avatars" >
       <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
      ></img>
      <nav className="ovtx">
     {user.namej}
        <p className="Travelleft">{Latestst.contant}</p>
        Travel <span className="Travelleft"> / August 21 2017</span>
        </nav>
        
      </div>
<div className="avatars" >
       <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
      ></img>
      <nav className="ovtx">
      {user.namej}
      <p className="Travelleft">{Latestst.contant}</p>
          Travel <span className="Travelleft"> / August 21 2017</span>
        </nav>
      </div>
           <div className="avatars" >
       <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        // style={{
        //     width: user.imageSizewidth,
        //     height: user.imageSizewidth,
        // }}
        
      ></img><nav className="ovtx">
      {user.namej}
      <p className="Travelleft">{Latestst.contant}</p>
         Travel <span className="Travelleft"> / August 21 2017</span>
        </nav></div> 
        
            </div>

            <p >  Latest Articles</p>
           <hr/>
           
            <div  className="Latestartwithadd">
           <div  className="Latestart">
              <div className="avatarsss" >
            <img
        className="avatar"
        src={userlast.imageUrl}
        alt={'Photo of ' + userlast.name}
        style={{
          margin:0,
        }}
        
      ></img>
      
      <nav className="ovtx">
      Catch waves with an adventure guide
        <p className="Travelleft">{Latestst.contant1}</p>
        Travel <span className="Travelleft"> / August 21 2017</span>
        </nav>
</div>
<hr/>
<div className="avatarsss" >
            <img
        className="avatar"
        src={userlast.imageUrl}
        alt={'Photo of ' + userlast.name}
        style={{
          margin:0,
        }}
        
      ></img>
      
      <nav className="ovtx">
      Catch waves with an adventure guide
      <p className="Travelleft">{Latestst.contant1}</p> Travel <span className="Travelleft"> / August 21 2017</span>
        </nav>
</div>
<hr/>
<div className="avatarsss" >
            <img
        className="avatar"
        src={userlast.imageUrl}
        alt={'Photo of ' + userlast.name}
        style={{
          margin:0,
        }}
        
      ></img>
      
      <nav className="ovtx">
      Catch waves with an adventure guide
      <p className="Travelleft">{Latestst.contant1}</p>  Travel <span className="Travelleft"> / August 21 2017</span>
        </nav>
</div>
<hr/>
<div className="avatarsss" >
            <img
        className="avatar"
        src={userlast.imageUrl}
        alt={'Photo of ' + userlast.name}
        style={{
          margin:0,
        }}
        
      ></img>
      
      <nav className="ovtx">
      Catch waves with an adventure guide
      <p className="Travelleft">{Latestst.contant1}</p>   Travel <span className="Travelleft"> / August 21 2017</span>
        </nav>
</div>
<hr/>
</div>

<div  className="Latestart" >
<div className="adv">Advertistement</div>
<div>Top Posts</div>
<div className="avatar" >

            <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
       
        
      ></img><nav className="ovtxa">
       <div className="aa1"> <nav>
      Catch waves with an adventure guide </nav><nav className="num">1</nav>
      </div>
   
        <br/>
        Travel <span className="Travelleft"> / August 21 2017</span>
        </nav>
        <hr/>
 
        <div className="avatarsers" >
            <img
        className="avatar"
        src={usertop.imageUrl}
        alt={'Photo of ' + usertop.name}
        style={{
          // margin:,
            width: usertop.imageSizewidth,
            height: usertop.imageSizehight,
        }}
        
        
      ></img>
      
      <nav className="ovtxes">
      <div className="aa1"> 
      <nav>
      Catch waves with an adventure guide </nav>
      <nav className="num">2</nav>
      </div>
<br/>
        Travel <span className="Travelleft"> / August 21 2017</span>
        </nav>
</div>
<hr/>

<div className="avatarsers" >
            <img
        className="avatar"
        src={usertop.imageUrl}
        alt={'Photo of ' + usertop.name}
        style={{
          // margin:,
            width: usertop.imageSizewidth,
            height: usertop.imageSizehight,
        }}
        
        
      ></img>
      
      <nav className="ovtxes">
      <div className="aa1"> <nav>
      Catch waves with an adventure guide </nav><nav className="num">3</nav>
      </div>
<br/>
        Travel <span className="Travelleft"> / August 21 2017</span>
        </nav>
</div>
<hr/>

<div className="avatarsers" >
            <img
        className="avatar"
        src={usertop.imageUrl}
        alt={'Photo of ' + usertop.name}
        style={{
          // margin:,
            width: usertop.imageSizewidth,
            height: usertop.imageSizehight,
        }}
        
        
      ></img>
      
      <nav className="ovtxes">
      <div className="aa1"> <nav>
      Catch waves with an adventure guide </nav><nav className="num">4</nav>
      </div>
<br/>
        Travel <span className="Travelleft"> / August 21 2017</span>
        </nav>
</div>
<hr/>
       
</div>

</div>


</div>

<div className="sixstimg">
  <div>Title of vertical gallery</div>

 <span className="Travelleft">Travel / August 21 2017</span>
</div>

<p>Latest Stories</p>
<hr/>
<div className="homepageone">
<nav className="ovtx">
<nav>{Latestst.title}</nav>
        <p className="Travelleft">{Latestst.contant}</p>
        {Latestst.Tech} <span className="Travelleft">{Latestst.Techa}</span>
        </nav>
        <nav className="ovtx">
<nav>{Latestst.title}</nav>
        <p className="Travelleft">{Latestst.contant}</p>
        {Latestst.Tech} <span className="Travelleft">{Latestst.Techa}</span>
        </nav>
        <nav className="ovtx">
<nav>{Latestst.title}</nav>
        <p className="Travelleft">{Latestst.contant}</p>
        {Latestst.Tech} <span className="Travelleft">{Latestst.Techa}</span>
        </nav>
       

</div>
<Link to ='/Bollywood'>
<p className="updatesinggggg"> VIEW MORE  
<img

        src={icon.forward}
        alt={'Photo of ' + user.name}
        style={{
          marginLeft:20,
          color:"red",
            width: icon.imageSizewidth,
            height: icon.imageSizewidth,
        }}
        
      ></img>  </p>   </Link><br/>

</nav>
</div>
           </h1></>
          
         
        
    }

}
export default Home;