(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"3ggJ":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("vOnD"),l=n("q1tI"),o=n.n(l),i=n("+mFw"),c=n("HMLE"),r=n("vqMM"),d=Object(a.e)(r.d).withConfig({displayName:"DeleteModal___StyledModal",componentId:"sc-1qpyp7x-0"})(["width:477px;"]),m=Object(a.e)(i.d).withConfig({displayName:"DeleteModal___StyledOrangeButton",componentId:"sc-1qpyp7x-1"})(["width:100%;"]),p=Object(a.e)(c.b).withConfig({displayName:"DeleteModal___StyledButton",componentId:"sc-1qpyp7x-2"})(["width:100%;border:none;color:black;margin-top:10px;"]),s=function(e){var t=e.children,n=e.onCancel,a=e.onDelete,l=e.loading;return o.a.createElement(d,{onClose:n},o.a.createElement(r.c,null,t),o.a.createElement(r.a,null,l?o.a.createElement(i.c,null):o.a.createElement(m,{onClick:a},"Yes, delete"),o.a.createElement(p,{onClick:n},"Cancel")),o.a.createElement(r.b,{"aria-label":"Close modal"}))}},"D37/":function(e,t,n){"use strict";n.r(t);var a,l,o=n("q1tI"),i=n.n(o),c=n("1Yd/"),r=n("O9mE"),d=n("7cfw"),m=n("t4Fg"),p=n("Tmkn"),s=n("MUpH"),u=n("UYTu"),g=n("+TN3"),_=n("pZLH"),f=n("+mFw"),b=n("vOnD"),E=n("AQcj"),h=n("dDrx"),w=n("dYoo"),x=n("rWx2"),S=n("3ggJ"),v=n("Khmm"),y=Object(u.d)(a||(a=Object(s.a)(["\n  query Samples($voice_id: String!) {\n    voice(id: $voice_id) {\n      id\n      name\n    }\n    samples(voice_id: $voice_id) {\n      id\n      name\n      audio_url\n    }\n  }\n"]))),C=Object(u.d)(l||(l=Object(s.a)(["\n  mutation deleteSample($id: String!) {\n    deleteSample(id: $id) {\n      success\n      errors\n    }\n  }\n"]))),O=b.e.ul.withConfig({displayName:"Samples__SampleList",componentId:"sc-16413g9-0"})(["margin:54px auto;width:80%;"]),j=b.e.li.withConfig({displayName:"Samples__SampleBox",componentId:"sc-16413g9-1"})(["width:100%;height:134px;background:#012b30;border-radius:8px;border:1px #012b30 solid;margin-bottom:18px;"]),N=b.e.div.withConfig({displayName:"Samples__SampleTitle",componentId:"sc-16413g9-2"})(["height:64px;border-bottom:1px solid #5eae91;padding:20px 38px;color:white;font-size:24px;font-weight:600;"]),I=b.e.div.withConfig({displayName:"Samples__SampleControls",componentId:"sc-16413g9-3"})(["height:70px;display:flex;"]),D=b.e.div.withConfig({displayName:"Samples__SampleControl",componentId:"sc-16413g9-4"})(["flex-grow:",";padding:25px 38px;color:#5eae91;border-right:1px solid #5eae91;&:last-of-type{border-right:none;}"],(function(e){return e.grow||0})),k=Object(b.e)(D).withConfig({displayName:"Samples___StyledSampleControl3",componentId:"sc-16413g9-5"})(["padding:19px 19px;"]),M=Object(b.e)(D).withConfig({displayName:"Samples___StyledSampleControl2",componentId:"sc-16413g9-6"})(["padding:16px 38px;"]),q=Object(b.e)(D).withConfig({displayName:"Samples___StyledSampleControl",componentId:"sc-16413g9-7"})(["padding:19px 38px;"]),B=Object(b.e)("a").withConfig({displayName:"Samples___StyledA",componentId:"sc-16413g9-8"})(["color:unset !important;text-decoration:unset !important;"]),T=Object(b.e)(E.a).withConfig({displayName:"Samples___StyledArrowCircleDown",componentId:"sc-16413g9-9"})(["min-height:24px;position:relative;top:7px;margin-left:7px;"]),F=function(e){var t=e.voice_id,n=Object(g.b)(y,{variables:{voice_id:t}}),a=n.data,l=n.loading,c=Object(o.useState)(null),r=c[0],d=c[1],m=Object(_.a)(C,{update:function(e){e.evict({id:"ROOT_QUERY",fieldName:"samples",args:{voice_id:t}}),e.evict({id:"ROOT_QUERY",fieldName:"voices"})}}),p=m[0],s=m[1],u=Object(v.c)(),b=u.currentTrack,E=u.Player;return Object(o.useEffect)((function(){s.data&&(d(null),s.reset())}),[s,d]),l?i.a.createElement(f.c,null):i.a.createElement(i.a.Fragment,null,r?i.a.createElement(S.a,{loading:s.loading,onDelete:function(){return p({variables:{id:r.id}})},onCancel:function(){return d(null)}},"Are you sure you want to delete this audio sample?"):"",i.a.createElement(f.e,null,"Samples for: ",a.voice.name),i.a.createElement(O,null,a.samples.map((function(e){return i.a.createElement(j,{key:e.id},i.a.createElement(N,null,e.name),i.a.createElement(I,null,i.a.createElement(q,null,i.a.createElement(E,{src:e.audio_url},b===e.audio_url?i.a.createElement(h.a,{size:"32",color:"#ED8F1C",variant:"Bold"}):i.a.createElement(w.a,{size:"32",color:"#ED8F1C",variant:"Bold"}))),i.a.createElement(M,null,i.a.createElement(B,{href:e.audio_url},"Download",i.a.createElement(T,{size:"24",color:"#5EAE91",variant:"Bold"}))),i.a.createElement(D,{grow:1}),i.a.createElement(k,null,i.a.createElement(x.a,{onClick:function(){return d(e)},size:"32",color:"#CC3340",variant:"Bold"}))))}))))};t.default=function(e){var t=e.id;return Object(o.useEffect)((function(){Object(m.a)()})),i.a.createElement(r.a,{hasSkipNav:!1},i.a.createElement(c.a,null),i.a.createElement(p.b,null,i.a.createElement(F,{voice_id:t})),i.a.createElement(d.a,null))}}}]);
//# sourceMappingURL=component---src-pages-voices-[id]-samples-tsx-e248e391092c718b7cec.js.map