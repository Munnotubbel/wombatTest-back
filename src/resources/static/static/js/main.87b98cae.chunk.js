(this["webpackJsonpwombat-front"]=this["webpackJsonpwombat-front"]||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),r=a.n(l),o=(a(23),a(7)),u=a(6),m=(a(24),function(e){return c.a.createElement("div",{className:"navicon"},c.a.createElement("img",{alt:"NavButton",src:e.iconurl}),c.a.createElement("p",null,e.routename))}),s=function(){var e=["https://res.cloudinary.com/munnotubbel/image/upload/v1581240405/wombat/gear_fnbjbo.png","https://res.cloudinary.com/munnotubbel/image/upload/v1581240405/wombat/wallet_qg6uwn.png","https://res.cloudinary.com/munnotubbel/image/upload/v1581240455/wombat/home_shuqs8.png","https://res.cloudinary.com/munnotubbel/image/upload/v1581240405/wombat/compass_wzpihn.png"];return c.a.createElement("div",{className:"navbar"},c.a.createElement(o.b,{to:"/settings",activeClassName:"activeRoute"},c.a.createElement(m,{iconurl:e[0],routename:"Settings"})),c.a.createElement(o.b,{to:"/wallet",activeClassName:"activeRoute"},c.a.createElement(m,{iconurl:e[1],routename:"Wallet"})),c.a.createElement(o.b,{to:"/home",activeClassName:"activeRoute"},c.a.createElement(m,{iconurl:e[2],routename:"Home"})),c.a.createElement(o.b,{to:"/explorer",activeClassName:"activeRoute"},c.a.createElement(m,{iconurl:e[3],routename:"Explorer"})))},i=a(2),d=Object(n.createContext)(),E=function(e){Object(n.useEffect)((function(){fetch("https://api.nomics.com/v1/currencies/ticker?key=7c8016160f57bb4a5ab8707a73810e33&ids=EOS",{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e),Y(e[0].price)})).catch((function(e){return console.log("error",e)})),function(){var e=new Headers;e.append("Access-Control-Allow-Origin","http://localhost:3000");var t={method:"GET",headers:e};fetch("https://eos-station.herokuapp.com/api/fetch/".concat(l),t).then((function(e){return e.json()})).then((function(e){console.log(e),e?(e.core_liquid_balance&&s(e.core_liquid_balance.replace(" EOS","")),h(ne(e.net_limit.max/1e3)),_(ne(e.net_limit.used/1e3)),j(ne(e.cpu_limit.max/1e3)),S(ne(e.cpu_limit.used/1e3)),R(ne(e.ram_quota/1e3)),W(ne(e.ram_usage/1e3)),G(ce(e.net_weight,0)),V(ce(e.cpu_weight,0)),K(ce(e.net_weight,e.cpu_weight)),ae(!1)):console.log("Fetch did not work")})).catch((function(e){return console.log("error",e)}))}()}),[]);var t=Object(n.useState)("genialwombat"),a=Object(i.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)("0.0000"),u=Object(i.a)(o,2),m=u[0],s=u[1],E=Object(n.useState)(0),b=Object(i.a)(E,2),p=b[0],h=b[1],v=Object(n.useState)(0),g=Object(i.a)(v,2),f=g[0],_=g[1],N=Object(n.useState)(0),O=Object(i.a)(N,2),w=O[0],j=O[1],x=Object(n.useState)(0),k=Object(i.a)(x,2),y=k[0],S=k[1],C=Object(n.useState)(0),I=Object(i.a)(C,2),B=I[0],R=I[1],q=Object(n.useState)(0),z=Object(i.a)(q,2),L=z[0],W=z[1],A=Object(n.useState)(0),F=Object(i.a)(A,2),H=F[0],G=F[1],J=Object(n.useState)(0),M=Object(i.a)(J,2),T=M[0],V=M[1],$=Object(n.useState)(0),P=Object(i.a)($,2),D=P[0],K=P[1],Q=Object(n.useState)(),U=Object(i.a)(Q,2),X=U[0],Y=U[1],Z=Object(n.useState)(!0),ee=Object(i.a)(Z,2),te=ee[0],ae=ee[1];function ne(e){return e=Math.round(100*e)/100}function ce(e,t){return((e+t)/1e4).toFixed(4)}return c.a.createElement(d.Provider,{value:{ballance:m,staked:D,accountName:l,net_max:p,net_use:f,cpu_max:w,cpu_use:y,ram_max:B,ram_use:L,net_weight:H,cpu_weight:T,exchangeValue:X,isLoading:te,changeAccountName:function(e){r(e)}}},e.children)},b=function(e){return c.a.createElement("div",{className:"ressource_type"},c.a.createElement("div",{id:"type"},e.type),c.a.createElement("div",{id:"consumption"},e.consumption),c.a.createElement("div",{className:"stakedinfo"},c.a.createElement("p",null,e.staked),!0===e.withIcon?c.a.createElement("img",{className:"coinIcon",alt:"EOS-ICON",src:"https://res.cloudinary.com/munnotubbel/image/upload/v1581182752/wombat/5a52232c2f93c7a8d5137fdd_izhtxc.png"}):null))},p=function(e){var t=Object(n.useContext)(d);Object(n.useEffect)((function(){!function(){var t=document.getElementById(e.slug);if(e.percent>0){if(0==a){a=1;t=document.getElementById(e.slug);var n=0,c=setInterval((function(){n>=e.percent?(clearInterval(c),a=0):(n++,t.style.width=n+"%")}),20)}}else t.style.width=e.percent+"%"}()}),[!0===t.isLoading]);var a=0;return c.a.createElement("div",{className:"progressbar"},c.a.createElement("div",{className:"percent"},c.a.createElement("div",null,e.percent," %")),c.a.createElement("div",{className:"barOuter"},c.a.createElement("div",{id:e.slug,style:{width:"0%",backgroundColor:"white",borderColor:"black",borderWidth:"2px",height:"16px",borderStyle:"solid"}})))},h=function(){var e=Object(n.useContext)(d);function t(e,t){var a=Math.round(e/t*100);return a>=100?100:a>=0?a:0}return c.a.createElement("div",{className:"ressources"},c.a.createElement("div",null,c.a.createElement(b,{type:"Net",consumption:"".concat(e.net_use,"kb / ").concat(e.net_max,"kb"),staked:e.net_weight,withIcon:!0}),c.a.createElement(p,{percent:t(e.net_use,e.net_max),slug:"netBar"})),c.a.createElement("div",null,c.a.createElement(b,{type:"Cpu",consumption:"".concat(e.cpu_use,"kb / ").concat(e.cpu_max,"kb"),staked:e.cpu_weight,withIcon:!0}),c.a.createElement(p,{percent:t(e.cpu_use,e.cpu_max),slug:"cpuBar"})),c.a.createElement("div",{style:{marginBottom:"60px"}},c.a.createElement(b,{type:"Ram",consumption:"".concat(e.ram_use,"kb / ").concat(e.ram_max,"kb"),staked:""}),c.a.createElement(p,{percent:t(e.ram_use,e.ram_max),slug:"ramBar"})))},v=function(){return c.a.createElement("div",{className:"tradebuttons"},c.a.createElement("div",null,c.a.createElement("button",{className:"tradebutton"},"buy")),c.a.createElement("div",null,c.a.createElement("button",{className:"tradebutton"},"send")),c.a.createElement("div",null,c.a.createElement("button",{className:"tradebutton"},"sell")))},g=function(){return c.a.createElement("img",{className:"pulse",src:"https://res.cloudinary.com/munnotubbel/image/upload/v1581182752/wombat/5a52232c2f93c7a8d5137fdd_izhtxc.png"})},f=function(){var e="https://res.cloudinary.com/munnotubbel/image/upload/v1581182752/wombat/5a52232c2f93c7a8d5137fdd_izhtxc.png",t=Object(n.useContext)(d),a=t.ballance*t.exchangeValue;return c.a.createElement("div",{className:"wallet"},!0===t.isLoading?c.a.createElement("div",{className:"ammount"},c.a.createElement(g,null)):c.a.createElement("div",{className:"ammount"},c.a.createElement("div",{id:"eos"},c.a.createElement("h1",null,t.ballance),c.a.createElement("img",{alt:"EOS-ICON",src:e})),c.a.createElement("div",{id:"dollar"},c.a.createElement("h2",null,"= ".concat(isNaN(a)?"-":a.toFixed(2),"$")))),c.a.createElement(v,null),c.a.createElement("div",{className:"resourceinfo"},c.a.createElement("div",{id:"ressources_title"},c.a.createElement("h4",null,"Ressources"),c.a.createElement("div",null,c.a.createElement("h5",null,"Staked"),c.a.createElement("div",{className:"stakedinfo"},c.a.createElement("p",null,t.staked),c.a.createElement("img",{className:"coinIcon",alt:"EOS-ICON",src:e})))),c.a.createElement(h,null)))},_=function(){return c.a.createElement("div",{className:"tobeadded"},c.a.createElement("h1",null,"Settings"))},N=function(){return c.a.createElement("div",{className:"tobeadded"},c.a.createElement("h1",null,"Explorer"))},O=function(){return c.a.createElement("div",{className:"tobeadded"},c.a.createElement("h1",null,"Home"))},w=function(){var e=Object(n.useContext)(d);return console.log(e),c.a.createElement("div",{className:"headtitle"},!0===e.isLoading?c.a.createElement("h1",null,"loading"):c.a.createElement("h1",null,null!==e.accountName?e.accountName:"nobody"))};var j=function(){return c.a.createElement(o.a,null,c.a.createElement(E,null,c.a.createElement("div",{className:"outerContainer"},c.a.createElement("div",{className:"header"},c.a.createElement(w,null)),c.a.createElement("div",{className:"info"},c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/settings"},c.a.createElement(_,null)),c.a.createElement(u.a,{path:"/home"},c.a.createElement(O,null)),c.a.createElement(u.a,{path:"/explorer"},c.a.createElement(N,null)),c.a.createElement(u.a,{exact:!0,path:"/wallet"},c.a.createElement(f,null)))),c.a.createElement("div",{className:"footer"},c.a.createElement(s,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.87b98cae.chunk.js.map