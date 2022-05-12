(function(){"use strict";var e={1468:function(e,t,n){n.r(t)},3675:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(4367),o=n(6133),i=n(2751),a=n(3796),u=(n(1539),n(2222),n(7327),{loginEndpoint:"/login",registerEndpoint:"/jwt/register",refreshEndpoint:"/token/refresh/",logoutEndpoint:"/jwt/logout",tokenType:"Bearer",storageTokenKeyName:"access",storageRefreshTokenKeyName:"refresh"}),s=n(6665),c=function(){function e(t,n){var i=this;(0,o.Z)(this,e),(0,a.Z)(this,"axiosIns",null),(0,a.Z)(this,"jwtConfig",(0,r.Z)({},u)),(0,a.Z)(this,"isAlreadyFetchingAccessToken",!1),(0,a.Z)(this,"subscribers",[]),this.axiosIns=t,this.jwtConfig=(0,r.Z)((0,r.Z)({},this.jwtConfig),n),this.axiosIns.interceptors.response.use((function(e){return e}),(function(e){var t=e.config,n=e.response,r=t;if(n&&401===n.status){i.isAlreadyFetchingAccessToken||(i.isAlreadyFetchingAccessToken=!0,i.refreshToken().then((function(e){i.isAlreadyFetchingAccessToken=!1,i.setToken(e.data.token),i.onAccessTokenFetched(e.data.token)})));var o=new Promise((function(e){i.addSubscriber((function(t){r.headers.Authorization="".concat(i.jwtConfig.tokenType," ").concat(t),e(i.axiosIns(r))}))}));return o}return n&&403===n.status&&(localStorage.removeItem("access"),localStorage.removeItem("refresh"),s.Z.push("/login").then((function(){}))),Promise.reject(e)}))}return(0,i.Z)(e,[{key:"onAccessTokenFetched",value:function(e){this.subscribers=this.subscribers.filter((function(t){return t(e)}))}},{key:"addSubscriber",value:function(e){this.subscribers.push(e)}},{key:"getToken",value:function(){return localStorage.getItem(this.jwtConfig.storageTokenKeyName)}},{key:"getRefreshToken",value:function(){return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName)}},{key:"setToken",value:function(e){localStorage.setItem(this.jwtConfig.storageTokenKeyName,e)}},{key:"setRefreshToken",value:function(e){localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName,e)}},{key:"login",value:function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=this.axiosIns).post.apply(e,[this.jwtConfig.loginEndpoint].concat(n))}},{key:"register",value:function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=this.axiosIns).post.apply(e,[this.jwtConfig.registerEndpoint].concat(n))}},{key:"refreshToken",value:function(){return this.axiosIns.post(this.jwtConfig.refreshEndpoint,{refresh:this.getRefreshToken()})}}]),e}();function f(e,t){var n=new c(e,t);return{jwt:n}}var l=n(747),p=f(l.Z,{}),m=p.jwt,h=m},747:function(e,t,n){n(1539);var r=n(9669),o=n.n(r);o().defaults.baseURL="http://172.20.40.15:8000",o().defaults.timeout=6e4,o().defaults.headers.common["Content-Type"]="application/json",o().defaults.headers.common.Accept="application/json",o().interceptors.request.use((function(e){var t=localStorage.getItem("access");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){Promise.reject(e).then()})),t["Z"]=o()},7838:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(5706),o=n(144);o.Z.use(r.ZP);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.resolveLayout,{tag:"component"},[n("router-view",{key:e.$route.fullPath})],1)},a=[],u=(n(8309),n(4367)),s=function(){var e=(0,r.FN)().proxy,t=(0,r.qj)({route:e.$route});return(0,r.YP)((function(){return e.$route}),(function(e){t.route=e})),(0,u.Z)((0,u.Z)({},(0,r.BK)(t)),{},{router:e.$router})},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view",{key:e.$route.fullPath})],1)],1)},f=[],l={name:"LayoutBlank"},p=l,m=n(1001),h=n(3453),d=n.n(h),v=n(7524),g=n(7877),y=(0,m.Z)(p,c,f,!1,null,null,null),k=y.exports;d()(y,{VApp:v.Z,VMain:g.Z});var b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{staticClass:"rounded-lg",attrs:{app:"",absolute:"",color:"primary",dark:""}},[n("div",{staticClass:"boxed-container w-full"},[n("div",{staticClass:"d-flex align-center mx-6"},[n("v-spacer"),n("theme-switcher"),n("log-out-button")],1)])]),n("v-main",{staticClass:"grey lighten-4"},[n("div",{staticClass:"app-content-container boxed-container w-full pa-6"},[e._t("default")],2)]),n("v-footer",{staticClass:"px-0",attrs:{app:"",inset:"",color:"transparent",absolute:"",height:"56"}},[n("div",{staticClass:"boxed-container w-full"},[n("div",{staticClass:"mx-6 d-flex justify-space-between"},[n("span",[e._v(" © 2022 "),n("a",{staticClass:"text-decoration-none",attrs:{href:"https://mikrokreditbank.uz",target:"_blank"}},[e._v(" Mikrokreditbank ")])])])])])],1)},w=[],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-fade-transition",{attrs:{mode:"out-in"}},[n("v-icon",{key:e.$vuetify.theme.dark,on:{click:function(t){e.$vuetify.theme.dark=!e.$vuetify.theme.dark}}},[e._v(" "+e._s(e.$vuetify.theme.dark?e.icons.mdiWeatherSunny:e.icons.mdiWeatherNight)+" ")])],1)},Z=[],S=n(5317),x={setup:function(){return{icons:{mdiWeatherNight:S.j0g,mdiWeatherSunny:S.bFF}}}},E=x,A=n(5827),P=n(6428),C=(0,m.Z)(E,T,Z,!1,null,null,null),_=C.exports;d()(C,{VFadeTransition:A.Z5,VIcon:P.Z});var j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{attrs:{icon:""},on:{click:e.logout}},[n("v-icon",{attrs:{size:"22"}},[e._v(" "+e._s(e.icons.mdiLogoutVariant)+" ")])],1)},F=[],R={name:"LogOutButton",setup:function(){var e=function(){localStorage.removeItem("access"),location.reload()};return{logout:e,icons:{mdiLogoutVariant:S.JXX}}}},I=R,O=n(680),N=(0,m.Z)(I,j,F,!1,null,null,null),B=N.exports;d()(N,{VBtn:O.Z,VIcon:P.Z});var L={name:"LayoutContent",components:{LogOutButton:B,ThemeSwitcher:_},setup:function(){return{}}},$=L,D=n(8320),V=n(899),K=n(9762),M=(0,m.Z)($,b,w,!1,null,"68f0d11d",null),q=M.exports;d()(M,{VApp:v.Z,VAppBar:D.Z,VFooter:V.Z,VMain:g.Z,VSpacer:K.Z});var z={components:{LayoutBlank:k,LayoutContent:q},setup:function(){var e=s(),t=e.route,n=(0,r.Fl)((function(){return null===t.value.name?null:"blank"===t.value.meta.layout?"layout-blank":"layout-content"}));return{resolveLayout:n}}},U=z,W=(0,m.Z)(U,i,a,!1,null,null,null),H=W.exports,X=n(9132);n(1468);var Y={theme:{themes:{light:{primary:"#059646",accent:"#0d6efd",secondary:"#8A8D93",success:"#56CA00",info:"#16B1FF",warning:"#FFB400",error:"#FF4C51"},dark:{primary:"#059646",accent:"#0d6efd",secondary:"#8A8D93",success:"#56CA00",info:"#16B1FF",warning:"#FFB400",error:"#FF4C51"}}}};o.Z.use(X.Z);var J=new X.Z({preset:Y,icons:{iconfont:"mdiSvg"},theme:{options:{customProperties:!0,variations:!1}}}),G=n(6665),Q=n(767),ee=n(9278);n(747),n(3675);o.Z.use(ee.ZP),o.Z.config.productionTip=!1,new o.Z({router:G.Z,store:Q.Z,vuetify:J,render:function(e){return e(H)}}).$mount("#app")},6665:function(e,t,n){n(1539),n(8783),n(3948),n(6699);var r=n(144),o=n(8345),i=n(767);r.Z.use(o.Z);var a=[{path:"/",name:"home",component:function(){return Promise.all([n.e(459),n.e(224)]).then(n.bind(n,5117))},meta:{title:"Home",layout:"content",requiresAuth:!0}},{path:"/office",name:"office",component:function(){return Promise.all([n.e(271),n.e(459),n.e(898),n.e(264)]).then(n.bind(n,264))},meta:{title:"Office",layout:"content",requiresAuth:!0},beforeEnter:function(e,t,n){return i.Z.state.office.officeType?n():n({name:"home"})}},{path:"/front-office",name:"front-office",component:function(){return Promise.all([n.e(271),n.e(459),n.e(898),n.e(482)]).then(n.bind(n,1482))},meta:{title:"Front Office",layout:"content",requiresAuth:!0},beforeEnter:function(e,t,n){return i.Z.state.office.officeType?n():n({name:"home"})}},{path:"/back-office",name:"back-office",component:function(){return Promise.all([n.e(271),n.e(459),n.e(898),n.e(760)]).then(n.bind(n,2760))},meta:{title:"Back Office",layout:"content",requiresAuth:!0},beforeEnter:function(e,t,n){return i.Z.state.office.officeType?n():n({name:"home"})}},{path:"/auth-login",name:"auth-login",component:function(){return Promise.all([n.e(271),n.e(389)]).then(n.bind(n,8389))},meta:{title:"Login",layout:"blank",requiresAuth:!1}}],u=new o.Z({mode:"history",base:"/",routes:a});u.beforeEach((function(e,t,n){var r=["/auth-login"],o=localStorage.getItem("access"),i=!r.includes(e.path);return i&&!o?n({name:"auth-login"}):n()})),t["Z"]=u},767:function(e,t,n){n.d(t,{Z:function(){return Z}});var r={};n.r(r),n.d(r,{actions:function(){return h},getters:function(){return d},mutations:function(){return m},namespaced:function(){return l},state:function(){return p}});var o={};n.r(o),n.d(o,{actions:function(){return w},getters:function(){return T},mutations:function(){return b},namespaced:function(){return y},state:function(){return k}});var i=n(144),a=n(629),u=n(6198),s=(n(5666),n(747)),c={getDepartments:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=null,"front"!==t){e.next=6;break}return e.next=4,s.Z.get("/departments/1");case 4:r=e.sent,n=r.data;case 6:if("back"!==t){e.next=11;break}return e.next=9,s.Z.get("/departments/0");case 9:o=e.sent,n=o.data;case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getDepartmentPositions:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/positions/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getPositionTasks:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/tasks/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),sendApplication:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post("/reports",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},f=c,l=!0,p={officeType:null,departments:[],departmentPositions:[],positionTasks:[]},m={SET_OFFICE_TYPE:function(e,t){e.officeType=t},SET_DEPARTMENTS:function(e,t){e.departments=t},SET_DEPARTMENT_POSITIONS:function(e,t){e.departmentPositions=t},SET_POSITION_TASKS:function(e,t){e.positionTasks=t}},h={fetchDepartments:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.state,e.next=3,f.getDepartments(r.officeType);case 3:o=e.sent,n("SET_DEPARTMENTS",o);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),fetchDepartmentPositions:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t,n){var r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=n.departmentId,e.next=4,f.getDepartmentPositions(o);case 4:i=e.sent,r("SET_DEPARTMENT_POSITIONS",i);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),fetchPositionTasks:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t,n){var r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=n.positionId,e.next=4,f.getPositionTasks(o);case 4:i=e.sent,r("SET_POSITION_TASKS",i);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),sendApplication:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.tasks,e.next=3,f.sendApplication(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},d={departments:function(e){return e.departments},departmentPositions:function(e){return e.departmentPositions},positionTasks:function(e){return e.positionTasks}},v={login:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post("/api/auth/login",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},g=v,y=!0,k={user:null},b={SET_USER:function(e,t){e.user=t}},w={login:function(e,t){var n=e.commit,r=t.login,o=t.password,i=g.login({login:r,password:o});n("SET_USER",i)}},T={user:function(e){return e.user}};i.Z.use(a.ZP);var Z=new a.ZP.Store({modules:{office:r,auth:o}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{224:"cdf98c8c",264:"05be3a84",271:"f8a50fee",389:"aaf6bd2b",459:"651e64de",482:"25979a63",760:"46ecc4ec",898:"4812b1c4"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{224:"c1445e4a",271:"b287fa34",389:"6c2b2cd4",898:"a47d8db9"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mkb-analysis:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){u=l;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={224:1,271:1,389:1,898:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var f=s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkmkb_analysis"]=self["webpackChunkmkb_analysis"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7838)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.52814c75.js.map