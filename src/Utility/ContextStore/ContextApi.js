import React, { createContext, useState } from 'react'


export let store = createContext();


const ContextApi = (props) => {
    let [data, setData] = useState([
      {id:1, cat:"homebanner", img:"https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"ROSES " ,command:" “It’s the time that you spent on your rose that makes your rose so important…People have forgotten this truth, but you mustn’t forget it. You become responsible forever for what you’ve tamed. You’re responsible for your rose.” – Antoine de Saint-Exupéry"},
      {id:2, cat:"homebanner1", img:"https://th.bing.com/th?id=OIP.P1xzFzeXR3-Vy7rQJoEOPAHaLE&w=204&h=305&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2", heading:"ROSES " ,command:" ““We are all dreaming of some magical rose garden over the horizon instead of enjoying the roses blooming outside our windows today.” – Dale Carnegie"},
      {id:3, cat:"homebanner2", img:"https://th.bing.com/th?id=OIP.BSGCzSyrG9GYL7Hus1Rm_gHaEf&w=320&h=194&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2", heading:"ROSES " ,command:" ““We are all dreaming of some magical rose garden over the horizon instead of enjoying the roses blooming outside our windows today.” – Dale Carnegie"}, 
      {id:4, cat:"the latest", img:"https://th.bing.com/th/id/R.91e206fa02d81f85dd4e42ef005a88d9?rik=5MxgANLhpAlBJw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f07%2fautunm-desktop-natural-hd-wallpapers.jpg&ehk=j7yVlSgUBySdpPIKhx0ovaCIvpI2u%2f%2bw3lfHET9HT4w%3d&risl=1&pid=ImgRaw&r=0", heading:" THE LATEST IMAGES " ,command:" In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful. –Alice Walker"},
      {id:5, cat:"the latest", img:"https://tse3.mm.bing.net/th/id/OIP.S1dPiODc5rCcWObk4DThygHaEo?pid=ImgDet&rs=1", heading:" THE LATEST IMAGES" ,command:"Forget not that the earth delights to feel your bare feet and the winds long to play with your hair. —Khalil Gibran"},
      {id:6, cat:"the latest", img:"https://tse4.mm.bing.net/th/id/OIP.UYV_bihup-y039M8_Dk0KQHaFP?pid=ImgDet&rs=1", heading:"THE LATEST IMAGES",command: "Heaven is under our feet as well as over our heads. —Henry David Thoreau"},
      {id:7, cat:"latestarticles", img:"https://wallpapercave.com/wp/mXXyO8i.jpg", heading:"The Latest articles by our Website", command:"Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth. —Henry David Thoreau"},
      {id:8, cat:"latestarticles", img:"https://tse4.mm.bing.net/th/id/OIP.lhiRRDyaTheR4r-I8xAX1QHaHa?pid=ImgDet&w=500&h=500&rs=1", heading:"The Latest articles by our Website", command:" I go to nature to be soothed and healed, and to have my senses put in order. —John Burroughs"},
      {id:9, cat:"latestarticles", img:"https://fastly.4sqi.net/img/general/600x600/8771015_fFJaxrUstL3pe4-4LRoORITPNBIB_aMZ-pLYZo4SQr4.jpg", heading:"The Latest articles by our Website", command:"16. For most of history, man has had to fight nature to survive; in this century he is beginning to realize that, in order to survive, he must protect it. —Jacques-Yves Cousteau" },
      {id:10, cat:"latestarticles", img:"https://fastly.4sqi.net/img/general/600x600/8771015_fFJaxrUstL3pe4-4LRoORITPNBIB_aMZ-pLYZo4SQr4.jpg", heading:"The Latest articles by our Website", command:"16. For most of history, man has had to fight nature to survive; in this century he is beginning to realize that, in order to survive, he must protect it. —Jacques-Yves Cousteau" },
      {id:11, cat:"latestarticlesimg", img:"https://tse1.mm.bing.net/th/id/OIP.3MxqaJv2Z5QsG7wIXzizjAHaEo?pid=ImgDet&rs=1", heading:"The Latest articles by our Website", command:" For most of history, man has had to fight nature to survive; in this century he is beginning to realize that, in order to survive, he must protect it. —Jacques-Yves Cousteau" },
      {id:12, cat:"newtophome", img:"https://images.pexels.com/photos/16128579/pexels-photo-16128579/free-photo-of-landscape-of-a-river-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"Wind" ,command:" There’s a whole world out there, right outside your window. You’d be a fool to miss it. —Charlotte Eriksson "},
      {id:13, cat:"Hometop", img:"https://wallpapertag.com/wallpaper/full/d/3/c/968676-hi-res-background-images-2651x1813-retina.jpg", heading:"TOP POST" , command:"Preserve and cherish the pale blue dot, the only home we've ever known. —Carl Sagan"},
      {id:14, cat:"Hometop", img:"https://tse2.mm.bing.net/th/id/OIP.jV7SUuY5XW_z2hOL7lVl6wHaHa?pid=ImgDet&rs=1", heading:"TOP POST", command:"Study nature, love nature, stay close to nature. It will never fail you. —Frank Lloyd Wright"},
      {id:15, cat:"Hometop", img:"https://i.pinimg.com/736x/f3/41/e9/f341e94851147b91d314bcfc4765c72e.jpg", heading:"TOP POST", command:"The sun, with all those planets revolving around it and dependent on it, can still ripen a bunch of grapes as if it had nothing else in the universe to do. —Galileo Galilei"},
      {id:16, cat:"LateststoryHome", img:"All my life through, the new sights of Nature made me rejoice like a child", heading:" The Latest Story" ,command:"Use what talents you possess: the woods would be very silent if no birds sang there except those that sang best"},
      {id:17, cat:"LateststoryHome", img:"Let the rain kiss you. Let the rain beat upon your head with silver liquid drops. ", heading:"  The Latest Story" ,command:"The sun, with all those planets revolving around it and dependent on it, can still ripen a bunch of grapes as if it had nothing else in the universe to do"},
      {id:18, cat:"LateststoryHome", img:"Study nature, love nature, stay close to nature. It will never fail you. —Frank Lloyd Wright", heading:" The Latest Story " ,command:"Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather. "},
      {id:19, cat:"BollywoodTopposthigh", img:"https://th.bing.com/th?id=OSK.HERO3B0gX5xXz8Wam7-1JAETOBZuYImTsCvCa4OsnIHKA14&w=280&h=185&c=15&rs=2&o=6&oif=webp&dpr=1.6&pid=SANGAM ", heading:"Shah Rukh Khan" ,command:"Shah Rukh Khan (pronounced [ˈʃɑːɦɾʊx xɑːn]; born 2 November 1965), also known by the initialism SRK, is an Indian actor and film producer who works in Hindi films. Referred to in the media as the Baadshah of Bollywood and King Khan,[a] he has appeared in more than 90 films, and earned numerous accolades, including 14 Filmfare Awards."},
      {id:20, cat:"bollywoodtop", img:"https://i2.cinestaan.com/image-bank/1500-1500/58001-59000/58937.jpg", heading:"Ranbir Kapoor", command :"Ranbir Kapoor is an Indian actor known for his work in Hindi-language films. "},
      {id:21, cat:"bollywoodtop", img:"https://tse3.mm.bing.net/th/id/OIP.rb2mVsh3PcnBsdAECk7CewHaFn?pid=ImgDet&rs=1", heading:"Deepika Padukone ",command:"Deepika Padukone (pronounced [d̪iːpɪka pəɖʊkoːɳeː] or [paːɖʊkoːɳ]; born 5 January 1986) is an Indian actress who works predominantly in Hindi films. "},
      {id:22, cat:"bollywoodtop", img:"https://lh6.googleusercontent.com/-Ykl89bUroII/AAAAAAAAAAI/AAAAAAAAABw/cL_fU5wjboM/photo.jpg", heading:"Alia Bhatt", command:"Alia Bhatt was born on 15 March 1993[4][5] into the Bhatt family to Indian film director Mahesh Bhatt and actress Soni Razdan. Her father is of Gujarati descent[6][7] and her mother is of Kashmiri Pandit and British German ancestry."},
      {id:23, cat:"bollywoodtop", img:"https://tse1.mm.bing.net/th/id/OIP.BanAOIQZeNOIQvBpLSekNQHaFM?pid=ImgDet&w=570&h=400&rs=1", heading:"Priyanka Chopra" , command:"Priyanka Chopra Jonas (born 18 July 1982) is an Indian actress and producer. The winner of the Miss World 2000"},
      {id:24, cat:"bollywoodtop", img:"  https://th.bing.com/th/id/R.fda281d546d6f6630a50d523d93857ad?rik=ndJZB6EuFiNwBg&riu=http%3a%2f%2f3.bp.blogspot.com%2f_rRd950htNgQ%2fTM52vSi03JI%2fAAAAAAAAAGc%2fTU8AFRAMz5g%2fs1600%2f6.jpg&ehk=%2bfntlFl%2bucXRvvrJTST4XIJxfGw6LOiJr2Payqu2aE8%3d&risl=&pid=ImgRaw&r=0", heading:"Asin", command:"Asin Thottumkal (born 26 October 1985), known mononymously as Asin, is a Indian former actress who appeared predominantly in Tamil, Hindi and Telugu films. "},
      {id:25, cat:"bollywoodtop", img:"https://tse2.mm.bing.net/th/id/OIP.blyVbc89fmGU1R-jPuJc6QHaEf?pid=ImgDet&rs=1", heading:"Ranveer Singh Bhavnani ", command:"Ranveer Singh Bhavnani (pronounced [rəɳˈʋiːr sɪŋ]; born 6 July 1985) is an Indian actor who works in Hindi films."},
      {id:26, cat:"bollywood", img:"https://www.tamilstar.com/wp-content/uploads/2020/04/dc-Cover-g479bq7ek1prgbd4lp5olpil20-20161227230409.Medi_.jpeg",  heading:"Thalapathi vijay",command:"Joseph Vijay Chandrasekhar (born 22 June 1974 ), known professionally as Vijay, is an Indian actor and singer who works predominantly in Tamil cinema. "},
      {id:27, cat:"bollywood", img:"https://www.filmfare.com/awards/filmfare-awards-south-2017/images/nominations/vikram.jpg",  heading:"Vikaram Actor", command:"Kennedy John Victor (born 17 April 1966), better known by his stage name Vikram, is an Indian actor who predominantly works in Tamil cinema."},
      {id:28, cat:"bollywood", img:"https://th.bing.com/th/id/R.0f8cb57b27be9de7156e5b323d3cac83?rik=fdjAc%2fUPX1WGhQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-BQlBLsBzAJw%2fU-eET2EzrDI%2fAAAAAAAAZVI%2fYMyBRvmbsV0%2fs1600%2f10394003_845193702180620_5183650803751353453_n.jpg&ehk=0oagnUiaJ26NjGNid3tskmivJAO1oDEiMjhcq8mH0Wc%3d&risl=&pid=ImgRaw&r=0",  heading:"Suriya", command:"Saravanan Sivakumar, known by his stage name Suriya, is an Indian actor and film producer. He primarily works in Tamil cinema where he is one of the highest paid actors"},
      {id:29, cat:"bollywood", img:"https://tse1.mm.bing.net/th/id/OIP.3ZltInn6LAjaUCLuHS8QcgHaLH?pid=ImgDet&rs=1",  heading:"Karthi" , command:"Karthik Sivakumar (born 25 May 1977), known as Karthi, is an Indian actor who works predominantly in Tamil cinema. "},
      {id:30, cat:"bollywood", img:"https://tse2.mm.bing.net/th/id/OIP.L9LSR1RnzLLWKgQ4B5PbOwHaK_?pid=ImgDet&rs=1",  heading:"Sivakarthikeyan " ,command:"Sivakarthikeyan is an Indian actor, lyricist, and television presenter predominantly working in the Tamil film industry12. He was born on February 17, 19852. Sivakarthikeyan started his career as a participant from a comedy reality show on Star Vijay TV named Kalakka Povathu Yaaru3. Another comedy show on Vijay Tv, adhu idhu edhu made him famous and he got his film offers"},
      {id:31, cat:"bollywood", img:"https://tse1.mm.bing.net/th/id/OIP.emg2hmTKkY0r1rI2Z4nixwHaIy?pid=ImgDet&rs=1",  heading:"Ajith Kumar" ,command:"Ajith Kumar is an Indian actor who works predominantly in Tamil cinema. To date, he has starred in over 61 films, and his awards include four Vijay Awards, three Cinema"}, 
      {id:32, cat:"hollywood", img:"https://tse4.mm.bing.net/th/id/OIP.pBb3u1GMUBn2rCDSvU77ugHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7", heading:"Avengers" ,command:"The Avengers are a team of fictional superheroes and the protagonists of the Marvel Cinematic Universe (MCU) media franchise, based on the Marvel Comics team of the same name created by Stan Lee and Jack Kirby in 1963."},
      {id:33, cat:"hollywood", img:"https://1.bp.blogspot.com/--joETLmICOw/X45xmNWLATI/AAAAAAAAblc/-iwRayzauKIGsiBGQ5gUfG_lzlOL-wURwCLcBGAsYHQ/w1200-h630-p-k-no-nu/marvels-avengers-cover.webp", heading:"The Avengers Initiative", command:"In 1995, S.H.I.E.L.D. director Nick Fury creates the Avengers Initiative, envisioning it as a group of heroes working to respond to planetary threats, following the appearance of Carol Danvers and naming it after her U.S. Air Force callsign"},
      {id:34, cat:"hollywood", img:"https://i.redd.it/ernhxu7mgxp01.jpg", heading:"The first assembly",command:"In 2012, the Asgardian Loki teleports to the Joint Dark Energy Mission Facility on Earth, where he steals the Tesseract and brainwashes Clint Barton and Dr. Erik Selvig using his scepter. "},    
      {id:35, cat:"hollywood", img:"https://upload.wikimedia.org/wikipedia/en/f/f2/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg", heading:"Battle of New York",command:"After Loki kills S.H.I.E.L.D. agent Phil Coulson, the team unites to avenge him. Romanoff frees Barton from the scepter's control, and the Avengers confronts Loki, who opens a wormhole using the Tesseract and begins his invasion with his Chitauri army. "},
      {id:36, cat:"hollywoodtop", img:"https://static3.srcdn.com/wordpress/wp-content/uploads/Avengers-2-Team-Wallpaper-Audi-Promo-Image.jpg", heading:"Fighting Hydra and Ultron",command:"Three years after the Battle of New York, Hydra uses Loki's scepter following their infiltration of S.H.I.E.L.D."},
      {id:37, cat:"hollywoodtop", img:"https://static3.srcdn.com/wordpress/wp-content/uploads/Avengers-2-Team-Wallpaper-Audi-Promo-Image.jpg", heading:"Battle of Sokovia" , command:"Ultron tries to use Sokovia as a meteor to induce an extinction event. "},    
      {id:38, cat:"hollywoodtop", img:"https://static3.srcdn.com/wordpress/wp-content/uploads/Avengers-2-Team-Wallpaper-Audi-Promo-Image.jpg", heading:"Civil War",command:"Months after the Battle of Sokovia, the Avengers' new facility becomes targeted in a heist, with a skirmish between Wilson and Scott Lang."},
      {id:40, cat:"Reactjs", img:"https://wallpapercave.com/wp/wp4923992.png", heading:" Reactjs" ,command:"Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags.This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React."},
      {id:41, cat:"Reactjsscr", img:"https://i.pinimg.com/originals/e4/53/0c/e4530ccfa55c4756444777672f51b125.png", heading:"React js working page" ,command:"It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete"},
      {id:42, cat:"technology", img:"https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2023/01/Mean-Tech-stack.png", heading:"MEAN STACK",command:"The mean stack tutorial is designed for the developers who want to design the dynamic website and web application using Mean.js. Our tutorial covers all the components of Mean.js, such as MongoDB, Express.js, Node.js, "},
      {id:43, cat:"technology", img:"https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg", heading:"Web development" , command:"Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications. "},
      {id:44, cat:"technology", img:"https://miro.medium.com/v2/resize:fit:678/1*l2tlJsFNg2tH6QizegKkqA.png", heading:"MERN Stack ", command:"MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. 1. MongoDB — document database 2. Express(.js) — Node.js web framework  "},
      {id:45, cat:"technology", img:"https://mobisoftinfotech.com/resources/wp-content/uploads/2022/06/og-Best-Practices-for-Android-Development.png", heading:"Android Development", command:"Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets. …"},
      {id:46, cat:"newtoptech", img:"https://tse2.mm.bing.net/th/id/OIP.HNS0WSdJ8yqN9gCOBNBtLwHaFj?pid=ImgDet&w=700&h=525&rs=1", heading:"Bioluminescence",command:"Bioluminescence imaging, a technique for studying laboratory animals using luminescent protein"},
      {id:47, cat:"the latesttech", img:"https://tse4.mm.bing.net/th/id/OIP.piQ-UxF9O_5EaSj6NtOKIAHaFr?pid=ImgDet&rs=1", heading:"HTML " ,command:" The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."},
      {id:48, cat:"the latesttech", img:"https://tse4.mm.bing.net/th/id/OIP.tAvAD5lCtDJSjywplxd37QHaEo?pid=ImgDet&rs=1", heading:" CSS " ,command:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML)."},
      {id:49, cat:"the latesttech", img:"https://th.bing.com/th/id/R.ff60b397fc71f93ab8db2edd234d43b0?rik=Sf1RQ1AvcSRbew&riu=http%3a%2f%2f2.bp.blogspot.com%2f-1lsXAuaZ5Cs%2fVLi5g8nQTmI%2fAAAAAAAACEs%2fKZdJRzgVP9Q%2fs1600%2fjavascript-logo-png.png&ehk=V2zOCpWiVFmy5Cvz%2fSqe2kmDWDe79WkeJmisw7e8RVQ%3d&risl=&pid=ImgRaw&r=0", heading:"JavaScript",command: "JavaScript is one of the 3 languages all web developers mustlearn: 1. HTMLto define the content of web pages 2. CSSto specify the layout of web pages 3. JavaScriptto program the behavior of web pages"},
      {id:50, cat:"technologytop", img:"https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/biotech.png",heading:"DNA",command:"Deoxyribonucleic acid is a polymer composed of two polynucleotide chains "},
      {id:51, cat:"technologytop", img:"https://gumlet.assettype.com/swarajya%2F2020-08%2F7f5acda4-8891-49fc-9f28-f339d0b98c23%2FAg_tech.jpeg?q=75&auto=format%2Ccompress&w=1200",heading:"Plant",command:"Plants are eukaryotes, predominantly photosynthetic, that form the kingdom"},
      {id:52, cat:"technologytop", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGK68uXmwGcCSP2ZZQo9Ftq8OAV0ndYJPiQ&usqp=CAU",heading:"Biotechnology ",command:"Biotechnology is a multidisciplinary field that involves the integration of natural sciences  "},
      {id:53, cat:"fitness", img:"https://th.bing.com/th/id/R.e165b8e3f2d4d7757300f76790408dbb?rik=QOeYp%2b7JeQixaw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fBest-HD-Fitness-Backgrounds.jpg&ehk=0YyKEvL%2baTbWC8ceGZ5dFmdg%2biBqAixipIQ4PogMWT4%3d&risl=&pid=ImgRaw&r=0", heading:"Stock Your Fridge with Healthy Foods " ,command:"Foods like fruits, vegetables, and lean meats can go a long way for your fitness journey."},
      {id:54, cat:"fitness", img:"https://4.bp.blogspot.com/-wNP5HrQ4kkM/WLLpm83qvzI/AAAAAAAAAJY/YxFLCSsszv4e03HauzgE5vg5n5XdXnACACEw/s1600/5%2BComponents%2Bof%2BPhysical%2BFitness%2B01.jpg", heading:"Find a Workout Buddy ",command:"A friend you can work out with is very helpful for staying motivated, but it's important to find someone who will inspire—not discourage."},
      {id:55, cat:"fitness", img:"https://yegfitness.ca/wp-content/uploads/2020/06/Diet-and-Exercise-Tips.jpg", heading:"Stay Hydrated ",command:"Whether you're heading off to spin class, boot camp, or any other exercise class, it's always important to hydrate so you can stay energized and have your best workout. "},
      {id:56, cat:"fitness", img:"https://tse4.mm.bing.net/th/id/OIP.A9sDjPjLXHPDdHOdu1XQEgHaEK?pid=ImgDet&rs=1", heading:"Relieve Those Achy Muscles ",command:"After a grueling workout, there's a good chance you're going to be feeling sore thighs and tight calves."},
      {id:57, cat:"fitness", img:"https://tse4.mm.bing.net/th/id/OIP.knN0NxWLuwuqLNgSGbJXAwHaE7?pid=ImgDet&w=1160&h=773&rs=1", heading:"Curb Your Sweet Tooth ",command:"Cutting down on sugar can assist you with weight loss—individuals who consume less sugar end up with lower weights"},
      {id:58, cat:"fitness", img:"https://thumbs.dreamstime.com/b/multiethnic-group-people-training-gym-trainer-sportive-fit-persons-exercising-multiethnic-group-people-training-262162888.jpg", heading:"Wear Comfortable Sneakers ",command:"Your feet swell during the day and stop in the late afternoon, so if you need sneakers, you'll want to shop when your feet are biggest. "},
      {id:59, cat:"newtopfit", img:"https://img.favpng.com/16/18/6/vector-creative-fitness-logo-png-favpng-Aqsd61AfedTqieGT9uu1NPsHz.jpg  ", heading:"Pick Your Perfect Tunes",command:"Running with music is a great way to get in a good workout groove. To pick the ultimate playlist, think about what gets you going and that you find uplifting."},
      {id:60, cat:"newtopfit2", img:"https://www.paridhiwebtech.com/health-fitness/img/img09.jpg", heading:"Know When To Weigh Yourself—And How Often",command:" It's normal to want to weigh yourself soon after starting a new diet or fitness routine. It's best to step on the scale in the morning before eating or drinking—and before plunging into your daily activities, said Newgent. "},
      {id:61, cat:"fitnesstop", img:"https://asset-eu.unileversolutions.com/content/dam/unilever/rexona/global/general_image/deodorants_and_fragrances/not_applicable/1_2_people_jumping_up_off_a_short_wall_1209x723-889036.jpg.ulenscale.669x400.jpg" ,heading:"Keep Your Portions in Check",command:"Portion control requires special attention to your current eating habits. For example, if your steak takes up"},
      {id:62, cat:"fitnesstop", img:"https://tse2.mm.bing.net/th/id/OIP.iX9N_n4RxTY5ryb192sqlgHaE7?pid=ImgDet&rs=1" ,heading:"Sip Slowly",command:"If you know you'll be partaking in more than one drink, try to order a glass of water between cocktails, said Newgent."},
      {id:63, cat:"fitnesstop", img:"https://tse3.mm.bing.net/th/id/OIP.vvQp9cH2qQrOVoApUOuhwAHaEK?pid=ImgDet&rs=1" ,heading:"Work Out Consistently",command:"Working out at the same time during the week or on the same days can have its benefits."},
      {id:64, cat:"fitnesstop", img:"https://www.muscleandfitness.com/wp-content/uploads/2019/10/women-squat-home-workout-1109.jpg?w=1100&quality=86&strip=all" ,heading:"Up Your Fiber Intake",command:"Along with protein and healthy fats, fiber is one of those nutritional elements that keeps you full and fueled all day long"},
      {id:65, cat:"food", img:"https://www.lecremedelacrumb.com/wp-content/uploads/2016/01/baked-honey-mustard-chicken-1w.jpg", heading:"Limit sugary drinks      " ,command:"Sugary drinks like sodas, fruit juices, and sweetened teas are the primary source of added sugar in the American diet"},
      {id:66, cat:"food", img:"https://4.bp.blogspot.com/-Xrxd-8idowk/UpI1z1jgw9I/AAAAAAAAACA/B_M6GbopQzc/s1600/Prawn+Fry.jpg", heading:"Eat nuts and seeds",command:"Some people avoid nuts because they are high in fat. However, nuts and seeds are incredibly nutritious. They are packed with protein, fiber, and a variety of vitamins and minerals "},
      {id:67, cat:"food", img:"https://tse1.mm.bing.net/th/id/OIP.dzAbvRfX50S9YBV2ajgjJAHaE8?pid=ImgDet&rs=1", heading:"Biryani ",command:"Biryani is a mixed rice dish originating among the Muslims of South Asia."},
      {id:67, cat:"food", img:"https://awhealthcare.com/wp-content/uploads/2016/09/Healthy-Food.jpeg", heading:"Avoid bright lights before sleep ",command:"When you’re exposed to bright lights — which contain blue light wavelengths — in the evening, it may disrupt your production of the sleep hormone melatonin"},
      {id:68, cat:"food", img:"https://www.lecremedelacrumb.com/wp-content/uploads/2016/01/baked-honey-mustard-chicken-1w.jpg", heading:"Avoid ultra-processed foods",command:"Ultra-processed foods (UPFs) are foods containing ingredients  contain additives like added sugar, highly refined oil, salt, preservatives, artificial sweeteners, colors, and flavors as well "},
      {id:69, cat:"foodtop", img:"https://post.healthline.com/wp-content/uploads/2021/10/breakfast-foods-eggs-scrambled-pan-732x549-thumbnail.jpg",heading:"Get enough sleep",command:"What’s more, poor sleep is one of the strongest individual risk factors for weight gain and obesity. "},
      {id:69, cat:"foodtop", img:"https://wallpapercave.com/wp/wp3724325.jpg",heading:" Eat adequate protein",command:"Eating enough protein is vital for optimal health, as it provides the raw materials your body needs to create new cells and tissues"},
      {id:70, cat:"foodtop", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBv-YKP4tJNWV4LWwThf4wsLwrtU__vkiYQ&usqp=CAU",heading:"Don’t fear coffee",command:"It’s rich in antioxidants, and some studies have linked coffee "},
      {id:71, cat:"foodtop", img:"https://www.pixelstalk.net/wp-content/uploads/2016/08/Photography-Kebab-Meat-Food-Wallpaper-HD-Desktop-Computer.jpg" ,heading:" Eat fatty fish " ,command:"Fish is a great source of high-quality protein and healthy fat. "},
      {id:72, cat:"new", img:"https://images.pexels.com/photos/16128579/pexels-photo-16128579/free-photo-of-landscape-of-a-river-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"Wind" ,command:" There’s a whole world out there, right outside your window. You’d be a fool to miss it. —Charlotte Eriksson "},
      {id:73, cat:"newtophollywood", img:"https://letsdownloadgame.com/wp-content/uploads/2019/12/Download-marvels-avengers-game-apk-for-android-free.jpg", heading:"The Avengers",command:"The concept of the Avengers was teased in the post-credits scene of Iron Man (2008), the first MCU film, by Nick Fury as an initiative created by him. The concept was further explored in Iron Man 2 (2010), with the introduction of Natasha Romanoff."},
      {id:73, cat:"newtopfood", img:"https://www.verywellfit.com/thmb/WY_NtJB9XE1wZTaKbk2syDPITUc=/3865x2576/filters:fill(FFDB5D,1)/different-types-of-food-on-rustic-wooden-table-861188910-5bd1d6f846e0fb00519d99f9.jpg", heading:"Don’t eat heavily charred meats",command:"Meat can be a nutritious and healthy part of your diet. It’s very high in protein and a rich source of nutrients.However, problems occur when meat is charred or burnt. This charring can lead to the formation of harmful compounds that may increase your risk for certain cancers"},
      {id:74, cat:"fitness", img:"https://mahogany360fitness.com/wp-content/uploads/2021/01/about-fitness-img.png", heading:"Use Sunscreen for Outdoor Workouts",command:"Getting the fresh air from exercising outdoors is great, but along with it, you also get harmful UV rays."},
      {id:75, cat:"fitness", img:"https://tse3.mm.bing.net/th/id/OIP.gk3BbnKEgWdj4PXKRAXi1QHaEK?pid=ImgDet&w=602&h=339&rs=1", heading:"Savor Your Carbs ",command:"At times, you may consider cutting out your carbs to lose weight. But before adding dinner rolls and chips "},


    
 
      
      
      
      































      





         {id:4, cat:"", img:"", heading:" " ,command:""},
      {id:4, cat:"", img:"", heading:" " ,command:""},
      {id:4, cat:"", img:"", heading:" " ,command:""},
      {id:4, cat:"", img:"", heading:" " ,command:""},
      {id:4, cat:"", img:"", heading:" " ,command:""},
      {id:4, cat:"", img:"", heading:" " ,command:""},
      {id:4, cat:"", img:"", heading:" " ,command:""},
      {id:4, cat:"", img:"", heading:" " ,command:""},
      {id:4, cat:"", img:"", heading:" " ,command:""},
      {id:4, cat:"", img:"", heading:" " ,command:""},
      {id:4, cat:"", img:"", heading:" " ,command:""},
      {id:4, cat:"", img:"", heading:" " ,command:""},

      
      // {id:4, cat:"the latest", img:"https://images.pexels.com/photos/1796727/pexels-photo-1796727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"THE LATEST IMAGES" },
      // {id:2, cat:"the latest", img:"https://images.pexels.com/photos/1796727/pexels-photo-1796727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"THE LATEST IMAGES"},  
     

      // {id:1, cat:"latestarticles", img:"https://images.pexels.com/photos/3444648/pexels-photo-3444648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"The Latest articles by our Website", },
      // {id:1, cat:"latestarticles", img:"https://images.pexels.com/photos/3444648/pexels-photo-3444648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"The Latest articles by our Website", },
      // {id:1, cat:"latestarticles", img:"https://images.pexels.com/photos/3444648/pexels-photo-3444648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", heading:"The Latest articles by our Website", },

      
      
      

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