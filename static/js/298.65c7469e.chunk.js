"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[298],{3855:function(n,e,t){var r=t(5218),i=t(184);e.Z=function(){return(0,i.jsx)(r.x7,{position:"top-center",reverseOrder:!1})}},3298:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,i,o,a=t(9439),c=t(2791),s=t(7689),l=t(5218),u=t(1413),d=t(168),p=t(6444),f=t(1087),h=p.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 30px;\n  padding-top: 20px;\n"]))),v=p.ZP.div(i||(i=(0,d.Z)(["\n  display: flex;\n  gap: 30px;\n"]))),x=(0,p.ZP)(f.rU)(o||(o=(0,d.Z)(["\n  width: 100px;\n  text-align: center;\n  color: black;\n  padding: 4px 8px;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: tomato;\n  }\n"]))),m=t(184),j=function(n){var e,t,r,i,o,a,c=n.movie,l=c.date,d=c.title,p=c.tagline,f=c.poster,j=c.popularity,g=c.genre,w=c.overview,_=(0,s.TH)(),b=null!==(e=null===(t=_.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",Z=(0,u.Z)({},_),y=null===Z||void 0===Z||null===(r=Z.state)||void 0===r||null===(i=r.from)||void 0===i?void 0:i.pathname,k=null===Z||void 0===Z||null===(o=Z.state)||void 0===o||null===(a=o.from)||void 0===a?void 0:a.search;return(0,m.jsxs)(h,{children:[(0,m.jsx)(x,{to:b,children:"Go back"}),(0,m.jsxs)(v,{children:[(0,m.jsx)("img",{src:f,alt:p}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:d}),(0,m.jsx)("p",{children:"".concat(l)})]}),(0,m.jsxs)("p",{children:["Popularity: ",j]}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{children:w}),(0,m.jsx)("h2",{children:"Genres"}),(0,m.jsx)("p",{children:g})]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(x,{to:"cast",state:{from:{pathname:y,search:k}},children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(x,{to:"reviews",state:{from:{pathname:y,search:k}},children:"Reviews"})})]}),(0,m.jsx)(s.j3,{})]})]})},g=t(3855),w=t(334),_=t(1830),b=function(){var n=(0,c.useState)(null),e=(0,a.Z)(n,2),t=e[0],r=e[1],i=(0,c.useState)(!1),o=(0,a.Z)(i,2),u=o[0],d=o[1],p=(0,s.UO)().moviesId;return(0,c.useEffect)((function(){var n=new AbortController,e={fetchParams:"movie/".concat(p),controller:n};return d(!0),(0,_.vw)(e).then((function(n){r((0,_.Bf)(n))})).catch((function(n){"canceled"!==n.message&&l.ZP.error(n.message)})).finally((function(){d(!1)})),function(){n.abort()}}),[p,d]),(0,m.jsxs)(m.Fragment,{children:[u&&(0,m.jsx)(w.Z,{}),t&&(0,m.jsx)(j,{movie:t}),(0,m.jsx)(g.Z,{})]})}},1830:function(n,e,t){t.d(e,{vw:function(){return c},in:function(){return u},Bf:function(){return l},Lu:function(){return s},tK:function(){return d}});var r=t(5861),i=t(7757),o=t.n(i),a=t(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,i,c,s;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.fetchParams,r=e.query,i=void 0===r?null:r,c=e.controller,n.next=3,(0,a.Z)(t,{signal:c.signal,params:{api_key:"c095a52b18be81f1ee1fe016a8531acc",query:i}});case 3:return s=n.sent,n.abrupt("return",s.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(n){return n.map((function(n){return{title:n.title,id:n.id}}))},l=function(n){var e=n.release_date,t=n.title,r=n.poster_path,i=n.popularity,o=n.backdrop_path,a=n.id,c=n.tagline,s=n.genres,l=n.overview,u=e?e.split("-")[0]:"No release information",d=r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://placehold.co/500x750/png",p=s.map((function(n){return n.name})).join(" ");return{date:u,title:t,tagline:c,id:a,poster:d,popularity:i,backdrop_path:o,genre:p.length?p:"No genre information",overview:l}},u=function(n){return n.map((function(n){return{id:n.id,name:n.name,original_name:n.original_name,character:n.character,profile_path:n.profile_path}}))},d=function(n){return n.map((function(n){return{author:n.author,content:n.content,id:n.id}}))}}}]);
//# sourceMappingURL=298.65c7469e.chunk.js.map