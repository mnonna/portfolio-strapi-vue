(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21e02e00"],{"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),a=r("9112");for(var c in o){var u=n[c],s=u&&u.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(f){s.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=r("ae40"),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,o=r("69f3"),i=r("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);i(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=u(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),i=r("9bdd"),a=r("e95a"),c=r("50c4"),u=r("8418"),s=r("35a1");t.exports=function(t){var e,r,f,l,h,d,p=o(t),v="function"==typeof this?this:Array,y=arguments.length,g=y>1?arguments[1]:void 0,m=void 0!==g,w=s(p),L=0;if(m&&(g=n(g,y>2?arguments[2]:void 0,2)),void 0==w||v==Array&&a(w))for(e=c(p.length),r=new v(e);e>L;L++)d=m?g(p[L],L):p[L],u(r,L,d);else for(l=w.call(p),h=l.next,r=new v;!(f=h.call(l)).done;L++)d=m?i(l,g,[f.value,L],!0):f.value,u(r,L,d);return r.length=L,r}},6547:function(t,e,r){var n=r("a691"),o=r("1d80"),i=function(t){return function(e,r){var i,a,c=String(o(e)),u=n(r),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u),i<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new C(n||[]);return i._invoke=E(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function y(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,b=L&&L(L(j([])));b&&b!==r&&n.call(b,i)&&(w=b);var x=m.prototype=y.prototype=Object.create(w);function S(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,e,r){var n=l;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return O()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return g.prototype=x.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},S(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(x),u(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(a){throw o(t),a}}},"9d8d":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"app-header"},[r("div",{staticClass:"container"},[r("nav",{staticClass:"app-header__main d-flex justify-content-between"},[t._m(0),r("div",{staticClass:"app-header__links d-flex"},[r("div",{staticClass:"app-header__links--single d-flex align-items-center justify-content-center"},[r("a",{attrs:{href:"","data-link":"appAbout"},on:{click:function(e){return t.navigateToSection(e)}}},[t._v("About Me")])]),r("div",{staticClass:"app-header__links--single d-flex align-items-center justify-content-center"},[r("a",{attrs:{href:"","data-link":"appProjects"},on:{click:function(e){return t.navigateToSection(e)}}},[t._v("Projects")])]),r("div",{staticClass:"app-header__links--single d-flex align-items-center justify-content-center"},[r("a",{attrs:{href:"","data-link":"appTech"},on:{click:function(e){return t.navigateToSection(e)}}},[t._v("Technologies")])]),r("div",{staticClass:"app-header__links--single d-flex align-items-center justify-content-center"},[r("a",{attrs:{href:"","data-link":"appContact"},on:{click:function(e){return t.navigateToSection(e)}}},[t._v("Contact")])])])])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-header__logo d-flex align-items-center"},[r("span",[t._v("mnonn@")])])}],i=(r("4160"),r("a630"),r("3ca3"),r("159b"),r("96cf"),r("1da1")),a={data:function(){return{}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=document.querySelectorAll(".app-section"),e.next=3,t.navigationHandler(r);case 3:case"end":return e.stop()}}),e)})))()},methods:{navigationHandler:function(t){var e=window.innerWidth<768?0:100,r={},n=0;Array.prototype.forEach.call(t,(function(t){r[t.id]=t.offsetTop})),window.addEventListener("scroll",(function(){var t=window.scrollY+e;for(n in r)if(r[n]<=t){Array.from(document.querySelectorAll(".app-header__links--single")).forEach((function(t){t.classList.remove("active-item")}));var o=document.querySelector('.app-header__links--single a[data-link="'.concat(n,'"]'));null!==o&&o.parentNode.classList.add("active-item")}}))},navigateToSection:function(t){t.preventDefault();var e=t.target.getAttribute("data-link"),r=document.querySelector(".app-header").getBoundingClientRect().height,n=window.innerWidth<768?document.querySelector("#".concat(e)).offsetTop:document.querySelector("#".concat(e)).offsetTop-r;window.scrollTo({top:n,behavior:"smooth"})}}},c=a,u=(r("f45d"),r("2877")),s=Object(u["a"])(c,n,o,!1,null,"0bb1d510",null);e["default"]=s.exports},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),o=r("d039"),i=r("5135"),a=Object.defineProperty,c={},u=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var r=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:u,l=i(e,1)?e[1]:void 0;return c[t]=!!r&&!o((function(){if(s&&!n)return!0;var t={length:-1};s?a(t,1,{enumerable:!0,get:u}):t[1]=1,r.call(t,f,l)}))}},b0a0:function(t,e,r){},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),c=r("65f0"),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,f=4==t,l=6==t,h=7==t,d=5==t||l;return function(p,v,y,g){for(var m,w,L=i(p),b=o(L),x=n(v,y,3),S=a(b.length),_=0,E=g||c,k=e?E(p,S):r||h?E(p,0):void 0;S>_;_++)if((d||_ in b)&&(m=b[_],w=x(m,_,L),t))if(e)k[_]=w;else if(w)switch(t){case 3:return!0;case 5:return m;case 6:return _;case 2:u.call(k,m)}else switch(t){case 4:return!1;case 7:u.call(k,m)}return l?-1:s||f?f:k}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f45d:function(t,e,r){"use strict";r("b0a0")},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-21e02e00.a26a8420.js.map