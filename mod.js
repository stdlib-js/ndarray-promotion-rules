// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function i(){return e&&"symbol"==typeof Symbol.toStringTag}var r=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function l(t,n){return null!=t&&o.call(t,n)}var a="function"==typeof Symbol?Symbol:void 0,c="function"==typeof a?a.toStringTag:"";var u=i()?function(t){var n,e,i;if(null==t)return r.call(t);e=t[c],n=l(t,c);try{t[c]=void 0}catch(n){return r.call(t)}return i=r.call(t),n?t[c]=e:delete t[c],i}:function(t){return r.call(t)};function f(t){return"[object Arguments]"===u(t)}var p=function(){return f(arguments)}(),s="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function m(t){return"number"==typeof t}function b(t){var n,e="";for(n=0;n<t;n++)e+="0";return e}function y(t,n,e){var i=!1,r=n-t.length;return r<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=e?t+b(r):b(r)+t,i&&(t="-"+t)),t}var d=String.prototype.toLowerCase,x=String.prototype.toUpperCase;function h(t){var n,e,i;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=t.arg,i=parseInt(e,10),!isFinite(i)){if(!m(e))throw new Error("invalid integer. Value: "+e);i=0}return i<0&&("u"===t.specifier||10!==n)&&(i=4294967295+i+1),i<0?(e=(-i).toString(n),t.precision&&(e=y(e,t.precision,t.padRight)),e="-"+e):(e=i.toString(n),i||t.precision?t.precision&&(e=y(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===n&&(t.alternate&&(e="0x"+e),e=t.specifier===x.call(t.specifier)?x.call(e):d.call(e)),8===n&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var v=Math.abs,w=String.prototype.toLowerCase,_=String.prototype.toUpperCase,j=String.prototype.replace,O=/e\+(\d)$/,S=/e-(\d)$/,E=/^(\d+)$/,T=/^(\d+)e/,k=/\.0$/,I=/\.0*e/,P=/(\..*[^0])0*e/;function V(t){var n,e,i=parseFloat(t.arg);if(!isFinite(i)){if(!m(t.arg))throw new Error("invalid floating-point number. Value: "+e);i=t.arg}switch(t.specifier){case"e":case"E":e=i.toExponential(t.precision);break;case"f":case"F":e=i.toFixed(t.precision);break;case"g":case"G":v(i)<1e-4?((n=t.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(t.precision),t.alternate||(e=j.call(e,P,"$1e"),e=j.call(e,I,"e"),e=j.call(e,k,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=j.call(e,O,"e+0$1"),e=j.call(e,S,"e-0$1"),t.alternate&&(e=j.call(e,E,"$1."),e=j.call(e,T,"$1.e")),i>=0&&t.sign&&(e=t.sign+e),e=t.specifier===_.call(t.specifier)?_.call(e):w.call(e)}function A(t){var n,e="";for(n=0;n<t;n++)e+=" ";return e}var F=String.fromCharCode,$=Array.isArray;function C(t){return t!=t}function N(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function B(t){var n,e,i,r,o,l,a,c,u,f,p,s,g;if(!$(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l="",a=1,c=0;c<t.length;c++)if(i=t[c],"string"==typeof i)l+=i;else{if(n=void 0!==i.precision,!(i=N(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+i+"`.");for(i.mapping&&(a=i.mapping),e=i.flags,u=0;u<e.length;u++)switch(r=e.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=e.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+r)}if("*"===i.width){if(i.width=parseInt(arguments[a],10),a+=1,C(i.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(n&&"*"===i.precision){if(i.precision=parseInt(arguments[a],10),a+=1,C(i.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,n=!1)}switch(i.arg=arguments[a],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(i.padZeros=!1),i.arg=h(i);break;case"s":i.maxWidth=n?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!C(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=C(o)?String(i.arg):F(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(i.precision=6),i.arg=V(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=y(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,p=i.width,s=i.padRight,g=void 0,(g=p-f.length)<0?f:f=s?f+A(g):A(g)+f)),l+=i.arg||"",a+=1}return l}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function G(t){var n,e,i,r;for(e=[],r=0,i=L.exec(t);i;)(n=t.slice(r,L.lastIndex-i[0].length)).length&&e.push(n),e.push(R(i)),r=L.lastIndex,i=L.exec(t);return(n=t.slice(r)).length&&e.push(n),e}function W(t){var n,e;if("string"!=typeof t)throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=[G(t)],e=1;e<arguments.length;e++)n.push(arguments[e]);return B.apply(null,n)}var X,Z=Object.prototype,M=Z.toString,Y=Z.__defineGetter__,U=Z.__defineSetter__,H=Z.__lookupGetter__,z=Z.__lookupSetter__;X=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?g:function(t,n,e){var i,r,o,l;if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(W("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(W("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((r="value"in e)&&(H.call(t,n)||z.call(t,n)?(i=t.__proto__,t.__proto__=Z,delete t[n],t[n]=e.value,t.__proto__=i):t[n]=e.value),o="get"in e,l="set"in e,r&&(o||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Y&&Y.call(t,n,e.get),l&&U&&U.call(t,n,e.set),t};var D=X;function q(t,n,e){D(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function J(t){return"string"==typeof t}var K=String.prototype.valueOf;var Q=i();function tt(t){return"object"==typeof t&&(t instanceof String||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object String]"===u(t)))}function nt(t){return J(t)||tt(t)}function et(t){return"number"==typeof t}q(nt,"isPrimitive",J),q(nt,"isObject",tt);var it=Number,rt=it.prototype.toString;var ot=i();function lt(t){return"object"==typeof t&&(t instanceof it||(ot?function(t){try{return rt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===u(t)))}function at(t){return et(t)||lt(t)}function ct(t){return t!=t}function ut(t){return et(t)&&ct(t)}function ft(t){return lt(t)&&ct(t.valueOf())}function pt(t){return ut(t)||ft(t)}q(at,"isPrimitive",et),q(at,"isObject",lt),q(pt,"isPrimitive",ut),q(pt,"isObject",ft);var st=Number.POSITIVE_INFINITY,gt=it.NEGATIVE_INFINITY,mt=Math.floor;function bt(t){return mt(t)===t}function yt(t){return t<st&&t>gt&&bt(t)}function dt(t){return et(t)&&yt(t)}function xt(t){return lt(t)&&yt(t.valueOf())}function ht(t){return dt(t)||xt(t)}q(ht,"isPrimitive",dt),q(ht,"isObject",xt);var vt=Object.prototype.propertyIsEnumerable;var wt=!vt.call("beep","0");function _t(t,n){var e;return null!=t&&(!(e=vt.call(t,n))&&wt&&nt(t)?!ut(n=+n)&&dt(n)&&n>=0&&n<t.length:e)}var jt=Array.isArray?Array.isArray:function(t){return"[object Array]"===u(t)};var Ot=p?f:function(t){return null!==t&&"object"==typeof t&&!jt(t)&&"number"==typeof t.length&&bt(t.length)&&t.length>=0&&t.length<=4294967295&&l(t,"callee")&&!_t(t,"callee")},St=Array.prototype.slice;function Et(t){return null!==t&&"object"==typeof t}q(Et,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(W("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,i;if(!jt(n))return!1;if(0===(e=n.length))return!1;for(i=0;i<e;i++)if(!1===t(n[i]))return!1;return!0}}(Et));var Tt=_t((function(){}),"prototype"),kt=!_t({toString:null},"toString"),It=9007199254740991;function Pt(t,n,e){var i,r,o;if(!(o=t,"object"==typeof o&&null!==o&&"number"==typeof o.length&&bt(o.length)&&o.length>=0&&o.length<=It||J(t)))throw new TypeError(W("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(i=t.length))return-1;if(3===arguments.length){if(!dt(e))throw new TypeError(W("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=i)return-1;r=e}else(r=i+e)<0&&(r=0)}else r=0;if(pt(n)){for(;r<i;r++)if(pt(t[r]))return r}else for(;r<i;r++)if(t[r]===n)return r;return-1}var Vt=/./;function At(t){return"boolean"==typeof t}var Ft=Boolean,$t=Boolean.prototype.toString;var Ct=i();function Nt(t){return"object"==typeof t&&(t instanceof Ft||(Ct?function(t){try{return $t.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===u(t)))}function Bt(t){return At(t)||Nt(t)}q(Bt,"isPrimitive",At),q(Bt,"isObject",Nt);var Lt="object"==typeof self?self:null,Rt="object"==typeof window?window:null,Gt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Wt="object"==typeof Gt?Gt:null,Xt="object"==typeof globalThis?globalThis:null;var Zt=function(t){if(arguments.length){if(!At(t))throw new TypeError(W("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(Xt)return Xt;if(Lt)return Lt;if(Rt)return Rt;if(Wt)return Wt;throw new Error("unexpected error. Unable to resolve global object.")}(),Mt=Zt.document&&Zt.document.childNodes,Yt=Int8Array;function Ut(){return/^\s*function\s*([^(]*)/i}var Ht=/^\s*function\s*([^(]*)/i;function zt(t){var n,e,i,r;if(("Object"===(e=u(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(i=t.constructor).name)return i.name;if(n=Ht.exec(i.toString()))return n[1]}return Et(r=t)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))?"Buffer":e}q(Ut,"REGEXP",Ht);var Dt="function"==typeof Vt||"object"==typeof Yt||"function"==typeof Mt?function(t){return zt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?zt(t).toLowerCase():n};function qt(t){return t.constructor&&t.constructor.prototype===t}var Jt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kt="undefined"==typeof window?void 0:window;var Qt=function(){var t;if("undefined"===Dt(Kt))return!1;for(t in Kt)try{-1===Pt(Jt,t)&&l(Kt,t)&&null!==Kt[t]&&"object"===Dt(Kt[t])&&qt(Kt[t])}catch(t){return!0}return!1}(),tn="undefined"!=typeof window;var nn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var en=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return Ot(n)?t(St.call(n)):t(n)}:t:function(t){var n,e,i,r,o,a,c;if(r=[],Ot(t)){for(c=0;c<t.length;c++)r.push(c.toString());return r}if("string"==typeof t){if(t.length>0&&!l(t,"0"))for(c=0;c<t.length;c++)r.push(c.toString())}else{if(!1==(i="function"==typeof t)&&!Et(t))return r;e=Tt&&i}for(o in t)e&&"prototype"===o||!l(t,o)||r.push(String(o));if(kt)for(n=function(t){if(!1===tn&&!Qt)return qt(t);try{return qt(t)}catch(t){return!1}}(t),c=0;c<nn.length;c++)a=nn[c],n&&"constructor"===a||!l(t,a)||r.push(String(a));return r};function rn(t){return"function"===Dt(t)}var on,ln=Object,an=Object.getPrototypeOf;on=rn(Object.getPrototypeOf)?an:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===u(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var cn=on;var un=Object.prototype;function fn(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!jt(t)}(t)&&(n=function(t){return null==t?null:(t=ln(t),cn(t))}(t),!n||!l(t,"constructor")&&l(n,"constructor")&&rn(n.constructor)&&"[object Function]"===u(n.constructor)&&l(n,"isPrototypeOf")&&rn(n.isPrototypeOf)&&(n===un||function(t){var n;for(n in t)if(!l(t,n))return!1;return!0}(t)))}var pn={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function sn(){var t;return 0===arguments.length?pn.all.slice():(t=pn[arguments[0]])?t.slice():[]}function gn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function mn(t,n,e){D(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}q(sn,"enum",gn),function(t,n){var e,i,r;for(e=en(n),r=0;r<e.length;r++)mn(t,i=e[r],n[i])}(sn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var bn=function(t,n){var e,i,r,o,a,c,u,f=!0;if(!Et(t))throw new TypeError(W("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!fn(n))throw new TypeError(W("invalid argument. Options argument must be an object. Value: `%s`.",n));if(l(n,"duplicates")&&!At(f=n.duplicates))throw new TypeError(W("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(i=(e=en(t)).length,a={},f)for(u=0;u<i;u++)l(a,o=t[r=e[u]])?(c=a[o],jt(c)?a[o].push(r):a[o]=[c,r]):a[o]=r;else for(u=0;u<i;u++)a[t[r=e[u]]]=r;return a}({bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},{duplicates:!1});var yn={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function dn(){var t;return 0===arguments.length?yn.all.slice():(t=yn[arguments[0]])?t.slice():[]}function xn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}q(dn,"enum",xn),function(t,n){var e,i,r;for(e=en(n),r=0;r<e.length;r++)mn(t,i=e[r],n[i])}(dn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var hn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function vn(t){var n=typeof t;return"string"===n?null===function(t){var n=hn[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=bn[t];return"string"==typeof n?n:null}(t):null}var wn={float64:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"float64",uint16:"float64",uint8:"float64",uint8c:"float64",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic",bool:-1},float32:{float64:"float64",float32:"float32",int32:"float64",int16:"float32",int8:"float32",uint32:"float64",uint16:"float32",uint8:"float32",uint8c:"float32",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},int32:{float64:"float64",float32:"float64",int32:"int32",int16:"int32",int8:"int32",uint32:"float64",uint16:"int32",uint8:"int32",uint8c:"int32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic",bool:-1},int16:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},int8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int8",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},uint32:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"uint32",uint16:"uint32",uint8:"uint32",uint8c:"uint32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic",bool:-1},uint16:{float64:"float64",float32:"float32",int32:"int32",int16:"int32",int8:"int32",uint32:"uint32",uint16:"uint16",uint8:"uint16",uint8c:"uint16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},uint8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},uint8c:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8c",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic",bool:-1},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},generic:{float64:"generic",float32:"generic",int32:"generic",int16:"generic",int8:"generic",uint32:"generic",uint16:"generic",uint8:"generic",uint8c:"generic",complex64:"generic",complex128:"generic",binary:-1,generic:"generic",bool:"generic"},binary:{float64:-1,float32:-1,int32:-1,int16:-1,int8:-1,uint32:-1,uint16:-1,uint8:-1,uint8c:-1,complex64:-1,complex128:-1,binary:"binary",generic:-1,bool:-1},bool:{float64:-1,float32:-1,int32:-1,int16:-1,int8:-1,uint32:-1,uint16:-1,uint8:-1,uint8c:-1,complex64:-1,complex128:-1,binary:-1,generic:"generic",bool:"bool"}};function _n(t,n){var e;return 0===arguments.length?function(){var t,n,e,i,r,o,l,a,c;for(e={},n=(t=en(wn)).length,c=0;c<n;c++){for(r=t[c],l=wn[r],i={},a=0;a<n;a++)i[o=t[a]]=l[o];e[r]=i}return e}():(t=vn(t),l(wn,t)&&l(e=wn[t],n=vn(n))?e[n]:null)}export{_n as default};
//# sourceMappingURL=mod.js.map
