"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[532],{3855:function(e,n,t){var r=t(5218),o=t(184);n.Z=function(){return(0,o.jsx)(r.x7,{position:"top-center",reverseOrder:!1})}},4532:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var r,o,i,a,s,c=t(2791),l=t(7689),u=t(1413),d=t(334),h=t(168),p=t(6444),f=t(1087),v=p.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 30px;\n  padding-top: 20px;\n"]))),g=p.ZP.div(o||(o=(0,h.Z)(["\n  display: flex;\n  gap: 30px;\n"]))),m=p.ZP.ul(i||(i=(0,h.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),x=(0,p.ZP)(f.rU)(a||(a=(0,h.Z)(["\n  width: 100px;\n  text-align: center;\n  color: black;\n  padding: 4px 8px;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: tomato;\n  }\n"]))),Z=p.ZP.div(s||(s=(0,h.Z)(["\n  position: relative;\n"]))),j=t(184),w=function(e){var n,t,r,o,i,a,s=e.movie,h=e.setIsLoading,p=s.date,f=s.title,w=s.tagline,b=s.poster,_=s.popularity,y=s.genre,P=s.overview,L=(0,l.TH)(),k=null!==(n=null===(t=L.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",C=(0,u.Z)({},L),I=null===C||void 0===C||null===(r=C.state)||void 0===r||null===(o=r.from)||void 0===o?void 0:o.pathname,S=null===C||void 0===C||null===(i=C.state)||void 0===i||null===(a=i.from)||void 0===a?void 0:a.search,H=function(){return h(!1)};return(0,j.jsxs)(v,{children:[(0,j.jsx)(x,{to:k,children:"Go back"}),(0,j.jsxs)(g,{children:[(0,j.jsx)("img",{src:b,alt:w,onLoad:H,onError:H,width:"400px",height:"600px"}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("h1",{children:f}),(0,j.jsx)("p",{children:"".concat(p)})]}),(0,j.jsxs)("p",{children:["Popularity: ",_]}),(0,j.jsx)("h2",{children:"Overview"}),(0,j.jsx)("p",{children:P}),(0,j.jsx)("h2",{children:"Genres"}),(0,j.jsx)("p",{children:y})]})]}),(0,j.jsxs)(Z,{children:[(0,j.jsx)("h2",{children:"Additional information"}),(0,j.jsxs)(m,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(x,{to:"cast",state:{from:{pathname:I,search:S}},children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(x,{to:"reviews",state:{from:{pathname:I,search:S}},children:"Reviews"})})]}),(0,j.jsx)(c.Suspense,{fallback:(0,j.jsx)(d.Z,{}),children:(0,j.jsx)(l.j3,{})})]})]})},b=t(3855),_=t(8175),y=function(e){return(0,j.jsxs)(_.ZP,(0,u.Z)((0,u.Z)({viewBox:"0 0 500 500",height:900,width:1280,backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},e),{},{children:[(0,j.jsx)("path",{d:"M484.52,64.61H15.65C7.1,64.61.17,71.2.17,79.31V299.82c0,8.12,6.93,14.7,15.48,14.7H484.52c8.55,0,15.48-6.58,15.48-14.7V79.31C500,71.2,493.07,64.61,484.52,64.61Zm-9,204.34c0,11.84-7.14,21.44-15.94,21.44H436.39L359.16,171.52c-7.1-10.92-19.67-11.16-27-.51L258.64,277.94C253.78,285,245.73,286,240,280.2l-79.75-80.62c-6-6.06-14.33-5.7-20,.88L62.34,290.39H40.63c-8.8,0-15.94-9.6-15.94-21.44V110.19c0-11.84,7.14-21.44,15.94-21.44H459.54c8.8,0,15.94,9.6,15.94,21.44Z"}),(0,j.jsx)("ellipse",{cx:"120",cy:"140",rx:"28",ry:"28"})]}))},P=t(7178),L=function(){var e=(0,P.Z)(),n=e.movie,t=e.fetchMovie,r=e.isLoading,o=e.setIsLoading,i=(0,c.useRef)(t).current,a=(0,l.UO)().moviesId;return(0,c.useEffect)((function(){var e=new AbortController;return i({fetchParams:"movie/".concat(a),controller:e}),function(){e.abort()}}),[i,a]),(0,j.jsxs)(j.Fragment,{children:[r&&(0,j.jsx)(y,{}),n&&(0,j.jsx)(w,{movie:n,setIsLoading:o}),(0,j.jsx)(b.Z,{})]})}},7178:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(9439),o=t(2791),i=t(5861),a=t(4687),s=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var l=function(){var e=(0,i.Z)(s().mark((function e(n){var t,r,o,i,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.fetchParams,r=n.query,o=void 0===r?null:r,i=n.controller,e.next=3,(0,c.Z)(t,{signal:i.signal,params:{api_key:"c095a52b18be81f1ee1fe016a8531acc",query:o}});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=t(5218),d=function(){var e=(0,o.useState)([]),n=(0,r.Z)(e,2),t=n[0],i=n[1],a=(0,o.useState)(!1),s=(0,r.Z)(a,2),c=s[0],d=s[1],h=(0,o.useState)(null),p=(0,r.Z)(h,2),f=p[0],v=p[1],g=(0,o.useState)([]),m=(0,r.Z)(g,2),x=m[0],Z=m[1],j=(0,o.useState)([]),w=(0,r.Z)(j,2),b=w[0],_=w[1],y=(0,o.useState)(!1),P=(0,r.Z)(y,2),L=P[0],k=P[1];return{movies:t,fetchMoviesList:function(e){d(!0),l(e).then((function(e){e.results.length||(d(!1),u.ZP.error("Nothing found!"));var n=function(e){return e.map((function(e){var n=e.title,t=e.id,r=e.poster_path,o=e.vote_average;return{title:n,id:t,poster:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://placehold.co/500x750/png",averageVote:o&&Math.round(10*o)}}))}(e.results);i(n)})).catch((function(e){"canceled"!==e.message&&(d(!1),u.ZP.error(e.message))}))},movie:f,fetchMovie:function(e){d(!0),l(e).then((function(e){v(function(e){var n=e.release_date,t=e.title,r=e.poster_path,o=e.popularity,i=e.backdrop_path,a=e.id,s=e.tagline,c=e.genres,l=e.overview,u=n?n.split("-")[0]:"No release information",d=r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://placehold.co/500x750/png",h=c.map((function(e){return e.name})).join(" ");return{date:u,title:t,tagline:s,id:a,poster:d,popularity:o+"",backdrop_path:i,genre:h.length?h:"No genre information",overview:l}}(e))})).catch((function(e){"canceled"!==e.message&&(d(!1),u.ZP.error(e.message))}))},cast:x,fetchCast:function(e){d(!0),l(e).then((function(e){Z(function(e){return e.map((function(e){var n=e.id,t=e.name,r=e.original_name,o=e.character,i=e.profile_path;return{id:n,name:t,original_name:r,character:o,profile:i?"https://image.tmdb.org/t/p/w500/".concat(i):"https://placehold.co/80x100/png"}}))}(e.cast)),e.cast.length||u.ZP.error("We don't have any cast for this movie")})).catch((function(e){"canceled"!==e.message&&u.ZP.error(e.message)}))},reviews:b,fetcReviews:function(e){k(!0),l(e).then((function(e){_(function(e){return e.map((function(e){var n=e.author,t=e.author_details.avatar_path;return{author:n,content:e.content,id:e.id,avatar:!t||null!==t&&void 0!==t&&t.includes("https")?"https://placehold.co/80x80/png":"https://image.tmdb.org/t/p/w500/".concat(t)}}))}(e.results)),e.results.length||u.ZP.error("We don't have any reviews for this movie")})).catch((function(e){"canceled"!==e.message&&u.ZP.error(e.message)}))},isLoading:c,setIsLoading:d,contentIsLoading:L,setContentIsLoading:k}}}}]);
//# sourceMappingURL=532.10e284ca.chunk.js.map