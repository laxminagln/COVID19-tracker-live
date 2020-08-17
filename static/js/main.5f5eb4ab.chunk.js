(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},204:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),s=(a(99),a(25)),l=a.n(s),i=a(37),u=a(14),m=a(238),f=a(239),d=a(240),v=a(232),p=a(236),h=(a(101),a(2)),E=a(237);a(102);var b=function(e){var t=e.title,a=e.cases,n=e.active,c=e.total,o=Object(h.a)(e,["title","cases","active","total"]);return r.a.createElement(v.a,{onClick:o.onClick,className:"infoBox ".concat(n&&"infoBox--selected")},r.a.createElement(p.a,null,r.a.createElement(E.a,{className:"infoBox_title",color:"textSecondary"},t),r.a.createElement("h2",{className:"infoBox_cases"},a),r.a.createElement(E.a,{className:"infoBox_total",color:"textSecondary"},c," Total")))},g=a(243),y=a(244),j=(a(106),a(17)),O=a(18),x=a.n(O),w=a(241),N=a(242),C={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},k=function(e){var t=Object(j.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},_=function(e){return e?"+".concat(x()(e).format("0.0a")):"+0"};var S=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(g.a,{center:n,zoom:c},r.a.createElement(y.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:C[t].hex,fillColor:C[t].hex,radius:Math.sqrt(e[t])*C[t].multiplier},r.a.createElement(N.a,null,r.a.createElement("div",{className:"info_container"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")},className:"info_flag"}),r.a.createElement("div",{className:"info_name"},e.country),r.a.createElement("div",{className:"info_confirmed"},"Cases: ",x()(e.cases).format("0,0")),r.a.createElement("div",{className:"info_recovered"},"Recovered: ",x()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info_deaths"},"Deaths: ",x()(e.deaths).format("0,0")))))}))}(t,a)))};a(107);var I=function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,r.a.createElement("strong",null,x()(a).format("0,0"))))})))},B=a(87),D=(a(204),{legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return x()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return x()(e).format("0a")}}}]}}),R=function(e,t){var a,n=[];for(var r in e.cases){if(a){var c={x:r,y:e[t][r]-a};n.push(c)}a=e[t][r]}return n};var T=function(e){var t=e.casesType,a=Object(n.useState)({}),c=Object(u.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var a=R(e,t);s(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement("div",{className:"linegraph"},(null===o||void 0===o?void 0:o.length)>0&&r.a.createElement(B.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:o}]},options:D}))};a(205);var M=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("worldwide"),s=Object(u.a)(o,2),h=s[0],E=s[1],g=Object(n.useState)({}),y=Object(u.a)(g,2),j=y[0],O=y[1],x=Object(n.useState)([]),w=Object(u.a)(x,2),N=w[0],C=w[1],B=Object(n.useState)({lat:34.80746,lng:-40.4796}),D=Object(u.a)(B,2),R=D[0],M=D[1],z=Object(n.useState)(3),A=Object(u.a)(z,2),W=A[0],L=A[1],J=Object(n.useState)([]),Y=Object(u.a)(J,2),q=Y[0],F=Y[1],K=Object(n.useState)("cases"),V=Object(u.a)(K,2),$=V[0],G=V[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){O(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=k(e);C(a),F(e),c(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var H=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,E(a),n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){E(a),O(e),M([e.countryInfo.lat,e.countryInfo.long]),L(4)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app_left"},r.a.createElement("div",{className:"app_header"},r.a.createElement("h1",null,"COVID 19 TRACKER"),r.a.createElement(m.a,{className:"app_dropdown"},r.a.createElement(f.a,{variant:"outlined",onChange:H,value:h},r.a.createElement(d.a,{value:"worldwide"},"Worldwide"),a.map((function(e){return r.a.createElement(d.a,{value:e.value},e.name)}))))),r.a.createElement("div",{className:"app_stats"},r.a.createElement(b,{active:"cases"===$,onClick:function(e){return G("cases")},title:"Coronavirus cases",cases:_(j.todayCases),total:j.cases}),r.a.createElement(b,{active:"recovered"===$,onClick:function(e){return G("recovered")},title:"Recovered",cases:_(j.todayRecovered),total:j.recovered}),r.a.createElement(b,{active:"deaths"===$,onClick:function(e){return G("deaths")},title:"Deaths",cases:_(j.todayDeaths),total:j.deaths})),r.a.createElement(S,{casesType:$,countries:q,center:R,zoom:W})),r.a.createElement(v.a,{className:"app_right"},r.a.createElement(p.a,null,r.a.createElement("h3",null,"Live cases"),r.a.createElement(I,{countries:N}),r.a.createElement("h3",null,"Worldwide new ",$),r.a.createElement(T,{casesType:$}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(206)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.5f5eb4ab.chunk.js.map