(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{57:function(e,n,t){e.exports=t(70)},62:function(e,n,t){},70:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(10),l=t.n(o),u=(t(62),t(52)),c=t(15),i=t(16),d=t(26),m=function(e,n){switch(n.type){case"ADD_BOOK":case"GET_BOOK":case"DELETE_BOOK":return Object(d.a)({},e,{currentBook:n.payload});case"ADD_OPERATION":return Object(d.a)({},e,{operation:n.payload});default:return e}},s={currentBook:{bookId:"",name:"",genre:"",authorId:""},operation:""},b=Object(a.createContext)(s),O=function(e){var n=e.children,t=Object(a.useReducer)(m,s),o=Object(i.a)(t,2),l=o[0],u=o[1];return r.a.createElement(b.Provider,{value:[l,u]},n)},E=t(20),f=t(34),k=t(23),g=t.n(k);function h(){var e=Object(f.a)(["\n  mutation ($id: ID!){\n    deleteBook(id: $id){\n      name\n      id\n    }\n  }\n"]);return h=function(){return e},e}function v(){var e=Object(f.a)(["\nquery($id: ID!) {\n  book(id: $id) {\n    id\n    name\n    genre\n    author {\n      id\n      name\n      age\n      books{\n        id\n        name\n      }\n    }\n  }\n}\n"]);return v=function(){return e},e}function p(){var e=Object(f.a)(["\nmutation($name: String!, $genre: String!, $authorId: ID!) {\n  addBook(name: $name, genre: $genre, authorId: $authorId) {\n    name\n    id\n  }\n}\n"]);return p=function(){return e},e}function j(){var e=Object(f.a)(["\n{\n  authors {\n    name\n    id\n  }\n}\n"]);return j=function(){return e},e}function B(){var e=Object(f.a)(["\n{\n  books {\n    name\n    id\n  }\n}\n"]);return B=function(){return e},e}var I=g()(B()),y=g()(j()),D=g()(p()),A=g()(v()),T=g()(h()),C=function(e){var n=e.bookId,t=Object(a.useState)(!1),o=Object(i.a)(t,2),l=o[0],u=o[1],c=Object(a.useContext)(b),d=Object(i.a)(c,2),m=(d[0],d[1]),s=Object(E.a)(A,{variables:{id:n}}),O=Object(i.a)(s,2),f=O[0],k=O[1],g=k.loading,h=k.error,v=k.data,p=Object(E.b)(T),j=Object(i.a)(p,1)[0];if(Object(a.useEffect)((function(){n&&f({variables:{id:n}}),n&&function(e,n){n({type:"GET_BOOK",payload:{bookId:e}}),n({type:"ADD_OPERATION",payload:"getBookQuery"})}(n,m),u(!1)}),[u,n,f]),g)return"Loading...";if(h)return"BookList Error! ".concat(h.message);return r.a.createElement("div",{id:"right-side"},r.a.createElement("div",{id:"book-details"},function(){if(v&&!l){var e=v.book,n=e.author,t=n.books.map((function(e){return r.a.createElement("li",{key:e.id},e.name)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,'Title: "',e.name,'"'),r.a.createElement("p",null,r.a.createElement("i",null,e.genre)),r.a.createElement("p",null,"Author: ",n.name),r.a.createElement("p",null,"All books by this author:"),r.a.createElement("ul",null,t),r.a.createElement("button",{id:"delete-book-button",onClick:function(){return n=e.id,u(!0),function(e,n){n({type:"DELETE_BOOK",payload:{bookId:e}}),n({type:"ADD_OPERATION",payload:"deleteBookMutation"})}(n,m),void j({variables:{id:n},refetchQueries:[{query:I}]});var n}},"DELETE BOOK"))}return r.a.createElement("h2",null,"No book selected")}()))},L=function(){var e=Object(a.useState)(null),n=Object(i.a)(e,2),t=n[0],o=n[1],l=Object(a.useContext)(b),u=Object(i.a)(l,2),c=u[0],d=(u[1],Object(E.c)(I)),m=d.loading,s=d.error,O=d.data;if(m)return"Loading...";if(s)return"BookList Error! ".concat(s.message);console.log("BookList state",c);var f=O.books.map((function(e){return r.a.createElement("li",{key:e.id,onClick:function(){return o(e.id)}},e.name)}));return r.a.createElement("div",null,r.a.createElement("ul",{id:"book-list"},f),r.a.createElement(C,{bookId:t}))},$=t(39),_=t(100),x=t(104),K=t(105),S=Object(_.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:250}}}})),w=function(){var e=S(),n=Object(a.useContext)(b),t=Object(i.a)(n,2),o=t[0],l=t[1],u=Object(a.useState)({name:"",genre:"",authorId:""}),c=Object(i.a)(u,2),m=c[0],s=c[1],O=Object(E.c)(y),f=O.loading,k=O.error,g=O.data,h=Object(E.b)(D),v=Object(i.a)(h,1)[0];if(f)return r.a.createElement("option",{disabled:!0},"'Loading...'");if(k)return"AddBook Error! ".concat(k.message);var p=function(e){s(Object(d.a)({},m,Object($.a)({},e.target.name,e.target.value)))};console.log("AddBook State",o),console.log("AddBook local State",m);var j=g.authors.map((function(e){return r.a.createElement(K.a,{key:e.id,value:e.id},e.name)}));return r.a.createElement("form",{className:e.root,onSubmit:function(e){e.preventDefault(),function(e,n){n({type:"ADD_BOOK",payload:{name:e.name,genre:e.genre,authorId:e.authorId}}),n({type:"ADD_OPERATION",payload:"addBookMutation"})}(m,l),v({variables:{name:m.name,genre:m.genre,authorId:m.authorId},refetchQueries:[{query:I}]}),s({name:"",genre:"",authorId:""})}},r.a.createElement("div",{id:"form-fields"},r.a.createElement(x.a,{variant:"outlined",size:"small",label:"Title",id:"standard-size-small",name:"name",onChange:p,value:m.name}),r.a.createElement(x.a,{variant:"outlined",size:"small",label:"Genre",id:"standard-size-small",name:"genre",onChange:p,value:m.genre}),r.a.createElement(x.a,{select:!0,variant:"outlined",size:"small",label:"Author",id:"standard-size-small",name:"authorId",onChange:p,value:m.authorId},j)),r.a.createElement("button",null,"ADD BOOK"))},z=function(){var e=Object(a.useContext)(b),n=Object(i.a)(e,1)[0],t=n.currentBook,o=n.operation;console.log("Console state",n);return r.a.createElement("div",{id:"console-data"},r.a.createElement("h2",null,"GraphQL operation executed:"),function(){if(o){var e=function(e,n){var t={addBook:"\n  mutation {\n    addBook(name: ".concat(e.name,", genre: ").concat(e.genre,", authorId: ").concat(e.authorId,") {\n      name\n      id\n    }\n  }\n  "),getBook:"\n  query {\n    book(id: ".concat(e.bookId,") {\n      id\n      name\n      genre\n      author {\n        id\n        name\n        age\n        books{\n          id\n          name\n        }\n      }\n    }\n  }\n  "),deleteBook:"\n  mutation {\n    deleteBook(id: ".concat(e.bookId,"){\n      name\n      id\n    }\n  }\n")};switch(n){case"addBookMutation":return t.addBook;case"getBookQuery":return t.getBook;case"deleteBookMutation":return t.deleteBook;default:return null}}(t,o);return r.a.createElement("div",null,r.a.createElement("pre",null,e))}return null}())},N=new u.a({uri:"http://localhost:4000/graphql"}),P=function(){return r.a.createElement(c.a,{client:N},r.a.createElement(O,null,r.a.createElement("div",{id:"main"},r.a.createElement("h1",null,"GraphQL Playground"),r.a.createElement(L,null),r.a.createElement(w,null)),r.a.createElement("div",{id:"console"},r.a.createElement(z,null))))};l.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.83faf294.chunk.js.map