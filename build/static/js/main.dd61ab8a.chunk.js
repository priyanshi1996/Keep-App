(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},212:function(e,t,a){},214:function(e,t,a){},218:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(33),o=a.n(i),l=(a(98),a(16)),c=a(17),s=a(20),u=a(18),m=a(19),d=(a(99),a(100),a(83)),p=a.n(d),h=a(85),g=a.n(h),b=a(22),f=a.n(b),E=a(21),v=a.n(E),O=a(60),y=a.n(O),j=a(86),w=a.n(j),k=(a(101),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"root"},r.a.createElement(p.a,{position:"static"},r.a.createElement(g.a,null,r.a.createElement(y.a,{className:"menuButton",color:"inherit","aria-label":"Menu"},r.a.createElement(w.a,null)),r.a.createElement(f.a,{variant:"h6",color:"inherit",className:"grow"},"Notes"),r.a.createElement(v.a,{color:"inherit"},"Login"))))}}]),t}(r.a.Component)),C=a(43),T=a(45),N=a.n(T),x=a(44),D=a.n(x),S=a(24),B=a.n(S),R=a(47),W=a.n(R),A=a(48),F=a.n(A),I=a(26),L=a.n(I),q=a(25),M=a.n(q),J=a(46),P=a.n(J),z=a(29),U=a.n(z),H=a(5),Y=a.n(H);Y()(function(e){return{main:Object(C.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement("main",{className:t.main},r.a.createElement(D.a,null),r.a.createElement(U.a,{className:t.paper},r.a.createElement(N.a,{className:t.avatar},r.a.createElement(P.a,null)),r.a.createElement(f.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form},r.a.createElement(B.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(M.a,{htmlFor:"email"},"Email Address"),r.a.createElement(L.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0})),r.a.createElement(B.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(M.a,{htmlFor:"password"},"Password"),r.a.createElement(L.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(W.a,{control:r.a.createElement(F.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign in"))))});var $=a(8),G=a(61),K=a.n(G),Q=a(87),V=a.n(Q),X=a(88),Z=a.n(X),_=(a(212),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={title:"",notes:"",date:""},e.handleOnChangeTitle=e.handleOnChangeTitle.bind(Object($.a)(Object($.a)(e))),e.handleOnChangeNotes=e.handleOnChangeNotes.bind(Object($.a)(Object($.a)(e))),e.addTodo=e.addTodo.bind(Object($.a)(Object($.a)(e))),e.setWrapperRef=e.setWrapperRef.bind(Object($.a)(Object($.a)(e))),e.handleClickOutside=e.handleClickOutside.bind(Object($.a)(Object($.a)(e))),e.getCurrentDate=e.getCurrentDate.bind(Object($.a)(Object($.a)(e))),e.emptyState=e.emptyState.bind(Object($.a)(Object($.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleOnChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"handleOnChangeNotes",value:function(e){this.setState({notes:e.target.value})}},{key:"addTodo",value:function(e){this.getCurrentDate(),e.preventDefault(),console.log(this.props.handleAddTodo),console.log(this.state.value),this.props.handleAddTodo(this.state.title,this.state.notes,this.state.date),this.state.value=""}},{key:"getCurrentDate",value:function(){var e=(new Date).getDate(),t=(new Date).getMonth()+1,a=(new Date).getFullYear(),n=(new Date).getHours(),r=(new Date).getMinutes(),i=(new Date).getSeconds();this.state.date=e+"/"+t+"/"+a+" "+n+":"+r+":"+i}},{key:"openNoteBox",value:function(){document.getElementById("title").setAttribute("class","displayTitle"),document.getElementById("button").setAttribute("class","displayButton")}},{key:"hideNoteBox",value:function(){document.getElementById("title").setAttribute("class","hideTitle"),document.getElementById("button").setAttribute("class","hideButton")}},{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"setWrapperRef",value:function(e){this.wrapperRef=e}},{key:"emptyState",value:function(){this.setState({title:"",notes:"",date:""})}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&(this.emptyState(),this.hideNoteBox())}},{key:"render",value:function(){return r.a.createElement("div",{id:"box",ref:this.setWrapperRef},r.a.createElement("input",{type:"text",placeholder:"Title",id:"title",class:"hideTitle",onChange:this.handleOnChangeTitle,value:this.state.title}),r.a.createElement("br",null),r.a.createElement("textarea",{type:"text",placeholder:"Take a note...",class:"note",onClick:this.openNoteBox,onChange:this.handleOnChangeNotes,value:this.state.notes}),r.a.createElement("br",null),r.a.createElement("div",{class:"hideButton",id:"button"},r.a.createElement(K.a,{size:"small",color:"primary","aria-label":"Add",onClick:this.addTodo,id:"button1"},r.a.createElement(V.a,null)),r.a.createElement(K.a,{size:"small",disabled:!0,"aria-label":"Delete",id:"button2"},r.a.createElement(Z.a,null))))}}]),t}(r.a.Component)),ee=a(89),te=a.n(ee),ae=a(91),ne=a.n(ae),re=a(90),ie=a.n(re),oe=(a(214),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"card"},r.a.createElement(te.a,null,r.a.createElement(ie.a,null,r.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},this.props.task.date),r.a.createElement(f.a,{variant:"h5",component:"h2"},this.props.task.title),r.a.createElement(f.a,{component:"p"},this.props.task.notes,r.a.createElement("br",null))),r.a.createElement(ne.a,null,r.a.createElement(v.a,{size:"small"},"Learn More"),r.a.createElement(v.a,{variant:"contained",color:"secondary",onClick:this.props.remove,value:this.props.task.id},"Delete"))))}}]),t}(r.a.Component)),le=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).removeTodo=e.removeTodo.bind(Object($.a)(Object($.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"removeTodo",value:function(e){console.log("IDDD",e.currentTarget.value),this.props.removeTodo(e.currentTarget.value)}},{key:"render",value:function(){var e=this;return console.log(" Render After : ",this.props.tasks),r.a.createElement("div",null," ",this.props.tasks.map(function(t){return r.a.createElement(oe,{key:t.id,task:t,remove:e.removeTodo})}))}}]),t}(r.a.Component),ce=(r.a.Component,a(92)),se={email:"",name:"",password:""};function ue(e){"email"==e.target.id?se.email=e.target.value:"name"==e.target.id?se.name=e.target.value:"password"==e.target.id&&(se.password=e.target.value)}var me=Y()(function(e){return{main:Object(C.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement("main",{className:t.main},r.a.createElement(D.a,null),r.a.createElement(U.a,{className:t.paper},r.a.createElement(N.a,{className:t.avatar},r.a.createElement(P.a,null)),r.a.createElement(f.a,{component:"h1",variant:"h5"},"Sign Up"),r.a.createElement("form",{className:t.form},r.a.createElement(B.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(M.a,{htmlFor:"email"},"Email Address"),r.a.createElement(L.a,{id:"email",name:"email",autoComplete:"email",onChange:ue,value:se.email,autoFocus:!0})),r.a.createElement(B.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(M.a,{htmlFor:"email"},"Name"),r.a.createElement(L.a,{id:"name",name:"name",type:"text",onChange:ue,value:se.name,autoFocus:!0})),r.a.createElement(B.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(M.a,{htmlFor:"password"},"Password"),r.a.createElement(L.a,{name:"password",type:"password",id:"password",autoComplete:"current-password",onChange:ue,value:se.password})),r.a.createElement(W.a,{control:r.a.createElement(F.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:Object(ce.a)(se)},"Sign up"))))}),de=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(me,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},92:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return n});var n=function(e){console.log("Signup"),console.log("Props",e.email),fetch("http://localhost:3001/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return console.log("Success:",JSON.stringify(e))}).catch(function(e){return console.error("Error:",e)})};e.export={signup:n,login:function(){}}}).call(this,a(72)(e))},93:function(e,t,a){e.exports=a(218)},98:function(e,t,a){},99:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[93,1,2]]]);
//# sourceMappingURL=main.dd61ab8a.chunk.js.map