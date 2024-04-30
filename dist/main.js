(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"\nbody {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: repeat(8, 1fr);\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n    background-color: #556F44;\n    font-family: Lexend Deca;\n    box-sizing: border-box;\n}\n\nheader {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1 ;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 80px 0 50px;\n    margin-top: 25px;\n}\n\n#logo {\n    display: flex;\n    justify-content: space-between;\n}\n\n.melon-icon {\n    padding-top: 10px;\n}\n\nheader button {\n    background-color: transparent;\n    border: 1.5px solid #C7DEB6;\n    font-size: 15px;\n    color: #f1f1f1;\n    padding: 15px 25px;\n    border-radius: 20px;\n    margin-bottom: 10px;\n}\n\nheader button:hover {\n    background-color: #C7DEB6;\n    color: #556F44;\n    font-weight: 500;\n}\n\nh1 {\n    color: #f1f1f1;\n    font-size: 30px;\n    font-weight: 500;\n    padding-left: 3px;\n    order: 2;\n}\n\nnav {\n    grid-row: 2 / -1;\n    min-width: 250px;\n    margin-top: 40px;\n}\n\n\n/* NAV 1 */\n#nav-1 {\n    margin-left: 60px;\n}\n\n#nav-1 button {\n    display: flex; \n    align-items: center;\n    width: 100%;\n    background-color: transparent;\n    border: none;\n    margin-bottom: 30px;\n    padding: 5px 0 5px 0;\n}\n\n#nav-1 button svg {\n    padding-right: 15px;\n    padding-left: 25px;\n    pointer-events: none;\n}\n\n#nav-1 button p {\n    color: #C7DEB6;\n    font-size: 18px;\n    font-weight: 400;\n    pointer-events: none; \n}\n\n#nav-1 button.active {\n   background-color: #f1f1f1 !important;\n   border-radius: 20px 0 0 20px;\n}\n\n.active p {\n    color: #556F44 !important;\n}\n\nbutton.active svg {\n    fill:#556F44;\n}\n\n\n/* NAV 2 */\n#nav-2 {\n    color: #f1f1f1;\n    border-top: 1px solid #C7DEB6;\n    margin: 0 15px 0 30px;\n}\n\n#nav-subhead {\n    font-size: 15px;\n    font-weight: 300;\n    margin-top: 20px;\n    color: #C7DEB6;\n}\n\nmain {\n    background-color: #f1f1f1;\n    grid-row: 1 / -1 ;\n    grid-column: 2 / -1;\n    margin: 120px 10px 10px 0;\n    border-radius: 45px;\n    overflow: auto;\n}\n\n",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],p=r.base?s[0]+r.base:s[0],d=a[p]||0,l="".concat(p," ").concat(d);a[p]=d+1;var u=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var v=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),p=0;p<a.length;p++){var d=t(a[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),s=t.n(c),p=t(540),d=t.n(p),l=t(113),u=t.n(l),f=t(208),v={};v.styleTagTransform=u(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),e()(f.A,v),f.A&&f.A.locals&&f.A.locals;const g=t.p+"150fbd464059d1dba11a.png",m=new Image(55,55);m.src=g;const h=document.getElementById("logo");m.classList.add("melon-icon"),h.appendChild(m);const b=[...document.querySelectorAll("button")];b.forEach((n=>{n.addEventListener("click",(n=>{x(n)}))}));const x=n=>{b.forEach((n=>{n.classList.contains("active")&&n.classList.remove("active")}));var e=n.target;console.log(e.firstChild),e.classList.add("active")}})()})();