"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[353],{409:function(e,n,t){t.d(n,{HI:function(){return h},Hx:function(){return p},Mc:function(){return d},uV:function(){return f},wr:function(){return l}});var c=t(5861),a=t(7757),r=t.n(a),i="https://api.themoviedb.org/3",s="d752e046a9268238157ca8971cc96b61";function o(){return u.apply(this,arguments)}function u(){return u=(0,c.Z)(r().mark((function e(){var n,t,c,a=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",t=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(n,t);case 4:if(!(c=e.sent).ok){e.next=11;break}return e.next=8,c.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(){return o("".concat(i,"/trending/all/day?api_key=").concat(s))}function h(e){return o("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"))}function d(e){return o("".concat(i,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"))}function f(e){return o("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"))}function p(e){return o("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"))}},2151:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var c=t(8152),a=t(2791),r=t(9271),i=t(1523),s=t(409),o=t(6153),u="MovieDetailsView_button__h61ak",l="MovieDetailsView_link__23eYP",h="MovieDetailsView_activeLink__eK1DM",d=t(184),f=(0,a.lazy)((function(){return t.e(234).then(t.bind(t,3241))})),p=(0,a.lazy)((function(){return t.e(238).then(t.bind(t,5238))}));function v(){var e=(0,r.UO)().movieId,n=(0,a.useState)(null),t=(0,c.Z)(n,2),v=t[0],x=t[1],m=(0,r.$B)(),j=m.url,_=m.path,g=(0,r.k6)(),k=(0,r.TH)(),w=(0,a.useState)("/"),b=(0,c.Z)(w,2),y=b[0],S=b[1];(0,a.useEffect)((function(){s.Mc(e).then((function(e){x(e)}))}),[e]);return(0,a.useEffect)((function(){k.state&&S(k.state.from)}),[k]),(0,d.jsx)(d.Fragment,{children:v&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:u,type:"button",onClick:function(){g.push(y)},children:"Go back"}),(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(v.poster_path),alt:v.title}),(0,d.jsx)("h2",{children:v.title}),(0,d.jsxs)("p",{children:["User Score: ",(0,d.jsx)("span",{children:v.vote_average})]}),(0,d.jsxs)("p",{children:["Overview ",(0,d.jsx)("span",{children:v.overview})]}),(0,d.jsxs)("p",{children:["Genres"," ",(0,d.jsx)("span",{children:v.genres.map((function(e){return e.name})).join(" ")})]}),(0,d.jsx)("h3",{children:"Additional information"}),(0,d.jsxs)("nav",{children:[(0,d.jsx)(i.OL,{to:"".concat(j,"/cast"),className:l,activeClassName:h,children:"Cast"}),(0,d.jsx)(i.OL,{to:"".concat(j,"/reviews"),className:l,activeClassName:h,children:"Reviews"})]}),(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(o.Z,{}),children:(0,d.jsxs)(r.rs,{children:[(0,d.jsx)(r.AW,{path:"".concat(_,"/cast"),children:(0,d.jsx)(f,{movieId:e})}),(0,d.jsx)(r.AW,{path:"".concat(_,"/reviews"),children:(0,d.jsx)(p,{movieId:e})})]})})]})})}}}]);
//# sourceMappingURL=movie-details-view.53d1981e.chunk.js.map