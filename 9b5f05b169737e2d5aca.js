"use strict";(globalThis.webpackChunkreact_data_grid=globalThis.webpackChunkreact_data_grid||[]).push([[12],{66566:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(67294),o=a(30621),r=a(85893);const i=[{key:"id",name:"ID",width:80},{key:"task",name:"Title"},{key:"priority",name:"Priority"},{key:"issueType",name:"Issue Type"},{key:"complete",name:"% Complete"},{key:"startDate",name:"Start Date"},{key:"completeDate",name:"Expected Complete",width:200}];function s(e,t){return new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())).toLocaleDateString()}function l(){const e=[];for(let t=1;t<500;t++)e.push({id:t,task:`Task ${t}`,complete:Math.min(100,Math.round(110*Math.random())),priority:["Critical","High","Medium","Low"][Math.floor(3*Math.random()+1)],issueType:["Bug","Improvement","Epic","Story"][Math.floor(3*Math.random()+1)],startDate:s(new Date(2015,3,1),new Date),completeDate:s(new Date,new Date(2016,0,1))});return e}function c(){const[e]=(0,n.useState)(l),[t,a]=(0,n.useState)("CHANGE_ROW");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{marginBottom:5},children:["Cell Navigation Modes:",(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"mode",checked:"NONE"===t,onChange:()=>a("NONE")}),"None"]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"mode",checked:"CHANGE_ROW"===t,onChange:()=>a("CHANGE_ROW")}),"Change Row"]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"mode",checked:"LOOP_OVER_ROW"===t,onChange:()=>a("LOOP_OVER_ROW")}),"Loop Over Row"]})]}),(0,r.jsx)(o.Z,{columns:i,rows:e,cellNavigationMode:t})]})}},86010:(e,t,a)=>{function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}a.d(t,{Z:()=>o})}}]);
//# sourceMappingURL=9b5f05b169737e2d5aca.js.map