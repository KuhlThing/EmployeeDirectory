(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{15:function(e,a,t){e.exports=t(44)},20:function(e,a,t){},21:function(e,a,t){},22:function(e,a,t){},23:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),o=(t(20),t(2)),i=t(14),s=(t(21),r.a.createContext({})),d=function(){var e=Object(n.useContext)(s);return r.a.createElement("tbody",null,void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,t=e.name,n=e.phone,l=e.email;return r.a.createElement("tr",{key:a.uuid},r.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},t.first," ",t.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"},n),r.a.createElement("td",{"data-th":"Email",className:"email-cell align-middle"},r.a.createElement("a",{href:"mailto:"+l,target:"__blank"},l)))})):r.a.createElement(r.a.Fragment,null))},m=(t(22),function(){var e=Object(n.useContext)(s);return r.a.createElement("div",{className:"datatable mt-5"},r.a.createElement("table",{id:"table",className:"table table-hover table-condensed"},r.a.createElement("thead",null,r.a.createElement("tr",null,e.developerState.headings.map((function(a){var t=a.name,n=a.width;return r.a.createElement("th",{className:"col",key:t,style:{width:n},onClick:function(){e.handleSort(t)}},t,r.a.createElement("span",{className:"pointer"}))})))),r.a.createElement(d,null)))}),u=function(){var e=Object(n.useContext)(s);return r.a.createElement("div",{className:"searchbox"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:""},"Filter")),r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"type name here","aria-label":"Search",onChange:function(a){return e.handleSearchChange(a)}})))};t(23);var v=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"navbar-collapse collapse row",id:"navbarNav"},r.a.createElement("div",{className:"search-area col-4"},r.a.createElement(u,null))))},f=t(13),h=t.n(f),p=function(){return h.a.get("https://randomuser.me/api/?results=50&nat=us")},g=(t(41),function(){var e=Object(n.useState)({users:[],order:"descend",filteredUsers:[],headings:[{name:"name",width:"30%",order:"descend"},{name:"phone",width:"30%",order:"descend"},{name:"email",width:"40%",order:"descend"}]}),a=Object(i.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){p().then((function(e){console.log(e.data.results),l(Object(o.a)({},t,{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),r.a.createElement(s.Provider,{value:{developerState:t,handleSearchChange:function(e){var a=e.target.value,n=t.users.filter((function(e){var t=e.name.first.toLowerCase()+" "+e.name.last.toLowerCase();if(console.log(a,t),-1!==t.indexOf(a.toLowerCase()))return e}));l(Object(o.a)({},t,{filteredUsers:n}))},handleSort:function(e){var a=t.headings.filter((function(a){return a.name===e})).map((function(e){return e.order})).toString();a="descend"===a?"ascend":"descend";var n=t.filteredUsers.sort((function(t,n){return"ascend"===a?void 0===t[e]?1:void 0===n[e]?-1:"name"===e?t[e].first.localeCompare(n[e].first):"dob"===e?t[e].age-n[e].age:t[e].localeCompare(n[e]):void 0===t[e]?1:void 0===n[e]?-1:"name"===e?n[e].first.localeCompare(t[e].first):"dob"===e?n[e].age-t[e].age:n[e].localeCompare(t[e])})),r=t.headings.map((function(t){return t.order=t.name===e?a:t.order,t}));l(Object(o.a)({},t,{filteredUsers:n,headings:r}))}}},r.a.createElement(v,null),r.a.createElement("div",{className:"data-area"},t.filteredUsers.length>0?r.a.createElement(m,null):r.a.createElement("div",null)))});var E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null))};var b=function(e){var a=e.children;return r.a.createElement("div",{className:"wrapper"},a)};t(42);var N=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("h6",null,"Filter your directory by typing a name in the filter field."),r.a.createElement("h6",null,"You can sort the directory by clicking on the column headers."))};t(43);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null,r.a.createElement(N,null),r.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.f70a88c3.chunk.js.map