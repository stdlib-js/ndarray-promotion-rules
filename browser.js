// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function i(){return e&&"symbol"==typeof Symbol.toStringTag}var r=Object.prototype.toString,o=Object.prototype.hasOwnProperty;function c(t,n){return null!=t&&o.call(t,n)}var l,a="function"==typeof Symbol?Symbol:void 0,u="function"==typeof a?a.toStringTag:"",f=i()?function(t){var n,e,i;if(null==t)return r.call(t);e=t[u],n=c(t,u);try{t[u]=void 0}catch(n){return r.call(t)}return i=r.call(t),n?t[u]=e:delete t[u],i}:function(t){return r.call(t)};function p(t){return"[object Arguments]"===f(t)}l=function(){return p(arguments)}();var s=l,g="function"==typeof Object.defineProperty?Object.defineProperty:null,m=Object.defineProperty;function b(t){return"number"==typeof t}function y(t){var n,e="";for(n=0;n<t;n++)e+="0";return e}function d(t,n,e){var i=!1,r=n-t.length;return r<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=e?t+y(r):y(r)+t,i&&(t="-"+t)),t}var h=String.prototype.toLowerCase,x=String.prototype.toUpperCase;function v(t){var n,e,i;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=t.arg,i=parseInt(e,10),!isFinite(i)){if(!b(e))throw new Error("invalid integer. Value: "+e);i=0}return i<0&&("u"===t.specifier||10!==n)&&(i=4294967295+i+1),i<0?(e=(-i).toString(n),t.precision&&(e=d(e,t.precision,t.padRight)),e="-"+e):(e=i.toString(n),i||t.precision?t.precision&&(e=d(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===n&&(t.alternate&&(e="0x"+e),e=t.specifier===x.call(t.specifier)?x.call(e):h.call(e)),8===n&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var w=Math.abs,j=String.prototype.toLowerCase,_=String.prototype.toUpperCase,O=String.prototype.replace,S=/e\+(\d)$/,E=/e-(\d)$/,T=/^(\d+)$/,k=/^(\d+)e/,I=/\.0$/,P=/\.0*e/,V=/(\..*[^0])0*e/;function A(t){var n,e,i=parseFloat(t.arg);if(!isFinite(i)){if(!b(t.arg))throw new Error("invalid floating-point number. Value: "+e);i=t.arg}switch(t.specifier){case"e":case"E":e=i.toExponential(t.precision);break;case"f":case"F":e=i.toFixed(t.precision);break;case"g":case"G":w(i)<1e-4?((n=t.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(t.precision),t.alternate||(e=O.call(e,V,"$1e"),e=O.call(e,P,"e"),e=O.call(e,I,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=O.call(e,S,"e+0$1"),e=O.call(e,E,"e-0$1"),t.alternate&&(e=O.call(e,T,"$1."),e=O.call(e,k,"$1.e")),i>=0&&t.sign&&(e=t.sign+e),e=t.specifier===_.call(t.specifier)?_.call(e):j.call(e)}function F(t){var n,e="";for(n=0;n<t;n++)e+=" ";return e}var N=String.fromCharCode,$=isNaN,C=Array.isArray;function B(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function L(t){var n,e,i,r,o,c,l,a,u,f,p,s,g;if(!C(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(c="",l=1,a=0;a<t.length;a++)if("string"==typeof(i=t[a]))c+=i;else{if(n=void 0!==i.precision,!(i=B(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+a+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),e=i.flags,u=0;u<e.length;u++)switch(r=e.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=e.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+r)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,$(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(n&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,$(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,n=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(i.padZeros=!1),i.arg=v(i);break;case"s":i.maxWidth=n?i.precision:-1;break;case"c":if(!$(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=$(o)?String(i.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(i.precision=6),i.arg=A(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=d(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,p=i.width,s=i.padRight,g=void 0,(g=p-f.length)<0?f:f=s?f+F(g):F(g)+f)),c+=i.arg||"",l+=1}return c}var R=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function W(t){var n,e,i,r;for(e=[],r=0,i=R.exec(t);i;)(n=t.slice(r,R.lastIndex-i[0].length)).length&&e.push(n),e.push(G(i)),r=R.lastIndex,i=R.exec(t);return(n=t.slice(r)).length&&e.push(n),e}function X(t){var n,e;if("string"!=typeof t)throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=[W(t)],e=1;e<arguments.length;e++)n.push(arguments[e]);return L.apply(null,n)}var Z,M=Object.prototype,Y=M.toString,U=M.__defineGetter__,H=M.__defineSetter__,z=M.__lookupGetter__,D=M.__lookupSetter__;Z=function(){try{return g({},"x",{}),!0}catch(t){return!1}}()?m:function(t,n,e){var i,r,o,c;if("object"!=typeof t||null===t||"[object Array]"===Y.call(t))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===Y.call(e))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((r="value"in e)&&(z.call(t,n)||D.call(t,n)?(i=t.__proto__,t.__proto__=M,delete t[n],t[n]=e.value,t.__proto__=i):t[n]=e.value),o="get"in e,c="set"in e,r&&(o||c))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&U&&U.call(t,n,e.get),c&&H&&H.call(t,n,e.set),t};var q=Z;function J(t,n,e){q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function K(t){return"string"==typeof t}var Q=String.prototype.valueOf,tt=i();function nt(t){return"object"==typeof t&&(t instanceof String||(tt?function(t){try{return Q.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function et(t){return K(t)||nt(t)}function it(t){return"number"==typeof t}J(et,"isPrimitive",K),J(et,"isObject",nt);var rt=Number,ot=rt.prototype.toString,ct=i();function lt(t){return"object"==typeof t&&(t instanceof rt||(ct?function(t){try{return ot.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function at(t){return it(t)||lt(t)}function ut(t){return t!=t}function ft(t){return it(t)&&ut(t)}function pt(t){return lt(t)&&ut(t.valueOf())}function st(t){return ft(t)||pt(t)}J(at,"isPrimitive",it),J(at,"isObject",lt),J(st,"isPrimitive",ft),J(st,"isObject",pt);var gt=Number.POSITIVE_INFINITY,mt=rt.NEGATIVE_INFINITY,bt=Math.floor;function yt(t){return bt(t)===t}function dt(t){return t<gt&&t>mt&&yt(t)}function ht(t){return it(t)&&dt(t)}function xt(t){return lt(t)&&dt(t.valueOf())}function vt(t){return ht(t)||xt(t)}J(vt,"isPrimitive",ht),J(vt,"isObject",xt);var wt=Object.prototype.propertyIsEnumerable,jt=!wt.call("beep","0");function _t(t,n){var e;return null!=t&&(!(e=wt.call(t,n))&&jt&&et(t)?!ft(n=+n)&&ht(n)&&n>=0&&n<t.length:e)}var Ot=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)},St=s?p:function(t){return null!==t&&"object"==typeof t&&!Ot(t)&&"number"==typeof t.length&&yt(t.length)&&t.length>=0&&t.length<=4294967295&&c(t,"callee")&&!_t(t,"callee")},Et=Array.prototype.slice;function Tt(t){return null!==t&&"object"==typeof t}J(Tt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,i;if(!Ot(n))return!1;if(0===(e=n.length))return!1;for(i=0;i<e;i++)if(!1===t(n[i]))return!1;return!0}}(Tt));var kt=_t((function(){}),"prototype"),It=!_t({toString:null},"toString"),Pt=9007199254740991;function Vt(t,n,e){var i,r,o;if(!("object"==typeof(o=t)&&null!==o&&"number"==typeof o.length&&yt(o.length)&&o.length>=0&&o.length<=Pt||K(t)))throw new TypeError(X("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(i=t.length))return-1;if(3===arguments.length){if(!ht(e))throw new TypeError(X("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=i)return-1;r=e}else(r=i+e)<0&&(r=0)}else r=0;if(st(n)){for(;r<i;r++)if(st(t[r]))return r}else for(;r<i;r++)if(t[r]===n)return r;return-1}var At=/./;function Ft(t){return"boolean"==typeof t}var Nt=Boolean,$t=Boolean.prototype.toString,Ct=i();function Bt(t){return"object"==typeof t&&(t instanceof Nt||(Ct?function(t){try{return $t.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Lt(t){return Ft(t)||Bt(t)}J(Lt,"isPrimitive",Ft),J(Lt,"isObject",Bt);var Rt="object"==typeof self?self:null,Gt="object"==typeof window?window:null,Wt="object"==typeof globalThis?globalThis:null,Xt=function(t){if(arguments.length){if(!Ft(t))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(Wt)return Wt;if(Rt)return Rt;if(Gt)return Gt;throw new Error("unexpected error. Unable to resolve global object.")}(),Zt=Xt.document&&Xt.document.childNodes,Mt=Int8Array;function Yt(){return/^\s*function\s*([^(]*)/i}var Ut=/^\s*function\s*([^(]*)/i;function Ht(t){var n,e,i,r;if(("Object"===(e=f(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(i=t.constructor).name)return i.name;if(n=Ut.exec(i.toString()))return n[1]}return Tt(r=t)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))?"Buffer":e}J(Yt,"REGEXP",Ut);var zt="function"==typeof At||"object"==typeof Mt||"function"==typeof Zt?function(t){return Ht(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"==(n=typeof t)?Ht(t).toLowerCase():n};function Dt(t){return t.constructor&&t.constructor.prototype===t}var qt,Jt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kt="undefined"==typeof window?void 0:window,Qt=function(){var t;if("undefined"===zt(Kt))return!1;for(t in Kt)try{-1===Vt(Jt,t)&&c(Kt,t)&&null!==Kt[t]&&"object"===zt(Kt[t])&&Dt(Kt[t])}catch(t){return!0}return!1}(),tn="undefined"!=typeof window,nn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];qt=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return St(n)?t(Et.call(n)):t(n)}:t:function(t){var n,e,i,r,o,l,a;if(r=[],St(t)){for(a=0;a<t.length;a++)r.push(a.toString());return r}if("string"==typeof t){if(t.length>0&&!c(t,"0"))for(a=0;a<t.length;a++)r.push(a.toString())}else{if(0==(i="function"==typeof t)&&!Tt(t))return r;e=kt&&i}for(o in t)e&&"prototype"===o||!c(t,o)||r.push(String(o));if(It)for(n=function(t){if(!1===tn&&!Qt)return Dt(t);try{return Dt(t)}catch(t){return!1}}(t),a=0;a<nn.length;a++)l=nn[a],n&&"constructor"===l||!c(t,l)||r.push(String(l));return r};var en=qt;function rn(t){return"function"===zt(t)}var on,cn=Object,ln=Object.getPrototypeOf;on=rn(Object.getPrototypeOf)?ln:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===f(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var an=on,un=Object.prototype;function fn(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!Ot(t)}(t)&&(n=function(t){return null==t?null:(t=cn(t),an(t))}(t),!n||!c(t,"constructor")&&c(n,"constructor")&&rn(n.constructor)&&"[object Function]"===f(n.constructor)&&c(n,"isPrototypeOf")&&rn(n.isPrototypeOf)&&(n===un||function(t){var n;for(n in t)if(!c(t,n))return!1;return!0}(t)))}var pn={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function sn(){var t;return 0===arguments.length?pn.all.slice():(t=pn[arguments[0]])?t.slice():[]}function gn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function mn(t,n,e){q(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}J(sn,"enum",gn),function(t,n){var e,i,r;for(e=en(n),r=0;r<e.length;r++)mn(t,i=e[r],n[i])}(sn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var bn=function(t,n){var e,i,r,o,l,a,u,f=!0;if(!Tt(t))throw new TypeError(X("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!fn(n))throw new TypeError(X("invalid argument. Options argument must be an object. Value: `%s`.",n));if(c(n,"duplicates")&&!Ft(f=n.duplicates))throw new TypeError(X("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(i=(e=en(t)).length,l={},f)for(u=0;u<i;u++)c(l,o=t[r=e[u]])?(a=l[o],Ot(a)?l[o].push(r):l[o]=[a,r]):l[o]=r;else for(u=0;u<i;u++)l[t[r=e[u]]]=r;return l}({bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},{duplicates:!1}),yn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function dn(t){var n=typeof t;return"string"===n?null===function(t){var n=yn[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=bn[t];return"string"==typeof n?n:null}(t):null}var hn={float64:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"float64",uint16:"float64",uint8:"float64",uint8c:"float64",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic",bool:-1},float32:{float64:"float64",float32:"float32",int32:"float64",int16:"float32",int8:"float32",uint32:"float64",uint16:"float32",uint8:"float32",uint8c:"float32",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},int32:{float64:"float64",float32:"float64",int32:"int32",int16:"int32",int8:"int32",uint32:"float64",uint16:"int32",uint8:"int32",uint8c:"int32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic",bool:-1},int16:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},int8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int8",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},uint32:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"uint32",uint16:"uint32",uint8:"uint32",uint8c:"uint32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic",bool:-1},uint16:{float64:"float64",float32:"float32",int32:"int32",int16:"int32",int8:"int32",uint32:"uint32",uint16:"uint16",uint8:"uint16",uint8c:"uint16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},uint8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},uint8c:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8c",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic",bool:-1},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},generic:{float64:"generic",float32:"generic",int32:"generic",int16:"generic",int8:"generic",uint32:"generic",uint16:"generic",uint8:"generic",uint8c:"generic",complex64:"generic",complex128:"generic",binary:-1,generic:"generic",bool:"generic"},binary:{float64:-1,float32:-1,int32:-1,int16:-1,int8:-1,uint32:-1,uint16:-1,uint8:-1,uint8c:-1,complex64:-1,complex128:-1,binary:"binary",generic:-1,bool:-1},bool:{float64:-1,float32:-1,int32:-1,int16:-1,int8:-1,uint32:-1,uint16:-1,uint8:-1,uint8c:-1,complex64:-1,complex128:-1,binary:-1,generic:"generic",bool:"bool"}};return function(t,n){var e;return 0===arguments.length?function(){var t,n,e,i,r,o,c,l,a;for(e={},n=(t=en(hn)).length,a=0;a<n;a++){for(r=t[a],c=hn[r],i={},l=0;l<n;l++)i[o=t[l]]=c[o];e[r]=i}return e}():(t=dn(t),c(hn,t)&&c(e=hn[t],n=dn(n))?e[n]:null)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).promotionRules=n();
//# sourceMappingURL=browser.js.map
