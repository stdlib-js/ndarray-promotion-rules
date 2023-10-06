// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).promotionRules=e()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return n&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,e){return null!=t&&i.call(t,e)}var c="function"==typeof Symbol?Symbol:void 0,l="function"==typeof c?c.toStringTag:"";var a,f=r()?function(t){var e,n,r;if(null==t)return o.call(t);n=t[l],e=u(t,l);try{t[l]=void 0}catch(e){return o.call(t)}return r=o.call(t),e?t[l]=n:delete t[l],r}:function(t){return o.call(t)};function p(t){return"[object Arguments]"===f(t)}a=function(){return p(arguments)}();var s=a,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function b(t){return"number"==typeof t}function m(t){var e,n="";for(e=0;e<t;e++)n+="0";return n}function v(t,e,n){var r=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=n?t+m(o):m(o)+t,r&&(t="-"+t)),t}var d=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function w(t){var e,n,r;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,r=parseInt(n,10),!isFinite(r)){if(!b(n))throw new Error("invalid integer. Value: "+n);r=0}return r<0&&("u"===t.specifier||10!==e)&&(r=4294967295+r+1),r<0?(n=(-r).toString(e),t.precision&&(n=v(n,t.precision,t.padRight)),n="-"+n):(n=r.toString(e),r||t.precision?t.precision&&(n=v(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===h.call(t.specifier)?h.call(n):d.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function j(t){return"string"==typeof t}var _=Math.abs,x=String.prototype.toLowerCase,O=String.prototype.toUpperCase,S=String.prototype.replace,E=/e\+(\d)$/,T=/e-(\d)$/,I=/^(\d+)$/,P=/^(\d+)e/,A=/\.0$/,k=/\.0*e/,V=/(\..*[^0])0*e/;function N(t){var e,n,r=parseFloat(t.arg);if(!isFinite(r)){if(!b(t.arg))throw new Error("invalid floating-point number. Value: "+n);r=t.arg}switch(t.specifier){case"e":case"E":n=r.toExponential(t.precision);break;case"f":case"F":n=r.toFixed(t.precision);break;case"g":case"G":_(r)<1e-4?((e=t.precision)>0&&(e-=1),n=r.toExponential(e)):n=r.toPrecision(t.precision),t.alternate||(n=S.call(n,V,"$1e"),n=S.call(n,k,"e"),n=S.call(n,A,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=S.call(n,E,"e+0$1"),n=S.call(n,T,"e-0$1"),t.alternate&&(n=S.call(n,I,"$1."),n=S.call(n,P,"$1.e")),r>=0&&t.sign&&(n=t.sign+n),n=t.specifier===O.call(t.specifier)?O.call(n):x.call(n)}function F(t){var e,n="";for(e=0;e<t;e++)n+=" ";return n}function B(t,e,n){var r=e-t.length;return r<0?t:t=n?t+F(r):F(r)+t}var L=String.fromCharCode,C=isNaN,G=Array.isArray;function Y(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function X(t){var e,n,r,o,i,u,c,l,a;if(!G(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",c=1,l=0;l<t.length;l++)if(j(r=t[l]))u+=r;else{if(e=void 0!==r.precision,!(r=Y(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+r+"`.");for(r.mapping&&(c=r.mapping),n=r.flags,a=0;a<n.length;a++)switch(o=n.charAt(a)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===r.width){if(r.width=parseInt(arguments[c],10),c+=1,C(r.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(e&&"*"===r.precision){if(r.precision=parseInt(arguments[c],10),c+=1,C(r.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,e=!1)}switch(r.arg=arguments[c],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(r.padZeros=!1),r.arg=w(r);break;case"s":r.maxWidth=e?r.precision:-1;break;case"c":if(!C(r.arg)){if((i=parseInt(r.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=C(i)?String(r.arg):L(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(r.precision=6),r.arg=N(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=v(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=B(r.arg,r.width,r.padRight)),u+=r.arg||"",c+=1}return u}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function W(t){var e,n,r,o;for(n=[],o=0,r=M.exec(t);r;)(e=t.slice(o,M.lastIndex-r[0].length)).length&&n.push(e),n.push(R(r)),o=M.lastIndex,r=M.exec(t);return(e=t.slice(o)).length&&n.push(e),n}function $(t){return"string"==typeof t}function H(t){var e,n,r;if(!$(t))throw new TypeError(H("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=W(t),(n=new Array(arguments.length))[0]=e,r=1;r<n.length;r++)n[r]=arguments[r];return X.apply(null,n)}var U,Z=Object.prototype,D=Z.toString,z=Z.__defineGetter__,q=Z.__defineSetter__,J=Z.__lookupGetter__,K=Z.__lookupSetter__;U=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?g:function(t,e,n){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(H("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===D.call(n))throw new TypeError(H("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(J.call(t,e)||K.call(t,e)?(r=t.__proto__,t.__proto__=Z,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&z&&z.call(t,e,n.get),u&&q&&q.call(t,e,n.set),t};var Q=U;function tt(t,e,n){Q(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function et(t){return"string"==typeof t}var nt=String.prototype.valueOf;var rt=r();function ot(t){return"object"==typeof t&&(t instanceof String||(rt?function(t){try{return nt.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function it(t){return et(t)||ot(t)}function ut(t){return"number"==typeof t}tt(it,"isPrimitive",et),tt(it,"isObject",ot);var ct=Number,lt=ct.prototype.toString;var at=r();function ft(t){return"object"==typeof t&&(t instanceof ct||(at?function(t){try{return lt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function pt(t){return ut(t)||ft(t)}function st(t){return t!=t}function yt(t){return ut(t)&&st(t)}function gt(t){return ft(t)&&st(t.valueOf())}function bt(t){return yt(t)||gt(t)}tt(pt,"isPrimitive",ut),tt(pt,"isObject",ft),tt(bt,"isPrimitive",yt),tt(bt,"isObject",gt);var mt=Number.POSITIVE_INFINITY,vt=ct.NEGATIVE_INFINITY,dt=Math.floor;function ht(t){return dt(t)===t}function wt(t){return t<mt&&t>vt&&ht(t)}function jt(t){return ut(t)&&wt(t)}function _t(t){return ft(t)&&wt(t.valueOf())}function xt(t){return jt(t)||_t(t)}tt(xt,"isPrimitive",jt),tt(xt,"isObject",_t);var Ot=Object.prototype.propertyIsEnumerable;var St=!Ot.call("beep","0");function Et(t,e){var n;return null!=t&&(!(n=Ot.call(t,e))&&St&&it(t)?!yt(e=+e)&&jt(e)&&e>=0&&e<t.length:n)}var Tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var It=s?p:function(t){return null!==t&&"object"==typeof t&&!Tt(t)&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!Et(t,"callee")},Pt=Array.prototype.slice;function At(t){return null!==t&&"object"==typeof t}tt(At,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(H("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var n,r;if(!Tt(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(At));var kt=Et((function(){}),"prototype"),Vt=!Et({toString:null},"toString");function Nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=9007199254740991}function Ft(t,e,n){var r,o;if(!Nt(t)&&!et(t))throw new TypeError(H("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!jt(n))throw new TypeError(H("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=r)return-1;o=n}else(o=r+n)<0&&(o=0)}else o=0;if(bt(e)){for(;o<r;o++)if(bt(t[o]))return o}else for(;o<r;o++)if(t[o]===e)return o;return-1}var Bt=/./;function Lt(t){return"boolean"==typeof t}var Ct=Boolean,Gt=Boolean.prototype.toString;var Yt=r();function Xt(t){return"object"==typeof t&&(t instanceof Ct||(Yt?function(t){try{return Gt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Mt(t){return Lt(t)||Xt(t)}function Rt(){return new Function("return this;")()}tt(Mt,"isPrimitive",Lt),tt(Mt,"isObject",Xt);var Wt="object"==typeof self?self:null,$t="object"==typeof window?window:null,Ht="object"==typeof globalThis?globalThis:null;var Ut=function(t){if(arguments.length){if(!Lt(t))throw new TypeError(H("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Rt()}if(Ht)return Ht;if(Wt)return Wt;if($t)return $t;throw new Error("unexpected error. Unable to resolve global object.")}(),Zt=Ut.document&&Ut.document.childNodes,Dt=Int8Array;function zt(){return/^\s*function\s*([^(]*)/i}var qt=/^\s*function\s*([^(]*)/i;function Jt(t){var e,n,r,o;if(("Object"===(n=f(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=qt.exec(r.toString()))return e[1]}return At(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}tt(zt,"REGEXP",qt);var Kt="function"==typeof Bt||"object"==typeof Dt||"function"==typeof Zt?function(t){return Jt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Jt(t).toLowerCase():e};function Qt(t){return t.constructor&&t.constructor.prototype===t}var te=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ee="undefined"==typeof window?void 0:window;var ne=function(){var t;if("undefined"===Kt(ee))return!1;for(t in ee)try{-1===Ft(te,t)&&u(ee,t)&&null!==ee[t]&&"object"===Kt(ee[t])&&Qt(ee[t])}catch(t){return!0}return!1}(),re="undefined"!=typeof window;var oe,ie=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];oe=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return It(e)?t(Pt.call(e)):t(e)}:t:function(t){var e,n,r,o,i,c,l;if(o=[],It(t)){for(l=0;l<t.length;l++)o.push(l.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(l=0;l<t.length;l++)o.push(l.toString())}else{if(!1==(r="function"==typeof t)&&!At(t))return o;n=kt&&r}for(i in t)n&&"prototype"===i||!u(t,i)||o.push(String(i));if(Vt)for(e=function(t){if(!1===re&&!ne)return Qt(t);try{return Qt(t)}catch(t){return!1}}(t),l=0;l<ie.length;l++)c=ie[l],e&&"constructor"===c||!u(t,c)||o.push(String(c));return o};var ue=oe;function ce(t){return Object.keys(Object(t))}var le=void 0!==Object.keys;var ae="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function fe(){return ae&&"symbol"==typeof Symbol.toStringTag}var pe=Object.prototype.toString;var se=Object.prototype.hasOwnProperty;function ye(t,e){return null!=t&&se.call(t,e)}var ge="function"==typeof Symbol?Symbol.toStringTag:"";var be,me=fe()?function(t){var e,n,r;if(null==t)return pe.call(t);n=t[ge],e=ye(t,ge);try{t[ge]=void 0}catch(e){return pe.call(t)}return r=pe.call(t),e?t[ge]=n:delete t[ge],r}:function(t){return pe.call(t)};function ve(t){return"[object Arguments]"===me(t)}be=function(){return ve(arguments)}();var de=be,he="function"==typeof Object.defineProperty?Object.defineProperty:null;var we,je=Object.defineProperty,_e=Object.prototype,xe=_e.toString,Oe=_e.__defineGetter__,Se=_e.__defineSetter__,Ee=_e.__lookupGetter__,Te=_e.__lookupSetter__;we=function(){try{return he({},"x",{}),!0}catch(t){return!1}}()?je:function(t,e,n){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===xe.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===xe.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(Ee.call(t,e)||Te.call(t,e)?(r=t.__proto__,t.__proto__=_e,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Oe&&Oe.call(t,e,n.get),u&&Se&&Se.call(t,e,n.set),t};var Ie=we;function Pe(t,e,n){Ie(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Ae(t){return"string"==typeof t}var ke=String.prototype.valueOf;var Ve=fe();function Ne(t){return"object"==typeof t&&(t instanceof String||(Ve?function(t){try{return ke.call(t),!0}catch(t){return!1}}(t):"[object String]"===me(t)))}function Fe(t){return Ae(t)||Ne(t)}function Be(t){return"number"==typeof t}Pe(Fe,"isPrimitive",Ae),Pe(Fe,"isObject",Ne);var Le=Number,Ce=Le.prototype.toString;var Ge=fe();function Ye(t){return"object"==typeof t&&(t instanceof Le||(Ge?function(t){try{return Ce.call(t),!0}catch(t){return!1}}(t):"[object Number]"===me(t)))}function Xe(t){return Be(t)||Ye(t)}function Me(t){return t!=t}function Re(t){return Be(t)&&Me(t)}function We(t){return Ye(t)&&Me(t.valueOf())}function $e(t){return Re(t)||We(t)}Pe(Xe,"isPrimitive",Be),Pe(Xe,"isObject",Ye),Pe($e,"isPrimitive",Re),Pe($e,"isObject",We);var He=Number.POSITIVE_INFINITY,Ue=Le.NEGATIVE_INFINITY,Ze=Math.floor;function De(t){return Ze(t)===t}function ze(t){return t<He&&t>Ue&&De(t)}function qe(t){return Be(t)&&ze(t)}function Je(t){return Ye(t)&&ze(t.valueOf())}function Ke(t){return qe(t)||Je(t)}Pe(Ke,"isPrimitive",qe),Pe(Ke,"isObject",Je);var Qe=Object.prototype.propertyIsEnumerable;var tn=!Qe.call("beep","0");function en(t,e){var n;return null!=t&&(!(n=Qe.call(t,e))&&tn&&Fe(t)?!Re(e=+e)&&qe(e)&&e>=0&&e<t.length:n)}var nn=Array.isArray?Array.isArray:function(t){return"[object Array]"===me(t)};var rn=de?ve:function(t){return null!==t&&"object"==typeof t&&!nn(t)&&"number"==typeof t.length&&De(t.length)&&t.length>=0&&t.length<=4294967295&&ye(t,"callee")&&!en(t,"callee")},on=Array.prototype.slice;function un(t){return null!==t&&"object"==typeof t}Pe(un,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var n,r;if(!nn(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(un));var cn=en((function(){}),"prototype"),ln=!en({toString:null},"toString");function an(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&De(t.length)&&t.length>=0&&t.length<=9007199254740991}function fn(t,e,n){var r,o;if(!an(t)&&!Ae(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!qe(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=r)return-1;o=n}else(o=r+n)<0&&(o=0)}else o=0;if($e(e)){for(;o<r;o++)if($e(t[o]))return o}else for(;o<r;o++)if(t[o]===e)return o;return-1}var pn=/./,sn="function"==typeof Object.defineProperty?Object.defineProperty:null;var yn,gn=Object.defineProperty,bn=Object.prototype,mn=bn.toString,vn=bn.__defineGetter__,dn=bn.__defineSetter__,hn=bn.__lookupGetter__,wn=bn.__lookupSetter__;yn=function(){try{return sn({},"x",{}),!0}catch(t){return!1}}()?gn:function(t,e,n){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===mn.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===mn.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(hn.call(t,e)||wn.call(t,e)?(r=t.__proto__,t.__proto__=bn,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&vn&&vn.call(t,e,n.get),u&&dn&&dn.call(t,e,n.set),t};var jn=yn;function _n(t,e,n){jn(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function xn(t){return"boolean"==typeof t}var On="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Sn(){return On&&"symbol"==typeof Symbol.toStringTag}var En=Object.prototype.toString;var Tn=Object.prototype.hasOwnProperty;var In="function"==typeof Symbol?Symbol.toStringTag:"";var Pn=Sn()?function(t){var e,n,r,o,i;if(null==t)return En.call(t);n=t[In],i=In,e=null!=(o=t)&&Tn.call(o,i);try{t[In]=void 0}catch(e){return En.call(t)}return r=En.call(t),e?t[In]=n:delete t[In],r}:function(t){return En.call(t)},An=Boolean.prototype.toString;var kn=Sn();function Vn(t){return"object"==typeof t&&(t instanceof Boolean||(kn?function(t){try{return An.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Pn(t)))}function Nn(t){return xn(t)||Vn(t)}function Fn(){return new Function("return this;")()}_n(Nn,"isPrimitive",xn),_n(Nn,"isObject",Vn);var Bn="object"==typeof self?self:null,Ln="object"==typeof window?window:null,Cn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Gn="object"==typeof Cn?Cn:null;var Yn=function(t){if(arguments.length){if(!xn(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Fn()}if(Bn)return Bn;if(Ln)return Ln;if(Gn)return Gn;throw new Error("unexpected error. Unable to resolve global object.")}(),Xn=Yn.document&&Yn.document.childNodes,Mn=Int8Array;function Rn(){return/^\s*function\s*([^(]*)/i}var Wn=/^\s*function\s*([^(]*)/i;function $n(t){var e,n,r,o;if(("Object"===(n=me(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=Wn.exec(r.toString()))return e[1]}return un(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}Pe(Rn,"REGEXP",Wn);var Hn="function"==typeof pn||"object"==typeof Mn||"function"==typeof Xn?function(t){return $n(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?$n(t).toLowerCase():e};function Un(t){return t.constructor&&t.constructor.prototype===t}var Zn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Dn="undefined"==typeof window?void 0:window;var zn=function(){var t;if("undefined"===Hn(Dn))return!1;for(t in Dn)try{-1===fn(Zn,t)&&ye(Dn,t)&&null!==Dn[t]&&"object"===Hn(Dn[t])&&Un(Dn[t])}catch(t){return!0}return!1}(),qn="undefined"!=typeof window;var Jn,Kn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Jn=le?function(){return 2!==(ce(arguments)||"").length}(1,2)?function(t){return rn(t)?ce(on.call(t)):ce(t)}:ce:function(t){var e,n,r,o,i,u,c;if(o=[],rn(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!ye(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!un(t))return o;n=cn&&r}for(i in t)n&&"prototype"===i||!ye(t,i)||o.push(String(i));if(ln)for(e=function(t){if(!1===qn&&!zn)return Un(t);try{return Un(t)}catch(t){return!1}}(t),c=0;c<Kn.length;c++)u=Kn[c],e&&"constructor"===u||!ye(t,u)||o.push(String(u));return o};var Qn=Jn;function tr(t){return"function"===Hn(t)}var er,nr=Object.getPrototypeOf;er=tr(Object.getPrototypeOf)?nr:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===me(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var rr=er;var or=Object.prototype;function ir(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!nn(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),rr(t))}(t),!e||!ye(t,"constructor")&&ye(e,"constructor")&&tr(e.constructor)&&"[object Function]"===me(e.constructor)&&ye(e,"isPrototypeOf")&&tr(e.isPrototypeOf)&&(e===or||function(t){var e;for(e in t)if(!ye(t,e))return!1;return!0}(t)))}var ur="function"==typeof Object.defineProperty?Object.defineProperty:null;var cr,lr=Object.defineProperty,ar=Object.prototype,fr=ar.toString,pr=ar.__defineGetter__,sr=ar.__defineSetter__,yr=ar.__lookupGetter__,gr=ar.__lookupSetter__;cr=function(){try{return ur({},"x",{}),!0}catch(t){return!1}}()?lr:function(t,e,n){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===fr.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===fr.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(yr.call(t,e)||gr.call(t,e)?(r=t.__proto__,t.__proto__=ar,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&pr&&pr.call(t,e,n.get),u&&sr&&sr.call(t,e,n.set),t};var br=cr;function mr(t,e,n){br(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var vr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function dr(){return vr.slice()}var hr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function wr(){return hr.slice()}function jr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function _r(t,e,n){br(t,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function xr(t){return Object.keys(Object(t))}var Or=void 0!==Object.keys;var Sr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Er(){return Sr&&"symbol"==typeof Symbol.toStringTag}var Tr=Object.prototype.toString;var Ir=Object.prototype.hasOwnProperty;function Pr(t,e){return null!=t&&Ir.call(t,e)}var Ar="function"==typeof Symbol?Symbol.toStringTag:"";var kr,Vr=Er()?function(t){var e,n,r;if(null==t)return Tr.call(t);n=t[Ar],e=Pr(t,Ar);try{t[Ar]=void 0}catch(e){return Tr.call(t)}return r=Tr.call(t),e?t[Ar]=n:delete t[Ar],r}:function(t){return Tr.call(t)};function Nr(t){return"[object Arguments]"===Vr(t)}kr=function(){return Nr(arguments)}();var Fr=kr;function Br(t){return"string"==typeof t}var Lr=String.prototype.valueOf;var Cr=Er();function Gr(t){return"object"==typeof t&&(t instanceof String||(Cr?function(t){try{return Lr.call(t),!0}catch(t){return!1}}(t):"[object String]"===Vr(t)))}function Yr(t){return Br(t)||Gr(t)}function Xr(t){return"number"==typeof t}mr(Yr,"isPrimitive",Br),mr(Yr,"isObject",Gr);var Mr=Number,Rr=Mr.prototype.toString;var Wr=Er();function $r(t){return"object"==typeof t&&(t instanceof Mr||(Wr?function(t){try{return Rr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Vr(t)))}function Hr(t){return Xr(t)||$r(t)}function Ur(t){return t!=t}function Zr(t){return Xr(t)&&Ur(t)}function Dr(t){return $r(t)&&Ur(t.valueOf())}function zr(t){return Zr(t)||Dr(t)}mr(Hr,"isPrimitive",Xr),mr(Hr,"isObject",$r),mr(zr,"isPrimitive",Zr),mr(zr,"isObject",Dr);var qr=Number.POSITIVE_INFINITY,Jr=Mr.NEGATIVE_INFINITY,Kr=Math.floor;function Qr(t){return Kr(t)===t}function to(t){return t<qr&&t>Jr&&Qr(t)}function eo(t){return Xr(t)&&to(t)}function no(t){return $r(t)&&to(t.valueOf())}function ro(t){return eo(t)||no(t)}mr(ro,"isPrimitive",eo),mr(ro,"isObject",no);var oo=Object.prototype.propertyIsEnumerable;var io=!oo.call("beep","0");function uo(t,e){var n;return null!=t&&(!(n=oo.call(t,e))&&io&&Yr(t)?!Zr(e=+e)&&eo(e)&&e>=0&&e<t.length:n)}var co=Array.isArray?Array.isArray:function(t){return"[object Array]"===Vr(t)};var lo=Fr?Nr:function(t){return null!==t&&"object"==typeof t&&!co(t)&&"number"==typeof t.length&&Qr(t.length)&&t.length>=0&&t.length<=4294967295&&Pr(t,"callee")&&!uo(t,"callee")},ao=Array.prototype.slice;function fo(t){return null!==t&&"object"==typeof t}mr(fo,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var n,r;if(!co(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(fo));var po=uo((function(){}),"prototype"),so=!uo({toString:null},"toString");function yo(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Qr(t.length)&&t.length>=0&&t.length<=9007199254740991}function go(t,e,n){var r,o;if(!yo(t)&&!Br(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!eo(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=r)return-1;o=n}else(o=r+n)<0&&(o=0)}else o=0;if(zr(e)){for(;o<r;o++)if(zr(t[o]))return o}else for(;o<r;o++)if(t[o]===e)return o;return-1}var bo=/./;function mo(){return new Function("return this;")()}var vo="object"==typeof self?self:null,ho="object"==typeof window?window:null,wo="object"==typeof Cn?Cn:null;var jo=function(t){if(arguments.length){if(!xn(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return mo()}if(vo)return vo;if(ho)return ho;if(wo)return wo;throw new Error("unexpected error. Unable to resolve global object.")}(),_o=jo.document&&jo.document.childNodes,xo=Int8Array;function Oo(){return/^\s*function\s*([^(]*)/i}var So=/^\s*function\s*([^(]*)/i;function Eo(t){var e,n,r,o;if(("Object"===(n=Vr(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=So.exec(r.toString()))return e[1]}return fo(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}mr(Oo,"REGEXP",So);var To="function"==typeof bo||"object"==typeof xo||"function"==typeof _o?function(t){return Eo(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Eo(t).toLowerCase():e};function Io(t){return t.constructor&&t.constructor.prototype===t}var Po=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ao="undefined"==typeof window?void 0:window;var ko=function(){var t;if("undefined"===To(Ao))return!1;for(t in Ao)try{-1===go(Po,t)&&Pr(Ao,t)&&null!==Ao[t]&&"object"===To(Ao[t])&&Io(Ao[t])}catch(t){return!0}return!1}(),Vo="undefined"!=typeof window;var No,Fo=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];No=Or?function(){return 2!==(xr(arguments)||"").length}(1,2)?function(t){return lo(t)?xr(ao.call(t)):xr(t)}:xr:function(t){var e,n,r,o,i,u,c;if(o=[],lo(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!Pr(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!fo(t))return o;n=po&&r}for(i in t)n&&"prototype"===i||!Pr(t,i)||o.push(String(i));if(so)for(e=function(t){if(!1===Vo&&!ko)return Io(t);try{return Io(t)}catch(t){return!1}}(t),c=0;c<Fo.length;c++)u=Fo[c],e&&"constructor"===u||!Pr(t,u)||o.push(String(u));return o};var Bo=No;mr(wr,"enum",jr),function(t,e){var n,r,o;for(n=Bo(e),o=0;o<n.length;o++)_r(t,r=n[o],e[r])}(wr,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Lo={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Co(){return{bool:Lo.bool,int8:Lo.int8,uint8:Lo.uint8,uint8c:Lo.uint8c,int16:Lo.int16,uint16:Lo.uint16,int32:Lo.int32,uint32:Lo.uint32,int64:Lo.int64,uint64:Lo.uint64,float32:Lo.float32,float64:Lo.float64,complex64:Lo.complex64,complex128:Lo.complex128,binary:Lo.binary,generic:Lo.generic,notype:Lo.notype,userdefined_type:Lo.userdefined_type}}mr(dr,"enum",Co),function(t,e){var n,r,o;for(n=Bo(e),o=0;o<n.length;o++)_r(t,r=n[o],e[r])}(dr,Co());var Go=function(t,e){var n,r,o,i,u,c,l,a=!0;if(!un(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!ir(e))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+e+"`.");if(ye(e,"duplicates")&&!xn(a=e.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(r=(n=Qn(t)).length,u={},a)for(l=0;l<r;l++)ye(u,i=t[o=n[l]])?(c=u[i],nn(c)?u[i].push(o):u[i]=[c,o]):u[i]=o;else for(l=0;l<r;l++)u[t[o=n[l]]]=o;return u}(Co(),{duplicates:!1});var Yo={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Xo(){var t;return 0===arguments.length?Yo.all.slice():(t=Yo[arguments[0]])?t.slice():[]}function Mo(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ro(t,e,n){Q(t,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}tt(Xo,"enum",Mo),function(t,e){var n,r,o;for(n=ue(e),o=0;o<n.length;o++)Ro(t,r=n[o],e[r])}(Xo,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Wo={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function $o(t){var e=typeof t;return"string"===e?null===function(t){var e=Wo[t];return"number"==typeof e?e:null}(t)?null:t:"number"===e?function(t){var e=Go[t];return"string"==typeof e?e:null}(t):null}var Ho={float64:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"float64",uint16:"float64",uint8:"float64",uint8c:"float64",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},float32:{float64:"float64",float32:"float32",int32:"float64",int16:"float32",int8:"float32",uint32:"float64",uint16:"float32",uint8:"float32",uint8c:"float32",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},int32:{float64:"float64",float32:"float64",int32:"int32",int16:"int32",int8:"int32",uint32:"float64",uint16:"int32",uint8:"int32",uint8c:"int32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},int16:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},int8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int8",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint32:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"uint32",uint16:"uint32",uint8:"uint32",uint8c:"uint32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},uint16:{float64:"float64",float32:"float32",int32:"int32",int16:"int32",int8:"int32",uint32:"uint32",uint16:"uint16",uint8:"uint16",uint8c:"uint16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint8c:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8c",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},generic:{float64:"generic",float32:"generic",int32:"generic",int16:"generic",int8:"generic",uint32:"generic",uint16:"generic",uint8:"generic",uint8c:"generic",complex64:"generic",complex128:"generic",binary:-1,generic:"generic"},binary:{float64:-1,float32:-1,int32:-1,int16:-1,int8:-1,uint32:-1,uint16:-1,uint8:-1,uint8c:-1,complex64:-1,complex128:-1,binary:"binary",generic:-1}};function Uo(){var t,e,n,r,o,i,u,c,l;for(n={},e=(t=ue(Ho)).length,l=0;l<e;l++){for(o=t[l],u=Ho[o],r={},c=0;c<e;c++)r[i=t[c]]=u[i];n[o]=r}return n}return function(t,e){var n;return 0===arguments.length?Uo():(t=$o(t),u(Ho,t)&&u(n=Ho[t],e=$o(e))?n[e]:null)}}));
//# sourceMappingURL=browser.js.map
