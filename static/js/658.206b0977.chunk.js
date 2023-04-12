"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[658],{9658:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var r,a=n(7689),i=n(2791),o=n(5856),c=n(3855),s=n(1413),h=n(8175),u=n(184),l=function(t){return(0,u.jsxs)(h.ZP,(0,s.Z)((0,s.Z)({viewBox:"0 0 500 475",height:475,width:500},t),{},{children:[(0,u.jsx)("circle",{cx:"70.2",cy:"73.2",r:"41.3"}),(0,u.jsx)("rect",{x:"129.9",y:"29.5",width:"125.5",height:"17"}),(0,u.jsx)("rect",{x:"129.9",y:"64.7",width:"296",height:"17"}),(0,u.jsx)("rect",{x:"129.9",y:"97.8",width:"253.5",height:"17"}),(0,u.jsx)("rect",{x:"129.9",y:"132.3",width:"212.5",height:"17"}),(0,u.jsx)("circle",{cx:"70.7",cy:"243.5",r:"41.3"}),(0,u.jsx)("rect",{x:"130.4",y:"199.9",width:"125.5",height:"17"}),(0,u.jsx)("rect",{x:"130.4",y:"235",width:"296",height:"17"}),(0,u.jsx)("rect",{x:"130.4",y:"268.2",width:"253.5",height:"17"}),(0,u.jsx)("rect",{x:"130.4",y:"302.6",width:"212.5",height:"17"}),(0,u.jsx)("circle",{cx:"70.7",cy:"412.7",r:"41.3"}),(0,u.jsx)("rect",{x:"130.4",y:"369",width:"125.5",height:"17"}),(0,u.jsx)("rect",{x:"130.4",y:"404.2",width:"296",height:"17"}),(0,u.jsx)("rect",{x:"130.4",y:"437.3",width:"253.5",height:"17"}),(0,u.jsx)("rect",{x:"130.4",y:"471.8",width:"212.5",height:"17"})]}))},d=n(7178),p=n(168),f=n(6444).ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  opacity: 0;\n  transition: opacity 1500ms;\n\n  &.listLoaded {\n    opacity: 1;\n  }\n"]))),g=function(){var t=(0,d.Z)(),e=t.reviews,n=t.fetcReviews,r=t.contentIsLoading,s=t.setContentIsLoading,h=(0,a.UO)().moviesId,p=(0,i.useRef)(n).current;(0,i.useEffect)((function(){var t=new AbortController;return p({fetchParams:"movie/".concat(h,"/reviews"),controller:t}),function(){t.abort()}}),[p,h]);var g=(0,o.e4)(e.length,(function(){s(!1)}));return(0,u.jsxs)(u.Fragment,{children:[r&&(0,u.jsx)(l,{}),!!e.length&&(0,u.jsx)(f,{className:!r&&"listLoaded",children:e.map((function(t){var e=t.author,n=t.content,r=t.id,a=t.avatar;return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:a,alt:e,onLoad:g,onError:g,width:"80",height:"80"}),(0,u.jsxs)("h2",{children:["Author: ",e]}),(0,u.jsx)("p",{children:n})]},r)}))}),(0,u.jsx)(c.Z,{})]})}},3855:function(t,e,n){var r=n(5218),a=n(184);e.Z=function(){return(0,a.jsx)(r.x7,{position:"top-center",reverseOrder:!1})}},7178:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(9439),a=n(2791),i=n(5861),o=n(4687),c=n.n(o),s=n(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var h=function(){var t=(0,i.Z)(c().mark((function t(e){var n,r,a,i,o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.fetchParams,r=e.query,a=void 0===r?null:r,i=e.controller,t.next=3,(0,s.Z)(n,{signal:i.signal,params:{api_key:"c095a52b18be81f1ee1fe016a8531acc",query:a}});case 3:return o=t.sent,t.abrupt("return",o.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=n(5218),l=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],i=e[1],o=(0,a.useState)(!1),c=(0,r.Z)(o,2),s=c[0],l=c[1],d=(0,a.useState)(null),p=(0,r.Z)(d,2),f=p[0],g=p[1],v=(0,a.useState)([]),x=(0,r.Z)(v,2),m=x[0],w=x[1],y=(0,a.useState)([]),j=(0,r.Z)(y,2),Z=j[0],_=j[1],b=(0,a.useState)(!1),L=(0,r.Z)(b,2),P=L[0],k=L[1];return{movies:n,fetchMoviesList:function(t){l(!0),h(t).then((function(t){0===t.results.length&&(l(!1),u.ZP.error("Nothing found!"));var e=function(t){return t.map((function(t){var e=t.title,n=t.id,r=t.poster_path,a=t.vote_average;return{title:e,id:n,poster:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://placehold.co/500x750/png",averageVote:a&&Math.round(10*a)}}))}(t.results);i(e)})).catch((function(t){"canceled"!==t.message&&(l(!1),u.ZP.error(t.message))}))},movie:f,fetchMovie:function(t){l(!0),h(t).then((function(t){g(function(t){var e=t.release_date,n=t.title,r=t.poster_path,a=t.popularity,i=t.backdrop_path,o=t.id,c=t.tagline,s=t.genres,h=t.overview,u=e?e.split("-")[0]:"No release information",l=r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://placehold.co/500x750/png",d=s.map((function(t){return t.name})).join(" ");return{date:u,title:n,tagline:c,id:o,poster:l,popularity:a+"",backdrop_path:i,genre:d.length?d:"No genre information",overview:h}}(t))})).catch((function(t){"canceled"!==t.message&&(l(!1),u.ZP.error(t.message))}))},cast:m,fetchCast:function(t){l(!0),h(t).then((function(t){w(function(t){return t.map((function(t){var e=t.id,n=t.name,r=t.original_name,a=t.character,i=t.profile_path;return{id:e,name:n,original_name:r,character:a,profile:i?"https://image.tmdb.org/t/p/w500/".concat(i):"https://placehold.co/80x100/png"}}))}(t.cast)),0===t.cast.length&&(u.ZP.error("We don't have any cast for this movie"),l(!1))})).catch((function(t){"canceled"!==t.message&&(u.ZP.error(t.message),l(!1))}))},reviews:Z,fetcReviews:function(t){k(!0),h(t).then((function(t){_(function(t){return t.map((function(t){var e=t.author,n=t.author_details.avatar_path;return{author:e,content:t.content,id:t.id,avatar:!n||null!==n&&void 0!==n&&n.includes("https")?"https://placehold.co/80x80/png":"https://image.tmdb.org/t/p/w500/".concat(n)}}))}(t.results)),0===t.results.length&&(u.ZP.error("We don't have any reviews for this movie"),k(!1))})).catch((function(t){"canceled"!==t.message&&(u.ZP.error(t.message),k(!1))}))},isLoading:s,setIsLoading:l,contentIsLoading:P,setContentIsLoading:k}}}}]);
//# sourceMappingURL=658.206b0977.chunk.js.map