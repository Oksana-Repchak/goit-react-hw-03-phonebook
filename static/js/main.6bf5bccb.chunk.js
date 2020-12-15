(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={list:"ContactList_list__1kENb",item:"ContactList_item__1FKYt",text:"ContactList_text__2g2kx",button:"ContactList_button__qNlHF"}},13:function(t,e,n){t.exports={sectionContainer:"Section_sectionContainer__3MVtU",title:"Section_title__n3Vfs"}},16:function(t,e,n){t.exports={IconButton:"IconButton_IconButton__lJ2ts"}},2:function(t,e,n){t.exports={form:"ContactForm_form__3l2l6",formItem:"ContactForm_formItem__2RDSz",input:"ContactForm_input__2b2IK",button:"ContactForm_button__36y0c"}},24:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(14),i=n.n(o),l=(n(24),n(17)),s=n(4),u=n(5),m=n(8),b=n(7),h=n(15),d=n.n(h),f=n(6),j=n(2),p=n.n(j),v=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.contactValidation=function(){var e=t.state,n=e.name,a=e.number;return t.props.contacts.find((function(t){return n===t.name}))?(alert("".concat(n," is already in contacts")),!0):""===n||""===a?(alert("Please enter all data"),!0):void 0},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.contactValidation()||(t.props.onSubmit(a,c),t.reset())},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.form,children:[Object(a.jsxs)("label",{className:p.a.formItem,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,placeholder:"\u0421ontact name",onChange:this.handleChange,className:p.a.input})]}),Object(a.jsxs)("label",{className:p.a.formItem,children:["Number",Object(a.jsx)("input",{type:"tel",name:"number",value:this.state.number,placeholder:"\u0421ontact number",onChange:this.handleChange,className:p.a.input})]}),Object(a.jsx)("button",{type:"submit",className:p.a.button,children:"Add contact"})]})}}]),n}(c.Component),O=n(9),_=n.n(O);function x(t){var e=t.value,n=t.onChange;return Object(a.jsx)("div",{className:_.a.container,children:Object(a.jsxs)("label",{className:_.a.label,children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:e,onChange:n,className:_.a.input})]})})}var C=n(12),g=n(18),y=n(16),S=n.n(y),N=function(t){var e=t.children,n=t.onClick,c=Object(g.a)(t,["children","onClick"]);return Object(a.jsx)("button",Object(C.a)(Object(C.a)({type:"button",className:S.a.IconButton,onClick:n},c),{},{children:e}))};N.defaultProps={onClick:function(){return null},children:null};var k=N;function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function I(t,e){if(null==t)return{};var n,a,c=function(t,e){if(null==t)return{};var n,a,c={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}var F=c.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),E=c.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"});function B(t,e){var n=t.title,a=t.titleId,r=I(t,["title","titleId"]);return c.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,F,E)}var D=c.forwardRef(B),L=(n.p,n(10)),M=n.n(L);function P(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:M.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:M.a.item,children:[Object(a.jsxs)("p",{className:M.a.text,children:[c,": ",r]}),Object(a.jsx)(k,{onClick:function(){return n(e)},children:Object(a.jsx)(D,{width:"24",height:"24",fill:"#fff"})})]},e)}))})}var V=n(13),H=n.n(V);var J=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("div",{className:H.a.sectionContainer,children:[Object(a.jsx)("h2",{className:H.a.title,children:e}),n]})},z=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:d.a.generate(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(l.a)(e))}}))},t.makeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.visibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,c=this.visibleContacts();return Object(a.jsxs)("div",{children:[Object(a.jsx)(J,{title:"Phonebook",children:Object(a.jsx)(v,{onSubmit:this.addContact,contacts:n})}),Object(a.jsxs)(J,{title:"Contacts",children:[Object(a.jsx)(x,{value:e,onChange:this.makeFilter}),Object(a.jsx)(P,{contacts:c,onDeleteContact:this.deleteContact})]})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(z,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={container:"Filter_container__Wkh5w",label:"Filter_label__3Tny-",input:"Filter_input__3QCRI"}}},[[33,1,2]]]);
//# sourceMappingURL=main.6bf5bccb.chunk.js.map