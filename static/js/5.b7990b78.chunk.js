(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[5,8],{87:function(t,e,n){"use strict";n.r(e);n(0),n(89);var c=n(1);e.default=function(t){var e=t.title;return Object(c.jsx)("div",{className:"header",children:e})}},91:function(t,e,n){"use strict";n.r(e);var c=n(10),i=n(0),r=n(162),a=n(62),o=n.n(a),s=n(138),u=n(87),l=n(24),h=n(29),j=n(1),d={iconStyle:{height:75,width:75,margin:10,marginBottom:0},introTextContainer:{whiteSpace:"pre-wrap"}};e.default=function(t){var e,n=t.header,a=Object(i.useState)(null),f=Object(c.a)(a,2),b=f[0],p=f[1];return Object(i.useEffect)((function(){fetch(l.a.about,{method:"GET"}).then((function(t){return t.json()})).then((function(t){return p(t)})).catch((function(t){return t}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.default,{title:n}),b?Object(j.jsxs)(o.a,{children:[Object(j.jsx)("div",{className:"section-content-container",children:Object(j.jsx)(s.a,{children:(e=b.about,Object(j.jsx)("h4",{style:d.introTextContainer,children:Object(j.jsx)(r.a,{children:e})}))})}),Object(j.jsx)("img",{src:null===b||void 0===b?void 0:b.imageSource,alt:"profile",style:{height:"50%",margin:"0 auto"}})]}):Object(j.jsx)(h.default,{})]})}}}]);
//# sourceMappingURL=5.b7990b78.chunk.js.map