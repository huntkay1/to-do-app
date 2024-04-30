(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>p});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"\nbody {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: repeat(8, 1fr);\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n    background-color: #556F44;\n    font-family: Lexend Deca;\n    box-sizing: border-box;\n}\n\nheader {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1 ;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 80px 0 50px;\n    margin-top: 25px;\n}\n\n#logo {\n    display: flex;\n    justify-content: space-between;\n}\n\n.melon-icon {\n    padding-top: 10px;\n}\n\nheader button {\n    background-color: transparent;\n    border: 1.5px solid #C7DEB6;\n    font-size: 15px;\n    color: #f1f1f1;\n    padding: 15px 25px;\n    border-radius: 20px;\n    margin-bottom: 10px;\n}\n\nheader button:hover {\n    background-color: #C7DEB6;\n    color: #556F44;\n    font-weight: 500;\n}\n\nh1 {\n    color: #f1f1f1;\n    font-size: 30px;\n    font-weight: 500;\n    padding-left: 3px;\n    order: 2;\n}\n\nnav {\n    grid-row: 2 / -1;\n    min-width: 250px;\n    margin-top: 40px;\n}\n\n\n/* NAV 1 */\n#nav-1 {\n    margin-left: 60px;\n}\n\n#nav-1 button {\n    display: flex; \n    align-items: center;\n    width: 100%;\n    background-color: transparent;\n    border: none;\n    margin-bottom: 30px;\n    padding: 5px 0 5px 0;\n}\n\n#nav-1 button svg {\n    padding-right: 15px;\n    padding-left: 25px;\n    pointer-events: none;\n}\n\n#nav-1 button p {\n    color: #C7DEB6;\n    font-size: 18px;\n    font-weight: 400;\n    pointer-events: none; \n}\n\n#nav-1 button.active {\n   background-color: #f1f1f1 !important;\n   border-radius: 20px 0 0 20px;\n}\n\n.active p {\n    color: #556F44 !important;\n}\n\nbutton.active svg {\n    fill:#556F44;\n}\n\n\n/* NAV 2 */\n#nav-2 {\n    color: #f1f1f1;\n    border-top: 1px solid #C7DEB6;\n    margin: 0 15px 0 30px;\n}\n\n#nav-subhead {\n    font-size: 15px;\n    font-weight: 300;\n    margin-top: 20px;\n    color: #C7DEB6;\n    margin-left: -5px;\n}\n\n#add-proj {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: none;\n    background-color: transparent;\n    font-size: 18px;\n    font-weight: 400;\n    color: #f1f1f1;\n    width: 100%;\n    max-width: 250px;\n    margin-left: 15px;\n    padding-right: 30px;\n}\n\n#add-proj:hover {\n    color: #d6ded4;\n}\n\n#add-proj:hover #plus-icon {\n    stroke: #d6ded4;\n}\n\nmain {\n    background-color: #f1f1f1;\n    grid-row: 1 / -1 ;\n    grid-column: 2 / -1;\n    margin: 120px 10px 10px 0;\n    border-radius: 45px;\n    overflow: auto;\n}\n\n/* POP-UP FORM */\ndialog {\n    height: 550px;\n    width: 500px;\n    background-color: #f1f1f1;\n    border: none;\n    border-radius: 25px;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    padding: 20px 30px 20px 30px;\n}\n\n#close {\n    font-size: 20px;\n    font-weight: 500;\n    border: none;\n    background-color: transparent;\n    margin: 12px;\n    align-self: flex-end;\n    color:#111509;\n    outline: none;\n}\n\ninput {\n    margin-bottom: 35px;\n    font-size: 15px;\n    height: 20px;\n    border: 0;\n    border-bottom: 1.5px solid #111509;\n    padding-left: 2px;\n    padding-bottom: 2px;\n    background-color: #f1f1f1;\n}\n\ninput[type=textarea] {\n    border: 1.5px solid #111509;\n    border-radius: 5px;\n    padding: 2px 5px 80px 5px;\n}\n\nselect {\n    border: 1.5px solid #111509;\n    padding: 2px 5px 80px 5px;\n    margin-bottom: 35px;\n    margin-top: 5px;\n    outline: 0;\n    background: #f1f1f1;\n    padding: 5px;\n}\n\ninput:focus {\n    outline: none;\n}\n\n.input-pair {\n    display: flex;\n    flex-direction: column;\n}\n\nlabel {\n    margin-bottom: 5px;\n    color:#111509;\n    font-size: 13px;\n}\n\n#submit {\n    background-color: #556F44;\n    border: none;\n    color:#f1f1f1;\n    border-radius: 10px;\n    height: 50px;\n    font-size: 15px;\n    font-weight: 400;\n}\n\n#submit:hover {\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n",""]);const p=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var p=0;p<this.length;p++){var c=this[p][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],p=0;p<n.length;p++){var c=n[p],d=o.base?c[0]+o.base:c[0],s=a[d]||0,l="".concat(d," ").concat(s);a[d]=s+1;var u=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=r(f,o);o.byIndex=p,e.splice(p,0,{identifier:l,updater:g,references:1})}i.push(l)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var p=t(a[i]);e[p].references--}for(var c=o(n,r),d=0;d<a.length;d++){var s=t(a[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),a=t(659),i=t.n(a),p=t(56),c=t.n(p),d=t(540),s=t.n(d),l=t(113),u=t.n(l),f=t(208),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=s(),e()(f.A,g),f.A&&f.A.locals&&f.A.locals;const x=t.p+"150fbd464059d1dba11a.png",m=new Image(55,55);m.src=x;const v=document.getElementById("logo");m.classList.add("melon-icon"),v.appendChild(m);const b=[...document.getElementsByClassName("nav-1")],h=document.getElementById("add-task"),y=document.querySelector("dialog"),w=document.getElementById("close");b.forEach((n=>{n.addEventListener("click",(n=>{E(n)}))}));const E=n=>{b.forEach((n=>{n.classList.contains("active")&&n.classList.remove("active")}));var e=n.target;console.log(e.firstChild),e.classList.add("active")};h.addEventListener("click",(()=>{y.showModal()})),w.addEventListener("click",(()=>{y.close(),document.querySelector("form").reset()}))})()})();