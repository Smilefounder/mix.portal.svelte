import{Y as t,Z as e,_ as s,S as n,i,s as r,e as a,k as o,t as c,c as h,a as l,n as u,g as d,d as p,b as f,f as g,W as m,h as $,$ as v,X as b,a0 as x,z as k,j as w,m as I,o as _,v as E,r as T,w as C}from"../chunks/vendor-4168d81c.js";function U(){return{withCredentials:!0,timeout:3e4,baseURL:"",headers:{common:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache","Content-Type":"application/json",Accept:"application/json"}},paramsSerializer:function(e){return t.stringify(e,{arrayFormat:"brackets"})}}}class y extends class{constructor(t){this._initializeResponseInterceptor=()=>{this.instance.interceptors.response.use(this._handleResponse,this._handleError),this.instance.interceptors.request.use(this._handleRequest,this._handleError)},this._handleRequest=t=>{if(this.instance.defaults.withCredentials){let e=this.getCredentialToken();e&&(t.headers.common.Authorization=e)}return t},this._handleResponse=({data:t})=>t,this._handleError=t=>Promise.reject(t);let s=t||U();this.instance=e.create(s),this._initializeResponseInterceptor()}getCredentialToken(){return s.LocalStorage.getItem("Authorization")?`Bearer ${s.LocalStorage.getItem("Authorization")}`:""}}{constructor(t){super(t),this.token="",this.getToken=this.getToken.bind(this),this.setToken=this.setToken.bind(this),this.getUri=this.instance.getUri.bind(this),this.request=this.instance.request.bind(this),this.get=this.instance.get.bind(this),this.options=this.instance.options.bind(this),this.delete=this.instance.delete.bind(this),this.head=this.instance.head.bind(this),this.post=this.instance.post.bind(this),this.put=this.instance.put.bind(this),this.patch=this.instance.patch.bind(this),this.success=this.success.bind(this),this.error=this.error.bind(this)}getToken(){return`Bearer ${this.token}`}setToken(t){this.token=t}getUri(t){return this.getUri(t)}request(t){return this.request(t)}get(t,e){return this.get(t,e)}options(t,e){return this.options(t,e)}delete(t,e){return this.delete(t,e)}head(t,e){return this.head(t,e)}post(t,e,s){return this.post(t,e,s)}put(t,e,s){return this.put(t,e,s)}patch(t,e,s){return this.patch(t,e,s)}success(t){return t.data}error(t){throw t}}new class extends y{constructor(t){super(t),this.userLogin=this.userLogin.bind(this)}userLogin(t){return this.post("security/login",t).then(this.success)}};class R extends y{constructor(t,e,s,n,i){(i=i||U()).baseURL=`${t}/${e}/${s}`,n&&(i.baseURL=`${t}/${n}/${e}/${s}`),super(i)}}function L(t,e,s){const n=t.slice();return n[7]=e[s],n}function j(t){let e,s;return{c(){e=a("p"),s=c("loading...")},l(t){e=h(t,"P",{});var n=l(e);s=d(n,"loading..."),n.forEach(p)},m(t,n){g(t,e,n),m(e,s)},d(t){t&&p(e)}}}function q(t){let e,s,n,i,r,v,b,x,k=t[7].title+"";return{c(){e=a("figure"),s=a("img"),r=o(),v=a("figcaption"),b=c(k),x=o(),this.h()},l(t){e=h(t,"FIGURE",{});var n=l(e);s=h(n,"IMG",{src:!0,alt:!0}),r=u(n),v=h(n,"FIGCAPTION",{});var i=l(v);b=d(i,k),i.forEach(p),x=u(n),n.forEach(p),this.h()},h(){s.src!==(n=t[7].thumbnailUrl)&&f(s,"src",n),f(s,"alt",i=t[7].title)},m(t,n){g(t,e,n),m(e,s),m(e,r),m(e,v),m(v,b),m(e,x)},p(t,e){8&e&&s.src!==(n=t[7].thumbnailUrl)&&f(s,"src",n),8&e&&i!==(i=t[7].title)&&f(s,"alt",i),8&e&&k!==(k=t[7].title+"")&&$(b,k)},d(t){t&&p(e)}}}function z(t){let e,s,n,i,r,k,w,I,_,E,T,C,U=t[3],y=[];for(let a=0;a<U.length;a+=1)y[a]=q(L(t,U,a));let R=null;return U.length||(R=j()),{c(){e=a("div"),s=a("button"),n=c("Clicks: "),i=c(t[0]),r=o(),k=c(t[1]),w=c(": "),I=c(t[0]),_=o(),E=a("div");for(let t=0;t<y.length;t+=1)y[t].c();R&&R.c(),this.h()},l(a){e=h(a,"DIV",{class:!0});var o=l(e);s=h(o,"BUTTON",{class:!0});var c=l(s);n=d(c,"Clicks: "),i=d(c,t[0]),c.forEach(p),r=u(o),k=d(o,t[1]),w=d(o,": "),I=d(o,t[0]),o.forEach(p),_=u(a),E=h(a,"DIV",{class:!0});var f=l(E);for(let t=0;t<y.length;t+=1)y[t].l(f);R&&R.l(f),f.forEach(p),this.h()},h(){f(s,"class","svelte-16cw56t"),f(e,"class","buttonComp svelte-16cw56t"),f(E,"class","photos")},m(a,o){g(a,e,o),m(e,s),m(s,n),m(s,i),m(e,r),m(e,k),m(e,w),m(e,I),g(a,_,o),g(a,E,o);for(let t=0;t<y.length;t+=1)y[t].m(E,null);R&&R.m(E,null),T||(C=v(s,"click",t[5]),T=!0)},p(t,[e]){if(1&e&&$(i,t[0]),2&e&&$(k,t[1]),1&e&&$(I,t[0]),8&e){let s;for(U=t[3],s=0;s<U.length;s+=1){const n=L(t,U,s);y[s]?y[s].p(n,e):(y[s]=q(n),y[s].c(),y[s].m(E,null))}for(;s<y.length;s+=1)y[s].d(1);y.length=U.length,U.length?R&&(R.d(1),R=null):R||(R=j(),R.c(),R.m(E,null))}},i:b,o:b,d(t){t&&p(e),t&&p(_),t&&p(E),x(y,t),R&&R.d(),T=!1,C()}}}function P(t,e,s){var n=this&&this.__awaiter||function(t,e,s,n){return new(s||(s=Promise))((function(i,r){function a(t){try{c(n.next(t))}catch(e){r(e)}}function o(t){try{c(n.throw(t))}catch(e){r(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(a,o)}c((n=n.apply(t,e||[])).next())}))};let{count:i=0}=e,{text:r=""}=e;function a(){return s(0,i+=1)}let o=[];k((()=>n(void 0,void 0,void 0,(function*(){const t=yield fetch("https://jsonplaceholder.typicode.com/photos?_limit=20");s(3,o=yield t.json())}))));return t.$$set=t=>{"count"in t&&s(0,i=t.count),"text"in t&&s(1,r=t.text)},[i,r,a,o,class extends R{},()=>s(0,i=a())]}class A extends n{constructor(t){super(),i(this,t,P,z,r,{count:0,text:1,mainIncrement:2,PostService:4})}get mainIncrement(){return this.$$.ctx[2]}get PostService(){return this.$$.ctx[4]}}function S(t){let e,s,n,i,r,f,$,v,x,k;return r=new A({}),$=new A({props:{count:3,text:"Hello 1"}}),x=new A({props:{count:6,text:"Hello 2"}}),{c(){e=a("main"),s=a("h1"),n=c("Welcome to Mixcore"),i=o(),w(r.$$.fragment),f=o(),w($.$$.fragment),v=o(),w(x.$$.fragment)},l(t){e=h(t,"MAIN",{});var a=l(e);s=h(a,"H1",{});var o=l(s);n=d(o,"Welcome to Mixcore"),o.forEach(p),i=u(a),I(r.$$.fragment,a),f=u(a),I($.$$.fragment,a),v=u(a),I(x.$$.fragment,a),a.forEach(p)},m(t,a){g(t,e,a),m(e,s),m(s,n),m(e,i),_(r,e,null),m(e,f),_($,e,null),m(e,v),_(x,e,null),k=!0},p:b,i(t){k||(E(r.$$.fragment,t),E($.$$.fragment,t),E(x.$$.fragment,t),k=!0)},o(t){T(r.$$.fragment,t),T($.$$.fragment,t),T(x.$$.fragment,t),k=!1},d(t){t&&p(e),C(r),C($),C(x)}}}const M=!1;export default class extends n{constructor(t){super(),i(this,t,null,S,r,{})}}export{M as ssr};
