webpackJsonp([17],{"0MWh":function(t,e){},"4zC1":function(t,e,r){t.exports=r("kbju")},D4Xb:function(t,e){},EKta:function(t,e,r){"use strict";function n(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function i(t){var e=n(t),r=e[0],i=e[1];return 3*(r+i)/4-i}function s(t,e,r){return 3*(e+r)/4-r}function o(t){for(var e,r=n(t),i=r[0],o=r[1],a=new c(s(t,i,o)),h=0,u=o>0?i-4:i,l=0;u>l;l+=4)e=f[t.charCodeAt(l)]<<18|f[t.charCodeAt(l+1)]<<12|f[t.charCodeAt(l+2)]<<6|f[t.charCodeAt(l+3)],a[h++]=e>>16&255,a[h++]=e>>8&255,a[h++]=255&e;return 2===o&&(e=f[t.charCodeAt(l)]<<2|f[t.charCodeAt(l+1)]>>4,a[h++]=255&e),1===o&&(e=f[t.charCodeAt(l)]<<10|f[t.charCodeAt(l+1)]<<4|f[t.charCodeAt(l+2)]>>2,a[h++]=e>>8&255,a[h++]=255&e),a}function a(t){return l[t>>18&63]+l[t>>12&63]+l[t>>6&63]+l[63&t]}function h(t,e,r){for(var n,i=[],s=e;r>s;s+=3)n=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),i.push(a(n));return i.join("")}function u(t){for(var e,r=t.length,n=r%3,i=[],s=0,o=r-n;o>s;s+=16383)i.push(h(t,s,s+16383>o?o:s+16383));return 1===n?(e=t[r-1],i.push(l[e>>2]+l[e<<4&63]+"==")):2===n&&(e=(t[r-2]<<8)+t[r-1],i.push(l[e>>10]+l[e>>4&63]+l[e<<2&63]+"=")),i.join("")}e.byteLength=i,e.toByteArray=o,e.fromByteArray=u;for(var l=[],f=[],c="undefined"!=typeof Uint8Array?Uint8Array:Array,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",g=0,d=p.length;d>g;++g)l[g]=p[g],f[p.charCodeAt(g)]=g;f["-".charCodeAt(0)]=62,f["_".charCodeAt(0)]=63},EuP9:function(t,e,r){"use strict";(function(t){function n(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(t,e){if(n()<e)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=s.prototype):(null===t&&(t=new s(e)),t.length=e),t}function s(t,e,r){if(!(s.TYPED_ARRAY_SUPPORT||this instanceof s))return new s(t,e,r);if("number"==typeof t){if("string"==typeof e)throw Error("If encoding is specified then the first argument must be a string");return u(this,t)}return o(this,t,e,r)}function o(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?c(t,e,r,n):"string"==typeof e?l(t,e,r):p(t,e)}function a(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(0>t)throw new RangeError('"size" argument must not be negative')}function h(t,e,r,n){return a(e),e>0&&void 0!==r?"string"==typeof n?i(t,e).fill(r,n):i(t,e).fill(r):i(t,e)}function u(t,e){if(a(e),t=i(t,0>e?0:0|g(e)),!s.TYPED_ARRAY_SUPPORT)for(var r=0;e>r;++r)t[r]=0;return t}function l(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!s.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|y(e,r);t=i(t,n);var o=t.write(e,r);return o!==n&&(t=t.slice(0,o)),t}function f(t,e){var r=0>e.length?0:0|g(e.length);t=i(t,r);for(var n=0;r>n;n+=1)t[n]=255&e[n];return t}function c(t,e,r,n){if(0>r||r>e.byteLength)throw new RangeError("'offset' is out of bounds");if(r+(n||0)>e.byteLength)throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),s.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=s.prototype):t=f(t,e),t}function p(t,e){if(s.isBuffer(e)){var r=0|g(e.length);return t=i(t,r),0===t.length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||J(e.length)?i(t,0):f(t,e);if("Buffer"===e.type&&G(e.data))return f(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function g(t){if(t>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|t}function d(t){return+t!=t&&(t=0),s.alloc(+t)}function y(t,e){if(s.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return W(t).length;default:if(n)return q(t).length;e=(""+e).toLowerCase(),n=!0}}function m(t,e,r){var n=!1;if((void 0===e||0>e)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),0>=r)return"";if(r>>>=0,(e>>>=0)>=r)return"";for(t||(t="utf8");;)switch(t){case"hex":return x(this,e,r);case"utf8":case"utf-8":return S(this,e,r);case"ascii":return M(this,e,r);case"latin1":case"binary":return U(this,e,r);case"base64":return B(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function b(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:-2147483648>r&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),0>r&&(r=t.length+r),t.length>r){if(0>r){if(!i)return-1;r=0}}else{if(i)return-1;r=t.length-1}if("string"==typeof e&&(e=s.from(e,n)),s.isBuffer(e))return 0===e.length?-1:v(t,e,r,n,i);if("number"==typeof e)return e&=255,s.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):v(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function v(t,e,r,n,i){function s(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}var o=1,a=t.length,h=e.length;if(void 0!==n&&("ucs2"===(n=(n+"").toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(2>t.length||2>e.length)return-1;o=2,a/=2,h/=2,r/=2}var u;if(i){var l=-1;for(u=r;a>u;u++)if(s(t,u)===s(e,-1===l?0:u-l)){if(-1===l&&(l=u),u-l+1===h)return l*o}else-1!==l&&(u-=u-l),l=-1}else for(r+h>a&&(r=a-h),u=r;u>=0;u--){for(var f=!0,c=0;h>c;c++)if(s(t,u+c)!==s(e,c)){f=!1;break}if(f)return u}return-1}function E(t,e,r,n){r=+r||0;var i=t.length-r;n?(n=+n)>i&&(n=i):n=i;var s=e.length;if(s%2!=0)throw new TypeError("Invalid hex string");n>s/2&&(n=s/2);for(var o=0;n>o;++o){var a=parseInt(e.substr(2*o,2),16);if(isNaN(a))return o;t[r+o]=a}return o}function A(t,e,r,n){return X(q(e,t.length-r),t,r,n)}function _(t,e,r,n){return X(H(e),t,r,n)}function P(t,e,r,n){return _(t,e,r,n)}function R(t,e,r,n){return X(W(e),t,r,n)}function T(t,e,r,n){return X($(e,t.length-r),t,r,n)}function B(t,e,r){return K.fromByteArray(0===e&&r===t.length?t:t.slice(e,r))}function S(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;r>i;){var s=t[i],o=null,a=s>239?4:s>223?3:s>191?2:1;if(r>=i+a){var h,u,l,f;switch(a){case 1:128>s&&(o=s);break;case 2:h=t[i+1],128==(192&h)&&(f=(31&s)<<6|63&h)>127&&(o=f);break;case 3:h=t[i+1],u=t[i+2],128==(192&h)&&128==(192&u)&&(f=(15&s)<<12|(63&h)<<6|63&u)>2047&&(55296>f||f>57343)&&(o=f);break;case 4:h=t[i+1],u=t[i+2],l=t[i+3],128==(192&h)&&128==(192&u)&&128==(192&l)&&(f=(15&s)<<18|(63&h)<<12|(63&u)<<6|63&l)>65535&&1114112>f&&(o=f)}}null===o?(o=65533,a=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=a}return C(n)}function C(t){var e=t.length;if(Q>=e)return String.fromCharCode.apply(String,t);for(var r="",n=0;e>n;)r+=String.fromCharCode.apply(String,t.slice(n,n+=Q));return r}function M(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;r>i;++i)n+=String.fromCharCode(127&t[i]);return n}function U(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;r>i;++i)n+=String.fromCharCode(t[i]);return n}function x(t,e,r){var n=t.length;e&&e>=0||(e=0),(!r||0>r||r>n)&&(r=n);for(var i="",s=e;r>s;++s)i+=j(t[s]);return i}function I(t,e,r){for(var n=t.slice(e,r),i="",s=0;n.length>s;s+=2)i+=String.fromCharCode(n[s]+256*n[s+1]);return i}function L(t,e,r){if(t%1!=0||0>t)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function Y(t,e,r,n,i,o){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||o>e)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function k(t,e,r,n){0>e&&(e=65535+e+1);for(var i=0,s=Math.min(t.length-r,2);s>i;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function F(t,e,r,n){0>e&&(e=4294967295+e+1);for(var i=0,s=Math.min(t.length-r,4);s>i;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function O(t,e,r,n,i,s){if(r+n>t.length)throw new RangeError("Index out of range");if(0>r)throw new RangeError("Index out of range")}function D(t,e,r,n,i){return i||O(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),Z.write(t,e,r,n,23,4),r+4}function N(t,e,r,n,i){return i||O(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),Z.write(t,e,r,n,52,8),r+8}function z(t){if(t=V(t).replace(tt,""),2>t.length)return"";for(;t.length%4!=0;)t+="=";return t}function V(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function j(t){return 16>t?"0"+t.toString(16):t.toString(16)}function q(t,e){e=e||1/0;for(var r,n=t.length,i=null,s=[],o=0;n>o;++o){if((r=t.charCodeAt(o))>55295&&57344>r){if(!i){if(r>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===n){(e-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(56320>r){(e-=3)>-1&&s.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,128>r){if(0>(e-=1))break;s.push(r)}else if(2048>r){if(0>(e-=2))break;s.push(r>>6|192,63&r|128)}else if(65536>r){if(0>(e-=3))break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(r>=1114112)throw Error("Invalid code point");if(0>(e-=4))break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return s}function H(t){for(var e=[],r=0;t.length>r;++r)e.push(255&t.charCodeAt(r));return e}function $(t,e){for(var r,n,i,s=[],o=0;t.length>o&&0<=(e-=2);++o)r=t.charCodeAt(o),n=r>>8,i=r%256,s.push(i),s.push(n);return s}function W(t){return K.toByteArray(z(t))}function X(t,e,r,n){for(var i=0;n>i&&(i+r<e.length&&i<t.length);++i)e[i+r]=t[i];return i}function J(t){return t!==t}var K=r("EKta"),Z=r("ujcs"),G=r("sOR5");e.Buffer=s,e.SlowBuffer=d,e.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=n(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,e,r){return o(null,t,e,r)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,e,r){return h(null,t,e,r)},s.allocUnsafe=function(t){return u(null,t)},s.allocUnsafeSlow=function(t){return u(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,e){if(!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);o>i;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return n>r?-1:r>n?1:0},s.isEncoding=function(t){switch((t+"").toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!G(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var r;if(void 0===e)for(e=0,r=0;t.length>r;++r)e+=t[r].length;var n=s.allocUnsafe(e),i=0;for(r=0;t.length>r;++r){var o=t[r];if(!s.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},s.byteLength=y,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;t>e;e+=2)w(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;t>e;e+=4)w(this,e,e+3),w(this,e+1,e+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;t>e;e+=8)w(this,e,e+7),w(this,e+1,e+6),w(this,e+2,e+5),w(this,e+3,e+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?S(this,0,t):m.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,e,r,n,i){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),0>e||r>t.length||0>n||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var o=i-n,a=r-e,h=Math.min(o,a),u=this.slice(n,i),l=t.slice(e,r),f=0;h>f;++f)if(u[f]!==l[f]){o=u[f],a=l[f];break}return a>o?-1:o>a?1:0},s.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},s.prototype.indexOf=function(t,e,r){return b(this,t,e,r,!0)},s.prototype.lastIndexOf=function(t,e,r){return b(this,t,e,r,!1)},s.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(0>r||0>e)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return E(this,t,e,r);case"utf8":case"utf-8":return A(this,t,e,r);case"ascii":return _(this,t,e,r);case"latin1":case"binary":return P(this,t,e,r);case"base64":return R(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,t,e,r);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Q=4096;s.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,0>t?0>(t+=r)&&(t=0):t>r&&(t=r),0>e?0>(e+=r)&&(e=0):e>r&&(e=r),t>e&&(e=t);var n;if(s.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=s.prototype;else{var i=e-t;n=new s(i,void 0);for(var o=0;i>o;++o)n[o]=this[o+t]}return n},s.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||L(t,e,this.length);for(var n=this[t],i=1,s=0;++s<e&&(i*=256);)n+=this[t+s]*i;return n},s.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||L(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},s.prototype.readUInt8=function(t,e){return e||L(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return e||L(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return e||L(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return e||L(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return e||L(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||L(t,e,this.length);for(var n=this[t],i=1,s=0;++s<e&&(i*=256);)n+=this[t+s]*i;return i*=128,i>n||(n-=Math.pow(2,8*e)),n},s.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||L(t,e,this.length);for(var n=e,i=1,s=this[t+--n];n>0&&(i*=256);)s+=this[t+--n]*i;return i*=128,i>s||(s-=Math.pow(2,8*e)),s},s.prototype.readInt8=function(t,e){return e||L(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},s.prototype.readInt16LE=function(t,e){e||L(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(t,e){e||L(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(t,e){return e||L(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return e||L(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return e||L(t,4,this.length),Z.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return e||L(t,4,this.length),Z.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return e||L(t,8,this.length),Z.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return e||L(t,8,this.length),Z.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){Y(this,t,e,r,Math.pow(2,8*r)-1,0)}var i=1,s=0;for(this[e]=255&t;++s<r&&(i*=256);)this[e+s]=t/i&255;return e+r},s.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){Y(this,t,e,r,Math.pow(2,8*r)-1,0)}var i=r-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+r},s.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):k(this,t,e,!0),e+2},s.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):k(this,t,e,!1),e+2},s.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):F(this,t,e,!0),e+4},s.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):F(this,t,e,!1),e+4},s.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);Y(this,t,e,r,i-1,-i)}var s=0,o=1,a=0;for(this[e]=255&t;++s<r&&(o*=256);)0>t&&0===a&&0!==this[e+s-1]&&(a=1),this[e+s]=(t/o>>0)-a&255;return e+r},s.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);Y(this,t,e,r,i-1,-i)}var s=r-1,o=1,a=0;for(this[e+s]=255&t;--s>=0&&(o*=256);)0>t&&0===a&&0!==this[e+s+1]&&(a=1),this[e+s]=(t/o>>0)-a&255;return e+r},s.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),0>t&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):k(this,t,e,!0),e+2},s.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):k(this,t,e,!1),e+2},s.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):F(this,t,e,!0),e+4},s.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,4,2147483647,-2147483648),0>t&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):F(this,t,e,!1),e+4},s.prototype.writeFloatLE=function(t,e,r){return D(this,t,e,!0,r)},s.prototype.writeFloatBE=function(t,e,r){return D(this,t,e,!1,r)},s.prototype.writeDoubleLE=function(t,e,r){return N(this,t,e,!0,r)},s.prototype.writeDoubleBE=function(t,e,r){return N(this,t,e,!1,r)},s.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),t.length>e||(e=t.length),e||(e=0),n>0&&r>n&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(0>e)throw new RangeError("targetStart out of bounds");if(0>r||r>=this.length)throw new RangeError("sourceStart out of bounds");if(0>n)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),n-r>t.length-e&&(n=t.length-e+r);var i,o=n-r;if(this===t&&e>r&&n>e)for(i=o-1;i>=0;--i)t[i+e]=this[i+r];else if(1e3>o||!s.TYPED_ARRAY_SUPPORT)for(i=0;o>i;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+o),e);return o},s.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0);256>i&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!s.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(0>e||e>this.length||r>this.length)throw new RangeError("Out of range index");if(e>=r)return this;e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0);var o;if("number"==typeof t)for(o=e;r>o;++o)this[o]=t;else{var a=s.isBuffer(t)?t:q(""+new s(t,n)),h=a.length;for(o=0;r-e>o;++o)this[o+e]=a[o%h]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(e,r("DuR2"))},izBy:function(t,e,r){"use strict";function n(t){r("D4Xb")}function i(t){r("0MWh")}Object.defineProperty(e,"__esModule",{value:!0});var s=r("4zC1"),o={name:"modal-upload",props:{text:String,title:String,files:FileList},data:function(){return{changeableTitle:"",changeableMessage:"",hash:void 0,filename:void 0,bar:void 0,barValue:0,multipleFilesAllowed:!1,showProgressbar:!0,image:{show:!1,path:void 0},cancel:{text:"Cancel",backbround:"#3f87f5",border:"#3f87f5"},currentStep:0,steps:[{step:0,title:"Reading sample...",message:"Reading requested file from local device. </br> Please do not close this window until process is complete.",value:0},{step:1,title:"Calculating signature",message:"Calculating file unique signature. Please wait",value:10},{step:2,title:"Processing file...",message:"Checking status of file </br> <b>"+this.filename+"</b> with hash </br> <p class='hash centered'></b>"+this.hash+"</b></p>",value:20},{step:3,title:"Uploading",message:"Uploading <b>"+this.filename+"</b>. </br> Please do not close this window until process is complete.",value:20},{step:4,title:"File uploaded",message:"Your file has been submitted for analysis",value:20}],maxAllowedSize:5242880}},watch:{barValue:function(t){log("new value: "+t),this.bar&&(this.bar.style.width=this.barValue+"%",this.bar.innerHTML=1*this.barValue+"%")}},methods:{btnEvent:function(){4==this.currentStep?(log("showing report of sample: "+this.sample),this.$router.push({name:context.vp("route_name_report"),params:{hash:this.hash}}),this.$emit("close")):this.$emit("close")},step:function(t){if(this.currentStep=t,t>=0&&this.steps.length>t){var e=this.steps[t];this.changeableTitle=e.title,3==t?this.changeableMessage="Checking status of requested file in our global database. <br> File: <b>"+this.filename+"</b> </br> Signature: <span class='hash'></b>"+this.hash+"</b></span> <br> Please wait...":5==t?this.changeableMessage="File: <b>"+this.filename+"</b> </br> Hash: <span class='hash'></b>"+this.hash+"</b></span> <br> Please do not close this window until process is complete.":6==t?(this.changeableMessage="File: <b>"+this.filename+"</b> </br> Hash: <span class='hash'></b>"+this.hash+"</b></span> <br> Your report is available at <a href='//droidefense.com/report/"+this.hash+"' target='blank'>droidefense.com/report<a/>",this.cancel.text="View report"):this.changeableMessage=e.message,this.onBarUpdate(e.value)}},onBarUpdate:function(t){100>this.barValue&&(this.barValue+=t)},checkHash:function(t,e){var r=this;this.step(3),axios.get(window.API_ENDPOINT+"/sample/hash/"+e).then(function(t){r.showAlreadySubmittedMessage()}).catch(function(e){var n=e&&e.response&&e.response.data?e.response.data:void 0;n&&"not found"==n.error&&r.uploadSample(t)}).then(function(){})},showAlreadySubmittedMessage:function(){this.step(4),this.showProgressbar=!1,this.changeableTitle="File already analysed",this.changeableMessage="    This file was last analysed by <b>droidefense platform</b> on 2018-11-08 02:03:11 UTC (1 week, 1 day ago)<br>    It was first analysed by VirusTotal on 2011-03-04 05:40:39 UTC.     You can take a look at the last analysis results",this.changeableMessage="    This file was already analysed by <b>droidefense platform</b>. You can take a look at the last analysis results.",this.image.show=!0,this.image.path="/static/images/computer.png",this.cancel.text="View results"},showFileTooBigMessage:function(){this.showProgressbar=!1,this.changeableTitle="File scan request cancelled",this.changeableMessage="Your scan request was automatically cancelled because the sample file is too big.    We are improving our upload mecanism. In the meantime, you can support us by <a href='/donate' target='_blank'><b>donations</b></a> or becoming a <a href='/premium/members' target='_blank'><b>Premium member</b></a>",this.image.show=!0,this.image.path="/static/images/binary.png",this.cancel.text="Accept"},showEmptyFileMessage:function(){this.showProgressbar=!1,this.changeableTitle="File scan request cancelled",this.changeableMessage="Your scan request was automatically cancelled because you select an empty file. Make sure you select the right file for future scans.",this.image.show=!0,this.image.path="/static/images/empty.png",this.cancel.text="Accept",document.getElementById("cancel").classList.add("empty-btn")},showNotSupportedFiletypeMessage:function(){this.showProgressbar=!1,this.changeableTitle="File scan request cancelled",this.changeableMessage="Your scan request was automatically cancelled because you select an invalid file. We currently only support <b>Android</b> application files.",this.image.show=!0,this.image.path="/static/images/android.png",this.cancel.text="Accept",document.getElementById("cancel").classList.add("android-btn")},showLocalNetworkErrorMessage:function(){this.showProgressbar=!1,this.changeableTitle="Network error",this.changeableMessage="We are pretty sure you have some kind of connectivity issues right now. Please <b>check your network</b> and try again.",this.image.show=!1,this.cancel.text="Accept",document.getElementById("cancel").classList.add("alert-btn")},showRemoteNetworkErrorMessage:function(){this.showProgressbar=!1,this.changeableTitle="Remote network error",this.changeableMessage="We are having connectivity issues right now. Please check your <b>firewall</b> and network access to make sure they are not <b>blocking connections</b> to us and try again. If the problem still occurs, contact us.",this.image.show=!1,this.cancel.text="Accept",document.getElementById("cancel").classList.add("alert-btn")},processMultipleFiles:function(t){for(var e=new FormData,r=0;t.length>r;r++){e.append("files[]",t[r])}},processSingleFile:function(t){var e=this;this.filename=t.name;var r=t.type,n=t.size;if(0==n)this.showEmptyFileMessage();else if(n>this.maxAllowedSize)this.showFileTooBigMessage();else if("application/zip"!=r&&"application/vnd.android.package-archive"!=r)this.showNotSupportedFiletypeMessage();else{var i=new FileReader;i.onload=function(r){var n=r.target.result;e.step(2);var i=s(n);return e.hash=i,e.checkHash(t,i),i},i.readAsBinaryString(t)}},startUpload:function(){var t=this;this.step(0);var e=window.location.protocol;axios.get(e+"//api.ipify.org?format=json").then(function(e){axios.get(API_ENDPOINT).then(function(e){log(e),t.uploadBegin()}).catch(function(e){e.response||(error("droidefense api connectivity error"),t.showRemoteNetworkErrorMessage())})}).catch(function(e){e.response||(error("general connectivity error"),t.showLocalNetworkErrorMessage())})},uploadBegin:function(){this.hash=void 0,this.filename=void 0,this.barValue=0,this.showProgressbar=!0,this.step(1),0==this.files.length||(this.multipleFilesAllowed?this.processMultipleFiles(this.files):this.processSingleFile(this.files[0]))},uploadSample:function(t){this.step(5);var e=new XMLHttpRequest,r=new FormData;r.append("file",t,t.name,t.size,t.type),e.addEventListener("load",function(t){log("Yeah! Data sent and response loaded.")}),e.addEventListener("progress",this.updateProgress),e.addEventListener("load",this.updateFinished),e.addEventListener("error",function(t){error("Oops! Something went wrong.")}),e.open("POST",window.API_ENDPOINT+"/sample/upload"),e.send(r)},updateProgress:function(t){if(t.lengthComputable){this.barValue=t.loaded/t.total*100}},updateFinished:function(t){this.step(6)}},created:function(){this.changeableTitle=this.title,this.changeableMessage=this.text},mounted:function(){this.bar=document.getElementById("myBar"),this.onBarUpdate(0),this.startUpload()},components:{}},a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dialog"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("h2",[t._v(t._s(t.changeableTitle))]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.image.show,expression:"image.show"}],staticClass:"centered"},[r("img",{staticClass:"image",attrs:{src:t.image.path}})]),t._v(" "),r("p",{staticStyle:{"text-align":"left"},domProps:{innerHTML:t._s(t.changeableMessage)}})])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showProgressbar,expression:"showProgressbar"}],attrs:{id:"myProgress"}},[r("div",{attrs:{id:"myBar"}},[t._v("0%")])]),t._v(" "),r("div",{staticClass:"row row-right"},[r("div",{staticClass:"col-lg-4 mt-3 mb-4 align-right"},[r("button",{staticClass:"btn btn-custom w-100",attrs:{id:"cancel"},on:{click:t.btnEvent}},[t._v(t._s(t.cancel.text))])])])])},h=[],u={render:a,staticRenderFns:h},l=u,f=r("VU/8"),c=n,p=f(o,l,!1,c,null,null),g=p.exports,d={name:"hero",props:{mode:String},data:function(){return{title:"droidefense",maintitle:"Advance Android Malware Analysis Platform",mainsubtitle:"An opensource Android malware scanner and privacy auditor service for everyone",disclaimerText:"Clicking on <b>Upload</b>, you accept our Terms of Service and allow <b>Droidefense</b> to share this file with the security community. See our privacy policy for more details",uploadBtnText:"Upload",uploadBtnVisible:!1,input:void 0}},methods:{uploadBtn:function(t){t&&t.preventDefault();var e=document.querySelector("[type=file]").files;this.$modal.show(g,{title:"Uploading sample",text:"This text is passed as a property",files:e},{height:"auto"},{"before-close":function(t){log("file upload aborted")}})},startFileInput:function(){var t=this;!function(e,r,n){var i=e.querySelectorAll(".inputfile");Array.prototype.forEach.call(i,function(e){var r=e.nextElementSibling,n=r.innerHTML;e.addEventListener("change",function(e){var i="";i=this.files&&this.files.length>1?(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):e.target.value.split("\\").pop(),i?r.querySelector("span").innerHTML=i:r.innerHTML=n,t.uploadBtnVisible=!0}),e.addEventListener("focus",function(){e.classList.add("has-focus")}),e.addEventListener("blur",function(){e.classList.remove("has-focus")})})}(document,window)},checkCompatibility:function(){window.File&&window.FileReader&&window.FileList&&window.Blob||this.$modal.show("dialog",{title:"Compatibility Issues",text:"The File APIs are not fully supported in this browser. You might experience file uploading issues, so we recommend you to upgrade your browser to latest version.",buttons:[{title:"Close"}]})},setBackground:function(){if("soon"==this.mode){var t=document.getElementById("bg-overlay").classList;t.remove("bg-world"),t.add("bg-fingerprint")}else if("world"==this.mode){var e=document.getElementById("bg-overlay").classList;e.add("bg-world"),e.remove("bg-fingerprint")}}},created:function(){},mounted:function(){this.startFileInput(),this.checkCompatibility(),this.setBackground()}},y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"back-slide",attrs:{id:"home"}},[r("div",{staticClass:"bg-overlay",attrs:{id:"bg-overlay"}}),t._v(" "),r("div",{staticClass:"home-center"},[r("div",{staticClass:"home-desc-center"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-10"},[r("div",{staticClass:"text-center"},[r("h1",{staticClass:"text-white home-title mb-0"},[t._v(t._s(t.maintitle))]),t._v(" "),r("p",{staticClass:"text-white home-subtitle-center home-subtitle mt-4 mb-0 mx-auto"},[t._v(t._s(t.mainsubtitle))]),t._v(" "),r("div",{staticClass:"text-center mt-4"},[r("form",{staticClass:"centered",attrs:{enctype:"multipart/form-data"}},[r("input",{staticClass:"inputfile inputfile-6",attrs:{name:"sample[]",id:"sample","data-multiple-caption":"{count} files selected",multiple:"false",type:"file"}}),t._v(" "),r("label",{attrs:{for:"sample"}},[r("span"),t._v(" "),r("strong",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",viewBox:"0 0 20 17"}},[r("path",{attrs:{d:"M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"}})]),t._v(" Choose a file…")])]),t._v(" "),r("br"),t._v(" "),t.uploadBtnVisible?r("div",[r("p",{staticClass:"centered disclaimer",domProps:{innerHTML:t._s(t.disclaimerText)}}),t._v(" "),r("button",{staticClass:"btn btn-custom",staticStyle:{"font-size":"16px"},attrs:{type:"submit"},on:{click:function(e){t.uploadBtn(e)}}},[t._v(t._s(t.uploadBtnText)+"\n                                            ")])]):t._e()])])])])])])])]),t._v(" "),r("v-dialog")],1)},m=[],w={render:y,staticRenderFns:m},b=w,v=r("VU/8"),E=i,A=v(d,b,!1,E,null,null);e.default=A.exports},kbju:function(t,e,r){(function(e){function r(t,r){var o,a,h,u,l,f,c,p,g,d,y,m,w,b,v,E,A,_,P,R,T,B=1779033703,S=3144134277,C=1013904242,M=2773480762,U=1359893119,x=2600822924,I=528734635,L=1541459225,Y=0,k=t.length,F=(k+9)%64,O=F?64-F:F,D=k+9+O,N=e.isBuffer(t),z=N?e.allocUnsafe(D-k):Array(D);if(!N)for(Y=0;k>Y;Y++)z[Y]=t.charCodeAt(Y);for(z[Y++]=128,P=0;O>P;P++)z[Y++]=0;for(var V=8*k,j=V.toString(16),q=i.substr(j.length)+j,H=q.split("");H.length>0;){var $=H.shift()+H.shift();z[Y++]=parseInt($,16)}for(N&&(z=e.concat([t,z],D)),Y=0;D>Y;Y+=64){for(_=Array(64),R=0;16>R;R++)E=4*R,A=Y+E,_[R]=16777216*z[A]+65536*z[A+1]+256*z[A+2]+z[A+3];for(R=16;64>R;R++)E=_[R-15],o=(E>>>7|E<<25)^(E>>>18|E<<14)^E>>>3,E=_[R-2],a=(E>>>17|E<<15)^(E>>>19|E<<13)^E>>>10,_[R]=_[R-16]+o+_[R-7]+a>>>0;for(c=B,p=S,g=C,d=M,y=U,m=x,w=I,b=L,v=0;64>v;v++)a=(y>>>6|y<<26)^(y>>>11|y<<21)^(y>>>25|y<<7),h=y&m^~y&w,l=b+a+h+s[v]+_[v]>>>0,o=(c>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),u=c&p^c&g^p&g,f=o+u>>>0,b=w,w=m,m=y,y=d+l>>>0,d=g,g=p,p=c,c=l+f>>>0;B=B+c>>>0,S=S+p>>>0,C=C+g>>>0,M=M+d>>>0,U=U+y>>>0,x=x+m>>>0,I=I+w>>>0,L=L+b>>>0}T=[B,S,C,M,U,x,I,L];var W=T.map(function(t){var e=t.toString(16),r=e.length;return 8>r?n.substr(r)+e:e}),X=W.join("");return"function"==typeof r?r(X):X}var n="00000000",i="0000000000000000",s=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];t.exports=r}).call(e,r("EuP9").Buffer)},sOR5:function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},ujcs:function(t,e){e.read=function(t,e,r,n,i){var s,o,a=8*i-n-1,h=(1<<a)-1,u=h>>1,l=-7,f=r?i-1:0,c=r?-1:1,p=t[e+f];for(f+=c,s=p&(1<<-l)-1,p>>=-l,l+=a;l>0;s=256*s+t[e+f],f+=c,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=n;l>0;o=256*o+t[e+f],f+=c,l-=8);if(0===s)s=1-u;else{if(s===h)return o?NaN:1/0*(p?-1:1);o+=Math.pow(2,n),s-=u}return(p?-1:1)*o*Math.pow(2,s-n)},e.write=function(t,e,r,n,i,s){var o,a,h,u=8*s-i-1,l=(1<<u)-1,f=l>>1,c=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:s-1,g=n?1:-1,d=0>e||0===e&&0>1/e?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=l):(o=Math.floor(Math.log(e)/Math.LN2),1>e*(h=Math.pow(2,-o))&&(o--,h*=2),e+=1>o+f?c*Math.pow(2,1-f):c/h,2>e*h||(o++,h/=2),l>o+f?1>o+f?(a=e*Math.pow(2,f-1)*Math.pow(2,i),o=0):(a=(e*h-1)*Math.pow(2,i),o+=f):(a=0,o=l));i>=8;t[r+p]=255&a,p+=g,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;t[r+p]=255&o,p+=g,o/=256,u-=8);t[r+p-g]|=128*d}}});