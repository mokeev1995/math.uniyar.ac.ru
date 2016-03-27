window.Modernizr=function(e,t,n){function o(e){v.cssText=e}function r(e,t){return o(k.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var o in e){var r=e[o];if(!a(r,"-")&&v[r]!==n)return"pfx"==t?r:!0}return!1}function c(e,t,o){for(var r in e){var a=t[e[r]];if(a!==n)return o===!1?e[r]:i(a,"function")?a.bind(o||t):a}return!1}function l(e,t,n){var o=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+T.join(o+" ")+o).split(" ");return i(t,"string")||i(t,"undefined")?s(r,t):(r=(e+" "+C.join(o+" ")+o).split(" "),c(r,t,n))}function u(){h.input=function(n){for(var o=0,r=n.length;r>o;o++)M[n[o]]=!!(n[o]in b);return M.list&&(M.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),M}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var o,r,i,a=0,s=e.length;s>a;a++)b.setAttribute("type",r=e[a]),o="text"!==b.type,o&&(b.value=x,b.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&b.style.WebkitAppearance!==n?(g.appendChild(b),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(b,null).WebkitAppearance&&0!==b.offsetHeight,g.removeChild(b)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?b.checkValidity&&b.checkValidity()===!1:b.value!=x)),H[e[a]]=!!o;return H}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.8.3",h={},m=!0,g=t.documentElement,y="modernizr",w=t.createElement(y),v=w.style,b=t.createElement("input"),x=":)",S={}.toString,k=" -webkit- -moz- -o- -ms- ".split(" "),E="Webkit Moz O ms",T=E.split(" "),C=E.toLowerCase().split(" "),A={svg:"http://www.w3.org/2000/svg"},z={},H={},M={},P=[],j=P.slice,D=function(e,n,o,r){var i,a,s,c,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(o,10))for(;o--;)s=t.createElement("div"),s.id=r?r[o]:y+(o+1),l.appendChild(s);return i=["&#173;",'<style id="s',y,'">',e,"</style>"].join(""),l.id=y,(u?l:d).innerHTML+=i,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",c=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),a=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),g.style.overflow=c),!!a},N=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var o;return D("@media "+t+" { #"+y+" { position: absolute; } }",function(t){o="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),o},R=function(){function e(e,r){r=r||t.createElement(o[e]||"div"),e="on"+e;var a=e in r;return a||(r.setAttribute||(r=t.createElement("div")),r.setAttribute&&r.removeAttribute&&(r.setAttribute(e,""),a=i(r[e],"function"),i(r[e],"undefined")||(r[e]=n),r.removeAttribute(e))),r=null,a}var o={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),W={}.hasOwnProperty;f=i(W,"undefined")||i(W.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return W.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),o=function(){if(this instanceof o){var r=function(){};r.prototype=t.prototype;var i=new r,a=t.apply(i,n.concat(j.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(j.call(arguments)))};return o}),z.flexbox=function(){return l("flexWrap")},z.flexboxlegacy=function(){return l("boxDirection")},z.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},z.canvastext=function(){return!(!h.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},z.webgl=function(){return!!e.WebGLRenderingContext},z.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:D(["@media (",k.join("touch-enabled),("),y,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},z.geolocation=function(){return"geolocation"in navigator},z.postmessage=function(){return!!e.postMessage},z.websqldatabase=function(){return!!e.openDatabase},z.indexedDB=function(){return!!l("indexedDB",e)},z.hashchange=function(){return R("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},z.history=function(){return!(!e.history||!history.pushState)},z.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},z.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},z.rgba=function(){return o("background-color:rgba(150,255,150,.5)"),a(v.backgroundColor,"rgba")},z.hsla=function(){return o("background-color:hsla(120,40%,100%,.5)"),a(v.backgroundColor,"rgba")||a(v.backgroundColor,"hsla")},z.multiplebgs=function(){return o("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(v.background)},z.backgroundsize=function(){return l("backgroundSize")},z.borderimage=function(){return l("borderImage")},z.borderradius=function(){return l("borderRadius")},z.boxshadow=function(){return l("boxShadow")},z.textshadow=function(){return""===t.createElement("div").style.textShadow},z.opacity=function(){return r("opacity:.55"),/^0.55$/.test(v.opacity)},z.cssanimations=function(){return l("animationName")},z.csscolumns=function(){return l("columnCount")},z.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return o((e+"-webkit- ".split(" ").join(t+e)+k.join(n+e)).slice(0,-e.length)),a(v.backgroundImage,"gradient")},z.cssreflections=function(){return l("boxReflect")},z.csstransforms=function(){return!!l("transform")},z.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in g.style&&D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},z.csstransitions=function(){return l("transition")},z.fontface=function(){var e;return D('@font-face {font-family:"font";src:url("https://")}',function(n,o){var r=t.getElementById("smodernizr"),i=r.sheet||r.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(o.split(" ")[0])}),e},z.generatedcontent=function(){var e;return D(["#",y,"{font:0/0 a}#",y,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},z.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(o){}return n},z.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(o){}return n},z.localstorage=function(){try{return localStorage.setItem(y,y),localStorage.removeItem(y),!0}catch(e){return!1}},z.sessionstorage=function(){try{return sessionStorage.setItem(y,y),sessionStorage.removeItem(y),!0}catch(e){return!1}},z.webworkers=function(){return!!e.Worker},z.applicationcache=function(){return!!e.applicationCache},z.svg=function(){return!!t.createElementNS&&!!t.createElementNS(A.svg,"svg").createSVGRect},z.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==A.svg},z.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(S.call(t.createElementNS(A.svg,"animate")))},z.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(S.call(t.createElementNS(A.svg,"clipPath")))};for(var L in z)f(z,L)&&(d=L.toLowerCase(),h[d]=z[L](),P.push((h[d]?"":"no-")+d));return h.input||u(),h.addTest=function(e,t){if("object"==typeof e)for(var o in e)f(e,o)&&h.addTest(o,e[o]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(g.className+=" "+(t?"":"no-")+e),h[e]=t}return h},o(""),w=b=null,function(e,t){function n(e,t){var n=e.createElement("p"),o=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",o.insertBefore(n.lastChild,o.firstChild)}function o(){var e=w.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=y[e[m]];return t||(t={},g++,e[m]=g,y[g]=t),t}function i(e,n,o){if(n||(n=t),u)return n.createElement(e);o||(o=r(n));var i;return i=o.cache[e]?o.cache[e].cloneNode():h.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e),!i.canHaveChildren||p.test(e)||i.tagUrn?i:o.frag.appendChild(i)}function a(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||r(e);for(var i=n.frag.cloneNode(),a=0,s=o(),c=s.length;c>a;a++)i.createElement(s[a]);return i}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return w.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(w,t.frag)}function c(e){e||(e=t);var o=r(e);return!w.shivCSS||l||o.hasCSS||(o.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||s(e,o),e}var l,u,d="3.7.0",f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var w={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:a};e.html5=w,c(t)}(this,t),h._version=p,h._prefixes=k,h._domPrefixes=C,h._cssomPrefixes=T,h.mq=N,h.hasEvent=R,h.testProp=function(e){return s([e])},h.testAllProps=l,h.testStyles=D,h.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+P.join(" "):""),h}(this,this.document),!function(){"use strict";function e(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+t,this.options=e.Adapter.extend({},e.defaults,o),this.element=this.options.element,this.adapter=new e.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=e.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=e.Context.findOrCreateByElement(this.options.context),e.offsetAliases[this.options.offset]&&(this.options.offset=e.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),n[this.key]=this,t+=1}var t=0,n={};e.prototype.queueTrigger=function(e){this.group.queueTrigger(this,e)},e.prototype.trigger=function(e){this.enabled&&this.callback&&this.callback.apply(this,e)},e.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete n[this.key]},e.prototype.disable=function(){return this.enabled=!1,this},e.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},e.prototype.next=function(){return this.group.next(this)},e.prototype.previous=function(){return this.group.previous(this)},e.invokeAll=function(e){var t=[];for(var o in n)t.push(n[o]);for(var r=0,i=t.length;i>r;r++)t[r][e]()},e.destroyAll=function(){e.invokeAll("destroy")},e.disableAll=function(){e.invokeAll("disable")},e.enableAll=function(){e.invokeAll("enable")},e.refreshAll=function(){e.Context.refreshAll()},e.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},e.viewportWidth=function(){return document.documentElement.clientWidth},e.adapters=[],e.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},e.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=e}(),function(){"use strict";function e(e){window.setTimeout(e,1e3/60)}function t(e){this.element=e,this.Adapter=r.Adapter,this.adapter=new this.Adapter(e),this.key="waypoint-context-"+n,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},e.waypointContextKey=this.key,o[e.waypointContextKey]=this,n+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var n=0,o={},r=window.Waypoint,i=window.onload;t.prototype.add=function(e){var t=e.options.horizontal?"horizontal":"vertical";this.waypoints[t][e.key]=e,this.refresh()},t.prototype.checkEmpty=function(){var e=this.Adapter.isEmptyObject(this.waypoints.horizontal),t=this.Adapter.isEmptyObject(this.waypoints.vertical);e&&t&&(this.adapter.off(".waypoints"),delete o[this.key])},t.prototype.createThrottledResizeHandler=function(){function e(){t.handleResize(),t.didResize=!1}var t=this;this.adapter.on("resize.waypoints",function(){t.didResize||(t.didResize=!0,r.requestAnimationFrame(e))})},t.prototype.createThrottledScrollHandler=function(){function e(){t.handleScroll(),t.didScroll=!1}var t=this;this.adapter.on("scroll.waypoints",function(){(!t.didScroll||r.isTouch)&&(t.didScroll=!0,r.requestAnimationFrame(e))})},t.prototype.handleResize=function(){r.Context.refreshAll()},t.prototype.handleScroll=function(){var e={},t={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var n in t){var o=t[n],r=o.newScroll>o.oldScroll,i=r?o.forward:o.backward;for(var a in this.waypoints[n]){var s=this.waypoints[n][a],c=o.oldScroll<s.triggerPoint,l=o.newScroll>=s.triggerPoint,u=c&&l,d=!c&&!l;(u||d)&&(s.queueTrigger(i),e[s.group.id]=s.group)}}for(var f in e)e[f].flushTriggers();this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}},t.prototype.innerHeight=function(){return this.element==this.element.window?r.viewportHeight():this.adapter.innerHeight()},t.prototype.remove=function(e){delete this.waypoints[e.axis][e.key],this.checkEmpty()},t.prototype.innerWidth=function(){return this.element==this.element.window?r.viewportWidth():this.adapter.innerWidth()},t.prototype.destroy=function(){var e=[];for(var t in this.waypoints)for(var n in this.waypoints[t])e.push(this.waypoints[t][n]);for(var o=0,r=e.length;r>o;o++)e[o].destroy()},t.prototype.refresh=function(){var e,t=this.element==this.element.window,n=t?void 0:this.adapter.offset(),o={};this.handleScroll(),e={horizontal:{contextOffset:t?0:n.left,contextScroll:t?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:t?0:n.top,contextScroll:t?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var i in e){var a=e[i];for(var s in this.waypoints[i]){var c,l,u,d,f,p=this.waypoints[i][s],h=p.options.offset,m=p.triggerPoint,g=0,y=null==m;p.element!==p.element.window&&(g=p.adapter.offset()[a.offsetProp]),"function"==typeof h?h=h.apply(p):"string"==typeof h&&(h=parseFloat(h),p.options.offset.indexOf("%")>-1&&(h=Math.ceil(a.contextDimension*h/100))),c=a.contextScroll-a.contextOffset,p.triggerPoint=g+c-h,l=m<a.oldScroll,u=p.triggerPoint>=a.oldScroll,d=l&&u,f=!l&&!u,!y&&d?(p.queueTrigger(a.backward),o[p.group.id]=p.group):!y&&f?(p.queueTrigger(a.forward),o[p.group.id]=p.group):y&&a.oldScroll>=p.triggerPoint&&(p.queueTrigger(a.forward),o[p.group.id]=p.group)}}return r.requestAnimationFrame(function(){for(var e in o)o[e].flushTriggers()}),this},t.findOrCreateByElement=function(e){return t.findByElement(e)||new t(e)},t.refreshAll=function(){for(var e in o)o[e].refresh()},t.findByElement=function(e){return o[e.waypointContextKey]},window.onload=function(){i&&i(),t.refreshAll()},r.requestAnimationFrame=function(t){var n=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e;n.call(window,t)},r.Context=t}(),function(){"use strict";function e(e,t){return e.triggerPoint-t.triggerPoint}function t(e,t){return t.triggerPoint-e.triggerPoint}function n(e){this.name=e.name,this.axis=e.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},r=window.Waypoint;n.prototype.add=function(e){this.waypoints.push(e)},n.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},n.prototype.flushTriggers=function(){for(var n in this.triggerQueues){var o=this.triggerQueues[n],r="up"===n||"left"===n;o.sort(r?t:e);for(var i=0,a=o.length;a>i;i+=1){var s=o[i];(s.options.continuous||i===o.length-1)&&s.trigger([n])}}this.clearTriggerQueues()},n.prototype.next=function(t){this.waypoints.sort(e);var n=r.Adapter.inArray(t,this.waypoints),o=n===this.waypoints.length-1;return o?null:this.waypoints[n+1]},n.prototype.previous=function(t){this.waypoints.sort(e);var n=r.Adapter.inArray(t,this.waypoints);return n?this.waypoints[n-1]:null},n.prototype.queueTrigger=function(e,t){this.triggerQueues[t].push(e)},n.prototype.remove=function(e){var t=r.Adapter.inArray(e,this.waypoints);t>-1&&this.waypoints.splice(t,1)},n.prototype.first=function(){return this.waypoints[0]},n.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},n.findOrCreate=function(e){return o[e.axis][e.name]||new n(e)},r.Group=n}(),function(){"use strict";function e(e){this.$element=t(e)}var t=window.jQuery,n=window.Waypoint;t.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(t,n){e.prototype[n]=function(){var e=Array.prototype.slice.call(arguments);return this.$element[n].apply(this.$element,e)}}),t.each(["extend","inArray","isEmptyObject"],function(n,o){e[o]=t[o]}),n.adapters.push({name:"jquery",Adapter:e}),n.Adapter=e}(),function(){"use strict";function e(e){return function(){var n=[],o=arguments[0];return e.isFunction(arguments[0])&&(o=e.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var r=e.extend({},o,{element:this});"string"==typeof r.context&&(r.context=e(this).closest(r.context)[0]),n.push(new t(r))}),n}}var t=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=e(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=e(window.Zepto))}(),function(e){e.fn.animated=function(t){e(this).each(function(){var n=e(this);n.css("opacity","0").addClass("animated").waypoint(function(e){"down"===e&&n.addClass(t).css("opacity","1")},{offset:"90%"})})}}(jQuery),function(e){e.extend({browserSelector:function(){var e=navigator.userAgent,t=e.toLowerCase(),n=function(e){return t.indexOf(e)>-1},o="gecko",r="webkit",i="safari",a="opera",s=document.documentElement,l=[!/opera|webtv/i.test(t)&&/msie\s(\d)/.test(t)?"ie ie"+parseFloat(navigator.appVersion.split("MSIE")[1]):n("firefox/2")?o+" ff2":n("firefox/3.5")?o+" ff3 ff3_5":n("firefox/3")?o+" ff3":n("gecko/")?o:n("opera")?a+(/version\/(\d+)/.test(t)?" "+a+RegExp.jQuery1:/opera(\s|\/)(\d+)/.test(t)?" "+a+RegExp.jQuery2:""):n("konqueror")?"konqueror":n("chrome")?r+" chrome":n("iron")?r+" iron":n("applewebkit/")?r+" "+i+(/version\/(\d+)/.test(t)?" "+i+RegExp.jQuery1:""):n("mozilla/")?o:"",n("j2me")?"mobile":n("iphone")?"iphone":n("ipod")?"ipod":n("mac")?"mac":n("darwin")?"mac":n("webtv")?"webtv":n("win")?"win":n("freebsd")?"freebsd":n("x11")||n("linux")?"linux":"","js"];c=l.join(" "),s.className+=" "+c}})}(jQuery),function(e){e.extend({smoothScroll:function(){function e(){var e=!1;if(document.URL.indexOf("google.com/reader/view")>-1&&(e=!0),v.excluded){var t=v.excluded.split(/[,\n] ?/);t.push("mail.google.com");for(var n=t.length;n--;)if(document.URL.indexOf(t[n])>-1){y&&y.disconnect(),l("mousewheel",o),e=!0,b=!0;break}}e&&l("keydown",r),v.keyboardSupport&&!e&&c("keydown",r)}function t(){if(document.body){var t=document.body,n=document.documentElement,o=window.innerHeight,r=t.scrollHeight;if(E=document.compatMode.indexOf("CSS")>=0?n:t,g=t,e(),k=!0,top!=self)x=!0;else if(r>o&&(t.offsetHeight<=o||n.offsetHeight<=o)){var i=!1,a=function(){i||n.scrollHeight==document.height||(i=!0,setTimeout(function(){n.style.height=document.height+"px",i=!1},500))};n.style.height="auto",setTimeout(a,10);var s={attributes:!0,childList:!0,characterData:!1};if(y=new N(a),y.observe(t,s),E.offsetHeight<=o){var c=document.createElement("div");c.style.clear="both",t.appendChild(c)}}if(document.URL.indexOf("mail.google.com")>-1){var l=document.createElement("style");l.innerHTML=".iu { visibility: hidden }",(document.getElementsByTagName("head")[0]||n).appendChild(l)}else if(document.URL.indexOf("www.facebook.com")>-1){var u=document.getElementById("home_stream");u&&(u.style.webkitTransform="translateZ(0)")}v.fixedBackground||b||(t.style.backgroundAttachment="scroll",n.style.backgroundAttachment="scroll")}}function n(e,t,n,o){if(o||(o=1e3),d(t,n),1!=v.accelerationMax){var r=+new Date,i=r-H;if(i<v.accelerationDelta){var a=(1+30/i)/2;a>1&&(a=Math.min(a,v.accelerationMax),t*=a,n*=a)}H=+new Date}if(A.push({x:t,y:n,lastX:0>t?.99:-.99,lastY:0>n?.99:-.99,start:+new Date}),!z){var s=e===document.body,c=function(r){for(var i=+new Date,a=0,l=0,u=0;u<A.length;u++){var d=A[u],f=i-d.start,p=f>=v.animationTime,h=p?1:f/v.animationTime;v.pulseAlgorithm&&(h=m(h));var g=d.x*h-d.lastX>>0,y=d.y*h-d.lastY>>0;a+=g,l+=y,d.lastX+=g,d.lastY+=y,p&&(A.splice(u,1),u--)}s?window.scrollBy(a,l):(a&&(e.scrollLeft+=a),l&&(e.scrollTop+=l)),t||n||(A=[]),A.length?D(c,e,o/v.frameRate+1):z=!1};D(c,e,0),z=!0}}function o(e){k||t();var o=e.target,r=s(o);if(!r||e.defaultPrevented||u(g,"embed")||u(o,"embed")&&/\.pdf/i.test(o.src))return!0;var i=e.wheelDeltaX||0,a=e.wheelDeltaY||0;return i||a||(a=e.wheelDelta||0),!v.touchpadSupport&&f(a)?!0:(Math.abs(i)>1.2&&(i*=v.stepSize/120),Math.abs(a)>1.2&&(a*=v.stepSize/120),n(r,-i,-a),void e.preventDefault())}function r(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==C.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||o)return!0;if(u(t,"button")&&e.keyCode===C.spacebar)return!0;var r,i=0,a=0,c=s(g),l=c.clientHeight;switch(c==document.body&&(l=window.innerHeight),e.keyCode){case C.up:a=-v.arrowScroll;break;case C.down:a=v.arrowScroll;break;case C.spacebar:r=e.shiftKey?1:-1,a=-r*l*.9;break;case C.pageup:a=.9*-l;break;case C.pagedown:a=.9*l;break;case C.home:a=-c.scrollTop;break;case C.end:var d=c.scrollHeight-c.scrollTop-l;a=d>0?d+10:0;break;case C.left:i=-v.arrowScroll;break;case C.right:i=v.arrowScroll;break;default:return!0}n(c,i,a),e.preventDefault()}function i(e){g=e.target}function a(e,t){for(var n=e.length;n--;)M[j(e[n])]=t;return t}function s(e){var t=[],n=E.scrollHeight;do{var o=M[j(e)];if(o)return a(t,o);if(t.push(e),n===e.scrollHeight){if(!x||E.clientHeight+10<n)return a(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return a(t,e)}while(e=e.parentNode)}function c(e,t,n){window.addEventListener(e,t,n||!1)}function l(e,t,n){window.removeEventListener(e,t,n||!1)}function u(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function d(e,t){e=e>0?1:-1,t=t>0?1:-1,S.x===e&&S.y===t||(S.x=e,S.y=t,A=[],H=0)}function f(e){if(e){e=Math.abs(e),T.push(e),T.shift(),clearTimeout(P);var t=T[0]==T[1]&&T[1]==T[2],n=p(T[0],120)&&p(T[1],120)&&p(T[2],120);return!(t||n)}}function p(e,t){return Math.floor(e/t)==e/t}function h(e){var t,n,o;return e*=v.pulseScale,1>e?t=e-(1-Math.exp(-e)):(n=Math.exp(-1),e-=1,o=1-Math.exp(-e),t=n+o*(1-n)),t*v.pulseNormalize}function m(e){return e>=1?1:0>=e?0:(1==v.pulseNormalize&&(v.pulseNormalize/=h(1)),h(e))}var g,y,w={frameRate:150,animationTime:700,stepSize:80,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},v=w,b=!1,x=!1,S={x:0,y:0},k=!1,E=document.documentElement,T=[120,120,120],C={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},A=[],z=!1,H=+new Date,M={};setInterval(function(){M={}},1e4);var P,j=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),D=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,n){window.setTimeout(e,n||1e3/60)}}(),N=window.MutationObserver||window.WebKitMutationObserver;c("mousedown",i),c("mousewheel",o),c("load",t)}})}(jQuery);