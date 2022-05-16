(function(){"use strict";var e={1468:function(e,t,n){n.r(t)},3675:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(3796),r={loginEndpoint:"/login",registerEndpoint:"/jwt/register",refreshEndpoint:"/token/refresh/",logoutEndpoint:"/jwt/logout",tokenType:"Bearer",storageTokenKeyName:"access",storageRefreshTokenKeyName:"refresh"},a=n(6665);class i{constructor(e,t){(0,o.Z)(this,"axiosIns",null),(0,o.Z)(this,"jwtConfig",{...r}),(0,o.Z)(this,"isAlreadyFetchingAccessToken",!1),(0,o.Z)(this,"subscribers",[]),this.axiosIns=e,this.jwtConfig={...this.jwtConfig,...t},this.axiosIns.interceptors.response.use((e=>e),(e=>{const{config:t,response:n}=e,o=t;if(n&&401===n.status){this.isAlreadyFetchingAccessToken||(this.isAlreadyFetchingAccessToken=!0,this.refreshToken().then((e=>{this.isAlreadyFetchingAccessToken=!1,this.setToken(e.data.token),this.onAccessTokenFetched(e.data.token)})));const e=new Promise((e=>{this.addSubscriber((t=>{o.headers.Authorization=`${this.jwtConfig.tokenType} ${t}`,e(this.axiosIns(o))}))}));return e}return n&&403===n.status&&(localStorage.removeItem("access"),localStorage.removeItem("refresh"),a.Z.push("/login").then((()=>{}))),Promise.reject(e)}))}onAccessTokenFetched(e){this.subscribers=this.subscribers.filter((t=>t(e)))}addSubscriber(e){this.subscribers.push(e)}getToken(){return localStorage.getItem(this.jwtConfig.storageTokenKeyName)}getRefreshToken(){return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName)}setToken(e){localStorage.setItem(this.jwtConfig.storageTokenKeyName,e)}setRefreshToken(e){localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName,e)}login(...e){return this.axiosIns.post(this.jwtConfig.loginEndpoint,...e)}register(...e){return this.axiosIns.post(this.jwtConfig.registerEndpoint,...e)}refreshToken(){return this.axiosIns.post(this.jwtConfig.refreshEndpoint,{refresh:this.getRefreshToken()})}}function s(e,t){const n=new i(e,t);return{jwt:n}}var c=n(747);const{jwt:u}=s(c.Z,{});var l=u},747:function(e,t,n){var o=n(9669),r=n.n(o);r().defaults.baseURL="http://172.20.40.15:8000",r().defaults.timeout=6e4,r().defaults.headers.common["Content-Type"]="application/json",r().defaults.headers.common.Accept="application/json",r().interceptors.request.use((e=>{const t=localStorage.getItem("access");return t&&(e.headers.Authorization=`Bearer ${t}`),e}),(e=>{Promise.reject(e).then()})),t["Z"]=r()},2135:function(e,t,n){var o=n(5706),r=n(144);r.Z.use(o.ZP);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.resolveLayout,{tag:"component"},[n("router-view",{key:e.$route.fullPath})],1)},i=[];const s=()=>{const e=(0,o.FN)().proxy,t=(0,o.qj)({route:e.$route});return(0,o.YP)((()=>e.$route),(e=>{t.route=e})),{...(0,o.BK)(t),router:e.$router}};var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view",{key:e.$route.fullPath})],1)],1)},u=[],l={name:"LayoutBlank"},f=l,d=n(1001),p=n(3453),m=n.n(p),h=n(7524),g=n(7877),v=(0,d.Z)(f,c,u,!1,null,null,null),y=v.exports;m()(v,{VApp:h.Z,VMain:g.Z});var b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{staticClass:"rounded-lg",attrs:{app:"",absolute:"",color:"primary",dark:""}},[n("div",{staticClass:"boxed-container w-full"},[n("div",{staticClass:"d-flex align-center mx-6"},[n("v-spacer"),n("theme-switcher"),n("log-out-button")],1)])]),n("v-main",{staticClass:"grey lighten-4"},[n("div",{staticClass:"app-content-container boxed-container w-full pa-6"},[e._t("default")],2)]),n("v-footer",{staticClass:"px-0",attrs:{app:"",inset:"",color:"transparent",absolute:"",height:"56"}},[n("div",{staticClass:"boxed-container w-full"},[n("div",{staticClass:"mx-6 d-flex justify-space-between"},[n("span",[e._v(" © 2022 "),n("a",{staticClass:"text-decoration-none",attrs:{href:"https://mikrokreditbank.uz",target:"_blank"}},[e._v(" Mikrokreditbank ")])])])])])],1)},T=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-fade-transition",{attrs:{mode:"out-in"}},[n("v-icon",{key:e.$vuetify.theme.dark,on:{click:function(t){e.$vuetify.theme.dark=!e.$vuetify.theme.dark}}},[e._v(" "+e._s(e.$vuetify.theme.dark?e.icons.mdiWeatherSunny:e.icons.mdiWeatherNight)+" ")])],1)},w=[],S=n(5317),P={setup(){return{icons:{mdiWeatherNight:S.j0g,mdiWeatherSunny:S.bFF}}}},A=P,E=n(5827),Z=n(6428),_=(0,d.Z)(A,k,w,!1,null,null,null),C=_.exports;m()(_,{VFadeTransition:E.Z5,VIcon:Z.Z});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{attrs:{icon:""},on:{click:e.logout}},[n("v-icon",{attrs:{size:"22"}},[e._v(" "+e._s(e.icons.mdiLogoutVariant)+" ")])],1)},I=[],j={name:"LogOutButton",setup(){const e=()=>{localStorage.removeItem("access"),location.reload()};return{logout:e,icons:{mdiLogoutVariant:S.JXX}}}},F=j,O=n(680),L=(0,d.Z)(F,x,I,!1,null,null,null),N=L.exports;m()(L,{VBtn:O.Z,VIcon:Z.Z});var R={name:"LayoutContent",components:{LogOutButton:N,ThemeSwitcher:C},setup(){return{}}},D=R,$=n(8320),B=n(899),M=n(9762),V=(0,d.Z)(D,b,T,!1,null,"746636ba",null),K=V.exports;m()(V,{VApp:h.Z,VAppBar:$.Z,VFooter:B.Z,VMain:g.Z,VSpacer:M.Z});var q={components:{LayoutBlank:y,LayoutContent:K},setup(){const{route:e}=s(),t=(0,o.Fl)((()=>null===e.value.name?null:"blank"===e.value.meta.layout?"layout-blank":"layout-content"));return{resolveLayout:t}}},U=q,z=(0,d.Z)(U,a,i,!1,null,null,null),Y=z.exports,W=n(9132);n(1468);var H={theme:{themes:{light:{primary:"#059646",accent:"#0d6efd",secondary:"#8A8D93",success:"#56CA00",info:"#16B1FF",warning:"#FFB400",error:"#FF4C51"},dark:{primary:"#059646",accent:"#0d6efd",secondary:"#8A8D93",success:"#56CA00",info:"#16B1FF",warning:"#FFB400",error:"#FF4C51"}}}},Q={badge:"знак",close:"Yopish",dataIterator:{noResultsText:"Не найдено подходящих записей",loadingText:"Ma'lumotlar yuklanmoqda"},dataTable:{itemsPerPageText:"Qatorlar soni:",ariaLabel:{sortDescending:"Упорядочено по убыванию.",sortAscending:"Упорядочено по возрастанию.",sortNone:"Не упорядочено.",activateNone:"Активируйте, чтобы убрать сортировку.",activateDescending:"Активируйте для упорядочивания убыванию.",activateAscending:"Активируйте для упорядочивания по возрастанию."},sortBy:"Сортировать по"},dataFooter:{itemsPerPageText:"Qatorlar soni:",itemsPerPageAll:"Hammasi",nextPage:"Следующая страница",prevPage:"Предыдущая страница",firstPage:"Первая страница",lastPage:"Последняя страница",pageText:"{2} dan {0}-{1}"},datePicker:{itemsSelected:"{0} выбран",nextMonthAriaLabel:"Следующий месяц",nextYearAriaLabel:"Следующий год",prevMonthAriaLabel:"Прошлый месяц",prevYearAriaLabel:"Предыдущий год"},noDataText:"Ma'lumotlar topilmadi",carousel:{prev:"Предыдущий слайд",next:"Следующий слайд",ariaLabel:{delimiter:"Слайд {0} из {1}"}},calendar:{moreEvents:"Еще {0}"},fileInput:{counter:"Файлов: {0}",counterSize:"Файлов: {0} (всего {1})"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Навигация по страницам",next:"Keyingi sahifa",previous:"Oldingi sahifa",page:"{0} sahifaga o'tish",currentPage:"Текущая страница, Страница {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}},X=n(413);r.Z.use(W.Z);var J=new W.Z({preset:H,icons:{iconfont:"mdiSvg"},theme:{options:{customProperties:!0,variations:!1}},lang:{locales:{uz:Q,ru:X.Z},current:"uz"}}),G=n(6665),ee=n(767),te=n(9278);n(747),n(3675);r.Z.use(te.ZP),r.Z.config.productionTip=!1,new r.Z({router:G.Z,store:ee.Z,vuetify:J,render:e=>e(Y)}).$mount("#app")},6665:function(e,t,n){n(6699);var o=n(144),r=n(8345),a=n(767);o.Z.use(r.Z);const i=[{path:"/",name:"home",component:()=>Promise.all([n.e(459),n.e(224)]).then(n.bind(n,5117)),meta:{title:"Home",layout:"content",requiresAuth:!0}},{path:"/reports/add",name:"reports-add",component:()=>Promise.all([n.e(641),n.e(459),n.e(253),n.e(959),n.e(94),n.e(782)]).then(n.bind(n,4417)),meta:{title:"Add Report",layout:"content",requiresAuth:!0}},{path:"/reports/list",name:"reports-list",component:()=>Promise.all([n.e(641),n.e(459),n.e(253),n.e(445)]).then(n.bind(n,7445)),meta:{title:"ReportsListView",layout:"content",requiresAuth:!0}},{path:"/office",name:"office",component:()=>Promise.all([n.e(641),n.e(459),n.e(253),n.e(959),n.e(94),n.e(511)]).then(n.bind(n,3770)),meta:{title:"Office",layout:"content",requiresAuth:!0},beforeEnter(e,t,n){return a.Z.state.office.officeType?n():n({name:"home"})}},{path:"/front-office",name:"front-office",component:()=>Promise.all([n.e(641),n.e(459),n.e(253),n.e(959),n.e(946)]).then(n.bind(n,1482)),meta:{title:"Front Office",layout:"content",requiresAuth:!0},beforeEnter(e,t,n){return a.Z.state.office.officeType?n():n({name:"home"})}},{path:"/back-office",name:"back-office",component:()=>Promise.all([n.e(641),n.e(459),n.e(253),n.e(959),n.e(180)]).then(n.bind(n,2760)),meta:{title:"Back Office",layout:"content",requiresAuth:!0},beforeEnter(e,t,n){return a.Z.state.office.officeType?n():n({name:"home"})}},{path:"/auth-login",name:"auth-login",component:()=>Promise.all([n.e(641),n.e(380)]).then(n.bind(n,3380)),meta:{title:"Login",layout:"blank",requiresAuth:!1}}],s=new r.Z({mode:"history",base:"/",routes:i});s.beforeEach(((e,t,n)=>{const o=["/auth-login"],r=localStorage.getItem("access"),a=!o.includes(e.path);return a&&!r?n({name:"auth-login"}):n()})),t["Z"]=s},767:function(e,t,n){n.d(t,{Z:function(){return w}});var o={};n.r(o),n.d(o,{actions:function(){return p},getters:function(){return m},mutations:function(){return d},namespaced:function(){return l},state:function(){return f}});var r={};n.r(r),n.d(r,{actions:function(){return T},getters:function(){return k},mutations:function(){return b},namespaced:function(){return v},state:function(){return y}});var a=n(144),i=n(629),s=n(747);const c={getDepartments:async e=>{let t=null;if("front"===e){const e=await s.Z.get("/departments/1");t=e.data}if("back"===e){const e=await s.Z.get("/departments/0");t=e.data}return t},getDepartmentPositions:async e=>{const{data:t}=await s.Z.get(`/positions/${e}`);return t},getPositionTasks:async e=>{const{data:t}=await s.Z.get(`/tasks/${e}`);return t},sendApplication:async e=>{const{data:t}=await s.Z.post("/reports",e);return t},getStatistics:async()=>{const{data:e}=await s.Z.get("/statistics");return e},downloadReport:async()=>{const{data:e}=await s.Z.get("/getxlsx",{responseType:"blob"}),t=window.URL.createObjectURL(new Blob([e])),n=document.createElement("a");return n.href=t,n.setAttribute("download","Statistika.xlsx"),document.body.appendChild(n),n.click(),new File([e],"name")}};var u=c;const l=!0,f={officeType:null,departments:[],departmentPositions:[],positionTasks:[],statistics:[]},d={SET_OFFICE_TYPE(e,t){e.officeType=t},SET_DEPARTMENTS(e,t){e.departments=t},SET_DEPARTMENT_POSITIONS(e,t){e.departmentPositions=t},SET_POSITION_TASKS(e,t){e.positionTasks=t},SET_STATISTICS(e,t){e.statistics=t}},p={fetchDepartments:async({commit:e,state:t})=>{const n=await u.getDepartments(t.officeType);e("SET_DEPARTMENTS",n)},fetchDepartmentPositions:async({commit:e},{departmentId:t})=>{const n=await u.getDepartmentPositions(t);e("SET_DEPARTMENT_POSITIONS",n)},fetchPositionTasks:async({commit:e},{positionId:t})=>{const n=await u.getPositionTasks(t);e("SET_POSITION_TASKS",n)},sendApplication:async(e,{tasks:t})=>await u.sendApplication(t),fetchStatistics:async({commit:e})=>{const t=await u.getStatistics();e("SET_STATISTICS",t)},downloadReport:async()=>await u.downloadReport()},m={departments:e=>e.departments,departmentPositions:e=>e.departmentPositions,positionTasks:e=>e.positionTasks,statistics:e=>e.statistics},h={login:async e=>{const{data:t}=await s.Z.post("/api/auth/login",e);return t},getUserData:async()=>{const{data:e}=await s.Z.get("/getalldata");return e}};var g=h;const v=!0,y={token:null,user:null},b={SET_TOKEN(e,t){e.token=t},SET_USER(e,t){e.user=t}},T={login:({commit:e},{login:t,password:n})=>{const o=g.login({login:t,password:n});e("SET_TOKEN",o)},fetchUserData:async({commit:e})=>{const t=await g.getUserData();e("SET_USER",t)}},k={token:e=>e.token,user:e=>e.user};a.Z.use(i.ZP);var w=new i.ZP.Store({modules:{office:o,auth:r}})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{94:"c327519c",180:"05662459",224:"4f5704af",253:"7a0e8c55",380:"4f78653d",445:"db933dba",459:"43ffd324",511:"2f91a480",641:"f34b668b",782:"55c5ee76",946:"66e9506e",959:"db1c6c02"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{180:"876f1f11",224:"c1445e4a",253:"0fb1ec84",380:"6c2b2cd4",445:"9bf435bf",511:"2f4147e4",641:"b287fa34",782:"ed9a329d",946:"876f1f11"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mkb-analysis:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+a){s=f;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return r();e(o,s,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={180:1,224:1,253:1,380:1,445:1,511:1,641:1,782:1,946:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunkmkb_analysis"]=self["webpackChunkmkb_analysis"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2135)}));o=n.O(o)})();
//# sourceMappingURL=app.9806bab1.js.map