(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{CYIj:function(e,t,a){var n=a("ZS3K"),r=a("Djkm"),c=a("fEfC");n({target:"Object",stat:!0},{fromEntries:function(e){var t={};return r(e,(function(e,a){c(t,e,a)}),{AS_ENTRIES:!0}),t}})},GfTH:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),r=a.n(n),c=a("TYz2"),l=a("KYPV"),o=a("Wbzz"),i=a("+mFw"),u=a("x8No"),s=a("ENkJ"),m=a("Jyyn"),d=function(e){var t=e.redirect,a=void 0===t||t,d=Object(c.b)(),h=Object(c.d)(),f=h[0],p=h[1],E=p.loading,v=p.error;return Object(n.useEffect)((function(){d&&a&&Object(o.d)("/voices")}),[d,a]),r.a.createElement(i.b,{title:"Sign In"},r.a.createElement(l.c,{initialValues:{username:"",password:""},onSubmit:function(e){f(e.username,e.password)}},r.a.createElement(l.b,null,r.a.createElement(u.a,{name:"username",label:"E-Mail",as:s.d,type:"email"}),r.a.createElement(u.a,{name:"password",label:"Password",as:s.d,type:"password",error:v?"Please, enter valid credentials":null}),E||d?r.a.createElement(i.c,null):r.a.createElement(u.b,null,"Sign In"),r.a.createElement(m.h,null,"Don’t have an account yet?"," ",r.a.createElement(m.j,{isBold:!0},r.a.createElement(o.a,{to:"/auth/signup"},"Sign Up Here"))))))}},Tmkn:function(e,t,a){"use strict";a.d(t,"a",(function(){return B}));var n,r,c=a("q1tI"),l=a.n(c),o=a("TYz2"),i=a("MUpH"),u=a("vOnD"),s=a("UYTu"),m=a("pZLH"),d=a("Jyyn"),h=a("+mFw"),f=a("x8No"),p=a("A0PP"),E=a("ENkJ"),v=Object(s.d)(n||(n=Object(i.a)(["\n  mutation {\n    updateProfile(terms_accepted: true) {\n      errors {\n        field\n        errors\n      }\n      profile {\n        terms_accepted\n      }\n    }\n  }\n"]))),g=Object(u.e)(h.b).withConfig({displayName:"AcceptTerms___StyledCenterWell",componentId:"g39j91-0"})(["& p{text-align:left;}","{width:603px;}"],(function(e){return Object(p.mediaQuery)("up","sm",e.theme)})),k=Object(u.e)(E.b).withConfig({displayName:"AcceptTerms___StyledField",componentId:"g39j91-1"})(["margin-top:39px;"]),b=function(){var e=Object(m.a)(v),t=e[0],a=e[1].loading,n=Object(c.useState)(!1),r=n[0],o=n[1];return l.a.createElement(g,{title:"Before you get started"},l.a.createElement(d.h,null,l.a.createElement(d.j,{isBold:!0},"Restricted Content")," ",l.a.createElement("br",null),"You may not use Coqui.ai for defamation, scams, illicit content, or other use cases where you are “hiding behind a fake voice”. Content flags are used for enforcing our terms of service. All flagged content is monitored by our team for breaches and actioned directly with the account holder. Our terms of service cover both commercial and private usage of generated audio."),l.a.createElement(d.h,null,"We recommend reading our Terms of Service for a more concise list - feel free to reach out to us directly if you aren’t sure."),l.a.createElement(k,null,l.a.createElement(E.a,{checked:r,onChange:function(){return o(!r)}},l.a.createElement(E.e,null,"I have read and understood the Terms and Conditions"))),l.a.createElement(f.b,{loading:a,disabled:!r,onClick:t},"I Agree"))},M=(a("CYIj"),a("KYPV")),_=Object(s.d)(r||(r=Object(i.a)(["\n  mutation updateProfile($personal_name: String!, $organization_name: String!) {\n    updateProfile(personal_name: $personal_name, organization_name: $organization_name) {\n      errors {\n        field\n        errors\n      }\n      profile {\n        organization_name\n        personal_name\n        terms_accepted\n      }\n    }\n  }\n"]))),j=function(e){var t=e.profile,a=Object(m.a)(_),n=a[0],r=a[1].loading;return l.a.createElement(h.b,{title:"Complete your profile!"},l.a.createElement(M.c,{initialValues:{personal_name:t.personal_name,organization_name:t.organization_name},validate:function(e){var t={};return["personal_name","organization_name"].forEach((function(a){e[a]||(t[a]="Required.")})),t},onSubmit:function(e,t){var a=e.personal_name,r=e.organization_name;return n({variables:{personal_name:a,organization_name:r}}).then((function(e){var a=e.data;if(!a.errors)return a;t.setStatus(Object.fromEntries(a.errors.map((function(e){return[e.field,e.errors.join(" ")]}))))}))}},(function(e){var t=e.status;return l.a.createElement(M.b,null,null!=t&&t.__all__?l.a.createElement("div",null,t.__all__):null,l.a.createElement(f.a,{name:"personal_name",label:"Enter your name here:",as:E.d}),l.a.createElement(f.a,{name:"organization_name",label:"Name of Organization:",as:E.d}),l.a.createElement(f.b,{loading:r},"Sign Up & Login"))})))},L=a("Bl0u"),w=["variant","color","size"],y=function(e){var t=e.color;return l.a.createElement(l.a.Fragment,null,l.a.createElement("path",{d:"M6 13c-2.76 0-5 2.23-5 5s2.24 5 5 5 5-2.24 5-5-2.23-5-5-5Zm-2.04 2.96H6a.68.68 0 0 1 0 1.36H3.96a.68.68 0 0 1 0-1.36Zm4.08 4.08H3.96a.68.68 0 0 1-.68-.68c0-.37.31-.68.68-.68h4.09c.38 0 .68.31.68.68 0 .37-.31.68-.69.68Z",fill:t}),l.a.createElement("path",{d:"M17 3H7C4 3 2 4.5 2 8v3.14c0 .73.75 1.19 1.42.9a6.51 6.51 0 0 1 3.66-.45c2.62.43 4.76 2.5 5.29 5.1.15.76.17 1.5.07 2.21-.08.59.4 1.11.99 1.11H17c3 0 5-1.5 5-5V8c0-3.5-2-5-5-5Zm.47 5.59-3.13 2.5c-.66.53-1.5.79-2.34.79-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.77.77 0 0 1-.12-1.06c.26-.32.73-.38 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.11 1.06Z",fill:t}))},O=function(e){var t=e.color;return l.a.createElement(l.a.Fragment,null,l.a.createElement("path",{d:"M22 12.98v2.52c0 3.5-2 5-5 5H7M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9M2 16.5h6M2 12.5h3",stroke:t,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}))},H=function(e){var t=e.color;return l.a.createElement(l.a.Fragment,null,l.a.createElement("path",{d:"M6 13c-2.76 0-5 2.23-5 5s2.24 5 5 5 5-2.24 5-5-2.23-5-5-5Zm-2.04 2.96H6c.38 0 .68.31.68.68 0 .37-.31.68-.68.68H3.96a.68.68 0 0 1 0-1.36Zm4.08 4.08H3.95a.68.68 0 0 1-.68-.68c0-.37.31-.68.68-.68h4.09a.68.68 0 0 1 0 1.36Z",fill:t}),l.a.createElement("path",{opacity:".4",d:"M17 3H7C4 3 2 4.5 2 8v3.14c0 .73.75 1.19 1.42.9a6.51 6.51 0 0 1 3.66-.45c2.62.43 4.76 2.5 5.29 5.1.15.76.17 1.5.07 2.21-.08.59.4 1.11.99 1.11H17c3 0 5-1.5 5-5v-7C22 4.5 20 3 17 3Z",fill:t}),l.a.createElement("path",{d:"M11.999 11.872c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79Z",fill:t}))},Z=function(e){var t=e.color;return l.a.createElement(l.a.Fragment,null,l.a.createElement("path",{d:"M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5H7",stroke:t,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),l.a.createElement("path",{d:"m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9M2 16.5h6M2 12.5h3",stroke:t,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}))},C=function(e){var t=e.color;return l.a.createElement(l.a.Fragment,null,l.a.createElement("path",{d:"M17 21.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c2.86 0 4.25-1.39 4.25-4.25v-7c0-2.86-1.39-4.25-4.25-4.25H7c-2.86 0-4.25 1.39-4.25 4.25 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v7c0 3.65-2.1 5.75-5.75 5.75Z",fill:t}),l.a.createElement("path",{d:"M11.999 12.868c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79ZM8 17.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM5 13.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z",fill:t}))},z=function(e){var t=e.color;return l.a.createElement(l.a.Fragment,null,l.a.createElement("path",{d:"M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5H7",stroke:t,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),l.a.createElement("path",{opacity:".4",d:"m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9M2 16.5h6M2 12.5h3",stroke:t,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}))},S=Object(c.forwardRef)((function(e,t){var a=e.variant,n=e.color,r=e.size,c=Object(L.a)(e,w);return l.a.createElement("svg",Object(L.b)({},c,{xmlns:"http://www.w3.org/2000/svg",ref:t,width:r,height:r,viewBox:"0 0 24 24",fill:"none"}),function(e,t){switch(e){case"Bold":return l.a.createElement(y,{color:t});case"Broken":return l.a.createElement(O,{color:t});case"Bulk":return l.a.createElement(H,{color:t});case"Linear":return l.a.createElement(Z,{color:t});case"Outline":return l.a.createElement(C,{color:t});case"TwoTone":return l.a.createElement(z,{color:t});default:return l.a.createElement(Z,{color:t})}}(a,n))}));S.defaultProps={variant:"Linear",color:"currentColor",size:"24"},S.displayName="SmsTracking";var T=Object(u.e)(S).withConfig({displayName:"VerifyEmail___StyledSmsTracking",componentId:"sc-98quk8-0"})(["display:block;margin:69px auto 30px auto;"]),F=function(){return l.a.createElement(h.b,{title:"Complete your profile!"},l.a.createElement(T,{size:"80",color:"#FF8A65",variant:"Outline"}),l.a.createElement(d.h,null,"Please check your email",l.a.createElement("br",null)," address to verify your account",l.a.createElement("br",null)," and complete your sign up"))},W=a("GfTH"),B=function(e){var t=e.children,a=Object(o.f)(),n=a.data,r=a.loading,c=a.error;return r?"":c||!n?l.a.createElement(W.a,null):n.personal_name&&n.organization_name?n.terms_accepted?n.email_validated?t:l.a.createElement(F,null):l.a.createElement(b,null):l.a.createElement(j,{profile:n})}},rWx2:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a("Bl0u"),r=a("q1tI"),c=a.n(r),l=["variant","color","size"],o=function(e){var t=e.color;return c.a.createElement(c.a.Fragment,null,c.a.createElement("path",{d:"M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82.04.41.4.71.82.67l2.04-.2c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82ZM19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39-.23.25-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.7-.34-.95Zm-5.57 9.61h-3.33c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.33c.41 0 .75.34.75.75s-.34.75-.75.75Zm.84-4h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z",fill:t}))},i=function(e){var t=e.color;return c.a.createElement(c.a.Fragment,null,c.a.createElement("path",{d:"M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M18.85 9.14l-.65 10.07M10.33 16.5h3.33M12.82 12.5h1.68M9.5 12.5h.83",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},u=function(e){var t=e.color;return c.a.createElement(c.a.Fragment,null,c.a.createElement("path",{d:"M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82.04.41.4.71.82.67l2.04-.2c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82Z",fill:t}),c.a.createElement("path",{opacity:".399",d:"M19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39-.23.25-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.7-.34-.95Z",fill:t}),c.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.58 17a.75.75 0 0 1 .75-.75h3.33a.75.75 0 0 1 0 1.5h-3.33a.75.75 0 0 1-.75-.75ZM8.75 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z",fill:t}))},s=function(e){var t=e.color;return c.a.createElement(c.a.Fragment,null,c.a.createElement("path",{d:"M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},m=function(e){var t=e.color;return c.a.createElement(c.a.Fragment,null,c.a.createElement("path",{d:"M21 6.73h-.08c-5.29-.53-10.57-.73-15.8-.2l-2.04.2a.755.755 0 0 1-.83-.68c-.04-.42.26-.78.67-.82l2.04-.2c5.32-.54 10.71-.33 16.11.2.41.04.71.41.67.82a.74.74 0 0 1-.74.68Z",fill:t}),c.a.createElement("path",{d:"M8.5 5.72c-.04 0-.08 0-.13-.01a.753.753 0 0 1-.61-.86l.22-1.31c.16-.96.38-2.29 2.71-2.29h2.62c2.34 0 2.56 1.38 2.71 2.3l.22 1.3c.07.41-.21.8-.61.86-.41.07-.8-.21-.86-.61l-.22-1.3c-.14-.87-.17-1.04-1.23-1.04H10.7c-1.06 0-1.08.14-1.23 1.03l-.23 1.3a.75.75 0 0 1-.74.63ZM15.21 22.752H8.79c-3.49 0-3.63-1.93-3.74-3.49L4.4 9.192c-.03-.41.29-.77.7-.8.42-.02.77.29.8.7l.65 10.07c.11 1.52.15 2.09 2.24 2.09h6.42c2.1 0 2.14-.57 2.24-2.09l.65-10.07c.03-.41.39-.72.8-.7.41.03.73.38.7.8l-.65 10.07c-.11 1.56-.25 3.49-3.74 3.49Z",fill:t}),c.a.createElement("path",{d:"M13.66 17.25h-3.33c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.33c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.5 13.25h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z",fill:t}))},d=function(e){var t=e.color;return c.a.createElement(c.a.Fragment,null,c.a.createElement("path",{d:"M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{opacity:".34",d:"m8.5 4.97.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"m18.85 9.14-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{opacity:".34",d:"M10.33 16.5h3.33M9.5 12.5h5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},h=Object(r.forwardRef)((function(e,t){var a=e.variant,r=e.color,h=e.size,f=Object(n.a)(e,l);return c.a.createElement("svg",Object(n.b)({},f,{xmlns:"http://www.w3.org/2000/svg",ref:t,width:h,height:h,viewBox:"0 0 24 24",fill:"none"}),function(e,t){switch(e){case"Bold":return c.a.createElement(o,{color:t});case"Broken":return c.a.createElement(i,{color:t});case"Bulk":return c.a.createElement(u,{color:t});case"Linear":return c.a.createElement(s,{color:t});case"Outline":return c.a.createElement(m,{color:t});case"TwoTone":return c.a.createElement(d,{color:t});default:return c.a.createElement(s,{color:t})}}(a,r))}));h.defaultProps={variant:"Linear",color:"currentColor",size:"24"},h.displayName="Trash"}}]);
//# sourceMappingURL=15365bd82be92c57ec2c655e5fc71de66fc7bd75-a3fa0197beced8c93dcf.js.map