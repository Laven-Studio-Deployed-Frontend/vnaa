"use strict";(self.webpackChunkexam=self.webpackChunkexam||[]).push([[168],{801:function(e,n,t){t.d(n,{Z:function(){return u}});var l=t(678),s=t(1006),a=t(2641),r=t(187),i=t(2791),c=t(184),o=[{title:"K\xec",dataIndex:"periodically",key:"periodically"},{title:"S\u1ed1 ti\u1ec1n",dataIndex:"AmountOfMoney",key:"AmountOfMoney"},{title:"Ng\xe0y \u0111\xf3ng",dataIndex:"ClosingDate",key:"ClosingDate"}];function u(e){var n=e.open,t=e.setOpen,u=e.totalTerm,d=e.loan,f=e.interestRate,x=i.useState([]),h=(0,l.Z)(x,2),m=h[0],p=h[1];function v(e){return(e=Math.round(1e3*e)/1e3).toFixed(0).replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",")}function j(e){return"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear())}return(0,i.useEffect)((function(){!function(e,n,t){for(var l=n/e,s=n*t/100,a=[],r=1;r<=e;r++){var i=new Date;i.setMonth(i.getMonth()+r);var c=0;c=1===r?l+s:l+(n-(r-1)*l)*t/100,a.push({key:r,periodically:"K\xec th\u1ee9 ".concat(r),AmountOfMoney:v(c),ClosingDate:j(i)})}p(a)}(u,d,f)}),[n]),console.log(u,d,f),(0,c.jsx)(s.Z,{open:n,onCancel:function(){return t(!1)},footer:[(0,c.jsx)(a.ZP,{onClick:function(){return t(!1)},children:"\u0110\xf3ng"},"close")],children:(0,c.jsx)(r.Z,{dataSource:m,columns:o})})}},4914:function(e,n,t){t.d(n,{C:function(){return a},T:function(){return s}});var l=t(9434),s=function(){return(0,l.I0)()},a=l.v9},118:function(e,n,t){t.d(n,{PV:function(){return l.PV},Pl:function(){return l.Pl},V4:function(){return l.V4},eU:function(){return l.eU},g4:function(){return l.g4},ie:function(){return l.ie},me:function(){return l.me},oh:function(){return l.oh},pf:function(){return l.pf}});var l=t(5594)},1168:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var l=t(7166),s=t(3032),a=t(678),r=t(8597),i=t(1773),c=t(6254),o=t(2481),u=t(2791),d=t(3539),f=t(801),x=t(8680),h=t(4914),m=t(118),p=t(7272),v=t(184);function j(){var e=(0,u.useState)(5e7),n=(0,a.Z)(e,2),t=n[0],j=n[1],g=(0,u.useState)(24),w=(0,a.Z)(g,2),b=w[0],y=w[1],N=(0,u.useState)(.9),Z=(0,a.Z)(N,2),k=Z[0],C=(Z[1],(0,u.useState)(null)),M=(0,a.Z)(C,2),S=M[0],T=M[1],D=(0,u.useState)(!1),V=(0,a.Z)(D,2),P=V[0],A=V[1],I=(0,u.useState)(0),O=(0,a.Z)(I,2),B=O[0],F=O[1],R=new Date,U=R.getDate(),E=R.getMonth()+1,K=R.getFullYear(),L=(0,h.T)(),Y=(0,h.C)((function(e){return e.auth.uid}));function H(e){return(e=Math.round(1e3*e)/1e3).toFixed(0).replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",")}var J=function(){var e=(0,s.Z)((0,l.Z)().mark((function e(){var n,t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,o.JU)(x.db,"users",Y),e.next=3,(0,o.QT)(n);case 3:(t=e.sent).exists()?T(t.data()):console.log("No such document!");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){F(t/b+t*(.9/100))}),[t,b]);var Q=function(){var e=(0,s.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==S&&void 0!==S&&S.address&&null!==S&&void 0!==S&&S.cmnd&&null!==S&&void 0!==S&&S.dateOfBirth&&null!==S&&void 0!==S&&S.fullName&&null!==S&&void 0!==S&&S.genre&&null!==S&&void 0!==S&&S.income&&null!==S&&void 0!==S&&S.job&&null!==S&&void 0!==S&&S.phoneNumber&&null!==S&&void 0!==S&&S.purpose&&null!==S&&void 0!==S&&S.relationship&&null!==S&&void 0!==S&&S.nameAccount&&null!==S&&void 0!==S&&S.nameBank&&null!==S&&void 0!==S&&S.numberBank&&null!==S&&void 0!==S&&S.image&&null!==S&&void 0!==S&&S.photoURL?(L((0,m.PV)({uid:Y,loanAmount:t,loanMonth:b,loanInterestRate:k})),p.Z.push("/payment/debit-confirm")):(L((0,m.PV)({uid:Y,loanAmount:t,loanMonth:b,loanInterestRate:k})),p.Z.push("/user/accuracy"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){J()}),[]),(0,v.jsxs)("div",{className:" flex flex-col gap-4 items-center",children:[(0,v.jsxs)("div",{className:"debit-card-color px-4 py-8 flex w-full flex-col gap-4",children:[(0,v.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,v.jsxs)("div",{className:"flex flex-col gap-4 w-full",children:[(0,v.jsx)("label",{htmlFor:"",className:"font-bold text-white",children:"S\u1ed1 ti\u1ec1n vay"}),(0,v.jsx)(r.Z,{className:"w-full text-base p-1",min:2e7,max:5e8,defaultValue:t,onChange:function(e){null!==e&&j(e)}})]}),(0,v.jsxs)("div",{className:"w-full justify-between items-center flex",children:[(0,v.jsx)("p",{children:"T\u1eeb 20 tri\u1ec7u"}),(0,v.jsx)("p",{children:"\u0110\u1ebfn 500.000.000"})]})]}),(0,v.jsx)("div",{className:"w-full flex justify-center",children:(0,v.jsxs)("div",{className:"w-full justify-between max-w-[28rem] items-center flex",children:[(0,v.jsx)("p",{className:"font-bold",children:"Ch\u1ecdn th\u1eddi h\u1ea1n vay"}),(0,v.jsx)("div",{children:(0,v.jsx)(i.Z,{wrap:!0,className:"bg-white text-lg",children:(0,v.jsx)(c.Z,{defaultValue:b,style:{width:150},onChange:function(e){return y(e)},bordered:!1,options:[{value:6,label:"6 th\xe1ng"},{value:12,label:"12 th\xe1ng"},{value:24,label:"24 th\xe1ng"},{value:36,label:"36 th\xe1ng"},{value:48,label:"48 th\xe1ng"},{value:60,label:"60 th\xe1ng"}]})})})]})})]}),(0,v.jsxs)("div",{className:"flex flex-col gap-4 items-center w-full px-4",children:[(0,v.jsxs)("div",{className:"flex flex-col items-center debit-card-color w-full shadow-sd-tertiary gap-2 max-w-[320px] p-4 rounded-xl",children:[(0,v.jsx)("h1",{className:"font-bold text-white text-lg",children:"Th\xf4ng tin kho\u1ea3n vay"}),(0,v.jsxs)("div",{className:"w-full justify-between flex items-center",children:[(0,v.jsx)("p",{className:"font-bold text-sm",children:"S\u1ed1 ti\u1ec1n"}),(0,v.jsxs)("span",{className:"text-sm",children:[H(t)," \u0111"]})]}),(0,v.jsxs)("div",{className:"w-full justify-between flex items-center",children:[(0,v.jsx)("p",{className:"font-bold text-sm",children:"Th\u1eddi h\u1ea1n vay"}),(0,v.jsxs)("span",{className:"text-sm",children:[b," th\xe1ng"]})]}),(0,v.jsxs)("div",{className:"w-full justify-between flex items-center",children:[(0,v.jsx)("p",{className:"font-bold text-sm",children:"Ng\xe0y vay"}),(0,v.jsxs)("span",{className:"text-sm",children:[U,"/",E,"/",K]})]}),(0,v.jsxs)("div",{className:"w-full justify-between flex items-center",children:[(0,v.jsx)("p",{className:"font-bold text-sm",children:"H\xecnh th\u1ee9c thanh to\xe1n"}),(0,v.jsx)("span",{className:"text-sm",children:"Tr\u1ea3 g\xf3p m\u1ed7i th\xe1ng"})]})]}),(0,v.jsxs)("div",{className:"w-full flex flex-col gap-4 ",children:[(0,v.jsxs)("div",{className:"w-full justify-between flex items-center max-w-[24rem]",children:[(0,v.jsx)("p",{className:"font-bold text-sm text-gray-700",children:"Tr\u1ea3 n\u1ee3 k\xec \u0111\u1ea7u"}),(0,v.jsxs)("span",{className:"text-lg",children:[H(B)," \u0111"]})]}),(0,v.jsxs)("div",{className:"w-full justify-between flex items-center max-w-[24rem]",children:[(0,v.jsx)("p",{className:"font-bold text-sm text-gray-700",children:"L\xe3i su\u1ea5t h\xe0ng th\xe1ng"}),(0,v.jsxs)("span",{className:"text-lg",children:[k," %"]})]}),(0,v.jsx)("div",{className:"w-full justify-between flex items-center max-w-[24rem]",children:(0,v.jsx)(d.Z,{className:"text-sm font-semibold text-blue-500",onClick:function(){return A(!0)},children:"Chi ti\u1ebft tr\u1ea3 n\u1ee3"})})]})]}),(0,v.jsx)(d.Z,{kind:"tertiary",className:"text-xl font-medium rounded-full py-4 px-8 bg-primary border-2 duration-150 hover:bg-white hover:border-primary hover:text-primary",onClick:function(){return Q()},children:"X\xe1c nh\u1eadn kho\u1ea3n vay"}),P&&(0,v.jsx)(f.Z,{open:P,setOpen:A,interestRate:k,loan:t,totalTerm:b})]})}}}]);
//# sourceMappingURL=168.3e2af5d3.chunk.js.map