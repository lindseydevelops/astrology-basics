(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[505],{5196:function(a,e,t){Promise.resolve().then(t.bind(t,6010))},6010:function(a,e,t){"use strict";t.r(e),t.d(e,{default:function(){return y}});var n=t(7437),s=t(6691),l=t.n(s),r=t(5592),i=t(557),o=t.n(i),c=t(7870),d=t(2265),p=t(8358),u=t.n(p),_=t(4025),m=t(2459);let g=a=>{let{closeModal:e,modalState:t,data:s}=a;return(0,n.jsx)(_.Z,{closeModal:e,modalState:t,children:(0,n.jsxs)("div",{className:"flex flex-col text-2xl max-md:text-xl h-full justify-center",children:[(0,n.jsx)("div",{className:"pb-4",children:(0,n.jsx)(l(),{src:s.planetImgSrc,width:80,height:80,className:"sign-icon p-2 max-h-24",alt:"planet sign icon"})}),(0,n.jsx)("span",{children:"Planet: "+s.planet}),(0,n.jsx)("span",{children:"Planet Type: "+s.type}),(0,n.jsx)("br",{}),(0,n.jsx)("span",{children:"Traits: "+s.traits})]})})},x=a=>{let{planet:e,size:t,setOpenModal:s}=a;return(0,n.jsx)("button",{onClick:()=>s({show:!0,data:{planet:e.planet,planetImgSrc:e.planetImgSrc,traits:e.traits,type:e.type}}),className:o().planet_button+" "+o().planet+" rotate-90 max-md:rotate-0",children:(0,n.jsx)("div",{className:"-rotate-45",children:(0,n.jsx)(l(),{src:e.planetImgSrc,width:t,height:t,alt:e.planet+" symbol"})})})},b=a=>{let{planet:e,size:t,setOpenModal:s}=a;return(0,n.jsx)(c.E.button,{className:o().planet+" border-2 border-white rounded-full -rotate-45 "+o().planet_button,initial:{rotate:0},animate:{rotate:360},transition:{duration:20,repeat:1/0},onClick:()=>s({show:!0,data:{planet:e.planet,planetImgSrc:e.planetImgSrc,traits:e.traits,type:e.type}}),children:(0,n.jsx)(c.E.div,{className:o().planet_inner,initial:{rotate:0},animate:{rotate:-360},transition:{duration:20,repeat:1/0},children:(0,n.jsx)(l(),{src:e.planetImgSrc,width:t,height:t,alt:e.planet+" symbol"})})})};function y(){let[a,e]=d.useState({show:!1,data:null}),t=()=>{document.body.classList.add(u().modal_active),document.body.style.overflow="hidden"},s=()=>{document.body.classList.remove(u().modal_active),document.body.style.overflowY="auto"};return d.useEffect(()=>{a.show?t():s()},[a]),(0,n.jsxs)("main",{className:"flex flex-col items-center justify-between p-10 pb-0 max-md:p-5 planets",children:[(0,n.jsx)(r.Z,{header:"The Planets",content:"The Planets represent the different aspects of who you are, your life path, temperment and your general vibe. Tap on a planetary sigel below to learn more about it."}),(0,n.jsxs)("div",{className:"relative -rotate-45 max-md:rotate-45 -left-1/4 max-lg:-left-1/2 max-md:left-0 max-md:scale-150 top-20 -z-10 mt-10 transition ease-in-out delay-150 "+o().planets_page,children:[(0,n.jsx)("div",{className:o().galaxy+" "+o().galaxy_backdrop,children:m.c.map((a,e)=>(0,n.jsx)("div",{className:o().circle+" "+o().ring},a.planet))}),(0,n.jsx)("div",{className:o().galaxy+" "+o().galaxy_foreground,children:m.c.map((a,t)=>(0,n.jsx)("div",{className:o().circle+" "+o().ring,children:3==t?(0,n.jsx)(b,{style:o().planet_inner,planet:a,size:50,setOpenModal:e}):(0,n.jsx)(x,{planet:a,size:50,setOpenModal:e})},a.planet))})]}),a.show&&a.data&&(0,n.jsx)(g,{closeModal:()=>{e({show:!1,data:null})},data:a.data,modalState:a.show})]})}},4025:function(a,e,t){"use strict";t.d(e,{Z:function(){return i}});var n=t(7437),s=t(8358),l=t.n(s),r=t(7870);function i(a){let{children:e,closeModal:t,modalState:s}=a;return(0,n.jsx)("div",{className:l().modal_wrapper,children:(0,n.jsxs)(r.E.div,{className:l().modal,animate:s?{scale:1}:{scale:0},transition:{type:"tween",duration:2,ease:"circOut"},children:[(0,n.jsx)(r.E.div,{className:l().backgrounds_wrapper,transition:{type:"border-radius",duration:.35,ease:"circOut",delay:.7},children:(0,n.jsxs)("div",{className:l().backgrounds,children:[(0,n.jsx)(r.E.div,{className:l().background,animate:s?{scale:6}:{scale:0},transition:{type:"tween",duration:.5,ease:"circOut",delay:0}}),(0,n.jsx)(r.E.div,{className:l().background,animate:s?{scale:6}:{scale:0},transition:{type:"tween",duration:.5,ease:"circOut",delay:0}}),(0,n.jsx)(r.E.div,{className:l().background+" "+l().background_2,animate:s?{scale:6}:{scale:0},transition:{type:"tween",duration:.5,ease:"circOut",delay:.01}}),(0,n.jsx)(r.E.div,{className:l().background+" "+l().background_3,animate:s?{scale:6}:{scale:0},transition:{type:"tween",duration:.5,ease:"circOut",delay:.02}}),(0,n.jsx)(r.E.div,{className:l().background+" "+l().background_4,animate:s?{scale:8}:{scale:0},transition:{type:"tween",duration:.5,ease:"circOut",delay:.03}})]})}),(0,n.jsxs)(r.E.div,{className:l().content,animate:s?{scale:1,opacity:1}:{scale:0,opacity:0},transition:{type:"all",duration:.35,ease:"circOut",delay:1},children:[(0,n.jsx)("button",{className:"self-end",onClick:()=>t(),children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"h-12 w-12",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})}),(0,n.jsx)("div",{className:"self-center justify-center h-full",children:e})]})]})})}},5592:function(a,e,t){"use strict";t.d(e,{Z:function(){return s}});var n=t(7437);function s(a){let{header:e,content:t}=a;return(0,n.jsxs)("div",{className:"text-white p-7 max-md:mt-8",children:[(0,n.jsx)("h2",{className:"text-2xl pb-5 text-center",children:e}),(0,n.jsx)("div",{className:"text-xl",children:t})]})}},557:function(a){a.exports={base_sun:"#fcee21",base_100:"#f72585",base_200:"#b5179e",base_300:"#7209b7",base_400:"#560bad",base_500:"#480ca8",base_600:"#3a0ca3",base_700:"#230ca3",base_800:"#040ca3",base_900:"#040c84",base_highlight:"#9198e5",circle:"galaxy_circle__K6BF8",planet_icon_wrapper:"galaxy_planet_icon_wrapper__3kz4r",ring:"galaxy_ring__61Pgi",galaxy_backdrop:"galaxy_galaxy_backdrop__KaLYg",galaxy_foreground:"galaxy_galaxy_foreground__eXe0t",planet:"galaxy_planet__hLwPb",planet_inner:"galaxy_planet_inner__L1did",galaxy:"galaxy_galaxy__F0ML5",planet_button:"galaxy_planet_button__9iZHp",planets_page:"galaxy_planets_page__6KPEU"}},8358:function(a){a.exports={base_sun:"#fcee21",base_100:"#f72585",base_200:"#b5179e",base_300:"#7209b7",base_400:"#560bad",base_500:"#480ca8",base_600:"#3a0ca3",base_700:"#230ca3",base_800:"#040ca3",base_900:"#040c84",base_highlight:"#9198e5",modal_wrapper:"modal_modal_wrapper__8b2_y",modal:"modal_modal__ZUNbP",backgrounds_wrapper:"modal_backgrounds_wrapper__lGnf4",backgrounds:"modal_backgrounds__WtNxl",background:"modal_background__iNaxi",background_2:"modal_background_2__jOJ0f",background_3:"modal_background_3__6sm2J",background_4:"modal_background_4__Uu1Vp",content:"modal_content__VKANC",modal_active:"modal_modal_active__g5Br4"}},2459:function(a){"use strict";a.exports=JSON.parse('{"c":[{"planet":"Sun","planetImgSrc":"/planets/Planet_Sun.svg","traits":"Identify, Ego, Energy, Vitality","type":"Fundamental Planet","duration":0},{"planet":"Mercury","planetImgSrc":"/planets/Planet_Mercury.svg","traits":"Communication, Mindset, Expression, Expression, Learning","type":"Personal - Inner Planet","duration":3},{"planet":"Venus","planetImgSrc":"/planets/Planet_Venus.svg","traits":"Values, Love, Money, Creativity","type":"Personal - Inner Planet","duration":5},{"planet":"Moon","planetImgSrc":"/planets/Planet_Moon.svg","traits":"Soul, Emotions, Intuition, Unconsciousness","type":"Fundamental Planet","duration":7},{"planet":"Mars","planetImgSrc":"/planets/Planet_Mars.svg","traits":"Drive, Ambition, Anger, Instincts","type":"Personal - Inner Planet","duration":9},{"planet":"Jupiter","planetImgSrc":"/planets/Planet_Jupiter.svg","traits":"Growth, Luck, Beliefs, Optimism","type":"Transpersonal - Middle Planet","duration":15},{"planet":"Saturn","planetImgSrc":"/planets/Planet_Saturn.svg","traits":"Karmin lessons, Restrictions, Structures, Responsivility","type":"Transpersonal - Middle Planet","duration":17},{"planet":"Uranus","planetImgSrc":"/planets/Planet_Uranus.svg","traits":"Rebellion, Individualization, Freedom, Independence","type":"Generational - Outer Planet","duration":19},{"planet":"Neptune","planetImgSrc":"/planets/Planet_Neptune.svg","traits":"Imagination, Spirituality, Creativity, Empathy","type":"Generational - Outer Planet","duration":22},{"planet":"Pluto","planetImgSrc":"/planets/Planet_Pluto.svg","traits":"Power, Intensity, Transformation, Extremes","type":"Generational - Outer Planet","duration":24}]}')}},function(a){a.O(0,[754,691,971,472,744],function(){return a(a.s=5196)}),_N_E=a.O()}]);