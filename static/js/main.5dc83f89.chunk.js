(this["webpackJsonpredux-todo-list"]=this["webpackJsonpredux-todo-list"]||[]).push([[0],{41:function(e,t,o){},56:function(e,t,o){e.exports=o(68)},61:function(e,t,o){},67:function(e,t,o){},68:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),c=o(7),r=o.n(c),i=(o(61),o(30)),l=o(13),d=o(12),s=o(16),u=o(103),m=(o(41),function(e){var t=e.add_todo,o={todo:""},c=Object(a.useState)(o),r=Object(s.a)(c,2),i=r[0],m=r[1];return n.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault(),t(i.todo),m(o)}},n.a.createElement("div",null,n.a.createElement(u.a,{id:"id",label:"Todo",variant:"standard",name:"todo",value:i.todo,onChange:function(e){var t=e.target,o=t.name,a=t.value;m((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(l.a)({},o,a))}))}})))}),O=o(106),E=o(99),f=o(107),b=o(100),v=o(101),g=function(e){var t=e.todo,o=e.remove_todo,a=e.toggle_todo,c=t.id,r=t.activity,i=t.complete?{textDecoration:"line-through"}:{textDecoration:"none"};return n.a.createElement(n.a.Fragment,null,n.a.createElement(E.a,{dense:!0,button:!0,onClick:function(){a(t)}},n.a.createElement(f.a,{style:i,primary:r}),n.a.createElement(b.a,{onClick:function(){o(c)}},n.a.createElement(v.a,null,n.a.createElement("span",{className:"material-icons","aria-label":"remove todo"},"close")))))},j=o(102),_=o(105),p=o(97),w=o(98),h=function(){var e=Object(i.c)((function(e){return e.todos})),t=Object(i.b)(),o=Object(O.a)(),a=function(e){t({type:"TOGGLE_TODO",todo:e})},c=function(e){t({type:"REMOVE_TODO",id:e})};return n.a.createElement(n.a.Fragment,null,n.a.createElement(j.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},n.a.createElement(_.a,{className:"todo-list",m:3},n.a.createElement("header",null,n.a.createElement("h1",null,"Redux Todo List")),n.a.createElement("section",{className:"form-section"},n.a.createElement(m,{add_todo:function(e){t({type:"ADD_TODO",todo:{id:o,activity:e,complete:!1}})}})),e.length>0&&n.a.createElement(p.a,{elevation:4,m:3},n.a.createElement("section",{className:"todo-section"},n.a.createElement(w.a,null,e.map((function(e){return n.a.createElement(g,{key:Object(O.a)(),todo:e,remove_todo:c,toggle_todo:a})}))))))))};o(67);var D=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,null))},y=o(11),S={todos:JSON.parse(window.localStorage.getItem("todos"))||[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return window.localStorage.setItem("todos",JSON.stringify([].concat(Object(y.a)(e.todos),[Object(d.a)({},t.todo)]))),Object(d.a)(Object(d.a)({},e),{},{todos:[].concat(Object(y.a)(e.todos),[Object(d.a)({},t.todo)])});case"REMOVE_TODO":return window.localStorage.setItem("todos",JSON.stringify(e.todos.filter((function(e){return e.id!==t.id})))),Object(d.a)(Object(d.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.id}))});case"TOGGLE_TODO":var o=t.todo;o.complete=!o.complete;var a=e.todos.filter((function(e){return e.id!==o.id}));return window.localStorage.setItem("todos",JSON.stringify([].concat(Object(y.a)(a),[Object(d.a)({},o)]))),Object(d.a)(Object(d.a)({},e),{},{todos:[].concat(Object(y.a)(a),[Object(d.a)({},o)])});default:return e}},N=o(32);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=Object(N.b)(T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.a,{store:I},n.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.5dc83f89.chunk.js.map