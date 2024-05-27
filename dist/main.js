(()=>{"use strict";var t={208:(t,n,e)=>{e.d(n,{A:()=>s});var r=e(601),a=e.n(r),o=e(314),i=e.n(o)()(a());i.push([t.id,":root {\n    --white-color: #f8f8f8;\n    --accent-text-color: #d4eac4;\n    /* --main-color: #556F44; */\n    /* --main-color: #004a3a; */\n    --main-color: #1b5235;\n    font-family: Lexend Deca;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: repeat(8, 1fr);\n    height: 100vh;\n    padding: 0;\n    margin: 0;\n    background-color: var(--main-color);\n    box-sizing: border-box;\n}\n\nheader {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1 ;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 20px;\n}\n\n#logo {\n    display: flex;\n    justify-content: space-between;\n    margin-left: 4vw;\n    padding-left: 5px;\n}\n\n.melon-icon {\n    padding-top: 10px;\n}\n\n#add-task {\n    background-color: transparent;\n    border: 1.5px solid var(--accent-text-color);\n    font-size: 14px;\n    color: var(--white-color);\n    padding: 16px 22px;\n    border-radius: 20px;\n    margin-bottom: 10px;\n    margin-right: 4vw;\n    width: 130px;\n}\n\n#add-task:hover {\n    background-color: var(--accent-text-color);\n    color: var(--main-color);\n    font-weight: 500;\n    box-shadow: rgba(0, 0, 0, 0.20) 0px 2px 4px 0px inset;\n    transition: all 0.15s ease;\n}\n\n#add-task:hover  {\n    color: var(--main-color);\n}\n\nh1 {\n    color: var(--white-color);\n    font-size: 28px;\n    font-weight: 500;\n    padding-left: 3px;\n    order: 2;\n}\n\n\n\nnav {\n    grid-row: 2 / -1;\n    min-width: 230px;\n    margin-top: 65px;\n}\n\n/* NAV 1 */\n#nav-1 {\n    margin-left: 4vw;\n    padding-left: 5px;\n}\n\n#nav-1 button {\n    display: flex; \n    align-items: center;\n    width: 100%;\n    height: 72px;\n    background-color: transparent;\n    border: none;\n    margin-bottom: 30px;\n    padding: 5px 0 5px 0;\n}\n\n#nav-1 button svg {\n    padding-right: 1vw;\n    padding-left: 25px;\n    pointer-events: none;\n}\n\n#nav-1 button p {\n    color: var(--accent-text-color);\n    font-size: 16px;\n    font-weight: 400;\n    pointer-events: none; \n    padding-right: 10px;\n}\n\n#nav-1 button.active {\n   background-color: var(--white-color) !important;\n   border-radius: 20px 0 0 20px;\n   box-shadow: rgba(0, 0, 0, 0.20) 0px 2px 4px 0px inset;\n   transition: all 0.3s ease;\n}\n\n.active p {\n    color: var(--main-color) !important;\n}\n\nbutton.active svg {\n    fill:var(--main-color);\n}\n\n#nav-divider {\n    height: 2px;\n    margin-left: 35px;\n    margin-right: 20px;\n    border-top: 1px solid var(--accent-text-color);\n}\n\n\n/* NAV 2 */\n#nav-subhead {\n    font-size: 16px;\n    font-weight: 300;\n    margin: 20px 0 20px 3.75vw;\n    color: var(--accent-text-color);\n    padding-left: 15px;\n}\n\n#nav-2 {\n    color: var(--white-color);\n    margin-right: 25px;\n    list-style-type: none;\n    margin-left: 3.5vw;\n}\n\n#add-proj-input{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n    margin-right: 5px;\n}\n\n#add-project {\n    background-color: transparent;\n    border: none;\n    width: 100%;\n    padding-bottom: 4px;\n    font-size: 16px;\n}\n\n#add-project::placeholder {\n    color: var(--white-color);\n    font-size: 16px;\n    font-weight: 400;\n    padding-bottom: 4px;\n}\n\n#add-project:focus{\n    border-bottom: 1px solid var(--accent-text-color);\n    color: var(--white-color);\n}\n\n#add-project:focus::placeholder {\n    color: transparent;\n}\n\n#add-project:hover {\n    border-bottom: 1px solid var(--accent-text-color);\n    transition: all 0.15s ease;\n}\n\n#add-proj-submit{\n    background-color: transparent;\n    border: none;\n    border-radius: 8px;\n    height: 25px;\n    width: 28px;\n    padding: 0;\n}\n\n#add-proj-submit:hover {\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px inset;\n    transition: all 0.15s ease;\n}\n\n.nav2-item {\n    color: var(--white-color);\n    font-size: 16px;\n    font-weight: 400;\n    margin-bottom: 22px;\n    background-color: transparent;\n    border: none;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    padding: 0 2px 0 2px;\n}\n\n.nav2-item  {\n    padding-right: 5px;\n    padding-bottom: 4px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.nav2-item:hover div {\n    color: var(--accent-text-color);\n    transition: all 0.15s ease;\n}\n\n.nav2-item:hover svg{\n    fill: var(--accent-text-color);\n    transition: all 0.15s ease;\n}\n\n\n\n/* POP-UP FORM */\n#add-task-popup {\n    height: 575px;\n    width: 450px;\n    background-color: var(--white-color);\n    border: none;\n    border-radius: 20px;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;\n}\n\n#add-task-popup form {\n    display: flex;\n    flex-direction: column;\n    padding: 15px 30px 20px 30px;\n}\n\n#close {\n    font-size: 20px;\n    font-weight: 500;\n    border: none;\n    background-color: transparent;\n    margin-bottom: 18px;\n    align-self: flex-end;\n    color:#111509;\n    outline: none;\n}\n\n.popup-input {\n    margin-bottom: 25px;\n    font-size: 16px;\n    height: 40px;\n    border: 1px solid var(--main-color);\n    border-radius: 2px;\n    padding-left: 5px;\n    padding-bottom: 2px;\n    background-color: var(--white-color);\n}\n\ntextarea {\n    border: 1px solid var(--main-color);\n    border-radius: 2px;\n    padding: 4px 5px 80px 5px;\n    margin-bottom: 25px;\n    background-color: transparent;\n    resize: none;\n    font-size: 13px;\n}\n\nselect {\n    border: 1px solid var(--main-color);\n    margin-top: 5px;\n    outline: 0;\n    background: var(--white-color);\n    padding: 5px;\n}\n\ninput:focus {\n    outline: none;\n}\n\n.input-pair {\n    display: flex;\n    flex-direction: column;\n}\n\nlabel {\n    color:var(--main-color);\n    font-size: 12px;\n    font-weight: 400;\n}\n\n#submit {\n    background-color: transparent;\n    border: none;\n    color:var(--main-color);\n    border: 2px solid var(--main-color);\n    border-radius: 20px;\n    height: 55px;\n    font-size: 18px;\n    font-weight: 400;\n    margin-top: 45px;\n}\n\n#submit:hover {\n    background-color: var(--main-color);\n    color: var(--white-color);\n    transition: all 0.15s ease;\n}\n\n/* MAIN TODO AREA */\n#taskUI {\n    background-color: var(--white-color);\n    grid-row: 1 / -1 ;\n    grid-column: 2 / -1;\n    margin: 110px 20px 0 0;\n    border-radius: 45px 45px 0 0;\n    overflow: auto;\n    padding: 70px 100px 10px 80px;\n}\n\n.task-item {\n    display: flex;\n    justify-content: space-between;\n    border: 1px solid var(--main-color);\n    border-radius: 5px;\n    padding: 0 15px 0 15px;\n    margin-bottom: 10px;\n}\n\n.task-checkbox {\n    height: 15px;\n    width: 15px;\n    border: 1.5px solid black;\n    background-color: transparent;\n    margin-right: 30px;\n    flex-shrink: 0;\n}\n\n.task-left, .task-right {\n    display: flex;\n    align-items: center;\n}\n\n.task-right {\n    justify-content: space-between;\n    width: 150px;\n}\n\n.task-icons {\n    display: flex;\n}\n\n\n\n\n",""]);const s=i},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],d=r.base?c[0]+r.base:c[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var m=e(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(h);else{var f=a(h,r);r.byIndex=s,n.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=e(o[i]);n[s].references--}for(var c=r(t,a),d=0;d<o.length;d++){var u=e(o[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}o=c}}},659:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,a&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return t[r](o,o.exports,e),o.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.nc=void 0;var r={};(()=>{e.d(r,{S:()=>Bt});var t=e(72),n=e.n(t),a=e(825),o=e.n(a),i=e(659),s=e.n(i),c=e(56),d=e.n(c),u=e(540),l=e.n(u),m=e(113),h=e.n(m),f=e(208),p={};p.styleTagTransform=h(),p.setAttributes=d(),p.insert=s().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=l(),n()(f.A,p),f.A&&f.A.locals&&f.A.locals;const g=e.p+"ba72de13bea2c91e2317.png";let w=[];const b=document.getElementById("nav-2"),v=document.getElementById("add-project"),x=document.getElementById("add-proj-submit"),y=document.getElementById("form-select");function k(){w.push(v.value),v.value="",function(){for(;b.childNodes.length>1;)b.removeChild(b.lastChild);w.map((t=>{const n=document.createElement("li"),e=document.createElement("button"),r=document.createElement("span");r.name="Project",e.name="Project",e.innerHTML=t,r.innerHTML='<svg id="proj-list-icon" class="proj-bttn" fill="#f0fff0" width="25px" height="25px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M13.293 7.293c-.391.391-.391 1.023 0 1.414l2.293 2.293h-7.586c-.552 0-1 .448-1 1s.448 1 1 1h7.586l-2.293 2.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l4.707-4.707-4.707-4.707c-.391-.391-1.023-.391-1.414 0z"/></svg>',e.appendChild(r),n.appendChild(e),e.classList.add("nav2-item"),e.classList.add("nav-button"),b.appendChild(n),e.addEventListener("click",(()=>{Bt(t)}))}))}(),function(){for(;y.childNodes.length>1;)y.removeChild(y.lastChild);w.forEach((t=>{const n=document.createElement("option");n.innerHTML=t,y.appendChild(n)}))}()}function M(){return[...document.getElementsByClassName("nav-button")]}x.addEventListener("click",k),v.addEventListener("keyup",(t=>{"Enter"===t.key&&(t.preventDefault(),t.target.blur(),k())}));const C={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function T(t){return(n={})=>{const e=n.width?String(n.width):t.defaultWidth;return t.formats[e]||t.formats[t.defaultWidth]}}const E={date:T({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:T({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:T({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},D={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function S(t){return(n,e)=>{let r;if("formatting"===(e?.context?String(e.context):"standalone")&&t.formattingValues){const n=t.defaultFormattingWidth||t.defaultWidth,a=e?.width?String(e.width):n;r=t.formattingValues[a]||t.formattingValues[n]}else{const n=t.defaultWidth,a=e?.width?String(e.width):t.defaultWidth;r=t.values[a]||t.values[n]}return r[t.argumentCallback?t.argumentCallback(n):n]}}const N={ordinalNumber:(t,n)=>{const e=Number(t),r=e%100;if(r>20||r<10)switch(r%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},era:S({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:S({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:S({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:S({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:S({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function P(t){return(n,e={})=>{const r=e.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=n.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,n){for(let n=0;n<t.length;n++)if(t[n].test(i))return n}(s):function(t,n){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&t[n].test(i))return n}(s);let d;return d=t.valueCallback?t.valueCallback(c):c,d=e.valueCallback?e.valueCallback(d):d,{value:d,rest:n.slice(i.length)}}}const L={ordinalNumber:(j={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,n={})=>{const e=t.match(j.matchPattern);if(!e)return null;const r=e[0],a=t.match(j.parsePattern);if(!a)return null;let o=j.valueCallback?j.valueCallback(a[0]):a[0];return o=n.valueCallback?n.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:P({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:P({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:P({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:P({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:P({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var j;const W={code:"en-US",formatDistance:(t,n,e)=>{let r;const a=C[t];return r="string"==typeof a?a:1===n?a.one:a.other.replace("{{count}}",n.toString()),e?.addSuffix?e.comparison&&e.comparison>0?"in "+r:r+" ago":r},formatLong:E,formatRelative:(t,n,e,r)=>D[t],localize:N,match:L,options:{weekStartsOn:0,firstWeekContainsDate:1}};let O={};function H(){return O}Math.pow(10,8);const Y=6048e5,z=864e5,I=6e4,F=36e5;function A(t){const n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new t.constructor(+t):"number"==typeof t||"[object Number]"===n||"string"==typeof t||"[object String]"===n?new Date(t):new Date(NaN)}function B(t){const n=A(t);return n.setHours(0,0,0,0),n}function q(t){const n=A(t),e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return e.setUTCFullYear(n.getFullYear()),+t-+e}function U(t,n){return t instanceof Date?new t.constructor(n):new Date(n)}function Q(t){const n=A(t);return function(t,n){const e=B(t),r=B(n),a=+e-q(e),o=+r-q(r);return Math.round((a-o)/z)}(n,function(t){const n=A(t),e=U(t,0);return e.setFullYear(n.getFullYear(),0,1),e.setHours(0,0,0,0),e}(n))+1}function $(t,n){const e=H(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??e.weekStartsOn??e.locale?.options?.weekStartsOn??0,a=A(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function G(t){return $(t,{weekStartsOn:1})}function X(t){const n=A(t),e=n.getFullYear(),r=U(t,0);r.setFullYear(e+1,0,4),r.setHours(0,0,0,0);const a=G(r),o=U(t,0);o.setFullYear(e,0,4),o.setHours(0,0,0,0);const i=G(o);return n.getTime()>=a.getTime()?e+1:n.getTime()>=i.getTime()?e:e-1}function R(t){const n=A(t),e=+G(n)-+function(t){const n=X(t),e=U(t,0);return e.setFullYear(n,0,4),e.setHours(0,0,0,0),G(e)}(n);return Math.round(e/Y)+1}function _(t,n){const e=A(t),r=e.getFullYear(),a=H(),o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=U(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=$(i,n),c=U(t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const d=$(c,n);return e.getTime()>=s.getTime()?r+1:e.getTime()>=d.getTime()?r:r-1}function J(t,n){const e=A(t),r=+$(e,n)-+function(t,n){const e=H(),r=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??e.firstWeekContainsDate??e.locale?.options?.firstWeekContainsDate??1,a=_(t,n),o=U(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),$(o,n)}(e,n);return Math.round(r/Y)+1}function Z(t,n){return(t<0?"-":"")+Math.abs(t).toString().padStart(n,"0")}const V={y(t,n){const e=t.getFullYear(),r=e>0?e:1-e;return Z("yy"===n?r%100:r,n.length)},M(t,n){const e=t.getMonth();return"M"===n?String(e+1):Z(e+1,2)},d:(t,n)=>Z(t.getDate(),n.length),a(t,n){const e=t.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];default:return"am"===e?"a.m.":"p.m."}},h:(t,n)=>Z(t.getHours()%12||12,n.length),H:(t,n)=>Z(t.getHours(),n.length),m:(t,n)=>Z(t.getMinutes(),n.length),s:(t,n)=>Z(t.getSeconds(),n.length),S(t,n){const e=n.length,r=t.getMilliseconds();return Z(Math.trunc(r*Math.pow(10,e-3)),n.length)}},K={G:function(t,n,e){const r=t.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return e.era(r,{width:"abbreviated"});case"GGGGG":return e.era(r,{width:"narrow"});default:return e.era(r,{width:"wide"})}},y:function(t,n,e){if("yo"===n){const n=t.getFullYear(),r=n>0?n:1-n;return e.ordinalNumber(r,{unit:"year"})}return V.y(t,n)},Y:function(t,n,e,r){const a=_(t,r),o=a>0?a:1-a;return"YY"===n?Z(o%100,2):"Yo"===n?e.ordinalNumber(o,{unit:"year"}):Z(o,n.length)},R:function(t,n){return Z(X(t),n.length)},u:function(t,n){return Z(t.getFullYear(),n.length)},Q:function(t,n,e){const r=Math.ceil((t.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return Z(r,2);case"Qo":return e.ordinalNumber(r,{unit:"quarter"});case"QQQ":return e.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(r,{width:"narrow",context:"formatting"});default:return e.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,n,e){const r=Math.ceil((t.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return Z(r,2);case"qo":return e.ordinalNumber(r,{unit:"quarter"});case"qqq":return e.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(r,{width:"narrow",context:"standalone"});default:return e.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,n,e){const r=t.getMonth();switch(n){case"M":case"MM":return V.M(t,n);case"Mo":return e.ordinalNumber(r+1,{unit:"month"});case"MMM":return e.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(r,{width:"narrow",context:"formatting"});default:return e.month(r,{width:"wide",context:"formatting"})}},L:function(t,n,e){const r=t.getMonth();switch(n){case"L":return String(r+1);case"LL":return Z(r+1,2);case"Lo":return e.ordinalNumber(r+1,{unit:"month"});case"LLL":return e.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(r,{width:"narrow",context:"standalone"});default:return e.month(r,{width:"wide",context:"standalone"})}},w:function(t,n,e,r){const a=J(t,r);return"wo"===n?e.ordinalNumber(a,{unit:"week"}):Z(a,n.length)},I:function(t,n,e){const r=R(t);return"Io"===n?e.ordinalNumber(r,{unit:"week"}):Z(r,n.length)},d:function(t,n,e){return"do"===n?e.ordinalNumber(t.getDate(),{unit:"date"}):V.d(t,n)},D:function(t,n,e){const r=Q(t);return"Do"===n?e.ordinalNumber(r,{unit:"dayOfYear"}):Z(r,n.length)},E:function(t,n,e){const r=t.getDay();switch(n){case"E":case"EE":case"EEE":return e.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(r,{width:"short",context:"formatting"});default:return e.day(r,{width:"wide",context:"formatting"})}},e:function(t,n,e,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(o);case"ee":return Z(o,2);case"eo":return e.ordinalNumber(o,{unit:"day"});case"eee":return e.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(a,{width:"short",context:"formatting"});default:return e.day(a,{width:"wide",context:"formatting"})}},c:function(t,n,e,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(o);case"cc":return Z(o,n.length);case"co":return e.ordinalNumber(o,{unit:"day"});case"ccc":return e.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(a,{width:"narrow",context:"standalone"});case"cccccc":return e.day(a,{width:"short",context:"standalone"});default:return e.day(a,{width:"wide",context:"standalone"})}},i:function(t,n,e){const r=t.getDay(),a=0===r?7:r;switch(n){case"i":return String(a);case"ii":return Z(a,n.length);case"io":return e.ordinalNumber(a,{unit:"day"});case"iii":return e.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(r,{width:"short",context:"formatting"});default:return e.day(r,{width:"wide",context:"formatting"})}},a:function(t,n,e){const r=t.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(r,{width:"narrow",context:"formatting"});default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,n,e){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",n){case"b":case"bb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(a,{width:"narrow",context:"formatting"});default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,n,e){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",n){case"B":case"BB":case"BBB":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(a,{width:"narrow",context:"formatting"});default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,n,e){if("ho"===n){let n=t.getHours()%12;return 0===n&&(n=12),e.ordinalNumber(n,{unit:"hour"})}return V.h(t,n)},H:function(t,n,e){return"Ho"===n?e.ordinalNumber(t.getHours(),{unit:"hour"}):V.H(t,n)},K:function(t,n,e){const r=t.getHours()%12;return"Ko"===n?e.ordinalNumber(r,{unit:"hour"}):Z(r,n.length)},k:function(t,n,e){let r=t.getHours();return 0===r&&(r=24),"ko"===n?e.ordinalNumber(r,{unit:"hour"}):Z(r,n.length)},m:function(t,n,e){return"mo"===n?e.ordinalNumber(t.getMinutes(),{unit:"minute"}):V.m(t,n)},s:function(t,n,e){return"so"===n?e.ordinalNumber(t.getSeconds(),{unit:"second"}):V.s(t,n)},S:function(t,n){return V.S(t,n)},X:function(t,n,e){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(n){case"X":return nt(r);case"XXXX":case"XX":return et(r);default:return et(r,":")}},x:function(t,n,e){const r=t.getTimezoneOffset();switch(n){case"x":return nt(r);case"xxxx":case"xx":return et(r);default:return et(r,":")}},O:function(t,n,e){const r=t.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+tt(r,":");default:return"GMT"+et(r,":")}},z:function(t,n,e){const r=t.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+tt(r,":");default:return"GMT"+et(r,":")}},t:function(t,n,e){return Z(Math.trunc(t.getTime()/1e3),n.length)},T:function(t,n,e){return Z(t.getTime(),n.length)}};function tt(t,n=""){const e=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?e+String(a):e+String(a)+n+Z(o,2)}function nt(t,n){return t%60==0?(t>0?"-":"+")+Z(Math.abs(t)/60,2):et(t,n)}function et(t,n=""){const e=t>0?"-":"+",r=Math.abs(t);return e+Z(Math.trunc(r/60),2)+n+Z(r%60,2)}const rt=(t,n)=>{switch(t){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});default:return n.date({width:"full"})}},at=(t,n)=>{switch(t){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});default:return n.time({width:"full"})}},ot={p:at,P:(t,n)=>{const e=t.match(/(P+)(p+)?/)||[],r=e[1],a=e[2];if(!a)return rt(t,n);let o;switch(r){case"P":o=n.dateTime({width:"short"});break;case"PP":o=n.dateTime({width:"medium"});break;case"PPP":o=n.dateTime({width:"long"});break;default:o=n.dateTime({width:"full"})}return o.replace("{{date}}",rt(r,n)).replace("{{time}}",at(a,n))}},it=/^D+$/,st=/^Y+$/,ct=["D","DD","YY","YYYY"];function dt(t){if(!(n=t,n instanceof Date||"object"==typeof n&&"[object Date]"===Object.prototype.toString.call(n)||"number"==typeof t))return!1;var n;const e=A(t);return!isNaN(Number(e))}const ut=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,lt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,mt=/^'([^]*?)'?$/,ht=/''/g,ft=/[a-zA-Z]/;function pt(t,n,e){const r=H(),a=e?.locale??r.locale??W,o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=A(t);if(!dt(s))throw new RangeError("Invalid time value");let c=n.match(lt).map((t=>{const n=t[0];return"p"===n||"P"===n?(0,ot[n])(t,a.formatLong):t})).join("").match(ut).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const n=t[0];if("'"===n)return{isToken:!1,value:gt(t)};if(K[n])return{isToken:!0,value:t};if(n.match(ft))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const d={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!e?.useAdditionalWeekYearTokens&&function(t){return st.test(t)}(o)||!e?.useAdditionalDayOfYearTokens&&function(t){return it.test(t)}(o))&&function(t,n,e){const r=function(t,n,e){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${n}\`) for formatting ${r} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,n,e);if(console.warn(r),ct.includes(t))throw new RangeError(r)}(o,n,String(t)),(0,K[o[0]])(s,o,a.localize,d)})).join("")}function gt(t){const n=t.match(mt);return n?n[1].replace(ht,"'"):t}function wt(t,n){const e=n?.additionalDigits??2,r=function(t){const n={},e=t.split(bt.dateTimeDelimiter);let r;if(e.length>2)return n;if(/:/.test(e[0])?r=e[0]:(n.date=e[0],r=e[1],bt.timeZoneDelimiter.test(n.date)&&(n.date=t.split(bt.timeZoneDelimiter)[0],r=t.substr(n.date.length,t.length))),r){const t=bt.timezone.exec(r);t?(n.time=r.replace(t[1],""),n.timezone=t[1]):n.time=r}return n}(t);let a;if(r.date){const t=function(t,n){const e=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+n)+"})|(\\d{2}|[+-]\\d{"+(2+n)+"})$)"),r=t.match(e);if(!r)return{year:NaN,restDateString:""};const a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:t.slice((r[1]||r[2]).length)}}(r.date,e);a=function(t,n){if(null===n)return new Date(NaN);const e=t.match(vt);if(!e)return new Date(NaN);const r=!!e[4],a=kt(e[1]),o=kt(e[2])-1,i=kt(e[3]),s=kt(e[4]),c=kt(e[5])-1;if(r)return function(t,n,e){return n>=1&&n<=53&&e>=0&&e<=6}(0,s,c)?function(t,n,e){const r=new Date(0);r.setUTCFullYear(t,0,4);const a=7*(n-1)+e+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(n,s,c):new Date(NaN);{const t=new Date(0);return function(t,n,e){return n>=0&&n<=11&&e>=1&&e<=(Ct[n]||(Tt(t)?29:28))}(n,o,i)&&function(t,n){return n>=1&&n<=(Tt(t)?366:365)}(n,a)?(t.setUTCFullYear(n,o,Math.max(a,i)),t):new Date(NaN)}}(t.restDateString,t.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);const o=a.getTime();let i,s=0;if(r.time&&(s=function(t){const n=t.match(xt);if(!n)return NaN;const e=Mt(n[1]),r=Mt(n[2]),a=Mt(n[3]);return function(t,n,e){return 24===t?0===n&&0===e:e>=0&&e<60&&n>=0&&n<60&&t>=0&&t<25}(e,r,a)?e*F+r*I+1e3*a:NaN}(r.time),isNaN(s)))return new Date(NaN);if(!r.timezone){const t=new Date(o+s),n=new Date(0);return n.setFullYear(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()),n.setHours(t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),n}return i=function(t){if("Z"===t)return 0;const n=t.match(yt);if(!n)return 0;const e="+"===n[1]?-1:1,r=parseInt(n[2]),a=n[3]&&parseInt(n[3])||0;return function(t,n){return n>=0&&n<=59}(0,a)?e*(r*F+a*I):NaN}(r.timezone),isNaN(i)?new Date(NaN):new Date(o+s+i)}const bt={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},vt=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,xt=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,yt=/^([+-])(\d{2})(?::?(\d{2}))?$/;function kt(t){return t?parseInt(t):1}function Mt(t){return t&&parseFloat(t.replace(",","."))||0}const Ct=[31,null,31,30,31,30,31,31,30,31,30,31];function Tt(t){return t%400==0||t%4==0&&t%100!=0}function Et(t){return U(t,Date.now())}function Dt(t){return n=t,e=Et(t),+B(n)==+B(e);var n,e}function St(t,n){return function(t,n,e){return+$(t,e)==+$(n,e)}(t,n,{weekStartsOn:1})}function Nt(t){return function(t,n){const e=A(t),r=A(n);return e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth()}(t,Et(t))}function Pt(t,n){const e=JSON.parse(localStorage.getItem("task"));if(e.sort((function(t,n){return new Date(t.date)-new Date(n.date)})),"All Tasks"===t)Lt(e,t);else if("Today"===t)Lt(e.filter((t=>{if(date=pt(wt(t.date),"MM/dd/yyyy"),Dt(date))return t})),t);else if("This Week"===t)Lt(e.filter((t=>{if(date=pt(wt(t.date),"MM/dd/yyyy"),function(t){return St(t,Et(t))}(date))return t})),t);else if("This Month"===t)Lt(e.filter((t=>{if(date=pt(wt(t.date),"MM/dd/yyyy"),Nt(date))return t})),t);else if("Project"===t){var r=n.textContent;Lt(e.filter((t=>{if(t.project===r)return t})),r)}}function Lt(t,n){const e=document.getElementById("taskUI");e.innerHTML="",Bt(n),t.forEach((t=>{const n=document.createElement("div");n.classList.add("task-item");const r=document.createElement("div");r.classList.add("task-left");const a=document.createElement("div");a.classList.add("task-right");const o=document.createElement("div");o.classList.add("task-icons");const i=document.createElement("button");i.classList.add("task-checkbox");const s=document.createElement("p");s.classList.add("task-name"),r.appendChild(i),r.appendChild(s);const c=document.createElement("p");c.classList.add("date"),a.appendChild(c);const d=document.createElement("div");d.innerHTML='<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Edit / Edit_Pencil_02"> <path id="Vector" d="M4 16.0001V20.0001L8 20.0001L18.8686 9.13146L18.8695 9.13061C19.265 8.73516 19.4628 8.53736 19.5369 8.3092C19.6021 8.10835 19.6022 7.89201 19.5369 7.69117C19.4627 7.46284 19.2646 7.26474 18.8686 6.86872L17.1288 5.12892C16.7345 4.7346 16.5369 4.53704 16.3091 4.46301C16.1082 4.39775 15.8919 4.39775 15.691 4.46301C15.463 4.53709 15.2652 4.73488 14.8704 5.12976L14.8686 5.13146L4 16.0001Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';const u=document.createElement("div");u.innerHTML='<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',o.appendChild(d),o.appendChild(u),a.appendChild(o),n.appendChild(r),n.appendChild(a),s.innerHTML=t.name,c.innerHTML=t.date,e.appendChild(n)}))}const jt=[],Wt=document.getElementById("add-task"),Ot=document.getElementById("add-task-popup"),Ht=document.getElementById("close"),Yt=document.getElementById("submit");class zt{constructor(t,n,e,r){this.name=t,this.description=n,this.date=e,this.project=r}}Wt.addEventListener("click",(()=>{Ot.showModal()})),Ht.addEventListener("click",(()=>{Ot.close(),document.querySelector("form").reset()})),Yt.addEventListener("click",(t=>{!function(t){Ot.close(),t.preventDefault();const n=new zt(document.getElementById("task").value,document.getElementById("description").value,document.getElementById("date").value,document.getElementById("form-select").value);jt.push(n),document.querySelector("form").reset()}(t),function(t){(function(t){let n;try{n=window.localStorage;const t="__storage_test__";return n.setItem(t,t),n.removeItem(t),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&n&&0!==n.length}})()&&localStorage.setItem("task",JSON.stringify(t))}(jt),M().forEach((t=>{t.classList.contains("active")&&Pt(t.name)})),document.body.addEventListener("click",(t=>{let n=t.target,e=n.name;n.classList.contains("nav-button")&&Pt(e,n)}))}));const It=new Image(48,48);It.src=g;const Ft=document.getElementById("logo");It.classList.add("melon-icon"),Ft.appendChild(It);const At=M();function Bt(t){const n=document.getElementById("taskUI");n.innerHTML="";const e=document.createElement("h2");e.classList.add("task-container-header"),e.innerHTML=t,n.appendChild(e)}At.forEach((t=>{t.addEventListener("click",(n=>{qt(n),Bt(t.name)}))}));const qt=t=>{At.forEach((t=>{t.classList.contains("active")&&t.classList.remove("active")})),t.target.classList.add("active")}})()})();