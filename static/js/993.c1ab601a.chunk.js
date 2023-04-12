"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[993],{6481:function(e,t,n){var r=n(1413),o=n(8175),a=n(184);t.Z=function(e){var t=Array(12).fill(1);return(0,a.jsx)(o.ZP,(0,r.Z)((0,r.Z)({speed:1,width:1220,height:1365},e),{},{children:t.map((function(e,t){var n=455*Math.floor(t/4)+35,r=305*t%1220;return(0,a.jsx)("rect",{x:r,y:n,rx:"0",ry:"0",width:300,height:450},t)}))}))}},9021:function(e,t,n){n.d(t,{Z:function(){return j}});var r,o,a,i,s,c,u=n(7689),l=n(5856),f=n(168),h=n(1087),p=n(6444),d=n(9391),v=(n(1009),n(184)),g=p.ZP.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-top: 20px;\n"]))),m=p.ZP.li(o||(o=(0,f.Z)(["\n  max-width: 250px;\n  text-align: center;\n"]))),x=(0,p.ZP)(h.rU)(a||(a=(0,f.Z)(["\n  color: black;\n  font-size: 16px;\n  font-weight: 500;\n\n  &:hover,\n  &:focus {\n    color: tomato;\n  }\n"]))),Z=p.ZP.div(i||(i=(0,f.Z)(["\n  position: relative;\n"]))),w=p.ZP.div(s||(s=(0,f.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n\n  width: 50px;\n"]))),b=(0,p.ZP)(d.Ip)(c||(c=(0,f.Z)([""]))),_=function(e){var t=e.value,n=e.text;return(0,v.jsx)(b,{value:t,text:n,background:!0,backgroundPadding:6,styles:(0,d.y3)({textColor:"black",pathColor:"teal",trailColor:"tomato",backgroundColor:"silver",textSize:"30px"})})},j=function(e){var t=e.movies,n=e.setIsLoading,r=(0,u.TH)(),o=(0,l.e4)(t.length,(function(){n(!1)}));return(0,v.jsx)(g,{children:t.map((function(e,t){var n=e.title,a=e.id,i=e.poster,s=e.averageVote;return(0,v.jsx)(m,{children:(0,v.jsxs)(x,{to:"/movies/".concat(a),state:{from:r},children:[(0,v.jsxs)(Z,{children:[(0,v.jsx)("img",{src:i,alt:n,width:"300px",onLoad:o,onError:o}),(0,v.jsx)(w,{children:(0,v.jsx)(_,{value:s,text:"".concat(s,"%")})})]}),(0,v.jsx)("h2",{children:n})]})},a)}))})}},3855:function(e,t,n){var r=n(5218),o=n(184);t.Z=function(){return(0,o.jsx)(r.x7,{position:"top-center",reverseOrder:!1})}},5415:function(e,t,n){n.r(t);var r=n(2791),o=n(9021),a=n(6481),i=n(3855),s=n(7178),c=n(184);t.default=function(){var e=(0,s.Z)(),t=e.movies,n=e.isLoading,u=e.setIsLoading,l=e.fetchMoviesList,f=(0,r.useRef)(l).current;return(0,r.useEffect)((function(){var e=new AbortController;return f({fetchParams:"trending/movie/week",controller:e}),function(){e.abort()}}),[f]),(0,c.jsxs)(c.Fragment,{children:[n&&(0,c.jsx)(a.Z,{}),!!t.length&&(0,c.jsx)(o.Z,{movies:t,setIsLoading:u}),(0,c.jsx)(i.Z,{})]})}},7178:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(9439),o=n(2791),a=n(5861),i=n(4687),s=n.n(i),c=n(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,a.Z)(s().mark((function e(t){var n,r,o,a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.fetchParams,r=t.query,o=void 0===r?null:r,a=t.controller,e.next=3,(0,c.Z)(n,{signal:a.signal,params:{api_key:"c095a52b18be81f1ee1fe016a8531acc",query:o}});case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=n(5218),f=function(){var e=(0,o.useState)([]),t=(0,r.Z)(e,2),n=t[0],a=t[1],i=(0,o.useState)(!1),s=(0,r.Z)(i,2),c=s[0],f=s[1],h=(0,o.useState)(null),p=(0,r.Z)(h,2),d=p[0],v=p[1],g=(0,o.useState)([]),m=(0,r.Z)(g,2),x=m[0],Z=m[1],w=(0,o.useState)([]),b=(0,r.Z)(w,2),_=b[0],j=b[1];return{movies:n,fetchMoviesList:function(e){f(!0),u(e).then((function(e){e.results.length||(f(!1),l.ZP.error("Nothing found!"));var t=function(e){return e.map((function(e){var t=e.title,n=e.id,r=e.poster_path,o=e.vote_average;return{title:t,id:n,poster:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://placehold.co/500x750/png",averageVote:o&&Math.round(10*o)}}))}(e.results);a(t)})).catch((function(e){"canceled"!==e.message&&(f(!1),l.ZP.error(e.message))}))},movie:d,fetchMovie:function(e){f(!0),u(e).then((function(e){v(function(e){var t=e.release_date,n=e.title,r=e.poster_path,o=e.popularity,a=e.backdrop_path,i=e.id,s=e.tagline,c=e.genres,u=e.overview,l=t?t.split("-")[0]:"No release information",f=r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://placehold.co/500x750/png",h=c.map((function(e){return e.name})).join(" ");return{date:l,title:n,tagline:s,id:i,poster:f,popularity:o+"",backdrop_path:a,genre:h.length?h:"No genre information",overview:u}}(e))})).catch((function(e){"canceled"!==e.message&&(f(!1),l.ZP.error(e.message))}))},cast:x,fetchCast:function(e){u(e).then((function(e){Z(function(e){return e.map((function(e){return{id:e.id,name:e.name,original_name:e.original_name,character:e.character,profile_path:e.profile_path}}))}(e.cast)),e.cast.length||l.ZP.error("We don't have any cast for this movie")})).catch((function(e){"canceled"!==e.message&&l.ZP.error(e.message)}))},reviews:_,fetcReviews:function(e){u(e).then((function(e){j(function(e){return e.map((function(e){return{author:e.author,content:e.content,id:e.id}}))}(e.results)),e.results.length||l.ZP.error("We don't have any reviews for this movie")})).catch((function(e){"canceled"!==e.message&&l.ZP.error(e.message)}))},isLoading:c,setIsLoading:f}}}}]);
//# sourceMappingURL=993.c1ab601a.chunk.js.map