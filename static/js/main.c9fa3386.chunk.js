(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{31:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var c=a(22),n=a(17),r=a(2),i=a(4),l=a(0);a(31);function s(e,t){for(var a=[],c=e;c<=t;c+=1)a.push(c);return a}var o=a(20),g=a.n(o),p=a(5),u=function(e){var t=e.total,a=e.perPage,c=e.currentPage,n=e.onPageChange,r=Math.ceil(t/a),i=1===c,l=c===r,o=s(1,r);return Object(p.jsxs)("ul",{className:"pagination",children:[Object(p.jsx)("li",{className:g()("page-item",{disabled:i}),children:Object(p.jsx)("button",{"data-cy":"prevLink","aria-disabled":i,type:"button",className:"page-link",onClick:function(){return n(c-1)},children:"\xab"})}),o.map((function(e){return Object(p.jsx)("li",{className:g()("page-item",{active:e===c}),children:Object(p.jsx)("button",{"data-cy":"pageLink",type:"button",className:"page-link",onClick:function(){return n(e)},children:e})},e)})),Object(p.jsx)("li",{className:g()("page-item",{disabled:l}),children:Object(p.jsx)("button",{"data-cy":"nextLink","aria-disabled":l,type:"button",className:"page-link",onClick:function(){return n(c+1)},children:"\xbb"})})]})},b=s(1,42).map((function(e){return"Item ".concat(e)})),j=[3,5,10,20],d={page:"1",perPage:String(j[1])},m=function(){var e=Object(n.b)(d),t=Object(i.a)(e,2),a=t[0],c=t[1],r=b.length,s=Number(a.get("page")),o=Number(a.get("perPage")),g=Math.ceil(r/o),m=s*o-o,h=s===g?r:s*o,O=b.slice(m,h);Object(l.useEffect)((function(){s<1&&a.set("page",d.page),s>g&&a.set("page","".concat(g)),0!==o&&j.includes(o)||a.set("perPage",d.perPage),c(a)}),[a]);return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{children:"Items with Pagination"}),Object(p.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(m+1," - ").concat(h," of ").concat(r,")")}),Object(p.jsxs)("div",{className:"form-group row",children:[Object(p.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(p.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:o,onChange:function(e){a.set("perPage",e.target.value),a.set("page",d.page),c(a)},children:j.map((function(e){return Object(p.jsx)("option",{value:e,children:e},e)}))})}),Object(p.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(p.jsx)(u,{total:r,perPage:Number(a.get("perPage")),currentPage:Number(a.get("page")),onPageChange:function(e){e!==s&&(a.set("page",String(e)),c(a))}}),Object(p.jsx)("ul",{children:O.map((function(e){return Object(p.jsx)("li",{"data-cy":"item",children:e},e)}))})]})},h=Object(n.a)([{path:"/",element:Object(p.jsx)(m,{})}]),O=document.getElementById("root");Object(c.createRoot)(O).render(Object(p.jsx)(r.b,{router:h}))}},[[34,1,2]]]);
//# sourceMappingURL=main.c9fa3386.chunk.js.map