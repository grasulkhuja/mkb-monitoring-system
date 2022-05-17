(function(){"use strict";var t={1468:function(t,e,n){n.r(e)},3675:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(3796),o={loginEndpoint:"/login",registerEndpoint:"/jwt/register",refreshEndpoint:"/token/refresh/",logoutEndpoint:"/jwt/logout",tokenType:"Bearer",storageTokenKeyName:"access",storageRefreshTokenKeyName:"refresh"},a=n(6665);class s{constructor(t,e){(0,r.Z)(this,"axiosIns",null),(0,r.Z)(this,"jwtConfig",{...o}),(0,r.Z)(this,"isAlreadyFetchingAccessToken",!1),(0,r.Z)(this,"subscribers",[]),this.axiosIns=t,this.jwtConfig={...this.jwtConfig,...e},this.axiosIns.interceptors.response.use((t=>t),(t=>{const{config:e,response:n}=t,r=e;if(n&&401===n.status){this.isAlreadyFetchingAccessToken||(this.isAlreadyFetchingAccessToken=!0,this.refreshToken().then((t=>{this.isAlreadyFetchingAccessToken=!1,this.setToken(t.data.token),this.onAccessTokenFetched(t.data.token)})));const t=new Promise((t=>{this.addSubscriber((e=>{r.headers.Authorization=`${this.jwtConfig.tokenType} ${e}`,t(this.axiosIns(r))}))}));return t}return n&&403===n.status&&(localStorage.removeItem("access"),localStorage.removeItem("refresh"),a.Z.push("/login").then((()=>{}))),Promise.reject(t)}))}onAccessTokenFetched(t){this.subscribers=this.subscribers.filter((e=>e(t)))}addSubscriber(t){this.subscribers.push(t)}getToken(){return localStorage.getItem(this.jwtConfig.storageTokenKeyName)}getRefreshToken(){return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName)}setToken(t){localStorage.setItem(this.jwtConfig.storageTokenKeyName,t)}setRefreshToken(t){localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName,t)}login(...t){return this.axiosIns.post(this.jwtConfig.loginEndpoint,...t)}register(...t){return this.axiosIns.post(this.jwtConfig.registerEndpoint,...t)}refreshToken(){return this.axiosIns.post(this.jwtConfig.refreshEndpoint,{refresh:this.getRefreshToken()})}}function i(t,e){const n=new s(t,e);return{jwt:n}}var c=n(747);const{jwt:u}=i(c.Z,{});var l=u},747:function(t,e,n){var r=n(9669),o=n.n(r);o().defaults.baseURL="http://172.20.40.15:8000",o().defaults.timeout=6e4,o().defaults.headers.common["Content-Type"]="application/json",o().defaults.headers.common.Accept="application/json",o().interceptors.request.use((t=>{const e=localStorage.getItem("access");return e&&(t.headers.Authorization=`Bearer ${e}`),t}),(t=>{Promise.reject(t).then()})),e["Z"]=o()},2883:function(t,e,n){var r={};n.r(r),n.d(r,{actions:function(){return lt},getters:function(){return dt},mutations:function(){return ut},namespaced:function(){return it},state:function(){return ct}});var o={};n.r(o),n.d(o,{actions:function(){return vt},getters:function(){return yt},mutations:function(){return gt},namespaced:function(){return mt},state:function(){return ht}});var a=n(5706),s=n(144);s.Z.use(a.ZP);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.resolveLayout,{tag:"component"},[n("router-view",{key:t.$route.fullPath})],1)},c=[];const u=()=>{const t=(0,a.FN)().proxy,e=(0,a.qj)({route:t.$route});return(0,a.YP)((()=>t.$route),(t=>{e.route=t})),{...(0,a.BK)(e),router:t.$router}};var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("router-view",{key:t.$route.fullPath})],1)],1)},d=[],f={name:"LayoutBlank"},p=f,m=n(1001),h=n(3453),g=n.n(h),v=n(7524),y=n(7877),b=(0,m.Z)(p,l,d,!1,null,null,null),T=b.exports;g()(b,{VApp:v.Z,VMain:y.Z});var k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{staticClass:"rounded-lg",attrs:{app:"",absolute:"",color:"primary",dark:""}},[r("div",{staticClass:"boxed-container w-full"},[r("div",{staticClass:"d-flex align-center mx-6"},[r("v-img",{staticClass:"ml-4 mt-2",attrs:{src:n(8704),"max-width":"140"}}),r("v-spacer"),r("theme-switcher"),r("log-out-button")],1)])]),r("v-main",{staticClass:"grey lighten-4"},[r("div",{staticClass:"app-content-container boxed-container w-full pa-6"},[t._t("default")],2)]),r("v-footer",{staticClass:"px-0",attrs:{app:"",inset:"",color:"transparent",absolute:"",height:"56"}},[r("div",{staticClass:"boxed-container w-full"},[r("div",{staticClass:"mx-6 d-flex justify-space-between"},[r("span",[t._v(" © 2022 "),r("a",{staticClass:"text-decoration-none",attrs:{href:"https://mikrokreditbank.uz",target:"_blank"}},[t._v(" Mikrokreditbank ")])])])])])],1)},w=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-fade-transition",{attrs:{mode:"out-in"}},[n("v-icon",{key:t.$vuetify.theme.dark,on:{click:function(e){t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},[t._v(" "+t._s(t.$vuetify.theme.dark?t.icons.mdiWeatherSunny:t.icons.mdiWeatherNight)+" ")])],1)},P=[],A=n(5317),E={setup(){return{icons:{mdiWeatherNight:A.j0g,mdiWeatherSunny:A.bFF}}}},Z=E,C=n(5827),_=n(6428),x=(0,m.Z)(Z,S,P,!1,null,null,null),I=x.exports;g()(x,{VFadeTransition:C.Z5,VIcon:_.Z});var j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:""},on:{click:t.logout}},[n("v-icon",{attrs:{size:"22"}},[t._v(" "+t._s(t.icons.mdiLogoutVariant)+" ")])],1)},F=[],O={name:"LogOutButton",setup(){const t=()=>{localStorage.removeItem("access"),location.reload()};return{logout:t,icons:{mdiLogoutVariant:A.JXX}}}},L=O,N=n(680),R=(0,m.Z)(L,j,F,!1,null,null,null),D=R.exports;g()(R,{VBtn:N.Z,VIcon:_.Z});var $={name:"LayoutContent",components:{LogOutButton:D,ThemeSwitcher:I},setup(){return{}}},B=$,M=n(8320),V=n(899),K=n(7047),q=n(9762),U=(0,m.Z)(B,k,w,!1,null,"0124261a",null),z=U.exports;g()(U,{VApp:v.Z,VAppBar:M.Z,VFooter:V.Z,VImg:K.Z,VMain:y.Z,VSpacer:q.Z});var Y={components:{LayoutBlank:T,LayoutContent:z},setup(){const{route:t}=u(),e=(0,a.Fl)((()=>null===t.value.name?null:"blank"===t.value.meta.layout?"layout-blank":"layout-content"));return{resolveLayout:e}}},W=Y,H=(0,m.Z)(W,i,c,!1,null,null,null),Q=H.exports,X=n(9132);n(1468);var J={theme:{themes:{light:{primary:"#059646",accent:"#0d6efd",secondary:"#8A8D93",success:"#56CA00",info:"#16B1FF",warning:"#FFB400",error:"#FF4C51"},dark:{primary:"#059646",accent:"#0d6efd",secondary:"#8A8D93",success:"#56CA00",info:"#16B1FF",warning:"#FFB400",error:"#FF4C51"}}}},G={badge:"знак",close:"Yopish",dataIterator:{noResultsText:"Не найдено подходящих записей",loadingText:"Ma'lumotlar yuklanmoqda"},dataTable:{itemsPerPageText:"Qatorlar soni:",ariaLabel:{sortDescending:"Упорядочено по убыванию.",sortAscending:"Упорядочено по возрастанию.",sortNone:"Не упорядочено.",activateNone:"Активируйте, чтобы убрать сортировку.",activateDescending:"Активируйте для упорядочивания убыванию.",activateAscending:"Активируйте для упорядочивания по возрастанию."},sortBy:"Сортировать по"},dataFooter:{itemsPerPageText:"Qatorlar soni:",itemsPerPageAll:"Hammasi",nextPage:"Следующая страница",prevPage:"Предыдущая страница",firstPage:"Первая страница",lastPage:"Последняя страница",pageText:"{2} dan {0}-{1}"},datePicker:{itemsSelected:"{0} выбран",nextMonthAriaLabel:"Следующий месяц",nextYearAriaLabel:"Следующий год",prevMonthAriaLabel:"Прошлый месяц",prevYearAriaLabel:"Предыдущий год"},noDataText:"Ma'lumotlar topilmadi",carousel:{prev:"Предыдущий слайд",next:"Следующий слайд",ariaLabel:{delimiter:"Слайд {0} из {1}"}},calendar:{moreEvents:"Еще {0}"},fileInput:{counter:"Файлов: {0}",counterSize:"Файлов: {0} (всего {1})"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Навигация по страницам",next:"Keyingi sahifa",previous:"Oldingi sahifa",page:"{0} sahifaga o'tish",currentPage:"Текущая страница, Страница {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}},tt=n(413);s.Z.use(X.Z);var et=new X.Z({preset:J,icons:{iconfont:"mdiSvg"},theme:{options:{customProperties:!0,variations:!1}},lang:{locales:{uz:G,ru:tt.Z},current:"uz"}}),nt=n(6665),rt=n(629),ot=n(747);const at={getDepartments:async t=>{let e=null;if("front"===t){const t=await ot.Z.get("/departments/1");e=t.data}if("back"===t){const t=await ot.Z.get("/departments/0");e=t.data}return e},getDepartmentPositions:async t=>{const{data:e}=await ot.Z.get(`/positions/${t}`);return e},getPositionTasks:async t=>{const{data:e}=await ot.Z.get(`/tasks/${t}`);return e},sendApplication:async(t,e)=>{const{data:n}=await ot.Z.post("/reports",{date:t,application:e});return n},getStatistics:async()=>{const{data:t}=await ot.Z.get("/statistics");return t},downloadReport:async()=>{const{data:t}=await ot.Z.get("/getxlsx",{responseType:"blob"}),e=window.URL.createObjectURL(new Blob([t])),n=document.createElement("a");return n.href=e,n.setAttribute("download","Statistika.xlsx"),document.body.appendChild(n),n.click(),new File([t],"name")}};var st=at;const it=!0,ct={officeType:null,departments:[],departmentPositions:[],positionTasks:[],statistics:[]},ut={SET_OFFICE_TYPE(t,e){t.officeType=e},SET_DEPARTMENTS(t,e){t.departments=e},SET_DEPARTMENT_POSITIONS(t,e){t.departmentPositions=e},SET_POSITION_TASKS(t,e){t.positionTasks=e},SET_STATISTICS(t,e){t.statistics=e}},lt={fetchDepartments:async({commit:t,state:e})=>{const n=await st.getDepartments(e.officeType);t("SET_DEPARTMENTS",n)},fetchDepartmentPositions:async({commit:t},{departmentId:e})=>{const n=await st.getDepartmentPositions(e);t("SET_DEPARTMENT_POSITIONS",n)},fetchPositionTasks:async({commit:t},{positionId:e})=>{const n=await st.getPositionTasks(e);t("SET_POSITION_TASKS",n)},sendApplication:async(t,{date:e,tasks:n})=>await st.sendApplication(e,n),fetchStatistics:async({commit:t})=>{const e=await st.getStatistics();t("SET_STATISTICS",e)},downloadReport:async()=>await st.downloadReport()},dt={departments:t=>t.departments,departmentPositions:t=>t.departmentPositions,positionTasks:t=>t.positionTasks,statistics:t=>t.statistics},ft={login:async t=>{const{data:e}=await ot.Z.post("/api/auth/login",t);return e},getUserData:async()=>{const{data:t}=await ot.Z.get("/getalldata");return t}};var pt=ft;const mt=!0,ht={token:null,user:null},gt={SET_TOKEN(t,e){t.token=e},SET_USER(t,e){t.user=e}},vt={login:({commit:t},{login:e,password:n})=>{const r=pt.login({login:e,password:n});t("SET_TOKEN",r)},fetchUserData:async({commit:t})=>{const e=await pt.getUserData();t("SET_USER",e)}},yt={token:t=>t.token,user:t=>t.user};s.Z.use(rt.ZP);var bt=new rt.ZP.Store({modules:{office:r,auth:o}}),Tt=n(9278);n(3675);s.Z.use(Tt.ZP),s.Z.config.productionTip=!1,new s.Z({router:nt.Z,store:bt,vuetify:et,render:t=>t(Q)}).$mount("#app")},6665:function(t,e,n){n(6699);var r=n(144),o=n(8345);r.Z.use(o.Z);const a=[{path:"/",name:"home",component:()=>Promise.all([n.e(459),n.e(224)]).then(n.bind(n,5117)),meta:{title:"Home",layout:"content",requiresAuth:!0},redirect:{name:"reports-add"}},{path:"/reports/add",name:"reports-add",component:()=>Promise.all([n.e(77),n.e(459),n.e(253),n.e(873)]).then(n.bind(n,9873)),meta:{title:"Add Report",layout:"content",requiresAuth:!0}},{path:"/reports/list",name:"reports-list",component:()=>Promise.all([n.e(77),n.e(459),n.e(253),n.e(74)]).then(n.bind(n,4074)),meta:{title:"ReportsListView",layout:"content",requiresAuth:!0}},{path:"/auth-login",name:"auth-login",component:()=>Promise.all([n.e(77),n.e(886)]).then(n.bind(n,3886)),meta:{title:"Login",layout:"blank",requiresAuth:!1}}],s=new o.Z({mode:"history",base:"/",routes:a});s.beforeEach(((t,e,n)=>{const r=["/auth-login"],o=localStorage.getItem("access"),a=!r.includes(t.path);return a&&!o?n({name:"auth-login"}):n()})),e["Z"]=s},8704:function(t,e,n){t.exports=n.p+"img/logo1 (2).eb2fcfa9.png"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var i=!0,c=0;c<r.length;c++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(i=!1,a<s&&(s=a));if(i){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{74:"e2bb59f8",77:"c844a6e4",224:"407b9593",253:"21db9dd8",459:"43ffd324",873:"006fc2f1",886:"4bcafd21"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{74:"9bf435bf",77:"b287fa34",224:"c1445e4a",253:"0fb1ec84",873:"ed9a329d",886:"6c2b2cd4"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="mkb-analysis:";n.l=function(r,o,a,s){if(t[r])t[r].push(o);else{var i,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+a){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+a),i.src=r),t[r]=[o];var f=function(e,n){i.onerror=i.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){o=s[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var s=n.miniCssF(r),i=n.p+s;if(e(s,i))return o();t(r,i,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={74:1,77:1,224:1,253:1,873:1,886:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var s=n.p+n.u(e),i=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}};n.l(s,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,s=r[0],i=r[1],c=r[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var l=c(n)}for(e&&e(r);u<s.length;u++)a=s[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkmkb_analysis"]=self["webpackChunkmkb_analysis"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2883)}));r=n.O(r)})();
//# sourceMappingURL=app.20fe481f.js.map