(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__3l2l6",input:"ContactForm_input__2b2IK",button:"ContactForm_button__36y0c"}},28:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(10),i=n.n(r),s=(n(19),n(13)),u=n(5),l=n(6),b=n(8),m=n(7),d=n(11),h=n.n(d),j=n(12),f=n(2),p=n.n(f),v=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.contactValidation=function(){var e=t.state,n=e.name,a=e.number;return t.props.contacts.find((function(t){return n===t.name}))?(alert("".concat(n," is already in contacts")),!0):""===n||""===a?(alert("Please enter all data"),!0):void 0},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.contactValidation()||(t.props.onSubmit(a,c),t.reset())},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.form,children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,placeholder:"\u0421ontact name",onChange:this.handleChange,className:p.a.input})]}),Object(a.jsxs)("label",{className:p.a.label,children:["Number",Object(a.jsx)("input",{type:"tel",name:"number",value:this.state.number,placeholder:"\u0421ontact number",onChange:this.handleChange,className:p.a.input})]}),Object(a.jsx)("button",{type:"submit",className:p.a.button,children:"Add contact"})]})}}]),n}(c.Component);function C(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:e,onChange:n})]})}var O=n(3),x=n.n(O);function _(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:x.a.list,children:e.map((function(t){var e=t.id,c=t.name,o=t.number;return Object(a.jsxs)("li",{className:x.a.item,children:[Object(a.jsxs)("p",{className:x.a.text,children:[c,": ",o]}),Object(a.jsx)("button",{type:"button",onClick:function(){return n(e)},className:x.a.button,children:"Delete"})]},e)}))})}var g=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:h.a.generate(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(s.a)(e))}}))},t.makeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.visibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,c=this.visibleContacts();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(v,{onSubmit:this.addContact,contacts:n}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(C,{value:e,onChange:this.makeFilter}),Object(a.jsx)(_,{contacts:c,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={list:"ContactList_list__1kENb",item:"ContactList_item__1FKYt",text:"ContactList_text__2g2kx",button:"ContactList_button__qNlHF"}}},[[28,1,2]]]);
//# sourceMappingURL=main.516137fb.chunk.js.map