!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("vendor.ng.core"),require("vendor.ng.common"),require("vendor.rxjs"),require("vendor.rxjs.operators")):"function"==typeof define&&define.amd?define(["vendor.ng.core","vendor.ng.common","vendor.rxjs","vendor.rxjs.operators"],n):"object"==typeof exports?exports.plugin=n(require("vendor.ng.core"),require("vendor.ng.common"),require("vendor.rxjs"),require("vendor.rxjs.operators")):e.plugin=n(e["vendor.ng.core"],e["vendor.ng.common"],e["vendor.rxjs"],e["vendor.rxjs.operators"])}(window,(function(e,n,t,o){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(n,t){n.exports=e},function(e,t){e.exports=n},function(e,n){e.exports=t},function(e,n){e.exports=o},function(e,n,t){"use strict";t.r(n),t.d(n,"PluginModule",(function(){return a}));var o=t(0),r=t(1),c=t(2),i=t(3);class u{constructor(){this.counter$=Object(c.interval)(1e3).pipe(Object(i.shareReplay)({bufferSize:1,refCount:!1}))}}u.ɵfac=function(e){return new(e||u)},u.ɵprov=o["ɵɵdefineInjectable"]({token:u,factory:u.ɵfac,providedIn:"root"});class s{constructor(e){this.common=e}}function f(e,n){1&e&&(o["ɵɵelementContainerStart"](0),o["ɵɵelement"](1,"common"),o["ɵɵprojection"](2),o["ɵɵelementContainerEnd"]())}s.ɵfac=function(e){return new(e||s)(o["ɵɵdirectiveInject"](u))},s.ɵcmp=o["ɵɵdefineComponent"]({type:s,selectors:[["common"]],decls:3,vars:3,template:function(e,n){1&e&&(o["ɵɵelementStart"](0,"p"),o["ɵɵtext"](1),o["ɵɵpipe"](2,"async"),o["ɵɵelementEnd"]()),2&e&&(o["ɵɵadvance"](1),o["ɵɵtextInterpolate1"]("counter: ",o["ɵɵpipeBind1"](2,1,n.common.counter$),""))},pipes:[r.AsyncPipe],styles:["p[_ngcontent-%COMP%] {\n    color: fuchsia;\n}"],changeDetection:0});class l{}l.ɵfac=function(e){return new(e||l)},l.ɵcmp=o["ɵɵdefineComponent"]({type:l,selectors:[["mod1"]],ngContentSelectors:["*"],decls:6,vars:1,consts:[[3,"click"],["btn",""],[4,"ngIf"]],template:function(e,n){if(1&e){const e=o["ɵɵgetCurrentView"]();o["ɵɵprojectionDef"](),o["ɵɵelementStart"](0,"h1"),o["ɵɵtext"](1,"MOD 1"),o["ɵɵelementEnd"](),o["ɵɵelementStart"](2,"button",0,1),o["ɵɵlistener"]("click",(function(){o["ɵɵrestoreView"](e);const n=o["ɵɵreference"](3);return n.show=!n.show})),o["ɵɵtext"](4,"action"),o["ɵɵelementEnd"](),o["ɵɵtemplate"](5,f,3,0,"ng-container",2)}if(2&e){const e=o["ɵɵreference"](3);o["ɵɵadvance"](5),o["ɵɵproperty"]("ngIf",e.show)}},directives:[r.NgIf,s],styles:["h1[_ngcontent-%COMP%] {\n    color: plum;\n}"],changeDetection:0});class p{}p.ɵfac=function(e){return new(e||p)},p.ɵcmp=o["ɵɵdefineComponent"]({type:p,selectors:[["mod2"]],ngContentSelectors:["*"],decls:4,vars:0,template:function(e,n){1&e&&(o["ɵɵprojectionDef"](),o["ɵɵelementStart"](0,"h1"),o["ɵɵtext"](1,"MOD 2"),o["ɵɵelementEnd"](),o["ɵɵelement"](2,"common"),o["ɵɵprojection"](3))},directives:[s],styles:["h1 {\n    color: tomato;\n}"],encapsulation:2,changeDetection:0});class a{constructor(e){this.cfr=e}getComponentFactory(){return this.cfr.resolveComponentFactory(l)}getComponentFactory2(){return this.cfr.resolveComponentFactory(p)}}a.ɵmod=o["ɵɵdefineNgModule"]({type:a}),a.ɵinj=o["ɵɵdefineInjector"]({factory:function(e){return new(e||a)(o["ɵɵinject"](o.ComponentFactoryResolver))}})}])}));