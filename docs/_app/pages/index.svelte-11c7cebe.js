import{a0 as t,a1 as e,S as s,i as a,s as i,a2 as r,D as n,E as o,e as l,a3 as c,k as h,t as d,j as u,c as g,a as m,d as p,n as f,g as v,m as S,b as T,a4 as C,f as N,$ as b,o as $,a5 as _,h as O,I as U,v as w,r as I,w as A,a6 as L,a7 as R,a8 as P,a9 as E,aa as y,z as M}from"../chunks/vendor-21326c95.js";class F{}function x(){return{withCredentials:!1,timeout:3e4,baseURL:"",headers:{common:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache","Content-Type":"application/json",Accept:"application/json"}},paramsSerializer:function(e){return t.stringify(e,{arrayFormat:"brackets"})}}}F.CONF_GLOBAL_SETTINGS="Global_Settings",F.CONF_LOCAL_SETTINGS="Local_Settings",F.CONF_TRANSLATOR="translator",F.CONF_AUTHORIZATION="Authorization",F.CONF_APP_URL="App_Url",F.CONF_CURRENT_CULTURE="Current_Culture",F.CONF_LAST_SYNC_CONFIGURATION="Last_Sync_Configuration";class D extends class{constructor(t){this._initializeResponseInterceptor=()=>{this.instance.interceptors.response.use(this._handleResponse,this._handleError),this.instance.interceptors.request.use(this._handleRequest,this._handleError)},this._handleRequest=t=>{if(this.instance.defaults.withCredentials){const e=this.getCredentialToken();e&&(t.headers.common[F.CONF_AUTHORIZATION]=e)}return t},this._handleResponse=({data:t})=>t,this._handleError=t=>Promise.reject(t);const s=t||x();s.baseURL||"undefined"!=typeof window&&(s.baseURL=localStorage.getItem(F.CONF_APP_URL)||window.location.origin),this.instance=e.create(s),this._initializeResponseInterceptor()}getCredentialToken(){return localStorage.getItem(F.CONF_AUTHORIZATION)?`Bearer ${localStorage.getItem(F.CONF_AUTHORIZATION)}`:""}}{constructor(t){super(t),this.token="",this.setAppUrl=this.setAppUrl.bind(this),this.getToken=this.getToken.bind(this),this.setToken=this.setToken.bind(this),this.getUri=this.instance.getUri.bind(this),this.request=this.instance.request.bind(this),this.get=this.instance.get.bind(this),this.options=this.instance.options.bind(this),this.delete=this.instance.delete.bind(this),this.head=this.instance.head.bind(this),this.post=this.instance.post.bind(this),this.put=this.instance.put.bind(this),this.patch=this.instance.patch.bind(this),this.success=this.success.bind(this),this.error=this.error.bind(this)}setAppUrl(t){this.instance.defaults.baseURL=t}getToken(){return`Bearer ${this.token}`}setToken(t){this.token=t}getUri(t){return this.getUri(t)}request(t){return this.request(t)}get(t,e){return this.get(t,e)}options(t,e){return this.options(t,e)}delete(t,e){return this.delete(t,e)}head(t,e){return this.head(t,e)}post(t,e,s){return this.post(t,e,s)}put(t,e,s){return this.put(t,e,s)}patch(t,e,s){return this.patch(t,e,s)}success(t){return t.data}error(t){throw t}}const k=new D;class G{}const B=new class{constructor(){this.cachedInMinutes=20,this.getAllSettings()}getAllSettings(t){if("undefined"!=typeof window&&(this.localizeSettings=localStorage.getItem(F.CONF_LOCAL_SETTINGS),this.globalSettings=JSON.parse(localStorage.getItem(F.CONF_GLOBAL_SETTINGS)||"{}"),this.translator=localStorage.getItem(F.CONF_TRANSLATOR)),this.isRenewSettings()){const e=`/rest/shared${t?`/${t}`:""}/get-shared-settings`;k.get(e).then((t=>{const e=t;this.globalSettings=e.globalSettings||new G,this.localizeSettings=e.localizeSettings,this.translator=e.translator,void 0!==typeof window&&(localStorage.setItem(F.CONF_GLOBAL_SETTINGS,JSON.stringify(this.globalSettings)),localStorage.setItem(F.CONF_LOCAL_SETTINGS,JSON.stringify(this.localizeSettings)),localStorage.setItem(F.CONF_TRANSLATOR,JSON.stringify(this.translator)),localStorage.setItem(F.CONF_LAST_SYNC_CONFIGURATION,this.globalSettings.lastUpdateConfiguration.toString()||""))}))}}setAppUrl(t){k.setAppUrl(t)}isRenewSettings(){const t=new Date;let e;void 0!==typeof window&&(e=localStorage.getItem(F.CONF_LAST_SYNC_CONFIGURATION));const s=new Date(e||"");return s.setMinutes(s.getMinutes()+20),!this.localizeSettings||!this.globalSettings||!this.translator||!e||t>s}};var H,z,j,q,J,V,Y,Z,Q,W,K,X,tt,et,st,at,it,rt;(z=H||(H={})).Portal="portal",z.Mvc="mvc",(q=j||(j={})).Asc="Asc",q.Desc="Desc",(V=J||(J={})).Page="page",V.Post="post",V.Module="module",V.Database="mix-database",V.DatabaseData="mix-database-data",(Z=Y||(Y={})).Deleted="Deleted",Z.Preview="Preview",Z.Published="Published",Z.Draft="Draft",Z.Schedule="Schedule",(W=Q||(Q={})).DateTime="DateTime",W.Date="Date",W.Time="Time",W.Duration="Duration",W.PhoneNumber="PhoneNumber",W.Double="Double",W.Text="Text",W.Html="Html",W.MultilineText="MultilineText",W.EmailAddress="EmailAddress",W.Password="Password",W.Url="Url",W.ImageUrl="ImageUrl",W.CreditCard="CreditCard",W.PostalCode="PostalCode",W.Upload="Upload",W.Color="Color",W.Boolean="Boolean",W.Icon="PhoneNumber",W.VideoYoutube="VideoYoutube",W.TuiEditor="TuiEditor",W.Integer="Integer",W.Reference="Reference",W.QRCode="QRCode",(X=K||(K={})).Page="Page",X.Module="Module",X.Post="Post",X.Database="Database",X.Uri="Uri",(et=tt||(tt={})).Content="Content",et.Data="Data",et.ListPost="ListPost",(at=st||(st={})).System="System",at.Home="Home",at.Article="Article",at.ListPost="ListPost",(rt=it||(it={})).Layouts="Layouts",rt.Pages="Pages",rt.Modules="Modules",rt.Forms="Forms",rt.Edms="Edms",rt.Posts="Posts",rt.Widgets="Widgets",rt.Masters="Masters";class nt extends class extends class{constructor(t,e,s,a,i){this.service=new D(i),this.service.instance.defaults.baseURL=t,this.modelType=e,this.viewName=s,this.specificulture=a}get modelUrl(){return this.specificulture?`/rest/${this.specificulture}/${this.modelType}/${this.viewName}`:`/rest/${this.modelType}/${this.viewName}`}getSingleModel(t,e){return this.service.instance.defaults.params=e,this.service.get(`${this.modelUrl}/${t}`)}getDefaultModel(t){return this.service.instance.defaults.params=t,this.service.get("default")}getListModel(t){return this.service.instance.defaults.params=t,this.service.get(this.modelUrl)}createModel(t){return this.service.post(this.modelUrl,t)}updateModel(t,e){return this.service.put(`${this.modelUrl}/${t}`,e)}updateFields(t,e){return this.service.patch(`${this.modelUrl}/${t}`,e)}deleteModel(t){return this.service.delete(`${t}`)}duplicateModel(t,e){return this.service.instance.defaults.params=e,this.service.get(`${this.modelUrl}/duplicate/${t}`)}exportListModel(t){return this.service.instance.defaults.params=t,this.service.get(`${this.modelUrl}/export`)}clearCache(t){return this.service.get(`${this.modelUrl}/remove-cache/${t}`)}setLanguage(t){this.specificulture=t}}{constructor(t){const e=localStorage.getItem(F.CONF_APP_URL)||window.location.origin,s=localStorage.getItem(F.CONF_CURRENT_CULTURE),a=H.Mvc,i=x();i.baseURL=e,i.withCredentials=!1,super(e,t,a,s,i)}}{constructor(){super(J.Post)}}function ot(t){let e,s,a,i,R,P,E,y,M,F,x,D,k,G,B,H,z,j,q,J,V,Y,Z=Math.floor(t[1]+1)+"",Q=Math.floor(t[1])+"";function W(e){t[6](e)}let K={min:4,max:20,invalidText:"Number must be between 4 and 20.",helperText:"Clusters provisioned in your region",label:"Clusters (4 min, 20 max)"};return void 0!==t[0]&&(K.value=t[0]),j=new r({props:K}),n.push((()=>o(j,"value",W))),{c(){e=l("div"),s=l("button"),a=c("svg"),i=c("path"),R=h(),P=l("div"),E=l("div"),y=l("strong"),M=d(Z),F=h(),x=l("strong"),D=d(Q),k=h(),G=l("button"),B=c("svg"),H=c("path"),z=h(),u(j.$$.fragment),this.h()},l(t){e=g(t,"DIV",{class:!0});var r=m(e);s=g(r,"BUTTON",{"aria-label":!0,class:!0});var n=m(s);a=g(n,"svg",{"aria-hidden":!0,viewBox:!0,class:!0},1);var o=m(a);i=g(o,"path",{d:!0,class:!0},1),m(i).forEach(p),o.forEach(p),n.forEach(p),R=f(r),P=g(r,"DIV",{class:!0});var l=m(P);E=g(l,"DIV",{class:!0,style:!0});var c=m(E);y=g(c,"STRONG",{style:!0,"aria-hidden":!0,class:!0});var h=m(y);M=v(h,Z),h.forEach(p),F=f(c),x=g(c,"STRONG",{class:!0});var d=m(x);D=v(d,Q),d.forEach(p),c.forEach(p),l.forEach(p),k=f(r),G=g(r,"BUTTON",{"aria-label":!0,class:!0});var u=m(G);B=g(u,"svg",{"aria-hidden":!0,viewBox:!0,class:!0},1);var T=m(B);H=g(T,"path",{d:!0,class:!0},1),m(H).forEach(p),T.forEach(p),u.forEach(p),r.forEach(p),z=f(t),S(j.$$.fragment,t),this.h()},h(){T(i,"d","M0,0.5 L1,0.5"),T(i,"class","svelte-ltn89m"),T(a,"aria-hidden","true"),T(a,"viewBox","0 0 1 1"),T(a,"class","svelte-ltn89m"),T(s,"aria-label","Decrease the counter by one"),T(s,"class","svelte-ltn89m"),C(y,"top","-100%"),T(y,"aria-hidden","true"),T(y,"class","svelte-ltn89m"),T(x,"class","svelte-ltn89m"),T(E,"class","counter-digits svelte-ltn89m"),C(E,"transform","translate(0, "+100*t[2]+"%)"),T(P,"class","counter-viewport svelte-ltn89m"),T(H,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),T(H,"class","svelte-ltn89m"),T(B,"aria-hidden","true"),T(B,"viewBox","0 0 1 1"),T(B,"class","svelte-ltn89m"),T(G,"aria-label","Increase the counter by one"),T(G,"class","svelte-ltn89m"),T(e,"class","counter svelte-ltn89m")},m(r,n){N(r,e,n),b(e,s),b(s,a),b(a,i),b(e,R),b(e,P),b(P,E),b(E,y),b(y,M),b(E,F),b(E,x),b(x,D),b(e,k),b(e,G),b(G,B),b(B,H),N(r,z,n),$(j,r,n),J=!0,V||(Y=[_(s,"click",t[4]),_(G,"click",t[5])],V=!0)},p(t,[e]){(!J||2&e)&&Z!==(Z=Math.floor(t[1]+1)+"")&&O(M,Z),(!J||2&e)&&Q!==(Q=Math.floor(t[1])+"")&&O(D,Q),(!J||4&e)&&C(E,"transform","translate(0, "+100*t[2]+"%)");const s={};!q&&1&e&&(q=!0,s.value=t[0],U((()=>q=!1))),j.$set(s)},i(t){J||(w(j.$$.fragment,t),J=!0)},o(t){I(j.$$.fragment,t),J=!1},d(t){t&&p(e),t&&p(z),A(j,t),V=!1,L(Y)}}}function lt(t,e,s){let a,i,r=0;const n=R();P(t,n,(t=>s(1,i=t)));return t.$$.update=()=>{var e;1&t.$$.dirty&&n.set(r),2&t.$$.dirty&&s(2,a=(i%(e=1)+e)%e)},[r,i,a,n,()=>s(0,r-=1),()=>s(0,r+=1),function(t){r=t,s(0,r)}]}class ct extends s{constructor(t){super(),a(this,t,lt,ot,i,{})}}function ht(t){let e;return{c(){e=d("Primary button")},l(t){e=v(t,"Primary button")},m(t,s){N(t,e,s)},d(t){t&&p(e)}}}function dt(t){let e,s,a,i,r,n,o,c,C,_,U,L,R,P,M=JSON.stringify(t[0])+"";return C=new ct({}),U=new E({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){e=h(),s=l("section"),a=l("h1"),i=d("HeaderSwitcher"),r=h(),n=l("p"),o=d("Select a transition option below and click on the App Switcher icon in\n\t  the top right."),c=h(),u(C.$$.fragment),_=h(),u(U.$$.fragment),L=h(),R=d(M),this.h()},l(t){y('[data-svelte="svelte-1anpopb"]',document.head).forEach(p),e=f(t),s=g(t,"SECTION",{class:!0});var l=m(s);a=g(l,"H1",{class:!0});var h=m(a);i=v(h,"HeaderSwitcher"),h.forEach(p),r=f(l),n=g(l,"P",{});var d=m(n);o=v(d,"Select a transition option below and click on the App Switcher icon in\n\t  the top right."),d.forEach(p),c=f(l),S(C.$$.fragment,l),_=f(l),S(U.$$.fragment,l),L=f(l),R=v(l,M),l.forEach(p),this.h()},h(){document.title="Home",T(a,"class","svelte-mjk9ig"),T(s,"class","svelte-mjk9ig")},m(t,l){N(t,e,l),N(t,s,l),b(s,a),b(a,i),b(s,r),b(s,n),b(n,o),b(s,c),$(C,s,null),b(s,_),$(U,s,null),b(s,L),b(s,R),P=!0},p(t,[e]){const s={};32&e&&(s.$$scope={dirty:e,ctx:t}),U.$set(s),(!P||1&e)&&M!==(M=JSON.stringify(t[0])+"")&&O(R,M)},i(t){P||(w(C.$$.fragment,t),w(U.$$.fragment,t),P=!0)},o(t){I(C.$$.fragment,t),I(U.$$.fragment,t),P=!1},d(t){t&&p(e),t&&p(s),A(C),A(U)}}}const ut=!1;function gt(t,e,s){var a=this&&this.__awaiter||function(t,e,s,a){return new(s||(s=Promise))((function(i,r){function n(t){try{l(a.next(t))}catch(e){r(e)}}function o(t){try{l(a.throw(t))}catch(e){r(e)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,o)}l((a=a.apply(t,e||[])).next())}))};let i,r=new nt;return M((()=>a(void 0,void 0,void 0,(function*(){console.log("Init Mix Params"),localStorage.setItem(F.CONF_APP_URL,"https://store.mixcore.org/api/v1"),localStorage.setItem(F.CONF_CURRENT_CULTURE,"en-us"),B.getAllSettings("en-us"),r.getListModel().then((t=>s(0,i=t)))})))),[i]}export default class extends s{constructor(t){super(),a(this,t,gt,dt,i,{})}}export{ut as ssr};
