(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>p});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"\nbody {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: repeat(8, 1fr);\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n    background-color: #556F44;\n    font-family: Lexend Deca;\n    box-sizing: border-box;\n}\n\nheader {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1 ;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 80px 0 50px;\n    margin-top: 25px;\n}\n\n#logo {\n    display: flex;\n    justify-content: space-between;\n}\n\n.melon-icon {\n    padding-top: 10px;\n}\n\nheader button {\n    background-color: transparent;\n    border: 1.5px solid #C7DEB6;\n    font-size: 15px;\n    color: #f1f1f1;\n    padding: 15px 25px;\n    border-radius: 20px;\n    margin-bottom: 10px;\n}\n\nheader button:hover {\n    background-color: #C7DEB6;\n    color: #556F44;\n    font-weight: 500;\n}\n\nh1 {\n    color: #f1f1f1;\n    font-size: 30px;\n    font-weight: 500;\n    padding-left: 3px;\n    order: 2;\n}\n\nnav {\n    grid-row: 2 / -1;\n    min-width: 230px;\n    margin-top: 40px;\n}\n\n\n/* NAV 1 */\n#nav-1 {\n    margin-left: 5vw;\n}\n\n#nav-1 button {\n    display: flex; \n    align-items: center;\n    width: 100%;\n    background-color: transparent;\n    border: none;\n    margin-bottom: 30px;\n    padding: 5px 0 5px 0;\n}\n\n#nav-1 button svg {\n    padding-right: 15px;\n    padding-left: 25px;\n    pointer-events: none;\n}\n\n#nav-1 button p {\n    color: #C7DEB6;\n    font-size: 18px;\n    font-weight: 400;\n    pointer-events: none; \n}\n\n#nav-1 button.active {\n   background-color: #f1f1f1 !important;\n   border-radius: 20px 0 0 20px;\n}\n\n.active p {\n    color: #556F44 !important;\n}\n\nbutton.active svg {\n    fill:#556F44;\n}\n\n\n/* NAV 2 */\n#nav-2 {\n    color: #f1f1f1;\n    border-top: 1px solid #C7DEB6;\n    margin-right: 15px;\n}\n\n#nav-subhead {\n    font-size: 15px;\n    font-weight: 300;\n    margin: 20px 0 18px 2vw;\n    color: #C7DEB6;\n}\n\n#add-proj-input {\n    display: flex;\n    margin-right: 10px;\n}\n\n#add-project {\n    background-color: transparent;\n    margin-left: 4vw;\n    margin-right: 5px;\n    width: 80%;\n    border: none;\n}\n\n#add-project::placeholder {\n    color: #f1f1f1;\n    font-size: 18px;\n    font-weight: 400;\n}\n\n#add-project:focus{\n    border-bottom: 1px solid #C7DEB6;\n    color: #f1f1f1;\n}\n\n#add-project:focus::placeholder {\n    color: transparent;\n}\n\n#add-proj-submit {\n    background-color: transparent;\n    border: none;\n    border-radius: 8px;\n    height: 25px;\n    width: 25px;\n    padding: 0;\n}\n\n#add-proj-submit:hover {\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n\n\n/* MAIN TODO AREA */\nmain {\n    background-color: #f1f1f1;\n    grid-row: 1 / -1 ;\n    grid-column: 2 / -1;\n    margin: 120px 10px 10px 0;\n    border-radius: 45px;\n    overflow: auto;\n}\n\n\n/* POP-UP FORM */\n#add-task-popup {\n    height: 550px;\n    width: 500px;\n    background-color: #f1f1f1;\n    border: none;\n    border-radius: 25px;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;\n}\n\n#add-task-popup form {\n    display: flex;\n    flex-direction: column;\n    padding: 20px 30px 20px 30px;\n}\n\n.close {\n    font-size: 20px;\n    font-weight: 500;\n    border: none;\n    background-color: transparent;\n    margin: 12px;\n    align-self: flex-end;\n    color:#111509;\n    outline: none;\n}\n\ninput {\n    margin-bottom: 35px;\n    font-size: 15px;\n    height: 20px;\n    border: 0;\n    border-bottom: 1.5px solid #111509;\n    padding-left: 2px;\n    padding-bottom: 2px;\n    background-color: #f1f1f1;\n}\n\ninput[type=textarea] {\n    border: 1.5px solid #111509;\n    border-radius: 5px;\n    padding: 2px 5px 80px 5px;\n}\n\nselect {\n    border: 1.5px solid #111509;\n    padding: 2px 5px 80px 5px;\n    margin-bottom: 35px;\n    margin-top: 5px;\n    outline: 0;\n    background: #f1f1f1;\n    padding: 5px;\n}\n\ninput:focus {\n    outline: none;\n}\n\n.input-pair {\n    display: flex;\n    flex-direction: column;\n}\n\nlabel {\n    margin-bottom: 5px;\n    color:#111509;\n    font-size: 13px;\n}\n\n.submit {\n    background-color: #556F44;\n    border: none;\n    color:#f1f1f1;\n    border-radius: 10px;\n    height: 50px;\n    font-size: 15px;\n    font-weight: 400;\n}\n\n#submit:hover {\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n",""]);const p=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var p=0;p<this.length;p++){var d=this[p][0];null!=d&&(i[d]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],p=0;p<n.length;p++){var d=n[p],c=r.base?d[0]+r.base:d[0],s=a[c]||0,l="".concat(c," ").concat(s);a[c]=s+1;var u=t(l),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=o(f,r);r.byIndex=p,e.splice(p,0,{identifier:l,updater:g,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var p=t(a[i]);e[p].references--}for(var d=r(n,o),c=0;c<a.length;c++){var s=t(a[c]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),p=t(56),d=t.n(p),c=t(540),s=t.n(c),l=t(113),u=t.n(l),f=t(208),g={};g.styleTagTransform=u(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=s(),e()(f.A,g),f.A&&f.A.locals&&f.A.locals;const x=t.p+"150fbd464059d1dba11a.png",m=new Image(55,55);m.src=x;const b=document.getElementById("logo");m.classList.add("melon-icon"),b.appendChild(m);const h=[...document.getElementsByClassName("nav-1")],v=document.getElementById("add-task"),y=document.getElementById("add-task-popup"),w=document.getElementById("close");h.forEach((n=>{n.addEventListener("click",(n=>{E(n)}))}));const E=n=>{h.forEach((n=>{n.classList.contains("active")&&n.classList.remove("active")}));var e=n.target;console.log(e.firstChild),e.classList.add("active")};v.addEventListener("click",(()=>{y.showModal()})),w.addEventListener("click",(()=>{y.close(),document.querySelector("form").reset()}))})()})();