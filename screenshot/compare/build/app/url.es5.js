/*! Built with http://stenciljs.com */
App.loadBundle("url.js",["exports"],function(e){window,e.applyPolyfill=function(e,t){var n,r,o,i,a,c,h;o="undefined"!=typeof global?global:void 0!==e?e:"undefined"!=typeof self?self:this,i=function(){try{return!!Symbol.iterator}catch(e){return!1}}(),a=function(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return i&&(t[Symbol.iterator]=function(){return t}),t},c=function(e){return encodeURIComponent(e).replace(/%20/g,"+")},h=function(e){return decodeURIComponent(e).replace(/\+/g," ")},"URLSearchParams"in o&&"a=1"===new URLSearchParams("?a=1").toString()||(n=function(e){if(Object.defineProperty(this,"_entries",{value:{}}),"string"==typeof e){if(""!==e)for(var t,r=(e=e.replace(/^\?/,"")).split("&"),o=0;o<r.length;o++)t=r[o].split("="),this.append(h(t[0]),t.length>1?h(t[1]):"")}else if(e instanceof n){var i=this;e.forEach(function(e,t){i.append(e,t)})}},(r=n.prototype).append=function(e,t){e in this._entries?this._entries[e].push(t.toString()):this._entries[e]=[t.toString()]},r.delete=function(e){delete this._entries[e]},r.get=function(e){return e in this._entries?this._entries[e][0]:null},r.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]},r.has=function(e){return e in this._entries},r.set=function(e,t){this._entries[e]=[t.toString()]},r.forEach=function(e,t){var n;for(var r in this._entries)if(this._entries.hasOwnProperty(r)){n=this._entries[r];for(var o=0;o<n.length;o++)e.call(t,n[o],r,this)}},r.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),a(e)},r.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),a(e)},r.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),a(e)},i&&(r[Symbol.iterator]=r.entries),r.toString=function(){var e=[];return this.forEach(function(t,n){e.push(c(n)+"="+c(t))}),e.join("&")},o.URLSearchParams=n),function(n){if(function(){try{var e=new URL("b","http://a");return e.pathname="c%20d","http://a/c%20d"===e.href&&e.searchParams}catch(e){return!1}}()||function(){var r=n.URL,o=function(n,r){"string"!=typeof n&&(n=String(n));var o=t.implementation.createHTMLDocument("");if(e.doc=o,r){var i=o.createElement("base");i.href=r,o.head.appendChild(i)}var a=o.createElement("a");if(a.href=n,o.body.appendChild(a),a.href=a.href,":"===a.protocol||!/:/.test(a.href))throw new TypeError("Invalid URL");Object.defineProperty(this,"_anchorElement",{value:a})},i=o.prototype;["hash","host","hostname","port","protocol","search"].forEach(function(e){!function(e){Object.defineProperty(i,e,{get:function(){return this._anchorElement[e]},set:function(t){this._anchorElement[e]=t},enumerable:!0})}(e)}),Object.defineProperties(i,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e},enumerable:!0},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:!0},origin:{get:function(){return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(this._anchorElement.port!={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol]&&""!==this._anchorElement.port?":"+this._anchorElement.port:"")},enumerable:!0},password:{get:function(){return""},set:function(e){},enumerable:!0},username:{get:function(){return""},set:function(e){},enumerable:!0},searchParams:{get:function(){var e=new URLSearchParams(this.search),t=this;return["append","delete","set"].forEach(function(n){var r=e[n];e[n]=function(){r.apply(e,arguments),t.search=e.toString()}}),e},enumerable:!0}}),o.createObjectURL=function(e){return r.createObjectURL.apply(r,arguments)},o.revokeObjectURL=function(e){return r.revokeObjectURL.apply(r,arguments)},n.URL=o}(),void 0!==n.location&&!("origin"in n.location)){var r=function(){return n.location.protocol+"//"+n.location.hostname+(n.location.port?":"+n.location.port:"")};try{Object.defineProperty(n.location,"origin",{get:r,enumerable:!0})}catch(e){setInterval(function(){n.location.origin=r()},100)}}}("undefined"!=typeof global?global:void 0!==e?e:"undefined"!=typeof self?self:this)},Object.defineProperty(e,"__esModule",{value:!0})});