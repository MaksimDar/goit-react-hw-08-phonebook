"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[718],{6718:function(e,n,r){r.r(n),r.d(n,{default:function(){return L}});var t=r(2791),a=r(5048),i=r(865),o=r(8096),s=r(1634),c=r(184);function u(){var e=(0,a.I0)(),n=(0,t.useCallback)((function(n){var r=n.currentTarget.value;e((0,s.sP)(r.toLowerCase()))}),[e]);return(0,c.jsx)(o.Z,{sx:{minWidth:"350px",maxWidth:"500px",gap:"10px",margin:"0 auto"},children:(0,c.jsx)(i.Z,{id:"outlined-basic",label:"Filter",variant:"outlined",type:"search",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:n})})}var l=t.memo(u),d=r(1582),h=r(493),m=r(5861),x=r(9439),p=r(4687),f=r.n(p),j=r(4852),Z=r(3400),v=r(653),b=r(3044),g=r(6259),y=r(7),w=r(7247),k=r(5504),C=r(8989),X=function(e){var n=e.name,r=e.id,t=e.phone,a=(0,C.Nt)(),i=(0,x.Z)(a,1)[0],o=function(){var e=(0,m.Z)(f().mark((function e(n){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(j.ZP,{secondaryAction:(0,c.jsx)(Z.Z,{edge:"end","aria-label":"delete",onClick:function(){return o(r)},color:"error",children:(0,c.jsx)(w.Z,{})}),children:[(0,c.jsx)(v.Z,{children:(0,c.jsx)(b.Z,{size:"small",sx:{bgcolor:y.Z[500]},children:(0,c.jsx)(k.Z,{})})}),(0,c.jsx)(g.Z,{primary:n,secondary:t})]},r)})},P={boxShadow:1,borderRadius:2,border:"1px solid lightgray",p:2,minWidth:350,maxWidth:500,alignItems:"center",padding:0},W=function(e){var n=e.contacts;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d.Z,{direction:"column",justifyContent:"flex-start",alignItems:"center",children:(0,c.jsx)(h.Z,{sx:P,"aria-label":"contacts",children:n.map((function(e){var n=e.name,r=e.number,t=e.id;return(0,c.jsx)(X,{name:n,id:t,phone:r},t)}))})})})},_=r(890),z=r(6151),A=r(5705),F=r(6727),N=F.Ry().shape({name:F.Z_().required("Name is required"),phone:F.Z_().matches(/^\+380\d{9}$/,"Phone number must be a valid Ukrainian phone number").required("Phone number is required")});function q(){var e=(0,C.Tn)(),n=(0,x.Z)(e,1)[0],r=function(){var e=(0,m.Z)(f().mark((function e(r,t){var a,i;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.resetForm,i={name:r.name,number:r.phone},e.next=4,n(i).unwrap();case 4:a();case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}();return(0,c.jsx)(A.J9,{initialValues:{name:"",phone:""},onSubmit:r,validationSchema:N,children:function(e){var n=e.errors,r=e.touched;return(0,c.jsx)(A.l0,{children:(0,c.jsxs)(o.Z,{noValidate:!0,autoComplete:"off",sx:{minWidth:"350px",maxWidth:"500px",gap:"10px",margin:"0 auto"},children:[(0,c.jsx)(A.gN,{as:i.Z,id:"outlined-search",label:"Full Name",name:"name",type:"text",error:r.name&&!!n.name,helperText:r.name&&n.name}),(0,c.jsx)(A.gN,{as:i.Z,id:"outlined-search",label:"Phone",name:"phone",type:"tel",error:r.phone&&!!n.phone,helperText:r.phone&&n.phone}),(0,c.jsx)(_.Z,{variant:"caption",color:"text.secondary",children:"Phone number must be a valid Ukrainian phone number (+380XXXXXXXXX)"}),(0,c.jsx)(z.Z,{variant:"contained",size:"small",type:"submit",children:"Add contact"})]})})}})}var T=r(4554),I=r(3239),L=t.memo((function(){var e=(0,C.wY)(),n=e.data,r=void 0===n?[]:n,i=e.error,o=e.isLoading,s=(0,a.v9)((function(e){return e.filter})),u=(0,t.useMemo)((function(){return function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(r,s)}),[r,s]);return(0,c.jsxs)("div",{children:[(0,c.jsx)(q,{}),o&&!i&&(0,c.jsx)(T.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,c.jsx)(I.Z,{})}),!o&&i&&(0,c.jsx)("div",{children:"Error"}),!o&&(u.length>1||""!==s?(0,c.jsx)(l,{}):null),!o&&u.length>0&&(0,c.jsx)(W,{contacts:u})]})}))}}]);
//# sourceMappingURL=718.2ef61678.chunk.js.map