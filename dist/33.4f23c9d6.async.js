webpackJsonp([33],{685:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(13),u=n(r),s=a(117),i=n(s),c=a(282);t.default={namespace:"register",state:{status:void 0},effects:{submit:i.default.mark(function e(t,a){var n,r=a.call,u=a.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeSubmitting",payload:!0});case 2:return e.next=4,r(c.fakeRegister);case 4:return n=e.sent,e.next=7,u({type:"registerHandle",payload:n});case 7:return e.next=9,u({type:"changeSubmitting",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{registerHandle:function(e,t){var a=t.payload;return(0,u.default)({},e,{status:a.status})},changeSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{submitting:a})}}},e.exports=t.default}});