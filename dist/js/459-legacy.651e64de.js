(self["webpackChunkmkb_analysis"]=self["webpackChunkmkb_analysis"]||[]).push([[459],{5631:function(t,e,n){"use strict";var i=n(3070).f,o=n(30),r=n(9190),a=n(9974),s=n(5787),c=n(408),u=n(654),l=n(6340),d=n(9781),v=n(2423).fastKey,h=n(9909),f=h.set,p=h.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,i){s(t,h),f(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=i&&c(i,t[u],{that:t,AS_ENTRIES:n})})),h=l.prototype,g=p(e),m=function(t,e,n){var i,o,r=g(t),a=y(t,e);return a?a.value=n:(r.last=a={index:o=v(e,!0),key:e,value:n,previous:i=r.last,next:void 0,removed:!1},r.first||(r.first=a),i&&(i.next=a),d?r.size++:t.size++,"F"!==o&&(r.index[o]=a)),t},y=function(t,e){var n,i=g(t),o=v(e);if("F"!==o)return i.index[o];for(n=i.first;n;n=n.next)if(n.key==e)return n};return r(h,{clear:function(){var t=this,e=g(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=g(e),i=y(e,t);if(i){var o=i.next,r=i.previous;delete n.index[i.index],i.removed=!0,r&&(r.next=o),o&&(o.previous=r),n.first==i&&(n.first=o),n.last==i&&(n.last=r),d?n.size--:e.size--}return!!i},forEach:function(t){var e,n=g(this),i=a(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),r(h,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return m(this,0===t?0:t,e)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),d&&i(h,"size",{get:function(){return g(this).size}}),l},setStrong:function(t,e,n){var i=e+" Iterator",o=p(e),r=p(i);u(t,e,(function(t,e){f(this,{type:i,target:t,state:o(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},7710:function(t,e,n){"use strict";var i=n(2109),o=n(7854),r=n(1702),a=n(4705),s=n(8052),c=n(2423),u=n(408),l=n(5787),d=n(614),v=n(111),h=n(7293),f=n(7072),p=n(8003),g=n(9587);t.exports=function(t,e,n){var m=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),x=m?"set":"add",A=o[t],k=A&&A.prototype,b=A,E={},Z=function(t){var e=r(k[t]);s(k,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!v(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return y&&!v(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!v(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})},w=a(t,!d(A)||!(y||k.forEach&&!h((function(){(new A).entries().next()}))));if(w)b=n.getConstructor(e,t,m,x),c.enable();else if(a(t,!0)){var O=new b,N=O[x](y?{}:-0,1)!=O,$=h((function(){O.has(1)})),C=f((function(t){new A(t)})),D=!y&&h((function(){var t=new A,e=5;while(e--)t[x](e,e);return!t.has(-0)}));C||(b=e((function(t,e){l(t,k);var n=g(new A,t,b);return void 0!=e&&u(e,n[x],{that:n,AS_ENTRIES:m}),n})),b.prototype=k,k.constructor=b),($||D)&&(Z("delete"),Z("has"),m&&Z("get")),(D||N)&&Z(x),y&&k.clear&&delete k.clear}return E[t]=b,i({global:!0,forced:b!=A},E),p(b,t),y||n.setStrong(b,t,m),b}},9190:function(t,e,n){var i=n(8052);t.exports=function(t,e,n){for(var o in e)i(t,o,e[o],n);return t}},9098:function(t,e,n){"use strict";var i=n(7710),o=n(5631);i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},1532:function(t,e,n){n(9098)},7273:function(){},2877:function(t,e,n){"use strict";var i=n(3796),o=n(4367),r=(n(1539),n(6699),n(2023),n(2222),n(7941),n(4916),n(5306),n(1532),n(8783),n(3948),n(4747),n(7273),n(144)),a=n(6290),s=n(4589),c=["sm","md","lg","xl"],u=["start","end","center"];function l(t,e){return c.reduce((function(n,i){return n[t+(0,s.jC)(i)]=e(),n}),{})}var d=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},v=l("align",(function(){return{type:String,default:null,validator:d}})),h=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},f=l("justify",(function(){return{type:String,default:null,validator:h}})),p=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},g=l("alignContent",(function(){return{type:String,default:null,validator:p}})),m={align:Object.keys(v),justify:Object.keys(f),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,n){var i=y[t];if(null!=n){if(e){var o=e.replace(t,"");i+="-".concat(o)}return i+="-".concat(n),i.toLowerCase()}}var A=new Map;e["Z"]=r.Z.extend({name:"v-row",functional:!0,props:(0,o.Z)((0,o.Z)((0,o.Z)({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},v),{},{justify:{type:String,default:null,validator:h}},f),{},{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var n=e.props,o=e.data,r=e.children,s="";for(var c in n)s+=String(n[c]);var u=A.get(s);return u||function(){var t,e;for(e in u=[],m)m[e].forEach((function(t){var i=n[t],o=x(e,t,i);o&&u.push(o)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},(0,i.Z)(t,"align-".concat(n.align),n.align),(0,i.Z)(t,"justify-".concat(n.justify),n.justify),(0,i.Z)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),A.set(s,u)}(),t(n.tag,(0,a.ZP)(o,{staticClass:"row",class:u}),r)}})},3242:function(t,e,n){"use strict";n(9826),n(1539);var i=n(8085);e["Z"]=i.Z.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:i.Z.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},5600:function(t,e,n){"use strict";var i=n(9726),o=(n(1539),n(1706));function r(){return!0}function a(t,e,n){if(!t||!1===s(t,n))return!1;var r=(0,o.e)(e);if("undefined"!==typeof ShadowRoot&&r instanceof ShadowRoot&&r.host===t.target)return!1;var a=("object"===(0,i.Z)(n.value)&&n.value.include||function(){return[]})();return a.push(e),!a.some((function(e){return e.contains(t.target)}))}function s(t,e){var n="object"===(0,i.Z)(e.value)&&e.value.closeConditional||r;return n(t)}function c(t,e,n,i){var o="function"===typeof n.value?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&a(t,e,n)&&setTimeout((function(){s(t,n)&&o&&o(t)}),0)}function u(t,e){var n=(0,o.e)(t);e(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&e(n)}var l={inserted:function(t,e,n){var i=function(i){return c(i,t,e,n)},o=function(n){t._clickOutside.lastMousedownWasOutside=a(n,t,e)};u(t,(function(t){t.addEventListener("click",i,!0),t.addEventListener("mousedown",o,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[n.context._uid]={onClick:i,onMousedown:o}},unbind:function(t,e,n){t._clickOutside&&(u(t,(function(e){var i;if(e&&null!=(i=t._clickOutside)&&i[n.context._uid]){var o=t._clickOutside[n.context._uid],r=o.onClick,a=o.onMousedown;e.removeEventListener("click",r,!0),e.removeEventListener("mousedown",a,!0)}})),delete t._clickOutside[n.context._uid])}};e["Z"]=l},5795:function(t,e,n){"use strict";var i=n(9726),o=(n(6699),n(7941),n(1539),n(8309),n(4561)),r=n(2936),a=n(3325),s=n(4589),c=n(1824),u=(0,a.Z)(o.Z,r.Z);e["Z"]=u.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes((0,i.Z)(t))}},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=(0,s.sp)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&(0,c.N6)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,n=t;e<n.length;e++){var i=n[e];this.getActivator().addEventListener(i,this.listeners[i])}}},genActivator:function(){var t=(0,s.z9)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):this.openOnClick&&(e.click=function(e){var n=t.getActivator(e);n&&n.focus(),e.stopPropagation(),t.isActive=!t.isActive}),this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){var e;if(this.activatorElement)return this.activatorElement;var n=null;if(this.activator){var i=this.internalActivator?this.$el:document;n="string"===typeof this.activator?i.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var o=this.activatorNode[0].componentInstance;n=o&&o.$options.mixins&&o.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?o.getActivator():this.activatorNode[0].elm}else t&&(n=t.currentTarget||t.target);return this.activatorElement=(null==(e=n)?void 0:e.nodeType)===Node.ELEMENT_NODE?n:null,this.activatorElement},getContentSlot:function(){return(0,s.z9)(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,n=t;e<n.length;e++){var i=n[e];this.activatorElement.removeEventListener(i,this.listeners[i])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},8625:function(t,e,n){"use strict";var i=n(1824),o=n(144);e["Z"]=o.Z.extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&(0,i.Jk)("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}})},4561:function(t,e,n){"use strict";n(9653);var i=n(144);e["Z"]=i.Z.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var i=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},i)}}})},5907:function(t,e,n){"use strict";var i=n(8932),o=n(3325);function r(t){for(var e=[],n=0;n<t.length;n++){var o=t[n];o.isActive&&o.isDependent?e.push(o):e.push.apply(e,(0,i.Z)(r(o.$children)))}return e}e["Z"]=(0,o.Z)().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?r(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),n=0;n<e.length;n++)t.push.apply(t,(0,i.Z)(e[n].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,(0,i.Z)(this.getOpenDependentElements())),t}}})},3944:function(t,e,n){"use strict";var i=n(3796),o=n(9726),r=(n(1539),n(4747),n(6699),n(2023),n(1038),n(8783),n(8625)),a=n(4589),s=n(3325),c=n(1824);function u(t){var e=(0,o.Z)(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}function l(t){t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}e["Z"]=(0,s.Z)(r.Z).extend({name:"detachable",props:{attach:{default:!1,validator:u},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var n=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,n)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed:function(){var t=this;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){var n=new MutationObserver((function(i){i.some((function(e){return Array.from(e.removedNodes).includes(t.$el)}))&&(n.disconnect(),l(e))}));n.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else l(e)}},methods:{getScopeIdAttrs:function(){var t=(0,a.vO)(this.$vnode,"context.$options._scopeId");return t&&(0,i.Z)({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):(0,c.Kd)("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},423:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},5703:function(t,e,n){"use strict";var i=n(8932),o=(n(2222),n(6699),n(2023),n(144)),r=n(4589);e["Z"]=o.Z.extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:(0,r.KK)(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,n=[this.stackMinZIndex,(0,r.KK)(e)],o=[].concat((0,i.Z)(document.getElementsByClassName("v-menu__content--active")),(0,i.Z)(document.getElementsByClassName("v-dialog__content--active"))),a=0;a<o.length;a++)t.includes(o[a])||n.push((0,r.KK)(o[a]));return Math.max.apply(Math,n)}}})}}]);
//# sourceMappingURL=459-legacy.651e64de.js.map