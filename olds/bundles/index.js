!function(t){var o={};function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=o,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)n.d(e,r,function(o){return t[o]}.bind(null,r));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=0)}([function(t,o,n){n(1);console.log("test")},function(t,o){var n,e=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)});console.log("Lalekou Giray Tchad"),console.log("------------------------"),console.log(7,!1,!0),console.log("------------------------");function r(t,o){return t+o}console.log(3.15);var u=function(t,o){return t*o};function i(t,o){void 0===o&&(o=null),o?console.log(t,o):console.log(t)}i(r(4,5)),i(u(4,5)),i(r(4,5),u(4,5));var c={attribut1:5,attribut2:"Lalekou"};console.log(c),console.log(c.attribut1,c.attribut2);var l=function(){function t(t){this.attr1=t}return t.prototype.test=function(){console.log("Bonjour ",this.attr1)},t}(),f=function(t){function o(){var o=t.call(this,5)||this;return console.log("creation"),o}return e(o,t),o.prototype.test=function(){console.log(this.attr1)},o}(l),a=function(){function t(){}return t.prototype.somme=function(t,o){return t+o},t.prototype.modulo=function(t,o){return t%o},t}();new l(1).test(),(new f).test();var s=new a;console.log(s.modulo(6,2));var p=new(function(){function t(){}return Object.defineProperty(t.prototype,"attr1",{get:function(){return this._attr1},set:function(t){this._attr1=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attr2",{get:function(){return this._attr2},set:function(t){this._attr2=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attr3",{get:function(){return this._attr3},set:function(t){this._attr3=t},enumerable:!1,configurable:!0}),t}());console.log(p.attr1),p.attr1=4;!function(){function t(){}t.prototype.test=function(){console.log("lalekou")}}()}]);