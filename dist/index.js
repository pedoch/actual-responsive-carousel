"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e),i=r(t);const a=i.default.div`
  height: auto;
  min-width: ${e=>100/e.size}%;
  min-height: 100%;
`,o=i.default.div`
  transform: translateX(-${e=>e.transform}px);
  transition: transform ease-out 0.45s;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: none;
`,d=i.default.div`
  width: 100%;
  height: 100%;

  .hidden {
    display: none;
  }

  .secondary-container {
    width: 100%;
    height: 100%;
    margin: auto;
    overflow: hidden;
    display: flex;
    flex-wrap: none;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .arrow {
    cursor: pointer;
    z-index: 10;
    position: absolute;
    margin-top: auto;
    margin-bottom: auto;

    @media (max-width: 450px) {
      opacity: 0.5;
    }
  }

  .custom-arrow-btn {
    cursor: pointer;
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 6px;
    border-radius: 9999px;
    background-color: rgb(255, 255, 255);
    border: 1px solid grey;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .left-arrow {
    left: 0px;
  }

  .right-arrow {
    right: 0px;
  }

  .slider-content-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`,s=({children:t,setNumberOfSlides:r,currentIndex:i,setChildrenSlidesFunc:a,size:d})=>{const[s,l]=e.useState(0),u=e.Children.count(t),c=e.useRef(null),f=()=>{c.current?l(c.current.offsetWidth):l(0)};return e.useEffect((()=>{r(u),a(t)}),[]),e.useEffect((()=>(f(),window.addEventListener("resize",f),f(),()=>window.removeEventListener("resize",f))),[]),n.default.createElement(o,{transform:()=>{let e=0;return e=i<=d-1?0:s/d*(i-(d-1)),e.toString()},size:d,ref:c},t)};exports.Carousel=({height:t,width:r,children:i,breakpoints:a,auto:o,noControls:l,leftButton:u,rightButton:c,duration:f})=>{const[h,p]=e.useState({}),[w,m]=e.useState(0),[g,x]=e.useState(0),[v,b]=e.useState([]),[E,S]=e.useState(null),[y,z]=e.useState([0,0]);let L=y[0]>=1960?a?.extraLargeScreen??8:y[0]>=1440?a?.largeScreen??5:y[0]>=769?a?.laptop??3:y[0]>=481?a?.tab??2:a?.phone??1;("undefined"!=typeof window?e.useLayoutEffect:e.useEffect)((()=>{function e(){z([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]);const N=f??5e3,I=e.useRef(null),$=e.useRef(w);$.current=w;const C=()=>{I?.current&&I.current.click()};return e.useEffect((()=>{let e={...h};t&&(e={...e,height:t}),r&&(e={...e,width:r}),m(L-1),p(e),E&&clearInterval(E),o&&S(setInterval((()=>{C()}),N))}),[t,r,a,o]),n.default.createElement(d,null,n.default.createElement("div",{className:"secondary-container",style:{...h}},n.default.createElement("span",{className:`arrow left-arrow ${w===L-1&&"hidden"} ${g===L&&"hidden"} ${l&&"hidden"}`,onClick:()=>($.current!=L-1?m($.current-1):m(g-1),E&&clearInterval(E),void(o&&S(setInterval((()=>{C()}),N)))),title:"Previous Slide"},u||n.default.createElement("button",{className:"custom-arrow-btn"},n.default.createElement("span",{style:{fontSize:25}},"‹"))),n.default.createElement("div",{className:"slider-content-container"},n.default.createElement(s,{currentIndex:w,setNumberOfSlides:e=>x(e),setChildrenSlidesFunc:e=>b(e),size:y[0]>=1960?a?.extraLargeScreen??8:y[0]>=1440?a?.largeScreen??5:y[0]>=769?a?.laptop??3:y[0]>=481?a?.tab??2:a?.phone??1},i)),n.default.createElement("span",{className:`arrow right-arrow ${w===g-1&&"hidden"} ${g==L&&"hidden"} ${l&&"hidden"}`,ref:I,onClick:()=>($.current!=g-1?m($.current+1):m(L-1),E&&clearInterval(E),void(o&&S(setInterval((()=>{C()}),N)))),title:"Next Slide"},c||n.default.createElement("button",{className:"custom-arrow-btn"},n.default.createElement("span",{style:{fontSize:25}},"›")))))},exports.Slide=({children:t,breakpoints:r})=>{const[i,o]=e.useState([0,0]);return("undefined"!=typeof window?e.useLayoutEffect:e.useEffect)((()=>{function e(){o([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),n.default.createElement(a,{className:"",size:i[0]>=1960?r?.extraLargeScreen??8:i[0]>=1440?r?.largeScreen??5:i[0]>=769?r?.laptop??3:i[0]>=481?r?.tab??2:r?.phone??1},t)};
