"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[115],{2115:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r,a,o=n(7689),i=n(2791),c=n(3855),s=n(5856),u=n(6481),h=n(7178),l=n(168),p=n(6444),d=p.ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  opacity: 0;\n  transition: opacity 500ms;\n  position: absolute;\n  top: 100px;\n  left: 0;\n  &.loaded {\n    opacity: 1;\n  }\n"]))),f=p.ZP.li(a||(a=(0,l.Z)(["\n  max-width: 180px;\n"]))),g=n(184),m=function(){var t=(0,h.Z)(),e=t.cast,n=t.fetchCast,r=t.isLoading,a=t.setIsLoading,l=(0,o.UO)().moviesId,p=(0,i.useRef)(n).current;(0,i.useEffect)((function(){var t=new AbortController;return p({fetchParams:"movie/".concat(l,"/credits"),controller:t}),function(){t.abort()}}),[p,l]);var m=(0,s.e4)(e.length,(function(){a(!1)}));return(0,g.jsxs)(g.Fragment,{children:[r&&(0,g.jsx)(u.Z,{column:6,height:270,width:180}),!!e.length&&(0,g.jsx)(d,{className:!r&&"loaded",children:e.map((function(t){var e=t.id,n=t.name,r=t.original_name,a=t.character,o=t.profile;return(0,g.jsxs)(f,{children:[(0,g.jsx)("img",{src:o,alt:n,width:"180",onLoad:m,onError:m}),(0,g.jsx)("p",{children:r}),(0,g.jsxs)("p",{children:["Character: ",a]})]},e)}))}),(0,g.jsx)(c.Z,{})]})}},6481:function(t,e,n){var r=n(8175),a=n(184);e.Z=function(t){var e=t.column,n=void 0===e?4:e,o=t.height,i=void 0===o?450:o,c=t.width,s=n,u=i,h=void 0===c?300:c,l=u+5,p=h+5,d=Array(3*s).fill(1);return(0,a.jsx)(r.ZP,{speed:1,width:s*p,height:3*l,children:d.map((function(t,e){var n=Math.floor(e/s)*l+35,r=e*p%(s*p);return(0,a.jsx)("rect",{x:r,y:n,rx:"0",ry:"0",width:h,height:u},e)}))})}},3855:function(t,e,n){var r=n(5218),a=n(184);e.Z=function(){return(0,a.jsx)(r.x7,{position:"top-center",reverseOrder:!1})}},7178:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(9439),a=n(2791),o=n(5861),i=n(4687),c=n.n(i),s=n(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var t=(0,o.Z)(c().mark((function t(e){var n,r,a,o,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.fetchParams,r=e.query,a=void 0===r?null:r,o=e.controller,t.next=3,(0,s.Z)(n,{signal:o.signal,params:{api_key:"c095a52b18be81f1ee1fe016a8531acc",query:a}});case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=n(5218),l=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],o=e[1],i=(0,a.useState)(!1),c=(0,r.Z)(i,2),s=c[0],l=c[1],p=(0,a.useState)(null),d=(0,r.Z)(p,2),f=d[0],g=d[1],m=(0,a.useState)([]),v=(0,r.Z)(m,2),Z=v[0],w=v[1],x=(0,a.useState)([]),_=(0,r.Z)(x,2),b=_[0],y=_[1],j=(0,a.useState)(!1),P=(0,r.Z)(j,2),L=P[0],k=P[1];return{movies:n,fetchMoviesList:function(t){l(!0),u(t).then((function(t){t.results.length||(l(!1),h.ZP.error("Nothing found!"));var e=function(t){return t.map((function(t){var e=t.title,n=t.id,r=t.poster_path,a=t.vote_average;return{title:e,id:n,poster:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://placehold.co/500x750/png",averageVote:a&&Math.round(10*a)}}))}(t.results);o(e)})).catch((function(t){"canceled"!==t.message&&(l(!1),h.ZP.error(t.message))}))},movie:f,fetchMovie:function(t){l(!0),u(t).then((function(t){g(function(t){var e=t.release_date,n=t.title,r=t.poster_path,a=t.popularity,o=t.backdrop_path,i=t.id,c=t.tagline,s=t.genres,u=t.overview,h=e?e.split("-")[0]:"No release information",l=r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://placehold.co/500x750/png",p=s.map((function(t){return t.name})).join(" ");return{date:h,title:n,tagline:c,id:i,poster:l,popularity:a+"",backdrop_path:o,genre:p.length?p:"No genre information",overview:u}}(t))})).catch((function(t){"canceled"!==t.message&&(l(!1),h.ZP.error(t.message))}))},cast:Z,fetchCast:function(t){l(!0),u(t).then((function(t){w(function(t){return t.map((function(t){var e=t.id,n=t.name,r=t.original_name,a=t.character,o=t.profile_path;return{id:e,name:n,original_name:r,character:a,profile:o?"https://image.tmdb.org/t/p/w500/".concat(o):"https://placehold.co/80x100/png"}}))}(t.cast)),t.cast.length||h.ZP.error("We don't have any cast for this movie")})).catch((function(t){"canceled"!==t.message&&h.ZP.error(t.message)}))},reviews:b,fetcReviews:function(t){k(!0),u(t).then((function(t){y(function(t){return t.map((function(t){var e=t.author,n=t.author_details.avatar_path;return{author:e,content:t.content,id:t.id,avatar:!n||null!==n&&void 0!==n&&n.includes("https")?"https://placehold.co/80x80/png":"https://image.tmdb.org/t/p/w500/".concat(n)}}))}(t.results)),t.results.length||h.ZP.error("We don't have any reviews for this movie")})).catch((function(t){"canceled"!==t.message&&h.ZP.error(t.message)}))},isLoading:s,setIsLoading:l,contentIsLoading:L,setContentIsLoading:k}}}}]);
//# sourceMappingURL=115.ac794fc7.chunk.js.map