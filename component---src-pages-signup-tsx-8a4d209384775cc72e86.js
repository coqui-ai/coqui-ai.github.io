(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{smJ5:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("1Yd/"),i=a("O9mE"),c=a("vOnD"),s=a("8ujH"),o=a.n(s),u=a("wMS7"),m=a.n(u),d=a("cr+I"),p=a.n(d),f=a("YwZP"),g=a("l9Xu"),b=a("ENkJ"),h=function(e){var t=e.status,a=e.message,l=e.onSubmitted,i=Object(n.useRef)(),c=Object(n.useRef)(),s=Object(n.useRef)(),o=Object(n.useRef)(),u=Object(f.useLocation)(),d=p.a.parse(u.search).tags,h=function(e){return"0 - Please enter a value"===e?"Please enter your email address":"1 - Please enter a value"===e?"Please enter your first name":"2 - Please enter a value"===e?"Please enter your last name":"5 - Please enter a value"===e?"Please enter your organization":e};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l({FNAME:i.current.value,LNAME:c.current.value,ORG:s.current.value,EMAIL:o.current.value,tags:d,b_6faea2f1f19c814566173ffb0_36493a0abf:""})}},r.a.createElement(b.b,null,"First Name",r.a.createElement(g.a,{content:"Required field"},r.a.createElement("sup",null,"*"))),r.a.createElement(b.a,{type:"text",name:"FNAME",id:"mce-FNAME",ref:i,placeholder:"John",wrapperProps:{style:{overflow:"visible"}}}),r.a.createElement(b.b,null,"Last Name",r.a.createElement(g.a,{content:"Required field"},r.a.createElement("sup",null,"*"))),r.a.createElement(b.a,{type:"text",name:"LNAME",id:"mce-LNAME",ref:c,placeholder:"Doe",wrapperProps:{style:{overflow:"visible"}}}),r.a.createElement(b.b,null,"Organization",r.a.createElement(g.a,{content:"Required field"},r.a.createElement("sup",null,"*"))),r.a.createElement(b.a,{type:"text",name:"ORG",id:"mce-ORG",ref:s,placeholder:"Organization",wrapperProps:{style:{overflow:"visible"}}}),r.a.createElement(b.b,null,"Email",r.a.createElement(g.a,{content:"Required field"},r.a.createElement("sup",null,"*"))),r.a.createElement(b.a,{type:"email",name:"EMAIL",id:"mce-EMAIL",placeholder:"jdoe@organization.com",ref:o,wrapperProps:{style:{overflow:"visible"}}}),r.a.createElement(b.b,null),r.a.createElement(b.a,{type:"submit",value:"Subscribe"}),"sending"===t&&r.a.createElement(b.d,{validation:"success"},"Sending..."),"error"===t&&r.a.createElement(b.d,{validation:"error"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:h(m.a.sanitize(a))}})," "),"success"===t&&r.a.createElement(b.d,{validation:"success"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:h(m.a.sanitize(a))}})," ")))},E=a("L+h+"),v=a.n(E),y={status:null,message:null,ajaxURL:null},w=function(e){var t=Object(n.useState)(y),a=t[0],l=t[1];return Object(n.useEffect)((function(){a.ajaxURL&&o()(a.ajaxURL,{param:"c"},(function(e,t){e?l({status:"error",message:e}):"success"!==t.result?l({status:"error",message:t.msg}):l({status:"success",message:t.msg})}))}),[a.ajaxURL]),r.a.createElement(h,{status:a.status,message:a.message,onSubmitted:function(t){return function(t){var a=v()(t),n=e.url.replace("/post?","/post-json?")+"&"+a;l({status:"sending",message:null,ajaxURL:n})}(t)}})},j=c.e.div.withConfig({displayName:"SignUpWidth__SignUpWidthLayout",componentId:"t966y8-0"})(["margin-right:auto;margin-left:auto;max-width:600px;"]),O=a("A0PP"),S=a("62CP"),x=a("ZIlX"),_=a("Jyyn"),L=Object(c.e)(j).withConfig({displayName:"SignUp___StyledSignUpWidthLayout",componentId:"rcv3vm-0"})(["padding-top:","px;padding-bottom:","px;","{padding-top:","px;padding-bottom:","px;}","{padding-top:","px;padding-bottom:","px;}"],(function(e){return 50*e.theme.space.base}),(function(e){return 60*e.theme.space.base}),(function(e){return Object(O.mediaQuery)("down","md",e.theme)}),(function(e){return 25*e.theme.space.base}),(function(e){return 30*e.theme.space.base}),(function(e){return Object(O.mediaQuery)("down","sm",e.theme)}),(function(e){return 15*e.theme.space.base}),(function(e){return 18*e.theme.space.base})),I=Object(c.e)(x.b).withConfig({displayName:"SignUp___StyledGrid",componentId:"rcv3vm-1"})(["margin-top:",";margin-bottom:",";"],(function(e){return e.theme.space.md}),(function(e){return e.theme.space.md})),U=Object(c.e)(_.n).withConfig({displayName:"SignUp___StyledXXXL",componentId:"rcv3vm-2"})(["text-align:center;",""],(function(e){var t=12*e.theme.space.base+"px";return Object(c.d)(["line-height:",";font-size:",";font-weight:",";","{line-height:",";font-size:",";}"],Object(O.getLineHeight)(14*e.theme.space.base+"px",t),t,e.theme.fontWeights.bold,Object(O.mediaQuery)("down","md",e.theme),e.theme.lineHeights.xxl,e.theme.fontSizes.xxl)})),z=Object(c.e)(_.l).withConfig({displayName:"SignUp___StyledXL",componentId:"rcv3vm-3"})(["text-align:center;",""],(function(e){return Object(c.d)(["color:",";font-size:",";","{font-size:",";}"],Object(O.getColor)("grey",600,e.theme),e.theme.fontSizes.lg,Object(O.mediaQuery)("down","md",e.theme),e.theme.fontSizes.lg)})),N=function(){return r.a.createElement(L,null,r.a.createElement(S.b,{isFloating:!0},r.a.createElement(I,{gutters:"lg"},r.a.createElement(x.c,{alignItems:"center",justifyContent:"center"},r.a.createElement(x.a,{size:12,order:0},r.a.createElement(U,{isBold:!0},"Sign Up!"))),r.a.createElement(x.c,{alignItems:"center",justifyContent:"center"},r.a.createElement(x.a,{size:12,order:0},r.a.createElement(z,{isBold:!0},"Sign Up and Stay in the Loop"))),r.a.createElement(x.c,{alignItems:"center",justifyContent:"center"},r.a.createElement(x.a,{size:12,order:0},r.a.createElement(w,{url:"https://coqui.us1.list-manage.com/subscribe/post?u=6faea2f1f19c814566173ffb0&id=36493a0abf"}))))))},P=a("wAoU"),R=Object(c.e)("div").withConfig({displayName:"SignUp___StyledDiv",componentId:"sc-1ohomug-0"})(["background-color:",";"],(function(e){return Object(O.getColor)("yellow",600,e.theme)})),C=function(){return r.a.createElement(R,null,r.a.createElement(P.a,null,r.a.createElement(N,null)))},A=a("7cfw"),M=a("t4Fg");t.default=function(){return Object(n.useEffect)((function(){Object(M.a)()})),r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"SignUp "}),r.a.createElement(C,null),r.a.createElement(A.a,null))}},wAoU:function(e,t,a){"use strict";var n=a("vOnD").e.div.withConfig({displayName:"StandardWidth__StandardWidthLayout",componentId:"sc-5am6l5-0"})(["margin-right:auto;margin-left:auto;width:85%;max-width:1366px;"]);t.a=n}}]);
//# sourceMappingURL=component---src-pages-signup-tsx-8a4d209384775cc72e86.js.map