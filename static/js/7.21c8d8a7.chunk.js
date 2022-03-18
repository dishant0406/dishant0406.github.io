(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[7],{157:function(e,a,t){"use strict";var c=t(2),r=t(10),n=t(3),s=t(4),o=t.n(s),i=t(0),b=t(38),d=t(7),l=t(1),j=["as","bsPrefix","variant","size","active","className"],f=i.forwardRef((function(e,a){var t=e.as,s=e.bsPrefix,i=e.variant,f=e.size,O=e.active,u=e.className,p=Object(n.a)(e,j),x=Object(d.b)(s,"btn"),m=Object(b.b)(Object(c.a)({tagName:t},p)),v=Object(r.a)(m,2),y=v[0],g=v[1].tagName;return Object(l.jsx)(g,Object(c.a)(Object(c.a)(Object(c.a)({},y),p),{},{ref:a,className:o()(u,x,O&&"active",i&&"".concat(x,"-").concat(i),f&&"".concat(x,"-").concat(f),p.href&&p.disabled&&"disabled")}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=f},90:function(e,a,t){"use strict";t.r(a);var c=t(2),r=t(0),n=t(10),s=t(3),o=t(4),i=t.n(o),b=t(7),d=t(1),l=["as","bsPrefix","className"],j=["className"];var f=r.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,r=e.className,n=Object(s.a)(e,l);t=Object(b.b)(t,"col");var o=Object(b.a)(),d=[],j=[];return o.forEach((function(e){var a,c,r,s=n[e];delete n[e],"object"===typeof s&&null!=s?(a=s.span,c=s.offset,r=s.order):a=s;var o="xs"!==e?"-".concat(e):"";a&&d.push(!0===a?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(a)),null!=r&&j.push("order".concat(o,"-").concat(r)),null!=c&&j.push("offset".concat(o,"-").concat(c))})),[Object(c.a)(Object(c.a)({},n),{},{className:i.a.apply(void 0,[r].concat(d,j))}),{as:a,bsPrefix:t,spans:d}]}(e),r=Object(n.a)(t,2),o=r[0],f=o.className,O=Object(s.a)(o,j),u=r[1],p=u.as,x=void 0===p?"div":p,m=u.bsPrefix,v=u.spans;return Object(d.jsx)(x,Object(c.a)(Object(c.a)({},O),{},{ref:a,className:i()(f,!v.length&&m)}))}));f.displayName="Col";var O=f,u=t(25),p=t(64),x=["bsPrefix","className","variant","as"],m=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.variant,o=e.as,l=void 0===o?"img":o,j=Object(s.a)(e,x),f=Object(b.b)(t,"card-img");return Object(d.jsx)(l,Object(c.a)({ref:a,className:i()(n?"".concat(f,"-").concat(n):f,r)},j))}));m.displayName="CardImg";var v=m,y=t(65),g=["bsPrefix","className","as"],h=r.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,l=void 0===o?"div":o,j=Object(s.a)(e,g),f=Object(b.b)(t,"card-header"),O=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return Object(d.jsx)(y.a.Provider,{value:O,children:Object(d.jsx)(l,Object(c.a)(Object(c.a)({ref:a},j),{},{className:i()(n,f)}))})}));h.displayName="CardHeader";var N=h,P=["bsPrefix","className","bg","text","border","body","children","as"],S=Object(p.a)("h5"),C=Object(p.a)("h6"),k=Object(u.a)("card-body"),w=Object(u.a)("card-title",{Component:S}),B=Object(u.a)("card-subtitle",{Component:C}),T=Object(u.a)("card-link",{Component:"a"}),R=Object(u.a)("card-text",{Component:"p"}),I=Object(u.a)("card-footer"),V=Object(u.a)("card-img-overlay"),z=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.bg,o=e.text,l=e.border,j=e.body,f=e.children,O=e.as,u=void 0===O?"div":O,p=Object(s.a)(e,P),x=Object(b.b)(t,"card");return Object(d.jsx)(u,Object(c.a)(Object(c.a)({ref:a},p),{},{className:i()(r,x,n&&"bg-".concat(n),o&&"text-".concat(o),l&&"border-".concat(l)),children:j?Object(d.jsx)(k,{children:f}):f}))}));z.displayName="Card",z.defaultProps={body:!1};var F=Object.assign(z,{Img:v,Title:w,Subtitle:B,Body:k,Link:T,Text:R,Header:N,Footer:I,ImgOverlay:V}),H=t(157),J=["bsPrefix","bg","pill","text","className","as"],L=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bg,n=e.pill,o=e.text,l=e.className,j=e.as,f=void 0===j?"span":j,O=Object(s.a)(e,J),u=Object(b.b)(t,"badge");return Object(d.jsx)(f,Object(c.a)(Object(c.a)({ref:a},O),{},{className:i()(l,u,n&&"rounded-pill",o&&"text-".concat(o),r&&"bg-".concat(r))}))}));L.displayName="Badge",L.defaultProps={bg:"primary",pill:!1};var A=L,D=t(19),E=t(162),M={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};a.default=function(e){var a,t,n=Object(r.useContext)(D.a),s=e.project;return Object(d.jsx)(O,{children:Object(d.jsxs)(F,{style:Object(c.a)(Object(c.a)({},M.cardStyle),{},{backgroundColor:n.cardBackground,borderColor:n.cardBorderColor}),text:n.bsSecondaryVariant,children:[Object(d.jsx)(F.Img,{variant:"top",src:null===s||void 0===s?void 0:s.image}),Object(d.jsxs)(F.Body,{children:[Object(d.jsx)(F.Title,{style:M.cardTitleStyle,children:s.title}),Object(d.jsx)(F.Text,{style:M.cardTextStyle,children:(t=s.bodyText,Object(d.jsx)(E.a,{children:t}))})]}),Object(d.jsx)(F.Body,{children:null===s||void 0===s||null===(a=s.links)||void 0===a?void 0:a.map((function(e){return Object(d.jsx)(H.a,{style:M.buttonStyle,variant:"outline-"+n.bsSecondaryVariant,onClick:function(){return window.open(e.href,"_blank")},children:e.text},e.href)}))}),s.tags&&Object(d.jsx)(F.Footer,{style:{backgroundColor:n.cardFooterBackground},children:s.tags.map((function(e){return Object(d.jsx)(A,{pill:!0,bg:n.bsSecondaryVariant,text:n.bsPrimaryVariant,style:M.badgeStyle,children:e},e)}))})]})})}}}]);
//# sourceMappingURL=7.21c8d8a7.chunk.js.map