"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[532],{4532:function(n,e,i){i.r(e),i.d(e,{default:function(){return L}});var r,o,t,s,l,c=i(2791),d=i(7689),a=i(1413),h=i(168),x=i(6444),u=i(1087),v=x.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 30px;\n  padding-top: 20px;\n"]))),p=x.ZP.div(o||(o=(0,h.Z)(["\n  display: flex;\n  gap: 30px;\n"]))),f=x.ZP.ul(t||(t=(0,h.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),j=(0,x.ZP)(u.rU)(s||(s=(0,h.Z)(["\n  width: 100px;\n  text-align: center;\n  color: black;\n  padding: 4px 8px;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: tomato;\n  }\n"]))),m=x.ZP.div(l||(l=(0,h.Z)(["\n  position: relative;\n"]))),g=i(184),Z=function(n){var e,i,r,o,t,s,l=n.movie,c=n.setIsLoading,h=l.date,x=l.title,u=l.tagline,Z=l.poster,w=l.popularity,b=l.genre,C=l.overview,y=(0,d.TH)(),L=null!==(e=null===(i=y.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/",P=(0,a.Z)({},y),_=null===P||void 0===P||null===(r=P.state)||void 0===r||null===(o=r.from)||void 0===o?void 0:o.pathname,k=null===P||void 0===P||null===(t=P.state)||void 0===t||null===(s=t.from)||void 0===s?void 0:s.search,H=function(){return c(!1)};return(0,g.jsxs)(v,{children:[(0,g.jsx)(j,{to:L,children:"Go back"}),(0,g.jsxs)(p,{children:[(0,g.jsx)("img",{src:Z,alt:u,onLoad:H,onError:H}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("h1",{children:x}),(0,g.jsx)("p",{children:"".concat(h)})]}),(0,g.jsxs)("p",{children:["Popularity: ",w]}),(0,g.jsx)("h2",{children:"Overview"}),(0,g.jsx)("p",{children:C}),(0,g.jsx)("h2",{children:"Genres"}),(0,g.jsx)("p",{children:b})]})]}),(0,g.jsxs)(m,{children:[(0,g.jsx)("h2",{children:"Additional information"}),(0,g.jsxs)(f,{children:[(0,g.jsx)("li",{children:(0,g.jsx)(j,{to:"cast",state:{from:{pathname:_,search:k}},children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(j,{to:"reviews",state:{from:{pathname:_,search:k}},children:"Reviews"})})]}),(0,g.jsx)(d.j3,{})]})]})},w=i(3855),b=i(8175),C=function(n){return(0,g.jsxs)(b.ZP,(0,a.Z)((0,a.Z)({viewBox:"0 0 500 500",height:900,width:1280,backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},n),{},{children:[(0,g.jsx)("path",{d:"M484.52,64.61H15.65C7.1,64.61.17,71.2.17,79.31V299.82c0,8.12,6.93,14.7,15.48,14.7H484.52c8.55,0,15.48-6.58,15.48-14.7V79.31C500,71.2,493.07,64.61,484.52,64.61Zm-9,204.34c0,11.84-7.14,21.44-15.94,21.44H436.39L359.16,171.52c-7.1-10.92-19.67-11.16-27-.51L258.64,277.94C253.78,285,245.73,286,240,280.2l-79.75-80.62c-6-6.06-14.33-5.7-20,.88L62.34,290.39H40.63c-8.8,0-15.94-9.6-15.94-21.44V110.19c0-11.84,7.14-21.44,15.94-21.44H459.54c8.8,0,15.94,9.6,15.94,21.44Z"}),(0,g.jsx)("ellipse",{cx:"120",cy:"140",rx:"28",ry:"28"})]}))},y=i(1446),L=function(){var n=(0,y.Z)(),e=n.movie,i=n.fetchMovie,r=n.isLoading,o=n.setIsLoading,t=(0,c.useRef)(i).current,s=(0,d.UO)().moviesId;return(0,c.useEffect)((function(){var n=new AbortController;return t({fetchParams:"movie/".concat(s),controller:n}),function(){n.abort()}}),[t,s]),(0,g.jsxs)(g.Fragment,{children:[r&&(0,g.jsx)(C,{}),e&&(0,g.jsx)(Z,{movie:e,setIsLoading:o}),(0,g.jsx)(w.Z,{})]})}}}]);
//# sourceMappingURL=532.7470d551.chunk.js.map