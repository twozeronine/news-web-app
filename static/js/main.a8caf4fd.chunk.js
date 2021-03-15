(this["webpackJsonpnews-viewer"]=this["webpackJsonpnews-viewer"]||[]).push([[0],{41:function(n,e,t){},66:function(n,e,t){"use strict";t.r(e);var r,a,c=t(0),i=t(31),o=t.n(i),s=(t(41),t(2)),l=t(8),b=t(9),d=t(13),m=t(1),u=[{name:"all",text:"\uc804\uccb4\ubcf4\uae30"},{name:"business",text:"\ube44\uc988\ub2c8\uc2a4"},{name:"entertainment",text:"\uc5d4\ud130\ud14c\uc778\uba3c\ud2b8"},{name:"health",text:"\uac74\uac15"},{name:"science",text:"\uacfc\ud559"},{name:"sports",text:"\uc2a4\ud3ec\uce20"},{name:"technology",text:"\uae30\uc220"}],j=b.a.div(r||(r=Object(l.a)(["\n  display: flex;\n  padding: 1rem;\n  width: 768px;\n  margin: 0 auto;\n  @media screen and (max-width: 768px) {\n    width: 100%;\n    overflow-x: auto;\n  }\n"]))),h=Object(b.a)(d.b)(a||(a=Object(l.a)(["\n  font-size: 1.125rem;\n  cursor: pointer;\n  white-space: pre;\n  text-decoration: none;\n  color: inherit;\n  padding-bottom: 0.25rem;\n\n  &:hover {\n    color: #495057;\n  }\n\n  &.active {\n    font-weight: 600;\n    border-bottom: 2px solid #22b8cf;\n    color: #22b8cf;\n    &:hover {\n      color: #3bc9db;\n    }\n  }\n\n  & + & {\n    margin-left: 1rem;\n  }\n"])));var p,x=function(n){return n.onSelect,n.category,Object(m.jsx)(j,{children:u.map((function(n){return Object(m.jsx)(h,{activeClassName:"active",exact:"all"===n.name,to:"all"===n.name?"/":"/".concat(n.name),children:n.text},n.name)}))})},f=t(11),g=b.a.div(p||(p=Object(l.a)(["\n  display: flex;\n  .thumbnail {\n    margin-right: 1rem;\n    img {\n      display: block;\n      width: 160px;\n      height: 100px;\n      object-fit: cover;\n    }\n  }\n  .contents {\n    h2 {\n      margin: 0;\n      a {\n        color: black;\n      }\n    }\n    p {\n      margin: 0;\n      line-height: 1.5;\n      margin-top: 0.5rem;\n      white-space: normal;\n    }\n  }\n  & + & {\n    margin-top: 3rem;\n  }\n"])));var v,O=function(n){var e=n.article,t=e.title,r=e.description,a=e.url,c=e.urlToImage;return Object(m.jsxs)(g,{children:[c&&Object(m.jsx)("div",{className:"thumbnail",children:Object(m.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("img",{src:c,alt:"thumbnail"})})}),Object(m.jsxs)("div",{className:"contents",children:[Object(m.jsx)("h2",{children:Object(m.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:t})}),Object(m.jsx)("p",{children:r})]})]})},w=t(35),y=t.n(w),k=t(20),S=t.n(k),N=t(36);var z=b.a.div(v||(v=Object(l.a)(["\n  box-sizing: border-box;\n  padding-bottom: 3rem;\n  width: 768px;\n  margin: 0 auto;\n  margin-top: 2rem;\n  @media screen and (max-width: 768px) {\n    width: 100%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n"])));var E=function(n){var e=n.category,t=function(n,e){var t=Object(c.useState)(!1),r=Object(f.a)(t,2),a=r[0],i=r[1],o=Object(c.useState)(null),s=Object(f.a)(o,2),l=s[0],b=s[1],d=Object(c.useState)(null),m=Object(f.a)(d,2),u=m[0],j=m[1];return Object(c.useEffect)((function(){!function(){var e=Object(N.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,n();case 4:t=e.sent,b(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),j(e.t0);case 11:i(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()()}),e),[a,l,u]}((function(){var n="all"===e?"":"&category=".concat(e);return y.a.get("https://newsapi.org/v2/top-headlines?country=kr".concat(n,"&apiKey=bc39cd7a914347aeb49f3273ed90a6af"))}),[e]),r=Object(f.a)(t,3),a=r[0],i=r[1],o=r[2];if(a)return Object(m.jsx)(z,{children:"\ub300\uae30 \uc911. . ."});if(!i)return null;if(o)return Object(m.jsx)(z,{children:"\uc5d0\ub7ec \ubc1c\uc0dd!"});var s=i.data.articles;return Object(m.jsx)(z,{children:s.map((function(n){return Object(m.jsx)(O,{article:n},n.url)}))})};var I=function(n){var e=n.match.params.category||"all";return Object(m.jsxs)("div",{children:[Object(m.jsx)(x,{}),Object(m.jsx)(E,{category:e})]})};var J=function(){return Object(m.jsx)(s.a,{path:"/:category?",component:I})};o.a.render(Object(m.jsx)(d.a,{children:Object(m.jsx)(J,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.a8caf4fd.chunk.js.map