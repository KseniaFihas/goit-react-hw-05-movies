"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{895:function(e,t,n){n.d(t,{E3:function(){return p},Ko:function(){return v},_k:function(){return o},gQ:function(){return f},uV:function(){return l}});var r=n(861),a=n(757),c=n.n(a),u=n(243),s="https://api.themoviedb.org",i="1f217402d118ac3a6682f0a7cf4c121b",o=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/3/trending/movie/day?api_key=").concat(i));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/3/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/3/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/3/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/3/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},168:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i=n(689),o={wrapper:"Reviews_wrapper__93MpV",title:"Reviews_title__t265C",list:"Reviews_list__okdpy",list_item:"Reviews_list_item__9lxTg",author:"Reviews_author__CqYAZ",review:"Reviews_review__sHbuN",no_reviews:"Reviews_no_reviews__Ycm3V"},p=n(895),f=n(184),l=function(){var e=(0,i.UO)().movieId,t=(0,s.useState)([]),n=(0,a.Z)(t,2),c=n[0],l=n[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.Ko)(e);case 3:n=t.sent,r=n.results,l(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,f.jsxs)("div",{className:o.wraper,children:[(0,f.jsx)("h3",{className:o.title,children:"Reviews"}),c.length?(0,f.jsx)("ul",{className:o.list,children:c.map((function(e){return(0,f.jsxs)("li",{className:o.list_item,children:[(0,f.jsxs)("h4",{className:o.author,children:["Author: ",e.author]}),(0,f.jsx)("p",{className:o.review,children:e.content})]},e.id)}))}):(0,f.jsxs)("p",{className:o.no_reviews,children:[" ","We don't have any reviews for this movie yet."]})]})}}}]);
//# sourceMappingURL=168.323c6c0a.chunk.js.map