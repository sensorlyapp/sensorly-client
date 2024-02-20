/*! For license information please see sensorly.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return r};var n,r={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(n){h=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new N(r||[]);return a(i,"_invoke",{value:j(t,n,c)}),i}function y(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",v="suspendedYield",d="executing",m="completed",g={};function w(){}function b(){}function L(){}var k={};h(k,u,(function(){return this}));var S=Object.getPrototypeOf,x=S&&S(S(D([])));x&&x!==o&&i.call(x,u)&&(k=x);var E=L.prototype=w.prototype=Object.create(k);function T(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function _(e,n){function r(o,a,c,u){var s=y(e[o],e,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==t(h)&&i.call(h,"__await")?n.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(i,i):i()}})}function j(t,e,r){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:n,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=O(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var s=y(t,e,r);if("normal"===s.type){if(o=r.done?m:v,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=m,r.method="throw",r.arg=s.arg)}}}function O(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=y(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function D(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=L,a(E,"constructor",{value:L,configurable:!0}),a(L,"constructor",{value:b,configurable:!0}),b.displayName=h(L,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,h(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},T(_.prototype),h(_.prototype,s,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},T(E),h(E,l,"Generator"),h(E,u,(function(){return this})),h(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=D,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:D(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}},r}function n(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,o(r.key),r)}}function o(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:String(n)}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.base_url="https://www.sensorly.io/api",this.sensorlyLeadId=this.getSensorlyLeadId(),this.sensorlyToken=this.getSensorlyToken(),this.start=(new Date).getTime(),this.mainInterval=null,this.scrollingTimeValue=0,this.canSendData=!0}var o,i,a,c,u;return o=t,i=[{key:"getApiUrl",value:function(t){return this.base_url+t+"?site_token="+this.sensorlyToken}},{key:"generateSession",value:(c=e().mark((function t(){var n,r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.getApiUrl("/analytics"),{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({lead_id:this.sensorlyLeadId,pathname:window.location.pathname})});case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.session_id);case 7:case"end":return t.stop()}}),t,this)})),u=function(){var t=this,e=arguments;return new Promise((function(r,o){var i=c.apply(t,e);function a(t){n(i,r,o,a,u,"next",t)}function u(t){n(i,r,o,a,u,"throw",t)}a(void 0)}))},function(){return u.apply(this,arguments)})},{key:"getSensorlyToken",value:function(){return document.getElementById("sensorly").getAttribute("data-token")}},{key:"getSensorlyLeadId",value:function(){var t=new URLSearchParams(window.location.search).get("slid");return t&&localStorage.setItem("slid",t),null!=t?t:localStorage.getItem("slid")}},{key:"init",value:function(){var t=this;this.sensorlyLeadId&&this.sensorlyToken&&this.generateSession().then((function(e){e&&(document.addEventListener("mousemove",(function(){return t.behaviorTracking(e)})),document.addEventListener("scroll",(function(){return t.behaviorTracking(e)})),t.setDataSendable(1e4))}))}},{key:"setDataSendable",value:function(t){var e=this;this.mainInterval=setInterval((function(){e.canSendData=!0}),t)}},{key:"behaviorTracking",value:function(t){if(this.canSendData){this.canSendData=!1;var e={time_on_page:this.timeOnPage(),scrolling_time:this.scrollingTime()};fetch(this.getApiUrl("/analytics/"+t),{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)})}}},{key:"getUnixTime",value:function(){return(new Date).getTime()}},{key:"sendEvent",value:function(t,e,n){return{session_id:t,type:e,pathname:window.location.pathname,payload:n,time:this.getUnixTime()}}},{key:"timeOnPage",value:function(){return((new Date).getTime()-this.start)/1e3}},{key:"scrollingTime",value:function(){var t=this;return window.addEventListener("scroll",(function(){t.scrollingTimeValue+=1.8})),this.scrollingTimeValue/100}}],i&&r(o.prototype,i),a&&r(o,a),Object.defineProperty(o,"prototype",{writable:!1}),t}(),a=null,c=null;setInterval((function(){a!==window.location.pathname&&(c&&null!==c.mainInterval&&clearTimeout(c.mainInterval),a=window.location.pathname,(c=new i).init())}),4e3,[a,c])})();