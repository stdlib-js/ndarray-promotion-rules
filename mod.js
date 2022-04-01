// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){if(t.__esModule)return t;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(e){var r=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(n,e,r.get?r:{enumerable:!0,get:function(){return t[e]}})})),n}var n=function(t){return Object.keys(Object(t))},e=n;var r=function(){return function(){return 2!==(e(arguments)||"").length}(1,2)},i=void 0!==Object.keys;var o=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return o&&"symbol"==typeof Symbol.toStringTag},c=Object.prototype.toString,l=c;var a=function(t){return l.call(t)},f=Object.prototype.hasOwnProperty;var p=function(t,n){return null!=t&&f.call(t,n)},m="function"==typeof Symbol?Symbol.toStringTag:"",v=p,y=m,s=c;var b=a,g=function(t){var n,e,r;if(null==t)return s.call(t);e=t[y],n=v(t,y);try{t[y]=void 0}catch(n){return s.call(t)}return r=s.call(t),n?t[y]=e:delete t[y],r},x=u()?g:b,d=x;var j=function(t){return"[object Arguments]"===d(t)},h=j;var O=function(){return h(arguments)}(),_="function"==typeof Object.defineProperty?Object.defineProperty:null;var w=function(){try{return _({},"x",{}),!0}catch(t){return!1}},P=Object.defineProperty,S=Object.prototype,E=S.toString,T=S.__defineGetter__,I=S.__defineSetter__,A=S.__lookupGetter__,k=S.__lookupSetter__;var V=function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===E.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===E.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(A.call(t,n)||k.call(t,n)?(r=t.__proto__,t.__proto__=S,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&T&&T.call(t,n,e.get),u&&I&&I.call(t,n,e.set),t},N=P,B=V,F=w()?N:B,G=F;var L=function(t,n,e){G(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})},M=L;var X=function(t){return"string"==typeof t},Y=String.prototype.valueOf;var C=x,D=function(t){try{return Y.call(t),!0}catch(t){return!1}},H=u();var R=function(t){return"object"==typeof t&&(t instanceof String||(H?D(t):"[object String]"===C(t)))},W=X,z=R;var U=M,q=function(t){return W(t)||z(t)},J=R;U(q,"isPrimitive",X),U(q,"isObject",J);var K=q;var Q=function(t){return"number"==typeof t},Z=Number,$=Z.prototype.toString;var tt=x,nt=Z,et=function(t){try{return $.call(t),!0}catch(t){return!1}},rt=u();var it=function(t){return"object"==typeof t&&(t instanceof nt||(rt?et(t):"[object Number]"===tt(t)))},ot=Q,ut=it;var ct=M,lt=function(t){return ot(t)||ut(t)},at=it;ct(lt,"isPrimitive",Q),ct(lt,"isObject",at);var ft=lt;var pt=function(t){return t!=t},mt=ft.isPrimitive,vt=pt;var yt=function(t){return mt(t)&&vt(t)},st=ft.isObject,bt=pt;var gt=function(t){return st(t)&&bt(t.valueOf())},xt=yt,dt=gt;var jt=M,ht=function(t){return xt(t)||dt(t)},Ot=gt;jt(ht,"isPrimitive",yt),jt(ht,"isObject",Ot);var _t=ht,wt=Number.POSITIVE_INFINITY,Pt=Z.NEGATIVE_INFINITY,St=Math.floor;var Et=function(t){return St(t)===t},Tt=wt,It=Pt,At=Et;var kt=function(t){return t<Tt&&t>It&&At(t)},Vt=ft.isPrimitive,Nt=kt;var Bt=function(t){return Vt(t)&&Nt(t)},Ft=ft.isObject,Gt=kt;var Lt=function(t){return Ft(t)&&Gt(t.valueOf())},Mt=Bt,Xt=Lt;var Yt=M,Ct=function(t){return Mt(t)||Xt(t)},Dt=Lt;Yt(Ct,"isPrimitive",Bt),Yt(Ct,"isObject",Dt);var Ht,Rt=Ct,Wt=Object.prototype.propertyIsEnumerable;Ht=!Wt.call("beep","0");var zt=K,Ut=_t.isPrimitive,qt=Rt.isPrimitive,Jt=Wt,Kt=Ht;var Qt=function(t,n){var e;return null!=t&&(!(e=Jt.call(t,n))&&Kt&&zt(t)?!Ut(n=+n)&&qt(n)&&n>=0&&n<t.length:e)},Zt=Qt,$t=x;var tn=Array.isArray?Array.isArray:function(t){return"[object Array]"===$t(t)},nn=p,en=Zt,rn=tn,on=Et;var un=O?j:function(t){return null!==t&&"object"==typeof t&&!rn(t)&&"number"==typeof t.length&&on(t.length)&&t.length>=0&&t.length<=4294967295&&nn(t,"callee")&&!en(t,"callee")},cn=un,ln=n,an=Array.prototype.slice;var fn=function(t){return cn(t)?ln(an.call(t)):ln(t)},pn=tn;var mn=function(t){return null!==t&&"object"==typeof t};M(mn,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!pn(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(mn));var vn=mn;var yn=Zt((function(){}),"prototype"),sn=!Zt({toString:null},"toString"),bn=Et;var gn=_t,xn=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&bn(t.length)&&t.length>=0&&t.length<=9007199254740991},dn=K.isPrimitive,jn=Rt.isPrimitive;var hn=function(t,n,e){var r,i;if(!xn(t)&&!dn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!jn(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(gn(n)){for(;i<r;i++)if(gn(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1},On=/./;var _n=function(t){return"boolean"==typeof t},wn=Boolean.prototype.toString;var Pn=x,Sn=function(t){try{return wn.call(t),!0}catch(t){return!1}},En=u();var Tn=function(t){return"object"==typeof t&&(t instanceof Boolean||(En?Sn(t):"[object Boolean]"===Pn(t)))},In=_n,An=Tn;var kn=M,Vn=function(t){return In(t)||An(t)},Nn=Tn;kn(Vn,"isPrimitive",_n),kn(Vn,"isObject",Nn);var Bn=Vn;var Fn="object"==typeof self?self:null,Gn="object"==typeof window?window:null,Ln=Bn.isPrimitive,Mn=function(){return new Function("return this;")()},Xn=Fn,Yn=Gn,Cn=t(Object.freeze({__proto__:null}));var Dn=function(t){if(arguments.length){if(!Ln(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Mn()}if(Xn)return Xn;if(Yn)return Yn;if(Cn)return Cn;throw new Error("unexpected error. Unable to resolve global object.")},Hn=Dn(),Rn=Hn.document&&Hn.document.childNodes,Wn=Int8Array,zn=On,Un=Rn,qn=Wn;var Jn=function(){return"function"==typeof zn||"object"==typeof qn||"function"==typeof Un};var Kn=function(){return/^\s*function\s*([^(]*)/i},Qn=Kn;M(Qn,"REGEXP",Kn());var Zn=vn;var $n=x,te=Qn.REGEXP,ne=function(t){return Zn(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var ee=function(t){var n,e,r;if(("Object"===(e=$n(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=te.exec(r.toString()))return n[1]}return ne(t)?"Buffer":e},re=ee;var ie=ee;var oe=function(t){var n;return null===t?"null":"object"===(n=typeof t)?re(t).toLowerCase():n},ue=function(t){return ie(t).toLowerCase()},ce=Jn()?ue:oe;var le,ae=function(t){return t.constructor&&t.constructor.prototype===t},fe="undefined"==typeof window?void 0:window,pe=p,me=hn,ve=ce,ye=ae,se=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],be=fe;le=function(){var t;if("undefined"===ve(be))return!1;for(t in be)try{-1===me(se,t)&&pe(be,t)&&null!==be[t]&&"object"===ve(be[t])&&ye(be[t])}catch(t){return!0}return!1}();var ge="undefined"!=typeof window,xe=le,de=ae,je=ge;var he=vn,Oe=p,_e=un,we=yn,Pe=sn,Se=function(t){if(!1===je&&!xe)return de(t);try{return de(t)}catch(t){return!1}},Ee=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Te=n,Ie=fn,Ae=function(t){var n,e,r,i,o,u,c;if(i=[],_e(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!Oe(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1===(r="function"==typeof t)&&!he(t))return i;e=we&&r}for(o in t)e&&"prototype"===o||!Oe(t,o)||i.push(String(o));if(Pe)for(n=Se(t),c=0;c<Ee.length;c++)u=Ee[c],n&&"constructor"===u||!Oe(t,u)||i.push(String(u));return i},ke=i?r()?Ie:Te:Ae,Ve=tn;var Ne=function(t){return"object"==typeof t&&null!==t&&!Ve(t)},Be=ce;var Fe=function(t){return"function"===Be(t)},Ge=Object.getPrototypeOf;var Le=function(t){return t.__proto__},Me=x,Xe=Le;var Ye=function(t){var n=Xe(t);return n||null===n?n:"[object Function]"===Me(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Ce=Ge,De=Ye,He=Fe(Object.getPrototypeOf)?Ce:De;var Re=Ne,We=Fe,ze=function(t){return null==t?null:(t=Object(t),He(t))},Ue=p,qe=x,Je=Object.prototype;var Ke=function(t){var n;return!!Re(t)&&(!(n=ze(t))||!Ue(t,"constructor")&&Ue(n,"constructor")&&We(n.constructor)&&"[object Function]"===qe(n.constructor)&&Ue(n,"isPrototypeOf")&&We(n.isPrototypeOf)&&(n===Je||function(t){var n;for(n in t)if(!Ue(t,n))return!1;return!0}(t)))},Qe=ke,Ze=tn,$e=Ke,tr=vn,nr=Bn.isPrimitive,er=p;var rr=function(t,n){var e,r,i,o,u,c,l,a=!0;if(!tr(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!$e(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(er(n,"duplicates")&&(a=n.duplicates,!nr(a)))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(r=(e=Qe(t)).length,u={},a)for(l=0;l<r;l++)o=t[i=e[l]],er(u,o)?(c=u[o],Ze(c)?u[o].push(i):u[o]=[c,i]):u[o]=i;else for(l=0;l<r;l++)u[t[i=e[l]]]=i;return u},ir=rr,or=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var ur=function(){return or.slice()},cr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var lr=F;var ar=function(t,n,e){lr(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})},fr=ar,pr=fr,mr=ke;var vr=function(t,n){var e,r,i;for(e=mr(n),i=0;i<e.length;i++)r=e[i],pr(t,r,n[r]);return t},yr=function(){return cr.slice()},sr=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},br=vr;M(yr,"enum",sr),br(yr,sr());var gr=yr,xr=(0,gr.enum)();var dr=fr,jr=ke;var hr=function(t,n){var e,r,i;for(e=jr(n),i=0;i<e.length;i++)r=e[i],dr(t,r,n[r]);return t},Or=ur,_r=function(){return{bool:xr.bool,int8:xr.int8,uint8:xr.uint8,uint8c:xr.uint8c,int16:xr.int16,uint16:xr.uint16,int32:xr.int32,uint32:xr.uint32,int64:xr.int64,uint64:xr.uint64,float32:xr.float32,float64:xr.float64,complex64:xr.complex64,complex128:xr.complex128,binary:xr.binary,generic:xr.generic,notype:xr.notype,userdefined_type:xr.userdefined_type}},wr=hr;M(Or,"enum",_r),wr(Or,_r());var Pr=ir((0,Or.enum)(),{duplicates:!1});var Sr=function(t){var n=Pr[t];return"string"==typeof n?n:null},Er=(0,gr.enum)();var Tr=Sr,Ir=function(t){var n=Er[t];return"number"==typeof n?n:null};var Ar=ke,kr=p,Vr=function(t){var n=typeof t;return"string"===n?null===Ir(t)?null:t:"number"===n?Tr(t):null},Nr={float64:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"float64",uint16:"float64",uint8:"float64",uint8c:"float64",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},float32:{float64:"float64",float32:"float32",int32:"float64",int16:"float32",int8:"float32",uint32:"float64",uint16:"float32",uint8:"float32",uint8c:"float32",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},int32:{float64:"float64",float32:"float64",int32:"int32",int16:"int32",int8:"int32",uint32:"float64",uint16:"int32",uint8:"int32",uint8c:"int32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},int16:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},int8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int8",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint32:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"uint32",uint16:"uint32",uint8:"uint32",uint8c:"uint32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},uint16:{float64:"float64",float32:"float32",int32:"int32",int16:"int32",int8:"int32",uint32:"uint32",uint16:"uint16",uint8:"uint16",uint8c:"uint16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint8c:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8c",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},generic:{float64:"generic",float32:"generic",int32:"generic",int16:"generic",int8:"generic",uint32:"generic",uint16:"generic",uint8:"generic",uint8c:"generic",complex64:"generic",complex128:"generic",binary:-1,generic:"generic"},binary:{float64:-1,float32:-1,int32:-1,int16:-1,int8:-1,uint32:-1,uint16:-1,uint8:-1,uint8c:-1,complex64:-1,complex128:-1,binary:"binary",generic:-1}};function Br(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=Ar(Nr)).length,l=0;l<n;l++){for(i=t[l],u=Nr[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}var Fr=function(t,n){var e;return 0===arguments.length?Br():(t=Vr(t),kr(Nr,t)&&(e=Nr[t],n=Vr(n),kr(e,n))?e[n]:null)};export{Fr as default};
//# sourceMappingURL=mod.js.map
