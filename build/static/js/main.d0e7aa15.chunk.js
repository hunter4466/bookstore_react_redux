(this.webpackJsonpmakitappbeta=this.webpackJsonpmakitappbeta||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(5),o=n.n(r),i=(n(15),n(16),n(17),n(18),n(4)),s=n.n(i),u=n(6),l=n(7),d=n(8),h=n(2),b=n(10),f=n(9),j=n(0),p=function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).callBackendAPI=Object(u.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/getData");case 2:return e=t.sent,t.next=5,e.json();case 5:if(n=t.sent,200===e.status){t.next=8;break}throw Error(n.message);case 8:return console.log(n),t.abrupt("return",n);case 10:case"end":return t.stop()}}),t)}))),a.state={data:null},a.componentDidMount=a.componentDidMount.bind(Object(h.a)(a)),a.callBackendAPI=a.callBackendAPI.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.callBackendAPI().then((function(e){return t.setState({data:e.data})}))}},{key:"render",value:function(){var t=this.state;return Object(j.jsxs)("div",{className:"hello",children:[Object(j.jsx)("h1",{children:"hello world"}),Object(j.jsx)("h1",{children:t.data})]})}}]),n}(a.Component),k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),k()}},[[21,1,2]]]);
//# sourceMappingURL=main.d0e7aa15.chunk.js.map