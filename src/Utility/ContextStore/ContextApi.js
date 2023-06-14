import React, { createContext, useState } from 'react'


export let store = createContext();


const ContextApi = (props) => {
    let [data, setData] = useState([
      {id:1, cat:"homebanner", img:"https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"ROSES "},
      {id:1, cat:"the latest", img:"https://images.pexels.com/photos/1796727/pexels-photo-1796727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"THE LATEST IMAGES"},
      {id:1, cat:"the latest", img:"https://images.pexels.com/photos/1796727/pexels-photo-1796727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"THE LATEST IMAGES"},  
      {id:1, cat:"the latest", img:"https://images.pexels.com/photos/1796727/pexels-photo-1796727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"THE LATEST IMAGES"},

      {id:1, cat:"latestarticles", img:"https://images.pexels.com/photos/3444648/pexels-photo-3444648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"The Latest articles by our Website", },
      {id:1, cat:"latestarticles", img:"https://images.pexels.com/photos/3444648/pexels-photo-3444648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"The Latest articles by our Website", },
      {id:1, cat:"latestarticles", img:"https://images.pexels.com/photos/3444648/pexels-photo-3444648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"The Latest articles by our Website", },

      {id:3, cat:"bollywoodtop", img:"https://images.pexels.com/photos/16000582/pexels-photo-16000582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"TOP POST"},
      {id:3, cat:"bollywoodtop", img:"https://images.pexels.com/photos/16000582/pexels-photo-16000582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"TOP POST"},
      {id:3, cat:"bollywoodtop", img:"https://images.pexels.com/photos/16000582/pexels-photo-16000582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"TOP POST"},
     
      {id:2, cat:"bollywood", img:"https://www.tamilstar.com/wp-content/uploads/2020/04/dc-Cover-g479bq7ek1prgbd4lp5olpil20-20161227230409.Medi_.jpeg",  heading:"Thalapathi vijay"},
      {id:2, cat:"bollywood", img:"https://tse1.mm.bing.net/th/id/OIP.mqXdLSSG2HQP_1ZZ3mgZwQAAAA?pid=ImgDet&w=299&h=181&rs=1",  heading:"Thalapathi vijay"},
      {id:2, cat:"bollywood", img:"https://1.bp.blogspot.com/-KEiPaiE-xfA/YNwgE1nNIJI/AAAAAAAACY8/6ny8MnwR3qoFCJJtUkvE-miqhS-BtOUcACLcBGAsYHQ/s1200/EbCkvvZUEAA2jiV.jpg",  heading:"Thalapathi vijay"},
      {id:2, cat:"bollywood", img:"https://tse2.mm.bing.net/th/id/OIP.TO7DON6dZxE2uFzXLOoeogHaFL?w=271&h=190&c=7&r=0&o=5&dpr=1.6&pid=1.7",  heading:"Thalapathi vijay"},
      {id:2, cat:"bollywood", img:"https://tse4.mm.bing.net/th/id/OIP.WFt2QbUgEiWZ80juhYmmHwHaHa?pid=ImgDet&rs=1",  heading:"Thalapathi vijay"},

      
      
      
      
      {id:2, cat:"hollywood", img:"https://tse4.mm.bing.net/th/id/OIP.pBb3u1GMUBn2rCDSvU77ugHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7", heading:"Avengers"},
      {id:2, cat:"hollywood", img:"https://1.bp.blogspot.com/--joETLmICOw/X45xmNWLATI/AAAAAAAAblc/-iwRayzauKIGsiBGQ5gUfG_lzlOL-wURwCLcBGAsYHQ/w1200-h630-p-k-no-nu/marvels-avengers-cover.webp", heading:"Avengers"},
      {id:2, cat:"hollywood", img:"https://i.redd.it/ernhxu7mgxp01.jpg", heading:"Avengers"},    
      {id:4, cat:"hollywood", img:"https://upload.wikimedia.org/wikipedia/en/f/f2/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg", heading:"Avengers"},
     
      

      {id:3, cat:"hollywoodtop", img:"https://static3.srcdn.com/wordpress/wp-content/uploads/Avengers-2-Team-Wallpaper-Audi-Promo-Image.jpg", heading:"AVENGERS"},
      {id:3, cat:"hollywoodtop", img:"https://static3.srcdn.com/wordpress/wp-content/uploads/Avengers-2-Team-Wallpaper-Audi-Promo-Image.jpg", heading:"AVENGERS"},    
      {id:3, cat:"hollywoodtop", img:"https://static3.srcdn.com/wordpress/wp-content/uploads/Avengers-2-Team-Wallpaper-Audi-Promo-Image.jpg", heading:"AVENGERS"},
      
     
     
      {id:9, cat:"technology", img:"https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2023/01/Mean-Tech-stack.png", heading:"Technology Latest ariticles"},
      {id:9, cat:"technology", img:"https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg", heading:"Technology Latest ariticles"},
      {id:9, cat:"technology", img:"https://miro.medium.com/v2/resize:fit:678/1*l2tlJsFNg2tH6QizegKkqA.png", heading:"Technology Latest ariticles"},
      {id:9, cat:"technology", img:"https://mobisoftinfotech.com/resources/wp-content/uploads/2022/06/og-Best-Practices-for-Android-Development.png", heading:"Technology Latest ariticles"},
      // {id:9, cat:"technology", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxwPh1ZSbb7ne44P_RA_0Mwy0PBP_lcp8OcA&usqp=CAU", heading:"Technology Latest ariticles"},
     
     
     
      {id:9, cat:"fitness", img:"https://th.bing.com/th/id/R.e165b8e3f2d4d7757300f76790408dbb?rik=QOeYp%2b7JeQixaw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fBest-HD-Fitness-Backgrounds.jpg&ehk=0YyKEvL%2baTbWC8ceGZ5dFmdg%2biBqAixipIQ4PogMWT4%3d&risl=&pid=ImgRaw&r=0", heading:"Fitness "},
      
      {id:9, cat:"fitness", img:"https://th.bing.com/th/id/R.e165b8e3f2d4d7757300f76790408dbb?rik=QOeYp%2b7JeQixaw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fBest-HD-Fitness-Backgrounds.jpg&ehk=0YyKEvL%2baTbWC8ceGZ5dFmdg%2biBqAixipIQ4PogMWT4%3d&risl=&pid=ImgRaw&r=0", heading:"Fitness "},
      {id:9, cat:"fitness", img:"https://th.bing.com/th/id/R.e165b8e3f2d4d7757300f76790408dbb?rik=QOeYp%2b7JeQixaw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fBest-HD-Fitness-Backgrounds.jpg&ehk=0YyKEvL%2baTbWC8ceGZ5dFmdg%2biBqAixipIQ4PogMWT4%3d&risl=&pid=ImgRaw&r=0", heading:"Fitness "},
      {id:9, cat:"fitness", img:"https://th.bing.com/th/id/R.e165b8e3f2d4d7757300f76790408dbb?rik=QOeYp%2b7JeQixaw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fBest-HD-Fitness-Backgrounds.jpg&ehk=0YyKEvL%2baTbWC8ceGZ5dFmdg%2biBqAixipIQ4PogMWT4%3d&risl=&pid=ImgRaw&r=0", heading:"Fitness "},
     
      
      
      {id:9, cat:"food", img:"https://www.lecremedelacrumb.com/wp-content/uploads/2016/01/baked-honey-mustard-chicken-1w.jpg", heading:"food"},
      {id:9, cat:"food", img:"https://4.bp.blogspot.com/-Xrxd-8idowk/UpI1z1jgw9I/AAAAAAAAACA/B_M6GbopQzc/s1600/Prawn+Fry.jpg", heading:"food"},
      {id:9, cat:"food", img:"https://tse1.mm.bing.net/th/id/OIP.dzAbvRfX50S9YBV2ajgjJAHaE8?pid=ImgDet&rs=1", heading:"food"},{id:9, cat:"food", img:"https://www.lecremedelacrumb.com/wp-content/uploads/2016/01/baked-honey-mustard-chicken-1w.jpg", heading:"food"},
     
     
      {id:3, cat:"technologytop", img:"https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/biotech.png"},
      {id:3, cat:"technologytop", img:"https://gumlet.assettype.com/swarajya%2F2020-08%2F7f5acda4-8891-49fc-9f28-f339d0b98c23%2FAg_tech.jpeg?q=75&auto=format%2Ccompress&w=1200"},
      {id:3, cat:"technologytop", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGK68uXmwGcCSP2ZZQo9Ftq8OAV0ndYJPiQ&usqp=CAU"},
      {id:3, cat:"foodtop", img:"https://post.healthline.com/wp-content/uploads/2021/10/breakfast-foods-eggs-scrambled-pan-732x549-thumbnail.jpg"},
      {id:3, cat:"foodtop", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBv-YKP4tJNWV4LWwThf4wsLwrtU__vkiYQ&usqp=CAU"},
      {id:3, cat:"foodtop", img:"https://post.healthline.com/wp-content/uploads/2021/10/breakfast-foods-eggs-scrambled-pan-732x549-thumbnail.jpg"},
      
      {id:3, cat:"fitnesstop", img:"https://asset-eu.unileversolutions.com/content/dam/unilever/rexona/global/general_image/deodorants_and_fragrances/not_applicable/1_2_people_jumping_up_off_a_short_wall_1209x723-889036.jpg.ulenscale.669x400.jpg" ,heading:"fitness top"},
      {id:3, cat:"fitnesstop", img:"https://asset-eu.unileversolutions.com/content/dam/unilever/rexona/global/general_image/deodorants_and_fragrances/not_applicable/1_2_people_jumping_up_off_a_short_wall_1209x723-889036.jpg.ulenscale.669x400.jpg" ,heading:"fitness top"},
      {id:3, cat:"fitnesstop", img:"https://asset-eu.unileversolutions.com/content/dam/unilever/rexona/global/general_image/deodorants_and_fragrances/not_applicable/1_2_people_jumping_up_off_a_short_wall_1209x723-889036.jpg.ulenscale.669x400.jpg" ,heading:"fitness top"},
      
     
      // {id:5, cat:"technology", img:"https://community.thriveglobal.com/wp-content/uploads/2020/07/Modren-Tech.jpg", heading:"technology"},
      // {id:6, cat:"fitness", img:"https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", heading:"fitness"},
     
      {id:8, cat:"new", img:"https://images.pexels.com/photos/16128579/pexels-photo-16128579/free-photo-of-landscape-of-a-river-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"NEW MENU"},
      {id:9, cat:"newtophollywood", img:"https://letsdownloadgame.com/wp-content/uploads/2019/12/Download-marvels-avengers-game-apk-for-android-free.jpg", heading:"NEW MENU"},
      {id:10, cat:"newtoptech", img:"https://i.pinimg.com/originals/89/e1/52/89e1525b9ff7edc6c46046e44a90dbdf.jpg", heading:"new food"},
      {id:10, cat:"newtopfit", img:"https://www.muscleandfitness.com/wp-content/uploads/2019/10/women-squat-home-workout-1109.jpg?w=1100&quality=86&strip=all", heading:"NEW MENU"},
    
    ])
  return (
    <div>
      <store.Provider value={[data, setData]}>
        {props.children}
      </store.Provider>
    </div>
  )
}

export default ContextApi