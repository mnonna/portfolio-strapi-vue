(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ea38f44"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(n(t))}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},7503:function(t,e,r){},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),p=r("861d"),h=r("825a"),v=r("7b0b"),b=r("fc6a"),g=r("c04e"),y=r("5c6c"),m=r("7c73"),w=r("df75"),_=r("241c"),S=r("057f"),O=r("7418"),x=r("06cf"),C=r("9bf2"),j=r("d1e7"),I=r("9112"),k=r("6eeb"),A=r("5692"),P=r("f772"),T=r("d012"),E=r("90e3"),N=r("b622"),F=r("e538"),J=r("746f"),M=r("d44e"),$=r("69f3"),z=r("b727").forEach,B=P("hidden"),D="Symbol",H="prototype",R=N("toPrimitive"),q=$.set,Q=$.getterFor(D),W=Object[H],G=o.Symbol,K=i("JSON","stringify"),L=x.f,U=C.f,V=S.f,X=j.f,Y=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),et=A("symbol-to-string-registry"),rt=A("wks"),nt=o.QObject,ot=!nt||!nt[H]||!nt[H].findChild,it=c&&f((function(){return 7!=m(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=L(W,e);n&&delete W[e],U(t,e,r),n&&t!==W&&U(W,e,n)}:U,at=function(t,e){var r=Y[t]=m(G[H]);return q(r,{type:D,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},st=function(t,e,r){t===W&&st(Z,e,r),h(t);var n=g(e,!0);return h(r),l(Y,n)?(r.enumerable?(l(t,B)&&t[B][n]&&(t[B][n]=!1),r=m(r,{enumerable:y(0,!1)})):(l(t,B)||U(t,B,y(1,{})),t[B][n]=!0),it(t,n,r)):U(t,n,r)},ut=function(t,e){h(t);var r=b(e),n=w(r).concat(ht(r));return z(n,(function(e){c&&!lt.call(r,e)||st(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):ut(m(t),e)},lt=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===W&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,B)&&this[B][e])||r)},dt=function(t,e){var r=b(t),n=g(e,!0);if(r!==W||!l(Y,n)||l(Z,n)){var o=L(r,n);return!o||!l(Y,n)||l(r,B)&&r[B][n]||(o.enumerable=!0),o}},pt=function(t){var e=V(b(t)),r=[];return z(e,(function(t){l(Y,t)||l(T,t)||r.push(t)})),r},ht=function(t){var e=t===W,r=V(e?Z:b(t)),n=[];return z(r,(function(t){!l(Y,t)||e&&!l(W,t)||n.push(Y[t])})),n};if(s||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===W&&r.call(Z,t),l(this,B)&&l(this[B],e)&&(this[B][e]=!1),it(this,e,y(1,t))};return c&&ot&&it(W,e,{configurable:!0,set:r}),at(e,t)},k(G[H],"toString",(function(){return Q(this).tag})),k(G,"withoutSetter",(function(t){return at(E(t),t)})),j.f=lt,C.f=st,x.f=dt,_.f=S.f=pt,O.f=ht,F.f=function(t){return at(N(t),t)},c&&(U(G[H],"description",{configurable:!0,get:function(){return Q(this).description}}),a||k(W,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:G}),z(w(rt),(function(t){J(t)})),n({target:D,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=G(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),K){var vt=!s||f((function(){var t=G();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),o[1]=e,K.apply(null,o)}})}G[H][R]||I(G[H],R,G[H].valueOf),M(G,D),T[B]=!0},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),c=r("65f0"),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,d=7==t,p=5==t||l;return function(h,v,b,g){for(var y,m,w=i(h),_=o(w),S=n(v,b,3),O=a(_.length),x=0,C=g||c,j=e?C(h,O):r||d?C(h,0):void 0;O>x;x++)if((p||x in _)&&(y=_[x],m=S(y,x,w),t))if(e)j[x]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return x;case 2:s.call(j,y)}else switch(t){case 4:return!1;case 7:s.call(j,y)}return l?-1:u||f?f:j}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},dec9:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("section",{staticClass:"app-hero app-section"},[r("div",{staticClass:"app-hero__overlay",style:t.heroBgStyle}),r("div",{staticClass:"app-hero__content"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"app-hero__text d-flex flex-column"},[r("h1",{staticClass:"hero-main-header"},[t._v(t._s(t.title))]),r("p",{staticClass:"hero-lead"},[t._v(t._s(t.leadText))]),r("p",{staticClass:"hero-desc"},[t._v(t._s(t.description))])])]),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"app-hero__secondaryImg d-flex"},[r("div",{staticClass:"app-hero__secondaryImg--wrapper"},[r("img",{attrs:{src:t.urls.heroSecondaryImg,alt:""}})])])])])])]),r("div",{staticClass:"app-hero__scroll d-flex justify-content-center align-items-center",on:{click:t.scrollToAbout}},[r("div",{staticClass:"icon-wrapper"},[r("font-awesome-icon",{style:{color:"#FFD32A"},attrs:{icon:"chevron-circle-down",size:"3x"}})],1)])])])])},o=[],i=(r("a4d3"),r("e01a"),r("96cf"),r("1da1")),a=r("bc3a"),c=r.n(a),s={data:function(){return{api_url:"http://localhost:1337",title:"",description:"",leadText:"",urls:{heroMainImg:"",heroSecondaryImg:""}}},mounted:function(){this.getHeroImgAssets()},computed:{heroBgStyle:function(){if(this.urls.heroMainImg){var t={"background-image":"linear-gradient(90deg, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.75) 35%, rgba(182,182,182,0.5046393557422969) 100%), url('".concat(this.urls.heroMainImg,"')"),"background-position":"center","background-size":"cover"};return t}return""}},methods:{getHeroImgAssets:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("http://localhost:1337/hero").then((function(t){e.urls.heroMainImg=e.api_url+t.data.hero_background.url,e.urls.heroSecondaryImg=e.api_url+t.data.hero_secondary_img.formats.medium.url,e.title=t.data.hero_title,e.description=t.data.hero_desc_text,e.leadText=t.data.hero_lead_text})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),scrollToAbout:function(){var t=document.querySelector("#appAbout");window.scrollTo({top:t.offsetTop-100,behavior:"smooth"})}}},u=s,f=(r("ef5e"),r("2877")),l=Object(f["a"])(u,n,o,!1,null,"44092946",null);e["default"]=l.exports},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),a=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var p=d.prototype=f.prototype;p.constructor=d;var h=p.toString,v="Symbol(test)"==String(f("test")),b=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=h.call(t);if(a(l,t))return"";var r=v?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},ef5e:function(t,e,r){"use strict";r("7503")}}]);
//# sourceMappingURL=chunk-1ea38f44.39c4fdea.js.map