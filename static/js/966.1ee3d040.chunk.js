"use strict";(self.webpackChunkinfinite_scroll=self.webpackChunkinfinite_scroll||[]).push([[966],{340:(e,t,s)=>{s.d(t,{G:()=>i,u:()=>n});const r=s(652).W.injectEndpoints({endpoints:e=>({fetchAllPosts:e.query({query:e=>{let{limit:t=5,start:s=0}=e;return{url:"/posts",params:{_limit:t,_start:s}}}}),fetchPostById:e.query({query:function(){return{url:"/posts/".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)}}})})}),n=r.useFetchAllPostsQuery,i=r.useFetchPostByIdQuery},174:(e,t,s)=>{s.d(t,{g:()=>a,G:()=>l});var r=s(560),n=s(496);const i=e=>{let{post:t}=e;const s=(0,r.i6)();return(0,n.jsxs)("div",{className:"post-item",children:[(0,n.jsx)("div",{children:"\u2116 ".concat(t.id)}),(0,n.jsx)("div",{className:"post-item__title",children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a: ".concat(t.title)}),(0,n.jsx)("div",{className:"post-item__body",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ".concat(t.body)}),(0,n.jsx)("button",{type:"button",onClick:()=>s("/post/".concat(t.id)),children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]})},l=e=>{let{posts:t,isLoading:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"post-list",children:null===t||void 0===t?void 0:t.map((e=>(0,n.jsx)(i,{post:e},e.id)))}),s&&(0,n.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445..."})]})};var c=s(340),o=s(400);const a=e=>{const{id:t=0}=e,{data:s,isLoading:r}=(0,c.G)(t);return(0,n.jsx)(n.Fragment,{children:r?(0,n.jsx)(o.E,{}):(0,n.jsxs)("div",{className:"post-details",children:[(0,n.jsxs)("div",{children:["\u2116",null===s||void 0===s?void 0:s.id]}),(0,n.jsxs)("div",{className:"post-details__title",children:["\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a:"," ",null===s||void 0===s?void 0:s.title]}),(0,n.jsxs)("div",{className:"post-details__body",children:["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"," ",null===s||void 0===s?void 0:s.body]})]})})}},966:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var r=s(560),n=s(174),i=s(528),l=s(496);const c=()=>{const{id:e}=(0,r.W4)();return(0,l.jsx)(i.K,{className:"post-details-page",children:(0,l.jsx)(n.g,{id:Number(e)})})}},528:(e,t,s)=>{s.d(t,{K:()=>u});var r=s(736),n=s(60),i=s(624),l=s(560);const c=(0,s(656).M3)((e=>e.ui.scroll),((e,t)=>t),((e,t)=>e[t]||0));var o=s(932);function a(e){let{callback:t,wrapperRef:s,triggerRef:r}=e;const i=(0,n.useRef)(null);(0,n.useEffect)((()=>{const e=(null===s||void 0===s?void 0:s.current)||null,n=r.current;if(t){const s={root:e,rootMargin:"0px",threshold:1};i.current=new IntersectionObserver((e=>{let[s]=e;s.isIntersecting&&t()}),s),i.current.observe(n)}return()=>{i.current&&n&&i.current.unobserve(n)}}),[t,r,s])}var d=s(496);const u=(0,n.memo)((e=>{const{className:t,children:s,onScrollEnd:u,onScrollStart:p}=e,v=(0,n.useRef)(),f=(0,n.useRef)(),h=(0,n.useRef)(),m=(0,i.OY)(),{pathname:g}=(0,l.IT)(),j=(0,i.w1)((e=>c(e,g)));var x;a({triggerRef:f,wrapperRef:v,callback:p}),a({triggerRef:h,wrapperRef:v,callback:u}),x=()=>{v.current.scrollTop=j},(0,n.useEffect)((()=>{x()}),[]);const _=function(e,t){const s=(0,n.useRef)(!1);return(0,n.useCallback)((function(){s.current||(e(...arguments),s.current=!0,setTimeout((()=>{s.current=!1}),t))}),[e,t])}((e=>{m(o._i.setScrollPosition({position:e.currentTarget.scrollTop,path:g}))}),500);return(0,d.jsxs)("main",{ref:v,className:(0,r.c)("page",t),onScroll:_,children:[p?(0,d.jsx)("div",{className:"page__trigger",ref:f}):null,s,u?(0,d.jsx)("div",{className:"page__trigger",ref:h}):null]})}))}}]);
//# sourceMappingURL=966.1ee3d040.chunk.js.map