(this.webpackJsonpbasicproject=this.webpackJsonpbasicproject||[]).push([[0],[,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(1),i=t.n(l),n=t(4),s=t.n(n),o=(t(9),t(3)),r=(t(10),t(11),t(0));var c=function(){return Object(r.jsx)("header",{className:"app-header",children:Object(r.jsx)("img",{className:"app-header-logo",src:"/images/logo.png"})})};t(13);var u=function(e){var a=e.football,t=e.onFootballClick;return Object(r.jsxs)("div",{className:"football-item",children:[Object(r.jsx)("img",{src:a.thumbnailUrl,onClick:function(){t(a)}}),Object(r.jsxs)("h4",{children:[" ",a.title," "]})]})};t(14);var m=function(e){var a=e.football,t=e.onBigClick;return Object(r.jsxs)("div",{className:"football-post",children:[Object(r.jsx)("div",{className:"football-post-bg",onClick:t}),Object(r.jsxs)("div",{className:"football-post-content",children:[Object(r.jsx)("img",{src:a.thumbnailUrl}),Object(r.jsxs)("h4",{children:[" ",a.title]})]})]})},b=[{title:"Hansi Flick (Coach)",thumbnailUrl:"/images/Hansi Flick.webp"},{title:"1 Manuel Neuer (GK)",thumbnailUrl:"/images/Manuel Neuer.jpeg"},{title:"35 Alexander Nubel (GK)",thumbnailUrl:"/images/Alexander Nubel.jpg"},{title:"39 Ron-Thorben Hoffmann (GK)",thumbnailUrl:"/images/Ron-Thorben Hoffmann.jpg"},{title:"4 Niklas Sule (DF)",thumbnailUrl:"/images/Niklas Sule.jpg"},{title:"5 Benjamin Pavard (DF)",thumbnailUrl:"/images/Benjamin Pavard.jpg"},{title:"17 Jerome Boateng (DF)",thumbnailUrl:"/images/Jerome Boateng.jpg"},{title:"19 Alphonso Davies (DF)",thumbnailUrl:"/images/Alphonso Davies.jpg"},{title:"20 Bouna Sarr (DF)",thumbnailUrl:"/images/Bouna Sarr.jpg"},{title:"21 Lucas Hernandez (DF)",thumbnailUrl:"/images/Lucas Hernandez.jpg"},{title:"23 Tanguy Nanzou (DF)",thumbnailUrl:"/images/Tanguy Nanzou.jpg"},{title:"27 David Alaba (DF)",thumbnailUrl:"/images/David Alaba.jpg"},{title:"6 Joshua Kimmich (MF)",thumbnailUrl:"/images/Joshua Kimmich.jpeg"},{title:"8 Javi Martinez (MF)",thumbnailUrl:"/images/Javi Martinez.jpg"},{title:"18 Leon Goretzka (MF)",thumbnailUrl:"/images/Leon Goretzka.webp"},{title:"22 Marc Roca (MF)",thumbnailUrl:"/images/Marc Roca.jpeg"},{title:"24 Corentin Tolisso (MF)",thumbnailUrl:"/images/Corentin Tolisso.jpg"},{title:"28 Tiago Dantas (MF)",thumbnailUrl:"/images/Tiago Dantas.webp"},{title:"7 Serge Gnabry (FW)",thumbnailUrl:"/images/Serge Gnabry.jpg"},{title:"9 Robert Lewandowski (FW)",thumbnailUrl:"/images/Robert Lewandowski.jpg"},{title:"10 Leroy Sane (FW)",thumbnailUrl:"/images/Leroy Sane.jpg"},{title:"11 Douglas Costa (FW)",thumbnailUrl:"/images/Douglas Costa.jpg"},{title:"13 Choupo Moting (FW)",thumbnailUrl:"/images/Choupo Moting.jpeg"},{title:"25 Thomas Muller (FW)",thumbnailUrl:"/images/Thomas Muller.jpg"},{title:"29 Kingsley Coman (FW)",thumbnailUrl:"/images/Kingsley Coman.jpg"},{title:"42 Jamal Musiala  (FW)",thumbnailUrl:"/images/Jamal Musiala .jpg"}];t(15);var g=function(e){var a=e.value,t=e.onvaluechange;return Object(r.jsx)("div",{className:"app-search",children:Object(r.jsx)("input",{className:"app-search-input",type:"text",placeholder:"Search Football Player",value:a,onChange:function(e){t(e.target.value)}})})};var j=function(){var e=Object(l.useState)(null),a=Object(o.a)(e,2),t=a[0],i=a[1],n=Object(l.useState)(""),s=Object(o.a)(n,2),j=s[0],h=s[1];function p(e){i(e)}var d=b.filter((function(e){return e.title.includes(j)})).map((function(e,a){return Object(r.jsx)(u,{football:e,onFootballClick:p},a)})),f=null;return t&&(f=Object(r.jsx)(m,{football:t,onBigClick:function(){i(null)}})),Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)(c,{}),Object(r.jsx)("section",{className:"app-section",children:Object(r.jsxs)("div",{className:"app-container",children:[Object(r.jsx)(g,{value:j,onvaluechange:h}),Object(r.jsx)("div",{className:"app-grid",children:d})]})}),f]})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(a){var t=a.getCLS,l=a.getFID,i=a.getFCP,n=a.getLCP,s=a.getTTFB;t(e),l(e),i(e),n(e),s(e)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),h()}],[[16,1,2]]]);
//# sourceMappingURL=main.1abe1fb4.chunk.js.map