(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[475],{7193:function(e,s,i){Promise.resolve().then(i.bind(i,1040))},1040:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return x}});var a=i(7437),n=i(2265),t=i(6691),r=i.n(t),l=i(1906),c=i.n(l),o=i(8358),d=i.n(o),u=i(4025),g=i(5592);let m=[{sign:"Aries",signIconSrc:"/signs/Sign_Aries.svg",modality:"Cardinal",element:"Fire",ruler:"Mars",traits:"Ambition, Leadership, Independence, Passion",elementClass:c().fire_sign},{sign:"Taurus",signIconSrc:"/signs/Sign_Taurus.svg",modality:"Fixed",element:"Earth",ruler:"Venus",traits:"Stability, Hard-working, Sensual, Grounded",elementClass:c().earth_sign},{sign:"Gemini",signIconSrc:"/signs/Sign_Gemini.svg",modality:"Mutable",element:"Air",ruler:"Mercury",traits:"Inquisitve, Social, Witty, Dualistic",elementClass:c().air_sign},{sign:"Cancer",signIconSrc:"/signs/Sign_Cancer.svg",modality:"Cardinal",element:"Water",ruler:"Moon",traits:"Sensitive, Intuitive, Empathatic, Moody",elementClass:c().water_sign},{sign:"Leo",signIconSrc:"/signs/Sign_Leo.svg",modality:"Fixed",element:"Fire",ruler:"Sun",traits:"Leadership, Bravery, Prideful, Loyal",elementClass:c().fire_sign},{sign:"Virgo",signIconSrc:"/signs/Sign_Virgo.svg",modality:"Mutable",element:"Earth",ruler:"Mercury",traits:"Logical, Organized, Critical, Perfectionistic",elementClass:c().earth_sign},{sign:"Libra",signIconSrc:"/signs/Sign_Libra.svg",modality:"Cardinal",element:"Air",ruler:"Venus",traits:"Diplomatic, Peace-maker, Harmonious, Indecisive",elementClass:c().air_sign},{sign:"Scorpio",signIconSrc:"/signs/Sign_Scorpio.svg",modality:"Fixed",element:"Water",ruler:"Mars",traits:"Deep, Intense, Instinctual, Powerful",elementClass:c().water_sign},{sign:"Sagittarius",signIconSrc:"/signs/Sign_Sagittarius.svg",modality:"Mutable",element:"Fire",ruler:"Jupiter",traits:"Open-minded, Wisdom, Freedom, Spiritual",elementClass:c().fire_sign},{sign:"Capricorn",signIconSrc:"/signs/Sign_Capricorn.svg",modality:"Cardinal",element:"Earth",ruler:"Saturn",traits:"Authoritarian, Responsible, Mature, Serious",elementClass:c().earth_sign},{sign:"Aquarius",signIconSrc:"/signs/Sign_Aquarius.svg",modality:"Fixed",element:"Air",ruler:"Saturn",traits:"Intellectual, Individualistic, Rebellious, Innovative",elementClass:c().air_sign},{sign:"Pisces",signIconSrc:"/signs/Sign_Pisces.svg",modality:"Mutable",element:"Water",ruler:"Jupiter",traits:"Spiritual, Intuitive, Creative, Idealistic",elementClass:c().water_sign}],_=e=>{let{sign:s,setOpenModal:i}=e;return n.useEffect(()=>{let e=document.querySelectorAll(c().sign);e.forEach(e=>{e.addEventListener("click",()=>{e.classList.add(c().active)})})}),(0,a.jsx)("div",{className:"flex w-full p-3 relative flex-1 min-h-full ",children:(0,a.jsxs)("button",{className:c().sign+" "+s.elementClass+" h-52 w-full flex flex-col justify-center items-center shadow-md rounded-md min-h-full",onClick:()=>i({show:!0,data:{sign:s.sign,modality:s.modality,element:s.element,traits:s.traits,ruler:s.ruler,signIconSrc:s.signIconSrc}}),children:[(0,a.jsx)(r(),{src:s.signIconSrc,width:80,height:80,className:"sign-icon pb-4",alt:"zodiac sign icon"}),(0,a.jsx)("span",{className:"text-3xl max-sm:hidden",children:s.sign})]})})},h=e=>{let{closeModal:s,modalState:i,data:n}=e;return(0,a.jsx)(u.Z,{closeModal:s,modalState:i,children:(0,a.jsxs)("div",{className:"flex flex-col text-2xl max-md:text-xl h-full justify-center",children:[(0,a.jsx)("div",{className:"pb-4",children:(0,a.jsx)(r(),{src:n.signIconSrc,width:80,height:80,className:"sign-icon p-2",alt:"zodiac sign icon"})}),(0,a.jsx)("span",{children:"Sign: "+n.sign}),(0,a.jsx)("span",{children:"Modality: "+n.modality}),(0,a.jsx)("span",{children:"Element: "+n.element}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{children:"Traits: "+n.traits}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{children:"Planetary Ruler: "+n.ruler})]})})};function x(){let[e,s]=n.useState({show:!1,data:null}),i=()=>{document.body.classList.add(d().modal_active),document.body.style.overflow="hidden"},t=()=>{document.body.classList.remove(d().modal_active),document.body.style.overflowY="auto"};return n.useEffect(()=>{e.show?i():t()},[e]),(0,a.jsxs)("main",{className:"grid p-10 max-md:p-5 w-full mb-20",children:[(0,a.jsx)(g.Z,{header:"The Signs",content:"The zodiac signs represent how you act out the energy of the planets, and the general vibe in the area of your life the house sign occupies. Each clickable sign below contains a brief description about the sign in question."}),(0,a.jsxs)("div",{className:"w-full grid grid-flow-row grid-cols-3 grid-rows-12 max-md:grid-cols-2 max-md:grid-cols-1",children:[m.map((e,i)=>(0,a.jsx)(_,{sign:e,setOpenModal:s},e.sign)),e.show&&e.data&&(0,a.jsx)(h,{closeModal:()=>{s({show:!1,data:null})},data:e.data,modalState:e.show})]})]})}},4025:function(e,s,i){"use strict";i.d(s,{Z:function(){return l}});var a=i(7437),n=i(8358),t=i.n(n),r=i(7870);function l(e){let{children:s,closeModal:i,modalState:n}=e;return(0,a.jsx)("div",{className:t().modal_wrapper,children:(0,a.jsxs)(r.E.div,{className:t().modal,animate:n?{scale:1}:{scale:0},transition:{type:"tween",duration:2,ease:"circOut"},children:[(0,a.jsx)(r.E.div,{className:t().backgrounds_wrapper,transition:{type:"border-radius",duration:.35,ease:"circOut",delay:.7},children:(0,a.jsxs)("div",{className:t().backgrounds,children:[(0,a.jsx)(r.E.div,{className:t().background,animate:n?{scale:6}:{scale:0},transition:{type:"tween",duration:.5,ease:"circOut",delay:0}}),(0,a.jsx)(r.E.div,{className:t().background,animate:n?{scale:6}:{scale:0},transition:{type:"tween",duration:.5,ease:"circOut",delay:0}}),(0,a.jsx)(r.E.div,{className:t().background+" "+t().background_2,animate:n?{scale:6}:{scale:0},transition:{type:"tween",duration:.5,ease:"circOut",delay:.01}}),(0,a.jsx)(r.E.div,{className:t().background+" "+t().background_3,animate:n?{scale:6}:{scale:0},transition:{type:"tween",duration:.5,ease:"circOut",delay:.02}}),(0,a.jsx)(r.E.div,{className:t().background+" "+t().background_4,animate:n?{scale:8}:{scale:0},transition:{type:"tween",duration:.5,ease:"circOut",delay:.03}})]})}),(0,a.jsxs)(r.E.div,{className:t().content,animate:n?{scale:1,opacity:1}:{scale:0,opacity:0},transition:{type:"all",duration:.35,ease:"circOut",delay:1},children:[(0,a.jsx)("button",{className:"self-end",onClick:()=>i(),children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"h-12 w-12",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1,children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})}),(0,a.jsx)("div",{className:"self-center justify-center h-full",children:s})]})]})})}},5592:function(e,s,i){"use strict";i.d(s,{Z:function(){return n}});var a=i(7437);function n(e){let{header:s,content:i}=e;return(0,a.jsxs)("div",{className:"text-white p-7 max-md:mt-8",children:[(0,a.jsx)("h2",{className:"text-2xl pb-5 text-center",children:s}),(0,a.jsx)("div",{className:"text-xl",children:i})]})}},1906:function(e){e.exports={fire_sign:"styles_fire_sign__qnr5H",earth_sign:"styles_earth_sign__qpsWi",air_sign:"styles_air_sign__oKgAl",water_sign:"styles_water_sign___gLms",sign:"styles_sign__6YuIb",active:"styles_active__BhuH7"}},8358:function(e){e.exports={base_sun:"#fcee21",base_100:"#f72585",base_200:"#b5179e",base_300:"#7209b7",base_400:"#560bad",base_500:"#480ca8",base_600:"#3a0ca3",base_700:"#230ca3",base_800:"#040ca3",base_900:"#040c84",base_highlight:"#9198e5",modal_wrapper:"modal_modal_wrapper__8b2_y",modal:"modal_modal__ZUNbP",backgrounds_wrapper:"modal_backgrounds_wrapper__lGnf4",backgrounds:"modal_backgrounds__WtNxl",background:"modal_background__iNaxi",background_2:"modal_background_2__jOJ0f",background_3:"modal_background_3__6sm2J",background_4:"modal_background_4__Uu1Vp",content:"modal_content__VKANC",modal_active:"modal_modal_active__g5Br4"}}},function(e){e.O(0,[754,691,971,472,744],function(){return e(e.s=7193)}),_N_E=e.O()}]);