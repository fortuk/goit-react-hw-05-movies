"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[8],{7692:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(1523),c=t(9271),a="MovieItem_list__wzdJ-",i="MovieItem_movieItem__2LkR+",o="MovieItem_movieImage__Atx+F",u=t(184),s=function(e){var n=e.movies,t=(0,c.TH)();return(0,u.jsx)("ul",{className:a,children:n.map((function(e){return(0,u.jsx)("li",{className:i,children:(0,u.jsxs)(r.rU,{to:{pathname:"/movies/".concat(e.id),state:{from:t}},children:[(0,u.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.name,width:"320"}),(0,u.jsx)("p",{children:e.name})]})},e.id)}))})}},409:function(e,n,t){t.d(n,{HI:function(){return m},Hx:function(){return _},Mc:function(){return l},uV:function(){return d},wr:function(){return f}});var r=t(5861),c=t(7757),a=t.n(c),i="https://api.themoviedb.org/3",o="d752e046a9268238157ca8971cc96b61";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function e(){var n,t,r,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(){return u("".concat(i,"/trending/all/day?api_key=").concat(o))}function m(e){return u("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"))}function l(e){return u("".concat(i,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"))}function d(e){return u("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"))}function _(e){return u("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US"))}},9325:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(8152),c=t(2791),a=t(409),i=t(7692),o="HomeView_title__bBIvN",u=t(184);function s(){var e=(0,c.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1];return(0,c.useEffect)((function(){a.wr().then((function(e){return s(e.results)}))}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{className:o,children:"Trending today"}),(0,u.jsx)(i.Z,{movies:t})]})}}}]);
//# sourceMappingURL=home-view.641cf175.chunk.js.map