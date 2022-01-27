import e,{useState as t,useRef as n,useEffect as r,Children as i,useLayoutEffect as o}from"react";import a from"styled-components";const d=a.div`
  height: auto;
  min-width: ${e=>100/e.size}%;
  min-height: 100%;
`,s=a.div`
  transform: translateX(-${e=>e.transform}px);
  transition: transform ease-out 0.45s;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: none;
`,l=a.div`
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
`,c=({height:i,width:a,children:d,breakpoints:s,auto:c,noControls:u,leftButton:p,rightButton:w,duration:m})=>{const[g,f]=t({}),[x,v]=t(0),[b,E]=t(0),[S,y]=t([]),[z,N]=t(null),[L,I]=t([0,0]);let $=L[0]>=1960?s?.extraLargeScreen??8:L[0]>=1440?s?.largeScreen??5:L[0]>=769?s?.laptop??3:L[0]>=481?s?.tab??2:s?.phone??1;("undefined"!=typeof window?o:r)((()=>{function e(){I([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]);const k=m??5e3,C=n(null),W=n(x);W.current=x;const B=()=>{C?.current&&C.current.click()};return r((()=>{let e={...g};i&&(e={...e,height:i}),a&&(e={...e,width:a}),v($-1),f(e),z&&clearInterval(z),c&&N(setInterval((()=>{B()}),k))}),[i,a,s,c]),e.createElement(l,null,e.createElement("div",{className:"secondary-container",style:{...g}},e.createElement("span",{className:`arrow left-arrow ${x===$-1&&"hidden"} ${b===$&&"hidden"} ${u&&"hidden"}`,onClick:()=>(W.current!=$-1?v(W.current-1):v(b-1),z&&clearInterval(z),void(c&&N(setInterval((()=>{B()}),k)))),title:"Previous Slide"},p||e.createElement("button",{className:"custom-arrow-btn"},e.createElement("span",{style:{fontSize:25}},"‹"))),e.createElement("div",{className:"slider-content-container"},e.createElement(h,{currentIndex:x,setNumberOfSlides:e=>E(e),setChildrenSlidesFunc:e=>y(e),size:L[0]>=1960?s?.extraLargeScreen??8:L[0]>=1440?s?.largeScreen??5:L[0]>=769?s?.laptop??3:L[0]>=481?s?.tab??2:s?.phone??1},d)),e.createElement("span",{className:`arrow right-arrow ${x===b-1&&"hidden"} ${b==$&&"hidden"} ${u&&"hidden"}`,ref:C,onClick:()=>(W.current!=b-1?v(W.current+1):v($-1),z&&clearInterval(z),void(c&&N(setInterval((()=>{B()}),k)))),title:"Next Slide"},w||e.createElement("button",{className:"custom-arrow-btn"},e.createElement("span",{style:{fontSize:25}},"›")))))},h=({children:o,setNumberOfSlides:a,currentIndex:d,setChildrenSlidesFunc:l,size:c})=>{const[h,u]=t(0),p=i.count(o),w=n(null),m=()=>{w.current?u(w.current.offsetWidth):u(0)};return r((()=>{a(p),l(o)}),[]),r((()=>(m(),window.addEventListener("resize",m),m(),()=>window.removeEventListener("resize",m))),[]),e.createElement(s,{transform:()=>{let e=0;return e=d<=c-1?0:h/c*(d-(c-1)),e.toString()},size:c,ref:w},o)},u=({children:n,breakpoints:i})=>{const[a,s]=t([0,0]);return("undefined"!=typeof window?o:r)((()=>{function e(){s([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),e.createElement(d,{className:"",size:a[0]>=1960?i?.extraLargeScreen??8:a[0]>=1440?i?.largeScreen??5:a[0]>=769?i?.laptop??3:a[0]>=481?i?.tab??2:i?.phone??1},n)};export{c as Carousel,u as Slide};
