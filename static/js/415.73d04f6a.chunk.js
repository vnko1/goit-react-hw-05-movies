"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{9021:function(n,t,e){e.d(t,{Z:function(){return f}});var r,o=e(7689),a=e(843),i=e(168),u=e(1087),c=(0,e(6444).ZP)(u.rU)(r||(r=(0,i.Z)(["\n  color: black;\n  font-size: 16px;\n  font-weight: 500;\n\n  &:hover,\n  &:focus {\n    color: tomato;\n  }\n"]))),s=e(184),f=function(n){var t=n.movies,e=(0,o.TH)();return(0,s.jsx)(a.Z,{style:{paddingTop:"10px"},children:t.map((function(n){var t=n.title,r=n.id;return(0,s.jsx)(a.Z.Item,{children:(0,s.jsx)(c,{to:"/movies/".concat(r),state:{from:e},children:t})},r)}))})}},3855:function(n,t,e){var r=e(5218),o=e(184);t.Z=function(){return(0,o.jsx)(r.x7,{position:"top-center",reverseOrder:!1})}},5415:function(n,t,e){e.r(t);var r=e(9439),o=e(2791),a=e(5218),i=e(9021),u=e(334),c=e(3855),s=e(1830),f=e(184);t.default=function(){var n=(0,o.useState)([]),t=(0,r.Z)(n,2),e=t[0],l=t[1],p=(0,o.useState)(!1),h=(0,r.Z)(p,2),d=h[0],m=h[1];return(0,o.useEffect)((function(){var n=new AbortController,t={fetchParams:"trending/movie/week",controller:n};return(0,s.vw)(t).then((function(n){var t=(0,s.Lu)(n.results);l(t)})).catch((function(n){"canceled"!==n.message&&a.ZP.error(n.message)})).finally((function(){m(!1)})),function(){n.abort()}}),[]),(0,f.jsxs)(f.Fragment,{children:[d&&(0,f.jsx)(u.Z,{}),!!e.length&&(0,f.jsx)(i.Z,{movies:e}),(0,f.jsx)(c.Z,{})]})}},1830:function(n,t,e){e.d(t,{vw:function(){return u},in:function(){return f},Bf:function(){return s},Lu:function(){return c},tK:function(){return l}});var r=e(5861),o=e(4687),a=e.n(o),i=e(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r,o,u,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.fetchParams,r=t.query,o=void 0===r?null:r,u=t.controller,n.next=3,(0,i.Z)(e,{signal:u.signal,params:{api_key:"c095a52b18be81f1ee1fe016a8531acc",query:o}});case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),c=function(n){return n.map((function(n){return{title:n.title,id:n.id}}))},s=function(n){var t=n.release_date,e=n.title,r=n.poster_path,o=n.popularity,a=n.backdrop_path,i=n.id,u=n.tagline,c=n.genres,s=n.overview,f=t?t.split("-")[0]:"No release information",l=r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://placehold.co/500x750/png",p=c.map((function(n){return n.name})).join(" ");return{date:f,title:e,tagline:u,id:i,poster:l,popularity:o+"",backdrop_path:a,genre:p.length?p:"No genre information",overview:s}},f=function(n){return n.map((function(n){return{id:n.id,name:n.name,original_name:n.original_name,character:n.character,profile_path:n.profile_path}}))},l=function(n){return n.map((function(n){return{author:n.author,content:n.content,id:n.id}}))}}}]);
//# sourceMappingURL=415.73d04f6a.chunk.js.map