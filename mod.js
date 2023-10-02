// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;function n(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var r=n();function o(){return r&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;function c(t,e){return null!=t&&u.call(t,e)}var l="function"==typeof Symbol?Symbol:void 0,a="function"==typeof l?l.toStringTag:"";var f=o()?function(t){var e,n,r;if(null==t)return i.call(t);n=t[a],e=c(t,a);try{t[a]=void 0}catch(e){return i.call(t)}return r=i.call(t),e?t[a]=n:delete t[a],r}:function(t){return i.call(t)};function p(t){return"[object Arguments]"===f(t)}var s=function(){return p(arguments)}(),g="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty;function b(t){return"number"==typeof t}function m(t){var e,n="";for(e=0;e<t;e++)n+="0";return n}function v(t,e,n){var r=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=n?t+m(o):m(o)+t,r&&(t="-"+t)),t}var d=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function w(t){var e,n,r;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,r=parseInt(n,10),!isFinite(r)){if(!b(n))throw new Error("invalid integer. Value: "+n);r=0}return r<0&&("u"===t.specifier||10!==e)&&(r=4294967295+r+1),r<0?(n=(-r).toString(e),t.precision&&(n=v(n,t.precision,t.padRight)),n="-"+n):(n=r.toString(e),r||t.precision?t.precision&&(n=v(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===h.call(t.specifier)?h.call(n):d.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function j(t){return"string"==typeof t}var _=Math.abs,x=String.prototype.toLowerCase,O=String.prototype.toUpperCase,S=String.prototype.replace,E=/e\+(\d)$/,T=/e-(\d)$/,I=/^(\d+)$/,P=/^(\d+)e/,A=/\.0$/,k=/\.0*e/,V=/(\..*[^0])0*e/;function N(t){var e,n,r=parseFloat(t.arg);if(!isFinite(r)){if(!b(t.arg))throw new Error("invalid floating-point number. Value: "+n);r=t.arg}switch(t.specifier){case"e":case"E":n=r.toExponential(t.precision);break;case"f":case"F":n=r.toFixed(t.precision);break;case"g":case"G":_(r)<1e-4?((e=t.precision)>0&&(e-=1),n=r.toExponential(e)):n=r.toPrecision(t.precision),t.alternate||(n=S.call(n,V,"$1e"),n=S.call(n,k,"e"),n=S.call(n,A,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=S.call(n,E,"e+0$1"),n=S.call(n,T,"e-0$1"),t.alternate&&(n=S.call(n,I,"$1."),n=S.call(n,P,"$1.e")),r>=0&&t.sign&&(n=t.sign+n),n=t.specifier===O.call(t.specifier)?O.call(n):x.call(n)}function F(t){var e,n="";for(e=0;e<t;e++)n+=" ";return n}function B(t,e,n){var r=e-t.length;return r<0?t:t=n?t+F(r):F(r)+t}var L=String.fromCharCode,C=isNaN,G=Array.isArray;function Y(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function X(t){var e,n,r,o,i,u,c,l,a;if(!G(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",c=1,l=0;l<t.length;l++)if(j(r=t[l]))u+=r;else{if(e=void 0!==r.precision,!(r=Y(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+r+"`.");for(r.mapping&&(c=r.mapping),n=r.flags,a=0;a<n.length;a++)switch(o=n.charAt(a)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===r.width){if(r.width=parseInt(arguments[c],10),c+=1,C(r.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(e&&"*"===r.precision){if(r.precision=parseInt(arguments[c],10),c+=1,C(r.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,e=!1)}switch(r.arg=arguments[c],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(r.padZeros=!1),r.arg=w(r);break;case"s":r.maxWidth=e?r.precision:-1;break;case"c":if(!C(r.arg)){if((i=parseInt(r.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=C(i)?String(r.arg):L(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(r.precision=6),r.arg=N(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=v(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=B(r.arg,r.width,r.padRight)),u+=r.arg||"",c+=1}return u}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function $(t){var e,n,r,o;for(n=[],o=0,r=M.exec(t);r;)(e=t.slice(o,M.lastIndex-r[0].length)).length&&n.push(e),n.push(W(r)),o=M.lastIndex,r=M.exec(t);return(e=t.slice(o)).length&&n.push(e),n}function R(t){return"string"==typeof t}function H(t){var e,n,r;if(!R(t))throw new TypeError(H("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=$(t),(n=new Array(arguments.length))[0]=e,r=1;r<n.length;r++)n[r]=arguments[r];return X.apply(null,n)}var U,Z=Object.prototype,D=Z.toString,z=Z.__defineGetter__,q=Z.__defineSetter__,J=Z.__lookupGetter__,K=Z.__lookupSetter__;U=function(){try{return g({},"x",{}),!0}catch(t){return!1}}()?y:function(t,e,n){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(H("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===D.call(n))throw new TypeError(H("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(J.call(t,e)||K.call(t,e)?(r=t.__proto__,t.__proto__=Z,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&z&&z.call(t,e,n.get),u&&q&&q.call(t,e,n.set),t};var Q=U;function tt(t,e,n){Q(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function et(t){return"string"==typeof t}var nt=String.prototype.valueOf;var rt=o();function ot(t){return"object"==typeof t&&(t instanceof String||(rt?function(t){try{return nt.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function it(t){return et(t)||ot(t)}function ut(t){return"number"==typeof t}tt(it,"isPrimitive",et),tt(it,"isObject",ot);var ct=Number,lt=ct.prototype.toString;var at=o();function ft(t){return"object"==typeof t&&(t instanceof ct||(at?function(t){try{return lt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function pt(t){return ut(t)||ft(t)}function st(t){return t!=t}function gt(t){return ut(t)&&st(t)}function yt(t){return ft(t)&&st(t.valueOf())}function bt(t){return gt(t)||yt(t)}tt(pt,"isPrimitive",ut),tt(pt,"isObject",ft),tt(bt,"isPrimitive",gt),tt(bt,"isObject",yt);var mt=Number.POSITIVE_INFINITY,vt=ct.NEGATIVE_INFINITY,dt=Math.floor;function ht(t){return dt(t)===t}function wt(t){return t<mt&&t>vt&&ht(t)}function jt(t){return ut(t)&&wt(t)}function _t(t){return ft(t)&&wt(t.valueOf())}function xt(t){return jt(t)||_t(t)}tt(xt,"isPrimitive",jt),tt(xt,"isObject",_t);var Ot=Object.prototype.propertyIsEnumerable;var St=!Ot.call("beep","0");function Et(t,e){var n;return null!=t&&(!(n=Ot.call(t,e))&&St&&it(t)?!gt(e=+e)&&jt(e)&&e>=0&&e<t.length:n)}var Tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var It=s?p:function(t){return null!==t&&"object"==typeof t&&!Tt(t)&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=4294967295&&c(t,"callee")&&!Et(t,"callee")},Pt=Array.prototype.slice;function At(t){return null!==t&&"object"==typeof t}tt(At,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(H("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var n,r;if(!Tt(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(At));var kt=Et((function(){}),"prototype"),Vt=!Et({toString:null},"toString");function Nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=9007199254740991}function Ft(t,e,n){var r,o;if(!Nt(t)&&!et(t))throw new TypeError(H("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!jt(n))throw new TypeError(H("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=r)return-1;o=n}else(o=r+n)<0&&(o=0)}else o=0;if(bt(e)){for(;o<r;o++)if(bt(t[o]))return o}else for(;o<r;o++)if(t[o]===e)return o;return-1}var Bt=/./;function Lt(t){return"boolean"==typeof t}var Ct=Boolean,Gt=Boolean.prototype.toString;var Yt=o();function Xt(t){return"object"==typeof t&&(t instanceof Ct||(Yt?function(t){try{return Gt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Mt(t){return Lt(t)||Xt(t)}function Wt(){return new Function("return this;")()}tt(Mt,"isPrimitive",Lt),tt(Mt,"isObject",Xt);var $t="object"==typeof self?self:null,Rt="object"==typeof window?window:null,Ht="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ut="object"==typeof Ht?Ht:null,Zt="object"==typeof globalThis?globalThis:null;var Dt=function(t){if(arguments.length){if(!Lt(t))throw new TypeError(H("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Wt()}if(Zt)return Zt;if($t)return $t;if(Rt)return Rt;if(Ut)return Ut;throw new Error("unexpected error. Unable to resolve global object.")}(),zt=Dt.document&&Dt.document.childNodes,qt=Int8Array;function Jt(){return/^\s*function\s*([^(]*)/i}var Kt=/^\s*function\s*([^(]*)/i;function Qt(t){var e,n,r,o;if(("Object"===(n=f(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=Kt.exec(r.toString()))return e[1]}return At(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}tt(Jt,"REGEXP",Kt);var te="function"==typeof Bt||"object"==typeof qt||"function"==typeof zt?function(t){return Qt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Qt(t).toLowerCase():e};function ee(t){return t.constructor&&t.constructor.prototype===t}var ne=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],re="undefined"==typeof window?void 0:window;var oe=function(){var t;if("undefined"===te(re))return!1;for(t in re)try{-1===Ft(ne,t)&&c(re,t)&&null!==re[t]&&"object"===te(re[t])&&ee(re[t])}catch(t){return!0}return!1}(),ie="undefined"!=typeof window;var ue=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ce=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return It(e)?t(Pt.call(e)):t(e)}:t:function(t){var e,n,r,o,i,u,l;if(o=[],It(t)){for(l=0;l<t.length;l++)o.push(l.toString());return o}if("string"==typeof t){if(t.length>0&&!c(t,"0"))for(l=0;l<t.length;l++)o.push(l.toString())}else{if(!1==(r="function"==typeof t)&&!At(t))return o;n=kt&&r}for(i in t)n&&"prototype"===i||!c(t,i)||o.push(String(i));if(Vt)for(e=function(t){if(!1===ie&&!oe)return ee(t);try{return ee(t)}catch(t){return!1}}(t),l=0;l<ue.length;l++)u=ue[l],e&&"constructor"===u||!c(t,u)||o.push(String(u));return o};function le(t){return Object.keys(Object(t))}var ae=void 0!==Object.keys,fe=n();function pe(){return fe&&"symbol"==typeof Symbol.toStringTag}var se=Object.prototype.toString;var ge=Object.prototype.hasOwnProperty;function ye(t,e){return null!=t&&ge.call(t,e)}var be="function"==typeof Symbol?Symbol.toStringTag:"";var me=pe()?function(t){var e,n,r;if(null==t)return se.call(t);n=t[be],e=ye(t,be);try{t[be]=void 0}catch(e){return se.call(t)}return r=se.call(t),e?t[be]=n:delete t[be],r}:function(t){return se.call(t)};function ve(t){return"[object Arguments]"===me(t)}var de=function(){return ve(arguments)}(),he="function"==typeof Object.defineProperty?Object.defineProperty:null;var we,je=Object.defineProperty,_e=Object.prototype,xe=_e.toString,Oe=_e.__defineGetter__,Se=_e.__defineSetter__,Ee=_e.__lookupGetter__,Te=_e.__lookupSetter__;we=function(){try{return he({},"x",{}),!0}catch(t){return!1}}()?je:function(t,e,n){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===xe.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===xe.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(Ee.call(t,e)||Te.call(t,e)?(r=t.__proto__,t.__proto__=_e,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Oe&&Oe.call(t,e,n.get),u&&Se&&Se.call(t,e,n.set),t};var Ie=we;function Pe(t,e,n){Ie(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Ae(t){return"string"==typeof t}var ke=String.prototype.valueOf;var Ve=pe();function Ne(t){return"object"==typeof t&&(t instanceof String||(Ve?function(t){try{return ke.call(t),!0}catch(t){return!1}}(t):"[object String]"===me(t)))}function Fe(t){return Ae(t)||Ne(t)}function Be(t){return"number"==typeof t}Pe(Fe,"isPrimitive",Ae),Pe(Fe,"isObject",Ne);var Le=Number,Ce=Le.prototype.toString;var Ge=pe();function Ye(t){return"object"==typeof t&&(t instanceof Le||(Ge?function(t){try{return Ce.call(t),!0}catch(t){return!1}}(t):"[object Number]"===me(t)))}function Xe(t){return Be(t)||Ye(t)}function Me(t){return t!=t}function We(t){return Be(t)&&Me(t)}function $e(t){return Ye(t)&&Me(t.valueOf())}function Re(t){return We(t)||$e(t)}Pe(Xe,"isPrimitive",Be),Pe(Xe,"isObject",Ye),Pe(Re,"isPrimitive",We),Pe(Re,"isObject",$e);var He=Number.POSITIVE_INFINITY,Ue=Le.NEGATIVE_INFINITY,Ze=Math.floor;function De(t){return Ze(t)===t}function ze(t){return t<He&&t>Ue&&De(t)}function qe(t){return Be(t)&&ze(t)}function Je(t){return Ye(t)&&ze(t.valueOf())}function Ke(t){return qe(t)||Je(t)}Pe(Ke,"isPrimitive",qe),Pe(Ke,"isObject",Je);var Qe=Object.prototype.propertyIsEnumerable;var tn=!Qe.call("beep","0");function en(t,e){var n;return null!=t&&(!(n=Qe.call(t,e))&&tn&&Fe(t)?!We(e=+e)&&qe(e)&&e>=0&&e<t.length:n)}var nn=Array.isArray?Array.isArray:function(t){return"[object Array]"===me(t)};var rn=de?ve:function(t){return null!==t&&"object"==typeof t&&!nn(t)&&"number"==typeof t.length&&De(t.length)&&t.length>=0&&t.length<=4294967295&&ye(t,"callee")&&!en(t,"callee")},on=Array.prototype.slice;function un(t){return null!==t&&"object"==typeof t}function cn(){}Pe(un,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var n,r;if(!nn(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(un));var ln=en(cn,"prototype"),an=!en({toString:null},"toString");function fn(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&De(t.length)&&t.length>=0&&t.length<=9007199254740991}function pn(t,e,n){var r,o;if(!fn(t)&&!Ae(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!qe(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=r)return-1;o=n}else(o=r+n)<0&&(o=0)}else o=0;if(Re(e)){for(;o<r;o++)if(Re(t[o]))return o}else for(;o<r;o++)if(t[o]===e)return o;return-1}var sn=/./,gn="function"==typeof Object.defineProperty?Object.defineProperty:null;var yn,bn=Object.defineProperty,mn=Object.prototype,vn=mn.toString,dn=mn.__defineGetter__,hn=mn.__defineSetter__,wn=mn.__lookupGetter__,jn=mn.__lookupSetter__;yn=function(){try{return gn({},"x",{}),!0}catch(t){return!1}}()?bn:function(t,e,n){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===vn.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===vn.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(wn.call(t,e)||jn.call(t,e)?(r=t.__proto__,t.__proto__=mn,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&dn&&dn.call(t,e,n.get),u&&hn&&hn.call(t,e,n.set),t};var _n=yn;function xn(t,e,n){_n(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function On(t){return"boolean"==typeof t}var Sn=n();function En(){return Sn&&"symbol"==typeof Symbol.toStringTag}var Tn=Object.prototype.toString;var In=Object.prototype.hasOwnProperty;var Pn="function"==typeof Symbol?Symbol.toStringTag:"";var An=En()?function(t){var e,n,r,o,i;if(null==t)return Tn.call(t);n=t[Pn],i=Pn,e=null!=(o=t)&&In.call(o,i);try{t[Pn]=void 0}catch(e){return Tn.call(t)}return r=Tn.call(t),e?t[Pn]=n:delete t[Pn],r}:function(t){return Tn.call(t)},kn=Boolean.prototype.toString;var Vn=En();function Nn(t){return"object"==typeof t&&(t instanceof Boolean||(Vn?function(t){try{return kn.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===An(t)))}function Fn(t){return On(t)||Nn(t)}function Bn(){return new Function("return this;")()}xn(Fn,"isPrimitive",On),xn(Fn,"isObject",Nn);var Ln="object"==typeof self?self:null,Cn="object"==typeof window?window:null,Gn="object"==typeof Ht?Ht:null;var Yn=function(t){if(arguments.length){if(!On(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Bn()}if(Ln)return Ln;if(Cn)return Cn;if(Gn)return Gn;throw new Error("unexpected error. Unable to resolve global object.")}(),Xn=Yn.document&&Yn.document.childNodes,Mn=Int8Array;function Wn(){return/^\s*function\s*([^(]*)/i}var $n=/^\s*function\s*([^(]*)/i;function Rn(t){var e,n,r,o;if(("Object"===(n=me(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=$n.exec(r.toString()))return e[1]}return un(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}Pe(Wn,"REGEXP",$n);var Hn="function"==typeof sn||"object"==typeof Mn||"function"==typeof Xn?function(t){return Rn(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Rn(t).toLowerCase():e};function Un(t){return t.constructor&&t.constructor.prototype===t}var Zn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Dn="undefined"==typeof window?void 0:window;var zn=function(){var t;if("undefined"===Hn(Dn))return!1;for(t in Dn)try{-1===pn(Zn,t)&&ye(Dn,t)&&null!==Dn[t]&&"object"===Hn(Dn[t])&&Un(Dn[t])}catch(t){return!0}return!1}(),qn="undefined"!=typeof window;var Jn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Kn=ae?function(){return 2!==(le(arguments)||"").length}(1,2)?function(t){return rn(t)?le(on.call(t)):le(t)}:le:function(t){var e,n,r,o,i,u,c;if(o=[],rn(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!ye(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!un(t))return o;n=ln&&r}for(i in t)n&&"prototype"===i||!ye(t,i)||o.push(String(i));if(an)for(e=function(t){if(!1===qn&&!zn)return Un(t);try{return Un(t)}catch(t){return!1}}(t),c=0;c<Jn.length;c++)u=Jn[c],e&&"constructor"===u||!ye(t,u)||o.push(String(u));return o};function Qn(t){return"function"===Hn(t)}var tr,er=Object.getPrototypeOf;tr=Qn(Object.getPrototypeOf)?er:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===me(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var nr=tr;var rr=Object.prototype;function or(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!nn(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),nr(t))}(t),!e||!ye(t,"constructor")&&ye(e,"constructor")&&Qn(e.constructor)&&"[object Function]"===me(e.constructor)&&ye(e,"isPrototypeOf")&&Qn(e.isPrototypeOf)&&(e===rr||function(t){var e;for(e in t)if(!ye(t,e))return!1;return!0}(t)))}var ir="function"==typeof Object.defineProperty?Object.defineProperty:null;var ur,cr=Object.defineProperty,lr=Object.prototype,ar=lr.toString,fr=lr.__defineGetter__,pr=lr.__defineSetter__,sr=lr.__lookupGetter__,gr=lr.__lookupSetter__;ur=function(){try{return ir({},"x",{}),!0}catch(t){return!1}}()?cr:function(t,e,n){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===ar.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===ar.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(sr.call(t,e)||gr.call(t,e)?(r=t.__proto__,t.__proto__=lr,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&fr&&fr.call(t,e,n.get),u&&pr&&pr.call(t,e,n.set),t};var yr=ur;function br(t,e,n){yr(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var mr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function vr(){return mr.slice()}var dr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function hr(){return dr.slice()}function wr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function jr(t,e,n){yr(t,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function _r(t){return Object.keys(Object(t))}var xr=void 0!==Object.keys,Or=n();function Sr(){return Or&&"symbol"==typeof Symbol.toStringTag}var Er=Object.prototype.toString;var Tr=Object.prototype.hasOwnProperty;function Ir(t,e){return null!=t&&Tr.call(t,e)}var Pr="function"==typeof Symbol?Symbol.toStringTag:"";var Ar=Sr()?function(t){var e,n,r;if(null==t)return Er.call(t);n=t[Pr],e=Ir(t,Pr);try{t[Pr]=void 0}catch(e){return Er.call(t)}return r=Er.call(t),e?t[Pr]=n:delete t[Pr],r}:function(t){return Er.call(t)};function kr(t){return"[object Arguments]"===Ar(t)}var Vr=function(){return kr(arguments)}();function Nr(t){return"string"==typeof t}var Fr=String.prototype.valueOf;var Br=Sr();function Lr(t){return"object"==typeof t&&(t instanceof String||(Br?function(t){try{return Fr.call(t),!0}catch(t){return!1}}(t):"[object String]"===Ar(t)))}function Cr(t){return Nr(t)||Lr(t)}function Gr(t){return"number"==typeof t}br(Cr,"isPrimitive",Nr),br(Cr,"isObject",Lr);var Yr=Number,Xr=Yr.prototype.toString;var Mr=Sr();function Wr(t){return"object"==typeof t&&(t instanceof Yr||(Mr?function(t){try{return Xr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Ar(t)))}function $r(t){return Gr(t)||Wr(t)}function Rr(t){return t!=t}function Hr(t){return Gr(t)&&Rr(t)}function Ur(t){return Wr(t)&&Rr(t.valueOf())}function Zr(t){return Hr(t)||Ur(t)}br($r,"isPrimitive",Gr),br($r,"isObject",Wr),br(Zr,"isPrimitive",Hr),br(Zr,"isObject",Ur);var Dr=Number.POSITIVE_INFINITY,zr=Yr.NEGATIVE_INFINITY,qr=Math.floor;function Jr(t){return qr(t)===t}function Kr(t){return t<Dr&&t>zr&&Jr(t)}function Qr(t){return Gr(t)&&Kr(t)}function to(t){return Wr(t)&&Kr(t.valueOf())}function eo(t){return Qr(t)||to(t)}br(eo,"isPrimitive",Qr),br(eo,"isObject",to);var no=Object.prototype.propertyIsEnumerable;var ro=!no.call("beep","0");function oo(t,e){var n;return null!=t&&(!(n=no.call(t,e))&&ro&&Cr(t)?!Hr(e=+e)&&Qr(e)&&e>=0&&e<t.length:n)}var io=Array.isArray?Array.isArray:function(t){return"[object Array]"===Ar(t)};var uo=Vr?kr:function(t){return null!==t&&"object"==typeof t&&!io(t)&&"number"==typeof t.length&&Jr(t.length)&&t.length>=0&&t.length<=4294967295&&Ir(t,"callee")&&!oo(t,"callee")},co=Array.prototype.slice;function lo(t){return null!==t&&"object"==typeof t}br(lo,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var n,r;if(!io(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(lo));var ao=oo(cn,"prototype"),fo=!oo({toString:null},"toString");function po(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Jr(t.length)&&t.length>=0&&t.length<=9007199254740991}function so(t,e,n){var r,o;if(!po(t)&&!Nr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!Qr(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=r)return-1;o=n}else(o=r+n)<0&&(o=0)}else o=0;if(Zr(e)){for(;o<r;o++)if(Zr(t[o]))return o}else for(;o<r;o++)if(t[o]===e)return o;return-1}var go=/./;function yo(){return new Function("return this;")()}var bo="object"==typeof self?self:null,mo="object"==typeof window?window:null,vo="object"==typeof Ht?Ht:null;var ho=function(t){if(arguments.length){if(!On(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return yo()}if(bo)return bo;if(mo)return mo;if(vo)return vo;throw new Error("unexpected error. Unable to resolve global object.")}(),wo=ho.document&&ho.document.childNodes,jo=Int8Array;function _o(){return/^\s*function\s*([^(]*)/i}var xo=/^\s*function\s*([^(]*)/i;function Oo(t){var e,n,r,o;if(("Object"===(n=Ar(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=xo.exec(r.toString()))return e[1]}return lo(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}br(_o,"REGEXP",xo);var So="function"==typeof go||"object"==typeof jo||"function"==typeof wo?function(t){return Oo(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Oo(t).toLowerCase():e};function Eo(t){return t.constructor&&t.constructor.prototype===t}var To=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Io="undefined"==typeof window?void 0:window;var Po=function(){var t;if("undefined"===So(Io))return!1;for(t in Io)try{-1===so(To,t)&&Ir(Io,t)&&null!==Io[t]&&"object"===So(Io[t])&&Eo(Io[t])}catch(t){return!0}return!1}(),Ao="undefined"!=typeof window;var ko=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Vo=xr?function(){return 2!==(_r(arguments)||"").length}(1,2)?function(t){return uo(t)?_r(co.call(t)):_r(t)}:_r:function(t){var e,n,r,o,i,u,c;if(o=[],uo(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!Ir(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!lo(t))return o;n=ao&&r}for(i in t)n&&"prototype"===i||!Ir(t,i)||o.push(String(i));if(fo)for(e=function(t){if(!1===Ao&&!Po)return Eo(t);try{return Eo(t)}catch(t){return!1}}(t),c=0;c<ko.length;c++)u=ko[c],e&&"constructor"===u||!Ir(t,u)||o.push(String(u));return o};br(hr,"enum",wr),function(t,e){var n,r,o;for(n=Vo(e),o=0;o<n.length;o++)jr(t,r=n[o],e[r])}(hr,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var No={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Fo(){return{bool:No.bool,int8:No.int8,uint8:No.uint8,uint8c:No.uint8c,int16:No.int16,uint16:No.uint16,int32:No.int32,uint32:No.uint32,int64:No.int64,uint64:No.uint64,float32:No.float32,float64:No.float64,complex64:No.complex64,complex128:No.complex128,binary:No.binary,generic:No.generic,notype:No.notype,userdefined_type:No.userdefined_type}}br(vr,"enum",Fo),function(t,e){var n,r,o;for(n=Vo(e),o=0;o<n.length;o++)jr(t,r=n[o],e[r])}(vr,Fo());var Bo=function(t,e){var n,r,o,i,u,c,l,a=!0;if(!un(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!or(e))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+e+"`.");if(ye(e,"duplicates")&&!On(a=e.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(r=(n=Kn(t)).length,u={},a)for(l=0;l<r;l++)ye(u,i=t[o=n[l]])?(c=u[i],nn(c)?u[i].push(o):u[i]=[c,o]):u[i]=o;else for(l=0;l<r;l++)u[t[o=n[l]]]=o;return u}(Fo(),{duplicates:!1});var Lo={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Co(){var t;return 0===arguments.length?Lo.all.slice():(t=Lo[arguments[0]])?t.slice():[]}function Go(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Yo(t,e,n){Q(t,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}tt(Co,"enum",Go),function(t,e){var n,r,o;for(n=ce(e),o=0;o<n.length;o++)Yo(t,r=n[o],e[r])}(Co,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Xo={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Mo(t){var e=typeof t;return"string"===e?null===function(t){var e=Xo[t];return"number"==typeof e?e:null}(t)?null:t:"number"===e?function(t){var e=Bo[t];return"string"==typeof e?e:null}(t):null}var Wo={float64:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"float64",uint16:"float64",uint8:"float64",uint8c:"float64",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},float32:{float64:"float64",float32:"float32",int32:"float64",int16:"float32",int8:"float32",uint32:"float64",uint16:"float32",uint8:"float32",uint8c:"float32",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},int32:{float64:"float64",float32:"float64",int32:"int32",int16:"int32",int8:"int32",uint32:"float64",uint16:"int32",uint8:"int32",uint8c:"int32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},int16:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},int8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int8",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint32:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"uint32",uint16:"uint32",uint8:"uint32",uint8c:"uint32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},uint16:{float64:"float64",float32:"float32",int32:"int32",int16:"int32",int8:"int32",uint32:"uint32",uint16:"uint16",uint8:"uint16",uint8c:"uint16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint8c:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8c",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},generic:{float64:"generic",float32:"generic",int32:"generic",int16:"generic",int8:"generic",uint32:"generic",uint16:"generic",uint8:"generic",uint8c:"generic",complex64:"generic",complex128:"generic",binary:-1,generic:"generic"},binary:{float64:-1,float32:-1,int32:-1,int16:-1,int8:-1,uint32:-1,uint16:-1,uint8:-1,uint8c:-1,complex64:-1,complex128:-1,binary:"binary",generic:-1}};function $o(){var t,e,n,r,o,i,u,c,l;for(n={},e=(t=ce(Wo)).length,l=0;l<e;l++){for(o=t[l],u=Wo[o],r={},c=0;c<e;c++)r[i=t[c]]=u[i];n[o]=r}return n}function Ro(t,e){var n;return 0===arguments.length?$o():(t=Mo(t),c(Wo,t)&&c(n=Wo[t],e=Mo(e))?n[e]:null)}export{Ro as default};
//# sourceMappingURL=mod.js.map
