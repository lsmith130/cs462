(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a,r,o,i=n(0),c=n.n(i),s=n(17),u=n.n(s),l=(n(26),n(9)),p=n(10),h=n(12),m=n(11),d=n(13),f=(n(27),n(36)),v=n(35),y=n(37),b=n(2),g=n.n(b),w=n(4),O=n(7),k=n(8),j=n.n(k),x=(a=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",location:"",number:"",threshold:"",loading:!0,error:null,saving:!1},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=Object(w.a)(g.a.mark(function e(){var t,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://cs462.umkhandi.com/sky/cloud/3vKrEpPU8QXMPZH8SxhWUW/sensor_profile/profile");case 2:if((t=e.sent).ok){e.next=7;break}return this.setState({error:t.statusText}),console.error(t),e.abrupt("return");case 7:return e.next=9,t.json();case 9:n=e.sent,this.setState({name:n.name,location:n.location,number:n.number,threshold:n.threshold,loading:!1});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onSubmit",value:function(){var e=Object(w.a)(g.a.mark(function e(t){var n,a,r,o,i,c;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({saving:!0}),n=this.state,a=n.name,r=n.number,o=n.location,i=n.threshold,e.next=5,fetch("http://cs462.umkhandi.com/sky/event/Wfdsrm1Z1vXx7VzTT9ii7a/abc/sensor/profile_updated?name=".concat(a,"&number=").concat(r,"&location=").concat(o,"&threshold=").concat(i),{method:"POST"});case 5:if((c=e.sent).ok){e.next=9;break}return this.setState({error:c.statusText}),e.abrupt("return");case 9:this.setState({saving:!1});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"nameChanged",value:function(){var e=Object(w.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({name:t.target.value});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"numberChanged",value:function(){var e=Object(w.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({number:t.target.value});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"locationChanged",value:function(){var e=Object(w.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({location:t.target.value});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"thresholdChanged",value:function(){var e=Object(w.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({threshold:t.target.value});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading)return c.a.createElement("p",null,"Loading...");if(this.state.error)return c.a.createElement("p",null,"Failed to load.");var e={display:"flex",paddingBottom:"5px"},t={width:"200px"};return c.a.createElement("form",{style:{display:"flex",flexDirection:"column",textAlign:"left"},onSubmit:this.onSubmit},c.a.createElement("div",{style:e},c.a.createElement("label",{style:t},"Name: ")," ",c.a.createElement("input",{type:"text",value:this.state.name,onChange:this.nameChanged})),c.a.createElement("div",{style:e},c.a.createElement("label",{style:t},"Location: ")," ",c.a.createElement("input",{type:"text",value:this.state.location,onChange:this.locationChanged})),c.a.createElement("div",{style:e},c.a.createElement("label",{style:t},"Contact Number: ")," ",c.a.createElement("input",{type:"text",value:this.state.number,onChange:this.numberChanged})),c.a.createElement("div",{style:e},c.a.createElement("label",{style:t},"Threshold: ")," ",c.a.createElement("input",{type:"number",value:this.state.threshold,onChange:this.thresholdChanged})),c.a.createElement("div",{style:{height:"30px"}}),c.a.createElement("button",{type:"submit",style:{width:"100px",height:"40px"}},this.state.saving?"Saving...":"Submit"))}}]),t}(i.Component),Object(O.a)(a.prototype,"onSubmit",[j.a],Object.getOwnPropertyDescriptor(a.prototype,"onSubmit"),a.prototype),Object(O.a)(a.prototype,"nameChanged",[j.a],Object.getOwnPropertyDescriptor(a.prototype,"nameChanged"),a.prototype),Object(O.a)(a.prototype,"numberChanged",[j.a],Object.getOwnPropertyDescriptor(a.prototype,"numberChanged"),a.prototype),Object(O.a)(a.prototype,"locationChanged",[j.a],Object.getOwnPropertyDescriptor(a.prototype,"locationChanged"),a.prototype),Object(O.a)(a.prototype,"thresholdChanged",[j.a],Object.getOwnPropertyDescriptor(a.prototype,"thresholdChanged"),a.prototype),a),E=n(15),C=n(19);function S(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Lab 5 Portal"),c.a.createElement("h3",null,"Current Temperature"),c.a.createElement(P,null),c.a.createElement("h3",null,"Latest Readings (Red indicates threshold violation.)"),c.a.createElement("p",null,"Note that I lowered the threshold for the last few readings so some readings would be violations"),c.a.createElement(W,null))}var P=(r=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).interval=0,n.state={loading:!0,reading:null,error:null},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){this.update(),this.interval=window.setInterval(this.update,1e4)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.interval)}},{key:"update",value:function(){var e=Object(w.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I();case 3:t=e.sent,this.setState({loading:!1,reading:t[t.length-1].temperature}),e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),this.setState({loading:!1,error:!0}),e.abrupt("return");case 12:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?c.a.createElement("p",null,"Loading..."):this.state.error?c.a.createElement("p",null,"Failed to load."):c.a.createElement("p",null,this.state.reading)}}]),t}(i.Component),Object(O.a)(r.prototype,"update",[j.a],Object.getOwnPropertyDescriptor(r.prototype,"update"),r.prototype),r),W=(o=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).interval=0,n.state={loading:!0,reading:null,error:null,tempReadings:[]},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){this.update(),this.interval=window.setInterval(this.update,1e4)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.interval)}},{key:"update",value:function(){var e=Object(w.a)(g.a.mark(function e(){var t,n,a,r,o;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([T(),_()]);case 3:t=e.sent,n=Object(C.a)(t,2),a=n[0],r=n[1],a=a.map(function(e){return{temperature:e.temperature,timestamp:e.timestamp,isViolation:!0}}),r=r.map(function(e){return{temperature:e.temperature,timestamp:e.timestamp,isViolation:!1}}),o=[].concat(Object(E.a)(a),Object(E.a)(r)).sort(function(e,t){return e.timestamp<t.timestamp?1:-1}).slice(0,100),this.setState({loading:!1,tempReadings:o}),e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),this.setState({loading:!1,error:!0}),e.abrupt("return");case 18:case"end":return e.stop()}},e,this,[[0,13]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log("render"),this.state.loading?c.a.createElement("p",null,"Loading..."):this.state.error?c.a.createElement("p",null,"Failed to update."):c.a.createElement("ul",null,this.state.tempReadings.map(function(e){return c.a.createElement(D,{key:e.timestamp,timestamp:e.timestamp,value:e.temperature,highlight:e.isViolation})}))}}]),t}(i.Component),Object(O.a)(o.prototype,"update",[j.a],Object.getOwnPropertyDescriptor(o.prototype,"update"),o.prototype),o);function D(e){var t=e.timestamp,n=e.value,a={backgroundColor:e.highlight?"red":"none"};return c.a.createElement("li",null,t,": ",c.a.createElement("span",{style:a},n))}function T(){return U.apply(this,arguments)}function U(){return(U=Object(w.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://cs462.umkhandi.com/sky/cloud/3vKrEpPU8QXMPZH8SxhWUW/temperature_store/threshold_violations");case 2:if((t=e.sent).ok){e.next=5;break}throw t.statusText;case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function I(){return M.apply(this,arguments)}function M(){return(M=Object(w.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://cs462.umkhandi.com/sky/cloud/3vKrEpPU8QXMPZH8SxhWUW/temperature_store/temperatures");case 2:if((t=e.sent).ok){e.next=5;break}throw t.statusText;case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _(){return A.apply(this,arguments)}function A(){return(A=Object(w.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://cs462.umkhandi.com/sky/cloud/3vKrEpPU8QXMPZH8SxhWUW/temperature_store/inrange_temperatures");case 2:if((t=e.sent).ok){e.next=5;break}throw t.statusText;case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}var L=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(f.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("nav",{style:{display:"flex",flexDirection:"column",alignItems:"space-between",justifyContent:"center"}},c.a.createElement(v.a,{to:"/"},"Home"),c.a.createElement(v.a,{to:"/profile"},"Profile")),c.a.createElement("header",{className:"App-header"},c.a.createElement(y.a,{path:"/profile",component:x}),c.a.createElement(y.a,{exact:!0,path:"/",component:S}))))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.6e51613b.chunk.js.map