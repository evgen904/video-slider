/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

// ==================================================
// fancyBox v3.5.2
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function a(t,e){var o,a,i,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),i=n.fancybox.getInstance(),i&&i.$trigger&&i.$trigger.is(o)||(e.selector?s=n(e.selector):(a=o.attr("data-fancybox")||"",a?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+a+'"]'):n('[data-fancybox="'+a+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),i=n.fancybox.open(s,e,r),i.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var i={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Maßstab"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),a={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in a)if(n.style[t]!==o)return a[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,a;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},a=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),a)},b=function(t,e,o){var a=this;a.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(a.opts=h(a.opts,e)),n.fancybox.isMobile&&(a.opts=h(a.opts,a.opts.mobile)),a.id=a.opts.id||++c,a.currIndex=parseInt(a.opts.index,10)||0,a.prevIndex=null,a.prevPos=null,a.currPos=0,a.firstRun=!0,a.group=[],a.slides={},a.addContent(t),a.group.length&&a.init()};n.extend(b.prototype,{init:function(){var o,a,i=this,s=i.group[i.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&r.hideScrollbar!==!1&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),a="",n.each(r.buttons,function(t,e){a+=r.btnTpl[e]||""}),o=n(i.translate(i,r.baseTpl.replace("{{buttons}}",a).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+i.id).addClass(r.baseClass).data("FancyBox",i).appendTo(r.parentEl),i.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){i.$refs[t]=o.find(".fancybox-"+t)}),i.trigger("onInit"),i.activate(),i.jumpTo(i.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var a=n[e];return a===o?t:a})},addContent:function(t){var e,a=this,i=n.makeArray(t);n.each(i,function(t,e){var i,s,r,c,l,d={},u={};n.isPlainObject(e)?(d=e,u=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),u=i.data()||{},u=n.extend(!0,{},u,u.options),u.$orig=i,d.src=a.opts.src||u.src||i.attr("href"),d.type||d.src||(d.type="inline",d.src=e)):d={type:"html",src:e+""},d.opts=n.extend(!0,{},a.opts,u),n.isArray(u.buttons)&&(d.opts.buttons=u.buttons),n.fancybox.isMobile&&d.opts.mobile&&(d.opts=h(d.opts,d.opts.mobile)),s=d.type||d.opts.type,c=d.src||"",!s&&c&&((r=c.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(s="video",d.opts.video.format||(d.opts.video.format="video/"+("ogv"===r[1]?"ogg":r[1]))):c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":c.match(/\.(pdf)((\?|#).*)?$/i)?(s="iframe",d=n.extend(!0,d,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===c.charAt(0)&&(s="inline")),s?d.type=s:a.trigger("objectNeedsType",d),d.contentType||(d.contentType=n.inArray(d.type,["html","inline","ajax"])>-1?"html":d.type),d.index=a.group.length,"auto"==d.opts.smallBtn&&(d.opts.smallBtn=n.inArray(d.type,["html","inline","ajax"])>-1),"auto"===d.opts.toolbar&&(d.opts.toolbar=!d.opts.smallBtn),d.$thumb=d.opts.$thumb||null,d.opts.$trigger&&d.index===a.opts.index&&(d.$thumb=d.opts.$trigger.find("img:first"),d.$thumb.length&&(d.opts.$orig=d.opts.$trigger)),d.$thumb&&d.$thumb.length||!d.opts.$orig||(d.$thumb=d.opts.$orig.find("img:first")),d.$thumb&&!d.$thumb.length&&(d.$thumb=null),d.thumb=d.opts.thumb||(d.$thumb?d.$thumb[0].src:null),"function"===n.type(d.opts.caption)&&(d.opts.caption=d.opts.caption.apply(e,[a,d])),"function"===n.type(a.opts.caption)&&(d.opts.caption=a.opts.caption.apply(e,[a,d])),d.opts.caption instanceof n||(d.opts.caption=d.opts.caption===o?"":d.opts.caption+""),"ajax"===d.type&&(l=c.split(/\s+/,2),l.length>1&&(d.src=l.shift(),d.opts.filter=l.shift())),d.opts.modal&&(d.opts=n.extend(!0,d.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),a.group.push(d)}),Object.keys(a.slides).length&&(a.updateControls(),e=a.Thumbs,e&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,a=o.current,i=t.keyCode||t.which;if(9==i)return void(a.opts.trapFocus&&e.focus(t));if(!(!a.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input")||n(t.target).is("textarea")))return 8===i||27===i?(t.preventDefault(),void e.close(t)):37===i||38===i?(t.preventDefault(),void e.previous()):39===i||40===i?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,i)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){e.idleSecondsCounter++,e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var a,i,s,r,c,l,d,u,f,h=this,g=h.group.length;if(!(h.isDragging||h.isClosing||h.isAnimating&&h.firstRun)){if(t=parseInt(t,10),s=h.current?h.current.opts.loop:h.opts.loop,!s&&(t<0||t>=g))return!1;if(a=h.firstRun=!Object.keys(h.slides).length,c=h.current,h.prevIndex=h.currIndex,h.prevPos=h.currPos,r=h.createSlide(t),g>1&&((s||r.index<g-1)&&h.createSlide(t+1),(s||r.index>0)&&h.createSlide(t-1)),h.current=r,h.currIndex=r.index,h.currPos=r.pos,h.trigger("beforeShow",a),h.updateControls(),r.forcedDuration=o,n.isNumeric(e)?r.forcedDuration=e:e=r.opts[a?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=h.isMoved(r),r.$slide.addClass("fancybox-slide--current"),a)return r.opts.animationEffect&&e&&h.$refs.container.css("transition-duration",e+"ms"),h.$refs.container.addClass("fancybox-is-open").trigger("focus"),h.loadSlide(r),void h.preload("image");l=n.fancybox.getTranslate(c.$slide),d=n.fancybox.getTranslate(h.$refs.stage),n.each(h.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),c.pos!==r.pos&&(c.isComplete=!1),c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(f=l.left-(c.pos*l.width+c.pos*c.opts.gutter),n.each(h.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var a=o.pos*l.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:a-d.left+f}),o.pos!==r.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>r.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-r.pos)*l.width+(o.pos-r.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===h.currPos&&h.complete()})})):e&&r.opts.transitionEffect&&(u="fancybox-animated fancybox-fx-"+r.opts.transitionEffect,c.$slide.addClass("fancybox-slide--"+(c.pos>r.pos?"next":"previous")),n.fancybox.animate(c.$slide,u,e,function(){c.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),r.isLoaded?h.revealContent(r):h.loadSlide(r),h.preload("image")}},createSlide:function(t){var e,o,a=this;return o=t%a.group.length,o=o<0?a.group.length+o:o,!a.slides[t]&&a.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(a.$refs.stage),a.slides[t]=n.extend(!0,{},a.group[o],{pos:t,$slide:e,isLoaded:!1}),a.updateSlide(a.slides[t])),a.slides[t]},scaleToActual:function(t,e,a){var i,s,r,c,l,d=this,u=d.current,f=u.$content,p=n.fancybox.getTranslate(u.$slide).width,h=n.fancybox.getTranslate(u.$slide).height,g=u.width,b=u.height;d.isAnimating||d.isMoved()||!f||"image"!=u.type||!u.isLoaded||u.hasError||(d.isAnimating=!0,n.fancybox.stop(f),t=t===o?.5*p:t,e=e===o?.5*h:e,i=n.fancybox.getTranslate(f),i.top-=n.fancybox.getTranslate(u.$slide).top,i.left-=n.fancybox.getTranslate(u.$slide).left,c=g/i.width,l=b/i.height,s=.5*p-.5*g,r=.5*h-.5*b,g>p&&(s=i.left*c-(t*c-t),s>0&&(s=0),s<p-g&&(s=p-g)),b>h&&(r=i.top*l-(e*l-e),r>0&&(r=0),r<h-b&&(r=h-b)),d.updateCursor(g,b),n.fancybox.animate(f,{top:r,left:s,scaleX:c,scaleY:l},a||330,function(){d.isAnimating=!1}),d.SlideShow&&d.SlideShow.isActive&&d.SlideShow.stop())},scaleToFit:function(t){var e,o=this,a=o.current,i=a.$content;o.isAnimating||o.isMoved()||!i||"image"!=a.type||!a.isLoaded||a.hasError||(o.isAnimating=!0,n.fancybox.stop(i),e=o.getFitPos(a),o.updateCursor(e.width,e.height),n.fancybox.animate(i,{top:e.top,left:e.left,scaleX:e.width/i.width(),scaleY:e.height/i.height()},t||330,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,a,i,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),a=Math.min(1,e/l,o/d),l=a*l,d=a*d,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(i=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/i?d=l/i:l>d*i&&(l=d*i)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,a=t&&t.$content,i=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),a&&(i||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(a),n.fancybox.setTranslate(a,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,a=e.current,i=a.$slide;!e.isClosing&&a&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},t===o?0:t,function(){i.css({transform:"",opacity:""}),a.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,a=t||this.current;return!!a&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(a.$slide),!a.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,a,i=this,s=i.current,r=i.$refs.container;s&&!i.isClosing&&i.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=i.canPan(t,e),a=!!o||i.isZoomable(),r.toggleClass("fancybox-is-zoomable",a),n("[data-fancybox-zoom]").prop("disabled",!a),o?r.addClass("fancybox-can-pan"):a&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||i.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if(t=e.getFitPos(n),t&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var a=this,i=!1,s=a.current,r=s.$content;return t!==o&&e!==o?i=t<s.width&&e<s.height:r&&(i=n.fancybox.getTranslate(r),i=i.width<s.width&&i.height<s.height),i},canPan:function(t,e){var a=this,i=a.current,s=null,r=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(r=a.getFitPos(i),t!==o&&e!==o?s={width:t,height:e}:i.isComplete&&(s=n.fancybox.getTranslate(i.$content)),s&&r&&(r=Math.abs(s.width-r.width)>1.5||Math.abs(s.height-r.height)>1.5)),r},loadSlide:function(t){var e,o,a,i=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,i.trigger("beforeLoad",t)===!1)return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":i.setImage(t);break;case"iframe":i.setIframe(t);break;case"html":i.setContent(t,t.src||t.content);break;case"video":i.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?i.setContent(t,n(t.src)):i.setError(t);break;case"ajax":i.showLoading(t),a=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&i.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&i.setError(t)}})),o.one("onReset",function(){a.abort()});break;default:i.setError(t)}return!0}},setImage:function(t){var o,a=this;setTimeout(function(){var e=t.$image;a.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||a.showLoading(t)},50),a.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),t.opts.preload!==!1&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){a.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),a.setBigImage(t)},checkSrcset:function(e){var n,o,a,i,s=e.opts.srcset||e.opts.image.srcset;if(s){a=t.devicePixelRatio||1,i=t.innerWidth*a,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=i||"x"===c.postfix&&c.value>=a){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,a=e.createElement("img"),i=n(a);t.$image=i.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),i.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(a.complete||"complete"==a.readyState)&&i.naturalWidth&&i.naturalHeight?i.trigger("load"):a.error&&i.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),a=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),a>0&&(t.width=Math.floor(a*e/n),t.height=a)},setIframe:function(t){var e,a=this,i=t.opts.iframe,s=t.$slide;n.fancybox.isMobile&&(i.css.overflow="scroll"),t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(s),s.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(a.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),a.afterLoad(t)}),s.on("refresh.fb",function(){var n,a,r=t.$content,c=i.css.width,l=i.css.height;if(1===e[0].isReady){try{n=e.contents(),a=n.find("body")}catch(t){}a&&a.length&&a.children().length&&(s.css("overflow","visible"),r.css({width:"100%","max-width":"100%",height:"9999px"}),c===o&&(c=Math.ceil(Math.max(a[0].clientWidth,a.outerWidth(!0)))),r.css("width",c?c:"").css("max-width",""),l===o&&(l=Math.ceil(Math.max(a[0].clientHeight,a.outerHeight(!0)))),r.css("height",l?l:""),s.css("overflow","auto")),r.removeClass("fancybox-is-hidden")}})):a.afterLoad(t),e.attr("src",t.src),s.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e=this,n=t||e.current,o=n.opts.caption,a=e.$refs.caption,i=!1;n.opts.preventCaptionOverlap&&o&&o.length&&(n.pos!==e.currPos?(a=a.clone().empty().appendTo(a.parent()),a.html(o),i=a.outerHeight(!0),a.empty().remove()):e.$caption&&(i=e.$caption.outerHeight(!0)),n.$slide.css("padding-bottom",i||""))},adjustLayout:function(t){var e,n,o,a,i=this,s=t||i.current;s.isLoaded&&s.opts.disableLayoutFix!==!0&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],a=s.$slide.css("padding-bottom"),parseFloat(a)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=a),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,a,i,s,r=this,c=t.$slide,l=!1,d=!1,u=r.isMoved(t),f=t.isRevealed;return t.isRevealed=!0,e=t.opts[r.firstRun?"animationEffect":"transitionEffect"],i=t.opts[r.firstRun?"animationDuration":"transitionDuration"],i=parseInt(t.forcedDuration===o?i:t.forcedDuration,10),!u&&t.pos===r.currPos&&i||(e=!1),"zoom"===e&&(t.pos===r.currPos&&i&&"image"===t.type&&!t.hasError&&(d=r.getThumbPos(t))?l=r.getFitPos(t):e="fade"),"zoom"===e?(r.isAnimating=!0,l.scaleX=l.width/d.width,l.scaleY=l.height/d.height,s=t.opts.zoomOpacity,"auto"==s&&(s=Math.abs(t.width/t.height-d.width/d.height)>.1),s&&(d.opacity=.1,l.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),d),p(t.$content),void n.fancybox.animate(t.$content,l,i,function(){r.isAnimating=!1,r.complete()})):(r.updateSlide(t),e?(n.fancybox.stop(c),a="fancybox-slide--"+(t.pos>=r.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,c.addClass(a).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(c),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(c,"fancybox-slide--current",i,function(){c.removeClass(a).css({transform:"",opacity:""}),t.pos===r.currPos&&r.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),f||!u||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===r.currPos&&r.complete())))},getThumbPos:function(t){var e,o,a,i,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),a=parseFloat(c.css("border-right-width")||0),i=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-a-s,height:e.height-o-i,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,a={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?a[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=a),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var a,i,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(a=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),a=a.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),a.length?(i=a.index(e.activeElement),t&&t.shiftKey?(i<0||0==i)&&(t.preventDefault(),a.eq(a.length-1).trigger("focus")):(i<0||i==a.length-1)&&(t&&t.preventDefault(),a.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,a,i,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,u.trigger("beforeClose",t)===!1?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),i=f.$content,o=f.opts.animationEffect,a=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),t!==!0?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),a&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",a+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||i&&a&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(i),s=n.fancybox.getTranslate(i),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(i,c),p(i),n.fancybox.animate(i,l,a,h),!0):(o&&a?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,a,h):t===!0?setTimeout(h,a):h(),
!0)))},cleanUp:function(e){var o,a,i,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(a=t.scrollX,i=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(i).scrollLeft(a))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,a=Array.prototype.slice.call(arguments,1),i=this,s=e&&e.opts?e:i.current;return s?a.unshift(s):s=i,a.unshift(i),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,a)),o===!1?o:void("afterClose"!==t&&i.$refs?i.$refs.container.trigger(t+".fb",a):r.trigger(t+".fb",a))},updateControls:function(){var t=this,o=t.current,a=o.index,i=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),t.$caption=r&&r.length?s.html(r):null,t.hasHiddenControls||t.isIdle||t.showControls(),i.find("[data-fancybox-count]").html(t.group.length),i.find("[data-fancybox-index]").html(a+1),i.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&a<=0),i.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&a>=t.group.length-1),"image"===o.type?i.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&i.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.2",defaults:i,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",a={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().left:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o?n+=" scale("+e.scaleX+", "+e.scaleY+")":e.scaleX!==o&&(n+=" scaleX("+e.scaleX+")"),n.length&&(a.transform=n),e.opacity!==o&&(a.opacity=e.opacity),e.width!==o&&(a.width=e.width),e.height!==o&&(a.height=e.height),t.css(a)},animate:function(t,e,a,i,s){var r,c=this;n.isFunction(a)&&(i=a,a=null),c.stop(t),r=c.getTranslate(t),t.on(f,function(l){(!l||!l.originalEvent||t.is(l.originalEvent.target)&&"z-index"!=l.originalEvent.propertyName)&&(c.stop(t),n.isNumeric(a)&&t.css("transition-duration",""),n.isPlainObject(e)?e.scaleX!==o&&e.scaleY!==o&&c.setTranslate(t,{top:e.top,left:e.left,width:r.width*e.scaleX,height:r.height*e.scaleY,scaleX:1,scaleY:1}):s!==!0&&t.removeClass(e),n.isFunction(i)&&i(l))}),n.isNumeric(a)&&t.css("transition-duration",a+"ms"),n.isPlainObject(e)?(e.scaleX!==o&&e.scaleY!==o&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},a+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},a):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},a),this},r.on("click.fb-start","[data-fancybox]",a),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=".fancybox-button",e="fancybox-focus",o=null;r.on("mousedown mouseup focus blur",t,function(a){switch(a.type){case"mousedown":o=n(this);break;case"mouseup":o=null;break;case"focusin":n(t).removeClass(e),n(this).is(o)||n(this).is("[disabled]")||n(this).addClass(e);break;case"focusout":n(t).removeClass(e)}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube-nocookie.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,a,i){var s,r,c,l,d,u,f,p=i.src||"",h=!1;s=t.extend(!0,{},e,i.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var a=0;a<d.length;++a){var s=d[a].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,i.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,i):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,i):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(i.opts.thumb||i.opts.$thumb&&i.opts.$thumb.length||(i.opts.thumb=r),"iframe"===h&&(i.opts=t.extend(!0,i.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(i,{type:h,src:p,origSrc:i.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(i.type=i.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;return this[t].loaded?void setTimeout(function(){n.done(t)}):void(this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e)))},done:function(e){var n,o,a;"youtube"===e&&delete window.onYouTubeIframeAPIReady,n=t.fancybox.getInstance(),n&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?a=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(a=new Vimeo.Player(o),a.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),a=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),i=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,a=o.length;e<a;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],a=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,i=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return a||i},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(a(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var a=this,c=n(o.target),d=a.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&a.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();a.realPoints=a.startPoints=i(o),a.startPoints.length&&(u.touch&&o.stopPropagation(),a.startEvent=o,a.canTap=!0,a.$target=c,a.$content=p,a.opts=u.opts.touch,a.isPanning=!1,a.isSwiping=!1,a.isZooming=!1,a.isScrolling=!1,a.canPan=d.canPan(),a.startTime=(new Date).getTime(),a.distanceX=a.distanceY=a.distance=0,a.canvasWidth=Math.round(f[0].clientWidth),a.canvasHeight=Math.round(f[0].clientHeight),a.contentLastPos=null,a.contentStartPos=n.fancybox.getTranslate(a.$content)||{top:0,left:0},a.sliderStartPos=n.fancybox.getTranslate(f),a.stagePos=n.fancybox.getTranslate(d.$refs.stage),a.sliderStartPos.top-=a.stagePos.top,a.sliderStartPos.left-=a.stagePos.left,a.contentStartPos.top-=a.stagePos.top,a.contentStartPos.left-=a.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(a,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(a,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",a.onscroll,!0),((a.opts||a.canPan)&&(c.is(a.$stage)||a.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.hasClass("fancybox-caption")))&&(a.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&a.isScrollable||o.preventDefault(),(1===a.startPoints.length||u.hasError)&&(a.canPan?(n.fancybox.stop(a.$content),a.isPanning=!0):a.isSwiping=!0,a.$container.addClass("fancybox-is-grabbing")),2===a.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(a.canTap=!1,a.isSwiping=!1,a.isPanning=!1,a.isZooming=!0,n.fancybox.stop(a.$content),a.centerPointStartX=.5*(a.startPoints[0].x+a.startPoints[1].x)-n(t).scrollLeft(),a.centerPointStartY=.5*(a.startPoints[0].y+a.startPoints[1].y)-n(t).scrollTop(),a.percentageOfImageAtPinchPointX=(a.centerPointStartX-a.contentStartPos.left)/a.contentStartPos.width,a.percentageOfImageAtPinchPointY=(a.centerPointStartY-a.contentStartPos.top)/a.contentStartPos.height,a.startDistanceBetweenFingers=s(a.startPoints[0],a.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=i(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&e.isSwiping===!0||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var i,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(c!==!0)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(a(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||s.opts.vertical===!1||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(i=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=i>45&&i<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,a;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),a=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-a.top,s.sliderStartPos.left=o.left-a.left),n.fancybox.setTranslate(e.$slide,{top:o.top-a.top,left:o.left-a.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;return s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5)?void(t.startPoints=t.newPoints):(t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&a(t.requestId),void(t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})))},d.prototype.limitMovement=function(){var t,e,n,o,a,i,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return a=h>r?f+l:f,i=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&a>t&&(a=t-1+Math.pow(-t+f+l,.8)||0),l<0&&a<n&&(a=n+1-Math.pow(n-f-l,.8)||0),d>0&&i>e&&(i=e-1+Math.pow(-e+p+d,.8)||0),d<0&&i<o&&(i=o+1-Math.pow(o-p-d,.8)||0),{top:i,left:a}},d.prototype.limitPosition=function(t,e,n,o){var a=this,i=a.canvasWidth,s=a.canvasHeight;return n>i?(t=t>0?0:t,t=t<i-n?i-n:t):t=Math.max(0,i/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,i=e.contentStartPos,r=i.width,c=i.height,l=i.left,d=i.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&a(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;return o.endPoints=i(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(a(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap?o.onTap(t):(o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,void(r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)))},d.prototype.endSwiping=function(t,e){var o=this,a=!1,i=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&i>1&&(o.dMs>130&&s>10||s>50),c=300;o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),a=o.instance.close(!0,250)):r&&o.distanceX>0?a=o.instance.previous(c):r&&o.distanceX<0&&(a=o.instance.next(c)),a!==!1||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,a=this;a.contentLastPos&&(a.opts.momentum===!1||a.dMs>350?(t=a.contentLastPos.left,e=a.contentLastPos.top):(t=a.contentLastPos.left+500*a.velocityX,e=a.contentLastPos.top+500*a.velocityY),o=a.limitPosition(t,e,a.contentStartPos.width,a.contentStartPos.height),o.width=a.contentStartPos.width,o.height=a.contentStartPos.height,n.fancybox.animate(a.$content,o,330))},d.prototype.endZooming=function(){var t,e,o,a,i=this,s=i.instance.current,r=i.newWidth,c=i.newHeight;i.contentLastPos&&(t=i.contentLastPos.left,e=i.contentLastPos.top,a={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(i.$content,a),r<i.canvasWidth&&c<i.canvasHeight?i.instance.scaleToFit(150):r>s.width||c>s.height?i.instance.scaleToActual(i.centerPointStartX,i.centerPointStartY,150):(o=i.limitPosition(t,e,r,c),n.fancybox.animate(i.$content,o,150)))},d.prototype.onTap=function(e){var o,a=this,s=n(e.target),r=a.instance,c=r.current,l=e&&i(e)||a.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-a.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-a.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(a.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(a.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(a.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(a.tapped){if(clearTimeout(a.tapped),a.tapped=null,Math.abs(d-a.tapX)>50||Math.abs(u-a.tapY)>50)return this;f("dblclick"+o)}else a.tapX=d,a.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?a.tapped=setTimeout(function(){a.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,a=o.current;a&&(t===!0||a.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==a.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},a.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},a.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var a=e&&e.SlideShow;o?a&&n.opts.slideShow.autoStart&&a.start():a&&a.isActive&&a.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,a,i,s){var r=o&&o.SlideShow;!r||!a.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(i.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var a=e[o];if(a&&a[1]in t){for(var i=0;i<a.length;i++)n[e[0][i]]=a[i];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.current.$content.css("transition","none"),n.isAnimating=!1,n.update(!0,!0,0)),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var a;return n?void(e&&e.group[e.currIndex].opts.fullScreen?(a=e.$refs.container,a.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&e.opts.fullScreen.autoStart===!0&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()):void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()},"afterKeydown.fb":function(t,e,n,o,a){e&&e.FullScreen&&70===a&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs",o=n+"-active";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var a=function(t){this.init(t)};e.extend(a.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var a=0,i=n.length;a<i&&(n[a].thumb&&o++,!(o>1));a++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,a=o.instance,i=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(a.$refs.container.find(i).addBack().filter(i)),o.$grid.on("click","a",function(){a.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(a.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+a.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,a=this,i=a.$list,s=a.$grid;a.instance.current&&(e=i.children().removeClass(o).filter('[data-index="'+a.instance.current.index+'"]').addClass(o),n=e.position(),"y"===a.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===a.opts.axis&&(n.left<s.scrollLeft()||n.left>s.scrollLeft()+(s.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new a(e),n.isActive&&n.opts.autoStart===!0&&n.show())},"beforeShow.fb":function(t,e,n,o){var a=e&&e.Thumbs;a&&a.isVisible&&a.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,a){var i=e&&e.Thumbs;i&&i.isActive&&71===a&&(o.preventDefault(),i.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&n.opts.hideOnClose!==!1&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,a=e.fancybox.getInstance(),i=a.current||null;i&&("function"===e.type(i.opts.share.url)&&(t=i.opts.share.url.apply(i,[a,i])),o=i.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===i.type?encodeURIComponent(i.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,a.$caption?encodeURIComponent(a.$caption.text()):""),e.fancybox.open({src:a.translate(a,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){a.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,a=n.join("-");return{hash:e,index:o<1?1:o,gallery:a}}function a(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function i(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""),""!==n&&n)}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)}),n(function(){n.fancybox.defaults.hash!==!1&&(n(e).on({"onInit.fb":function(t,e){var n,a;e.group[e.currIndex].opts.hash!==!1&&(n=o(),a=i(e),a&&n.gallery&&a==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,a,s){var r;a&&a.opts.hash!==!1&&(r=i(o),r&&(o.currentHash=r+(o.group.length>1?"-"+(a.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300))))},"beforeClose.fb":function(n,o,a){a.opts.hash!==!1&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var a=n(o).data("FancyBox");if(a&&a.currentHash)return e=a,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&a(t)}),setTimeout(function(){n.fancybox.getInstance()||a(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,a=(new Date).getTime();e.group.length<2||o.opts.wheel===!1||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,a-n<250||(n=a,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Create the stage DOM element
	 */
	Owl.prototype.initializeStage = function() {
		this.$stage = this.$element.find('.' + this.settings.stageClass);

		// if the stage is already in the DOM, grab it and skip stage initialization
		if (this.$stage.length) {
			return;
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + '>', {
			"class": this.settings.stageClass
		}).wrap( $( '<div/>', {
			"class": this.settings.stageOuterClass
		}));

		// append stage
		this.$element.append(this.$stage.parent());
	};

	/**
	 * Create item DOM elements
	 */
	Owl.prototype.initializeItems = function() {
		var $items = this.$element.find('.owl-item');

		// if the items are already in the DOM, grab them and skip item initialization
		if ($items.length) {
			this._items = $items.get().map(function(item) {
				return $(item);
			});

			this._mergers = this._items.map(function() {
				return 1;
			});

			this.refresh();

			return;
		}

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.isVisible()) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);
	};

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.initializeStage();
		this.initializeItems();

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
	Owl.prototype.isVisible = function() {
		return this.settings.checkVisibility
			? this.$element.is(':visible')
			: true;
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.isVisible()) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's' + (
					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
				)
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.isVisible()) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.isVisible();
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.isVisible() === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);
					//TODO: Need documentation for this new option
					if (settings.lazyLoadEager > 0) {
						n += settings.lazyLoadEager;
						// If the carousel is looping also preload images that are to the "left"
						if (settings.loop) {
              position -= settings.lazyLoadEager;
              n++;
            }
					}

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false,
		lazyLoadEager: 0
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
            } else if ($element.is('source')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('srcset', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		this._previousHeight = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
		this._intervalId = null;
		var refThis = this;

		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
		// and have been made compatible with the latest jQuery version
		$(window).on('load', function() {
			if (refThis._core.settings.autoHeight) {
				refThis.update();
			}
		});

		// Autoresize the height of the carousel when window is resized
		// When carousel has images, the height is dependent on the width
		// and should also change on resize
		$(window).resize(function() {
			if (refThis._core.settings.autoHeight) {
				if (refThis._intervalId != null) {
					clearTimeout(refThis._intervalId);
				}

				refThis._intervalId = setTimeout(function() {
					refThis.update();
				}, 250);
			}
		});

	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			lazyLoadEnabled = this._core.settings.lazyLoad,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
			maxheight = this._previousHeight;
		}

		this._previousHeight = maxheight;

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] !== 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = $('<div/>',{
						"class": 'owl-video-tn ' + lazyClass,
						"srcType": path
					});
				} else {
					tnLink = $( '<div/>', {
						"class": "owl-video-tn",
						"style": 'opacity:1;background-image:url(' + path + ')'
					});
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap( $( '<div/>', {
			"class": "owl-video-wrapper",
			"style": dimensions
		}));

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html,
			iframe;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
		html.attr( 'height', height );
		html.attr( 'width', width );
		if (video.type === 'youtube') {
			html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
		} else if (video.type === 'vimeo') {
			html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
		} else if (video.type === 'vzaar') {
			html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
		}

		iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
		this._call = null;

		/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
		this._time = 0;

		/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
		this._timeout = 0;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = true;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position' && this._paused) {
					// Reset the timer. This code is triggered when the position
					// of the carousel was changed through user interaction.
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype._next = function(speed) {
		this._call = window.setTimeout(
			$.proxy(this._next, this, speed),
			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
		);

		if (this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	}

	/**
	 * Reads the current timer value when the timer is playing.
	 * @public
	 */
	Autoplay.prototype.read = function() {
		return new Date().getTime() - this._time;
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		var elapsed;

		if (!this._core.is('rotating')) {
			this._core.enter('rotating');
		}

		timeout = timeout || this._core.settings.autoplayTimeout;

		// Calculate the elapsed time since the last transition. If the carousel
		// wasn't playing this calculation will yield zero.
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

		if (this._paused) {
			// Start the clock.
			this._time = this.read();
			this._paused = false;
		} else {
			// Clear the active timeout to allow replacement.
			window.clearTimeout(this._call);
		}

		// Adjust the origin of the timer to match the new timeout value.
		this._time += this.read() % timeout - elapsed;

		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (this._core.is('rotating')) {
			// Reset the clock.
			this._time = 0;
			this._paused = true;

			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (this._core.is('rotating') && !this._paused) {
			// Pause the clock.
			this._time = this.read();
			this._paused = true;

			window.clearTimeout(this._call);
		}
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [
			'<span aria-label="' + 'Previous' + '">&#x2039;</span>',
			'<span aria-label="' + 'Next' + '">&#x203a;</span>'
		],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<button role="button">')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		/*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override, settings;
		settings = this._core.settings;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			if (control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);

/*! Picturefill - v2.3.1 - 2015-04-09
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b,c){"use strict";function d(b){"object"==typeof module&&"object"==typeof module.exports?module.exports=b:"function"==typeof define&&define.amd&&define("picturefill",function(){return b}),"object"==typeof a&&(a.picturefill=b)}function e(a){var b,c,d,e,f,i=a||{};b=i.elements||g.getAllElements();for(var j=0,k=b.length;k>j;j++)if(c=b[j],d=c.parentNode,e=void 0,f=void 0,"IMG"===c.nodeName.toUpperCase()&&(c[g.ns]||(c[g.ns]={}),i.reevaluate||!c[g.ns].evaluated)){if(d&&"PICTURE"===d.nodeName.toUpperCase()){if(g.removeVideoShim(d),e=g.getMatch(c,d),e===!1)continue}else e=void 0;(d&&"PICTURE"===d.nodeName.toUpperCase()||!g.sizesSupported&&c.srcset&&h.test(c.srcset))&&g.dodgeSrcset(c),e?(f=g.processSourceSet(e),g.applyBestCandidate(f,c)):(f=g.processSourceSet(c),(void 0===c.srcset||c[g.ns].srcset)&&g.applyBestCandidate(f,c)),c[g.ns].evaluated=!0}}function f(){function c(){clearTimeout(d),d=setTimeout(h,60)}g.initTypeDetects(),e();var d,f=setInterval(function(){return e(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(f):void 0},250),h=function(){e({reevaluate:!0})};a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&a.attachEvent("onresize",c)}if(a.HTMLPictureElement)return void d(function(){});b.createElement("picture");var g=a.picturefill||{},h=/\s+\+?\d+(e\d+)?w/;g.ns="picturefill",function(){g.srcsetSupported="srcset"in c,g.sizesSupported="sizes"in c,g.curSrcSupported="currentSrc"in c}(),g.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},g.makeUrl=function(){var a=b.createElement("a");return function(b){return a.href=b,a.href}}(),g.restrictsMixedContent=function(){return"https:"===a.location.protocol},g.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},g.getDpr=function(){return a.devicePixelRatio||1},g.getWidthFromLength=function(a){var c;if(!a||a.indexOf("%")>-1!=!1||!(parseFloat(a)>0||a.indexOf("calc(")>-1))return!1;a=a.replace("vw","%"),g.lengthEl||(g.lengthEl=b.createElement("div"),g.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",g.lengthEl.className="helper-from-picturefill-js"),g.lengthEl.style.width="0px";try{g.lengthEl.style.width=a}catch(d){}return b.body.appendChild(g.lengthEl),c=g.lengthEl.offsetWidth,0>=c&&(c=!1),b.body.removeChild(g.lengthEl),c},g.detectTypeSupport=function(b,c){var d=new a.Image;return d.onerror=function(){g.types[b]=!1,e()},d.onload=function(){g.types[b]=1===d.width,e()},d.src=c,"pending"},g.types=g.types||{},g.initTypeDetects=function(){g.types["image/jpeg"]=!0,g.types["image/gif"]=!0,g.types["image/png"]=!0,g.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),g.types["image/webp"]=g.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},g.verifyTypeSupport=function(a){var b=a.getAttribute("type");if(null===b||""===b)return!0;var c=g.types[b];return"string"==typeof c&&"pending"!==c?(g.types[b]=g.detectTypeSupport(b,c),"pending"):"function"==typeof c?(c(),"pending"):c},g.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},g.findWidthFromSourceSize=function(c){for(var d,e=g.trim(c).split(/\s*,\s*/),f=0,h=e.length;h>f;f++){var i=e[f],j=g.parseSize(i),k=j.length,l=j.media;if(k&&(!l||g.matchesMedia(l))&&(d=g.getWidthFromLength(k)))break}return d||Math.max(a.innerWidth||0,b.documentElement.clientWidth)},g.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c.slice(-1);if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},g.parseDescriptor=function(a,b){var c,d=b||"100vw",e=a&&a.replace(/(^\s+|\s+$)/g,""),f=g.findWidthFromSourceSize(d);if(e)for(var h=e.split(" "),i=h.length-1;i>=0;i--){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||g.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/f)}return c||1},g.getCandidatesFromSourceSet=function(a,b){for(var c=g.parseSrcset(a),d=[],e=0,f=c.length;f>e;e++){var h=c[e];d.push({url:h.url,resolution:g.parseDescriptor(h.descriptor,b)})}return d},g.dodgeSrcset=function(a){a.srcset&&(a[g.ns].srcset=a.srcset,a.srcset="",a.setAttribute("data-pfsrcset",a[g.ns].srcset))},g.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[g.ns]&&a[g.ns].srcset&&(b=a[g.ns].srcset),b&&(d=g.getCandidatesFromSourceSet(b,c)),d},g.backfaceVisibilityFix=function(a){var b=a.style||{},c="webkitBackfaceVisibility"in b,d=b.zoom;c&&(b.zoom=".999",c=a.offsetWidth,b.zoom=d)},g.setIntrinsicSize=function(){var c={},d=function(a,b,c){b&&a.setAttribute("width",parseInt(b/c,10))};return function(e,f){var h;e[g.ns]&&!a.pfStopIntrinsicSize&&(void 0===e[g.ns].dims&&(e[g.ns].dims=e.getAttribute("width")||e.getAttribute("height")),e[g.ns].dims||(f.url in c?d(e,c[f.url],f.resolution):(h=b.createElement("img"),h.onload=function(){if(c[f.url]=h.width,!c[f.url])try{b.body.appendChild(h),c[f.url]=h.width||h.offsetWidth,b.body.removeChild(h)}catch(a){}e.src===f.url&&d(e,c[f.url],f.resolution),e=null,h.onload=null,h=null},h.src=f.url)))}}(),g.applyBestCandidate=function(a,b){var c,d,e;a.sort(g.ascendingSort),d=a.length,e=a[d-1];for(var f=0;d>f;f++)if(c=a[f],c.resolution>=g.getDpr()){e=c;break}e&&(e.url=g.makeUrl(e.url),b.src!==e.url&&(g.restrictsMixedContent()&&"http:"===e.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console&&console.warn("Blocked mixed content image "+e.url):(b.src=e.url,g.curSrcSupported||(b.currentSrc=b.src),g.backfaceVisibilityFix(b))),g.setIntrinsicSize(b,e))},g.ascendingSort=function(a,b){return a.resolution-b.resolution},g.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},g.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,e=c.length;e>d;d++){var f=c[d];("PICTURE"===f.parentNode.nodeName.toUpperCase()||null!==f.getAttribute("srcset")||f[g.ns]&&null!==f[g.ns].srcset)&&a.push(f)}return a},g.getMatch=function(a,b){for(var c,d=b.childNodes,e=0,f=d.length;f>e;e++){var h=d[e];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||g.matchesMedia(i))){var j=g.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},f(),e._=g,d(e)}(window,window.document,new window.Image);
/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
(function(w) {
  "use strict";
  w.matchMedia = w.matchMedia || function(doc, undefined) {
    var bool, docElem = doc.documentElement, refNode = docElem.firstElementChild || docElem.firstChild, fakeBody = doc.createElement("body"), div = doc.createElement("div");
    div.id = "mq-test-1";
    div.style.cssText = "position:absolute;top:-100em";
    fakeBody.style.background = "none";
    fakeBody.appendChild(div);
    return function(q) {
      div.innerHTML = '&shy;<style media="' + q + '"> #mq-test-1 { width: 42px; }</style>';
      docElem.insertBefore(fakeBody, refNode);
      bool = div.offsetWidth === 42;
      docElem.removeChild(fakeBody);
      return {
        matches: bool,
        media: q
      };
    };
  }(w.document);
})(this);

(function(w) {
  "use strict";
  var respond = {};
  w.respond = respond;
  respond.update = function() {};
  var requestQueue = [], xmlHttp = function() {
    var xmlhttpmethod = false;
    try {
      xmlhttpmethod = new w.XMLHttpRequest();
    } catch (e) {
      xmlhttpmethod = new w.ActiveXObject("Microsoft.XMLHTTP");
    }
    return function() {
      return xmlhttpmethod;
    };
  }(), ajax = function(url, callback) {
    var req = xmlHttp();
    if (!req) {
      return;
    }
    req.open("GET", url, true);
    req.onreadystatechange = function() {
      if (req.readyState !== 4 || req.status !== 200 && req.status !== 304) {
        return;
      }
      callback(req.responseText);
    };
    if (req.readyState === 4) {
      return;
    }
    req.send(null);
  }, isUnsupportedMediaQuery = function(query) {
    return query.replace(respond.regex.minmaxwh, "").match(respond.regex.other);
  };
  respond.ajax = ajax;
  respond.queue = requestQueue;
  respond.unsupportedmq = isUnsupportedMediaQuery;
  respond.regex = {
    media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
    keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
    comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
    urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
    findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
    only: /(only\s+)?([a-zA-Z]+)\s?/,
    minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
    maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
    minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
    other: /\([^\)]*\)/g
  };
  respond.mediaQueriesSupported = w.matchMedia && w.matchMedia("only all") !== null && w.matchMedia("only all").matches;
  if (respond.mediaQueriesSupported) {
    return;
  }
  var doc = w.document, docElem = doc.documentElement, mediastyles = [], rules = [], appendedEls = [], parsedSheets = {}, resizeThrottle = 30, head = doc.getElementsByTagName("head")[0] || docElem, base = doc.getElementsByTagName("base")[0], links = head.getElementsByTagName("link"), lastCall, resizeDefer, eminpx, getEmValue = function() {
    var ret, div = doc.createElement("div"), body = doc.body, originalHTMLFontSize = docElem.style.fontSize, originalBodyFontSize = body && body.style.fontSize, fakeUsed = false;
    div.style.cssText = "position:absolute;font-size:1em;width:1em";
    if (!body) {
      body = fakeUsed = doc.createElement("body");
      body.style.background = "none";
    }
    docElem.style.fontSize = "100%";
    body.style.fontSize = "100%";
    body.appendChild(div);
    if (fakeUsed) {
      docElem.insertBefore(body, docElem.firstChild);
    }
    ret = div.offsetWidth;
    if (fakeUsed) {
      docElem.removeChild(body);
    } else {
      body.removeChild(div);
    }
    docElem.style.fontSize = originalHTMLFontSize;
    if (originalBodyFontSize) {
      body.style.fontSize = originalBodyFontSize;
    }
    ret = eminpx = parseFloat(ret);
    return ret;
  }, applyMedia = function(fromResize) {
    var name = "clientWidth", docElemProp = docElem[name], currWidth = doc.compatMode === "CSS1Compat" && docElemProp || doc.body[name] || docElemProp, styleBlocks = {}, lastLink = links[links.length - 1], now = new Date().getTime();
    if (fromResize && lastCall && now - lastCall < resizeThrottle) {
      w.clearTimeout(resizeDefer);
      resizeDefer = w.setTimeout(applyMedia, resizeThrottle);
      return;
    } else {
      lastCall = now;
    }
    for (var i in mediastyles) {
      if (mediastyles.hasOwnProperty(i)) {
        var thisstyle = mediastyles[i], min = thisstyle.minw, max = thisstyle.maxw, minnull = min === null, maxnull = max === null, em = "em";
        if (!!min) {
          min = parseFloat(min) * (min.indexOf(em) > -1 ? eminpx || getEmValue() : 1);
        }
        if (!!max) {
          max = parseFloat(max) * (max.indexOf(em) > -1 ? eminpx || getEmValue() : 1);
        }
        if (!thisstyle.hasquery || (!minnull || !maxnull) && (minnull || currWidth >= min) && (maxnull || currWidth <= max)) {
          if (!styleBlocks[thisstyle.media]) {
            styleBlocks[thisstyle.media] = [];
          }
          styleBlocks[thisstyle.media].push(rules[thisstyle.rules]);
        }
      }
    }
    for (var j in appendedEls) {
      if (appendedEls.hasOwnProperty(j)) {
        if (appendedEls[j] && appendedEls[j].parentNode === head) {
          head.removeChild(appendedEls[j]);
        }
      }
    }
    appendedEls.length = 0;
    for (var k in styleBlocks) {
      if (styleBlocks.hasOwnProperty(k)) {
        var ss = doc.createElement("style"), css = styleBlocks[k].join("\n");
        ss.type = "text/css";
        ss.media = k;
        head.insertBefore(ss, lastLink.nextSibling);
        if (ss.styleSheet) {
          ss.styleSheet.cssText = css;
        } else {
          ss.appendChild(doc.createTextNode(css));
        }
        appendedEls.push(ss);
      }
    }
  }, translate = function(styles, href, media) {
    var qs = styles.replace(respond.regex.comments, "").replace(respond.regex.keyframes, "").match(respond.regex.media), ql = qs && qs.length || 0;
    href = href.substring(0, href.lastIndexOf("/"));
    var repUrls = function(css) {
      return css.replace(respond.regex.urls, "$1" + href + "$2$3");
    }, useMedia = !ql && media;
    if (href.length) {
      href += "/";
    }
    if (useMedia) {
      ql = 1;
    }
    for (var i = 0; i < ql; i++) {
      var fullq, thisq, eachq, eql;
      if (useMedia) {
        fullq = media;
        rules.push(repUrls(styles));
      } else {
        fullq = qs[i].match(respond.regex.findStyles) && RegExp.$1;
        rules.push(RegExp.$2 && repUrls(RegExp.$2));
      }
      eachq = fullq.split(",");
      eql = eachq.length;
      for (var j = 0; j < eql; j++) {
        thisq = eachq[j];
        if (isUnsupportedMediaQuery(thisq)) {
          continue;
        }
        mediastyles.push({
          media: thisq.split("(")[0].match(respond.regex.only) && RegExp.$2 || "all",
          rules: rules.length - 1,
          hasquery: thisq.indexOf("(") > -1,
          minw: thisq.match(respond.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
          maxw: thisq.match(respond.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
        });
      }
    }
    applyMedia();
  }, makeRequests = function() {
    if (requestQueue.length) {
      var thisRequest = requestQueue.shift();
      ajax(thisRequest.href, function(styles) {
        translate(styles, thisRequest.href, thisRequest.media);
        parsedSheets[thisRequest.href] = true;
        w.setTimeout(function() {
          makeRequests();
        }, 0);
      });
    }
  }, ripCSS = function() {
    for (var i = 0; i < links.length; i++) {
      var sheet = links[i], href = sheet.href, media = sheet.media, isCSS = sheet.rel && sheet.rel.toLowerCase() === "stylesheet";
      if (!!href && isCSS && !parsedSheets[href]) {
        if (sheet.styleSheet && sheet.styleSheet.rawCssText) {
          translate(sheet.styleSheet.rawCssText, href, media);
          parsedSheets[href] = true;
        } else {
          if (!/^([a-zA-Z:]*\/\/)/.test(href) && !base || href.replace(RegExp.$1, "").split("/")[0] === w.location.host) {
            if (href.substring(0, 2) === "//") {
              href = w.location.protocol + href;
            }
            requestQueue.push({
              href: href,
              media: media
            });
          }
        }
      }
    }
    makeRequests();
  };
  ripCSS();
  respond.update = ripCSS;
  respond.getEmValue = getEmValue;
  function callMedia() {
    applyMedia(true);
  }
  if (w.addEventListener) {
    w.addEventListener("resize", callMedia, false);
  } else if (w.attachEvent) {
    w.attachEvent("onresize", callMedia);
  }
})(this);
/*
selectivizr v1.0.2 - (c) Keith Clark, freely distributable under the terms 
of the MIT license.

selectivizr.com
*/
/* 
  
Notes about this source
-----------------------

 * The #DEBUG_START and #DEBUG_END comments are used to mark blocks of code
   that will be removed prior to building a final release version (using a
   pre-compression script)
  
  
References:
-----------
 
 * CSS Syntax          : http://www.w3.org/TR/2003/WD-css3-syntax-20030813/#style
 * Selectors           : http://www.w3.org/TR/css3-selectors/#selectors
 * IE Compatability    : http://msdn.microsoft.com/en-us/library/cc351024(VS.85).aspx
 * W3C Selector Tests  : http://www.w3.org/Style/CSS/Test/CSS3/Selectors/current/html/tests/
 
*/

(function(win) {

	// If browser isn't IE, then stop execution! This handles the script 
	// being loaded by non IE browsers because the developer didn't use 
	// conditional comments.
	if (/*@cc_on!@*/true) return;

	// =========================== Init Objects ============================

	var doc = document;
	var root = doc.documentElement;
	var xhr = getXHRObject();
	var ieVersion = /MSIE (\d+)/.exec(navigator.userAgent)[1];
	
	// If were not in standards mode, IE is too old / new or we can't create
	// an XMLHttpRequest object then we should get out now.
	if (doc.compatMode != 'CSS1Compat' || ieVersion<6 || ieVersion>8 || !xhr) {
		return;
	}
	
	
	// ========================= Common Objects ============================

	// Compatiable selector engines in order of CSS3 support. Note: '*' is
	// a placholder for the object key name. (basically, crude compression)
	var selectorEngines = {
		"NW"								: "*.Dom.select",
		"MooTools"							: "$$",
		"DOMAssistant"						: "*.$", 
		"Prototype"							: "$$",
		"YAHOO"								: "*.util.Selector.query",
		"Sizzle"							: "*", 
		"jQuery"							: "*",
		"dojo"								: "*.query"
	};

	var selectorMethod;
	var enabledWatchers 					= [];     // array of :enabled/:disabled elements to poll
	var ie6PatchID 							= 0;      // used to solve ie6's multiple class bug
	var patchIE6MultipleClasses				= true;   // if true adds class bloat to ie6
	var namespace 							= "slvzr";
	
	// Stylesheet parsing regexp's
	var RE_COMMENT							= /(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g;
	var RE_IMPORT							= /@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g;
	var RE_ASSET_URL 						= /\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g;
	var RE_PSEUDO_STRUCTURAL				= /^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/;
	var RE_PSEUDO_ELEMENTS					= /:(:first-(?:line|letter))/g;
	var RE_SELECTOR_GROUP					= /(^|})\s*([^\{]*?[\[:][^{]+)/g;
	var RE_SELECTOR_PARSE					= /([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g; 
	var RE_LIBRARY_INCOMPATIBLE_PSEUDOS		= /(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g;
	var RE_PATCH_CLASS_NAME_REPLACE			= /[^\w-]/g;
	
	// HTML UI element regexp's
	var RE_INPUT_ELEMENTS					= /^(INPUT|SELECT|TEXTAREA|BUTTON)$/;
	var RE_INPUT_CHECKABLE_TYPES			= /^(checkbox|radio)$/;

	// Broken attribute selector implementations (IE7/8 native [^=""], [$=""] and [*=""])
	var BROKEN_ATTR_IMPLEMENTATIONS			= ieVersion>6 ? /[\$\^*]=(['"])\1/ : null;

	// Whitespace normalization regexp's
	var RE_TIDY_TRAILING_WHITESPACE			= /([(\[+~])\s+/g;
	var RE_TIDY_LEADING_WHITESPACE			= /\s+([)\]+~])/g;
	var RE_TIDY_CONSECUTIVE_WHITESPACE		= /\s+/g;
	var RE_TIDY_TRIM_WHITESPACE				= /^\s*((?:[\S\s]*\S)?)\s*$/;
	
	// String constants
	var EMPTY_STRING						= "";
	var SPACE_STRING						= " ";
	var PLACEHOLDER_STRING					= "$1";

	// =========================== Patching ================================

	// --[ patchStyleSheet() ]----------------------------------------------
	// Scans the passed cssText for selectors that require emulation and
	// creates one or more patches for each matched selector.
	function patchStyleSheet( cssText ) {
		return cssText.replace(RE_PSEUDO_ELEMENTS, PLACEHOLDER_STRING).
			replace(RE_SELECTOR_GROUP, function(m, prefix, selectorText) {	
    			var selectorGroups = selectorText.split(",");
    			for (var c = 0, cs = selectorGroups.length; c < cs; c++) {
    				var selector = normalizeSelectorWhitespace(selectorGroups[c]) + SPACE_STRING;
    				var patches = [];
    				selectorGroups[c] = selector.replace(RE_SELECTOR_PARSE, 
    					function(match, combinator, pseudo, attribute, index) {
    						if (combinator) {
    							if (patches.length>0) {
    								applyPatches( selector.substring(0, index), patches );
    								patches = [];
    							}
    							return combinator;
    						}		
    						else {
    							var patch = (pseudo) ? patchPseudoClass( pseudo ) : patchAttribute( attribute );
    							if (patch) {
    								patches.push(patch);
    								return "." + patch.className;
    							}
    							return match;
    						}
    					}
    				);
    			}
    			return prefix + selectorGroups.join(",");
    		});
	};

	// --[ patchAttribute() ]-----------------------------------------------
	// returns a patch for an attribute selector.
	function patchAttribute( attr ) {
		return (!BROKEN_ATTR_IMPLEMENTATIONS || BROKEN_ATTR_IMPLEMENTATIONS.test(attr)) ? 
			{ className: createClassName(attr), applyClass: true } : null;
	};

	// --[ patchPseudoClass() ]---------------------------------------------
	// returns a patch for a pseudo-class
	function patchPseudoClass( pseudo ) {

		var applyClass = true;
		var className = createClassName(pseudo.slice(1));
		var isNegated = pseudo.substring(0, 5) == ":not(";
		var activateEventName;
		var deactivateEventName;

		// if negated, remove :not() 
		if (isNegated) {
			pseudo = pseudo.slice(5, -1);
		}
		
		// bracket contents are irrelevant - remove them
		var bracketIndex = pseudo.indexOf("(")
		if (bracketIndex > -1) {
			pseudo = pseudo.substring(0, bracketIndex);
		}		
		
		// check we're still dealing with a pseudo-class
		if (pseudo.charAt(0) == ":") {
			switch (pseudo.slice(1)) {

				case "root":
					applyClass = function(e) {
						return isNegated ? e != root : e == root;
					}
					break;

				case "target":
					// :target is only supported in IE8
					if (ieVersion == 8) {
						applyClass = function(e) {
							var handler = function() { 
								var hash = location.hash;
								var hashID = hash.slice(1);
								return isNegated ? (hash == EMPTY_STRING || e.id != hashID) : (hash != EMPTY_STRING && e.id == hashID);
							};
							addEvent( win, "hashchange", function() {
								toggleElementClass(e, className, handler());
							})
							return handler();
						}
						break;
					}
					return false;
				
				case "checked":
					applyClass = function(e) { 
						if (RE_INPUT_CHECKABLE_TYPES.test(e.type)) {
							addEvent( e, "propertychange", function() {
								if (event.propertyName == "checked") {
									toggleElementClass( e, className, e.checked !== isNegated );
								} 							
							})
						}
						return e.checked !== isNegated;
					}
					break;
					
				case "disabled":
					isNegated = !isNegated;

				case "enabled":
					applyClass = function(e) { 
						if (RE_INPUT_ELEMENTS.test(e.tagName)) {
							addEvent( e, "propertychange", function() {
								if (event.propertyName == "$disabled") {
									toggleElementClass( e, className, e.$disabled === isNegated );
								} 
							});
							enabledWatchers.push(e);
							e.$disabled = e.disabled;
							return e.disabled === isNegated;
						}
						return pseudo == ":enabled" ? isNegated : !isNegated;
					}
					break;
					
				case "focus":
					activateEventName = "focus";
					deactivateEventName = "blur";
								
				case "hover":
					if (!activateEventName) {
						activateEventName = "mouseenter";
						deactivateEventName = "mouseleave";
					}
					applyClass = function(e) {
						addEvent( e, isNegated ? deactivateEventName : activateEventName, function() {
							toggleElementClass( e, className, true );
						})
						addEvent( e, isNegated ? activateEventName : deactivateEventName, function() {
							toggleElementClass( e, className, false );
						})
						return isNegated;
					}
					break;
					
				// everything else
				default:
					// If we don't support this pseudo-class don't create 
					// a patch for it
					if (!RE_PSEUDO_STRUCTURAL.test(pseudo)) {
						return false;
					}
					break;
			}
		}
		return { className: className, applyClass: applyClass };
	};

	// --[ applyPatches() ]-------------------------------------------------
	// uses the passed selector text to find DOM nodes and patch them	
	function applyPatches(selectorText, patches) {
		var elms;
		
		// Although some selector libraries can find :checked :enabled etc. 
		// we need to find all elements that could have that state because 
		// it can be changed by the user.
		var domSelectorText = selectorText.replace(RE_LIBRARY_INCOMPATIBLE_PSEUDOS, EMPTY_STRING);
		
		// If the dom selector equates to an empty string or ends with 
		// whitespace then we need to append a universal selector (*) to it.
		if (domSelectorText == EMPTY_STRING || domSelectorText.charAt(domSelectorText.length - 1) == SPACE_STRING) {
			domSelectorText += "*";
		}
		
		// Ensure we catch errors from the selector library
		try {
			elms = selectorMethod( domSelectorText );
		} catch (ex) {
			// #DEBUG_START
			log( "Selector '" + selectorText + "' threw exception '" + ex + "'" );
			// #DEBUG_END
		}


		if (elms) {
			for (var d = 0, dl = elms.length; d < dl; d++) {	
				var elm = elms[d];
				var cssClasses = elm.className;
				for (var f = 0, fl = patches.length; f < fl; f++) {
					var patch = patches[f];
					
					if (!hasPatch(elm, patch)) {
						if (patch.applyClass && (patch.applyClass === true || patch.applyClass(elm) === true)) {
							cssClasses = toggleClass(cssClasses, patch.className, true );
						}
					}
				}
				elm.className = cssClasses;
			}
		}
	};

	// --[ hasPatch() ]-----------------------------------------------------
	// checks for the exsistence of a patch on an element
	function hasPatch( elm, patch ) {
		return new RegExp("(^|\\s)" + patch.className + "(\\s|$)").test(elm.className);
	};
	
	
	// =========================== Utility =================================
	
	function createClassName( className ) {
		return namespace + "-" + ((ieVersion == 6 && patchIE6MultipleClasses) ?
			ie6PatchID++
		:
			className.replace(RE_PATCH_CLASS_NAME_REPLACE, function(a) { return a.charCodeAt(0) }));
	};

	// --[ log() ]----------------------------------------------------------
	// #DEBUG_START
	function log( message ) {
		if (win.console) {
			win.console.log(message);
		}
	};
	// #DEBUG_END

	// --[ trim() ]---------------------------------------------------------
	// removes leading, trailing whitespace from a string
	function trim( text ) {
		return text.replace(RE_TIDY_TRIM_WHITESPACE, PLACEHOLDER_STRING);
	};

	// --[ normalizeWhitespace() ]------------------------------------------
	// removes leading, trailing and consecutive whitespace from a string
	function normalizeWhitespace( text ) {
		return trim(text).replace(RE_TIDY_CONSECUTIVE_WHITESPACE, SPACE_STRING);
	};

	// --[ normalizeSelectorWhitespace() ]----------------------------------
	// tidies whitespace around selector brackets and combinators
	function normalizeSelectorWhitespace( selectorText ) {
		return normalizeWhitespace(selectorText.
			replace(RE_TIDY_TRAILING_WHITESPACE, PLACEHOLDER_STRING).
			replace(RE_TIDY_LEADING_WHITESPACE, PLACEHOLDER_STRING)
		);
	};

	// --[ toggleElementClass() ]-------------------------------------------
	// toggles a single className on an element
	function toggleElementClass( elm, className, on ) {
		var oldClassName = elm.className;
		var newClassName = toggleClass(oldClassName, className, on);
		if (newClassName != oldClassName) {
			elm.className = newClassName;
			elm.parentNode.className += EMPTY_STRING;
		}
	};

	// --[ toggleClass() ]--------------------------------------------------
	// adds / removes a className from a string of classNames. Used to 
	// manage multiple class changes without forcing a DOM redraw
	function toggleClass( classList, className, on ) {
		var re = RegExp("(^|\\s)" + className + "(\\s|$)");
		var classExists = re.test(classList);
		if (on) {
			return classExists ? classList : classList + SPACE_STRING + className;
		} else {
			return classExists ? trim(classList.replace(re, PLACEHOLDER_STRING)) : classList;
		}
	};
	
	// --[ addEvent() ]-----------------------------------------------------
	function addEvent(elm, eventName, eventHandler) {
		elm.attachEvent("on" + eventName, eventHandler);
	};

	// --[ getXHRObject() ]-------------------------------------------------
	function getXHRObject()
	{
		if (win.XMLHttpRequest) {
			return new XMLHttpRequest;
		}
		try	{ 
			return new ActiveXObject('Microsoft.XMLHTTP');
		} catch(e) { 
			return null;
		}
	};

	// --[ loadStyleSheet() ]-----------------------------------------------
	function loadStyleSheet( url ) {
		xhr.open("GET", url, false);
		xhr.send();
		return (xhr.status==200) ? xhr.responseText : EMPTY_STRING;	
	};
	
	// --[ resolveUrl() ]---------------------------------------------------
	// Converts a URL fragment to a fully qualified URL using the specified
	// context URL. Returns null if same-origin policy is broken
	function resolveUrl( url, contextUrl ) {
	
		function getProtocolAndHost( url ) {
			return url.substring(0, url.indexOf("/", 8));
		};
		
		// absolute path
		if (/^https?:\/\//i.test(url)) {
			return getProtocolAndHost(contextUrl) == getProtocolAndHost(url) ? url : null;
		}
		
		// root-relative path
		if (url.charAt(0)=="/")	{
			return getProtocolAndHost(contextUrl) + url;
		}

		// relative path
		var contextUrlPath = contextUrl.split(/[?#]/)[0]; // ignore query string in the contextUrl	
		if (url.charAt(0) != "?" && contextUrlPath.charAt(contextUrlPath.length - 1) != "/") {
			contextUrlPath = contextUrlPath.substring(0, contextUrlPath.lastIndexOf("/") + 1);
		}
		
		return contextUrlPath + url;
	};
	
	// --[ parseStyleSheet() ]----------------------------------------------
	// Downloads the stylesheet specified by the URL, removes it's comments
	// and recursivly replaces @import rules with their contents, ultimately
	// returning the full cssText.
	function parseStyleSheet( url ) {
		if (url) {
			return loadStyleSheet(url).replace(RE_COMMENT, EMPTY_STRING).
			replace(RE_IMPORT, function( match, quoteChar, importUrl, quoteChar2, importUrl2 ) { 
				return parseStyleSheet(resolveUrl(importUrl || importUrl2, url));
			}).
			replace(RE_ASSET_URL, function( match, quoteChar, assetUrl ) { 
				quoteChar = quoteChar || EMPTY_STRING;
				return " url(" + quoteChar + resolveUrl(assetUrl, url) + quoteChar + ") "; 
			});
		}
		return EMPTY_STRING;
	};
	
	// --[ init() ]---------------------------------------------------------
	function init() {
		// honour the <base> tag
		var url, stylesheet;
		var baseTags = doc.getElementsByTagName("BASE");
		var baseUrl = (baseTags.length > 0) ? baseTags[0].href : doc.location.href;
		
		/* Note: This code prevents IE from freezing / crashing when using 
		@font-face .eot files but it modifies the <head> tag and could
		trigger the IE stylesheet limit. It will also cause FOUC issues.
		If you choose to use it, make sure you comment out the for loop 
		directly below this comment.

		var head = doc.getElementsByTagName("head")[0];
		for (var c=doc.styleSheets.length-1; c>=0; c--) {
			stylesheet = doc.styleSheets[c]
			head.appendChild(doc.createElement("style"))
			var patchedStylesheet = doc.styleSheets[doc.styleSheets.length-1];
			
			if (stylesheet.href != EMPTY_STRING) {
				url = resolveUrl(stylesheet.href, baseUrl)
				if (url) {
					patchedStylesheet.cssText = patchStyleSheet( parseStyleSheet( url ) )
					stylesheet.disabled = true
					setTimeout( function () {
						stylesheet.owningElement.parentNode.removeChild(stylesheet.owningElement)
					})
				}
			}
		}
		*/
		
		for (var c = 0; c < doc.styleSheets.length; c++) {
			stylesheet = doc.styleSheets[c]
			if (stylesheet.href != EMPTY_STRING) {
				url = resolveUrl(stylesheet.href, baseUrl);
				if (url) {
					stylesheet.cssText = patchStyleSheet( parseStyleSheet( url ) );
				}
			}
		}
		
		// :enabled & :disabled polling script (since we can't hook 
		// onpropertychange event when an element is disabled) 
		if (enabledWatchers.length > 0) {
			setInterval( function() {
				for (var c = 0, cl = enabledWatchers.length; c < cl; c++) {
					var e = enabledWatchers[c];
					if (e.disabled !== e.$disabled) {
						if (e.disabled) {
							e.disabled = false;
							e.$disabled = true;
							e.disabled = true;
						}
						else {
							e.$disabled = e.disabled;
						}
					}
				}
			},250)
		}
	};
	
	// Bind selectivizr to the ContentLoaded event. 
	ContentLoaded(win, function() {
		// Determine the "best fit" selector engine
		for (var engine in selectorEngines) {
			var members, member, context = win;
			if (win[engine]) {
				members = selectorEngines[engine].replace("*", engine).split(".");
				while ((member = members.shift()) && (context = context[member])) {}
				if (typeof context == "function") {
					selectorMethod = context;
					init();
					return;
				}
			}
		}
	});
	
	
	/*!
	 * ContentLoaded.js by Diego Perini, modified for IE<9 only (to save space)
	 *
	 * Author: Diego Perini (diego.perini at gmail.com)
	 * Summary: cross-browser wrapper for DOMContentLoaded
	 * Updated: 20101020
	 * License: MIT
	 * Version: 1.2
	 *
	 * URL:
	 * http://javascript.nwbox.com/ContentLoaded/
	 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
	 *
	 */

	// @w window reference
	// @f function reference
	function ContentLoaded(win, fn) {

		var done = false, top = true,
		init = function(e) {
			if (e.type == "readystatechange" && doc.readyState != "complete") return;
			(e.type == "load" ? win : doc).detachEvent("on" + e.type, init, false);
			if (!done && (done = true)) fn.call(win, e.type || e);
		},
		poll = function() {
			try { root.doScroll("left"); } catch(e) { setTimeout(poll, 50); return; }
			init('poll');
		};

		if (doc.readyState == "complete") fn.call(win, EMPTY_STRING);
		else {
			if (doc.createEventObject && root.doScroll) {
				try { top = !win.frameElement; } catch(e) { }
				if (top) poll();
			}
			addEvent(doc,"readystatechange", init);
			addEvent(win,"load", init);
		}
	};
})(this);
/*! lightgallery - v1.6.11 - 2018-05-22
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2018 Sachin N; Licensed GPLv3 */
/*! lightgallery - v1.6.11 - 2018-05-22
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2018 Sachin N; Licensed GPLv3 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(root["jQuery"]);
  }
}(this, function ($) {

(function() {
    'use strict';

    var defaults = {

        mode: 'lg-slide',

        // Ex : 'ease'
        cssEasing: 'ease',

        //'for jquery animation'
        easing: 'linear',
        speed: 600,
        height: '100%',
        width: '100%',
        addClass: '',
        startClass: 'lg-start-zoom',
        backdropDuration: 150,
        hideBarsDelay: 6000,

        useLeft: false,

        closable: true,
        loop: true,
        escKey: true,
        keyPress: true,
        controls: true,
        slideEndAnimatoin: true,
        hideControlOnEnd: false,
        mousewheel: true,

        getCaptionFromTitleOrAlt: true,

        // .lg-item || '.lg-sub-html'
        appendSubHtmlTo: '.lg-sub-html',

        subHtmlSelectorRelative: false,

        /**
         * @desc number of preload slides
         * will exicute only after the current slide is fully loaded.
         *
         * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
         * slide will be loaded in the background after the 4th slide is fully loaded..
         * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
         *
         */
        preload: 1,
        showAfterLoad: true,
        selector: '',
        selectWithin: '',
        nextHtml: '',
        prevHtml: '',

        // 0, 1
        index: false,

        iframeMaxWidth: '100%',

        download: true,
        counter: true,
        appendCounterTo: '.lg-toolbar',

        swipeThreshold: 50,
        enableSwipe: true,
        enableDrag: true,

        dynamic: false,
        dynamicEl: [],
        galleryId: 1
    };

    function Plugin(element, options) {

        // Current lightGallery element
        this.el = element;

        // Current jquery element
        this.$el = $(element);

        // lightGallery settings
        this.s = $.extend({}, defaults, options);

        // When using dynamic mode, ensure dynamicEl is an array
        if (this.s.dynamic && this.s.dynamicEl !== 'undefined' && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) {
            throw ('When using dynamic mode, you must also define dynamicEl as an Array.');
        }

        // lightGallery modules
        this.modules = {};

        // false when lightgallery complete first slide;
        this.lGalleryOn = false;

        this.lgBusy = false;

        // Timeout function for hiding controls;
        this.hideBartimeout = false;

        // To determine browser supports for touch events;
        this.isTouch = ('ontouchstart' in document.documentElement);

        // Disable hideControlOnEnd if sildeEndAnimation is true
        if (this.s.slideEndAnimatoin) {
            this.s.hideControlOnEnd = false;
        }

        // Gallery items
        if (this.s.dynamic) {
            this.$items = this.s.dynamicEl;
        } else {
            if (this.s.selector === 'this') {
                this.$items = this.$el;
            } else if (this.s.selector !== '') {
                if (this.s.selectWithin) {
                    this.$items = $(this.s.selectWithin).find(this.s.selector);
                } else {
                    this.$items = this.$el.find($(this.s.selector));
                }
            } else {
                this.$items = this.$el.children();
            }
        }

        // .lg-item
        this.$slide = '';

        // .lg-outer
        this.$outer = '';

        this.init();

        return this;
    }

    Plugin.prototype.init = function() {

        var _this = this;

        // s.preload should not be more than $item.length
        if (_this.s.preload > _this.$items.length) {
            _this.s.preload = _this.$items.length;
        }

        // if dynamic option is enabled execute immediately
        var _hash = window.location.hash;
        if (_hash.indexOf('lg=' + this.s.galleryId) > 0) {

            _this.index = parseInt(_hash.split('&slide=')[1], 10);

            $('body').addClass('lg-from-hash');
            if (!$('body').hasClass('lg-on')) {
                setTimeout(function() {
                    _this.build(_this.index);
                });

                $('body').addClass('lg-on');
            }
        }

        if (_this.s.dynamic) {

            _this.$el.trigger('onBeforeOpen.lg');

            _this.index = _this.s.index || 0;

            // prevent accidental double execution
            if (!$('body').hasClass('lg-on')) {
                setTimeout(function() {
                    _this.build(_this.index);
                    $('body').addClass('lg-on');
                });
            }
        } else {

            // Using different namespace for click because click event should not unbind if selector is same object('this')
            _this.$items.on('click.lgcustom', function(event) {

                // For IE8
                try {
                    event.preventDefault();
                    event.preventDefault();
                } catch (er) {
                    event.returnValue = false;
                }

                _this.$el.trigger('onBeforeOpen.lg');

                _this.index = _this.s.index || _this.$items.index(this);

                // prevent accidental double execution
                if (!$('body').hasClass('lg-on')) {
                    _this.build(_this.index);
                    $('body').addClass('lg-on');
                }
            });
        }

    };

    Plugin.prototype.build = function(index) {

        var _this = this;

        _this.structure();

        // module constructor
        $.each($.fn.lightGallery.modules, function(key) {
            _this.modules[key] = new $.fn.lightGallery.modules[key](_this.el);
        });

        // initiate slide function
        _this.slide(index, false, false, false);

        if (_this.s.keyPress) {
            _this.keyPress();
        }

        if (_this.$items.length > 1) {

            _this.arrow();

            setTimeout(function() {
                _this.enableDrag();
                _this.enableSwipe();
            }, 50);

            if (_this.s.mousewheel) {
                _this.mousewheel();
            }
        } else {
            _this.$slide.on('click.lg', function() {
                _this.$el.trigger('onSlideClick.lg');
            });
        }

        _this.counter();

        _this.closeGallery();

        _this.$el.trigger('onAfterOpen.lg');

        // Hide controllers if mouse doesn't move for some period
        _this.$outer.on('mousemove.lg click.lg touchstart.lg', function() {

            _this.$outer.removeClass('lg-hide-items');

            clearTimeout(_this.hideBartimeout);

            // Timeout will be cleared on each slide movement also
            _this.hideBartimeout = setTimeout(function() {
                _this.$outer.addClass('lg-hide-items');
            }, _this.s.hideBarsDelay);

        });

        _this.$outer.trigger('mousemove.lg');

    };

    Plugin.prototype.structure = function() {
        var list = '';
        var controls = '';
        var i = 0;
        var subHtmlCont = '';
        var template;
        var _this = this;

        $('body').append('<div class="lg-backdrop"></div>');
        $('.lg-backdrop').css('transition-duration', this.s.backdropDuration + 'ms');

        // Create gallery items
        for (i = 0; i < this.$items.length; i++) {
            list += '<div class="lg-item"></div>';
        }

        // Create controlls
        if (this.s.controls && this.$items.length > 1) {
            controls = '<div class="lg-actions">' +
                '<button class="lg-prev lg-icon">' + this.s.prevHtml + '</button>' +
                '<button class="lg-next lg-icon">' + this.s.nextHtml + '</button>' +
                '</div>';
        }

        if (this.s.appendSubHtmlTo === '.lg-sub-html') {
            subHtmlCont = '<div class="lg-sub-html"></div>';
        }

        template = '<div class="lg-outer ' + this.s.addClass + ' ' + this.s.startClass + '">' +
            '<div class="lg" style="width:' + this.s.width + '; height:' + this.s.height + '">' +
            '<div class="lg-inner">' + list + '</div>' +
            '<div class="lg-toolbar lg-group">' +
            '<span class="lg-close lg-icon"></span>' +
            '</div>' +
            controls +
            subHtmlCont +
            '</div>' +
            '</div>';

        $('body').append(template);
        this.$outer = $('.lg-outer');
        this.$slide = this.$outer.find('.lg-item');

        if (this.s.useLeft) {
            this.$outer.addClass('lg-use-left');

            // Set mode lg-slide if use left is true;
            this.s.mode = 'lg-slide';
        } else {
            this.$outer.addClass('lg-use-css3');
        }

        // For fixed height gallery
        _this.setTop();
        $(window).on('resize.lg orientationchange.lg', function() {
            setTimeout(function() {
                _this.setTop();
            }, 100);
        });

        // add class lg-current to remove initial transition
        this.$slide.eq(this.index).addClass('lg-current');

        // add Class for css support and transition mode
        if (this.doCss()) {
            this.$outer.addClass('lg-css3');
        } else {
            this.$outer.addClass('lg-css');

            // Set speed 0 because no animation will happen if browser doesn't support css3
            this.s.speed = 0;
        }

        this.$outer.addClass(this.s.mode);

        if (this.s.enableDrag && this.$items.length > 1) {
            this.$outer.addClass('lg-grab');
        }

        if (this.s.showAfterLoad) {
            this.$outer.addClass('lg-show-after-load');
        }

        if (this.doCss()) {
            var $inner = this.$outer.find('.lg-inner');
            $inner.css('transition-timing-function', this.s.cssEasing);
            $inner.css('transition-duration', this.s.speed + 'ms');
        }

        setTimeout(function() {
            $('.lg-backdrop').addClass('in');
        });

        setTimeout(function() {
            _this.$outer.addClass('lg-visible');
        }, this.s.backdropDuration);

        if (this.s.download) {
            this.$outer.find('.lg-toolbar').append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>');
        }

        // Store the current scroll top value to scroll back after closing the gallery..
        this.prevScrollTop = $(window).scrollTop();

    };

    // For fixed height gallery
    Plugin.prototype.setTop = function() {
        if (this.s.height !== '100%') {
            var wH = $(window).height();
            var top = (wH - parseInt(this.s.height, 10)) / 2;
            var $lGallery = this.$outer.find('.lg');
            if (wH >= parseInt(this.s.height, 10)) {
                $lGallery.css('top', top + 'px');
            } else {
                $lGallery.css('top', '0px');
            }
        }
    };

    // Find css3 support
    Plugin.prototype.doCss = function() {
        // check for css animation support
        var support = function() {
            var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
            var root = document.documentElement;
            var i = 0;
            for (i = 0; i < transition.length; i++) {
                if (transition[i] in root.style) {
                    return true;
                }
            }
        };

        if (support()) {
            return true;
        }

        return false;
    };

    /**
     *  @desc Check the given src is video
     *  @param {String} src
     *  @return {Object} video type
     *  Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
     */
    Plugin.prototype.isVideo = function(src, index) {

        var html;
        if (this.s.dynamic) {
            html = this.s.dynamicEl[index].html;
        } else {
            html = this.$items.eq(index).attr('data-html');
        }

        if (!src) {
            if(html) {
                return {
                    html5: true
                };
            } else {
                console.error('lightGallery :- data-src is not pvovided on slide item ' + (index + 1) + '. Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html');
                return false;
            }
        }

        var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
        var vimeo = src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
        var dailymotion = src.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
        var vk = src.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);

        if (youtube) {
            return {
                youtube: youtube
            };
        } else if (vimeo) {
            return {
                vimeo: vimeo
            };
        } else if (dailymotion) {
            return {
                dailymotion: dailymotion
            };
        } else if (vk) {
            return {
                vk: vk
            };
        }
    };

    /**
     *  @desc Create image counter
     *  Ex: 1/10
     */
    Plugin.prototype.counter = function() {
        if (this.s.counter) {
            $(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + '</span></div>');
        }
    };

    /**
     *  @desc add sub-html into the slide
     *  @param {Number} index - index of the slide
     */
    Plugin.prototype.addHtml = function(index) {
        var subHtml = null;
        var subHtmlUrl;
        var $currentEle;
        if (this.s.dynamic) {
            if (this.s.dynamicEl[index].subHtmlUrl) {
                subHtmlUrl = this.s.dynamicEl[index].subHtmlUrl;
            } else {
                subHtml = this.s.dynamicEl[index].subHtml;
            }
        } else {
            $currentEle = this.$items.eq(index);
            if ($currentEle.attr('data-sub-html-url')) {
                subHtmlUrl = $currentEle.attr('data-sub-html-url');
            } else {
                subHtml = $currentEle.attr('data-sub-html');
                if (this.s.getCaptionFromTitleOrAlt && !subHtml) {
                    subHtml = $currentEle.attr('title') || $currentEle.find('img').first().attr('alt');
                }
            }
        }

        if (!subHtmlUrl) {
            if (typeof subHtml !== 'undefined' && subHtml !== null) {

                // get first letter of subhtml
                // if first letter starts with . or # get the html form the jQuery object
                var fL = subHtml.substring(0, 1);
                if (fL === '.' || fL === '#') {
                    if (this.s.subHtmlSelectorRelative && !this.s.dynamic) {
                        subHtml = $currentEle.find(subHtml).html();
                    } else {
                        subHtml = $(subHtml).html();
                    }
                }
            } else {
                subHtml = '';
            }
        }

        if (this.s.appendSubHtmlTo === '.lg-sub-html') {

            if (subHtmlUrl) {
                this.$outer.find(this.s.appendSubHtmlTo).load(subHtmlUrl);
            } else {
                this.$outer.find(this.s.appendSubHtmlTo).html(subHtml);
            }

        } else {

            if (subHtmlUrl) {
                this.$slide.eq(index).load(subHtmlUrl);
            } else {
                this.$slide.eq(index).append(subHtml);
            }
        }

        // Add lg-empty-html class if title doesn't exist
        if (typeof subHtml !== 'undefined' && subHtml !== null) {
            if (subHtml === '') {
                this.$outer.find(this.s.appendSubHtmlTo).addClass('lg-empty-html');
            } else {
                this.$outer.find(this.s.appendSubHtmlTo).removeClass('lg-empty-html');
            }
        }

        this.$el.trigger('onAfterAppendSubHtml.lg', [index]);
    };

    /**
     *  @desc Preload slides
     *  @param {Number} index - index of the slide
     */
    Plugin.prototype.preload = function(index) {
        var i = 1;
        var j = 1;
        for (i = 1; i <= this.s.preload; i++) {
            if (i >= this.$items.length - index) {
                break;
            }

            this.loadContent(index + i, false, 0);
        }

        for (j = 1; j <= this.s.preload; j++) {
            if (index - j < 0) {
                break;
            }

            this.loadContent(index - j, false, 0);
        }
    };

    /**
     *  @desc Load slide content into slide.
     *  @param {Number} index - index of the slide.
     *  @param {Boolean} rec - if true call loadcontent() function again.
     *  @param {Boolean} delay - delay for adding complete class. it is 0 except first time.
     */
    Plugin.prototype.loadContent = function(index, rec, delay) {

        var _this = this;
        var _hasPoster = false;
        var _$img;
        var _src;
        var _poster;
        var _srcset;
        var _sizes;
        var _html;
        var getResponsiveSrc = function(srcItms) {
            var rsWidth = [];
            var rsSrc = [];
            for (var i = 0; i < srcItms.length; i++) {
                var __src = srcItms[i].split(' ');

                // Manage empty space
                if (__src[0] === '') {
                    __src.splice(0, 1);
                }

                rsSrc.push(__src[0]);
                rsWidth.push(__src[1]);
            }

            var wWidth = $(window).width();
            for (var j = 0; j < rsWidth.length; j++) {
                if (parseInt(rsWidth[j], 10) > wWidth) {
                    _src = rsSrc[j];
                    break;
                }
            }
        };

        if (_this.s.dynamic) {

            if (_this.s.dynamicEl[index].poster) {
                _hasPoster = true;
                _poster = _this.s.dynamicEl[index].poster;
            }

            _html = _this.s.dynamicEl[index].html;
            _src = _this.s.dynamicEl[index].src;

            if (_this.s.dynamicEl[index].responsive) {
                var srcDyItms = _this.s.dynamicEl[index].responsive.split(',');
                getResponsiveSrc(srcDyItms);
            }

            _srcset = _this.s.dynamicEl[index].srcset;
            _sizes = _this.s.dynamicEl[index].sizes;

        } else {

            if (_this.$items.eq(index).attr('data-poster')) {
                _hasPoster = true;
                _poster = _this.$items.eq(index).attr('data-poster');
            }

            _html = _this.$items.eq(index).attr('data-html');
            _src = _this.$items.eq(index).attr('href') || _this.$items.eq(index).attr('data-src');

            if (_this.$items.eq(index).attr('data-responsive')) {
                var srcItms = _this.$items.eq(index).attr('data-responsive').split(',');
                getResponsiveSrc(srcItms);
            }

            _srcset = _this.$items.eq(index).attr('data-srcset');
            _sizes = _this.$items.eq(index).attr('data-sizes');

        }

        //if (_src || _srcset || _sizes || _poster) {

        var iframe = false;
        if (_this.s.dynamic) {
            if (_this.s.dynamicEl[index].iframe) {
                iframe = true;
            }
        } else {
            if (_this.$items.eq(index).attr('data-iframe') === 'true') {
                iframe = true;
            }
        }

        var _isVideo = _this.isVideo(_src, index);
        if (!_this.$slide.eq(index).hasClass('lg-loaded')) {
            if (iframe) {
                _this.$slide.eq(index).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + _this.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + _src + '"  allowfullscreen="true"></iframe></div></div>');
            } else if (_hasPoster) {
                var videoClass = '';
                if (_isVideo && _isVideo.youtube) {
                    videoClass = 'lg-has-youtube';
                } else if (_isVideo && _isVideo.vimeo) {
                    videoClass = 'lg-has-vimeo';
                } else {
                    videoClass = 'lg-has-html5';
                }

                _this.$slide.eq(index).prepend('<div class="lg-video-cont ' + videoClass + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + _poster + '" /></div></div>');

            } else if (_isVideo) {
                _this.$slide.eq(index).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>');
                _this.$el.trigger('hasVideo.lg', [index, _src, _html]);
            } else {
                _this.$slide.eq(index).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + _src + '" /></div>');
            }

            _this.$el.trigger('onAferAppendSlide.lg', [index]);

            _$img = _this.$slide.eq(index).find('.lg-object');
            if (_sizes) {
                _$img.attr('sizes', _sizes);
            }

            if (_srcset) {
                _$img.attr('srcset', _srcset);
                try {
                    picturefill({
                        elements: [_$img[0]]
                    });
                } catch (e) {
                    console.warn('lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.');
                }
            }

            if (this.s.appendSubHtmlTo !== '.lg-sub-html') {
                _this.addHtml(index);
            }

            _this.$slide.eq(index).addClass('lg-loaded');
        }

        _this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function() {

            // For first time add some delay for displaying the start animation.
            var _speed = 0;

            // Do not change the delay value because it is required for zoom plugin.
            // If gallery opened from direct url (hash) speed value should be 0
            if (delay && !$('body').hasClass('lg-from-hash')) {
                _speed = delay;
            }

            setTimeout(function() {
                _this.$slide.eq(index).addClass('lg-complete');
                _this.$el.trigger('onSlideItemLoad.lg', [index, delay || 0]);
            }, _speed);

        });

        // @todo check load state for html5 videos
        if (_isVideo && _isVideo.html5 && !_hasPoster) {
            _this.$slide.eq(index).addClass('lg-complete');
        }

        if (rec === true) {
            if (!_this.$slide.eq(index).hasClass('lg-complete')) {
                _this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function() {
                    _this.preload(index);
                });
            } else {
                _this.preload(index);
            }
        }

        //}
    };

    /**
    *   @desc slide function for lightgallery
        ** Slide() gets call on start
        ** ** Set lg.on true once slide() function gets called.
        ** Call loadContent() on slide() function inside setTimeout
        ** ** On first slide we do not want any animation like slide of fade
        ** ** So on first slide( if lg.on if false that is first slide) loadContent() should start loading immediately
        ** ** Else loadContent() should wait for the transition to complete.
        ** ** So set timeout s.speed + 50
    <=> ** loadContent() will load slide content in to the particular slide
        ** ** It has recursion (rec) parameter. if rec === true loadContent() will call preload() function.
        ** ** preload will execute only when the previous slide is fully loaded (images iframe)
        ** ** avoid simultaneous image load
    <=> ** Preload() will check for s.preload value and call loadContent() again accoring to preload value
        ** loadContent()  <====> Preload();

    *   @param {Number} index - index of the slide
    *   @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
    *   @param {Boolean} fromThumb - true if slide function called via thumbnail click
    *   @param {String} direction - Direction of the slide(next/prev)
    */
    Plugin.prototype.slide = function(index, fromTouch, fromThumb, direction) {

        var _prevIndex = this.$outer.find('.lg-current').index();
        var _this = this;

        // Prevent if multiple call
        // Required for hsh plugin
        if (_this.lGalleryOn && (_prevIndex === index)) {
            return;
        }

        var _length = this.$slide.length;
        var _time = _this.lGalleryOn ? this.s.speed : 0;

        if (!_this.lgBusy) {

            if (this.s.download) {
                var _src;
                if (_this.s.dynamic) {
                    _src = _this.s.dynamicEl[index].downloadUrl !== false && (_this.s.dynamicEl[index].downloadUrl || _this.s.dynamicEl[index].src);
                } else {
                    _src = _this.$items.eq(index).attr('data-download-url') !== 'false' && (_this.$items.eq(index).attr('data-download-url') || _this.$items.eq(index).attr('href') || _this.$items.eq(index).attr('data-src'));

                }

                if (_src) {
                    $('#lg-download').attr('href', _src);
                    _this.$outer.removeClass('lg-hide-download');
                } else {
                    _this.$outer.addClass('lg-hide-download');
                }
            }

            this.$el.trigger('onBeforeSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);

            _this.lgBusy = true;

            clearTimeout(_this.hideBartimeout);

            // Add title if this.s.appendSubHtmlTo === lg-sub-html
            if (this.s.appendSubHtmlTo === '.lg-sub-html') {

                // wait for slide animation to complete
                setTimeout(function() {
                    _this.addHtml(index);
                }, _time);
            }

            this.arrowDisable(index);

            if (!direction) {
                if (index < _prevIndex) {
                    direction = 'prev';
                } else if (index > _prevIndex) {
                    direction = 'next';
                }
            }

            if (!fromTouch) {

                // remove all transitions
                _this.$outer.addClass('lg-no-trans');

                this.$slide.removeClass('lg-prev-slide lg-next-slide');

                if (direction === 'prev') {

                    //prevslide
                    this.$slide.eq(index).addClass('lg-prev-slide');
                    this.$slide.eq(_prevIndex).addClass('lg-next-slide');
                } else {

                    // next slide
                    this.$slide.eq(index).addClass('lg-next-slide');
                    this.$slide.eq(_prevIndex).addClass('lg-prev-slide');
                }

                // give 50 ms for browser to add/remove class
                setTimeout(function() {
                    _this.$slide.removeClass('lg-current');

                    //_this.$slide.eq(_prevIndex).removeClass('lg-current');
                    _this.$slide.eq(index).addClass('lg-current');

                    // reset all transitions
                    _this.$outer.removeClass('lg-no-trans');
                }, 50);
            } else {

                this.$slide.removeClass('lg-prev-slide lg-current lg-next-slide');
                var touchPrev;
                var touchNext;
                if (_length > 2) {
                    touchPrev = index - 1;
                    touchNext = index + 1;

                    if ((index === 0) && (_prevIndex === _length - 1)) {

                        // next slide
                        touchNext = 0;
                        touchPrev = _length - 1;
                    } else if ((index === _length - 1) && (_prevIndex === 0)) {

                        // prev slide
                        touchNext = 0;
                        touchPrev = _length - 1;
                    }

                } else {
                    touchPrev = 0;
                    touchNext = 1;
                }

                if (direction === 'prev') {
                    _this.$slide.eq(touchNext).addClass('lg-next-slide');
                } else {
                    _this.$slide.eq(touchPrev).addClass('lg-prev-slide');
                }

                _this.$slide.eq(index).addClass('lg-current');
            }

            if (_this.lGalleryOn) {
                setTimeout(function() {
                    _this.loadContent(index, true, 0);
                }, this.s.speed + 50);

                setTimeout(function() {
                    _this.lgBusy = false;
                    _this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
                }, this.s.speed);

            } else {
                _this.loadContent(index, true, _this.s.backdropDuration);

                _this.lgBusy = false;
                _this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
            }

            _this.lGalleryOn = true;

            if (this.s.counter) {
                $('#lg-counter-current').text(index + 1);
            }

        }
        _this.index = index;

    };

    /**
     *  @desc Go to next slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
    Plugin.prototype.goToNextSlide = function(fromTouch) {
        var _this = this;
        var _loop = _this.s.loop;
        if (fromTouch && _this.$slide.length < 3) {
            _loop = false;
        }

        if (!_this.lgBusy) {
            if ((_this.index + 1) < _this.$slide.length) {
                _this.index++;
                _this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
                _this.slide(_this.index, fromTouch, false, 'next');
            } else {
                if (_loop) {
                    _this.index = 0;
                    _this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
                    _this.slide(_this.index, fromTouch, false, 'next');
                } else if (_this.s.slideEndAnimatoin && !fromTouch) {
                    _this.$outer.addClass('lg-right-end');
                    setTimeout(function() {
                        _this.$outer.removeClass('lg-right-end');
                    }, 400);
                }
            }
        }
    };

    /**
     *  @desc Go to previous slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
    Plugin.prototype.goToPrevSlide = function(fromTouch) {
        var _this = this;
        var _loop = _this.s.loop;
        if (fromTouch && _this.$slide.length < 3) {
            _loop = false;
        }

        if (!_this.lgBusy) {
            if (_this.index > 0) {
                _this.index--;
                _this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
                _this.slide(_this.index, fromTouch, false, 'prev');
            } else {
                if (_loop) {
                    _this.index = _this.$items.length - 1;
                    _this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
                    _this.slide(_this.index, fromTouch, false, 'prev');
                } else if (_this.s.slideEndAnimatoin && !fromTouch) {
                    _this.$outer.addClass('lg-left-end');
                    setTimeout(function() {
                        _this.$outer.removeClass('lg-left-end');
                    }, 400);
                }
            }
        }
    };

    Plugin.prototype.keyPress = function() {
        var _this = this;
        if (this.$items.length > 1) {
            $(window).on('keyup.lg', function(e) {
                if (_this.$items.length > 1) {
                    if (e.keyCode === 37) {
                        e.preventDefault();
                        _this.goToPrevSlide();
                    }

                    if (e.keyCode === 39) {
                        e.preventDefault();
                        _this.goToNextSlide();
                    }
                }
            });
        }

        $(window).on('keydown.lg', function(e) {
            if (_this.s.escKey === true && e.keyCode === 27) {
                e.preventDefault();
                if (!_this.$outer.hasClass('lg-thumb-open')) {
                    _this.destroy();
                } else {
                    _this.$outer.removeClass('lg-thumb-open');
                }
            }
        });
    };

    Plugin.prototype.arrow = function() {
        var _this = this;
        this.$outer.find('.lg-prev').on('click.lg', function() {
            _this.goToPrevSlide();
        });

        this.$outer.find('.lg-next').on('click.lg', function() {
            _this.goToNextSlide();
        });
    };

    Plugin.prototype.arrowDisable = function(index) {

        // Disable arrows if s.hideControlOnEnd is true
        if (!this.s.loop && this.s.hideControlOnEnd) {
            if ((index + 1) < this.$slide.length) {
                this.$outer.find('.lg-next').removeAttr('disabled').removeClass('disabled');
            } else {
                this.$outer.find('.lg-next').attr('disabled', 'disabled').addClass('disabled');
            }

            if (index > 0) {
                this.$outer.find('.lg-prev').removeAttr('disabled').removeClass('disabled');
            } else {
                this.$outer.find('.lg-prev').attr('disabled', 'disabled').addClass('disabled');
            }
        }
    };

    Plugin.prototype.setTranslate = function($el, xValue, yValue) {
        // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
        if (this.s.useLeft) {
            $el.css('left', xValue);
        } else {
            $el.css({
                transform: 'translate3d(' + (xValue) + 'px, ' + yValue + 'px, 0px)'
            });
        }
    };

    Plugin.prototype.touchMove = function(startCoords, endCoords) {

        var distance = endCoords - startCoords;

        if (Math.abs(distance) > 15) {
            // reset opacity and transition duration
            this.$outer.addClass('lg-dragging');

            // move current slide
            this.setTranslate(this.$slide.eq(this.index), distance, 0);

            // move next and prev slide with current slide
            this.setTranslate($('.lg-prev-slide'), -this.$slide.eq(this.index).width() + distance, 0);
            this.setTranslate($('.lg-next-slide'), this.$slide.eq(this.index).width() + distance, 0);
        }
    };

    Plugin.prototype.touchEnd = function(distance) {
        var _this = this;

        // keep slide animation for any mode while dragg/swipe
        if (_this.s.mode !== 'lg-slide') {
            _this.$outer.addClass('lg-slide');
        }

        this.$slide.not('.lg-current, .lg-prev-slide, .lg-next-slide').css('opacity', '0');

        // set transition duration
        setTimeout(function() {
            _this.$outer.removeClass('lg-dragging');
            if ((distance < 0) && (Math.abs(distance) > _this.s.swipeThreshold)) {
                _this.goToNextSlide(true);
            } else if ((distance > 0) && (Math.abs(distance) > _this.s.swipeThreshold)) {
                _this.goToPrevSlide(true);
            } else if (Math.abs(distance) < 5) {

                // Trigger click if distance is less than 5 pix
                _this.$el.trigger('onSlideClick.lg');
            }

            _this.$slide.removeAttr('style');
        });

        // remove slide class once drag/swipe is completed if mode is not slide
        setTimeout(function() {
            if (!_this.$outer.hasClass('lg-dragging') && _this.s.mode !== 'lg-slide') {
                _this.$outer.removeClass('lg-slide');
            }
        }, _this.s.speed + 100);

    };

    Plugin.prototype.enableSwipe = function() {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;

        if (_this.s.enableSwipe && _this.doCss()) {

            _this.$slide.on('touchstart.lg', function(e) {
                if (!_this.$outer.hasClass('lg-zoomed') && !_this.lgBusy) {
                    e.preventDefault();
                    _this.manageSwipeClass();
                    startCoords = e.originalEvent.targetTouches[0].pageX;
                }
            });

            _this.$slide.on('touchmove.lg', function(e) {
                if (!_this.$outer.hasClass('lg-zoomed')) {
                    e.preventDefault();
                    endCoords = e.originalEvent.targetTouches[0].pageX;
                    _this.touchMove(startCoords, endCoords);
                    isMoved = true;
                }
            });

            _this.$slide.on('touchend.lg', function() {
                if (!_this.$outer.hasClass('lg-zoomed')) {
                    if (isMoved) {
                        isMoved = false;
                        _this.touchEnd(endCoords - startCoords);
                    } else {
                        _this.$el.trigger('onSlideClick.lg');
                    }
                }
            });
        }

    };

    Plugin.prototype.enableDrag = function() {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        if (_this.s.enableDrag && _this.doCss()) {
            _this.$slide.on('mousedown.lg', function(e) {
                if (!_this.$outer.hasClass('lg-zoomed') && !_this.lgBusy && !$(e.target).text().trim()) {
                    e.preventDefault();
                    _this.manageSwipeClass();
                    startCoords = e.pageX;
                    isDraging = true;

                    // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                    _this.$outer.scrollLeft += 1;
                    _this.$outer.scrollLeft -= 1;

                    // *

                    _this.$outer.removeClass('lg-grab').addClass('lg-grabbing');

                    _this.$el.trigger('onDragstart.lg');
                }
            });

            $(window).on('mousemove.lg', function(e) {
                if (isDraging) {
                    isMoved = true;
                    endCoords = e.pageX;
                    _this.touchMove(startCoords, endCoords);
                    _this.$el.trigger('onDragmove.lg');
                }
            });

            $(window).on('mouseup.lg', function(e) {
                if (isMoved) {
                    isMoved = false;
                    _this.touchEnd(endCoords - startCoords);
                    _this.$el.trigger('onDragend.lg');
                } else if ($(e.target).hasClass('lg-object') || $(e.target).hasClass('lg-video-play')) {
                    _this.$el.trigger('onSlideClick.lg');
                }

                // Prevent execution on click
                if (isDraging) {
                    isDraging = false;
                    _this.$outer.removeClass('lg-grabbing').addClass('lg-grab');
                }
            });

        }
    };

    Plugin.prototype.manageSwipeClass = function() {
        var _touchNext = this.index + 1;
        var _touchPrev = this.index - 1;
        if (this.s.loop && this.$slide.length > 2) {
            if (this.index === 0) {
                _touchPrev = this.$slide.length - 1;
            } else if (this.index === this.$slide.length - 1) {
                _touchNext = 0;
            }
        }

        this.$slide.removeClass('lg-next-slide lg-prev-slide');
        if (_touchPrev > -1) {
            this.$slide.eq(_touchPrev).addClass('lg-prev-slide');
        }

        this.$slide.eq(_touchNext).addClass('lg-next-slide');
    };

    Plugin.prototype.mousewheel = function() {
        var _this = this;
        _this.$outer.on('mousewheel.lg', function(e) {

            if (!e.deltaY) {
                return;
            }

            if (e.deltaY > 0) {
                _this.goToPrevSlide();
            } else {
                _this.goToNextSlide();
            }

            e.preventDefault();
        });

    };

    Plugin.prototype.closeGallery = function() {

        var _this = this;
        var mousedown = false;
        this.$outer.find('.lg-close').on('click.lg', function() {
            _this.destroy();
        });

        if (_this.s.closable) {

            // If you drag the slide and release outside gallery gets close on chrome
            // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
            _this.$outer.on('mousedown.lg', function(e) {

                if ($(e.target).is('.lg-outer') || $(e.target).is('.lg-item ') || $(e.target).is('.lg-img-wrap')) {
                    mousedown = true;
                } else {
                    mousedown = false;
                }

            });

            _this.$outer.on('mousemove.lg', function() {
                mousedown = false;
            });

            _this.$outer.on('mouseup.lg', function(e) {

                if ($(e.target).is('.lg-outer') || $(e.target).is('.lg-item ') || $(e.target).is('.lg-img-wrap') && mousedown) {
                    if (!_this.$outer.hasClass('lg-dragging')) {
                        _this.destroy();
                    }
                }

            });

        }

    };

    Plugin.prototype.destroy = function(d) {

        var _this = this;

        if (!d) {
            _this.$el.trigger('onBeforeClose.lg');
            $(window).scrollTop(_this.prevScrollTop);
        }


        /**
         * if d is false or undefined destroy will only close the gallery
         * plugins instance remains with the element
         *
         * if d is true destroy will completely remove the plugin
         */

        if (d) {
            if (!_this.s.dynamic) {
                // only when not using dynamic mode is $items a jquery collection
                this.$items.off('click.lg click.lgcustom');
            }

            $.removeData(_this.el, 'lightGallery');
        }

        // Unbind all events added by lightGallery
        this.$el.off('.lg.tm');

        // Distroy all lightGallery modules
        $.each($.fn.lightGallery.modules, function(key) {
            if (_this.modules[key]) {
                _this.modules[key].destroy();
            }
        });

        this.lGalleryOn = false;

        clearTimeout(_this.hideBartimeout);
        this.hideBartimeout = false;
        $(window).off('.lg');
        $('body').removeClass('lg-on lg-from-hash');

        if (_this.$outer) {
            _this.$outer.removeClass('lg-visible');
        }

        $('.lg-backdrop').removeClass('in');

        setTimeout(function() {
            if (_this.$outer) {
                _this.$outer.remove();
            }

            $('.lg-backdrop').remove();

            if (!d) {
                _this.$el.trigger('onCloseAfter.lg');
            }

        }, _this.s.backdropDuration + 50);
    };

    $.fn.lightGallery = function(options) {
        return this.each(function() {
            if (!$.data(this, 'lightGallery')) {
                $.data(this, 'lightGallery', new Plugin(this, options));
            } else {
                try {
                    $(this).data('lightGallery').init();
                } catch (err) {
                    console.error('lightGallery has not initiated properly');
                }
            }
        });
    };

    $.fn.lightGallery.modules = {};

})();


}));

/*! lg-autoplay - v1.0.4 - 2017-03-28
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {


(function() {

    'use strict';

    var defaults = {
        autoplay: false,
        pause: 5000,
        progressBar: true,
        fourceAutoplay: false,
        autoplayControls: true,
        appendAutoplayControlsTo: '.lg-toolbar'
    };

    /**
     * Creates the autoplay plugin.
     * @param {object} element - lightGallery element
     */
    var Autoplay = function(element) {

        this.core = $(element).data('lightGallery');

        this.$el = $(element);

        // Execute only if items are above 1
        if (this.core.$items.length < 2) {
            return false;
        }

        this.core.s = $.extend({}, defaults, this.core.s);
        this.interval = false;

        // Identify if slide happened from autoplay
        this.fromAuto = true;

        // Identify if autoplay canceled from touch/drag
        this.canceledOnTouch = false;

        // save fourceautoplay value
        this.fourceAutoplayTemp = this.core.s.fourceAutoplay;

        // do not allow progress bar if browser does not support css3 transitions
        if (!this.core.doCss()) {
            this.core.s.progressBar = false;
        }

        this.init();

        return this;
    };

    Autoplay.prototype.init = function() {
        var _this = this;

        // append autoplay controls
        if (_this.core.s.autoplayControls) {
            _this.controls();
        }

        // Create progress bar
        if (_this.core.s.progressBar) {
            _this.core.$outer.find('.lg').append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>');
        }

        // set progress
        _this.progress();

        // Start autoplay
        if (_this.core.s.autoplay) {
            _this.$el.one('onSlideItemLoad.lg.tm', function() {
                _this.startlAuto();
            });
        }

        // cancel interval on touchstart and dragstart
        _this.$el.on('onDragstart.lg.tm touchstart.lg.tm', function() {
            if (_this.interval) {
                _this.cancelAuto();
                _this.canceledOnTouch = true;
            }
        });

        // restore autoplay if autoplay canceled from touchstart / dragstart
        _this.$el.on('onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm', function() {
            if (!_this.interval && _this.canceledOnTouch) {
                _this.startlAuto();
                _this.canceledOnTouch = false;
            }
        });

    };

    Autoplay.prototype.progress = function() {

        var _this = this;
        var _$progressBar;
        var _$progress;

        _this.$el.on('onBeforeSlide.lg.tm', function() {

            // start progress bar animation
            if (_this.core.s.progressBar && _this.fromAuto) {
                _$progressBar = _this.core.$outer.find('.lg-progress-bar');
                _$progress = _this.core.$outer.find('.lg-progress');
                if (_this.interval) {
                    _$progress.removeAttr('style');
                    _$progressBar.removeClass('lg-start');
                    setTimeout(function() {
                        _$progress.css('transition', 'width ' + (_this.core.s.speed + _this.core.s.pause) + 'ms ease 0s');
                        _$progressBar.addClass('lg-start');
                    }, 20);
                }
            }

            // Remove setinterval if slide is triggered manually and fourceautoplay is false
            if (!_this.fromAuto && !_this.core.s.fourceAutoplay) {
                _this.cancelAuto();
            }

            _this.fromAuto = false;

        });
    };

    // Manage autoplay via play/stop buttons
    Autoplay.prototype.controls = function() {
        var _this = this;
        var _html = '<span class="lg-autoplay-button lg-icon"></span>';

        // Append autoplay controls
        $(this.core.s.appendAutoplayControlsTo).append(_html);

        _this.core.$outer.find('.lg-autoplay-button').on('click.lg', function() {
            if ($(_this.core.$outer).hasClass('lg-show-autoplay')) {
                _this.cancelAuto();
                _this.core.s.fourceAutoplay = false;
            } else {
                if (!_this.interval) {
                    _this.startlAuto();
                    _this.core.s.fourceAutoplay = _this.fourceAutoplayTemp;
                }
            }
        });
    };

    // Autostart gallery
    Autoplay.prototype.startlAuto = function() {
        var _this = this;

        _this.core.$outer.find('.lg-progress').css('transition', 'width ' + (_this.core.s.speed + _this.core.s.pause) + 'ms ease 0s');
        _this.core.$outer.addClass('lg-show-autoplay');
        _this.core.$outer.find('.lg-progress-bar').addClass('lg-start');

        _this.interval = setInterval(function() {
            if (_this.core.index + 1 < _this.core.$items.length) {
                _this.core.index++;
            } else {
                _this.core.index = 0;
            }

            _this.fromAuto = true;
            _this.core.slide(_this.core.index, false, false, 'next');
        }, _this.core.s.speed + _this.core.s.pause);
    };

    // cancel Autostart
    Autoplay.prototype.cancelAuto = function() {
        clearInterval(this.interval);
        this.interval = false;
        this.core.$outer.find('.lg-progress').removeAttr('style');
        this.core.$outer.removeClass('lg-show-autoplay');
        this.core.$outer.find('.lg-progress-bar').removeClass('lg-start');
    };

    Autoplay.prototype.destroy = function() {

        this.cancelAuto();
        this.core.$outer.find('.lg-progress-bar').remove();
    };

    $.fn.lightGallery.modules.autoplay = Autoplay;

})();


}));

/*! lg-fullscreen - v1.0.1 - 2016-09-30
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2016 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        fullScreen: true
    };

    var Fullscreen = function(element) {

        // get lightGallery core plugin data
        this.core = $(element).data('lightGallery');

        this.$el = $(element);

        // extend module defalut settings with lightGallery core settings
        this.core.s = $.extend({}, defaults, this.core.s);

        this.init();

        return this;
    };

    Fullscreen.prototype.init = function() {
        var fullScreen = '';
        if (this.core.s.fullScreen) {

            // check for fullscreen browser support
            if (!document.fullscreenEnabled && !document.webkitFullscreenEnabled &&
                !document.mozFullScreenEnabled && !document.msFullscreenEnabled) {
                return;
            } else {
                fullScreen = '<span class="lg-fullscreen lg-icon"></span>';
                this.core.$outer.find('.lg-toolbar').append(fullScreen);
                this.fullScreen();
            }
        }
    };

    Fullscreen.prototype.requestFullscreen = function() {
        var el = document.documentElement;
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        } else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        }
    };

    Fullscreen.prototype.exitFullscreen = function() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    };

    // https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
    Fullscreen.prototype.fullScreen = function() {
        var _this = this;

        $(document).on('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg', function() {
            _this.core.$outer.toggleClass('lg-fullscreen-on');
        });

        this.core.$outer.find('.lg-fullscreen').on('click.lg', function() {
            if (!document.fullscreenElement &&
                !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                _this.requestFullscreen();
            } else {
                _this.exitFullscreen();
            }
        });

    };

    Fullscreen.prototype.destroy = function() {

        // exit from fullscreen if activated
        this.exitFullscreen();

        $(document).off('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg');
    };

    $.fn.lightGallery.modules.fullscreen = Fullscreen;

})();

}));

/*! lg-pager - v1.0.2 - 2017-01-22
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        pager: false
    };

    var Pager = function(element) {

        this.core = $(element).data('lightGallery');

        this.$el = $(element);
        this.core.s = $.extend({}, defaults, this.core.s);
        if (this.core.s.pager && this.core.$items.length > 1) {
            this.init();
        }

        return this;
    };

    Pager.prototype.init = function() {
        var _this = this;
        var pagerList = '';
        var $pagerCont;
        var $pagerOuter;
        var timeout;

        _this.core.$outer.find('.lg').append('<div class="lg-pager-outer"></div>');

        if (_this.core.s.dynamic) {
            for (var i = 0; i < _this.core.s.dynamicEl.length; i++) {
                pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + _this.core.s.dynamicEl[i].thumb + '" /></div></span>';
            }
        } else {
            _this.core.$items.each(function() {

                if (!_this.core.s.exThumbImage) {
                    pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + $(this).find('img').attr('src') + '" /></div></span>';
                } else {
                    pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + $(this).attr(_this.core.s.exThumbImage) + '" /></div></span>';
                }

            });
        }

        $pagerOuter = _this.core.$outer.find('.lg-pager-outer');

        $pagerOuter.html(pagerList);

        $pagerCont = _this.core.$outer.find('.lg-pager-cont');
        $pagerCont.on('click.lg touchend.lg', function() {
            var _$this = $(this);
            _this.core.index = _$this.index();
            _this.core.slide(_this.core.index, false, true, false);
        });

        $pagerOuter.on('mouseover.lg', function() {
            clearTimeout(timeout);
            $pagerOuter.addClass('lg-pager-hover');
        });

        $pagerOuter.on('mouseout.lg', function() {
            timeout = setTimeout(function() {
                $pagerOuter.removeClass('lg-pager-hover');
            });
        });

        _this.core.$el.on('onBeforeSlide.lg.tm', function(e, prevIndex, index) {
            $pagerCont.removeClass('lg-pager-active');
            $pagerCont.eq(index).addClass('lg-pager-active');
        });

    };

    Pager.prototype.destroy = function() {

    };

    $.fn.lightGallery.modules.pager = Pager;

})();


}));

/*! lg-thumbnail - v1.1.0 - 2017-08-08
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        thumbnail: true,

        animateThumb: true,
        currentPagerPosition: 'middle',

        thumbWidth: 100,
        thumbHeight: '80px',
        thumbContHeight: 100,
        thumbMargin: 5,

        exThumbImage: false,
        showThumbByDefault: true,
        toogleThumb: true,
        pullCaptionUp: true,

        enableThumbDrag: true,
        enableThumbSwipe: true,
        swipeThreshold: 50,

        loadYoutubeThumbnail: true,
        youtubeThumbSize: 1,

        loadVimeoThumbnail: true,
        vimeoThumbSize: 'thumbnail_small',

        loadDailymotionThumbnail: true
    };

    var Thumbnail = function(element) {

        // get lightGallery core plugin data
        this.core = $(element).data('lightGallery');

        // extend module default settings with lightGallery core settings
        this.core.s = $.extend({}, defaults, this.core.s);

        this.$el = $(element);
        this.$thumbOuter = null;
        this.thumbOuterWidth = 0;
        this.thumbTotalWidth = (this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin));
        this.thumbIndex = this.core.index;

        if (this.core.s.animateThumb) {
            this.core.s.thumbHeight = '100%';
        }

        // Thumbnail animation value
        this.left = 0;

        this.init();

        return this;
    };

    Thumbnail.prototype.init = function() {
        var _this = this;
        if (this.core.s.thumbnail && this.core.$items.length > 1) {
            if (this.core.s.showThumbByDefault) {
                setTimeout(function(){
                    _this.core.$outer.addClass('lg-thumb-open');
                }, 700);
            }

            if (this.core.s.pullCaptionUp) {
                this.core.$outer.addClass('lg-pull-caption-up');
            }

            this.build();
            if (this.core.s.animateThumb && this.core.doCss()) {
                if (this.core.s.enableThumbDrag) {
                    this.enableThumbDrag();
                }

                if (this.core.s.enableThumbSwipe) {
                    this.enableThumbSwipe();
                }

                this.thumbClickable = false;
            } else {
                this.thumbClickable = true;
            }

            this.toogle();
            this.thumbkeyPress();
        }
    };

    Thumbnail.prototype.build = function() {
        var _this = this;
        var thumbList = '';
        var vimeoErrorThumbSize = '';
        var $thumb;
        var html = '<div class="lg-thumb-outer">' +
            '<div class="lg-thumb lg-group">' +
            '</div>' +
            '</div>';

        switch (this.core.s.vimeoThumbSize) {
            case 'thumbnail_large':
                vimeoErrorThumbSize = '640';
                break;
            case 'thumbnail_medium':
                vimeoErrorThumbSize = '200x150';
                break;
            case 'thumbnail_small':
                vimeoErrorThumbSize = '100x75';
        }

        _this.core.$outer.addClass('lg-has-thumb');

        _this.core.$outer.find('.lg').append(html);

        _this.$thumbOuter = _this.core.$outer.find('.lg-thumb-outer');
        _this.thumbOuterWidth = _this.$thumbOuter.width();

        if (_this.core.s.animateThumb) {
            _this.core.$outer.find('.lg-thumb').css({
                width: _this.thumbTotalWidth + 'px',
                position: 'relative'
            });
        }

        if (this.core.s.animateThumb) {
            _this.$thumbOuter.css('height', _this.core.s.thumbContHeight + 'px');
        }

        function getThumb(src, thumb, index) {
            var isVideo = _this.core.isVideo(src, index) || {};
            var thumbImg;
            var vimeoId = '';

            if (isVideo.youtube || isVideo.vimeo || isVideo.dailymotion) {
                if (isVideo.youtube) {
                    if (_this.core.s.loadYoutubeThumbnail) {
                        thumbImg = '//img.youtube.com/vi/' + isVideo.youtube[1] + '/' + _this.core.s.youtubeThumbSize + '.jpg';
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.vimeo) {
                    if (_this.core.s.loadVimeoThumbnail) {
                        thumbImg = '//i.vimeocdn.com/video/error_' + vimeoErrorThumbSize + '.jpg';
                        vimeoId = isVideo.vimeo[1];
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.dailymotion) {
                    if (_this.core.s.loadDailymotionThumbnail) {
                        thumbImg = '//www.dailymotion.com/thumbnail/video/' + isVideo.dailymotion[1];
                    } else {
                        thumbImg = thumb;
                    }
                }
            } else {
                thumbImg = thumb;
            }

            thumbList += '<div data-vimeo-id="' + vimeoId + '" class="lg-thumb-item" style="width:' + _this.core.s.thumbWidth + 'px; height: ' + _this.core.s.thumbHeight + '; margin-right: ' + _this.core.s.thumbMargin + 'px"><img src="' + thumbImg + '" /></div>';
            vimeoId = '';
        }

        // Thumb-video
        var indexVideo = null;

        if (_this.core.s.dynamic) {
            for (var i = 0; i < _this.core.s.dynamicEl.length; i++) {
                getThumb(_this.core.s.dynamicEl[i].src, _this.core.s.dynamicEl[i].thumb, i);
            }
        } else {
            _this.core.$items.each(function(i) {
                if (!_this.core.s.exThumbImage) {

                    // Thumb-video
                    if ($(this).find('img').attr('src') !== undefined) {
                        getThumb($(this).attr('href') || $(this).attr('data-src'), $(this).find('img').attr('src'), i);
                        if ($(this).find('img').data('thumb-video')) {
                           indexVideo = i;
                        }
                    }
                    else {
                        getThumb($(this).attr('href') || $(this).attr('data-src'), $(this).find('img').data('thumb-src'), i);
                    }
                } else {
                    getThumb($(this).attr('href') || $(this).attr('data-src'), $(this).attr(_this.core.s.exThumbImage), i);
                }

            });
        }

        _this.core.$outer.find('.lg-thumb').html(thumbList);

        // Thumb-video
        if (indexVideo !== null) {
            $('.lg-thumb > div').eq(indexVideo).addClass('video');
        }

        $thumb = _this.core.$outer.find('.lg-thumb-item');

        // Load vimeo thumbnails
        $thumb.each(function() {
            var $this = $(this);
            var vimeoVideoId = $this.attr('data-vimeo-id');

            if (vimeoVideoId) {
                $.getJSON('//www.vimeo.com/api/v2/video/' + vimeoVideoId + '.json?callback=?', {
                    format: 'json'
                }, function(data) {
                    $this.find('img').attr('src', data[0][_this.core.s.vimeoThumbSize]);
                });
            }
        });

        // manage active class for thumbnail
        $thumb.eq(_this.core.index).addClass('active');
        _this.core.$el.on('onBeforeSlide.lg.tm', function() {
            $thumb.removeClass('active');
            $thumb.eq(_this.core.index).addClass('active');
        });

        $thumb.on('click.lg touchend.lg', function() {
            var _$this = $(this);
            setTimeout(function() {

                // In IE9 and bellow touch does not support
                // Go to slide if browser does not support css transitions
                if ((_this.thumbClickable && !_this.core.lgBusy) || !_this.core.doCss()) {
                    _this.core.index = _$this.index();
                    _this.core.slide(_this.core.index, false, true, false);
                }
            }, 50);
        });

        _this.core.$el.on('onBeforeSlide.lg.tm', function() {
            _this.animateThumb(_this.core.index);
        });

        $(window).on('resize.lg.thumb orientationchange.lg.thumb', function() {
            setTimeout(function() {
                _this.animateThumb(_this.core.index);
                _this.thumbOuterWidth = _this.$thumbOuter.width();
            }, 200);
        });

    };

    Thumbnail.prototype.setTranslate = function(value) {
        // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
        this.core.$outer.find('.lg-thumb').css({
            transform: 'translate3d(-' + (value) + 'px, 0px, 0px)'
        });
    };

    Thumbnail.prototype.animateThumb = function(index) {
        var $thumb = this.core.$outer.find('.lg-thumb');
        if (this.core.s.animateThumb) {
            var position;
            switch (this.core.s.currentPagerPosition) {
                case 'left':
                    position = 0;
                    break;
                case 'middle':
                    position = (this.thumbOuterWidth / 2) - (this.core.s.thumbWidth / 2);
                    break;
                case 'right':
                    position = this.thumbOuterWidth - this.core.s.thumbWidth;
            }
            this.left = ((this.core.s.thumbWidth + this.core.s.thumbMargin) * index - 1) - position;
            if (this.left > (this.thumbTotalWidth - this.thumbOuterWidth)) {
                this.left = this.thumbTotalWidth - this.thumbOuterWidth;
            }

            if (this.left < 0) {
                this.left = 0;
            }

            if (this.core.lGalleryOn) {
                if (!$thumb.hasClass('on')) {
                    this.core.$outer.find('.lg-thumb').css('transition-duration', this.core.s.speed + 'ms');
                }

                if (!this.core.doCss()) {
                    $thumb.animate({
                        left: -this.left + 'px'
                    }, this.core.s.speed);
                }
            } else {
                if (!this.core.doCss()) {
                    $thumb.css('left', -this.left + 'px');
                }
            }

            this.setTranslate(this.left);

        }
    };

    // Enable thumbnail dragging and swiping
    Thumbnail.prototype.enableThumbDrag = function() {

        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        var tempLeft = 0;

        _this.$thumbOuter.addClass('lg-grab');

        _this.core.$outer.find('.lg-thumb').on('mousedown.lg.thumb', function(e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                // execute only on .lg-object
                e.preventDefault();
                startCoords = e.pageX;
                isDraging = true;

                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                _this.core.$outer.scrollLeft += 1;
                _this.core.$outer.scrollLeft -= 1;

                // *
                _this.thumbClickable = false;
                _this.$thumbOuter.removeClass('lg-grab').addClass('lg-grabbing');
            }
        });

        $(window).on('mousemove.lg.thumb', function(e) {
            if (isDraging) {
                tempLeft = _this.left;
                isMoved = true;
                endCoords = e.pageX;

                _this.$thumbOuter.addClass('lg-dragging');

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > (_this.thumbTotalWidth - _this.thumbOuterWidth)) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);

            }
        });

        $(window).on('mouseup.lg.thumb', function() {
            if (isMoved) {
                isMoved = false;
                _this.$thumbOuter.removeClass('lg-dragging');

                _this.left = tempLeft;

                if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                    _this.thumbClickable = true;
                }

            } else {
                _this.thumbClickable = true;
            }

            if (isDraging) {
                isDraging = false;
                _this.$thumbOuter.removeClass('lg-grabbing').addClass('lg-grab');
            }
        });

    };

    Thumbnail.prototype.enableThumbSwipe = function() {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;
        var tempLeft = 0;

        _this.core.$outer.find('.lg-thumb').on('touchstart.lg', function(e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                startCoords = e.originalEvent.targetTouches[0].pageX;
                _this.thumbClickable = false;
            }
        });

        _this.core.$outer.find('.lg-thumb').on('touchmove.lg', function(e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                endCoords = e.originalEvent.targetTouches[0].pageX;
                isMoved = true;

                _this.$thumbOuter.addClass('lg-dragging');

                tempLeft = _this.left;

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > (_this.thumbTotalWidth - _this.thumbOuterWidth)) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);

            }
        });

        _this.core.$outer.find('.lg-thumb').on('touchend.lg', function() {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {

                if (isMoved) {
                    isMoved = false;
                    _this.$thumbOuter.removeClass('lg-dragging');
                    if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                        _this.thumbClickable = true;
                    }

                    _this.left = tempLeft;
                } else {
                    _this.thumbClickable = true;
                }
            } else {
                _this.thumbClickable = true;
            }
        });

    };

    Thumbnail.prototype.toogle = function() {
        var _this = this;
        if (_this.core.s.toogleThumb) {
            _this.core.$outer.addClass('lg-can-toggle');
            _this.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>');
            _this.core.$outer.find('.lg-toogle-thumb').on('click.lg', function() {
                _this.core.$outer.toggleClass('lg-thumb-open');
            });
        }
    };

    Thumbnail.prototype.thumbkeyPress = function() {
        var _this = this;
        $(window).on('keydown.lg.thumb', function(e) {
            if (e.keyCode === 38) {
                e.preventDefault();
                _this.core.$outer.addClass('lg-thumb-open');
            } else if (e.keyCode === 40) {
                e.preventDefault();
                _this.core.$outer.removeClass('lg-thumb-open');
            }
        });
    };

    Thumbnail.prototype.destroy = function() {
        if (this.core.s.thumbnail && this.core.$items.length > 1) {
            $(window).off('resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb');
            this.$thumbOuter.remove();
            this.core.$outer.removeClass('lg-has-thumb');
        }
    };

    $.fn.lightGallery.modules.Thumbnail = Thumbnail;

})();

}));

/*! lg-video - v1.2.2 - 2018-05-01
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2018 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(root["jQuery"]);
  }
}(this, function ($) {

(function() {

        'use strict';

        var defaults = {
            videoMaxWidth: '855px',

            autoplayFirstVideo: true,

            youtubePlayerParams: false,
            vimeoPlayerParams: false,
            dailymotionPlayerParams: false,
            vkPlayerParams: false,

            videojs: false,
            videojsOptions: {}
        };

        var Video = function(element) {

            this.core = $(element).data('lightGallery');

            this.$el = $(element);
            this.core.s = $.extend({}, defaults, this.core.s);
            this.videoLoaded = false;

            this.init();

            return this;
        };

        Video.prototype.init = function() {
            var _this = this;

            // Event triggered when video url found without poster
            _this.core.$el.on('hasVideo.lg.tm', onHasVideo.bind(this));

            // Set max width for video
            _this.core.$el.on('onAferAppendSlide.lg.tm', onAferAppendSlide.bind(this));

            if (_this.core.doCss() && (_this.core.$items.length > 1) && (_this.core.s.enableSwipe || _this.core.s.enableDrag)) {
                _this.core.$el.on('onSlideClick.lg.tm', function() {
                    var $el = _this.core.$slide.eq(_this.core.index);
                    _this.loadVideoOnclick($el);
                });
            } else {

                // For IE 9 and bellow
                _this.core.$slide.on('click.lg', function() {
                    _this.loadVideoOnclick($(this));
                });
            }

            _this.core.$el.on('onBeforeSlide.lg.tm', onBeforeSlide.bind(this));

            _this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex) {
                _this.core.$slide.eq(prevIndex).removeClass('lg-video-playing');

                // stream-video-pause
                var videoStream = document.querySelector('.lg-item stream');
                if (videoStream) {
                    videoStream.pause();
                    videoStream.classList.add('active');
                }

            });

            if (_this.core.s.autoplayFirstVideo) {
                _this.core.$el.on('onAferAppendSlide.lg.tm', function (e, index) {
                    if (!_this.core.lGalleryOn) {
                        var $el = _this.core.$slide.eq(index);
                        setTimeout(function () {
                            _this.loadVideoOnclick($el);
                        }, 100);
                    }
                });
            }
        };

        Video.prototype.loadVideo = function(src, addClass, noPoster, index, html) {
            var video = '';
            var autoplay = 1;
            var a = '';
            var isVideo = this.core.isVideo(src, index) || {};

            // Enable autoplay based on setting for first video if poster doesn't exist
            if (noPoster) {
                if (this.videoLoaded) {
                    autoplay = 0;
                } else {
                    autoplay = this.core.s.autoplayFirstVideo ? 1 : 0;
                }
            }

            if (isVideo.youtube) {

                a = '?wmode=opaque&autoplay=' + autoplay + '&enablejsapi=1';
                if (this.core.s.youtubePlayerParams) {
                    a = a + '&' + $.param(this.core.s.youtubePlayerParams);
                }

                video = '<iframe class="lg-video-object lg-youtube ' + addClass + '" width="560" height="315" src="//www.youtube.com/embed/' + isVideo.youtube[1] + a + '" frameborder="0" allowfullscreen></iframe>';

            } else if (isVideo.vimeo) {

                a = '?autoplay=' + autoplay + '&api=1';
                if (this.core.s.vimeoPlayerParams) {
                    a = a + '&' + $.param(this.core.s.vimeoPlayerParams);
                }

                video = '<iframe class="lg-video-object lg-vimeo ' + addClass + '" width="560" height="315"  src="//player.vimeo.com/video/' + isVideo.vimeo[1] + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

            } else if (isVideo.dailymotion) {

                a = '?wmode=opaque&autoplay=' + autoplay + '&api=postMessage';
                if (this.core.s.dailymotionPlayerParams) {
                    a = a + '&' + $.param(this.core.s.dailymotionPlayerParams);
                }

                video = '<iframe class="lg-video-object lg-dailymotion ' + addClass + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + isVideo.dailymotion[1] + a + '" frameborder="0" allowfullscreen></iframe>';

            } else if (isVideo.html5) {
                var fL = html.substring(0, 1);
                if (fL === '.' || fL === '#') {
                    html = $(html).html();
                }

                video = html;

            } else if (isVideo.vk) {

                a = '&autoplay=' + autoplay;
                if (this.core.s.vkPlayerParams) {
                    a = a + '&' + $.param(this.core.s.vkPlayerParams);
                }

                video = '<iframe class="lg-video-object lg-vk ' + addClass + '" width="560" height="315" src="//vk.com/video_ext.php?' + isVideo.vk[1] + a + '" frameborder="0" allowfullscreen></iframe>';

            }

            return video;
        };

        Video.prototype.loadVideoOnclick = function($el){

            var _this = this;
            // check slide has poster
            if ($el.find('.lg-object').hasClass('lg-has-poster') && $el.find('.lg-object').is(':visible')) {

                // check already video element present
                if (!$el.hasClass('lg-has-video')) {

                    $el.addClass('lg-video-playing lg-has-video');

                    var _src;
                    var _html;
                    var _loadVideo = function(_src, _html) {

                        $el.find('.lg-video').append(_this.loadVideo(_src, '', false, _this.core.index, _html));

                        if (_html) {
                            if (_this.core.s.videojs) {
                                try {
                                    videojs(_this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function() {
                                        this.play();
                                    });
                                } catch (e) {
                                    console.error('Make sure you have included videojs');
                                }
                            } else {
                                // stream-video-start
                                if (_this.core.$slide.eq(_this.core.index).find('stream').length) {
                                    _this.core.$slide.eq(_this.core.index).find('stream > div:first').remove();
                                }

                                setTimeout(function(){

                                    if (_this.core.$slide.eq(_this.core.index).find('stream').length) {

                                        var videoStream = document.querySelector('.lg-current stream');
                                        if (videoStream) {
                                            setTimeout(function(){
                                                videoStream.play();
                                            },400);
                                        }

                                    }
                                    else {
                                        _this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0).play();
                                    }

                                },300);
                                // stream-video-end
                            }
                        }

                    };

                    if (_this.core.s.dynamic) {

                        _src = _this.core.s.dynamicEl[_this.core.index].src;
                        _html = _this.core.s.dynamicEl[_this.core.index].html;

                        _loadVideo(_src, _html);

                    } else {

                        _src = _this.core.$items.eq(_this.core.index).attr('href') || _this.core.$items.eq(_this.core.index).attr('data-src');
                        _html = _this.core.$items.eq(_this.core.index).attr('data-html');

                        _loadVideo(_src, _html);

                    }

                    var $tempImg = $el.find('.lg-object');
                    $el.find('.lg-video').append($tempImg);

                    // @todo loading icon for html5 videos also
                    // for showing the loading indicator while loading video
                    if (!$el.find('.lg-video-object').hasClass('lg-html5')) {
                        $el.removeClass('lg-complete');
                        $el.find('.lg-video-object').on('load.lg error.lg', function() {
                            $el.addClass('lg-complete');
                        });
                    }

                } else {

                    var youtubePlayer = $el.find('.lg-youtube').get(0);
                    var vimeoPlayer = $el.find('.lg-vimeo').get(0);
                    var dailymotionPlayer = $el.find('.lg-dailymotion').get(0);
                    var html5Player = $el.find('.lg-html5').get(0);
                    if (youtubePlayer) {
                        youtubePlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                    } else if (vimeoPlayer) {
                        try {
                            $f(vimeoPlayer).api('play');
                        } catch (e) {
                            console.error('Make sure you have included froogaloop2 js');
                        }
                    } else if (dailymotionPlayer) {
                        dailymotionPlayer.contentWindow.postMessage('play', '*');

                    } else if (html5Player) {
                        if (_this.core.s.videojs) {
                            try {
                                videojs(html5Player).play();
                            } catch (e) {
                                console.error('Make sure you have included videojs');
                            }
                        } else {
                            html5Player.play();
                        }
                    }

                    $el.addClass('lg-video-playing');

                }
            }
        };

        Video.prototype.destroy = function() {
            this.videoLoaded = false;
        };

        function onHasVideo(event, index, src, html) {
            /*jshint validthis:true */
            var _this = this;
            _this.core.$slide.eq(index).find('.lg-video').append(_this.loadVideo(src, 'lg-object', true, index, html));
            if (html) {
                if (_this.core.s.videojs) {
                    try {
                        videojs(_this.core.$slide.eq(index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function() {
                            if (!_this.videoLoaded && _this.core.s.autoplayFirstVideo) {
                                this.play();
                            }
                        });
                    } catch (e) {
                        console.error('Make sure you have included videojs');
                    }
                } else {
                    if(!_this.videoLoaded && _this.core.s.autoplayFirstVideo) {
                        _this.core.$slide.eq(index).find('.lg-html5').get(0).play();
                    }
                }
            }
        }

        function onAferAppendSlide(event, index) {
            /*jshint validthis:true */
            var $videoCont = this.core.$slide.eq(index).find('.lg-video-cont');
            if (!$videoCont.hasClass('lg-has-iframe')) {
                $videoCont.css('max-width', this.core.s.videoMaxWidth);
                this.videoLoaded = true;
            }
        }

        function onBeforeSlide(event, prevIndex, index) {
            /*jshint validthis:true */
            var _this = this;

            var $videoSlide = _this.core.$slide.eq(prevIndex);
            var youtubePlayer = $videoSlide.find('.lg-youtube').get(0);
            var vimeoPlayer = $videoSlide.find('.lg-vimeo').get(0);
            var dailymotionPlayer = $videoSlide.find('.lg-dailymotion').get(0);
            var vkPlayer = $videoSlide.find('.lg-vk').get(0);
            var html5Player = $videoSlide.find('.lg-html5').get(0);
            if (youtubePlayer) {
                youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            } else if (vimeoPlayer) {
                try {
                    $f(vimeoPlayer).api('pause');
                } catch (e) {
                    console.error('Make sure you have included froogaloop2 js');
                }
            } else if (dailymotionPlayer) {
                dailymotionPlayer.contentWindow.postMessage('pause', '*');

            } else if (html5Player) {
                if (_this.core.s.videojs) {
                    try {
                        videojs(html5Player).pause();
                    } catch (e) {
                        console.error('Make sure you have included videojs');
                    }
                } else {
                    html5Player.pause();
                }
            } if (vkPlayer) {
                $(vkPlayer).attr('src', $(vkPlayer).attr('src').replace('&autoplay', '&noplay'));
            }

            var _src;
            if (_this.core.s.dynamic) {
                _src = _this.core.s.dynamicEl[index].src;
            } else {
                _src = _this.core.$items.eq(index).attr('href') || _this.core.$items.eq(index).attr('data-src');

            }

            var _isVideo = _this.core.isVideo(_src, index) || {};
            if (_isVideo.youtube || _isVideo.vimeo || _isVideo.dailymotion || _isVideo.vk) {
                _this.core.$outer.addClass('lg-hide-download');
            }

        }

        $.fn.lightGallery.modules.video = Video;

    })();

}));

/*! lg-zoom - v1.1.0 - 2017-08-08
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var getUseLeft = function() {
        var useLeft = false;
        var isChrome = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        if (isChrome && parseInt(isChrome[2], 10) < 54) {
            useLeft = true;
        }

        return useLeft;
    };

    var defaults = {
        scale: 1,
        zoom: true,
        actualSize: true,
        enableZoomAfter: 300,
        useLeftForZoom: getUseLeft()
    };

    var Zoom = function(element) {

        this.core = $(element).data('lightGallery');

        this.core.s = $.extend({}, defaults, this.core.s);

        if (this.core.s.zoom && this.core.doCss()) {
            this.init();

            // Store the zoomable timeout value just to clear it while closing
            this.zoomabletimeout = false;

            // Set the initial value center
            this.pageX = $(window).width() / 2;
            this.pageY = ($(window).height() / 2) + $(window).scrollTop();
        }

        return this;
    };

    Zoom.prototype.init = function() {

        var _this = this;
        var zoomIcons = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';

        if (_this.core.s.actualSize) {
            zoomIcons += '<span id="lg-actual-size" class="lg-icon"></span>';
        }

        if (_this.core.s.useLeftForZoom) {
            _this.core.$outer.addClass('lg-use-left-for-zoom');
        } else {
            _this.core.$outer.addClass('lg-use-transition-for-zoom');
        }

        this.core.$outer.find('.lg-toolbar').append(zoomIcons);

        // Add zoomable class
        _this.core.$el.on('onSlideItemLoad.lg.tm.zoom', function(event, index, delay) {

            // delay will be 0 except first time
            var _speed = _this.core.s.enableZoomAfter + delay;

            // set _speed value 0 if gallery opened from direct url and if it is first slide
            if ($('body').hasClass('lg-from-hash') && delay) {

                // will execute only once
                _speed = 0;
            } else {

                // Remove lg-from-hash to enable starting animation.
                $('body').removeClass('lg-from-hash');
            }

            _this.zoomabletimeout = setTimeout(function() {
                _this.core.$slide.eq(index).addClass('lg-zoomable');
            }, _speed + 30);
        });

        var scale = 1;
        /**
         * @desc Image zoom
         * Translate the wrap and scale the image to get better user experience
         *
         * @param {String} scaleVal - Zoom decrement/increment value
         */
        var zoom = function(scaleVal) {

            var $image = _this.core.$outer.find('.lg-current .lg-image');
            var _x;
            var _y;

            // Find offset manually to avoid issue after zoom
            var offsetX = ($(window).width() - $image.prop('offsetWidth')) / 2;
            var offsetY = (($(window).height() - $image.prop('offsetHeight')) / 2) + $(window).scrollTop();

            _x = _this.pageX - offsetX;
            _y = _this.pageY - offsetY;

            var x = (scaleVal - 1) * (_x);
            var y = (scaleVal - 1) * (_y);

            $image.css('transform', 'scale3d(' + scaleVal + ', ' + scaleVal + ', 1)').attr('data-scale', scaleVal);

            if (_this.core.s.useLeftForZoom) {
                $image.parent().css({
                    left: -x + 'px',
                    top: -y + 'px'
                }).attr('data-x', x).attr('data-y', y);
            } else {
                $image.parent().css('transform', 'translate3d(-' + x + 'px, -' + y + 'px, 0)').attr('data-x', x).attr('data-y', y);
            }
        };

        var callScale = function() {
            if (scale > 1) {
                _this.core.$outer.addClass('lg-zoomed');
            } else {
                _this.resetZoom();
            }

            if (scale < 1) {
                scale = 1;
            }

            zoom(scale);
        };

        var actualSize = function(event, $image, index, fromIcon) {
            var w = $image.prop('offsetWidth');
            var nw;
            if (_this.core.s.dynamic) {
                nw = _this.core.s.dynamicEl[index].width || $image[0].naturalWidth || w;
            } else {
                nw = _this.core.$items.eq(index).attr('data-width') || $image[0].naturalWidth || w;
            }

            var _scale;

            if (_this.core.$outer.hasClass('lg-zoomed')) {
                scale = 1;
            } else {
                if (nw > w) {
                    _scale = nw / w;
                    scale = _scale || 2;
                }
            }

            if (fromIcon) {
                _this.pageX = $(window).width() / 2;
                _this.pageY = ($(window).height() / 2) + $(window).scrollTop();
            } else {
                _this.pageX = event.pageX || event.originalEvent.targetTouches[0].pageX;
                _this.pageY = event.pageY || event.originalEvent.targetTouches[0].pageY;
            }

            callScale();
            setTimeout(function() {
                _this.core.$outer.removeClass('lg-grabbing').addClass('lg-grab');
            }, 10);
        };

        var tapped = false;

        // event triggered after appending slide content
        _this.core.$el.on('onAferAppendSlide.lg.tm.zoom', function(event, index) {

            // Get the current element
            var $image = _this.core.$slide.eq(index).find('.lg-image');

            $image.on('dblclick', function(event) {
                actualSize(event, $image, index);
            });

            $image.on('touchstart', function(event) {
                if (!tapped) {
                    tapped = setTimeout(function() {
                        tapped = null;
                    }, 300);
                } else {
                    clearTimeout(tapped);
                    tapped = null;
                    actualSize(event, $image, index);
                }

                event.preventDefault();
            });

        });

        // Update zoom on resize and orientationchange
        $(window).on('resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom', function() {
            _this.pageX = $(window).width() / 2;
            _this.pageY = ($(window).height() / 2) + $(window).scrollTop();
            zoom(scale);
        });

        $('#lg-zoom-out').on('click.lg', function() {
            if (_this.core.$outer.find('.lg-current .lg-image').length) {
                scale -= _this.core.s.scale;
                callScale();
            }
        });

        $('#lg-zoom-in').on('click.lg', function() {
            if (_this.core.$outer.find('.lg-current .lg-image').length) {
                scale += _this.core.s.scale;
                callScale();
            }
        });

        $('#lg-actual-size').on('click.lg', function(event) {
            actualSize(event, _this.core.$slide.eq(_this.core.index).find('.lg-image'), _this.core.index, true);
        });

        // Reset zoom on slide change
        _this.core.$el.on('onBeforeSlide.lg.tm', function() {
            scale = 1;
            _this.resetZoom();
        });

        // Drag option after zoom
        _this.zoomDrag();

        _this.zoomSwipe();

    };

    // Reset zoom effect
    Zoom.prototype.resetZoom = function() {
        this.core.$outer.removeClass('lg-zoomed');
        this.core.$slide.find('.lg-img-wrap').removeAttr('style data-x data-y');
        this.core.$slide.find('.lg-image').removeAttr('style data-scale');

        // Reset pagx pagy values to center
        this.pageX = $(window).width() / 2;
        this.pageY = ($(window).height() / 2) + $(window).scrollTop();
    };

    Zoom.prototype.zoomSwipe = function() {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isMoved = false;

        // Allow x direction drag
        var allowX = false;

        // Allow Y direction drag
        var allowY = false;

        _this.core.$slide.on('touchstart.lg', function(e) {

            if (_this.core.$outer.hasClass('lg-zoomed')) {
                var $image = _this.core.$slide.eq(_this.core.index).find('.lg-object');

                allowY = $image.prop('offsetHeight') * $image.attr('data-scale') > _this.core.$outer.find('.lg').height();
                allowX = $image.prop('offsetWidth') * $image.attr('data-scale') > _this.core.$outer.find('.lg').width();
                if ((allowX || allowY)) {
                    e.preventDefault();
                    startCoords = {
                        x: e.originalEvent.targetTouches[0].pageX,
                        y: e.originalEvent.targetTouches[0].pageY
                    };
                }
            }

        });

        _this.core.$slide.on('touchmove.lg', function(e) {

            if (_this.core.$outer.hasClass('lg-zoomed')) {

                var _$el = _this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
                var distanceX;
                var distanceY;

                e.preventDefault();
                isMoved = true;

                endCoords = {
                    x: e.originalEvent.targetTouches[0].pageX,
                    y: e.originalEvent.targetTouches[0].pageY
                };

                // reset opacity and transition duration
                _this.core.$outer.addClass('lg-zoom-dragging');

                if (allowY) {
                    distanceY = (-Math.abs(_$el.attr('data-y'))) + (endCoords.y - startCoords.y);
                } else {
                    distanceY = -Math.abs(_$el.attr('data-y'));
                }

                if (allowX) {
                    distanceX = (-Math.abs(_$el.attr('data-x'))) + (endCoords.x - startCoords.x);
                } else {
                    distanceX = -Math.abs(_$el.attr('data-x'));
                }

                if ((Math.abs(endCoords.x - startCoords.x) > 15) || (Math.abs(endCoords.y - startCoords.y) > 15)) {

                    if (_this.core.s.useLeftForZoom) {
                        _$el.css({
                            left: distanceX + 'px',
                            top: distanceY + 'px'
                        });
                    } else {
                        _$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
                    }
                }

            }

        });

        _this.core.$slide.on('touchend.lg', function() {
            if (_this.core.$outer.hasClass('lg-zoomed')) {
                if (isMoved) {
                    isMoved = false;
                    _this.core.$outer.removeClass('lg-zoom-dragging');
                    _this.touchendZoom(startCoords, endCoords, allowX, allowY);

                }
            }
        });

    };

    Zoom.prototype.zoomDrag = function() {

        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isDraging = false;
        var isMoved = false;

        // Allow x direction drag
        var allowX = false;

        // Allow Y direction drag
        var allowY = false;

        _this.core.$slide.on('mousedown.lg.zoom', function(e) {

            // execute only on .lg-object
            var $image = _this.core.$slide.eq(_this.core.index).find('.lg-object');

            allowY = $image.prop('offsetHeight') * $image.attr('data-scale') > _this.core.$outer.find('.lg').height();
            allowX = $image.prop('offsetWidth') * $image.attr('data-scale') > _this.core.$outer.find('.lg').width();

            if (_this.core.$outer.hasClass('lg-zoomed')) {
                if ($(e.target).hasClass('lg-object') && (allowX || allowY)) {
                    e.preventDefault();
                    startCoords = {
                        x: e.pageX,
                        y: e.pageY
                    };

                    isDraging = true;

                    // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                    _this.core.$outer.scrollLeft += 1;
                    _this.core.$outer.scrollLeft -= 1;

                    _this.core.$outer.removeClass('lg-grab').addClass('lg-grabbing');
                }
            }
        });

        $(window).on('mousemove.lg.zoom', function(e) {
            if (isDraging) {
                var _$el = _this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
                var distanceX;
                var distanceY;

                isMoved = true;
                endCoords = {
                    x: e.pageX,
                    y: e.pageY
                };

                // reset opacity and transition duration
                _this.core.$outer.addClass('lg-zoom-dragging');

                if (allowY) {
                    distanceY = (-Math.abs(_$el.attr('data-y'))) + (endCoords.y - startCoords.y);
                } else {
                    distanceY = -Math.abs(_$el.attr('data-y'));
                }

                if (allowX) {
                    distanceX = (-Math.abs(_$el.attr('data-x'))) + (endCoords.x - startCoords.x);
                } else {
                    distanceX = -Math.abs(_$el.attr('data-x'));
                }

                if (_this.core.s.useLeftForZoom) {
                    _$el.css({
                        left: distanceX + 'px',
                        top: distanceY + 'px'
                    });
                } else {
                    _$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
                }
            }
        });

        $(window).on('mouseup.lg.zoom', function(e) {

            if (isDraging) {
                isDraging = false;
                _this.core.$outer.removeClass('lg-zoom-dragging');

                // Fix for chrome mouse move on click
                if (isMoved && ((startCoords.x !== endCoords.x) || (startCoords.y !== endCoords.y))) {
                    endCoords = {
                        x: e.pageX,
                        y: e.pageY
                    };
                    _this.touchendZoom(startCoords, endCoords, allowX, allowY);

                }

                isMoved = false;
            }

            _this.core.$outer.removeClass('lg-grabbing').addClass('lg-grab');

        });
    };

    Zoom.prototype.touchendZoom = function(startCoords, endCoords, allowX, allowY) {

        var _this = this;
        var _$el = _this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
        var $image = _this.core.$slide.eq(_this.core.index).find('.lg-object');
        var distanceX = (-Math.abs(_$el.attr('data-x'))) + (endCoords.x - startCoords.x);
        var distanceY = (-Math.abs(_$el.attr('data-y'))) + (endCoords.y - startCoords.y);
        var minY = (_this.core.$outer.find('.lg').height() - $image.prop('offsetHeight')) / 2;
        var maxY = Math.abs(($image.prop('offsetHeight') * Math.abs($image.attr('data-scale'))) - _this.core.$outer.find('.lg').height() + minY);
        var minX = (_this.core.$outer.find('.lg').width() - $image.prop('offsetWidth')) / 2;
        var maxX = Math.abs(($image.prop('offsetWidth') * Math.abs($image.attr('data-scale'))) - _this.core.$outer.find('.lg').width() + minX);

        if ((Math.abs(endCoords.x - startCoords.x) > 15) || (Math.abs(endCoords.y - startCoords.y) > 15)) {
            if (allowY) {
                if (distanceY <= -maxY) {
                    distanceY = -maxY;
                } else if (distanceY >= -minY) {
                    distanceY = -minY;
                }
            }

            if (allowX) {
                if (distanceX <= -maxX) {
                    distanceX = -maxX;
                } else if (distanceX >= -minX) {
                    distanceX = -minX;
                }
            }

            if (allowY) {
                _$el.attr('data-y', Math.abs(distanceY));
            } else {
                distanceY = -Math.abs(_$el.attr('data-y'));
            }

            if (allowX) {
                _$el.attr('data-x', Math.abs(distanceX));
            } else {
                distanceX = -Math.abs(_$el.attr('data-x'));
            }

            if (_this.core.s.useLeftForZoom) {
                _$el.css({
                    left: distanceX + 'px',
                    top: distanceY + 'px'
                });
            } else {
                _$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
            }

        }
    };

    Zoom.prototype.destroy = function() {

        var _this = this;

        // Unbind all events added by lightGallery zoom plugin
        _this.core.$el.off('.lg.zoom');
        $(window).off('.lg.zoom');
        _this.core.$slide.off('.lg.zoom');
        _this.core.$el.off('.lg.tm.zoom');
        _this.resetZoom();
        clearTimeout(_this.zoomabletimeout);
        _this.zoomabletimeout = false;
    };

    $.fn.lightGallery.modules.zoom = Zoom;

})();


}));

/*! lg-hash - v1.0.4 - 2017-12-20
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        hash: true
    };

    var Hash = function(element) {

        this.core = $(element).data('lightGallery');

        this.core.s = $.extend({}, defaults, this.core.s);

        if (this.core.s.hash) {
            this.oldHash = window.location.hash;
            this.init();
        }

        return this;
    };

    Hash.prototype.init = function() {
        var _this = this;
        var _hash;

        // Change hash value on after each slide transition
        _this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex, index) {
            if (history.replaceState) {
                history.replaceState(null, null, window.location.pathname + window.location.search + '#lg=' + _this.core.s.galleryId + '&slide=' + index);
            } else {
                window.location.hash = 'lg=' + _this.core.s.galleryId + '&slide=' + index;
            }
        });

        // Listen hash change and change the slide according to slide value
        $(window).on('hashchange.lg.hash', function() {
            _hash = window.location.hash;
            var _idx = parseInt(_hash.split('&slide=')[1], 10);

            // it galleryId doesn't exist in the url close the gallery
            if ((_hash.indexOf('lg=' + _this.core.s.galleryId) > -1)) {
                _this.core.slide(_idx, false, false);
            } else if (_this.core.lGalleryOn) {
                _this.core.destroy();
            }

        });
    };

    Hash.prototype.destroy = function() {

        if (!this.core.s.hash) {
            return;
        }

        // Reset to old hash value
        if (this.oldHash && this.oldHash.indexOf('lg=' + this.core.s.galleryId) < 0) {
            if (history.replaceState) {
                history.replaceState(null, null, this.oldHash);
            } else {
                window.location.hash = this.oldHash;
            }
        } else {
            if (history.replaceState) {
                history.replaceState(null, document.title, window.location.pathname + window.location.search);
            } else {
                window.location.hash = '';
            }
        }

        this.core.$el.off('.lg.hash');

    };

    $.fn.lightGallery.modules.hash = Hash;

})();


}));

/*! lg-share - v1.1.0 - 2017-10-03
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        share: true,
        facebook: true,
        facebookDropdownText: 'Facebook',
        twitter: true,
        twitterDropdownText: 'Twitter',
        googlePlus: true,
        googlePlusDropdownText: 'GooglePlus',
        pinterest: true,
        pinterestDropdownText: 'Pinterest'
    };

    var Share = function(element) {

        this.core = $(element).data('lightGallery');

        this.core.s = $.extend({}, defaults, this.core.s);
        if (this.core.s.share) {
            this.init();
        }

        return this;
    };

    Share.prototype.init = function() {
        var _this = this;
        var shareHtml = '<span id="lg-share" class="lg-icon">' +
            '<ul class="lg-dropdown" style="position: absolute;">';
        shareHtml += _this.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + '</span></a></li>' : '';
        shareHtml += _this.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + '</span></a></li>' : '';
        shareHtml += _this.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + '</span></a></li>' : '';
        shareHtml += _this.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + '</span></a></li>' : '';
        shareHtml += '</ul></span>';

        this.core.$outer.find('.lg-toolbar').append(shareHtml);
        this.core.$outer.find('.lg').append('<div id="lg-dropdown-overlay"></div>');
        $('#lg-share').on('click.lg', function(){
            _this.core.$outer.toggleClass('lg-dropdown-active');
        });

        $('#lg-dropdown-overlay').on('click.lg', function(){
            _this.core.$outer.removeClass('lg-dropdown-active');
        });

        _this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex, index) {

            setTimeout(function() {

                $('#lg-share-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + (encodeURIComponent(_this.getSahreProps(index, 'facebookShareUrl') || window.location.href)));

                $('#lg-share-twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + _this.getSahreProps(index, 'tweetText') + '&url=' + (encodeURIComponent(_this.getSahreProps(index, 'twitterShareUrl') || window.location.href)));

                $('#lg-share-googleplus').attr('href', 'https://plus.google.com/share?url=' + (encodeURIComponent(_this.getSahreProps(index, 'googleplusShareUrl') || window.location.href)));

                $('#lg-share-pinterest').attr('href', 'http://www.pinterest.com/pin/create/button/?url=' + (encodeURIComponent(_this.getSahreProps(index, 'pinterestShareUrl') || window.location.href)) + '&media=' + encodeURIComponent(_this.getSahreProps(index, 'src')) + '&description=' + _this.getSahreProps(index, 'pinterestText'));

            }, 100);
        });
    };

    Share.prototype.getSahreProps = function(index, prop){
        var shareProp = '';
        if(this.core.s.dynamic) {
            shareProp = this.core.s.dynamicEl[index][prop];
        } else {
            var _href = this.core.$items.eq(index).attr('href');
            var _prop = this.core.$items.eq(index).data(prop);
            shareProp = prop === 'src' ? _href || _prop : _prop;
        }
        return shareProp;
    };

    Share.prototype.destroy = function() {

    };

    $.fn.lightGallery.modules.share = Share;

})();



}));

$(function(){

    var startPositionSlider = 0;
    if ($('.owl-carousel-wrap').data('video')=='1') {
        startPositionSlider = 1;
    }

    if (screen.width>640) {
        $('#thumbGalleryDetai').lightGallery({
            selector: '.item',
            thumbWidth:120,
            thumbMargin: 3,
            share: false,
            download: false,
            actualSize: false,
            fullScreen: false,
            toogleThumb: false,
            autoplayControls: false
        });
    }

    var $thumbGalleryDetail = $('#thumbGalleryDetai'),
        $thumbGalleryThumbs = $('#thumbGalleryThumbs'),
        flag = false,
        duration = 300;
        lastSlideClick = 0;

    $thumbGalleryDetail
        .owlCarousel({
            items: 1,
            margin: 10,
            lazyLoad:true,
            nav: true,
            dots: false,
            loop: false,
            smartSpeed: 800,
            startPosition: startPositionSlider,
            //animateOut: 'fadeOut',
            navText: []
        })
        .on('changed.owl.carousel', function(e) {
            if (!flag) {
                flag = true;
                $thumbGalleryThumbs.trigger('to.owl.carousel', [e.item.index-1, duration, true]);
                flag = false;

                var current = e.item.index;
                $thumbGalleryThumbs
                    .find(".owl-item")
                    .removeClass("current")
                    .eq(current)
                    .addClass("current");

                var videoStream = document.querySelector('.player-wrap');
                if (videoStream) {
                    videoStream.children[0].pause();
                }
            }
        });

    function imgRectangle(width, height, item) {
        if (height>width) {
            item.addClass('rectangle');
        }
    }

    $thumbGalleryThumbs
        .on('initialized.owl.carousel', function() {
            $thumbGalleryThumbs.find(".owl-item").eq(startPositionSlider).addClass("current");
        })
        .owlCarousel({
            margin: 2,
            items: 6,
            lazyLoad:true,
            nav: false,
            center: false,
            dots: false,
            startPosition: 0,
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    item: 4
                },
                960: {
                    items: 5
                },
                1024: {
                    items: 5
                },
                1280: {
                    items: 6
                }
            },
        })
        .on('click', '.owl-item', function() {
            if ($('#thumbGalleryThumbs .owl-item').length-1 == $(this).index()) {
                lastSlideClick++;
            }
            else {
                lastSlideClick=0;
            }
            if (lastSlideClick>1) {
                $thumbGalleryDetail.trigger('to.owl.carousel', [0, duration, true]);
                lastSlideClick=0;
            }
            else {
                $thumbGalleryDetail.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            }
            var videoStream = document.querySelector('.player-wrap');
            if (videoStream) {
                videoStream.children[0].pause();
            }
            imgRectangle($(this).find('img').get(0).naturalWidth, $(this).find('img').get(0).naturalHeight, $('#thumbGalleryDetai .owl-stage > div').eq($(this).index()));
        })
        .on('changed.owl.carousel', function(e) {
            if (!flag) {
                flag = true;
                $thumbGalleryDetail.trigger('to.owl.carousel', [e.item.index, duration, true]);
                flag = false;
                var current = e.item.index;
                $thumbGalleryThumbs
                    .find(".owl-item")
                    .removeClass("current")
                    .eq(current)
                    .addClass("current");
            }
        });

    setTimeout(function () {
        imgRectangle($('#thumbGalleryDetai .active img').get(0).naturalWidth, $('#thumbGalleryDetai .active img').get(0).naturalHeight, $('#thumbGalleryDetai .active'));
    },300)


    var videoStreamSlider = document.querySelector('.player-owl-wrapper .player-wrap');
    if (videoStreamSlider) {
        $('.fullscreen-video').on('click',function(){
            $(this).addClass('hidden');
            $('#thumbGalleryDetai').addClass('active');
            videoStreamSlider.children[0].play();
            videoStreamSlider.children[0].querySelector('.vjs-fullscreen-control').click();
        });
        function pauseVideo() {
            videoStreamSlider.children[0].pause();
            $('.fullscreen-video').removeClass('hidden');
            $('#thumbGalleryDetai').removeClass('active');
        }
        videoStreamSlider.children[0].addEventListener('pause', pauseVideo);
    }

});

/*! Video.js v4.12.15 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */ 
(function() {var b=void 0,f=!0,j=null,l=!1;function m(){return function(){}}function n(a){return function(){return this[a]}}function p(a){return function(){return a}}var s;document.createElement("video");document.createElement("audio");document.createElement("track");
function t(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));if(t.Ca[a])return c&&t.log.warn('Player "'+a+'" is already initialised. Options will not be applied.'),d&&t.Ca[a].I(d),t.Ca[a];a=t.m(a)}if(!a||!a.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return a.player||new t.Player(a,c,d)}var videojs=window.videojs=t;t.fc="4.12";t.sd="https:"==document.location.protocol?"https://":"http://";t.VERSION="4.12.15";
t.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,playbackRates:[],inactivityTimeout:2E3,children:{mediaLoader:{},posterImage:{},loadingSpinner:{},textTrackDisplay:{},bigPlayButton:{},controlBar:{},errorDisplay:{},textTrackSettings:{}},language:document.getElementsByTagName("html")[0].getAttribute("lang")||navigator.languages&&navigator.languages[0]||navigator.Ef||navigator.language||"en",languages:{},notSupportedMessage:"No compatible source was found for this video."};
"GENERATED_CDN_VSN"!==t.fc&&(videojs.options.flash.swf=t.sd+"vjs.zencdn.net/"+t.fc+"/video-js.swf");t.Gd=function(a,c){t.options.languages[a]=t.options.languages[a]!==b?t.Z.Aa(t.options.languages[a],c):c;return t.options.languages};t.Ca={};"function"===typeof define&&define.amd?define("videojs",[],function(){return videojs}):"object"===typeof exports&&"object"===typeof module&&(module.exports=videojs);t.Ga=t.CoreObject=m();
t.Ga.extend=function(a){var c,d;a=a||{};c=a.init||a.l||this.prototype.init||this.prototype.l||m();d=function(){c.apply(this,arguments)};d.prototype=t.i.create(this.prototype);d.prototype.constructor=d;d.extend=t.Ga.extend;d.create=t.Ga.create;for(var e in a)a.hasOwnProperty(e)&&(d.prototype[e]=a[e]);return d};t.Ga.create=function(){var a=t.i.create(this.prototype);this.apply(a,arguments);return a};
t.b=function(a,c,d){if(t.i.isArray(c))return v(t.b,a,c,d);var e=t.getData(a);e.G||(e.G={});e.G[c]||(e.G[c]=[]);d.s||(d.s=t.s++);e.G[c].push(d);e.ba||(e.disabled=l,e.ba=function(c){if(!e.disabled){c=t.Nb(c);var d=e.G[c.type];if(d)for(var d=d.slice(0),k=0,q=d.length;k<q&&!c.Nc();k++)d[k].call(a,c)}});1==e.G[c].length&&(a.addEventListener?a.addEventListener(c,e.ba,l):a.attachEvent&&a.attachEvent("on"+c,e.ba))};
t.n=function(a,c,d){if(t.Ic(a)){var e=t.getData(a);if(e.G){if(t.i.isArray(c))return v(t.n,a,c,d);if(c){var g=e.G[c];if(g){if(d){if(d.s)for(e=0;e<g.length;e++)g[e].s===d.s&&g.splice(e--,1)}else e.G[c]=[];t.xc(a,c)}}else for(g in e.G)c=g,e.G[c]=[],t.xc(a,c)}}};t.xc=function(a,c){var d=t.getData(a);0===d.G[c].length&&(delete d.G[c],a.removeEventListener?a.removeEventListener(c,d.ba,l):a.detachEvent&&a.detachEvent("on"+c,d.ba));t.hb(d.G)&&(delete d.G,delete d.ba,delete d.disabled);t.hb(d)&&t.Zc(a)};
t.Nb=function(a){function c(){return f}function d(){return l}if(!a||!a.Sb){var e=a||window.event;a={};for(var g in e)"layerX"!==g&&("layerY"!==g&&"keyLocation"!==g)&&("returnValue"==g&&e.preventDefault||(a[g]=e[g]));a.target||(a.target=a.srcElement||document);a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;a.preventDefault=function(){e.preventDefault&&e.preventDefault();a.returnValue=l;a.ee=c;a.defaultPrevented=f};a.ee=d;a.defaultPrevented=l;a.stopPropagation=function(){e.stopPropagation&&
e.stopPropagation();a.cancelBubble=f;a.Sb=c};a.Sb=d;a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&e.stopImmediatePropagation();a.Nc=c;a.stopPropagation()};a.Nc=d;if(a.clientX!=j){g=document.documentElement;var h=document.body;a.pageX=a.clientX+(g&&g.scrollLeft||h&&h.scrollLeft||0)-(g&&g.clientLeft||h&&h.clientLeft||0);a.pageY=a.clientY+(g&&g.scrollTop||h&&h.scrollTop||0)-(g&&g.clientTop||h&&h.clientTop||0)}a.which=a.charCode||a.keyCode;a.button!=j&&(a.button=a.button&1?0:a.button&
4?1:a.button&2?2:0)}return a};t.o=function(a,c){var d=t.Ic(a)?t.getData(a):{},e=a.parentNode||a.ownerDocument;"string"===typeof c&&(c={type:c,target:a});c=t.Nb(c);d.ba&&d.ba.call(a,c);if(e&&!c.Sb()&&c.bubbles!==l)t.o(e,c);else if(!e&&!c.defaultPrevented&&(d=t.getData(c.target),c.target[c.type])){d.disabled=f;if("function"===typeof c.target[c.type])c.target[c.type]();d.disabled=l}return!c.defaultPrevented};
t.N=function(a,c,d){function e(){t.n(a,c,e);d.apply(this,arguments)}if(t.i.isArray(c))return v(t.N,a,c,d);e.s=d.s=d.s||t.s++;t.b(a,c,e)};function v(a,c,d,e){t.tc.forEach(d,function(d){a(c,d,e)})}var w=Object.prototype.hasOwnProperty;t.e=function(a,c){var d;c=c||{};d=document.createElement(a||"div");t.i.ca(c,function(a,c){-1!==a.indexOf("aria-")||"role"==a?d.setAttribute(a,c):d[a]=c});return d};t.va=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};t.i={};
t.i.create=Object.create||function(a){function c(){}c.prototype=a;return new c};t.i.ca=function(a,c,d){for(var e in a)w.call(a,e)&&c.call(d||this,e,a[e])};t.i.D=function(a,c){if(!c)return a;for(var d in c)w.call(c,d)&&(a[d]=c[d]);return a};t.i.Od=function(a,c){var d,e,g;a=t.i.copy(a);for(d in c)w.call(c,d)&&(e=a[d],g=c[d],a[d]=t.i.ib(e)&&t.i.ib(g)?t.i.Od(e,g):c[d]);return a};t.i.copy=function(a){return t.i.D({},a)};
t.i.ib=function(a){return!!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object};t.i.isArray=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};t.ge=function(a){return a!==a};t.bind=function(a,c,d){function e(){return c.apply(a,arguments)}c.s||(c.s=t.s++);e.s=d?d+"_"+c.s:c.s;return e};t.ua={};t.s=1;t.expando="vdata"+(new Date).getTime();t.getData=function(a){var c=a[t.expando];c||(c=a[t.expando]=t.s++);t.ua[c]||(t.ua[c]={});return t.ua[c]};
t.Ic=function(a){a=a[t.expando];return!(!a||t.hb(t.ua[a]))};t.Zc=function(a){var c=a[t.expando];if(c){delete t.ua[c];try{delete a[t.expando]}catch(d){a.removeAttribute?a.removeAttribute(t.expando):a[t.expando]=j}}};t.hb=function(a){for(var c in a)if(a[c]!==j)return l;return f};t.Pa=function(a,c){return-1!==(" "+a.className+" ").indexOf(" "+c+" ")};t.p=function(a,c){t.Pa(a,c)||(a.className=""===a.className?c:a.className+" "+c)};
t.r=function(a,c){var d,e;if(t.Pa(a,c)){d=a.className.split(" ");for(e=d.length-1;0<=e;e--)d[e]===c&&d.splice(e,1);a.className=d.join(" ")}};t.A=t.e("video");var x=document.createElement("track");x.Tb="captions";x.ed="en";x.label="English";t.A.appendChild(x);t.P=navigator.userAgent;t.zd=/iPhone/i.test(t.P);t.yd=/iPad/i.test(t.P);t.Ad=/iPod/i.test(t.P);t.xd=t.zd||t.yd||t.Ad;var aa=t,y;var z=t.P.match(/OS (\d+)_/i);y=z&&z[1]?z[1]:b;aa.ff=y;t.wd=/Android/i.test(t.P);var ba=t,B;
var C=t.P.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),D,E;C?(D=C[1]&&parseFloat(C[1]),E=C[2]&&parseFloat(C[2]),B=D&&E?parseFloat(C[1]+"."+C[2]):D?D:j):B=j;ba.ec=B;t.Bd=t.wd&&/webkit/i.test(t.P)&&2.3>t.ec;t.gc=/Firefox/i.test(t.P);t.gf=/Chrome/i.test(t.P);t.pa=/MSIE\s8\.0/.test(t.P);t.Db=!!("ontouchstart"in window||window.ud&&document instanceof window.ud);t.td="backgroundSize"in t.A.style;
t.ad=function(a,c){t.i.ca(c,function(c,e){e===j||"undefined"===typeof e||e===l?a.removeAttribute(c):a.setAttribute(c,e===f?"":e)})};t.Oa=function(a){var c,d,e,g;c={};if(a&&a.attributes&&0<a.attributes.length){d=a.attributes;for(var h=d.length-1;0<=h;h--){e=d[h].name;g=d[h].value;if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+","))g=g!==j?f:l;c[e]=g}}return c};
t.rf=function(a,c){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");return d};t.Rb=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)};t.bb={};t.m=function(a){0===a.indexOf("#")&&(a=a.slice(1));return document.getElementById(a)};
t.Na=function(a,c){c=c||a;var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),h=Math.floor(c/60%60),k=Math.floor(c/3600);if(isNaN(a)||Infinity===a)g=e=d="-";g=0<g||0<k?g+":":"";return g+(((g||10<=h)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)};t.Id=function(){document.body.focus();document.onselectstart=p(l)};t.Xe=function(){document.onselectstart=p(f)};t.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")};t.round=function(a,c){c||(c=0);return Math.round(a*Math.pow(10,c))/Math.pow(10,c)};
t.xa=function(a,c){return a===b&&c===b?{length:0,start:function(){throw Error("This TimeRanges object is empty");},end:function(){throw Error("This TimeRanges object is empty");}}:{length:1,start:function(){return a},end:function(){return c}}};t.Ie=function(a){try{var c=window.localStorage||l;c&&(c.volume=a)}catch(d){22==d.code||1014==d.code?t.log("LocalStorage Full (VideoJS)",d):18==d.code?t.log("LocalStorage not allowed (VideoJS)",d):t.log("LocalStorage Error (VideoJS)",d)}};
t.Xd=function(a){a.match(/^https?:\/\//)||(a=t.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);return a};
t.Ae=function(a){var c,d,e,g;g="protocol hostname port pathname search hash host".split(" ");d=t.e("a",{href:a});if(e=""===d.host&&"file:"!==d.protocol)c=t.e("div"),c.innerHTML='<a href="'+a+'"></a>',d=c.firstChild,c.setAttribute("style","display:none; position:absolute;"),document.body.appendChild(c);a={};for(var h=0;h<g.length;h++)a[g[h]]=d[g[h]];"http:"===a.protocol&&(a.host=a.host.replace(/:80$/,""));"https:"===a.protocol&&(a.host=a.host.replace(/:443$/,""));e&&document.body.removeChild(c);return a};
function F(a,c){var d,e;d=Array.prototype.slice.call(c);e=m();e=window.console||{log:e,warn:e,error:e};a?d.unshift(a.toUpperCase()+":"):a="log";t.log.history.push(d);d.unshift("VIDEOJS:");if(e[a].apply)e[a].apply(e,d);else e[a](d.join(" "))}t.log=function(){F(j,arguments)};t.log.history=[];t.log.error=function(){F("error",arguments)};t.log.warn=function(){F("warn",arguments)};
t.Vd=function(a){var c,d;a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());if(!c)return{left:0,top:0};a=document.documentElement;d=document.body;return{left:t.round(c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0)),top:t.round(c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0))}};t.tc={};t.tc.forEach=function(a,c,d){if(t.i.isArray(a)&&c instanceof Function)for(var e=0,g=a.length;e<g;++e)c.call(d||t,a[e],e,a);return a};
t.bf=function(a,c){var d,e,g,h,k,q,r;"string"===typeof a&&(a={uri:a});videojs.Z.Aa({method:"GET",timeout:45E3},a);c=c||m();q=function(){window.clearTimeout(k);c(j,e,e.response||e.responseText)};r=function(a){window.clearTimeout(k);if(!a||"string"===typeof a)a=Error(a);c(a,e)};d=window.XMLHttpRequest;"undefined"===typeof d&&(d=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");
});e=new d;e.uri=a.uri;d=t.Ae(a.uri);g=window.location;d.protocol+d.host!==g.protocol+g.host&&window.XDomainRequest&&!("withCredentials"in e)?(e=new window.XDomainRequest,e.onload=q,e.onerror=r,e.onprogress=m(),e.ontimeout=m()):(h="file:"==d.protocol||"file:"==g.protocol,e.onreadystatechange=function(){if(4===e.readyState){if(e.Ue)return r("timeout");200===e.status||h&&0===e.status?q():r()}},a.timeout&&(k=window.setTimeout(function(){4!==e.readyState&&(e.Ue=f,e.abort())},a.timeout)));try{e.open(a.method||
"GET",a.uri,f)}catch(u){r(u);return}a.withCredentials&&(e.withCredentials=f);a.responseType&&(e.responseType=a.responseType);try{e.send()}catch(A){r(A)}};t.Z={};t.Z.Aa=function(a,c){var d,e,g;a=t.i.copy(a);for(d in c)c.hasOwnProperty(d)&&(e=a[d],g=c[d],a[d]=t.i.ib(e)&&t.i.ib(g)?t.Z.Aa(e,g):c[d]);return a};t.z=m();s=t.z.prototype;s.ab={};s.b=function(a,c){var d=this.addEventListener;this.addEventListener=Function.prototype;t.b(this,a,c);this.addEventListener=d};s.addEventListener=t.z.prototype.b;
s.n=function(a,c){t.n(this,a,c)};s.removeEventListener=t.z.prototype.n;s.N=function(a,c){t.N(this,a,c)};s.o=function(a){var c=a.type||a;"string"===typeof a&&(a={type:c});a=t.Nb(a);if(this.ab[c]&&this["on"+c])this["on"+c](a);t.o(this,a)};s.dispatchEvent=t.z.prototype.o;
t.a=t.Ga.extend({l:function(a,c,d){this.d=a;this.q=t.i.copy(this.q);c=this.options(c);this.Qa=c.id||c.el&&c.el.id;this.Qa||(this.Qa=(a.id&&a.id()||"no_player")+"_component_"+t.s++);this.pe=c.name||j;this.c=c.el||this.e();this.R=[];this.cb={};this.eb={};this.Kc();this.I(d);if(c.$c!==l){var e,g;this.k().reportUserActivity&&(e=t.bind(this.k(),this.k().reportUserActivity),this.b("touchstart",function(){e();this.clearInterval(g);g=this.setInterval(e,250)}),a=function(){e();this.clearInterval(g)},this.b("touchmove",
e),this.b("touchend",a),this.b("touchcancel",a))}}});s=t.a.prototype;s.dispose=function(){this.o({type:"dispose",bubbles:l});if(this.R)for(var a=this.R.length-1;0<=a;a--)this.R[a].dispose&&this.R[a].dispose();this.eb=this.cb=this.R=j;this.n();this.c.parentNode&&this.c.parentNode.removeChild(this.c);t.Zc(this.c);this.c=j};s.d=f;s.k=n("d");s.options=function(a){return a===b?this.q:this.q=t.Z.Aa(this.q,a)};s.e=function(a,c){return t.e(a,c)};
s.v=function(a){var c=this.d.language(),d=this.d.languages();return d&&d[c]&&d[c][a]?d[c][a]:a};s.m=n("c");s.wa=function(){return this.B||this.c};s.id=n("Qa");s.name=n("pe");s.children=n("R");s.Yd=function(a){return this.cb[a]};s.da=function(a){return this.eb[a]};
s.aa=function(a,c){var d,e;"string"===typeof a?(e=a,c=c||{},d=c.componentClass||t.va(e),c.name=e,d=new window.videojs[d](this.d||this,c)):d=a;this.R.push(d);"function"===typeof d.id&&(this.cb[d.id()]=d);(e=e||d.name&&d.name())&&(this.eb[e]=d);"function"===typeof d.el&&d.el()&&this.wa().appendChild(d.el());return d};
s.removeChild=function(a){"string"===typeof a&&(a=this.da(a));if(a&&this.R){for(var c=l,d=this.R.length-1;0<=d;d--)if(this.R[d]===a){c=f;this.R.splice(d,1);break}c&&(this.cb[a.id()]=j,this.eb[a.name()]=j,(c=a.m())&&c.parentNode===this.wa()&&this.wa().removeChild(a.m()))}};
s.Kc=function(){var a,c,d,e,g,h;a=this;c=a.options();if(d=c.children)if(h=function(d,e){c[d]!==b&&(e=c[d]);e!==l&&(a[d]=a.aa(d,e))},t.i.isArray(d))for(var k=0;k<d.length;k++)e=d[k],"string"==typeof e?(g=e,e={}):g=e.name,h(g,e);else t.i.ca(d,h)};s.T=p("");
s.b=function(a,c,d){var e,g,h;"string"===typeof a||t.i.isArray(a)?t.b(this.c,a,t.bind(this,c)):(e=t.bind(this,d),h=this,g=function(){h.n(a,c,e)},g.s=e.s,this.b("dispose",g),d=function(){h.n("dispose",g)},d.s=e.s,a.nodeName?(t.b(a,c,e),t.b(a,"dispose",d)):"function"===typeof a.b&&(a.b(c,e),a.b("dispose",d)));return this};
s.n=function(a,c,d){!a||"string"===typeof a||t.i.isArray(a)?t.n(this.c,a,c):(d=t.bind(this,d),this.n("dispose",d),a.nodeName?(t.n(a,c,d),t.n(a,"dispose",d)):(a.n(c,d),a.n("dispose",d)));return this};s.N=function(a,c,d){var e,g,h;"string"===typeof a||t.i.isArray(a)?t.N(this.c,a,t.bind(this,c)):(e=t.bind(this,d),g=this,h=function(){g.n(a,c,h);e.apply(this,arguments)},h.s=e.s,this.b(a,c,h));return this};s.o=function(a){t.o(this.c,a);return this};
s.I=function(a){a&&(this.ya?a.call(this):(this.mb===b&&(this.mb=[]),this.mb.push(a)));return this};s.Va=function(){this.ya=f;var a=this.mb;this.mb=[];if(a&&0<a.length){for(var c=0,d=a.length;c<d;c++)a[c].call(this);this.o("ready")}};s.Pa=function(a){return t.Pa(this.c,a)};s.p=function(a){t.p(this.c,a);return this};s.r=function(a){t.r(this.c,a);return this};s.show=function(){this.r("vjs-hidden");return this};s.W=function(){this.p("vjs-hidden");return this};function G(a){a.r("vjs-lock-showing")}
s.width=function(a,c){return ca(this,"width",a,c)};s.height=function(a,c){return ca(this,"height",a,c)};s.Qd=function(a,c){return this.width(a,f).height(c)};function ca(a,c,d,e){if(d!==b){if(d===j||t.ge(d))d=0;a.c.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px";e||a.o("resize");return a}if(!a.c)return 0;d=a.c.style[c];e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(a.c["offset"+t.va(c)],10)}
function da(a){var c,d,e,g,h,k,q,r;c=0;d=j;a.b("touchstart",function(a){1===a.touches.length&&(d=t.i.copy(a.touches[0]),c=(new Date).getTime(),g=f)});a.b("touchmove",function(a){1<a.touches.length?g=l:d&&(k=a.touches[0].pageX-d.pageX,q=a.touches[0].pageY-d.pageY,r=Math.sqrt(k*k+q*q),10<r&&(g=l))});h=function(){g=l};a.b("touchleave",h);a.b("touchcancel",h);a.b("touchend",function(a){d=j;g===f&&(e=(new Date).getTime()-c,200>e&&(a.preventDefault(),this.o("tap")))})}
s.setTimeout=function(a,c){function d(){this.clearTimeout(e)}a=t.bind(this,a);var e=setTimeout(a,c);d.s="vjs-timeout-"+e;this.b("dispose",d);return e};s.clearTimeout=function(a){function c(){}clearTimeout(a);c.s="vjs-timeout-"+a;this.n("dispose",c);return a};s.setInterval=function(a,c){function d(){this.clearInterval(e)}a=t.bind(this,a);var e=setInterval(a,c);d.s="vjs-interval-"+e;this.b("dispose",d);return e};
s.clearInterval=function(a){function c(){}clearInterval(a);c.s="vjs-interval-"+a;this.n("dispose",c);return a};t.w=t.a.extend({l:function(a,c){t.a.call(this,a,c);da(this);this.b("tap",this.u);this.b("click",this.u);this.b("focus",this.kb);this.b("blur",this.jb)}});s=t.w.prototype;
s.e=function(a,c){var d;c=t.i.D({className:this.T(),role:"button","aria-live":"polite",tabIndex:0},c);d=t.a.prototype.e.call(this,a,c);c.innerHTML||(this.B=t.e("div",{className:"vjs-control-content"}),this.Ib=t.e("span",{className:"vjs-control-text",innerHTML:this.v(this.ta)||"Need Text"}),this.B.appendChild(this.Ib),d.appendChild(this.B));return d};s.T=function(){return"vjs-control "+t.a.prototype.T.call(this)};s.u=m();s.kb=function(){t.b(document,"keydown",t.bind(this,this.ka))};
s.ka=function(a){if(32==a.which||13==a.which)a.preventDefault(),this.u()};s.jb=function(){t.n(document,"keydown",t.bind(this,this.ka))};t.S=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.Hd=this.da(this.q.barName);this.handle=this.da(this.q.handleName);this.b("mousedown",this.lb);this.b("touchstart",this.lb);this.b("focus",this.kb);this.b("blur",this.jb);this.b("click",this.u);this.b(a,"controlsvisible",this.update);this.b(a,this.Uc,this.update)}});s=t.S.prototype;
s.e=function(a,c){c=c||{};c.className+=" vjs-slider";c=t.i.D({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);return t.a.prototype.e.call(this,a,c)};s.lb=function(a){a.preventDefault();t.Id();this.p("vjs-sliding");this.b(document,"mousemove",this.la);this.b(document,"mouseup",this.Ba);this.b(document,"touchmove",this.la);this.b(document,"touchend",this.Ba);this.la(a)};s.la=m();
s.Ba=function(){t.Xe();this.r("vjs-sliding");this.n(document,"mousemove",this.la);this.n(document,"mouseup",this.Ba);this.n(document,"touchmove",this.la);this.n(document,"touchend",this.Ba);this.update()};s.update=function(){if(this.c){var a,c=this.Qb(),d=this.handle,e=this.Hd;if("number"!==typeof c||c!==c||0>c||Infinity===c)c=0;a=c;if(d){a=this.c.offsetWidth;var g=d.m().offsetWidth;a=g?g/a:0;c*=1-a;a=c+a/2;d.m().style.left=t.round(100*c,2)+"%"}e&&(e.m().style.width=t.round(100*a,2)+"%")}};
function ea(a,c){var d,e,g,h;d=a.c;e=t.Vd(d);h=g=d.offsetWidth;d=a.handle;if(a.options().vertical)return h=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.m().offsetHeight,h+=d/2,g-=d),Math.max(0,Math.min(1,(h-e+g)/g));g=e.left;e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;d&&(d=d.m().offsetWidth,g+=d/2,h-=d);return Math.max(0,Math.min(1,(e-g)/h))}s.kb=function(){this.b(document,"keydown",this.ka)};
s.ka=function(a){if(37==a.which||40==a.which)a.preventDefault(),this.fd();else if(38==a.which||39==a.which)a.preventDefault(),this.gd()};s.jb=function(){this.n(document,"keydown",this.ka)};s.u=function(a){a.stopImmediatePropagation();a.preventDefault()};t.ga=t.a.extend();t.ga.prototype.defaultValue=0;t.ga.prototype.e=function(a,c){c=c||{};c.className+=" vjs-slider-handle";c=t.i.D({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);return t.a.prototype.e.call(this,"div",c)};
t.qa=t.a.extend();function fa(a,c){a.aa(c);c.b("click",t.bind(a,function(){G(this)}))}t.qa.prototype.e=function(){var a=this.options().zc||"ul";this.B=t.e(a,{className:"vjs-menu-content"});a=t.a.prototype.e.call(this,"div",{append:this.B,className:"vjs-menu"});a.appendChild(this.B);t.b(a,"click",function(a){a.preventDefault();a.stopImmediatePropagation()});return a};t.M=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.selected(c.selected)}});
t.M.prototype.e=function(a,c){return t.w.prototype.e.call(this,"li",t.i.D({className:"vjs-menu-item",innerHTML:this.v(this.q.label)},c))};t.M.prototype.u=function(){this.selected(f)};t.M.prototype.selected=function(a){a?(this.p("vjs-selected"),this.c.setAttribute("aria-selected",f)):(this.r("vjs-selected"),this.c.setAttribute("aria-selected",l))};
t.O=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.update();this.b("keydown",this.ka);this.c.setAttribute("aria-haspopup",f);this.c.setAttribute("role","button")}});s=t.O.prototype;s.update=function(){var a=this.La();this.za&&this.removeChild(this.za);this.za=a;this.aa(a);this.H&&0===this.H.length?this.W():this.H&&1<this.H.length&&this.show()};s.Ja=l;
s.La=function(){var a=new t.qa(this.d);this.options().title&&a.wa().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.va(this.options().title),Se:-1}));if(this.H=this.createItems())for(var c=0;c<this.H.length;c++)fa(a,this.H[c]);return a};s.Ka=m();s.T=function(){return this.className+" vjs-menu-button "+t.w.prototype.T.call(this)};s.kb=m();s.jb=m();s.u=function(){this.N("mouseout",t.bind(this,function(){G(this.za);this.c.blur()}));this.Ja?H(this):ga(this)};
s.ka=function(a){32==a.which||13==a.which?(this.Ja?H(this):ga(this),a.preventDefault()):27==a.which&&(this.Ja&&H(this),a.preventDefault())};function ga(a){a.Ja=f;a.za.p("vjs-lock-showing");a.c.setAttribute("aria-pressed",f);a.H&&0<a.H.length&&a.H[0].m().focus()}function H(a){a.Ja=l;G(a.za);a.c.setAttribute("aria-pressed",l)}t.J=function(a){"number"===typeof a?this.code=a:"string"===typeof a?this.message=a:"object"===typeof a&&t.i.D(this,a);this.message||(this.message=t.J.Pd[this.code]||"")};
t.J.prototype.code=0;t.J.prototype.message="";t.J.prototype.status=j;t.J.gb="MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" ");
t.J.Pd={1:"You aborted the video playback",2:"A network error caused the video download to fail part-way.",3:"The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",4:"The video could not be loaded, either because the server or network failed or because the format is not supported.",5:"The video is encrypted and we do not have the keys to decrypt it."};for(var I=0;I<t.J.gb.length;I++)t.J[t.J.gb[I]]=I,t.J.prototype[t.J.gb[I]]=I;
var J,ha,K,L;
J=["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "),"webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),"webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),"mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "),"msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")];
ha=J[0];for(L=0;L<J.length;L++)if(J[L][1]in document){K=J[L];break}if(K){t.bb.Pb={};for(L=0;L<K.length;L++)t.bb.Pb[ha[L]]=K[L]}
t.Player=t.a.extend({l:function(a,c,d){this.L=a;a.id=a.id||"vjs_video_"+t.s++;this.Te=a&&t.Oa(a);c=t.i.D(ia(a),c);this.Pc=c.language||t.options.language;this.je=c.languages||t.options.languages;this.K={};this.Vc=c.poster||"";this.Jb=!!c.controls;a.controls=l;c.$c=l;ja(this,"audio"===this.L.nodeName.toLowerCase());t.a.call(this,this,c,d);this.controls()?this.p("vjs-controls-enabled"):this.p("vjs-controls-disabled");ja(this)&&this.p("vjs-audio");t.Ca[this.Qa]=this;c.plugins&&t.i.ca(c.plugins,function(a,
c){this[a](c)},this);var e,g,h,k,q;e=t.bind(this,this.reportUserActivity);this.b("mousedown",function(){e();this.clearInterval(g);g=this.setInterval(e,250)});this.b("mousemove",function(a){if(a.screenX!=k||a.screenY!=q)k=a.screenX,q=a.screenY,e()});this.b("mouseup",function(){e();this.clearInterval(g)});this.b("keydown",e);this.b("keyup",e);this.setInterval(function(){if(this.Fa){this.Fa=l;this.userActive(f);this.clearTimeout(h);var a=this.options().inactivityTimeout;0<a&&(h=this.setTimeout(function(){this.Fa||
this.userActive(l)},a))}},250)}});s=t.Player.prototype;s.language=function(a){if(a===b)return this.Pc;this.Pc=a;return this};s.languages=n("je");s.q=t.options;s.dispose=function(){this.o("dispose");this.n("dispose");t.Ca[this.Qa]=j;this.L&&this.L.player&&(this.L.player=j);this.c&&this.c.player&&(this.c.player=j);this.h&&this.h.dispose();t.a.prototype.dispose.call(this)};
function ia(a){var c,d,e={sources:[],tracks:[]};c=t.Oa(a);d=c["data-setup"];d!==j&&t.i.D(c,t.JSON.parse(d||"{}"));t.i.D(e,c);if(a.hasChildNodes()){var g,h;a=a.childNodes;g=0;for(h=a.length;g<h;g++)c=a[g],d=c.nodeName.toLowerCase(),"source"===d?e.sources.push(t.Oa(c)):"track"===d&&e.tracks.push(t.Oa(c))}return e}
s.e=function(){var a=this.c=t.a.prototype.e.call(this,"div"),c=this.L,d;c.removeAttribute("width");c.removeAttribute("height");d=t.Oa(c);t.i.ca(d,function(c){"class"==c?a.className=d[c]:a.setAttribute(c,d[c])});c.id+="_html5_api";c.className="vjs-tech";c.player=a.player=this;this.p("vjs-paused");this.width(this.q.width,f);this.height(this.q.height,f);c.ce=c.networkState;c.parentNode&&c.parentNode.insertBefore(a,c);t.Rb(c,a);this.c=a;this.b("loadstart",this.te);this.b("waiting",this.ze);this.b(["canplay",
"canplaythrough","playing","ended"],this.ye);this.b("seeking",this.we);this.b("seeked",this.ve);this.b("ended",this.qe);this.b("play",this.Xb);this.b("firstplay",this.re);this.b("pause",this.Wb);this.b("progress",this.ue);this.b("durationchange",this.Sc);this.b("fullscreenchange",this.se);return a};
function ka(a,c,d){a.h&&(a.ya=l,a.h.dispose(),a.h=l);"Html5"!==c&&a.L&&(t.f.Kb(a.L),a.L=j);a.Ta=c;a.ya=l;var e=t.i.D({source:d,parentEl:a.c},a.q[c.toLowerCase()]);d&&(a.Cc=d.type,d.src==a.K.src&&0<a.K.currentTime&&(e.startTime=a.K.currentTime),a.K.src=d.src);a.h=new window.videojs[c](a,e);a.h.I(function(){this.d.Va()})}s.te=function(){this.r("vjs-ended");this.error(j);this.paused()?la(this,l):this.o("firstplay")};s.Jc=l;
function la(a,c){c!==b&&a.Jc!==c&&((a.Jc=c)?(a.p("vjs-has-started"),a.o("firstplay")):a.r("vjs-has-started"))}s.Xb=function(){this.r("vjs-ended");this.r("vjs-paused");this.p("vjs-playing");la(this,f)};s.ze=function(){this.p("vjs-waiting")};s.ye=function(){this.r("vjs-waiting")};s.we=function(){this.p("vjs-seeking")};s.ve=function(){this.r("vjs-seeking")};s.re=function(){this.q.starttime&&this.currentTime(this.q.starttime);this.p("vjs-has-started")};s.Wb=function(){this.r("vjs-playing");this.p("vjs-paused")};
s.ue=function(){1==this.bufferedPercent()&&this.o("loadedalldata")};s.qe=function(){this.p("vjs-ended");this.q.loop?(this.currentTime(0),this.play()):this.paused()||this.pause()};s.Sc=function(){var a=M(this,"duration");a&&(0>a&&(a=Infinity),this.duration(a),Infinity===a?this.p("vjs-live"):this.r("vjs-live"))};s.se=function(){this.isFullscreen()?this.p("vjs-fullscreen"):this.r("vjs-fullscreen")};
function N(a,c,d){if(a.h&&!a.h.ya)a.h.I(function(){this[c](d)});else try{a.h[c](d)}catch(e){throw t.log(e),e;}}function M(a,c){if(a.h&&a.h.ya)try{return a.h[c]()}catch(d){throw a.h[c]===b?t.log("Video.js: "+c+" method not defined for "+a.Ta+" playback technology.",d):"TypeError"==d.name?(t.log("Video.js: "+c+" unavailable on "+a.Ta+" playback technology element.",d),a.h.ya=l):t.log(d),d;}}s.play=function(){N(this,"play");return this};s.pause=function(){N(this,"pause");return this};
s.paused=function(){return M(this,"paused")===l?l:f};s.currentTime=function(a){return a!==b?(N(this,"setCurrentTime",a),this):this.K.currentTime=M(this,"currentTime")||0};s.duration=function(a){if(a!==b)return this.K.duration=parseFloat(a),this;this.K.duration===b&&this.Sc();return this.K.duration||0};s.remainingTime=function(){return this.duration()-this.currentTime()};s.buffered=function(){var a=M(this,"buffered");if(!a||!a.length)a=t.xa(0,0);return a};
s.bufferedPercent=function(){var a=this.duration(),c=this.buffered(),d=0,e,g;if(!a)return 0;for(var h=0;h<c.length;h++)e=c.start(h),g=c.end(h),g>a&&(g=a),d+=g-e;return d/a};s.volume=function(a){if(a!==b)return a=Math.max(0,Math.min(1,parseFloat(a))),this.K.volume=a,N(this,"setVolume",a),t.Ie(a),this;a=parseFloat(M(this,"volume"));return isNaN(a)?1:a};s.muted=function(a){return a!==b?(N(this,"setMuted",a),this):M(this,"muted")||l};s.Sa=function(){return M(this,"supportsFullScreen")||l};s.Mc=l;
s.isFullscreen=function(a){return a!==b?(this.Mc=!!a,this):this.Mc};s.isFullScreen=function(a){t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")');return this.isFullscreen(a)};
s.requestFullscreen=function(){var a=t.bb.Pb;this.isFullscreen(f);a?(t.b(document,a.fullscreenchange,t.bind(this,function(c){this.isFullscreen(document[a.fullscreenElement]);this.isFullscreen()===l&&t.n(document,a.fullscreenchange,arguments.callee);this.o("fullscreenchange")})),this.c[a.requestFullscreen]()):this.h.Sa()?N(this,"enterFullScreen"):(this.Fc(),this.o("fullscreenchange"));return this};
s.requestFullScreen=function(){t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")');return this.requestFullscreen()};s.exitFullscreen=function(){var a=t.bb.Pb;this.isFullscreen(l);if(a)document[a.exitFullscreen]();else this.h.Sa()?N(this,"exitFullScreen"):(this.Lb(),this.o("fullscreenchange"));return this};s.cancelFullScreen=function(){t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()");return this.exitFullscreen()};
s.Fc=function(){this.fe=f;this.Rd=document.documentElement.style.overflow;t.b(document,"keydown",t.bind(this,this.Gc));document.documentElement.style.overflow="hidden";t.p(document.body,"vjs-full-window");this.o("enterFullWindow")};s.Gc=function(a){27===a.keyCode&&(this.isFullscreen()===f?this.exitFullscreen():this.Lb())};s.Lb=function(){this.fe=l;t.n(document,"keydown",this.Gc);document.documentElement.style.overflow=this.Rd;t.r(document.body,"vjs-full-window");this.o("exitFullWindow")};
s.selectSource=function(a){for(var c=0,d=this.q.techOrder;c<d.length;c++){var e=t.va(d[c]),g=window.videojs[e];if(g){if(g.isSupported())for(var h=0,k=a;h<k.length;h++){var q=k[h];if(g.canPlaySource(q))return{source:q,h:e}}}else t.log.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.')}return l};
s.src=function(a){if(a===b)return M(this,"src");t.i.isArray(a)?ma(this,a):"string"===typeof a?this.src({src:a}):a instanceof Object&&(a.type&&!window.videojs[this.Ta].canPlaySource(a)?ma(this,[a]):(this.K.src=a.src,this.Cc=a.type||"",this.I(function(){window.videojs[this.Ta].prototype.hasOwnProperty("setSource")?N(this,"setSource",a):N(this,"src",a.src);"auto"==this.q.preload&&this.load();this.q.autoplay&&this.play()})));return this};
function ma(a,c){var d=a.selectSource(c);d?d.h===a.Ta?a.src(d.source):ka(a,d.h,d.source):(a.setTimeout(function(){this.error({code:4,message:this.v(this.options().notSupportedMessage)})},0),a.Va())}s.load=function(){N(this,"load");return this};s.currentSrc=function(){return M(this,"currentSrc")||this.K.src||""};s.Nd=function(){return this.Cc||""};s.Ra=function(a){return a!==b?(N(this,"setPreload",a),this.q.preload=a,this):M(this,"preload")};
s.autoplay=function(a){return a!==b?(N(this,"setAutoplay",a),this.q.autoplay=a,this):M(this,"autoplay")};s.loop=function(a){return a!==b?(N(this,"setLoop",a),this.q.loop=a,this):M(this,"loop")};s.poster=function(a){if(a===b)return this.Vc;a||(a="");this.Vc=a;N(this,"setPoster",a);this.o("posterchange");return this};
s.controls=function(a){return a!==b?(a=!!a,this.Jb!==a&&((this.Jb=a)?(this.r("vjs-controls-disabled"),this.p("vjs-controls-enabled"),this.o("controlsenabled")):(this.r("vjs-controls-enabled"),this.p("vjs-controls-disabled"),this.o("controlsdisabled"))),this):this.Jb};t.Player.prototype.bc;s=t.Player.prototype;
s.usingNativeControls=function(a){return a!==b?(a=!!a,this.bc!==a&&((this.bc=a)?(this.p("vjs-using-native-controls"),this.o("usingnativecontrols")):(this.r("vjs-using-native-controls"),this.o("usingcustomcontrols"))),this):this.bc};s.ja=j;s.error=function(a){if(a===b)return this.ja;if(a===j)return this.ja=a,this.r("vjs-error"),this;this.ja=a instanceof t.J?a:new t.J(a);this.o("error");this.p("vjs-error");t.log.error("(CODE:"+this.ja.code+" "+t.J.gb[this.ja.code]+")",this.ja.message,this.ja);return this};
s.ended=function(){return M(this,"ended")};s.seeking=function(){return M(this,"seeking")};s.seekable=function(){return M(this,"seekable")};s.Fa=f;s.reportUserActivity=function(){this.Fa=f};s.ac=f;
s.userActive=function(a){return a!==b?(a=!!a,a!==this.ac&&((this.ac=a)?(this.Fa=f,this.r("vjs-user-inactive"),this.p("vjs-user-active"),this.o("useractive")):(this.Fa=l,this.h&&this.h.N("mousemove",function(a){a.stopPropagation();a.preventDefault()}),this.r("vjs-user-active"),this.p("vjs-user-inactive"),this.o("userinactive"))),this):this.ac};s.playbackRate=function(a){return a!==b?(N(this,"setPlaybackRate",a),this):this.h&&this.h.featuresPlaybackRate?M(this,"playbackRate"):1};s.Lc=l;
function ja(a,c){return c!==b?(a.Lc=!!c,a):a.Lc}s.networkState=function(){return M(this,"networkState")};s.readyState=function(){return M(this,"readyState")};s.textTracks=function(){return this.h&&this.h.textTracks()};s.X=function(){return this.h&&this.h.remoteTextTracks()};s.addTextTrack=function(a,c,d){return this.h&&this.h.addTextTrack(a,c,d)};s.ha=function(a){return this.h&&this.h.addRemoteTextTrack(a)};s.Da=function(a){this.h&&this.h.removeRemoteTextTrack(a)};t.tb=t.a.extend();
t.tb.prototype.q={sf:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},liveDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{},playbackRateMenuButton:{},subtitlesButton:{},captionsButton:{},chaptersButton:{}}};t.tb.prototype.e=function(){return t.e("div",{className:"vjs-control-bar"})};t.hc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});
t.hc.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-live-controls vjs-control"});this.B=t.e("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.v("Stream Type")+"</span>"+this.v("LIVE"),"aria-live":"off"});a.appendChild(this.B);return a};t.kc=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.b(a,"play",this.Xb);this.b(a,"pause",this.Wb)}});s=t.kc.prototype;s.ta="Play";s.T=function(){return"vjs-play-control "+t.w.prototype.T.call(this)};
s.u=function(){this.d.paused()?this.d.play():this.d.pause()};s.Xb=function(){this.r("vjs-paused");this.p("vjs-playing");this.c.children[0].children[0].innerHTML=this.v("Pause")};s.Wb=function(){this.r("vjs-playing");this.p("vjs-paused");this.c.children[0].children[0].innerHTML=this.v("Play")};t.ub=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.b(a,"timeupdate",this.fa)}});
t.ub.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.B=t.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});a.appendChild(this.B);return a};t.ub.prototype.fa=function(){var a=this.d.nb?this.d.K.currentTime:this.d.currentTime();this.B.innerHTML='<span class="vjs-control-text">'+this.v("Current Time")+"</span> "+t.Na(a,this.d.duration())};
t.vb=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.b(a,"timeupdate",this.fa);this.b(a,"loadedmetadata",this.fa)}});t.vb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.B=t.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">'+this.v("Duration Time")+"</span> 0:00","aria-live":"off"});a.appendChild(this.B);return a};
t.vb.prototype.fa=function(){var a=this.d.duration();a&&(this.B.innerHTML='<span class="vjs-control-text">'+this.v("Duration Time")+"</span> "+t.Na(a))};t.qc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});t.qc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};t.Cb=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.b(a,"timeupdate",this.fa)}});
t.Cb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.B=t.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">'+this.v("Remaining Time")+"</span> -0:00","aria-live":"off"});a.appendChild(this.B);return a};t.Cb.prototype.fa=function(){this.d.duration()&&(this.B.innerHTML='<span class="vjs-control-text">'+this.v("Remaining Time")+"</span> -"+t.Na(this.d.remainingTime()))};
t.Ya=t.w.extend({l:function(a,c){t.w.call(this,a,c)}});t.Ya.prototype.ta="Fullscreen";t.Ya.prototype.T=function(){return"vjs-fullscreen-control "+t.w.prototype.T.call(this)};t.Ya.prototype.u=function(){this.d.isFullscreen()?(this.d.exitFullscreen(),this.Ib.innerHTML=this.v("Fullscreen")):(this.d.requestFullscreen(),this.Ib.innerHTML=this.v("Non-Fullscreen"))};t.Bb=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});t.Bb.prototype.q={children:{seekBar:{}}};
t.Bb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};t.nc=t.S.extend({l:function(a,c){t.S.call(this,a,c);this.b(a,"timeupdate",this.Ea);a.I(t.bind(this,this.Ea))}});s=t.nc.prototype;s.q={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};s.Uc="timeupdate";s.e=function(){return t.S.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};
s.Ea=function(){var a=this.d.nb?this.d.K.currentTime:this.d.currentTime();this.c.setAttribute("aria-valuenow",t.round(100*this.Qb(),2));this.c.setAttribute("aria-valuetext",t.Na(a,this.d.duration()))};s.Qb=function(){return this.d.currentTime()/this.d.duration()};s.lb=function(a){t.S.prototype.lb.call(this,a);this.d.nb=f;this.d.p("vjs-scrubbing");this.$e=!this.d.paused();this.d.pause()};s.la=function(a){a=ea(this,a)*this.d.duration();a==this.d.duration()&&(a-=0.1);this.d.currentTime(a)};
s.Ba=function(a){t.S.prototype.Ba.call(this,a);this.d.nb=l;this.d.r("vjs-scrubbing");this.$e&&this.d.play()};s.gd=function(){this.d.currentTime(this.d.currentTime()+5)};s.fd=function(){this.d.currentTime(this.d.currentTime()-5)};t.yb=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.b(a,"progress",this.update)}});t.yb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.v("Loaded")+"</span>: 0%</span>"})};
t.yb.prototype.update=function(){var a,c,d,e,g=this.d.buffered();a=this.d.duration();var h,k=this.d;h=k.buffered();k=k.duration();h=h.end(h.length-1);h>k&&(h=k);k=this.c.children;this.c.style.width=100*(h/a||0)+"%";for(a=0;a<g.length;a++)c=g.start(a),d=g.end(a),(e=k[a])||(e=this.c.appendChild(t.e())),e.style.left=100*(c/h||0)+"%",e.style.width=100*((d-c)/h||0)+"%";for(a=k.length;a>g.length;a--)this.c.removeChild(k[a-1])};t.jc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});
t.jc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.v("Progress")+"</span>: 0%</span>"})};t.Za=t.ga.extend({l:function(a,c){t.ga.call(this,a,c);this.b(a,"timeupdate",this.fa)}});t.Za.prototype.defaultValue="00:00";t.Za.prototype.e=function(){return t.ga.prototype.e.call(this,"div",{className:"vjs-seek-handle","aria-live":"off"})};
t.Za.prototype.fa=function(){var a=this.d.nb?this.d.K.currentTime:this.d.currentTime();this.c.innerHTML='<span class="vjs-control-text">'+t.Na(a,this.d.duration())+"</span>"};t.Fb=t.a.extend({l:function(a,c){t.a.call(this,a,c);a.h&&a.h.featuresVolumeControl===l&&this.p("vjs-hidden");this.b(a,"loadstart",function(){a.h.featuresVolumeControl===l?this.p("vjs-hidden"):this.r("vjs-hidden")})}});t.Fb.prototype.q={children:{volumeBar:{}}};
t.Fb.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};t.Eb=t.S.extend({l:function(a,c){t.S.call(this,a,c);this.b(a,"volumechange",this.Ea);a.I(t.bind(this,this.Ea))}});s=t.Eb.prototype;s.Ea=function(){this.c.setAttribute("aria-valuenow",t.round(100*this.d.volume(),2));this.c.setAttribute("aria-valuetext",t.round(100*this.d.volume(),2)+"%")};s.q={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};
s.Uc="volumechange";s.e=function(){return t.S.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};s.la=function(a){this.d.muted()&&this.d.muted(l);this.d.volume(ea(this,a))};s.Qb=function(){return this.d.muted()?0:this.d.volume()};s.gd=function(){this.d.volume(this.d.volume()+0.1)};s.fd=function(){this.d.volume(this.d.volume()-0.1)};t.rc=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});
t.rc.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};t.Gb=t.ga.extend();t.Gb.prototype.defaultValue="00:00";t.Gb.prototype.e=function(){return t.ga.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};
t.ra=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.b(a,"volumechange",this.update);a.h&&a.h.featuresVolumeControl===l&&this.p("vjs-hidden");this.b(a,"loadstart",function(){a.h.featuresVolumeControl===l?this.p("vjs-hidden"):this.r("vjs-hidden")})}});t.ra.prototype.e=function(){return t.w.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.v("Mute")+"</span></div>"})};
t.ra.prototype.u=function(){this.d.muted(this.d.muted()?l:f)};t.ra.prototype.update=function(){var a=this.d.volume(),c=3;0===a||this.d.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);this.d.muted()?this.c.children[0].children[0].innerHTML!=this.v("Unmute")&&(this.c.children[0].children[0].innerHTML=this.v("Unmute")):this.c.children[0].children[0].innerHTML!=this.v("Mute")&&(this.c.children[0].children[0].innerHTML=this.v("Mute"));for(a=0;4>a;a++)t.r(this.c,"vjs-vol-"+a);t.p(this.c,"vjs-vol-"+c)};
t.Ha=t.O.extend({l:function(a,c){t.O.call(this,a,c);this.b(a,"volumechange",this.af);a.h&&a.h.featuresVolumeControl===l&&this.p("vjs-hidden");this.b(a,"loadstart",function(){a.h.featuresVolumeControl===l?this.p("vjs-hidden"):this.r("vjs-hidden")});this.p("vjs-menu-button")}});t.Ha.prototype.La=function(){var a=new t.qa(this.d,{zc:"div"}),c=new t.Eb(this.d,this.q.volumeBar);c.b("focus",function(){a.p("vjs-lock-showing")});c.b("blur",function(){G(a)});a.aa(c);return a};
t.Ha.prototype.u=function(){t.ra.prototype.u.call(this);t.O.prototype.u.call(this)};t.Ha.prototype.e=function(){return t.w.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">'+this.v("Mute")+"</span></div>"})};t.Ha.prototype.af=t.ra.prototype.update;t.lc=t.O.extend({l:function(a,c){t.O.call(this,a,c);this.pd();this.od();this.b(a,"loadstart",this.pd);this.b(a,"ratechange",this.od)}});s=t.lc.prototype;s.ta="Playback Rate";
s.className="vjs-playback-rate";s.e=function(){var a=t.O.prototype.e.call(this);this.Oc=t.e("div",{className:"vjs-playback-rate-value",innerHTML:1});a.appendChild(this.Oc);return a};s.La=function(){var a=new t.qa(this.k()),c=this.k().options().playbackRates;if(c)for(var d=c.length-1;0<=d;d--)a.aa(new t.Ab(this.k(),{rate:c[d]+"x"}));return a};s.Ea=function(){this.m().setAttribute("aria-valuenow",this.k().playbackRate())};
s.u=function(){for(var a=this.k().playbackRate(),c=this.k().options().playbackRates,d=c[0],e=0;e<c.length;e++)if(c[e]>a){d=c[e];break}this.k().playbackRate(d)};function na(a){return a.k().h&&a.k().h.featuresPlaybackRate&&a.k().options().playbackRates&&0<a.k().options().playbackRates.length}s.pd=function(){na(this)?this.r("vjs-hidden"):this.p("vjs-hidden")};s.od=function(){na(this)&&(this.Oc.innerHTML=this.k().playbackRate()+"x")};
t.Ab=t.M.extend({zc:"button",l:function(a,c){var d=this.label=c.rate,e=this.Wc=parseFloat(d,10);c.label=d;c.selected=1===e;t.M.call(this,a,c);this.b(a,"ratechange",this.update)}});t.Ab.prototype.u=function(){t.M.prototype.u.call(this);this.k().playbackRate(this.Wc)};t.Ab.prototype.update=function(){this.selected(this.k().playbackRate()==this.Wc)};t.mc=t.w.extend({l:function(a,c){t.w.call(this,a,c);this.update();a.b("posterchange",t.bind(this,this.update))}});s=t.mc.prototype;
s.dispose=function(){this.k().n("posterchange",this.update);t.w.prototype.dispose.call(this)};s.e=function(){var a=t.e("div",{className:"vjs-poster",tabIndex:-1});t.td||(this.Mb=t.e("img"),a.appendChild(this.Mb));return a};s.update=function(){var a=this.k().poster();this.na(a);a?this.show():this.W()};s.na=function(a){var c;this.Mb?this.Mb.src=a:(c="",a&&(c='url("'+a+'")'),this.c.style.backgroundImage=c)};s.u=function(){this.d.play()};t.ic=t.a.extend({l:function(a,c){t.a.call(this,a,c)}});
t.ic.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};t.rb=t.w.extend();t.rb.prototype.e=function(){return t.w.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})};t.rb.prototype.u=function(){this.d.play()};t.wb=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.update();this.b(a,"error",this.update)}});
t.wb.prototype.e=function(){var a=t.a.prototype.e.call(this,"div",{className:"vjs-error-display"});this.B=t.e("div");a.appendChild(this.B);return a};t.wb.prototype.update=function(){this.k().error()&&(this.B.innerHTML=this.v(this.k().error().message))};var O;t.j=t.a.extend({l:function(a,c,d){c=c||{};c.$c=l;t.a.call(this,a,c,d);this.featuresProgressEvents||this.ne();this.featuresTimeupdateEvents||this.oe();this.be();this.featuresNativeTextTracks||this.Sd();this.de()}});s=t.j.prototype;
s.be=function(){var a,c;a=this.k();c=function(){a.controls()&&!a.usingNativeControls()&&this.Fd()};this.I(c);this.b(a,"controlsenabled",c);this.b(a,"controlsdisabled",this.De);this.I(function(){this.networkState&&0<this.networkState()&&this.k().o("loadstart")})};
s.Fd=function(){var a;this.b("mousedown",this.u);this.b("touchstart",function(){a=this.d.userActive()});this.b("touchmove",function(){a&&this.k().reportUserActivity()});this.b("touchend",function(a){a.preventDefault()});da(this);this.b("tap",this.xe)};s.De=function(){this.n("tap");this.n("touchstart");this.n("touchmove");this.n("touchleave");this.n("touchcancel");this.n("touchend");this.n("click");this.n("mousedown")};
s.u=function(a){0===a.button&&this.k().controls()&&(this.k().paused()?this.k().play():this.k().pause())};s.xe=function(){this.k().userActive(!this.k().userActive())};s.ne=function(){this.Qc=f;this.We()};s.me=function(){this.Qc=l;this.hd()};s.We=function(){this.Ce=this.setInterval(function(){var a=this.k().bufferedPercent();this.Jd!=a&&this.k().o("progress");this.Jd=a;1===a&&this.hd()},500)};s.hd=function(){this.clearInterval(this.Ce)};
s.oe=function(){var a=this.d;this.Vb=f;this.b(a,"play",this.md);this.b(a,"pause",this.qb);this.N("timeupdate",function(){this.featuresTimeupdateEvents=f;this.Rc()})};s.Rc=function(){var a=this.d;this.Vb=l;this.qb();this.n(a,"play",this.md);this.n(a,"pause",this.qb)};s.md=function(){this.Bc&&this.qb();this.Bc=this.setInterval(function(){this.k().o("timeupdate")},250)};s.qb=function(){this.clearInterval(this.Bc);this.k().o("timeupdate")};s.dispose=function(){this.Qc&&this.me();this.Vb&&this.Rc();t.a.prototype.dispose.call(this)};
s.Zb=function(){this.Vb&&this.k().o("timeupdate")};s.de=function(){function a(){var a=c.da("textTrackDisplay");a&&a.C()}var c=this.d,d;if(d=this.textTracks())d.addEventListener("removetrack",a),d.addEventListener("addtrack",a),this.b("dispose",t.bind(this,function(){d.removeEventListener("removetrack",a);d.removeEventListener("addtrack",a)}))};
s.Sd=function(){var a=this.d,c,d,e;window.WebVTT||(e=document.createElement("script"),e.src=a.options()["vtt.js"]||"../node_modules/vtt.js/dist/vtt.js",a.m().appendChild(e),window.WebVTT=f);if(d=this.textTracks())c=function(){var c,d,e;e=a.da("textTrackDisplay");e.C();for(c=0;c<this.length;c++)d=this[c],d.removeEventListener("cuechange",t.bind(e,e.C)),"showing"===d.mode&&d.addEventListener("cuechange",t.bind(e,e.C))},d.addEventListener("change",c),this.b("dispose",t.bind(this,function(){d.removeEventListener("change",
c)}))};s.textTracks=function(){this.d.ld=this.d.ld||new t.F;return this.d.ld};s.X=function(){this.d.Xc=this.d.Xc||new t.F;return this.d.Xc};O=function(a,c,d,e,g){var h=a.textTracks();g=g||{};g.kind=c;d&&(g.label=d);e&&(g.language=e);g.player=a.d;a=new t.t(g);P(h,a);return a};t.j.prototype.addTextTrack=function(a,c,d){if(!a)throw Error("TextTrack kind is required but was not provided");return O(this,a,c,d)};t.j.prototype.ha=function(a){a=O(this,a.kind,a.label,a.language,a);P(this.X(),a);return{Y:a}};
t.j.prototype.Da=function(a){Q(this.textTracks(),a);Q(this.X(),a)};t.j.prototype.bd=m();t.j.prototype.featuresVolumeControl=f;t.j.prototype.featuresFullscreenResize=l;t.j.prototype.featuresPlaybackRate=l;t.j.prototype.featuresProgressEvents=l;t.j.prototype.featuresTimeupdateEvents=l;t.j.prototype.featuresNativeTextTracks=l;
t.j.dc=function(a){a.registerSourceHandler=function(c,d){var e=a.cd;e||(e=a.cd=[]);d===b&&(d=e.length);e.splice(d,0,c)};a.ob=function(c){for(var d=a.cd||[],e,g=0;g<d.length;g++)if(e=d[g].canHandleSource(c))return d[g];return j};a.wc=function(c){var d=a.ob(c);return d?d.canHandleSource(c):""};a.prototype.ma=function(c){var d=a.ob(c);d||(a.nativeSourceHandler?d=a.nativeSourceHandler:t.log.error("No source hander found for the current source."));this.ia();this.n("dispose",this.ia);this.fb=c;this.$b=
d.handleSource(c,this);this.b("dispose",this.ia);return this};a.prototype.ia=function(){this.$b&&this.$b.dispose&&this.$b.dispose()}};t.media={};
t.f=t.j.extend({l:function(a,c,d){var e,g,h;if(c.nativeCaptions===l||c.nativeTextTracks===l)this.featuresNativeTextTracks=l;t.j.call(this,a,c,d);for(d=t.f.xb.length-1;0<=d;d--)this.b(t.f.xb[d],this.Td);(c=c.source)&&(this.c.currentSrc!==c.src||a.L&&3===a.L.ce)&&this.ma(c);if(this.c.hasChildNodes()){d=this.c.childNodes;e=d.length;for(c=[];e--;)g=d[e],h=g.nodeName.toLowerCase(),"track"===h&&(this.featuresNativeTextTracks?P(this.X(),g.track):c.push(g));for(d=0;d<c.length;d++)this.c.removeChild(c[d])}if(t.Db&&
a.options().nativeControlsForTouch===f){var k,q,r,u;k=this;q=this.k();c=q.controls();k.c.controls=!!c;r=function(){k.c.controls=f};u=function(){k.c.controls=l};q.b("controlsenabled",r);q.b("controlsdisabled",u);c=function(){q.n("controlsenabled",r);q.n("controlsdisabled",u)};k.b("dispose",c);q.b("usingcustomcontrols",c);q.usingNativeControls(f)}a.I(function(){this.src()&&(this.L&&this.q.autoplay&&this.paused())&&(delete this.L.poster,this.play())});this.Va()}});s=t.f.prototype;
s.dispose=function(){t.f.Kb(this.c);t.j.prototype.dispose.call(this)};
s.e=function(){var a=this.d,c,d,e,g=a.L;if(!g||this.movingMediaElementInDOM===l){g?(e=g.cloneNode(l),t.f.Kb(g),g=e,a.L=j):(g=t.e("video"),e=videojs.Z.Aa({},a.Te),(!t.Db||a.options().nativeControlsForTouch!==f)&&delete e.controls,t.ad(g,t.i.D(e,{id:a.id()+"_html5_api","class":"vjs-tech"})));g.player=a;if(a.q.nd)for(e=0;e<a.q.nd.length;e++)c=a.q.nd[e],d=document.createElement("track"),d.Tb=c.Tb,d.label=c.label,d.ed=c.ed,d.src=c.src,"default"in c&&d.setAttribute("default","default"),g.appendChild(d);
t.Rb(g,a.m())}c=["autoplay","preload","loop","muted"];for(e=c.length-1;0<=e;e--){d=c[e];var h={};"undefined"!==typeof a.q[d]&&(h[d]=a.q[d]);t.ad(g,h)}return g};s.Td=function(a){"error"==a.type&&this.error()?this.k().error(this.error().code):(a.bubbles=l,this.k().o(a))};s.play=function(){this.c.play()};s.pause=function(){this.c.pause()};s.paused=function(){return this.c.paused};s.currentTime=function(){return this.c.currentTime};s.Zb=function(a){try{this.c.currentTime=a}catch(c){t.log(c,"Video is not ready. (Video.js)")}};
s.duration=function(){return this.c.duration||0};s.buffered=function(){return this.c.buffered};s.volume=function(){return this.c.volume};s.Oe=function(a){this.c.volume=a};s.muted=function(){return this.c.muted};s.Ke=function(a){this.c.muted=a};s.width=function(){return this.c.offsetWidth};s.height=function(){return this.c.offsetHeight};s.Sa=function(){return"function"==typeof this.c.webkitEnterFullScreen&&(/Android/.test(t.P)||!/Chrome|Mac OS X 10.5/.test(t.P))?f:l};
s.Ec=function(){var a=this.c;"webkitDisplayingFullscreen"in a&&this.N("webkitbeginfullscreen",function(){this.d.isFullscreen(f);this.N("webkitendfullscreen",function(){this.d.isFullscreen(l);this.d.o("fullscreenchange")});this.d.o("fullscreenchange")});a.paused&&a.networkState<=a.ef?(this.c.play(),this.setTimeout(function(){a.pause();a.webkitEnterFullScreen()},0)):a.webkitEnterFullScreen()};s.Ud=function(){this.c.webkitExitFullScreen()};
function oa(a,c){var d=/^blob\:/i;return c&&a&&d.test(a)?c:a}s.src=function(a){var c=this.c.src;if(a===b)return oa(c,this.dd);this.na(a)};s.na=function(a){this.c.src=a};s.load=function(){this.c.load()};s.currentSrc=function(){var a=this.c.currentSrc;return!this.fb?a:oa(a,this.fb.src)};s.poster=function(){return this.c.poster};s.bd=function(a){this.c.poster=a};s.Ra=function(){return this.c.Ra};s.Me=function(a){this.c.Ra=a};s.autoplay=function(){return this.c.autoplay};
s.He=function(a){this.c.autoplay=a};s.controls=function(){return this.c.controls};s.loop=function(){return this.c.loop};s.Je=function(a){this.c.loop=a};s.error=function(){return this.c.error};s.seeking=function(){return this.c.seeking};s.seekable=function(){return this.c.seekable};s.ended=function(){return this.c.ended};s.playbackRate=function(){return this.c.playbackRate};s.Le=function(a){this.c.playbackRate=a};s.networkState=function(){return this.c.networkState};s.readyState=function(){return this.c.readyState};
s.textTracks=function(){return!this.featuresNativeTextTracks?t.j.prototype.textTracks.call(this):this.c.textTracks};s.addTextTrack=function(a,c,d){return!this.featuresNativeTextTracks?t.j.prototype.addTextTrack.call(this,a,c,d):this.c.addTextTrack(a,c,d)};
s.ha=function(a){if(!this.featuresNativeTextTracks)return t.j.prototype.ha.call(this,a);var c=document.createElement("track");a=a||{};a.kind&&(c.kind=a.kind);a.label&&(c.label=a.label);if(a.language||a.srclang)c.srclang=a.language||a.srclang;a["default"]&&(c["default"]=a["default"]);a.id&&(c.id=a.id);a.src&&(c.src=a.src);this.m().appendChild(c);P(this.X(),c.Y);return c};
s.Da=function(a){if(!this.featuresNativeTextTracks)return t.j.prototype.Da.call(this,a);var c,d;Q(this.X(),a);c=this.m().querySelectorAll("track");for(d=0;d<c.length;d++)if(c[d]===a||c[d].track===a){c[d].parentNode.removeChild(c[d]);break}};t.f.isSupported=function(){try{t.A.volume=0.5}catch(a){return l}return!!t.A.canPlayType};t.j.dc(t.f);var pa=t.f.prototype.ma,qa=t.f.prototype.ia;t.f.prototype.ma=function(a){var c=pa.call(this,a);this.dd=a.src;return c};t.f.prototype.ia=function(){this.dd=b;return qa.call(this)};
t.f.nativeSourceHandler={};t.f.nativeSourceHandler.canHandleSource=function(a){function c(a){try{return t.A.canPlayType(a)}catch(c){return""}}return a.type?c(a.type):a.src?(a=(a=a.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i))&&a[1],c("video/"+a)):""};t.f.nativeSourceHandler.handleSource=function(a,c){c.na(a.src)};t.f.nativeSourceHandler.dispose=m();t.f.registerSourceHandler(t.f.nativeSourceHandler);t.f.Ld=function(){var a=t.A.volume;t.A.volume=a/2+0.1;return a!==t.A.volume};
t.f.Kd=function(){var a=t.A.playbackRate;t.A.playbackRate=a/2+0.1;return a!==t.A.playbackRate};t.f.Re=function(){var a;(a=!!t.A.textTracks)&&0<t.A.textTracks.length&&(a="number"!==typeof t.A.textTracks[0].mode);a&&t.gc&&(a=l);return a};t.f.prototype.featuresVolumeControl=t.f.Ld();t.f.prototype.featuresPlaybackRate=t.f.Kd();t.f.prototype.movingMediaElementInDOM=!t.xd;t.f.prototype.featuresFullscreenResize=f;t.f.prototype.featuresProgressEvents=f;t.f.prototype.featuresNativeTextTracks=t.f.Re();
var S,ra=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,sa=/^video\/mp4/i;t.f.Tc=function(){4<=t.ec&&(S||(S=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&ra.test(a)?"maybe":S.call(this,a)});t.Bd&&(S||(S=t.A.constructor.prototype.canPlayType),t.A.constructor.prototype.canPlayType=function(a){return a&&sa.test(a)?"maybe":S.call(this,a)})};t.f.Ye=function(){var a=t.A.constructor.prototype.canPlayType;t.A.constructor.prototype.canPlayType=S;S=j;return a};
t.f.Tc();t.f.xb="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");t.f.Kb=function(a){if(a){a.player=j;for(a.parentNode&&a.parentNode.removeChild(a);a.hasChildNodes();)a.removeChild(a.firstChild);a.removeAttribute("src");if("function"===typeof a.load)try{a.load()}catch(c){}}};
t.g=t.j.extend({l:function(a,c,d){t.j.call(this,a,c,d);var e=c.source;d=a.id()+"_flash_api";var g=a.q,g=t.i.D({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:g.autoplay,preload:g.Ra,loop:g.loop,muted:g.muted},c.flashVars),h=t.i.D({wmode:"opaque",bgcolor:"#000000"},c.params);d=t.i.D({id:d,name:d,"class":"vjs-tech"},c.attributes);e&&this.I(function(){this.ma(e)});t.Rb(this.c,c.parentEl);c.startTime&&this.I(function(){this.load();
this.play();this.currentTime(c.startTime)});t.gc&&this.I(function(){this.b("mousemove",function(){this.k().o({type:"mousemove",bubbles:l})})});a.b("stageclick",a.reportUserActivity);this.c=t.g.Dc(c.swf,this.c,g,h,d)}});s=t.g.prototype;s.dispose=function(){t.j.prototype.dispose.call(this)};s.play=function(){this.ended()&&this.setCurrentTime(0);this.c.vjs_play()};s.pause=function(){this.c.vjs_pause()};s.src=function(a){return a===b?this.currentSrc():this.na(a)};
s.na=function(a){a=t.Xd(a);this.c.vjs_src(a);if(this.d.autoplay()){var c=this;this.setTimeout(function(){c.play()},0)}};t.g.prototype.setCurrentTime=function(a){this.ke=a;this.c.vjs_setProperty("currentTime",a);t.j.prototype.Zb.call(this)};t.g.prototype.currentTime=function(){return this.seeking()?this.ke||0:this.c.vjs_getProperty("currentTime")};t.g.prototype.currentSrc=function(){return this.fb?this.fb.src:this.c.vjs_getProperty("currentSrc")};t.g.prototype.load=function(){this.c.vjs_load()};
t.g.prototype.poster=function(){this.c.vjs_getProperty("poster")};t.g.prototype.setPoster=m();s=t.g.prototype;s.seekable=function(){return 0===this.duration()?t.xa():t.xa(0,this.duration())};s.buffered=function(){return!this.c.vjs_getProperty?t.xa():t.xa(0,this.c.vjs_getProperty("buffered"))};s.duration=function(){return!this.c.vjs_getProperty?0:this.c.vjs_getProperty("duration")};s.Sa=p(l);s.Ec=p(l);
function ta(){var a=T[U],c=a.charAt(0).toUpperCase()+a.slice(1);ua["set"+c]=function(c){return this.c.vjs_setProperty(a,c)}}function va(a){ua[a]=function(){return this.c.vjs_getProperty(a)}}
var ua=t.g.prototype,T="rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),wa="error networkState readyState seeking initialTime startOffsetTime paused played ended videoTracks audioTracks videoWidth videoHeight".split(" "),U;for(U=0;U<T.length;U++)va(T[U]),ta();for(U=0;U<wa.length;U++)va(wa[U]);t.g.isSupported=function(){return 10<=t.g.version()[0]};t.j.dc(t.g);t.g.nativeSourceHandler={};
t.g.nativeSourceHandler.canHandleSource=function(a){return!a.type?"":a.type.replace(/;.*/,"").toLowerCase()in t.g.Wd?"maybe":""};t.g.nativeSourceHandler.handleSource=function(a,c){c.na(a.src)};t.g.nativeSourceHandler.dispose=m();t.g.registerSourceHandler(t.g.nativeSourceHandler);t.g.Wd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};t.g.onReady=function(a){var c;if(c=(a=t.m(a))&&a.parentNode&&a.parentNode.player)a.player=c,t.g.checkReady(c.h)};
t.g.checkReady=function(a){a.m()&&(a.m().vjs_getProperty?a.Va():this.setTimeout(function(){t.g.checkReady(a)},50))};t.g.onEvent=function(a,c){t.m(a).player.o(c)};t.g.onError=function(a,c){var d=t.m(a).player,e="FLASH: "+c;"srcnotfound"==c?d.error({code:4,message:e}):d.error(e)};
t.g.version=function(){var a="0,0,0";try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(d){}}return a.split(",")};
t.g.Dc=function(a,c,d,e,g){a=t.g.$d(a,d,e,g);a=t.e("div",{innerHTML:a}).childNodes[0];d=c.parentNode;c.parentNode.replaceChild(a,c);a[t.expando]=c[t.expando];var h=d.childNodes[0];setTimeout(function(){h.style.display="block"},1E3);return a};
t.g.$d=function(a,c,d,e){var g="",h="",k="";c&&t.i.ca(c,function(a,c){g+=a+"="+c+"&amp;"});d=t.i.D({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);t.i.ca(d,function(a,c){h+='<param name="'+a+'" value="'+c+'" />'});e=t.i.D({data:a,width:"100%",height:"100%"},e);t.i.ca(e,function(a,c){k+=a+'="'+c+'" '});return'<object type="application/x-shockwave-flash" '+k+">"+h+"</object>"};t.g.Qe={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};t.g.Df=function(a,c){return a+"&"+c};
t.g.Pe=function(a){var c={yc:"",jd:""};if(!a)return c;var d=a.indexOf("&"),e;-1!==d?e=d+1:(d=e=a.lastIndexOf("/")+1,0===d&&(d=e=a.length));c.yc=a.substring(0,d);c.jd=a.substring(e,a.length);return c};t.g.ie=function(a){return a in t.g.Qe};t.g.Dd=/^rtmp[set]?:\/\//i;t.g.he=function(a){return t.g.Dd.test(a)};t.g.Yb={};t.g.Yb.canHandleSource=function(a){return t.g.ie(a.type)||t.g.he(a.src)?"maybe":""};t.g.Yb.handleSource=function(a,c){var d=t.g.Pe(a.src);c.setRtmpConnection(d.yc);c.setRtmpStream(d.jd)};
t.g.registerSourceHandler(t.g.Yb);t.Cd=t.a.extend({l:function(a,c,d){t.a.call(this,a,c,d);if(!a.q.sources||0===a.q.sources.length){c=0;for(d=a.q.techOrder;c<d.length;c++){var e=t.va(d[c]),g=window.videojs[e];if(g&&g.isSupported()){ka(a,e);break}}}else a.src(a.q.sources)}});t.oc={disabled:"disabled",hidden:"hidden",showing:"showing"};t.Ed={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"};
t.t=function(a){var c,d,e,g,h,k,q,r,u,A,R;a=a||{};if(!a.player)throw Error("A player was not provided.");c=this;if(t.pa)for(R in c=document.createElement("custom"),t.t.prototype)c[R]=t.t.prototype[R];c.d=a.player;e=t.oc[a.mode]||"disabled";g=t.Ed[a.kind]||"subtitles";h=a.label||"";k=a.language||a.srclang||"";d=a.id||"vjs_text_track_"+t.s++;if("metadata"===g||"chapters"===g)e="hidden";c.V=[];c.Ia=[];q=new t.U(c.V);r=new t.U(c.Ia);A=l;u=t.bind(c,function(){this.activeCues;A&&(this.trigger("cuechange"),
A=l)});"disabled"!==e&&c.d.b("timeupdate",u);Object.defineProperty(c,"kind",{get:function(){return g},set:Function.prototype});Object.defineProperty(c,"label",{get:function(){return h},set:Function.prototype});Object.defineProperty(c,"language",{get:function(){return k},set:Function.prototype});Object.defineProperty(c,"id",{get:function(){return d},set:Function.prototype});Object.defineProperty(c,"mode",{get:function(){return e},set:function(a){t.oc[a]&&(e=a,"showing"===e&&this.d.b("timeupdate",u),
this.o("modechange"))}});Object.defineProperty(c,"cues",{get:function(){return!this.Ub?j:q},set:Function.prototype});Object.defineProperty(c,"activeCues",{get:function(){var a,c,d,e,g;if(!this.Ub)return j;if(0===this.cues.length)return r;e=this.d.currentTime();a=0;c=this.cues.length;for(d=[];a<c;a++)g=this.cues[a],g.startTime<=e&&g.endTime>=e?d.push(g):g.startTime===g.endTime&&(g.startTime<=e&&g.startTime+0.5>=e)&&d.push(g);A=l;if(d.length!==this.Ia.length)A=f;else for(a=0;a<d.length;a++)-1===xa.call(this.Ia,
d[a])&&(A=f);this.Ia=d;r.pb(this.Ia);return r},set:Function.prototype});a.src?ya(a.src,c):c.Ub=f;if(t.pa)return c};t.t.prototype=t.i.create(t.z.prototype);t.t.prototype.constructor=t.t;t.t.prototype.ab={cuechange:"cuechange"};t.t.prototype.sc=function(a){var c=this.d.textTracks(),d=0;if(c)for(;d<c.length;d++)c[d]!==this&&c[d].Yc(a);this.V.push(a);this.cues.pb(this.V)};t.t.prototype.Yc=function(a){for(var c=0,d=this.V.length,e,g=l;c<d;c++)e=this.V[c],e===a&&(this.V.splice(c,1),g=f);g&&this.Ac.pb(this.V)};
var ya,V,xa;ya=function(a,c){t.bf(a,t.bind(this,function(a,e,g){if(a)return t.log.error(a);c.Ub=f;V(g,c)}))};V=function(a,c){if("function"!==typeof window.WebVTT)window.setTimeout(function(){V(a,c)},25);else{var d=new window.WebVTT.Parser(window,window.vttjs,window.WebVTT.StringDecoder());d.oncue=function(a){c.sc(a)};d.onparsingerror=function(a){t.log.error(a)};d.parse(a);d.flush()}};
xa=function(a,c){var d;if(this==j)throw new TypeError('"this" is null or not defined');var e=Object(this),g=e.length>>>0;if(0===g)return-1;d=+c||0;Infinity===Math.abs(d)&&(d=0);if(d>=g)return-1;for(d=Math.max(0<=d?d:g-Math.abs(d),0);d<g;){if(d in e&&e[d]===a)return d;d++}return-1};
t.F=function(a){var c=this,d,e=0;if(t.pa)for(d in c=document.createElement("custom"),t.F.prototype)c[d]=t.F.prototype[d];a=a||[];c.Ua=[];for(Object.defineProperty(c,"length",{get:function(){return this.Ua.length}});e<a.length;e++)P(c,a[e]);if(t.pa)return c};t.F.prototype=t.i.create(t.z.prototype);t.F.prototype.constructor=t.F;t.F.prototype.ab={change:"change",addtrack:"addtrack",removetrack:"removetrack"};for(var za in t.F.prototype.ab)t.F.prototype["on"+za]=j;
function P(a,c){var d=a.Ua.length;""+d in a||Object.defineProperty(a,d,{get:function(){return this.Ua[d]}});c.addEventListener("modechange",t.bind(a,function(){this.o("change")}));a.Ua.push(c);a.o({type:"addtrack",Y:c})}function Q(a,c){for(var d=0,e=a.length,g;d<e;d++)if(g=a[d],g===c){a.Ua.splice(d,1);break}a.o({type:"removetrack",Y:c})}t.F.prototype.ae=function(a){for(var c=0,d=this.length,e=j,g;c<d;c++)if(g=this[c],g.id===a){e=g;break}return e};
t.U=function(a){var c=this,d;if(t.pa)for(d in c=document.createElement("custom"),t.U.prototype)c[d]=t.U.prototype[d];t.U.prototype.pb.call(c,a);Object.defineProperty(c,"length",{get:n("le")});if(t.pa)return c};t.U.prototype.pb=function(a){var c=this.length||0,d=0,e=a.length;this.V=a;this.le=a.length;a=function(a){""+a in this||Object.defineProperty(this,""+a,{get:function(){return this.V[a]}})};if(c<e)for(d=c;d<e;d++)a.call(this,d)};
t.U.prototype.Zd=function(a){for(var c=0,d=this.length,e=j,g;c<d;c++)if(g=this[c],g.id===a){e=g;break}return e};t.sa=t.a.extend({l:function(a,c,d){t.a.call(this,a,c,d);a.b("loadstart",t.bind(this,this.Ve));a.I(t.bind(this,function(){if(a.h&&a.h.featuresNativeTextTracks)this.W();else{var c,d,h;a.b("fullscreenchange",t.bind(this,this.C));d=a.q.tracks||[];for(c=0;c<d.length;c++)h=d[c],this.d.ha(h)}}))}});t.sa.prototype.Ve=function(){this.d.h&&this.d.h.featuresNativeTextTracks?this.W():this.show()};
t.sa.prototype.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};t.sa.prototype.Md=function(){"function"===typeof window.WebVTT&&window.WebVTT.processCues(window,[],this.c)};function W(a,c){return"rgba("+parseInt(a[1]+a[1],16)+","+parseInt(a[2]+a[2],16)+","+parseInt(a[3]+a[3],16)+","+c+")"}
var Aa={tf:"monospace",zf:"sans-serif",Bf:"serif",uf:'"Andale Mono", "Lucida Console", monospace',vf:'"Courier New", monospace',xf:"sans-serif",yf:"serif",kf:'"Comic Sans MS", Impact, fantasy',Af:'"Monotype Corsiva", cursive',Cf:'"Andale Mono", "Lucida Console", monospace, sans-serif'};t.sa.prototype.C=function(){var a=this.d.textTracks(),c=0,d;this.Md();if(a)for(;c<a.length;c++)d=a[c],"showing"===d.mode&&this.Ze(d)};
t.sa.prototype.Ze=function(a){if("function"===typeof window.WebVTT&&a.activeCues){for(var c=0,d=this.d.textTrackSettings.Hc(),e,g=[];c<a.activeCues.length;c++)g.push(a.activeCues[c]);window.WebVTT.processCues(window,a.activeCues,this.c);for(c=g.length;c--;){a=g[c].lf;d.color&&(a.firstChild.style.color=d.color);if(d.kd)try{a.firstChild.style.color=W(d.color||"#fff",d.kd)}catch(h){}d.backgroundColor&&(a.firstChild.style.backgroundColor=d.backgroundColor);if(d.vc)try{a.firstChild.style.backgroundColor=
W(d.backgroundColor||"#000",d.vc)}catch(k){}if(d.cc)if(d.rd)try{a.style.backgroundColor=W(d.cc,d.rd)}catch(q){}else a.style.backgroundColor=d.cc;d.Ma&&("dropshadow"===d.Ma?a.firstChild.style.textShadow="2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222":"raised"===d.Ma?a.firstChild.style.textShadow="1px 1px #222, 2px 2px #222, 3px 3px #222":"depressed"===d.Ma?a.firstChild.style.textShadow="1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222":"uniform"===d.Ma&&(a.firstChild.style.textShadow="0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222"));
d.Ob&&1!==d.Ob&&(e=window.wf(a.style.fontSize),a.style.fontSize=e*d.Ob+"px",a.style.height="auto",a.style.top="auto",a.style.bottom="2px");d.fontFamily&&"default"!==d.fontFamily&&("small-caps"===d.fontFamily?a.firstChild.style.fontVariant="small-caps":a.firstChild.style.fontFamily=Aa[d.fontFamily])}}};
t.$=t.M.extend({l:function(a,c){var d=this.Y=c.track,e=a.textTracks(),g,h;e&&(g=t.bind(this,function(){var a="showing"===this.Y.mode,c,d,g;if(this instanceof t.zb){a=f;d=0;for(g=e.length;d<g;d++)if(c=e[d],c.kind===this.Y.kind&&"showing"===c.mode){a=l;break}}this.selected(a)}),e.addEventListener("change",g),a.b("dispose",function(){e.removeEventListener("change",g)}));c.label=d.label||d.language||"Unknown";c.selected=d["default"]||"showing"===d.mode;t.M.call(this,a,c);e&&e.onchange===b&&this.b(["tap",
"click"],function(){if("object"!==typeof window.vd)try{h=new window.vd("change")}catch(a){}h||(h=document.createEvent("Event"),h.initEvent("change",f,f));e.dispatchEvent(h)})}});t.$.prototype.u=function(){var a=this.Y.kind,c=this.d.textTracks(),d,e=0;t.M.prototype.u.call(this);if(c)for(;e<c.length;e++)d=c[e],d.kind===a&&(d.mode=d===this.Y?"showing":"disabled")};t.zb=t.$.extend({l:function(a,c){c.track={kind:c.kind,player:a,label:c.kind+" off","default":l,mode:"disabled"};t.$.call(this,a,c);this.selected(f)}});
t.sb=t.$.extend({l:function(a,c){c.track={kind:c.kind,player:a,label:c.kind+" settings","default":l,mode:"disabled"};t.$.call(this,a,c);this.p("vjs-texttrack-settings")}});t.sb.prototype.u=function(){this.k().da("textTrackSettings").show()};
t.Q=t.O.extend({l:function(a,c){var d,e;t.O.call(this,a,c);d=this.d.textTracks();1>=this.H.length&&this.W();d&&(e=t.bind(this,this.update),d.addEventListener("removetrack",e),d.addEventListener("addtrack",e),this.d.b("dispose",function(){d.removeEventListener("removetrack",e);d.removeEventListener("addtrack",e)}))}});
t.Q.prototype.Ka=function(){var a=[],c,d;this instanceof t.oa&&(!this.k().h||!this.k().h.featuresNativeTextTracks)&&a.push(new t.sb(this.d,{kind:this.ea}));a.push(new t.zb(this.d,{kind:this.ea}));d=this.d.textTracks();if(!d)return a;for(var e=0;e<d.length;e++)c=d[e],c.kind===this.ea&&a.push(new t.$(this.d,{track:c}));return a};t.oa=t.Q.extend({l:function(a,c,d){t.Q.call(this,a,c,d);this.c.setAttribute("aria-label","Captions Menu")}});t.oa.prototype.ea="captions";t.oa.prototype.ta="Captions";
t.oa.prototype.className="vjs-captions-button";t.oa.prototype.update=function(){var a=2;t.Q.prototype.update.call(this);this.k().h&&this.k().h.featuresNativeTextTracks&&(a=1);this.H&&this.H.length>a?this.show():this.W()};t.$a=t.Q.extend({l:function(a,c,d){t.Q.call(this,a,c,d);this.c.setAttribute("aria-label","Subtitles Menu")}});t.$a.prototype.ea="subtitles";t.$a.prototype.ta="Subtitles";t.$a.prototype.className="vjs-subtitles-button";
t.Wa=t.Q.extend({l:function(a,c,d){t.Q.call(this,a,c,d);this.c.setAttribute("aria-label","Chapters Menu")}});s=t.Wa.prototype;s.ea="chapters";s.ta="Chapters";s.className="vjs-chapters-button";s.Ka=function(){var a=[],c,d;d=this.d.textTracks();if(!d)return a;for(var e=0;e<d.length;e++)c=d[e],c.kind===this.ea&&a.push(new t.$(this.d,{track:c}));return a};
s.La=function(){for(var a=this.d.textTracks()||[],c=0,d=a.length,e,g,h=this.H=[];c<d;c++)if(e=a[c],e.kind==this.ea)if(e.Ac){g=e;break}else e.mode="hidden",window.setTimeout(t.bind(this,function(){this.La()}),100);a=this.za;a===b&&(a=new t.qa(this.d),a.wa().appendChild(t.e("li",{className:"vjs-menu-title",innerHTML:t.va(this.ea),Se:-1})));if(g){e=g.cues;for(var k,c=0,d=e.length;c<d;c++)k=e[c],k=new t.Xa(this.d,{track:g,cue:k}),h.push(k),a.aa(k);this.aa(a)}0<this.H.length&&this.show();return a};
t.Xa=t.M.extend({l:function(a,c){var d=this.Y=c.track,e=this.cue=c.cue,g=a.currentTime();c.label=e.text;c.selected=e.startTime<=g&&g<e.endTime;t.M.call(this,a,c);d.addEventListener("cuechange",t.bind(this,this.update))}});t.Xa.prototype.u=function(){t.M.prototype.u.call(this);this.d.currentTime(this.cue.startTime);this.update(this.cue.startTime)};t.Xa.prototype.update=function(){var a=this.cue,c=this.d.currentTime();this.selected(a.startTime<=c&&c<a.endTime)};
function X(a){var c;a.Ge?c=a.Ge[0]:a.options&&(c=a.options[a.options.selectedIndex]);return c.value}function Y(a,c){var d,e;if(c){for(d=0;d<a.options.length&&!(e=a.options[d],e.value===c);d++);a.selectedIndex=d}}
t.pc=t.a.extend({l:function(a,c){t.a.call(this,a,c);this.W();t.b(this.m().querySelector(".vjs-done-button"),"click",t.bind(this,function(){this.Fe();this.W()}));t.b(this.m().querySelector(".vjs-default-button"),"click",t.bind(this,function(){this.m().querySelector(".vjs-fg-color > select").selectedIndex=0;this.m().querySelector(".vjs-bg-color > select").selectedIndex=0;this.m().querySelector(".window-color > select").selectedIndex=0;this.m().querySelector(".vjs-text-opacity > select").selectedIndex=
0;this.m().querySelector(".vjs-bg-opacity > select").selectedIndex=0;this.m().querySelector(".vjs-window-opacity > select").selectedIndex=0;this.m().querySelector(".vjs-edge-style select").selectedIndex=0;this.m().querySelector(".vjs-font-family select").selectedIndex=0;this.m().querySelector(".vjs-font-percent select").selectedIndex=2;this.C()}));t.b(this.m().querySelector(".vjs-fg-color > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-bg-color > select"),"change",t.bind(this,
this.C));t.b(this.m().querySelector(".window-color > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-text-opacity > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-bg-opacity > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-window-opacity > select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-font-percent select"),"change",t.bind(this,this.C));t.b(this.m().querySelector(".vjs-edge-style select"),"change",t.bind(this,
this.C));t.b(this.m().querySelector(".vjs-font-family select"),"change",t.bind(this,this.C));a.options().persistTextTrackSettings&&this.Ee()}});s=t.pc.prototype;s.e=function(){return t.a.prototype.e.call(this,"div",{className:"vjs-caption-settings vjs-modal-overlay",innerHTML:'<div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><div class="vjs-fg-color vjs-tracksetting"><label class="vjs-label">Foreground</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Opaque</option></select></span></div><div class="vjs-bg-color vjs-tracksetting"><label class="vjs-label">Background</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div><div class="window-color vjs-tracksetting"><label class="vjs-label">Window</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label">Font Size</label><select><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00" selected>100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label">Text Edge Style</label><select><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label">Font Family</label><select><option value="">Default</option><option value="monospaceSerif">Monospace Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div>'})};
s.Hc=function(){var a,c,d,e,g,h,k,q,r,u;a=this.m();g=X(a.querySelector(".vjs-edge-style select"));h=X(a.querySelector(".vjs-font-family select"));k=X(a.querySelector(".vjs-fg-color > select"));d=X(a.querySelector(".vjs-text-opacity > select"));q=X(a.querySelector(".vjs-bg-color > select"));c=X(a.querySelector(".vjs-bg-opacity > select"));r=X(a.querySelector(".window-color > select"));e=X(a.querySelector(".vjs-window-opacity > select"));a=window.parseFloat(X(a.querySelector(".vjs-font-percent > select")));
c={backgroundOpacity:c,textOpacity:d,windowOpacity:e,edgeStyle:g,fontFamily:h,color:k,backgroundColor:q,windowColor:r,fontPercent:a};for(u in c)(""===c[u]||"none"===c[u]||"fontPercent"===u&&1===c[u])&&delete c[u];return c};
s.Ne=function(a){var c=this.m();Y(c.querySelector(".vjs-edge-style select"),a.Ma);Y(c.querySelector(".vjs-font-family select"),a.fontFamily);Y(c.querySelector(".vjs-fg-color > select"),a.color);Y(c.querySelector(".vjs-text-opacity > select"),a.kd);Y(c.querySelector(".vjs-bg-color > select"),a.backgroundColor);Y(c.querySelector(".vjs-bg-opacity > select"),a.vc);Y(c.querySelector(".window-color > select"),a.cc);Y(c.querySelector(".vjs-window-opacity > select"),a.rd);(a=a.Ob)&&(a=a.toFixed(2));Y(c.querySelector(".vjs-font-percent > select"),
a)};s.Ee=function(){var a;try{a=JSON.parse(window.localStorage.getItem("vjs-text-track-settings"))}catch(c){}a&&this.Ne(a)};s.Fe=function(){var a;if(this.d.options().persistTextTrackSettings){a=this.Hc();try{t.hb(a)?window.localStorage.removeItem("vjs-text-track-settings"):window.localStorage.setItem("vjs-text-track-settings",JSON.stringify(a))}catch(c){}}};s.C=function(){var a=this.d.da("textTrackDisplay");a&&a.C()};
if("undefined"!==typeof window.JSON&&"function"===typeof window.JSON.parse)t.JSON=window.JSON;else{t.JSON={};var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;t.JSON.parse=function(a,c){function d(a,e){var k,q,r=a[e];if(r&&"object"===typeof r)for(k in r)Object.prototype.hasOwnProperty.call(r,k)&&(q=d(r,k),q!==b?r[k]=q:delete r[k]);return c.call(a,e,r)}var e;a=String(a);Z.lastIndex=0;Z.test(a)&&(a=a.replace(Z,function(a){return"\\u"+("0000"+
a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");}}
t.uc=function(){var a,c,d,e;a=document.getElementsByTagName("video");c=document.getElementsByTagName("audio");var g=[];if(a&&0<a.length){d=0;for(e=a.length;d<e;d++)g.push(a[d])}if(c&&0<c.length){d=0;for(e=c.length;d<e;d++)g.push(c[d])}if(g&&0<g.length){d=0;for(e=g.length;d<e;d++)if((c=g[d])&&c.getAttribute)c.player===b&&(a=c.getAttribute("data-setup"),a!==j&&videojs(c));else{t.Hb();break}}else t.qd||t.Hb()};t.Hb=function(){setTimeout(t.uc,1)};
"complete"===document.readyState?t.qd=f:t.N(window,"load",function(){t.qd=f});t.Hb();t.Be=function(a,c){t.Player.prototype[a]=c};var Ba=this;function $(a,c){var d=a.split("."),e=Ba;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}};$("videojs",t);$("_V_",t);$("videojs.options",t.options);$("videojs.players",t.Ca);$("videojs.TOUCH_ENABLED",t.Db);$("videojs.cache",t.ua);$("videojs.Component",t.a);t.a.prototype.player=t.a.prototype.k;t.a.prototype.options=t.a.prototype.options;t.a.prototype.init=t.a.prototype.l;t.a.prototype.dispose=t.a.prototype.dispose;t.a.prototype.createEl=t.a.prototype.e;t.a.prototype.contentEl=t.a.prototype.wa;t.a.prototype.el=t.a.prototype.m;t.a.prototype.addChild=t.a.prototype.aa;
t.a.prototype.getChild=t.a.prototype.da;t.a.prototype.getChildById=t.a.prototype.Yd;t.a.prototype.children=t.a.prototype.children;t.a.prototype.initChildren=t.a.prototype.Kc;t.a.prototype.removeChild=t.a.prototype.removeChild;t.a.prototype.on=t.a.prototype.b;t.a.prototype.off=t.a.prototype.n;t.a.prototype.one=t.a.prototype.N;t.a.prototype.trigger=t.a.prototype.o;t.a.prototype.triggerReady=t.a.prototype.Va;t.a.prototype.show=t.a.prototype.show;t.a.prototype.hide=t.a.prototype.W;
t.a.prototype.width=t.a.prototype.width;t.a.prototype.height=t.a.prototype.height;t.a.prototype.dimensions=t.a.prototype.Qd;t.a.prototype.ready=t.a.prototype.I;t.a.prototype.addClass=t.a.prototype.p;t.a.prototype.removeClass=t.a.prototype.r;t.a.prototype.hasClass=t.a.prototype.Pa;t.a.prototype.buildCSSClass=t.a.prototype.T;t.a.prototype.localize=t.a.prototype.v;t.a.prototype.setInterval=t.a.prototype.setInterval;t.a.prototype.setTimeout=t.a.prototype.setTimeout;$("videojs.EventEmitter",t.z);
t.z.prototype.on=t.z.prototype.b;t.z.prototype.addEventListener=t.z.prototype.addEventListener;t.z.prototype.off=t.z.prototype.n;t.z.prototype.removeEventListener=t.z.prototype.removeEventListener;t.z.prototype.one=t.z.prototype.N;t.z.prototype.trigger=t.z.prototype.o;t.z.prototype.dispatchEvent=t.z.prototype.dispatchEvent;t.Player.prototype.ended=t.Player.prototype.ended;t.Player.prototype.enterFullWindow=t.Player.prototype.Fc;t.Player.prototype.exitFullWindow=t.Player.prototype.Lb;
t.Player.prototype.preload=t.Player.prototype.Ra;t.Player.prototype.remainingTime=t.Player.prototype.remainingTime;t.Player.prototype.supportsFullScreen=t.Player.prototype.Sa;t.Player.prototype.currentType=t.Player.prototype.Nd;t.Player.prototype.requestFullScreen=t.Player.prototype.requestFullScreen;t.Player.prototype.requestFullscreen=t.Player.prototype.requestFullscreen;t.Player.prototype.cancelFullScreen=t.Player.prototype.cancelFullScreen;t.Player.prototype.exitFullscreen=t.Player.prototype.exitFullscreen;
t.Player.prototype.isFullScreen=t.Player.prototype.isFullScreen;t.Player.prototype.isFullscreen=t.Player.prototype.isFullscreen;t.Player.prototype.textTracks=t.Player.prototype.textTracks;t.Player.prototype.remoteTextTracks=t.Player.prototype.X;t.Player.prototype.addTextTrack=t.Player.prototype.addTextTrack;t.Player.prototype.addRemoteTextTrack=t.Player.prototype.ha;t.Player.prototype.removeRemoteTextTrack=t.Player.prototype.Da;t.Player.prototype.seekable=t.Player.prototype.seekable;
$("videojs.MediaLoader",t.Cd);$("videojs.TextTrackDisplay",t.sa);$("videojs.ControlBar",t.tb);$("videojs.Button",t.w);$("videojs.PlayToggle",t.kc);$("videojs.FullscreenToggle",t.Ya);$("videojs.BigPlayButton",t.rb);$("videojs.LoadingSpinner",t.ic);$("videojs.CurrentTimeDisplay",t.ub);$("videojs.DurationDisplay",t.vb);$("videojs.TimeDivider",t.qc);$("videojs.RemainingTimeDisplay",t.Cb);$("videojs.LiveDisplay",t.hc);$("videojs.ErrorDisplay",t.wb);$("videojs.Slider",t.S);$("videojs.ProgressControl",t.Bb);
$("videojs.SeekBar",t.nc);$("videojs.LoadProgressBar",t.yb);$("videojs.PlayProgressBar",t.jc);$("videojs.SeekHandle",t.Za);$("videojs.VolumeControl",t.Fb);$("videojs.VolumeBar",t.Eb);$("videojs.VolumeLevel",t.rc);$("videojs.VolumeMenuButton",t.Ha);$("videojs.VolumeHandle",t.Gb);$("videojs.MuteToggle",t.ra);$("videojs.PosterImage",t.mc);$("videojs.Menu",t.qa);$("videojs.MenuItem",t.M);$("videojs.MenuButton",t.O);$("videojs.PlaybackRateMenuButton",t.lc);$("videojs.ChaptersTrackMenuItem",t.Xa);
$("videojs.TextTrackButton",t.Q);$("videojs.TextTrackMenuItem",t.$);$("videojs.OffTextTrackMenuItem",t.zb);$("videojs.CaptionSettingsMenuItem",t.sb);t.O.prototype.createItems=t.O.prototype.Ka;t.Q.prototype.createItems=t.Q.prototype.Ka;t.Wa.prototype.createItems=t.Wa.prototype.Ka;$("videojs.SubtitlesButton",t.$a);$("videojs.CaptionsButton",t.oa);$("videojs.ChaptersButton",t.Wa);$("videojs.MediaTechController",t.j);t.j.withSourceHandlers=t.j.dc;t.j.prototype.featuresVolumeControl=t.j.prototype.qf;
t.j.prototype.featuresFullscreenResize=t.j.prototype.mf;t.j.prototype.featuresPlaybackRate=t.j.prototype.nf;t.j.prototype.featuresProgressEvents=t.j.prototype.of;t.j.prototype.featuresTimeupdateEvents=t.j.prototype.pf;t.j.prototype.setPoster=t.j.prototype.bd;t.j.prototype.textTracks=t.j.prototype.textTracks;t.j.prototype.remoteTextTracks=t.j.prototype.X;t.j.prototype.addTextTrack=t.j.prototype.addTextTrack;t.j.prototype.addRemoteTextTrack=t.j.prototype.ha;t.j.prototype.removeRemoteTextTrack=t.j.prototype.Da;
$("videojs.Html5",t.f);t.f.Events=t.f.xb;t.f.isSupported=t.f.isSupported;t.f.canPlaySource=t.f.wc;t.f.patchCanPlayType=t.f.Tc;t.f.unpatchCanPlayType=t.f.Ye;t.f.prototype.setCurrentTime=t.f.prototype.Zb;t.f.prototype.setVolume=t.f.prototype.Oe;t.f.prototype.setMuted=t.f.prototype.Ke;t.f.prototype.setPreload=t.f.prototype.Me;t.f.prototype.setAutoplay=t.f.prototype.He;t.f.prototype.setLoop=t.f.prototype.Je;t.f.prototype.enterFullScreen=t.f.prototype.Ec;t.f.prototype.exitFullScreen=t.f.prototype.Ud;
t.f.prototype.playbackRate=t.f.prototype.playbackRate;t.f.prototype.setPlaybackRate=t.f.prototype.Le;t.f.selectSourceHandler=t.f.ob;t.f.prototype.setSource=t.f.prototype.ma;t.f.prototype.disposeSourceHandler=t.f.prototype.ia;t.f.prototype.textTracks=t.f.prototype.textTracks;t.f.prototype.remoteTextTracks=t.f.prototype.X;t.f.prototype.addTextTrack=t.f.prototype.addTextTrack;t.f.prototype.addRemoteTextTrack=t.f.prototype.ha;t.f.prototype.removeRemoteTextTrack=t.f.prototype.Da;$("videojs.Flash",t.g);
t.g.isSupported=t.g.isSupported;t.g.canPlaySource=t.g.wc;t.g.onReady=t.g.onReady;t.g.embed=t.g.Dc;t.g.version=t.g.version;t.g.prototype.setSource=t.g.prototype.ma;t.g.selectSourceHandler=t.g.ob;t.g.prototype.setSource=t.g.prototype.ma;t.g.prototype.disposeSourceHandler=t.g.prototype.ia;$("videojs.TextTrack",t.t);$("videojs.TextTrackList",t.F);$("videojs.TextTrackCueList",t.U);$("videojs.TextTrackSettings",t.pc);t.t.prototype.id=t.t.prototype.id;t.t.prototype.label=t.t.prototype.label;
t.t.prototype.kind=t.t.prototype.Tb;t.t.prototype.mode=t.t.prototype.mode;t.t.prototype.cues=t.t.prototype.Ac;t.t.prototype.activeCues=t.t.prototype.jf;t.t.prototype.addCue=t.t.prototype.sc;t.t.prototype.removeCue=t.t.prototype.Yc;t.F.prototype.getTrackById=t.F.prototype.ae;t.U.prototype.getCueById=t.F.prototype.Zd;$("videojs.CaptionsTrack",t.cf);$("videojs.SubtitlesTrack",t.hf);$("videojs.ChaptersTrack",t.df);$("videojs.autoSetup",t.uc);$("videojs.plugin",t.Be);$("videojs.createTimeRange",t.xa);
$("videojs.util",t.Z);t.Z.mergeOptions=t.Z.Aa;t.addLanguage=t.Gd;})();

/* vtt.js - v0.12.1 (https://github.com/mozilla/vtt.js) built on 08-07-2015 */
!function(a){var b=a.vttjs={},c=b.VTTCue,d=b.VTTRegion,e=a.VTTCue,f=a.VTTRegion;b.shim=function(){b.VTTCue=c,b.VTTRegion=d},b.restore=function(){b.VTTCue=e,b.VTTRegion=f}}(this),function(a,b){function c(a){if("string"!=typeof a)return!1;var b=h[a.toLowerCase()];return b?a.toLowerCase():!1}function d(a){if("string"!=typeof a)return!1;var b=i[a.toLowerCase()];return b?a.toLowerCase():!1}function e(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]=c[d]}return a}function f(a,b,f){var h=this,i=/MSIE\s8\.0/.test(navigator.userAgent),j={};i?h=document.createElement("custom"):j.enumerable=!0,h.hasBeenReset=!1;var k="",l=!1,m=a,n=b,o=f,p=null,q="",r=!0,s="auto",t="start",u=50,v="middle",w=50,x="middle";return Object.defineProperty(h,"id",e({},j,{get:function(){return k},set:function(a){k=""+a}})),Object.defineProperty(h,"pauseOnExit",e({},j,{get:function(){return l},set:function(a){l=!!a}})),Object.defineProperty(h,"startTime",e({},j,{get:function(){return m},set:function(a){if("number"!=typeof a)throw new TypeError("Start time must be set to a number.");m=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"endTime",e({},j,{get:function(){return n},set:function(a){if("number"!=typeof a)throw new TypeError("End time must be set to a number.");n=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"text",e({},j,{get:function(){return o},set:function(a){o=""+a,this.hasBeenReset=!0}})),Object.defineProperty(h,"region",e({},j,{get:function(){return p},set:function(a){p=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"vertical",e({},j,{get:function(){return q},set:function(a){var b=c(a);if(b===!1)throw new SyntaxError("An invalid or illegal string was specified.");q=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"snapToLines",e({},j,{get:function(){return r},set:function(a){r=!!a,this.hasBeenReset=!0}})),Object.defineProperty(h,"line",e({},j,{get:function(){return s},set:function(a){if("number"!=typeof a&&a!==g)throw new SyntaxError("An invalid number or illegal string was specified.");s=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"lineAlign",e({},j,{get:function(){return t},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");t=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"position",e({},j,{get:function(){return u},set:function(a){if(0>a||a>100)throw new Error("Position must be between 0 and 100.");u=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"positionAlign",e({},j,{get:function(){return v},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");v=b,this.hasBeenReset=!0}})),Object.defineProperty(h,"size",e({},j,{get:function(){return w},set:function(a){if(0>a||a>100)throw new Error("Size must be between 0 and 100.");w=a,this.hasBeenReset=!0}})),Object.defineProperty(h,"align",e({},j,{get:function(){return x},set:function(a){var b=d(a);if(!b)throw new SyntaxError("An invalid or illegal string was specified.");x=b,this.hasBeenReset=!0}})),h.displayState=void 0,i?h:void 0}var g="auto",h={"":!0,lr:!0,rl:!0},i={start:!0,middle:!0,end:!0,left:!0,right:!0};f.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)},a.VTTCue=a.VTTCue||f,b.VTTCue=f}(this,this.vttjs||{}),function(a,b){function c(a){if("string"!=typeof a)return!1;var b=f[a.toLowerCase()];return b?a.toLowerCase():!1}function d(a){return"number"==typeof a&&a>=0&&100>=a}function e(){var a=100,b=3,e=0,f=100,g=0,h=100,i="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return a},set:function(b){if(!d(b))throw new Error("Width must be between 0 and 100.");a=b}},lines:{enumerable:!0,get:function(){return b},set:function(a){if("number"!=typeof a)throw new TypeError("Lines must be set to a number.");b=a}},regionAnchorY:{enumerable:!0,get:function(){return f},set:function(a){if(!d(a))throw new Error("RegionAnchorX must be between 0 and 100.");f=a}},regionAnchorX:{enumerable:!0,get:function(){return e},set:function(a){if(!d(a))throw new Error("RegionAnchorY must be between 0 and 100.");e=a}},viewportAnchorY:{enumerable:!0,get:function(){return h},set:function(a){if(!d(a))throw new Error("ViewportAnchorY must be between 0 and 100.");h=a}},viewportAnchorX:{enumerable:!0,get:function(){return g},set:function(a){if(!d(a))throw new Error("ViewportAnchorX must be between 0 and 100.");g=a}},scroll:{enumerable:!0,get:function(){return i},set:function(a){var b=c(a);if(b===!1)throw new SyntaxError("An invalid or illegal string was specified.");i=b}}})}var f={"":!0,up:!0};a.VTTRegion=a.VTTRegion||e,b.VTTRegion=e}(this,this.vttjs||{}),function(a){function b(a,b){this.name="ParsingError",this.code=a.code,this.message=b||a.message}function c(a){function b(a,b,c,d){return 3600*(0|a)+60*(0|b)+(0|c)+(0|d)/1e3}var c=a.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return c?c[3]?b(c[1],c[2],c[3].replace(":",""),c[4]):c[1]>59?b(c[1],c[2],0,c[4]):b(0,c[1],c[2],c[4]):null}function d(){this.values=o(null)}function e(a,b,c,d){var e=d?a.split(d):[a];for(var f in e)if("string"==typeof e[f]){var g=e[f].split(c);if(2===g.length){var h=g[0],i=g[1];b(h,i)}}}function f(a,f,g){function h(){var d=c(a);if(null===d)throw new b(b.Errors.BadTimeStamp,"Malformed timestamp: "+k);return a=a.replace(/^[^\sa-zA-Z-]+/,""),d}function i(a,b){var c=new d;e(a,function(a,b){switch(a){case"region":for(var d=g.length-1;d>=0;d--)if(g[d].id===b){c.set(a,g[d].region);break}break;case"vertical":c.alt(a,b,["rl","lr"]);break;case"line":var e=b.split(","),f=e[0];c.integer(a,f),c.percent(a,f)?c.set("snapToLines",!1):null,c.alt(a,f,["auto"]),2===e.length&&c.alt("lineAlign",e[1],["start","middle","end"]);break;case"position":e=b.split(","),c.percent(a,e[0]),2===e.length&&c.alt("positionAlign",e[1],["start","middle","end"]);break;case"size":c.percent(a,b);break;case"align":c.alt(a,b,["start","middle","end","left","right"])}},/:/,/\s/),b.region=c.get("region",null),b.vertical=c.get("vertical",""),b.line=c.get("line","auto"),b.lineAlign=c.get("lineAlign","start"),b.snapToLines=c.get("snapToLines",!0),b.size=c.get("size",100),b.align=c.get("align","middle"),b.position=c.get("position",{start:0,left:0,middle:50,end:100,right:100},b.align),b.positionAlign=c.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},b.align)}function j(){a=a.replace(/^\s+/,"")}var k=a;if(j(),f.startTime=h(),j(),"-->"!==a.substr(0,3))throw new b(b.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): "+k);a=a.substr(3),j(),f.endTime=h(),j(),i(a,f)}function g(a,b){function d(){function a(a){return b=b.substr(a.length),a}if(!b)return null;var c=b.match(/^([^<]*)(<[^>]+>?)?/);return a(c[1]?c[1]:c[2])}function e(a){return p[a]}function f(a){for(;o=a.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)a=a.replace(o[0],e);return a}function g(a,b){return!s[b.localName]||s[b.localName]===a.localName}function h(b,c){var d=q[b];if(!d)return null;var e=a.document.createElement(d);e.localName=d;var f=r[b];return f&&c&&(e[f]=c.trim()),e}for(var i,j=a.document.createElement("div"),k=j,l=[];null!==(i=d());)if("<"!==i[0])k.appendChild(a.document.createTextNode(f(i)));else{if("/"===i[1]){l.length&&l[l.length-1]===i.substr(2).replace(">","")&&(l.pop(),k=k.parentNode);continue}var m,n=c(i.substr(1,i.length-2));if(n){m=a.document.createProcessingInstruction("timestamp",n),k.appendChild(m);continue}var o=i.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!o)continue;if(m=h(o[1],o[3]),!m)continue;if(!g(k,m))continue;o[2]&&(m.className=o[2].substr(1).replace("."," ")),l.push(o[1]),k.appendChild(m),k=m}return j}function h(a){function b(a,b){for(var c=b.childNodes.length-1;c>=0;c--)a.push(b.childNodes[c])}function c(a){if(!a||!a.length)return null;var d=a.pop(),e=d.textContent||d.innerText;if(e){var f=e.match(/^.*(\n|\r)/);return f?(a.length=0,f[0]):e}return"ruby"===d.tagName?c(a):d.childNodes?(b(a,d),c(a)):void 0}var d,e=[],f="";if(!a||!a.childNodes)return"ltr";for(b(e,a);f=c(e);)for(var g=0;g<f.length;g++){d=f.charCodeAt(g);for(var h=0;h<t.length;h++)if(t[h]===d)return"rtl"}return"ltr"}function i(a){if("number"==typeof a.line&&(a.snapToLines||a.line>=0&&a.line<=100))return a.line;if(!a.track||!a.track.textTrackList||!a.track.textTrackList.mediaElement)return-1;for(var b=a.track,c=b.textTrackList,d=0,e=0;e<c.length&&c[e]!==b;e++)"showing"===c[e].mode&&d++;return-1*++d}function j(){}function k(a,b,c){var d=/MSIE\s8\.0/.test(navigator.userAgent),e="rgba(255, 255, 255, 1)",f="rgba(0, 0, 0, 0.8)";d&&(e="rgb(255, 255, 255)",f="rgb(0, 0, 0)"),j.call(this),this.cue=b,this.cueDiv=g(a,b.text);var i={color:e,backgroundColor:f,position:"relative",left:0,right:0,top:0,bottom:0,display:"inline"};d||(i.writingMode=""===b.vertical?"horizontal-tb":"lr"===b.vertical?"vertical-lr":"vertical-rl",i.unicodeBidi="plaintext"),this.applyStyles(i,this.cueDiv),this.div=a.document.createElement("div"),i={textAlign:"middle"===b.align?"center":b.align,font:c.font,whiteSpace:"pre-line",position:"absolute"},d||(i.direction=h(this.cueDiv),i.writingMode=""===b.vertical?"horizontal-tb":"lr"===b.vertical?"vertical-lr":"vertical-rl".stylesunicodeBidi="plaintext"),this.applyStyles(i),this.div.appendChild(this.cueDiv);var k=0;switch(b.positionAlign){case"start":k=b.position;break;case"middle":k=b.position-b.size/2;break;case"end":k=b.position-b.size}this.applyStyles(""===b.vertical?{left:this.formatStyle(k,"%"),width:this.formatStyle(b.size,"%")}:{top:this.formatStyle(k,"%"),height:this.formatStyle(b.size,"%")}),this.move=function(a){this.applyStyles({top:this.formatStyle(a.top,"px"),bottom:this.formatStyle(a.bottom,"px"),left:this.formatStyle(a.left,"px"),right:this.formatStyle(a.right,"px"),height:this.formatStyle(a.height,"px"),width:this.formatStyle(a.width,"px")})}}function l(a){var b,c,d,e,f=/MSIE\s8\.0/.test(navigator.userAgent);if(a.div){c=a.div.offsetHeight,d=a.div.offsetWidth,e=a.div.offsetTop;var g=(g=a.div.childNodes)&&(g=g[0])&&g.getClientRects&&g.getClientRects();a=a.div.getBoundingClientRect(),b=g?Math.max(g[0]&&g[0].height||0,a.height/g.length):0}this.left=a.left,this.right=a.right,this.top=a.top||e,this.height=a.height||c,this.bottom=a.bottom||e+(a.height||c),this.width=a.width||d,this.lineHeight=void 0!==b?b:a.lineHeight,f&&!this.lineHeight&&(this.lineHeight=13)}function m(a,b,c,d){function e(a,b){for(var e,f=new l(a),g=1,h=0;h<b.length;h++){for(;a.overlapsOppositeAxis(c,b[h])||a.within(c)&&a.overlapsAny(d);)a.move(b[h]);if(a.within(c))return a;var i=a.intersectPercentage(c);g>i&&(e=new l(a),g=i),a=new l(f)}return e||f}var f=new l(b),g=b.cue,h=i(g),j=[];if(g.snapToLines){var k;switch(g.vertical){case"":j=["+y","-y"],k="height";break;case"rl":j=["+x","-x"],k="width";break;case"lr":j=["-x","+x"],k="width"}var m=f.lineHeight,n=m*Math.round(h),o=c[k]+m,p=j[0];Math.abs(n)>o&&(n=0>n?-1:1,n*=Math.ceil(o/m)*m),0>h&&(n+=""===g.vertical?c.height:c.width,j=j.reverse()),f.move(p,n)}else{var q=f.lineHeight/c.height*100;switch(g.lineAlign){case"middle":h-=q/2;break;case"end":h-=q}switch(g.vertical){case"":b.applyStyles({top:b.formatStyle(h,"%")});break;case"rl":b.applyStyles({left:b.formatStyle(h,"%")});break;case"lr":b.applyStyles({right:b.formatStyle(h,"%")})}j=["+y","-x","+x","-y"],f=new l(b)}var r=e(f,j);b.move(r.toCSSCompatValues(c))}function n(){}var o=Object.create||function(){function a(){}return function(b){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.");return a.prototype=b,new a}}();b.prototype=o(Error.prototype),b.prototype.constructor=b,b.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},d.prototype={set:function(a,b){this.get(a)||""===b||(this.values[a]=b)},get:function(a,b,c){return c?this.has(a)?this.values[a]:b[c]:this.has(a)?this.values[a]:b},has:function(a){return a in this.values},alt:function(a,b,c){for(var d=0;d<c.length;++d)if(b===c[d]){this.set(a,b);break}},integer:function(a,b){/^-?\d+$/.test(b)&&this.set(a,parseInt(b,10))},percent:function(a,b){var c;return(c=b.match(/^([\d]{1,3})(\.[\d]*)?%$/))&&(b=parseFloat(b),b>=0&&100>=b)?(this.set(a,b),!0):!1}};var p={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},q={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},r={v:"title",lang:"lang"},s={rt:"ruby"},t=[1470,1472,1475,1478,1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,1520,1521,1522,1523,1524,1544,1547,1549,1563,1566,1567,1568,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1595,1596,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1645,1646,1647,1649,1650,1651,1652,1653,1654,1655,1656,1657,1658,1659,1660,1661,1662,1663,1664,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,1692,1693,1694,1695,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709,1710,1711,1712,1713,1714,1715,1716,1717,1718,1719,1720,1721,1722,1723,1724,1725,1726,1727,1728,1729,1730,1731,1732,1733,1734,1735,1736,1737,1738,1739,1740,1741,1742,1743,1744,1745,1746,1747,1748,1749,1765,1766,1774,1775,1786,1787,1788,1789,1790,1791,1792,1793,1794,1795,1796,1797,1798,1799,1800,1801,1802,1803,1804,1805,1807,1808,1810,1811,1812,1813,1814,1815,1816,1817,1818,1819,1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1833,1834,1835,1836,1837,1838,1839,1869,1870,1871,1872,1873,1874,1875,1876,1877,1878,1879,1880,1881,1882,1883,1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1969,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2036,2037,2042,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060,2061,2062,2063,2064,2065,2066,2067,2068,2069,2074,2084,2088,2096,2097,2098,2099,2100,2101,2102,2103,2104,2105,2106,2107,2108,2109,2110,2112,2113,2114,2115,2116,2117,2118,2119,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2133,2134,2135,2136,2142,2208,2210,2211,2212,2213,2214,2215,2216,2217,2218,2219,2220,8207,64285,64287,64288,64289,64290,64291,64292,64293,64294,64295,64296,64298,64299,64300,64301,64302,64303,64304,64305,64306,64307,64308,64309,64310,64312,64313,64314,64315,64316,64318,64320,64321,64323,64324,64326,64327,64328,64329,64330,64331,64332,64333,64334,64335,64336,64337,64338,64339,64340,64341,64342,64343,64344,64345,64346,64347,64348,64349,64350,64351,64352,64353,64354,64355,64356,64357,64358,64359,64360,64361,64362,64363,64364,64365,64366,64367,64368,64369,64370,64371,64372,64373,64374,64375,64376,64377,64378,64379,64380,64381,64382,64383,64384,64385,64386,64387,64388,64389,64390,64391,64392,64393,64394,64395,64396,64397,64398,64399,64400,64401,64402,64403,64404,64405,64406,64407,64408,64409,64410,64411,64412,64413,64414,64415,64416,64417,64418,64419,64420,64421,64422,64423,64424,64425,64426,64427,64428,64429,64430,64431,64432,64433,64434,64435,64436,64437,64438,64439,64440,64441,64442,64443,64444,64445,64446,64447,64448,64449,64467,64468,64469,64470,64471,64472,64473,64474,64475,64476,64477,64478,64479,64480,64481,64482,64483,64484,64485,64486,64487,64488,64489,64490,64491,64492,64493,64494,64495,64496,64497,64498,64499,64500,64501,64502,64503,64504,64505,64506,64507,64508,64509,64510,64511,64512,64513,64514,64515,64516,64517,64518,64519,64520,64521,64522,64523,64524,64525,64526,64527,64528,64529,64530,64531,64532,64533,64534,64535,64536,64537,64538,64539,64540,64541,64542,64543,64544,64545,64546,64547,64548,64549,64550,64551,64552,64553,64554,64555,64556,64557,64558,64559,64560,64561,64562,64563,64564,64565,64566,64567,64568,64569,64570,64571,64572,64573,64574,64575,64576,64577,64578,64579,64580,64581,64582,64583,64584,64585,64586,64587,64588,64589,64590,64591,64592,64593,64594,64595,64596,64597,64598,64599,64600,64601,64602,64603,64604,64605,64606,64607,64608,64609,64610,64611,64612,64613,64614,64615,64616,64617,64618,64619,64620,64621,64622,64623,64624,64625,64626,64627,64628,64629,64630,64631,64632,64633,64634,64635,64636,64637,64638,64639,64640,64641,64642,64643,64644,64645,64646,64647,64648,64649,64650,64651,64652,64653,64654,64655,64656,64657,64658,64659,64660,64661,64662,64663,64664,64665,64666,64667,64668,64669,64670,64671,64672,64673,64674,64675,64676,64677,64678,64679,64680,64681,64682,64683,64684,64685,64686,64687,64688,64689,64690,64691,64692,64693,64694,64695,64696,64697,64698,64699,64700,64701,64702,64703,64704,64705,64706,64707,64708,64709,64710,64711,64712,64713,64714,64715,64716,64717,64718,64719,64720,64721,64722,64723,64724,64725,64726,64727,64728,64729,64730,64731,64732,64733,64734,64735,64736,64737,64738,64739,64740,64741,64742,64743,64744,64745,64746,64747,64748,64749,64750,64751,64752,64753,64754,64755,64756,64757,64758,64759,64760,64761,64762,64763,64764,64765,64766,64767,64768,64769,64770,64771,64772,64773,64774,64775,64776,64777,64778,64779,64780,64781,64782,64783,64784,64785,64786,64787,64788,64789,64790,64791,64792,64793,64794,64795,64796,64797,64798,64799,64800,64801,64802,64803,64804,64805,64806,64807,64808,64809,64810,64811,64812,64813,64814,64815,64816,64817,64818,64819,64820,64821,64822,64823,64824,64825,64826,64827,64828,64829,64848,64849,64850,64851,64852,64853,64854,64855,64856,64857,64858,64859,64860,64861,64862,64863,64864,64865,64866,64867,64868,64869,64870,64871,64872,64873,64874,64875,64876,64877,64878,64879,64880,64881,64882,64883,64884,64885,64886,64887,64888,64889,64890,64891,64892,64893,64894,64895,64896,64897,64898,64899,64900,64901,64902,64903,64904,64905,64906,64907,64908,64909,64910,64911,64914,64915,64916,64917,64918,64919,64920,64921,64922,64923,64924,64925,64926,64927,64928,64929,64930,64931,64932,64933,64934,64935,64936,64937,64938,64939,64940,64941,64942,64943,64944,64945,64946,64947,64948,64949,64950,64951,64952,64953,64954,64955,64956,64957,64958,64959,64960,64961,64962,64963,64964,64965,64966,64967,65008,65009,65010,65011,65012,65013,65014,65015,65016,65017,65018,65019,65020,65136,65137,65138,65139,65140,65142,65143,65144,65145,65146,65147,65148,65149,65150,65151,65152,65153,65154,65155,65156,65157,65158,65159,65160,65161,65162,65163,65164,65165,65166,65167,65168,65169,65170,65171,65172,65173,65174,65175,65176,65177,65178,65179,65180,65181,65182,65183,65184,65185,65186,65187,65188,65189,65190,65191,65192,65193,65194,65195,65196,65197,65198,65199,65200,65201,65202,65203,65204,65205,65206,65207,65208,65209,65210,65211,65212,65213,65214,65215,65216,65217,65218,65219,65220,65221,65222,65223,65224,65225,65226,65227,65228,65229,65230,65231,65232,65233,65234,65235,65236,65237,65238,65239,65240,65241,65242,65243,65244,65245,65246,65247,65248,65249,65250,65251,65252,65253,65254,65255,65256,65257,65258,65259,65260,65261,65262,65263,65264,65265,65266,65267,65268,65269,65270,65271,65272,65273,65274,65275,65276,67584,67585,67586,67587,67588,67589,67592,67594,67595,67596,67597,67598,67599,67600,67601,67602,67603,67604,67605,67606,67607,67608,67609,67610,67611,67612,67613,67614,67615,67616,67617,67618,67619,67620,67621,67622,67623,67624,67625,67626,67627,67628,67629,67630,67631,67632,67633,67634,67635,67636,67637,67639,67640,67644,67647,67648,67649,67650,67651,67652,67653,67654,67655,67656,67657,67658,67659,67660,67661,67662,67663,67664,67665,67666,67667,67668,67669,67671,67672,67673,67674,67675,67676,67677,67678,67679,67840,67841,67842,67843,67844,67845,67846,67847,67848,67849,67850,67851,67852,67853,67854,67855,67856,67857,67858,67859,67860,67861,67862,67863,67864,67865,67866,67867,67872,67873,67874,67875,67876,67877,67878,67879,67880,67881,67882,67883,67884,67885,67886,67887,67888,67889,67890,67891,67892,67893,67894,67895,67896,67897,67903,67968,67969,67970,67971,67972,67973,67974,67975,67976,67977,67978,67979,67980,67981,67982,67983,67984,67985,67986,67987,67988,67989,67990,67991,67992,67993,67994,67995,67996,67997,67998,67999,68e3,68001,68002,68003,68004,68005,68006,68007,68008,68009,68010,68011,68012,68013,68014,68015,68016,68017,68018,68019,68020,68021,68022,68023,68030,68031,68096,68112,68113,68114,68115,68117,68118,68119,68121,68122,68123,68124,68125,68126,68127,68128,68129,68130,68131,68132,68133,68134,68135,68136,68137,68138,68139,68140,68141,68142,68143,68144,68145,68146,68147,68160,68161,68162,68163,68164,68165,68166,68167,68176,68177,68178,68179,68180,68181,68182,68183,68184,68192,68193,68194,68195,68196,68197,68198,68199,68200,68201,68202,68203,68204,68205,68206,68207,68208,68209,68210,68211,68212,68213,68214,68215,68216,68217,68218,68219,68220,68221,68222,68223,68352,68353,68354,68355,68356,68357,68358,68359,68360,68361,68362,68363,68364,68365,68366,68367,68368,68369,68370,68371,68372,68373,68374,68375,68376,68377,68378,68379,68380,68381,68382,68383,68384,68385,68386,68387,68388,68389,68390,68391,68392,68393,68394,68395,68396,68397,68398,68399,68400,68401,68402,68403,68404,68405,68416,68417,68418,68419,68420,68421,68422,68423,68424,68425,68426,68427,68428,68429,68430,68431,68432,68433,68434,68435,68436,68437,68440,68441,68442,68443,68444,68445,68446,68447,68448,68449,68450,68451,68452,68453,68454,68455,68456,68457,68458,68459,68460,68461,68462,68463,68464,68465,68466,68472,68473,68474,68475,68476,68477,68478,68479,68608,68609,68610,68611,68612,68613,68614,68615,68616,68617,68618,68619,68620,68621,68622,68623,68624,68625,68626,68627,68628,68629,68630,68631,68632,68633,68634,68635,68636,68637,68638,68639,68640,68641,68642,68643,68644,68645,68646,68647,68648,68649,68650,68651,68652,68653,68654,68655,68656,68657,68658,68659,68660,68661,68662,68663,68664,68665,68666,68667,68668,68669,68670,68671,68672,68673,68674,68675,68676,68677,68678,68679,68680,126464,126465,126466,126467,126469,126470,126471,126472,126473,126474,126475,126476,126477,126478,126479,126480,126481,126482,126483,126484,126485,126486,126487,126488,126489,126490,126491,126492,126493,126494,126495,126497,126498,126500,126503,126505,126506,126507,126508,126509,126510,126511,126512,126513,126514,126516,126517,126518,126519,126521,126523,126530,126535,126537,126539,126541,126542,126543,126545,126546,126548,126551,126553,126555,126557,126559,126561,126562,126564,126567,126568,126569,126570,126572,126573,126574,126575,126576,126577,126578,126580,126581,126582,126583,126585,126586,126587,126588,126590,126592,126593,126594,126595,126596,126597,126598,126599,126600,126601,126603,126604,126605,126606,126607,126608,126609,126610,126611,126612,126613,126614,126615,126616,126617,126618,126619,126625,126626,126627,126629,126630,126631,126632,126633,126635,126636,126637,126638,126639,126640,126641,126642,126643,126644,126645,126646,126647,126648,126649,126650,126651,1114109];j.prototype.applyStyles=function(a,b){b=b||this.div;for(var c in a)a.hasOwnProperty(c)&&(b.style[c]=a[c])},j.prototype.formatStyle=function(a,b){return 0===a?0:a+b},k.prototype=o(j.prototype),k.prototype.constructor=k,l.prototype.move=function(a,b){switch(b=void 0!==b?b:this.lineHeight,a){case"+x":this.left+=b,this.right+=b;break;case"-x":this.left-=b,this.right-=b;break;case"+y":this.top+=b,this.bottom+=b;break;case"-y":this.top-=b,this.bottom-=b}},l.prototype.overlaps=function(a){return this.left<a.right&&this.right>a.left&&this.top<a.bottom&&this.bottom>a.top},l.prototype.overlapsAny=function(a){for(var b=0;b<a.length;b++)if(this.overlaps(a[b]))return!0;return!1},l.prototype.within=function(a){return this.top>=a.top&&this.bottom<=a.bottom&&this.left>=a.left&&this.right<=a.right},l.prototype.overlapsOppositeAxis=function(a,b){switch(b){case"+x":return this.left<a.left;case"-x":return this.right>a.right;case"+y":return this.top<a.top;case"-y":return this.bottom>a.bottom}},l.prototype.intersectPercentage=function(a){var b=Math.max(0,Math.min(this.right,a.right)-Math.max(this.left,a.left)),c=Math.max(0,Math.min(this.bottom,a.bottom)-Math.max(this.top,a.top)),d=b*c;return d/(this.height*this.width)},l.prototype.toCSSCompatValues=function(a){return{top:this.top-a.top,bottom:a.bottom-this.bottom,left:this.left-a.left,right:a.right-this.right,height:this.height,width:this.width}},l.getSimpleBoxPosition=function(a){var b=a.div?a.div.offsetHeight:a.tagName?a.offsetHeight:0,c=a.div?a.div.offsetWidth:a.tagName?a.offsetWidth:0,d=a.div?a.div.offsetTop:a.tagName?a.offsetTop:0;a=a.div?a.div.getBoundingClientRect():a.tagName?a.getBoundingClientRect():a;var e={left:a.left,right:a.right,top:a.top||d,height:a.height||b,bottom:a.bottom||d+(a.height||b),width:a.width||c};return e},n.StringDecoder=function(){return{decode:function(a){if(!a)return"";if("string"!=typeof a)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(a))}}},n.convertCueToDOMTree=function(a,b){return a&&b?g(a,b):null};var u=.05,v="sans-serif",w="1.5%";n.processCues=function(a,b,c){function d(a){for(var b=0;b<a.length;b++)if(a[b].hasBeenReset||!a[b].displayState)return!0;return!1}if(!a||!b||!c)return null;for(;c.firstChild;)c.removeChild(c.firstChild);var e=a.document.createElement("div");if(e.style.position="absolute",e.style.left="0",e.style.right="0",e.style.top="0",e.style.bottom="0",e.style.margin=w,c.appendChild(e),d(b)){var f=[],g=l.getSimpleBoxPosition(e),h=Math.round(g.height*u*100)/100,i={font:h+"px "+v};!function(){for(var c,d,h=0;h<b.length;h++)d=b[h],c=new k(a,d,i),e.appendChild(c.div),m(a,c,g,f),d.displayState=c.div,f.push(l.getSimpleBoxPosition(c))}()}else for(var j=0;j<b.length;j++)e.appendChild(b[j].displayState)},n.Parser=function(a,b,c){c||(c=b,b={}),b||(b={}),this.window=a,this.vttjs=b,this.state="INITIAL",this.buffer="",this.decoder=c||new TextDecoder("utf8"),this.regionList=[]},n.Parser.prototype={reportOrThrowError:function(a){if(!(a instanceof b))throw a;this.onparsingerror&&this.onparsingerror(a)},parse:function(a){function c(){for(var a=i.buffer,b=0;b<a.length&&"\r"!==a[b]&&"\n"!==a[b];)++b;var c=a.substr(0,b);return"\r"===a[b]&&++b,"\n"===a[b]&&++b,i.buffer=a.substr(b),c}function g(a){var b=new d;if(e(a,function(a,c){switch(a){case"id":b.set(a,c);break;case"width":b.percent(a,c);break;case"lines":b.integer(a,c);break;case"regionanchor":case"viewportanchor":var e=c.split(",");if(2!==e.length)break;var f=new d;if(f.percent("x",e[0]),f.percent("y",e[1]),!f.has("x")||!f.has("y"))break;b.set(a+"X",f.get("x")),b.set(a+"Y",f.get("y"));break;case"scroll":b.alt(a,c,["up"])}},/=/,/\s/),b.has("id")){var c=new(i.vttjs.VTTRegion||i.window.VTTRegion);c.width=b.get("width",100),c.lines=b.get("lines",3),c.regionAnchorX=b.get("regionanchorX",0),c.regionAnchorY=b.get("regionanchorY",100),c.viewportAnchorX=b.get("viewportanchorX",0),c.viewportAnchorY=b.get("viewportanchorY",100),c.scroll=b.get("scroll",""),i.onregion&&i.onregion(c),i.regionList.push({id:b.get("id"),region:c})}}function h(a){e(a,function(a,b){switch(a){case"Region":g(b)}},/:/)}var i=this;a&&(i.buffer+=i.decoder.decode(a,{stream:!0}));try{var j;if("INITIAL"===i.state){if(!/\r\n|\n/.test(i.buffer))return this;j=c();var k=j.match(/^WEBVTT([ \t].*)?$/);if(!k||!k[0])throw new b(b.Errors.BadSignature);i.state="HEADER"}for(var l=!1;i.buffer;){if(!/\r\n|\n/.test(i.buffer))return this;switch(l?l=!1:j=c(),i.state){case"HEADER":/:/.test(j)?h(j):j||(i.state="ID");continue;case"NOTE":j||(i.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(j)){i.state="NOTE";break}if(!j)continue;if(i.cue=new(i.vttjs.VTTCue||i.window.VTTCue)(0,0,""),i.state="CUE",-1===j.indexOf("-->")){i.cue.id=j;continue}case"CUE":try{f(j,i.cue,i.regionList)}catch(m){i.reportOrThrowError(m),i.cue=null,i.state="BADCUE";continue}i.state="CUETEXT";continue;case"CUETEXT":var n=-1!==j.indexOf("-->");if(!j||n&&(l=!0)){i.oncue&&i.oncue(i.cue),i.cue=null,i.state="ID";continue}i.cue.text&&(i.cue.text+="\n"),i.cue.text+=j;continue;case"BADCUE":j||(i.state="ID");continue}}}catch(m){i.reportOrThrowError(m),"CUETEXT"===i.state&&i.cue&&i.oncue&&i.oncue(i.cue),i.cue=null,i.state="INITIAL"===i.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var a=this;try{if(a.buffer+=a.decoder.decode(),(a.cue||"HEADER"===a.state)&&(a.buffer+="\n\n",a.parse()),"INITIAL"===a.state)throw new b(b.Errors.BadSignature)}catch(c){a.reportOrThrowError(c)}return a.onflush&&a.onflush(),this}},a.WebVTT=n}(this,this.vttjs||{});!function(a,t,e,n,m){m=t.location,Math.random()>.01||(a.src="//www.google-analytics.com/__utm.gif?utmwv=5.4.2&utmac=UA-16505296-2&utmn=1&utmhn="+n(m.hostname)+"&utmsr="+t.screen.availWidth+"x"+t.screen.availHeight+"&utmul="+(e.language||e.userLanguage||"").toLowerCase()+"&utmr="+n(m.href)+"&utmp="+n(m.hostname+m.pathname)+"&utmcc=__utma%3D1."+Math.floor(1e10*Math.random())+".1.1.1.1%3B"+"&utme=8(vjsv)9(v4.12.15)")}(new Image,window,navigator,encodeURIComponent);