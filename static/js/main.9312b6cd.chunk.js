(this.webpackJsonpde_ass=this.webpackJsonpde_ass||[]).push([[0],{28:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_kirillfedoseev_WebstormProjects_de_ass_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33),_Users_kirillfedoseev_WebstormProjects_de_ass_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_Users_kirillfedoseev_WebstormProjects_de_ass_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),Expression=function(){function Expression(e){Object(_Users_kirillfedoseev_WebstormProjects_de_ass_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Expression),this.expr=void 0,this.expr=e}return Object(_Users_kirillfedoseev_WebstormProjects_de_ass_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Expression,[{key:"evaluate",value:function evaluate(params){var importStr="const sin = Math.sin; const cos = Math.cos; const exp = Math.exp; const e = Math.E; const pi = Math.PI; const sqrt = Math.sqrt;",paramsInitStr=Object.entries(params).reduce((function(e,t){var n=Object(_Users_kirillfedoseev_WebstormProjects_de_ass_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(t,2),r=n[0],a=n[1];return"".concat(e,"let ").concat(r," = ").concat(a,";")}),"");try{return eval("".concat(importStr," ").concat(paramsInitStr," ").concat(this.expr))}catch(e){throw Error("Failed to substitute parameters")}}}]),Expression}();__webpack_exports__.a=Expression},38:function(e,t,n){e.exports=n(52)},43:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(11),o=n.n(i),c=(n(43),n(13)),s=n(6),u=n(7),l=n(9),p=n(8),m=n(10),h=n(28),b=function e(t){Object(s.a)(this,e),this.expr=void 0,this.expr=new h.a(t)},v=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"evaluate",value:function(e,t){return this.expr.evaluate({x:e,y:t})}}]),t}(b),_=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"evaluate",value:function(e,t){return this.expr.evaluate({c:e,x:t})}}]),t}(b),d=function(){function e(t,n){Object(s.a)(this,e),this.name="Exact solution",this.func=void 0,this.c=void 0,this.func=t,this.c=n}return Object(u.a)(e,[{key:"solveIVP",value:function(e,t,n,r){for(var a=(n-e)/r,i={x:[],y:[]},o=this.c.evaluate(e,t),c=0,s=e;c<=r;c++,s+=a)i.x.push(s),i.y.push(this.func.evaluate(o,s));return i}}]),e}(),y=function(){function e(t){Object(s.a)(this,e),this.name=void 0,this.func=void 0,this.func=t}return Object(u.a)(e,[{key:"solveIVP",value:function(e,t,n,r){for(var a=(n-e)/r,i={x:[],y:[]},o=0,c=e,s=t;o<=r;o++,c+=a)i.x.push(c),i.y.push(s),s=this.calculateNewY(c,s,a);return i}},{key:"localErrors",value:function(e,t,n,r,a){for(var i=(n-e)/r,o={x:[e],y:[0]},c=a.c.evaluate(e,t),s=e+i,u=t;s<=e+i*r;s+=i){o.x.push(s);var l=a.func.evaluate(c,s-i);u=this.calculateNewY(s-i,l,i),o.y.push(Math.abs(u-a.func.evaluate(c,s)))}return o}},{key:"globalErrors",value:function(e,t,n,r,a,i){for(var o={x:[],y:[]},c=r;c<=a;c++){o.x.push(c);for(var s=this.solveIVP(e,t,n,c),u=i.solveIVP(e,t,n,c),l=0,p=0;p<s.y.length;p++)l=Math.max(l,Math.abs(u.y[p]-s.y[p]));o.y.push(l)}return o}}]),e}(),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).name="Euler solution",n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"calculateNewY",value:function(e,t,n){return t+this.func.evaluate(e,t)*n}}]),t}(y),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).name="Runge-Kutte solution",n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"calculateNewY",value:function(e,t,n){var r=this.func.evaluate(e,t),a=this.func.evaluate(e+n/2,t+n*r/2),i=this.func.evaluate(e+n/2,t+n*a/2);return t+(r+2*a+2*i+this.func.evaluate(e+n,t+n*i))*n/6}}]),t}(y),x=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).name="Improved euler solution",n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"calculateNewY",value:function(e,t,n){var r=this.func.evaluate(e,t);return t+(r+this.func.evaluate(e+n,t+n*r))*n/2}}]),t}(y),j=n(77),g=n(80),E=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.onChange,r=t.onChangeFunc,i=t.N,o=t.X,c=t.x0,s=t.y0,u=t.startN,l=t.endN,p=t.yPrime,m=t.y,h=t.c;try{e=new v(h).evaluate(c,s)}catch(b){e=""}return a.a.createElement(j.a,{container:!0},a.a.createElement("h3",null,"Input functions here:"),a.a.createElement(j.a,{container:!0},a.a.createElement(j.a,{item:!0,xs:3},a.a.createElement(g.a,{id:"outlined-number",label:"y'=f(x,y)",value:p,onChange:r("yPrime"),type:"text",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),a.a.createElement(j.a,{item:!0,xs:3},a.a.createElement(g.a,{id:"outlined-number",label:"y=f(c,x)",value:m,onChange:r("y"),type:"text",margin:"normal",variant:"outlined"})),a.a.createElement(j.a,{item:!0,xs:3},a.a.createElement(g.a,{id:"outlined-number",label:"c=f(x,y)",value:h,onChange:r("c"),type:"text",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),a.a.createElement(j.a,{item:!0,xs:3},a.a.createElement(g.a,{id:"outlined-number",label:"c(x0, y0)",value:e,type:"text",InputProps:{readOnly:!0},InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"}))),a.a.createElement("h3",null,"Input grid size, IVP and maximum x here:"),a.a.createElement(j.a,{container:!0},a.a.createElement(j.a,{item:!0,xs:3},a.a.createElement(g.a,{id:"outlined-number",label:"N",value:isNaN(i)?"":i,onChange:n(!0,"N"),type:"text",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),a.a.createElement(j.a,{item:!0,xs:3},a.a.createElement(g.a,{id:"outlined-number",label:"x0",value:isNaN(c)?"":c,onChange:n(!1,"x0"),type:"text",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),a.a.createElement(j.a,{item:!0,xs:3},a.a.createElement(g.a,{id:"outlined-number",label:"y0",value:isNaN(s)?"":s,onChange:n(!1,"y0"),type:"text",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),a.a.createElement(j.a,{item:!0,xs:3},a.a.createElement(g.a,{id:"outlined-number",label:"X",value:isNaN(o)?"":o,onChange:n(!1,"X"),type:"text",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"}))),a.a.createElement("h3",null,"Input grid range here:"),a.a.createElement(j.a,{container:!0},a.a.createElement(j.a,{item:!0,xs:3},a.a.createElement(g.a,{id:"outlined-number",label:"startN",value:isNaN(u)?"":u,onChange:n(!0,"startN"),type:"text",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),a.a.createElement(j.a,{item:!0,xs:3},a.a.createElement(g.a,{id:"outlined-number",label:"endN",value:isNaN(l)?"":l,onChange:n(!0,"endN"),type:"text",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"}))))}}]),t}(a.a.Component),P=n(32),w=n(31),k=n.n(w),N=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).state=void 0,n.container=void 0,n.legendTimeout=void 0,n.legendTimeout=null,n.state={dimensions:{width:0},active:e.graphs.map((function(e){return!0}))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({dimensions:{width:this.container.offsetWidth}})}},{key:"renderContent",value:function(){var e=this,t=this.props,n=t.graphs,r=t.title,i=t.xTitle,o=t.yTitle,c=this.state,s=c.dimensions,u=c.active,l=n.map((function(e,t){return{x:e.x,y:e.y,name:e.name,type:"scatter",line:{shape:"spline"},mode:"lines",marker:{color:e.color},visible:!!u[t]||"legendonly"}}));return a.a.createElement(k.a,{data:l,onLegendClick:function(t){return e.legendTimeout?(clearTimeout(e.legendTimeout),e.legendTimeout=null,e.setState((function(e){var n=e.active.map((function(e){return!1}));return n[t.curveNumber]=!0,{dimensions:e.dimensions,active:n}}))):e.legendTimeout=setTimeout((function(){e.legendTimeout=null,e.setState((function(e){var n=Object(P.a)(e.active);return n[t.curveNumber]=!n[t.curveNumber],{dimensions:e.dimensions,active:n}}))}),200),!1},layout:{width:s.width,title:r,autosize:!0,legend:{orientation:"h"},annotations:[{xref:"paper",yref:"paper",x:0,xanchor:"center",y:1.01,font:{size:18},yanchor:"bottom",text:o,showarrow:!1},{xref:"paper",yref:"paper",x:1.01,xanchor:"left",y:.015,font:{size:18},yanchor:"center",text:i,showarrow:!1}]},config:{showTips:!1,displaylogo:!1,autosizable:!0,modeBarButtonsToRemove:["toggleSpikelines","toImage"]}})}},{key:"render",value:function(){var e=this,t=this.state.dimensions;return a.a.createElement("div",{ref:function(t){return e.container=t}},t&&this.renderContent())}}]),t}(a.a.Component);function S(e){switch(e){case"Exact solution":return"green";case"Euler solution":return"red";case"Improved euler solution":return"orange";case"Runge-Kutte solution":return"blue";default:return"black"}}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var I=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"evaluateGraphs",value:function(){var e=this.props,t=e.solutions,n=e.x0,r=e.y0,a=e.N,i=e.X;if(a>0&&i>n)try{return t.map((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.solveIVP(n,r,i,a),{name:e.name,color:S(e.name)})}))}catch(o){return[]}return[]}},{key:"render",value:function(){return a.a.createElement(N,{title:"Solutions",xTitle:"x",yTitle:"y",graphs:this.evaluateGraphs()})}}]),t}(a.a.Component);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var T=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"evaluateLocalErrors",value:function(){var e=this.props,t=e.x0,n=e.y0,r=e.X,a=e.N,i=e.solutions,o=e.exactSolution;if(a>0&&r>t)try{return i.map((function(e,i){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.localErrors(t,n,r,a,o),{name:e.name,color:S(e.name)})}))}catch(s){return[]}return[]}},{key:"render",value:function(){return a.a.createElement(N,{title:"Local errors",xTitle:"x",yTitle:"LE",graphs:this.evaluateLocalErrors()})}}]),t}(a.a.Component);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var L=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"evaluateGlobalErrors",value:function(){var e=this.props,t=e.x0,n=e.y0,r=e.X,a=e.solutions,i=e.startN,o=e.endN,s=e.exactSolution;if(o>i&&r>t)try{return a.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.globalErrors(t,n,r,i,o,s),{name:e.name,color:S(e.name)})}))}catch(u){return[]}return[]}},{key:"shouldComponentUpdate",value:function(e,t,n){return this.props.x0!==e.x0||this.props.y0!==e.y0||this.props.X!==e.X||this.props.endN!==e.endN||this.props.startN!==e.startN||this.props.solutions!==e.solutions||this.props.exactSolution!==e.exactSolution}},{key:"render",value:function(){return a.a.createElement(N,{title:"Global errors",xTitle:"n",yTitle:"GE",graphs:this.evaluateGlobalErrors()})}}]),t}(a.a.Component);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).derivative=void 0,n.analyticalSolution=void 0,n.exact=void 0,n.euler=void 0,n.improvedEuler=void 0,n.rungeKutte=void 0,n.numericalSolutions=void 0,n.solutions=void 0,n.derivative=new v("2*x*(x**2+y)"),n.analyticalSolution=new _("c*exp(x**2)-x**2-1"),n.exact=new d(n.analyticalSolution,new v("(y+x**2+1)/exp(x**2)")),n.euler=new f(n.derivative),n.improvedEuler=new x(n.derivative),n.rungeKutte=new O(n.derivative),n.numericalSolutions=[n.euler,n.improvedEuler,n.rungeKutte],n.solutions=[n.exact].concat(n.numericalSolutions),n.state={yPrime:"2*x*(x**2+y)",y:"c*exp(x**2)-x**2-1",c:"(y+x**2+1)/exp(x**2)",N:50,startN:5,endN:60,X:3,x0:0,y0:0},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"change",value:function(e,t){var n=this;return function(r){var a=(e?parseInt:parseFloat)(r.target.value);n.setState((function(e){return K({},e,Object(c.a)({},t,a))}))}}},{key:"changeFunc",value:function(e){var t=this;return function(n){var r=n.target.value;t.derivative=new v("yPrime"===e?r:t.state.yPrime),t.analyticalSolution=new _("y"===e?r:t.state.y),t.exact=new d(t.analyticalSolution,new v("c"===e?r:t.state.c)),t.euler=new f(t.derivative),t.improvedEuler=new x(t.derivative),t.rungeKutte=new O(t.derivative),t.numericalSolutions=[t.euler,t.improvedEuler,t.rungeKutte],t.solutions=[t.exact].concat(t.numericalSolutions),t.setState((function(t){return K({},t,Object(c.a)({},e,r))}))}}},{key:"render",value:function(){var e=this.state,t=e.x0,n=e.y0,r=e.X,i=e.N,o=e.startN,c=e.endN,s=e.yPrime,u=e.y,l=e.c;return a.a.createElement("div",{className:"App"},a.a.createElement(j.a,{container:!0,spacing:2},a.a.createElement(j.a,{item:!0,md:12,lg:6},a.a.createElement(I,{x0:t,y0:n,N:i,X:r,solutions:this.solutions})),a.a.createElement(j.a,{item:!0,md:12,lg:6},a.a.createElement(T,{x0:t,y0:n,N:i,X:r,solutions:this.numericalSolutions,exactSolution:this.exact})),a.a.createElement(j.a,{item:!0,md:12,lg:6},a.a.createElement(L,{x0:t,y0:n,startN:o,endN:c,X:r,solutions:this.numericalSolutions,exactSolution:this.exact})),a.a.createElement(j.a,{item:!0,md:12,lg:6},a.a.createElement(E,{startN:o,endN:c,N:i,X:r,x0:t,y0:n,yPrime:s,y:u,c:l,onChange:this.change.bind(this),onChangeFunc:this.changeFunc.bind(this)}))))}}]),t}(a.a.Component);o.a.render(a.a.createElement(U,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.9312b6cd.chunk.js.map