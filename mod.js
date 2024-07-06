// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function a(t,n){return null!=t&&o.call(t,n)}var l="function"==typeof Symbol?Symbol:void 0,c="function"==typeof l?l.toStringTag:"";var u=r()?function(t){var n,e,r;if(null==t)return i.call(t);e=t[c],n=a(t,c);try{t[c]=void 0}catch(n){return i.call(t)}return r=i.call(t),n?t[c]=e:delete t[c],r}:function(t){return i.call(t)};function f(t){return"[object Arguments]"===u(t)}var p=function(){return f(arguments)}(),s="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function m(t){return"number"==typeof t}function b(t){var n,e="";for(n=0;n<t;n++)e+="0";return e}function y(t,n,e){var r=!1,i=n-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=e?t+b(i):b(i)+t,r&&(t="-"+t)),t}var d=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function v(t){var n,e,r;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=t.arg,r=parseInt(e,10),!isFinite(r)){if(!m(e))throw new Error("invalid integer. Value: "+e);r=0}return r<0&&("u"===t.specifier||10!==n)&&(r=4294967295+r+1),r<0?(e=(-r).toString(n),t.precision&&(e=y(e,t.precision,t.padRight)),e="-"+e):(e=r.toString(n),r||t.precision?t.precision&&(e=y(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===n&&(t.alternate&&(e="0x"+e),e=t.specifier===h.call(t.specifier)?h.call(e):d.call(e)),8===n&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var x=Math.abs,w=String.prototype.toLowerCase,j=String.prototype.toUpperCase,_=String.prototype.replace,O=/e\+(\d)$/,S=/e-(\d)$/,E=/^(\d+)$/,T=/^(\d+)e/,k=/\.0$/,I=/\.0*e/,P=/(\..*[^0])0*e/;function V(t){var n,e,r=parseFloat(t.arg);if(!isFinite(r)){if(!m(t.arg))throw new Error("invalid floating-point number. Value: "+e);r=t.arg}switch(t.specifier){case"e":case"E":e=r.toExponential(t.precision);break;case"f":case"F":e=r.toFixed(t.precision);break;case"g":case"G":x(r)<1e-4?((n=t.precision)>0&&(n-=1),e=r.toExponential(n)):e=r.toPrecision(t.precision),t.alternate||(e=_.call(e,P,"$1e"),e=_.call(e,I,"e"),e=_.call(e,k,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=_.call(e,O,"e+0$1"),e=_.call(e,S,"e-0$1"),t.alternate&&(e=_.call(e,E,"$1."),e=_.call(e,T,"$1.e")),r>=0&&t.sign&&(e=t.sign+e),e=t.specifier===j.call(t.specifier)?j.call(e):w.call(e)}function A(t){var n,e="";for(n=0;n<t;n++)e+=" ";return e}var F=String.fromCharCode,N=isNaN,$=Array.isArray;function C(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function B(t){var n,e,r,i,o,a,l,c,u,f,p,s,g;if(!$(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",l=1,c=0;c<t.length;c++)if(r=t[c],"string"==typeof r)a+=r;else{if(n=void 0!==r.precision,!(r=C(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+r+"`.");for(r.mapping&&(l=r.mapping),e=r.flags,u=0;u<e.length;u++)switch(i=e.charAt(u)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=e.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===r.width){if(r.width=parseInt(arguments[l],10),l+=1,N(r.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(n&&"*"===r.precision){if(r.precision=parseInt(arguments[l],10),l+=1,N(r.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,n=!1)}switch(r.arg=arguments[l],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(r.padZeros=!1),r.arg=v(r);break;case"s":r.maxWidth=n?r.precision:-1;break;case"c":if(!N(r.arg)){if((o=parseInt(r.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=N(o)?String(r.arg):F(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(r.precision=6),r.arg=V(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=y(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=(f=r.arg,p=r.width,s=r.padRight,g=void 0,(g=p-f.length)<0?f:f=s?f+A(g):A(g)+f)),a+=r.arg||"",l+=1}return a}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function G(t){var n,e,r,i;for(e=[],i=0,r=L.exec(t);r;)(n=t.slice(i,L.lastIndex-r[0].length)).length&&e.push(n),e.push(R(r)),i=L.lastIndex,r=L.exec(t);return(n=t.slice(i)).length&&e.push(n),e}function W(t){var n,e;if("string"!=typeof t)throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=[G(t)],e=1;e<arguments.length;e++)n.push(arguments[e]);return B.apply(null,n)}var X,Z=Object.prototype,M=Z.toString,Y=Z.__defineGetter__,U=Z.__defineSetter__,H=Z.__lookupGetter__,z=Z.__lookupSetter__;X=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?g:function(t,n,e){var r,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(W("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(W("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(H.call(t,n)||z.call(t,n)?(r=t.__proto__,t.__proto__=Z,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Y&&Y.call(t,n,e.get),a&&U&&U.call(t,n,e.set),t};var D=X;function q(t,n,e){D(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function J(t){return"string"==typeof t}var K=String.prototype.valueOf;var Q=r();function tt(t){return"object"==typeof t&&(t instanceof String||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object String]"===u(t)))}function nt(t){return J(t)||tt(t)}function et(t){return"number"==typeof t}q(nt,"isPrimitive",J),q(nt,"isObject",tt);var rt=Number,it=rt.prototype.toString;var ot=r();function at(t){return"object"==typeof t&&(t instanceof rt||(ot?function(t){try{return it.call(t),!0}catch(t){return!1}}(t):"[object Number]"===u(t)))}function lt(t){return et(t)||at(t)}function ct(t){return t!=t}function ut(t){return et(t)&&ct(t)}function ft(t){return at(t)&&ct(t.valueOf())}function pt(t){return ut(t)||ft(t)}q(lt,"isPrimitive",et),q(lt,"isObject",at),q(pt,"isPrimitive",ut),q(pt,"isObject",ft);var st=Number.POSITIVE_INFINITY,gt=rt.NEGATIVE_INFINITY,mt=Math.floor;function bt(t){return mt(t)===t}function yt(t){return t<st&&t>gt&&bt(t)}function dt(t){return et(t)&&yt(t)}function ht(t){return at(t)&&yt(t.valueOf())}function vt(t){return dt(t)||ht(t)}q(vt,"isPrimitive",dt),q(vt,"isObject",ht);var xt=Object.prototype.propertyIsEnumerable;var wt=!xt.call("beep","0");function jt(t,n){var e;return null!=t&&(!(e=xt.call(t,n))&&wt&&nt(t)?!ut(n=+n)&&dt(n)&&n>=0&&n<t.length:e)}var _t=Array.isArray?Array.isArray:function(t){return"[object Array]"===u(t)};var Ot=p?f:function(t){return null!==t&&"object"==typeof t&&!_t(t)&&"number"==typeof t.length&&bt(t.length)&&t.length>=0&&t.length<=4294967295&&a(t,"callee")&&!jt(t,"callee")},St=Array.prototype.slice;function Et(t){return null!==t&&"object"==typeof t}q(Et,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(W("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,r;if(!_t(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Et));var Tt=jt((function(){}),"prototype"),kt=!jt({toString:null},"toString"),It=9007199254740991;function Pt(t,n,e){var r,i,o;if(!(o=t,"object"==typeof o&&null!==o&&"number"==typeof o.length&&bt(o.length)&&o.length>=0&&o.length<=It||J(t)))throw new TypeError(W("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!dt(e))throw new TypeError(W("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(pt(n)){for(;i<r;i++)if(pt(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var Vt=/./;function At(t){return"boolean"==typeof t}var Ft=Boolean,Nt=Boolean.prototype.toString;var $t=r();function Ct(t){return"object"==typeof t&&(t instanceof Ft||($t?function(t){try{return Nt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===u(t)))}function Bt(t){return At(t)||Ct(t)}q(Bt,"isPrimitive",At),q(Bt,"isObject",Ct);var Lt="object"==typeof self?self:null,Rt="object"==typeof window?window:null,Gt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Wt="object"==typeof Gt?Gt:null,Xt="object"==typeof globalThis?globalThis:null;var Zt=function(t){if(arguments.length){if(!At(t))throw new TypeError(W("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(Xt)return Xt;if(Lt)return Lt;if(Rt)return Rt;if(Wt)return Wt;throw new Error("unexpected error. Unable to resolve global object.")}(),Mt=Zt.document&&Zt.document.childNodes,Yt=Int8Array;function Ut(){return/^\s*function\s*([^(]*)/i}var Ht=/^\s*function\s*([^(]*)/i;function zt(t){var n,e,r,i;if(("Object"===(e=u(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=Ht.exec(r.toString()))return n[1]}return Et(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}q(Ut,"REGEXP",Ht);var Dt="function"==typeof Vt||"object"==typeof Yt||"function"==typeof Mt?function(t){return zt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?zt(t).toLowerCase():n};function qt(t){return t.constructor&&t.constructor.prototype===t}var Jt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kt="undefined"==typeof window?void 0:window;var Qt=function(){var t;if("undefined"===Dt(Kt))return!1;for(t in Kt)try{-1===Pt(Jt,t)&&a(Kt,t)&&null!==Kt[t]&&"object"===Dt(Kt[t])&&qt(Kt[t])}catch(t){return!0}return!1}(),tn="undefined"!=typeof window;var nn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var en=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return Ot(n)?t(St.call(n)):t(n)}:t:function(t){var n,e,r,i,o,l,c;if(i=[],Ot(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!a(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!Et(t))return i;e=Tt&&r}for(o in t)e&&"prototype"===o||!a(t,o)||i.push(String(o));if(kt)for(n=function(t){if(!1===tn&&!Qt)return qt(t);try{return qt(t)}catch(t){return!1}}(t),c=0;c<nn.length;c++)l=nn[c],n&&"constructor"===l||!a(t,l)||i.push(String(l));return i};function rn(t){return"function"===Dt(t)}var on,an=Object,ln=Object.getPrototypeOf;on=rn(Object.getPrototypeOf)?ln:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===u(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var cn=on;var un=Object.prototype;function fn(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!_t(t)}(t)&&(n=function(t){return null==t?null:(t=an(t),cn(t))}(t),!n||!a(t,"constructor")&&a(n,"constructor")&&rn(n.constructor)&&"[object Function]"===u(n.constructor)&&a(n,"isPrototypeOf")&&rn(n.isPrototypeOf)&&(n===un||function(t){var n;for(n in t)if(!a(t,n))return!1;return!0}(t)))}var pn={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function sn(){var t;return 0===arguments.length?pn.all.slice():(t=pn[arguments[0]])?t.slice():[]}function gn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function mn(t,n,e){D(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}q(sn,"enum",gn),function(t,n){var e,r,i;for(e=en(n),i=0;i<e.length;i++)mn(t,r=e[i],n[r])}(sn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var bn=function(t,n){var e,r,i,o,l,c,u,f=!0;if(!Et(t))throw new TypeError(W("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!fn(n))throw new TypeError(W("invalid argument. Options argument must be an object. Value: `%s`.",n));if(a(n,"duplicates")&&!At(f=n.duplicates))throw new TypeError(W("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(r=(e=en(t)).length,l={},f)for(u=0;u<r;u++)a(l,o=t[i=e[u]])?(c=l[o],_t(c)?l[o].push(i):l[o]=[c,i]):l[o]=i;else for(u=0;u<r;u++)l[t[i=e[u]]]=i;return l}({bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},{duplicates:!1});var yn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function dn(t){var n=typeof t;return"string"===n?null===function(t){var n=yn[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=bn[t];return"string"==typeof n?n:null}(t):null}var hn={float64:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"float64",uint16:"float64",uint8:"float64",uint8c:"float64",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic",bool:-1},float32:{float64:"float64",float32:"float32",int32:"float64",int16:"float32",int8:"float32",uint32:"float64",uint16:"float32",uint8:"float32",uint8c:"float32",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},int32:{float64:"float64",float32:"float64",int32:"int32",int16:"int32",int8:"int32",uint32:"float64",uint16:"int32",uint8:"int32",uint8c:"int32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic",bool:-1},int16:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},int8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int8",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},uint32:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"uint32",uint16:"uint32",uint8:"uint32",uint8c:"uint32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic",bool:-1},uint16:{float64:"float64",float32:"float32",int32:"int32",int16:"int32",int8:"int32",uint32:"uint32",uint16:"uint16",uint8:"uint16",uint8c:"uint16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},uint8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},uint8c:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8c",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic",bool:-1},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic",bool:-1},generic:{float64:"generic",float32:"generic",int32:"generic",int16:"generic",int8:"generic",uint32:"generic",uint16:"generic",uint8:"generic",uint8c:"generic",complex64:"generic",complex128:"generic",binary:-1,generic:"generic",bool:"generic"},binary:{float64:-1,float32:-1,int32:-1,int16:-1,int8:-1,uint32:-1,uint16:-1,uint8:-1,uint8c:-1,complex64:-1,complex128:-1,binary:"binary",generic:-1,bool:-1},bool:{float64:-1,float32:-1,int32:-1,int16:-1,int8:-1,uint32:-1,uint16:-1,uint8:-1,uint8c:-1,complex64:-1,complex128:-1,binary:-1,generic:"generic",bool:"bool"}};function vn(t,n){var e;return 0===arguments.length?function(){var t,n,e,r,i,o,a,l,c;for(e={},n=(t=en(hn)).length,c=0;c<n;c++){for(i=t[c],a=hn[i],r={},l=0;l<n;l++)r[o=t[l]]=a[o];e[i]=r}return e}():(t=dn(t),a(hn,t)&&a(e=hn[t],n=dn(n))?e[n]:null)}export{vn as default};
//# sourceMappingURL=mod.js.map
