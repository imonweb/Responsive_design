(()=>{"use strict";var n,r,e,t={170:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(15),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,":root {\n  --clr-primary-300: #f3eed9;\n  --clr-primary-400: #824936;\n  \n  --clr-neutral-100: #fff;\n  --clr-neutral-900: #222c2a;\n\n  --ff-primary: 'Roboto', sans-serif;\n  --ff-accent: 'Playfair Display', sans-serif;\n}\n\n\n*,\n*::before,\n*::after{\n  box-sizing: border-box;\n}\n\nbody {\n  color: var(--clr-primary-400);\n  font-family: var(--ff-primary);\n  font-weight: 400;\n  font-size: 1.3125rem;\n  line-height: 1.6;\n}\n\nbody,\nh1,\nh2,\nh3,\np {\n  margin: 0;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n}\n\nh1, h2, h3 { \n  font-weight: 900;\n  line-height: 1; \n  font-family: var(--ff-accent);\n}\n\nh2, h3, p {\n  margin-bottom: 1em;\n}\n\n.text-center, header, section {\n  text-align: center;\n}\n\nheader, section {\n  padding: 3rem 0;\n}\n\n@media (min-width: 40em){\n  header,\n  section {\n    padding: 7em 0;\n  }\n}\n\n.container {\n  margin-inline: auto;\n  width: min(90%, 70.5rem);\n}\n\n.split {\n  display: flex;\n  flex-direction: column;\n}\n\n \n@media (min-width: 40em){\n  .split {\n    flex-direction: row;\n  }\n  .split > * {\n    flex-basis: 100%;\n  }\n  .split > * + * {\n    margin-left: 2em;\n  }\n}\n \n\n.container--narrow {\n  max-width: 34rem;\n}\n\n.bg-light {background-color: var(--clr-primary-300);}\n.bg-primary {\n  color: var(--clr-neutral-100);\n  background-color: var(--clr-primary-400);\n}\n.bg-dark {\n  color: var(--clr-neutral-100);\n  background-color: var(--clr-neutral-900);\n}\n\n.bg-primary h2, \n.bg-dark h2 {\n  color: var(--clr-primary-200);\n}","",{version:3,sources:["webpack://./css/styles.css"],names:[],mappings:"AAAA;EACE,0BAA0B;EAC1B,0BAA0B;;EAE1B,uBAAuB;EACvB,0BAA0B;;EAE1B,kCAAkC;EAClC,2CAA2C;AAC7C;;;AAGA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;EAC7B,8BAA8B;EAC9B,gBAAgB;EAChB,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;;;;;EAKE,SAAS;AACX;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;;IAEE,cAAc;EAChB;AACF;;AAEA;EACE,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;;AAGA;EACE;IACE,mBAAmB;EACrB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;AACF;;;AAGA;EACE,gBAAgB;AAClB;;AAEA,WAAW,wCAAwC,CAAC;AACpD;EACE,6BAA6B;EAC7B,wCAAwC;AAC1C;AACA;EACE,6BAA6B;EAC7B,wCAAwC;AAC1C;;AAEA;;EAEE,6BAA6B;AAC/B",sourcesContent:[":root {\n  --clr-primary-300: #f3eed9;\n  --clr-primary-400: #824936;\n  \n  --clr-neutral-100: #fff;\n  --clr-neutral-900: #222c2a;\n\n  --ff-primary: 'Roboto', sans-serif;\n  --ff-accent: 'Playfair Display', sans-serif;\n}\n\n\n*,\n*::before,\n*::after{\n  box-sizing: border-box;\n}\n\nbody {\n  color: var(--clr-primary-400);\n  font-family: var(--ff-primary);\n  font-weight: 400;\n  font-size: 1.3125rem;\n  line-height: 1.6;\n}\n\nbody,\nh1,\nh2,\nh3,\np {\n  margin: 0;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n}\n\nh1, h2, h3 { \n  font-weight: 900;\n  line-height: 1; \n  font-family: var(--ff-accent);\n}\n\nh2, h3, p {\n  margin-bottom: 1em;\n}\n\n.text-center, header, section {\n  text-align: center;\n}\n\nheader, section {\n  padding: 3rem 0;\n}\n\n@media (min-width: 40em){\n  header,\n  section {\n    padding: 7em 0;\n  }\n}\n\n.container {\n  margin-inline: auto;\n  width: min(90%, 70.5rem);\n}\n\n.split {\n  display: flex;\n  flex-direction: column;\n}\n\n \n@media (min-width: 40em){\n  .split {\n    flex-direction: row;\n  }\n  .split > * {\n    flex-basis: 100%;\n  }\n  .split > * + * {\n    margin-left: 2em;\n  }\n}\n \n\n.container--narrow {\n  max-width: 34rem;\n}\n\n.bg-light {background-color: var(--clr-primary-300);}\n.bg-primary {\n  color: var(--clr-neutral-100);\n  background-color: var(--clr-primary-400);\n}\n.bg-dark {\n  color: var(--clr-neutral-100);\n  background-color: var(--clr-neutral-900);\n}\n\n.bg-primary h2, \n.bg-dark h2 {\n  color: var(--clr-primary-200);\n}"],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var A=[].concat(n[c]);t&&o[A[0]]||(e&&(A[2]?A[2]="".concat(e," and ").concat(A[2]):A[2]=e),r.push(A))}},r}},15:n=>{function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}n.exports=function(n){var e,t,o=(t=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var e=[],t=!0,o=!1,a=void 0;try{for(var i,c=n[Symbol.iterator]();!(t=(i=c.next()).done)&&(e.push(i.value),!r||e.length!==r);t=!0);}catch(n){o=!0,a=n}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return e}}(e,t)||function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),l="/*# ".concat(A," */"),s=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(s).concat([l]).join("\n")}return[a].join("\n")}},379:(n,r,e)=>{var t,o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),a=[];function i(n){for(var r=-1,e=0;e<a.length;e++)if(a[e].identifier===n){r=e;break}return r}function c(n,r){for(var e={},t=[],o=0;o<n.length;o++){var c=n[o],A=r.base?c[0]+r.base:c[0],l=e[A]||0,s="".concat(A," ").concat(l);e[A]=l+1;var f=i(s),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(a[f].references++,a[f].updater(u)):a.push({identifier:s,updater:p(u,r),references:1}),t.push(s)}return t}function A(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var a=e.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var l,s=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function f(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=s(r,o);else{var a=document.createTextNode(o),i=n.childNodes;i[r]&&n.removeChild(i[r]),i.length?n.insertBefore(a,i[r]):n.appendChild(a)}}function u(n,r,e){var t=e.css,o=e.media,a=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var d=null,m=0;function p(n,r){var e,t,o;if(r.singleton){var a=m++;e=d||(d=A(r)),t=f.bind(null,e,a,!1),o=f.bind(null,e,a,!0)}else e=A(r),t=u.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=i(e[t]);a[o].references--}for(var A=c(n,r),l=0;l<e.length;l++){var s=i(e[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}e=A}}}}},o={};function a(n){var r=o[n];if(void 0!==r)return r.exports;var e=o[n]={id:n,exports:{}};return t[n](e,e.exports,a),e.exports}a.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return a.d(r,{a:r}),r},a.d=(n,r)=>{for(var e in r)a.o(r,e)&&!a.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},a.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),n=a(379),r=a.n(n),e=a(170),r()(e.Z,{insert:"head",singleton:!1}),e.Z.locals})();
//# sourceMappingURL=myBundle.js.map