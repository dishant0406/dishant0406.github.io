(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[12],{103:function(e,n,t){},138:function(e,n,t){var r={"./About":[93,0,7],"./About.jsx":[93,0,7],"./Education":[94,11,4],"./Education.jsx":[94,11,4],"./Experience":[95,0,2,5],"./Experience.jsx":[95,0,2,5],"./FallbackSpinner":[29],"./FallbackSpinner.jsx":[29],"./Header":[89,10],"./Header.jsx":[89,10],"./Home":[46],"./Home.jsx":[46],"./NavBar":[42],"./NavBar.jsx":[42],"./Projects":[98,0,6],"./Projects.jsx":[98,0,6],"./Resume":[96,3,1],"./Resume.jsx":[96,3,1],"./Skills":[97,0,8],"./Skills.jsx":[97,0,8],"./Social":[47],"./Social.jsx":[47],"./ThemeToggler":[43],"./ThemeToggler.jsx":[43],"./projects/ProjectCard":[92,0,9],"./projects/ProjectCard.jsx":[92,0,9]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=138,e.exports=o},139:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(20),a=t.n(c),i=(t(103),t(91),t(104),t(32)),l=t(19),s=t(76),u=t(49),j=t(10),f=t(9),d=t(29),b=t(42),h=t(46),m=t(25),x=t(1);var v,O=function(){var e=Object(r.useState)(null),n=Object(j.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){fetch(m.a.routes,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return e}))}),[]),Object(x.jsxs)("div",{className:"MainApp",children:[Object(x.jsx)(b.default,{}),Object(x.jsx)("main",{className:"main",children:Object(x.jsx)(f.c,{children:Object(x.jsxs)(r.Suspense,{fallback:Object(x.jsx)(d.default,{}),children:[Object(x.jsx)(f.a,{exact:!0,path:"/",component:h.default}),c&&c.sections.map((function(e){var n=o.a.lazy((function(){return t(138)("./"+e.component)}));return Object(x.jsx)(f.a,{path:e.path,component:function(){return Object(x.jsx)(n,{header:e.headerTitle})}},e.headerTitle)}))]})})})]})},p=t(31),k=Object(l.c)(v||(v=Object(p.a)(["\n   body {\n     background: ",";\n     color: ",";\n     transition: all 0.50s linear; \n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.color})),C=t.p+"static/media/LightBack.9e307a2e.svg",g=t.p+"static/media/DarkBack.ec1a8ca8.svg",y={background:"url(".concat(C,") fixed"),color:"#121212",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212"},S={background:"url(".concat(g,") fixed"),color:"#eee",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#444",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#fefefe"};var B=function(){window.matchMedia=null;var e=Object(s.a)(!0);return Object(x.jsx)("div",{children:Object(x.jsx)(u.a.Provider,{value:{darkMode:e},children:Object(x.jsxs)(l.b,{theme:e.value?S:y,breakpoints:["xxxl","xxl","xl","lg","md","sm","xs","xxs"],children:[Object(x.jsx)(k,{}),Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(i.a,{children:Object(x.jsx)(O,{})})})]})})})},T=function(e){e&&e instanceof Function&&t.e(15).then(t.bind(null,177)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),c(e),a(e)}))};a.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(B,{})}),document.getElementById("root")),T()},25:function(e,n,t){"use strict";n.a={navbar:"profile/navbar.json",routes:"profile/routes.json",home:"profile/home.json",social:"profile/social.json",about:"profile/about.json",skills:"profile/skills.json",education:"profile/education.json",experiences:"profile/experiences.json",projects:"profile/projects.json",resume:"profile/resume.json"}},29:function(e,n,t){"use strict";t.r(n);t(0);var r=t(140),o=t(1),c={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};n.default=function(){return Object(o.jsx)("div",{style:c.spinnerContainerStyle,children:Object(o.jsx)(r.a,{animation:"grow"})})}},42:function(e,n,t){"use strict";t.r(n);var r,o,c=t(10),a=t(31),i=t(52),l=t(141),s=t(88),u=t(0),j=t(9),f=t(32),d=t(19),b=t(25),h=t(43),m=t(1),x=d.d.a(r||(r=Object(a.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor})),v=Object(d.d)(f.b)(o||(o=Object(a.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.navbarTheme.linkActiveColor})),O=Object(j.f)((function(){var e,n=Object(u.useContext)(d.a),t=Object(u.useState)(null),r=Object(c.a)(t,2),o=r[0],a=r[1],j=Object(u.useState)(!1),f=Object(c.a)(j,2),O=f[0],p=f[1];return Object(u.useEffect)((function(){fetch(b.a.navbar,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return e}))}),[]),Object(m.jsx)(i.a,{fixed:"top",expand:"md",bg:"dark",variant:"dark",className:"navbar-custom",expanded:O,children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(i.a.Brand,{href:"#",children:"Hello World < / >"}),Object(m.jsx)(i.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return p(!O)}}),Object(m.jsxs)(i.a.Collapse,{id:"responsive-navbar-nav",children:[Object(m.jsx)(s.a,{className:"me-auto"}),Object(m.jsx)(s.a,{children:o&&(null===(e=o.sections)||void 0===e?void 0:e.map((function(e,t){return"link"===(null===e||void 0===e?void 0:e.type)?Object(m.jsx)(x,{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:function(){return p(!1)},className:"navbar__link",theme:n,children:e.title},e.title):Object(m.jsx)(v,{onClick:function(){return p(!1)},exact:0===t,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,theme:n,children:e.title},e.title)})))}),Object(m.jsx)(h.default,{onClick:function(){return p(!1)}})]})]})})}));n.default=O},43:function(e,n,t){"use strict";t.r(n);t(0);var r=t(78),o=t.n(r),c=t(49),a=t(1);function i(e){var n=e.onClick;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(c.a.Consumer,{children:function(e){return Object(a.jsx)("div",{style:{marginBottom:8},children:Object(a.jsx)(o.a,{onChange:function(){return e.darkMode.toggle(),void n()},checked:e.darkMode.value,size:50})})}})})}i.defaultProps={onClick:function(){}},n.default=i},46:function(e,n,t){"use strict";t.r(n);var r=t(10),o=t(0),c=t(85),a=t.n(c),i=t(65),l=t.n(i),s=t(25),u=t(47),j=t(29),f=t(1),d={nameStyle:{fontSize:"5em"},inlineChild:{display:"inline-block"},mainContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}};n.default=function(){var e=Object(o.useState)(null),n=Object(r.a)(e,2),t=n[0],c=n[1];return Object(o.useEffect)((function(){fetch(s.a.home,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return e}))}),[]),t?Object(f.jsx)(l.a,{children:Object(f.jsxs)("div",{style:d.mainContainer,children:[Object(f.jsx)("h1",{style:d.nameStyle,children:null===t||void 0===t?void 0:t.name}),Object(f.jsxs)("div",{style:{flexDirection:"row"},children:[Object(f.jsx)("h2",{style:d.inlineChild,children:"I'm\xa0"}),Object(f.jsx)(a.a,{options:{loop:!0,autoStart:!0,strings:null===t||void 0===t?void 0:t.roles}})]}),Object(f.jsx)(u.default,{})]})}):Object(f.jsx)(j.default,{})}},47:function(e,n,t){"use strict";t.r(n);var r=t(10),o=t(0),c=t(86),a=t(19),i=t(25),l=t(1),s={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10}};n.default=function(){var e=Object(o.useContext)(a.a),n=Object(o.useState)(null),t=Object(r.a)(n,2),u=t[0],j=t[1];return Object(o.useEffect)((function(){fetch(i.a.social,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return j(e)})).catch((function(e){return e}))}),[]),Object(l.jsx)("div",{className:"social",children:u?u.social.map((function(n){return Object(l.jsx)(c.SocialIcon,{style:s.iconStyle,url:n.href,network:n.network,bgColor:e.socialIconBgColor,target:"_blank",rel:"noopener"},n.network)})):null})}},49:function(e,n,t){"use strict";var r=t(0),o=t.n(r).a.createContext();n.a=o},91:function(e,n,t){}},[[139,13,14]]]);
//# sourceMappingURL=main.e35169f5.chunk.js.map