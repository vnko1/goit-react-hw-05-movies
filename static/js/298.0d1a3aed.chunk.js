"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[298],{3855:function(e,n,t){var r=t(5218),o=t(184);n.Z=function(){return(0,o.jsx)(r.x7,{position:"top-center",reverseOrder:!1})}},3298:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r,o,i,a=t(2791),s=t(7689),c=t(1413),l=t(168),u=t(6444),d=t(1087),h=u.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 30px;\n  padding-top: 20px;\n"]))),f=u.ZP.div(o||(o=(0,l.Z)(["\n  display: flex;\n  gap: 30px;\n"]))),p=(0,u.ZP)(d.rU)(i||(i=(0,l.Z)(["\n  width: 100px;\n  text-align: center;\n  color: black;\n  padding: 4px 8px;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: tomato;\n  }\n"]))),v=t(184),m=function(e){var n,t,r,o,i,a,l=e.movie,u=l.date,d=l.title,m=l.tagline,g=l.poster,x=l.popularity,j=l.genre,Z=l.overview,w=(0,s.TH)(),_=null!==(n=null===(t=w.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",b=(0,c.Z)({},w),y=null===b||void 0===b||null===(r=b.state)||void 0===r||null===(o=r.from)||void 0===o?void 0:o.pathname,P=null===b||void 0===b||null===(i=b.state)||void 0===i||null===(a=i.from)||void 0===a?void 0:a.search;return(0,v.jsxs)(h,{children:[(0,v.jsx)(p,{to:_,children:"Go back"}),(0,v.jsxs)(f,{children:[(0,v.jsx)("img",{src:g,alt:m}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:d}),(0,v.jsx)("p",{children:"".concat(u)})]}),(0,v.jsxs)("p",{children:["Popularity: ",x]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:Z}),(0,v.jsx)("h2",{children:"Genres"}),(0,v.jsx)("p",{children:j})]})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(p,{to:"cast",state:{from:{pathname:y,search:P}},children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(p,{to:"reviews",state:{from:{pathname:y,search:P}},children:"Reviews"})})]}),(0,v.jsx)(s.j3,{})]})]})},g=t(3855),x=t(334),j=t(7178),Z=function(){var e=(0,j.Z)(),n=e.movie,t=e.fetchMovie,r=e.showLoader,o=(0,a.useRef)(t).current,i=(0,s.UO)().moviesId;return(0,a.useEffect)((function(){var e=new AbortController;return o({fetchParams:"movie/".concat(i),controller:e}),function(){e.abort()}}),[o,i]),(0,v.jsxs)(v.Fragment,{children:[r&&(0,v.jsx)(x.Z,{}),n&&(0,v.jsx)(m,{movie:n}),(0,v.jsx)(g.Z,{})]})}},7178:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(9439),o=t(2791),i=t(5861),a=t(4687),s=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var l=function(){var e=(0,i.Z)(s().mark((function e(n){var t,r,o,i,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.fetchParams,r=n.query,o=void 0===r?null:r,i=n.controller,e.next=3,(0,c.Z)(t,{signal:i.signal,params:{api_key:"c095a52b18be81f1ee1fe016a8531acc",query:o}});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=t(5218),d=function(){var e=(0,o.useState)([]),n=(0,r.Z)(e,2),t=n[0],i=n[1],a=(0,o.useState)(!1),s=(0,r.Z)(a,2),c=s[0],d=s[1],h=(0,o.useState)(null),f=(0,r.Z)(h,2),p=f[0],v=f[1],m=(0,o.useState)([]),g=(0,r.Z)(m,2),x=g[0],j=g[1],Z=(0,o.useState)([]),w=(0,r.Z)(Z,2),_=w[0],b=w[1];return{movies:t,fetchMoviesList:function(e){d(!0),l(e).then((function(e){e.results.length||u.ZP.error("Nothing found!");var n=function(e){return e.map((function(e){var n=e.title,t=e.id,r=e.poster_path,o=e.vote_average;return{title:n,id:t,poster:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://placehold.co/500x750/png",averageVote:o&&Math.round(10*o)}}))}(e.results);i(n)})).catch((function(e){"canceled"!==e.message&&u.ZP.error(e.message)})).finally((function(){d(!1)}))},movie:p,fetchMovie:function(e){d(!0),l(e).then((function(e){v(function(e){var n=e.release_date,t=e.title,r=e.poster_path,o=e.popularity,i=e.backdrop_path,a=e.id,s=e.tagline,c=e.genres,l=e.overview,u=n?n.split("-")[0]:"No release information",d=r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://placehold.co/500x750/png",h=c.map((function(e){return e.name})).join(" ");return{date:u,title:t,tagline:s,id:a,poster:d,popularity:o+"",backdrop_path:i,genre:h.length?h:"No genre information",overview:l}}(e))})).catch((function(e){"canceled"!==e.message&&u.ZP.error(e.message)})).finally((function(){d(!1)}))},cast:x,fetchCast:function(e){l(e).then((function(e){j(function(e){return e.map((function(e){return{id:e.id,name:e.name,original_name:e.original_name,character:e.character,profile_path:e.profile_path}}))}(e.cast)),e.cast.length||u.ZP.error("We don't have any cast for this movie")})).catch((function(e){"canceled"!==e.message&&u.ZP.error(e.message)}))},reviews:_,fetcReviews:function(e){l(e).then((function(e){b(function(e){return e.map((function(e){return{author:e.author,content:e.content,id:e.id}}))}(e.results)),e.results.length||u.ZP.error("We don't have any reviews for this movie")})).catch((function(e){"canceled"!==e.message&&u.ZP.error(e.message)}))},showLoader:c}}}}]);
//# sourceMappingURL=298.0d1a3aed.chunk.js.map