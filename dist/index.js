!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.lib=t():e.lib=t()}(this,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{CollegeScorecard:()=>o});class o{constructor(e){this.apiKey=e}getSchoolByName(e){return t=this,o=void 0,r=function*(){const t=`http://api.data.gov/ed/collegescorecard/v1/schools?school.name=${e}&api_key=${this.apiKey}`;try{const e=yield fetch(t),o=yield e.json(),n=o.metadata.total;if(0===n)return null;const r=[];for(let e=0;e<n;e++){let t=o.results[e].school;r.push({id:e,name:t.name,city:t.city,state:t.state,website:t.school_url})}return console.log(r),r}catch(e){console.log(e.message)}},new((n=void 0)||(n=Promise))((function(e,c){function i(e){try{a(r.next(e))}catch(e){c(e)}}function l(e){try{a(r.throw(e))}catch(e){c(e)}}function a(t){var o;t.done?e(t.value):(o=t.value,o instanceof n?o:new n((function(e){e(o)}))).then(i,l)}a((r=r.apply(t,o||[])).next())}));var t,o,n,r}}return t})()));