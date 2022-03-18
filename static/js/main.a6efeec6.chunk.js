(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[10],{100:function(e,n,t){},135:function(e,n,t){var r={"./About":[91,0,5],"./About.jsx":[91,0,5],"./Education":[92,9,2],"./Education.jsx":[92,9,2],"./Experience":[93,0,1,3],"./Experience.jsx":[93,0,1,3],"./FallbackSpinner":[29],"./FallbackSpinner.jsx":[29],"./Header":[87,8],"./Header.jsx":[87,8],"./Home":[46],"./Home.jsx":[46],"./NavBar":[42],"./NavBar.jsx":[42],"./Projects":[95,0,4],"./Projects.jsx":[95,0,4],"./Skills":[94,0,6],"./Skills.jsx":[94,0,6],"./Social":[47],"./Social.jsx":[47],"./ThemeToggler":[43],"./ThemeToggler.jsx":[43],"./projects/ProjectCard":[90,0,7],"./projects/ProjectCard.jsx":[90,0,7]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=135,e.exports=o},136:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(20),a=t.n(c),i=(t(100),t(89),t(101),t(32)),l=t(19),s=t(74),u=t(49),f=t(10),j=t(9),d=t(29),b=t(42),h=t(46),m=t(24),x=t(1);var v,O=function(){var e=Object(r.useState)(null),n=Object(f.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){fetch(m.a.routes,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return e}))}),[]),Object(x.jsxs)("div",{className:"MainApp",children:[Object(x.jsx)(b.default,{}),Object(x.jsx)("main",{className:"main",children:Object(x.jsx)(j.c,{children:Object(x.jsxs)(r.Suspense,{fallback:Object(x.jsx)(d.default,{}),children:[Object(x.jsx)(j.a,{exact:!0,path:"/",component:h.default}),c&&c.sections.map((function(e){var n=o.a.lazy((function(){return t(135)("./"+e.component)}));return Object(x.jsx)(j.a,{path:e.path,component:function(){return Object(x.jsx)(n,{header:e.headerTitle})}},e.headerTitle)}))]})})})]})},p=t(31),k=Object(l.c)(v||(v=Object(p.a)(["\n   body {\n     background: ",";\n     color: ",";\n     transition: all 0.50s linear; \n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.color})),C=t.p+"static/media/LightBack.9e307a2e.svg",g=t.p+"static/media/DarkBack.ec1a8ca8.svg",y={background:"url(".concat(C,") fixed"),color:"#121212",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212"},S={background:"url(".concat(g,") fixed"),color:"#eee",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#444",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#fefefe"};var B=function(){window.matchMedia=null;var e=Object(s.a)(!0);return Object(x.jsx)("div",{children:Object(x.jsx)(u.a.Provider,{value:{darkMode:e},children:Object(x.jsxs)(l.b,{theme:e.value?S:y,breakpoints:["xxxl","xxl","xl","lg","md","sm","xs","xxs"],children:[Object(x.jsx)(k,{}),Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(i.a,{children:Object(x.jsx)(O,{})})})]})})})},T=function(e){e&&e instanceof Function&&t.e(13).then(t.bind(null,161)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),c(e),a(e)}))};a.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(B,{})}),document.getElementById("root")),T()},24:function(e,n,t){"use strict";n.a={navbar:"profile/navbar.json",routes:"profile/routes.json",home:"profile/home.json",social:"profile/social.json",about:"profile/about.json",skills:"profile/skills.json",education:"profile/education.json",experiences:"profile/experiences.json",projects:"profile/projects.json"}},29:function(e,n,t){"use strict";t.r(n);t(0);var r=t(137),o=t(1),c={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};n.default=function(){return Object(o.jsx)("div",{style:c.spinnerContainerStyle,children:Object(o.jsx)(r.a,{animation:"grow"})})}},42:function(e,n,t){"use strict";t.r(n);var r,o,c=t(10),a=t(31),i=t(52),l=t(138),s=t(86),u=t(0),f=t(9),j=t(32),d=t(19),b=t(24),h=t(43),m=t(1),x=d.d.a(r||(r=Object(a.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor})),v=Object(d.d)(j.b)(o||(o=Object(a.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.navbarTheme.linkActiveColor})),O=Object(f.f)((function(){var e,n=Object(u.useContext)(d.a),t=Object(u.useState)(null),r=Object(c.a)(t,2),o=r[0],a=r[1],f=Object(u.useState)(!1),j=Object(c.a)(f,2),O=j[0],p=j[1];return Object(u.useEffect)((function(){fetch(b.a.navbar,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return e}))}),[]),Object(m.jsx)(i.a,{fixed:"top",expand:"md",bg:"dark",variant:"dark",className:"navbar-custom",expanded:O,children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(i.a.Brand,{href:"#",children:"Hello World < / >"}),Object(m.jsx)(i.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return p(!O)}}),Object(m.jsxs)(i.a.Collapse,{id:"responsive-navbar-nav",children:[Object(m.jsx)(s.a,{className:"me-auto"}),Object(m.jsx)(s.a,{children:o&&(null===(e=o.sections)||void 0===e?void 0:e.map((function(e,t){return"link"===(null===e||void 0===e?void 0:e.type)?Object(m.jsx)(x,{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:function(){return p(!1)},className:"navbar__link",theme:n,children:e.title},e.title):Object(m.jsx)(v,{onClick:function(){return p(!1)},exact:0===t,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,theme:n,children:e.title},e.title)})))}),Object(m.jsx)(h.default,{onClick:function(){return p(!1)}})]})]})})}));n.default=O},43:function(e,n,t){"use strict";t.r(n);t(0);var r=t(76),o=t.n(r),c=t(49),a=t(1);function i(e){var n=e.onClick;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(c.a.Consumer,{children:function(e){return Object(a.jsx)("div",{style:{marginBottom:8},children:Object(a.jsx)(o.a,{onChange:function(){return e.darkMode.toggle(),void n()},checked:e.darkMode.value,size:50})})}})})}i.defaultProps={onClick:function(){}},n.default=i},46:function(e,n,t){"use strict";t.r(n);var r=t(10),o=t(0),c=t(83),a=t.n(c),i=t(62),l=t.n(i),s=t(24),u=t(47),f=t(29),j=t(1),d={nameStyle:{fontSize:"5em"},inlineChild:{display:"inline-block"},mainContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}};n.default=function(){var e=Object(o.useState)(null),n=Object(r.a)(e,2),t=n[0],c=n[1];return Object(o.useEffect)((function(){fetch(s.a.home,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return e}))}),[]),t?Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{style:d.mainContainer,children:[Object(j.jsx)("h1",{style:d.nameStyle,children:null===t||void 0===t?void 0:t.name}),Object(j.jsxs)("div",{style:{flexDirection:"row"},children:[Object(j.jsx)("h2",{style:d.inlineChild,children:"I'm\xa0"}),Object(j.jsx)(a.a,{options:{loop:!0,autoStart:!0,strings:null===t||void 0===t?void 0:t.roles}})]}),Object(j.jsx)(u.default,{})]})}):Object(j.jsx)(f.default,{})}},47:function(e,n,t){"use strict";t.r(n);var r=t(10),o=t(0),c=t(84),a=t(19),i=t(24),l=t(1),s={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10}};n.default=function(){var e=Object(o.useContext)(a.a),n=Object(o.useState)(null),t=Object(r.a)(n,2),u=t[0],f=t[1];return Object(o.useEffect)((function(){fetch(i.a.social,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return f(e)})).catch((function(e){return e}))}),[]),Object(l.jsx)("div",{className:"social",children:u?u.social.map((function(n){return Object(l.jsx)(c.SocialIcon,{style:s.iconStyle,url:n.href,network:n.network,bgColor:e.socialIconBgColor,target:"_blank",rel:"noopener"},n.network)})):null})}},49:function(e,n,t){"use strict";var r=t(0),o=t.n(r).a.createContext();n.a=o},89:function(e,n,t){}},[[136,11,12]]]);
//# sourceMappingURL=main.a6efeec6.chunk.js.map