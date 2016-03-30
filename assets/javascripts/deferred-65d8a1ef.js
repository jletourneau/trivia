var Zepto=function(){function t(t){return null==t?String(t):X[Y.call(t)]||"object"}function n(n){return"function"==t(n)}function e(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(n){return"object"==t(n)}function o(t){return i(t)&&!e(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return"number"==typeof t.length}function u(t){return $.call(t,function(t){return null!=t})}function a(t){return t.length>0?C.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function f(t){return t in j?j[t]:j[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function l(t,n){return"number"!=typeof n||M[c(t)]?n:n+"px"}function h(t){var n,e;return k[t]||(n=L.createElement(t),L.body.appendChild(n),e=getComputedStyle(n,"").getPropertyValue("display"),n.parentNode.removeChild(n),"none"==e&&(e="block"),k[t]=e),k[t]}function p(t){return"children"in t?Z.call(t.children):C.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,n){var e,r=t?t.length:0;for(e=0;r>e;e++)this[e]=t[e];this.length=r,this.selector=n||""}function g(t,n,e){for(N in n)e&&(o(n[N])||Q(n[N]))?(o(n[N])&&!o(t[N])&&(t[N]={}),Q(n[N])&&!Q(t[N])&&(t[N]=[]),g(t[N],n[N],e)):n[N]!==x&&(t[N]=n[N])}function m(t,n){return null==n?C(t):C(t).filter(n)}function v(t,e,r,i){return n(e)?e.call(t,r,i):e}function y(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function E(t,n){var e=t.className||"",r=e&&e.baseVal!==x;return n===x?r?e.baseVal:e:void(r?e.baseVal=n:t.className=n)}function b(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?C.parseJSON(t):t):t}catch(n){return t}}function w(t,n){n(t);for(var e=0,r=t.childNodes.length;r>e;e++)w(t.childNodes[e],n)}var x,N,C,P,O,S,T=[],A=T.concat,$=T.filter,Z=T.slice,L=window.document,k={},j={},M={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},z=/^\s*<(\w+|!)[^>]*>/,D=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,V=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,_=/^(?:body|html)$/i,q=/([A-Z])/g,B=["val","css","html","text","data","width","height","offset"],F=["after","prepend","before","append"],I=L.createElement("table"),R=L.createElement("tr"),H={tr:L.createElement("tbody"),tbody:I,thead:I,tfoot:I,td:R,th:R,"*":L.createElement("div")},J=/complete|loaded|interactive/,U=/^[\w-]*$/,X={},Y=X.toString,W={},G=L.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return W.matches=function(t,n){if(!n||!t||1!==t.nodeType)return!1;var e=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(e)return e.call(t,n);var r,i=t.parentNode,o=!i;return o&&(i=G).appendChild(t),r=~W.qsa(i,n).indexOf(t),o&&G.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,n){return n?n.toUpperCase():""})},S=function(t){return $.call(t,function(n,e){return t.indexOf(n)==e})},W.fragment=function(t,n,e){var r,i,s;return D.test(t)&&(r=C(L.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(V,"<$1></$2>")),n===x&&(n=z.test(t)&&RegExp.$1),n in H||(n="*"),s=H[n],s.innerHTML=""+t,r=C.each(Z.call(s.childNodes),function(){s.removeChild(this)})),o(e)&&(i=C(r),C.each(e,function(t,n){B.indexOf(t)>-1?i[t](n):i.attr(t,n)})),r},W.Z=function(t,n){return new d(t,n)},W.isZ=function(t){return t instanceof W.Z},W.init=function(t,e){var r;if(!t)return W.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&z.test(t))r=W.fragment(t,RegExp.$1,e),t=null;else{if(e!==x)return C(e).find(t);r=W.qsa(L,t)}else{if(n(t))return C(L).ready(t);if(W.isZ(t))return t;if(Q(t))r=u(t);else if(i(t))r=[t],t=null;else if(z.test(t))r=W.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==x)return C(e).find(t);r=W.qsa(L,t)}}return W.Z(r,t)},C=function(t,n){return W.init(t,n)},C.extend=function(t){var n,e=Z.call(arguments,1);return"boolean"==typeof t&&(n=t,t=e.shift()),e.forEach(function(e){g(t,e,n)}),t},W.qsa=function(t,n){var e,r="#"==n[0],i=!r&&"."==n[0],o=r||i?n.slice(1):n,s=U.test(o);return t.getElementById&&s&&r?(e=t.getElementById(o))?[e]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:Z.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(n):t.querySelectorAll(n))},C.contains=L.documentElement.contains?function(t,n){return t!==n&&t.contains(n)}:function(t,n){for(;n&&(n=n.parentNode);)if(n===t)return!0;return!1},C.type=t,C.isFunction=n,C.isWindow=e,C.isArray=Q,C.isPlainObject=o,C.isEmptyObject=function(t){var n;for(n in t)return!1;return!0},C.inArray=function(t,n,e){return T.indexOf.call(n,t,e)},C.camelCase=O,C.trim=function(t){return null==t?"":String.prototype.trim.call(t)},C.uuid=0,C.support={},C.expr={},C.noop=function(){},C.map=function(t,n){var e,r,i,o=[];if(s(t))for(r=0;r<t.length;r++)e=n(t[r],r),null!=e&&o.push(e);else for(i in t)e=n(t[i],i),null!=e&&o.push(e);return a(o)},C.each=function(t,n){var e,r;if(s(t)){for(e=0;e<t.length;e++)if(n.call(t[e],e,t[e])===!1)return t}else for(r in t)if(n.call(t[r],r,t[r])===!1)return t;return t},C.grep=function(t,n){return $.call(t,n)},window.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,n){X["[object "+n+"]"]=n.toLowerCase()}),C.fn={constructor:W.Z,length:0,forEach:T.forEach,reduce:T.reduce,push:T.push,sort:T.sort,splice:T.splice,indexOf:T.indexOf,concat:function(){var t,n,e=[];for(t=0;t<arguments.length;t++)n=arguments[t],e[t]=W.isZ(n)?n.toArray():n;return A.apply(W.isZ(this)?this.toArray():this,e)},map:function(t){return C(C.map(this,function(n,e){return t.call(n,e,n)}))},slice:function(){return C(Z.apply(this,arguments))},ready:function(t){return J.test(L.readyState)&&L.body?t(C):L.addEventListener("DOMContentLoaded",function(){t(C)},!1),this},get:function(t){return t===x?Z.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return T.every.call(this,function(n,e){return t.call(n,e,n)!==!1}),this},filter:function(t){return n(t)?this.not(this.not(t)):C($.call(this,function(n){return W.matches(n,t)}))},add:function(t,n){return C(S(this.concat(C(t,n))))},is:function(t){return this.length>0&&W.matches(this[0],t)},not:function(t){var e=[];if(n(t)&&t.call!==x)this.each(function(n){t.call(this,n)||e.push(this)});else{var r="string"==typeof t?this.filter(t):s(t)&&n(t.item)?Z.call(t):C(t);this.forEach(function(t){r.indexOf(t)<0&&e.push(t)})}return C(e)},has:function(t){return this.filter(function(){return i(t)?C.contains(this,t):C(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:C(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:C(t)},find:function(t){var n,e=this;return n=t?"object"==typeof t?C(t).filter(function(){var t=this;return T.some.call(e,function(n){return C.contains(n,t)})}):1==this.length?C(W.qsa(this[0],t)):this.map(function(){return W.qsa(this,t)}):C()},closest:function(t,n){var e=this[0],i=!1;for("object"==typeof t&&(i=C(t));e&&!(i?i.indexOf(e)>=0:W.matches(e,t));)e=e!==n&&!r(e)&&e.parentNode;return C(e)},parents:function(t){for(var n=[],e=this;e.length>0;)e=C.map(e,function(t){return(t=t.parentNode)&&!r(t)&&n.indexOf(t)<0?(n.push(t),t):void 0});return m(n,t)},parent:function(t){return m(S(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||Z.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,n){return $.call(p(n.parentNode),function(t){return t!==n})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return C.map(this,function(n){return n[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=n(t);if(this[0]&&!e)var r=C(t).get(0),i=r.parentNode||this.length>1;return this.each(function(n){C(this).wrapAll(e?t.call(this,n):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){C(this[0]).before(t=C(t));for(var n;(n=t.children()).length;)t=n.first();C(t).append(this)}return this},wrapInner:function(t){var e=n(t);return this.each(function(n){var r=C(this),i=r.contents(),o=e?t.call(this,n):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){C(this).replaceWith(C(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=C(this);(t===x?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return C(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return C(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(n){var e=this.innerHTML;C(this).empty().append(v(this,t,n,e))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(n){var e=v(this,t,n,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,n){var e;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(i(t))for(N in t)y(this,N,t[N]);else y(this,t,v(this,n,e,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(e=this[0].getAttribute(t))&&t in this[0]?this[0][t]:e:x},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){y(this,t)},this)})},prop:function(t,n){return t=K[t]||t,1 in arguments?this.each(function(e){this[t]=v(this,n,e,this[t])}):this[0]&&this[0][t]},data:function(t,n){var e="data-"+t.replace(q,"-$1").toLowerCase(),r=1 in arguments?this.attr(e,n):this.attr(e);return null!==r?b(r):x},val:function(t){return 0 in arguments?this.each(function(n){this.value=v(this,t,n,this.value)}):this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(n){var e=C(this),r=v(this,t,n,e.offset()),i=e.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==e.css("position")&&(o.position="relative"),e.css(o)});if(!this.length)return null;if(!C.contains(L.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+window.pageXOffset,top:n.top+window.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(n,e){if(arguments.length<2){var r,i=this[0];if(!i)return;if(r=getComputedStyle(i,""),"string"==typeof n)return i.style[O(n)]||r.getPropertyValue(n);if(Q(n)){var o={};return C.each(n,function(t,n){o[n]=i.style[O(n)]||r.getPropertyValue(n)}),o}}var s="";if("string"==t(n))e||0===e?s=c(n)+":"+l(n,e):this.each(function(){this.style.removeProperty(c(n))});else for(N in n)n[N]||0===n[N]?s+=c(N)+":"+l(N,n[N])+";":this.each(function(){this.style.removeProperty(c(N))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?T.some.call(this,function(t){return this.test(E(t))},f(t)):!1},addClass:function(t){return t?this.each(function(n){if("className"in this){P=[];var e=E(this),r=v(this,t,n,e);r.split(/\s+/g).forEach(function(t){C(this).hasClass(t)||P.push(t)},this),P.length&&E(this,e+(e?" ":"")+P.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===x)return E(this,"");P=E(this),v(this,t,n,P).split(/\s+/g).forEach(function(t){P=P.replace(f(t)," ")}),E(this,P.trim())}})},toggleClass:function(t,n){return t?this.each(function(e){var r=C(this),i=v(this,t,e,E(this));i.split(/\s+/g).forEach(function(t){(n===x?!r.hasClass(t):n)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===x?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===x?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],n=this.offsetParent(),e=this.offset(),r=_.test(n[0].nodeName)?{top:0,left:0}:n.offset();return e.top-=parseFloat(C(t).css("margin-top"))||0,e.left-=parseFloat(C(t).css("margin-left"))||0,r.top+=parseFloat(C(n[0]).css("border-top-width"))||0,r.left+=parseFloat(C(n[0]).css("border-left-width"))||0,{top:e.top-r.top,left:e.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||L.body;t&&!_.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent;return t})}},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});C.fn[t]=function(i){var o,s=this[0];return i===x?e(s)?s["inner"+n]:r(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(n){s=C(this),s.css(t,v(this,i,n,s[t]()))})}}),F.forEach(function(n,e){var r=e%2;C.fn[n]=function(){var n,i,o=C.map(arguments,function(e){return n=t(e),"object"==n||"array"==n||null==e?e:W.fragment(e)}),s=this.length>1;return o.length<1?this:this.each(function(t,n){i=r?n:n.parentNode,n=0==e?n.nextSibling:1==e?n.firstChild:2==e?n:null;var u=C.contains(L.documentElement,i);o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!i)return C(t).remove();i.insertBefore(t,n),u&&w(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},C.fn[r?n+"To":"insert"+(e?"Before":"After")]=function(t){return C(t)[n](this),this}}),W.Z.prototype=d.prototype=C.fn,W.uniq=S,W.deserializeValue=b,C.zepto=W,C}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function n(t){return t._zid||(t._zid=h++)}function e(t,e,o,s){if(e=r(e),e.ns)var u=i(e.ns);return(m[n(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||u.test(t.ns))&&(!o||n(t.fn)===n(o))&&(!s||t.sel==s)})}function r(t){var n=(""+t).split(".");return{e:n[0],ns:n.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,n){return t.del&&!y&&t.e in E||!!n}function s(t){return b[t]||y&&E[t]||t}function u(e,i,u,a,f,h,p){var d=n(e),g=m[d]||(m[d]=[]);i.split(/\s/).forEach(function(n){if("ready"==n)return t(document).ready(u);var i=r(n);i.fn=u,i.sel=f,i.e in b&&(u=function(n){var e=n.relatedTarget;return!e||e!==this&&!t.contains(this,e)?i.fn.apply(this,arguments):void 0}),i.del=h;var d=h||u;i.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=a;var n=d.apply(e,t._args==l?[t]:[t].concat(t._args));return n===!1&&(t.preventDefault(),t.stopPropagation()),n}},i.i=g.length,g.push(i),"addEventListener"in e&&e.addEventListener(s(i.e),i.proxy,o(i,p))})}function a(t,r,i,u,a){var c=n(t);(r||"").split(/\s/).forEach(function(n){e(t,n,i,u).forEach(function(n){delete m[c][n.i],"removeEventListener"in t&&t.removeEventListener(s(n.e),n.proxy,o(n,a))})})}function c(n,e){return(e||!n.isDefaultPrevented)&&(e||(e=n),t.each(C,function(t,r){var i=e[t];n[t]=function(){return this[r]=w,i&&i.apply(e,arguments)},n[r]=x}),(e.defaultPrevented!==l?e.defaultPrevented:"returnValue"in e?e.returnValue===!1:e.getPreventDefault&&e.getPreventDefault())&&(n.isDefaultPrevented=w)),n}function f(t){var n,e={originalEvent:t};for(n in t)N.test(n)||t[n]===l||(e[n]=t[n]);return c(e,t)}var l,h=1,p=Array.prototype.slice,d=t.isFunction,g=function(t){return"string"==typeof t},m={},v={},y="onfocusin"in window,E={focus:"focusin",blur:"focusout"},b={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:u,remove:a},t.proxy=function(e,r){var i=2 in arguments&&p.call(arguments,2);if(d(e)){var o=function(){return e.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=n(e),o}if(g(r))return i?(i.unshift(e[r],e),t.proxy.apply(null,i)):t.proxy(e[r],e);throw new TypeError("expected function")},t.fn.bind=function(t,n,e){return this.on(t,n,e)},t.fn.unbind=function(t,n){return this.off(t,n)},t.fn.one=function(t,n,e,r){return this.on(t,n,e,r,1)};var w=function(){return!0},x=function(){return!1},N=/^([A-Z]|returnValue$|layer[XY]$)/,C={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,n,e){return this.on(n,t,e)},t.fn.undelegate=function(t,n,e){return this.off(n,t,e)},t.fn.live=function(n,e){return t(document.body).delegate(this.selector,n,e),this},t.fn.die=function(n,e){return t(document.body).undelegate(this.selector,n,e),this},t.fn.on=function(n,e,r,i,o){var s,c,h=this;return n&&!g(n)?(t.each(n,function(t,n){h.on(t,e,r,n,o)}),h):(g(e)||d(i)||i===!1||(i=r,r=e,e=l),(i===l||r===!1)&&(i=r,r=l),i===!1&&(i=x),h.each(function(l,h){o&&(s=function(t){return a(h,t.type,i),i.apply(this,arguments)}),e&&(c=function(n){var r,o=t(n.target).closest(e,h).get(0);return o&&o!==h?(r=t.extend(f(n),{currentTarget:o,liveFired:h}),(s||i).apply(o,[r].concat(p.call(arguments,1)))):void 0}),u(h,n,i,r,e,c||s)}))},t.fn.off=function(n,e,r){var i=this;return n&&!g(n)?(t.each(n,function(t,n){i.off(t,e,n)}),i):(g(e)||d(r)||r===!1||(r=e,e=l),r===!1&&(r=x),i.each(function(){a(this,n,r,e)}))},t.fn.trigger=function(n,e){return n=g(n)||t.isPlainObject(n)?t.Event(n):c(n),n._args=e,this.each(function(){n.type in E&&"function"==typeof this[n.type]?this[n.type]():"dispatchEvent"in this?this.dispatchEvent(n):t(this).triggerHandler(n,e)})},t.fn.triggerHandler=function(n,r){var i,o;return this.each(function(s,u){i=f(g(n)?t.Event(n):n),i._args=r,i.target=u,t.each(e(u,n.type||n),function(t,n){return o=n.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n){t.fn[n]=function(t){return 0 in arguments?this.bind(n,t):this.trigger(n)}}),t.Event=function(t,n){g(t)||(n=t,t=n.type);var e=document.createEvent(v[t]||"Events"),r=!0;if(n)for(var i in n)"bubbles"==i?r=!!n[i]:e[i]=n[i];return e.initEvent(t,r,!0),c(e)}}(Zepto),function(){$(".question").on("click",function(){return $(this).find(".answer").toggleClass("show")}),$(".answer").on("click","a",function(t){return t.stopPropagation()})}.call(this);