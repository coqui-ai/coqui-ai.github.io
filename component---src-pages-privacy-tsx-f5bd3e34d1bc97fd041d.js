(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{ZIlX:function(e,t,n){"use strict";n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return O}));var a=n("q1tI"),r=n.n(a),o=n("vOnD"),l=n("ufqH"),i=n("A0PP");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function m(){var e=u(["\n  box-sizing: border-box;\n  width: 100%;\n\n  ",";\n  ",";\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n"]);return m=function(){return e},e}var h=function(e,t,n,a,r,i){var s,c,u,m,h,d,p=a&&"".concat(Object(l.e)("".concat(a," / ").concat(i.columns," * 100")),"%");return"boolean"==typeof e?(s=0,c=1,u="100%"):"auto"===e?(s="auto",c=0,u="100%",m="auto"):void 0!==e&&(c=0,u=s="".concat(Object(l.e)("".concat(e," / ").concat(i.columns," * 100")),"%")),h="start"===n?i.theme.rtl?"right":"left":"end"===n?i.theme.rtl?"left":"right":n,d="first"===r?-1:"last"===r?Object(l.e)("".concat(i.columns," + 1")):r,Object(o.d)(["flex-basis:",";flex-grow:",";flex-shrink:",";align-self:",";order:",";margin-",":",";width:",";max-width:",";text-align:",";"],s,c,e&&0,"start"===t||"end"===t?"flex-".concat(t):t,d,i.theme.rtl?"right":"left",p,m,u,h)},d=function(e,t,n,a,r,l,i){return Object(o.d)(["@media (min-width:","){",";}"],e,h(t,n,a,r,l,i))},p=o.e.div.attrs({"data-garden-id":"grid.col","data-garden-version":"8.31.0"})(m(),(function(e){return h(!e.sizeAll&&(e.xs||e.sm||e.md||e.lg||e.xl)?void 0:e.sizeAll||!1,e.alignSelf,e.textAlign,e.offset,e.order,e)}),(function(e){return function(e){var t=e.gutters?Object(l.e)("".concat(e.theme.space[e.gutters]," / 2")):0;return Object(o.d)(["padding-right:",";padding-left:",";"],t,t)}(e)}),(function(e){return e.debug&&function(e){var t=Object(i.getColor)("primaryHue",600,e.theme,.1);return Object(o.d)(["background-clip:content-box;background-color:",";"],t)}(e)}),(function(e){return d(e.theme.breakpoints.xs,e.xs,e.alignSelfXs,e.textAlignXs,e.offsetXs,e.orderXs,e)}),(function(e){return d(e.theme.breakpoints.sm,e.sm,e.alignSelfSm,e.textAlignSm,e.offsetSm,e.orderSm,e)}),(function(e){return d(e.theme.breakpoints.md,e.md,e.alignSelfMd,e.textAlignMd,e.offsetMd,e.orderMd,e)}),(function(e){return d(e.theme.breakpoints.lg,e.lg,e.alignSelfLg,e.textAlignLg,e.offsetLg,e.orderLg,e)}),(function(e){return d(e.theme.breakpoints.xl,e.xl,e.alignSelfXl,e.textAlignXl,e.offsetXl,e.orderXl,e)}),(function(e){return Object(i.retrieveComponentStyles)("grid.col",e)}));function f(){var e=u(["\n  direction: ",";\n  margin-right: auto;\n  margin-left: auto;\n  width: 100%;\n  box-sizing: border-box;\n\n  ",";\n  ",";\n\n  ",";\n"]);return f=function(){return e},e}p.defaultProps={columns:12,theme:i.DEFAULT_THEME};var g=o.e.div.attrs({"data-garden-id":"grid.grid","data-garden-version":"8.31.0"})(f(),(function(e){return e.theme.rtl&&"rtl"}),(function(e){return function(e){var t=e.gutters?Object(l.e)("".concat(e.theme.space[e.gutters]," / 2")):0;return Object(o.d)(["padding-right:",";padding-left:",";"],t,t)}(e)}),(function(e){return e.debug&&function(e){var t=Object(i.getColor)(e.theme.palette.crimson,400,e.theme,.5),n=Object(l.e)("".concat(e.theme.borderWidths.sm," * 2"));return Object(o.d)(["box-shadow:-"," 0 0 0 ",","," 0 0 0 ",";"],n,t,n,t)}(e)}),(function(e){return Object(i.retrieveComponentStyles)("grid.grid",e)}));function y(){var e=u(["\n  display: flex;\n  box-sizing: border-box;\n\n  ","\n  ",";\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n\n  ",";\n"]);return y=function(){return e},e}g.defaultProps={gutters:"md",theme:i.DEFAULT_THEME};var b=function(e,t,n){var a,r;return a="start"===e||"end"===e?"flex-".concat(e):e,r="start"===t||"end"===t?"flex-".concat(t):"between"===t||"around"===t?"space-".concat(t):t,Object(o.d)(["flex-wrap:",";align-items:",";justify-content:",";"],n,a,r)},w=function(e,t,n,a){return Object(o.d)(["@media (min-width:","){",";}"],e,b(t,n,a))},E=o.e.div.attrs({"data-garden-id":"grid.row","data-garden-version":"8.31.0"})(y(),(function(e){return b(e.alignItems,e.justifyContent,e.wrapAll)}),(function(e){return function(e){var t=e.gutters?Object(l.e)("".concat(e.theme.space[e.gutters]," / 2")):0;return Object(o.d)(["margin-right:-",";margin-left:-",";"],t,t)}(e)}),(function(e){return e.debug&&function(e){var t=Object(i.getColor)(e.theme.palette.mint,600,e.theme,.5),n=e.theme.borderWidths.sm;return Object(o.d)(["box-shadow:inset 0 "," 0 0 ",",inset 0 -"," 0 0 ",";"],n,t,n,t)}(e)}),(function(e){return w(e.theme.breakpoints.xs,e.alignItemsXs,e.justifyContentXs,e.wrapXs)}),(function(e){return w(e.theme.breakpoints.sm,e.alignItemsSm,e.justifyContentSm,e.wrapSm)}),(function(e){return w(e.theme.breakpoints.md,e.alignItemsMd,e.justifyContentMd,e.wrapMd)}),(function(e){return w(e.theme.breakpoints.lg,e.alignItemsLg,e.justifyContentLg,e.wrapLg)}),(function(e){return w(e.theme.breakpoints.xl,e.alignItemsXl,e.justifyContentXl,e.wrapXl)}),(function(e){return Object(i.retrieveComponentStyles)("grid.row",e)}));E.defaultProps={wrapAll:"wrap",theme:i.DEFAULT_THEME};var v=Object(a.createContext)({gutters:"md"}),k=function(){return Object(a.useContext)(v)},I=r.a.forwardRef((function(e,t){var n=e.size,a=c(e,["size"]),o=k(),l=o.columns,i=o.gutters,u=o.debug;return r.a.createElement(p,s({sizeAll:n,columns:l,gutters:i,debug:u,ref:t},a))}));I.displayName="Col";var j=r.a.forwardRef((function(e,t){var n=e.columns,a=e.debug,o=c(e,["columns","debug"]);return r.a.createElement(v.Provider,{value:{columns:n,gutters:o.gutters,debug:a}},r.a.createElement(g,s({debug:a,ref:t},o)))}));j.displayName="Grid",j.defaultProps={columns:12,gutters:"md"};var O=r.a.forwardRef((function(e,t){var n=e.wrap,a=c(e,["wrap"]),o=k(),l=o.gutters,i=o.debug;return r.a.createElement(E,s({gutters:l,debug:i,wrapAll:n,ref:t},a))}));O.displayName="Row"},Zpsu:function(e,t,n){"use strict";n.r(t);var a=n("vOnD"),r=n("q1tI"),o=n.n(r),l=n("1Yd/"),i=n("O9mE"),s=n("hV/D"),c=n("HMLE"),u=n("A0PP"),m=n("ZIlX"),h=n("Jyyn"),d=n("7cfw"),p=n("t4Fg"),f=Object(a.e)(m.b).withConfig({displayName:"privacy___StyledGrid",componentId:"sc-1c0fsh2-0"})(["","{padding-right:",";padding-left:",";}"],(function(e){return Object(u.mediaQuery)("down","md",e.theme)}),(function(e){return e.theme.space.lg}),(function(e){return e.theme.space.lg})),g=Object(a.e)(m.a).withConfig({displayName:"privacy___StyledCol",componentId:"sc-1c0fsh2-1"})(["margin-top:","px;margin-bottom:","px;"],(function(e){return 40*e.theme.space.base}),(function(e){return 40*e.theme.space.base})),y=Object(a.e)(m.c).withConfig({displayName:"privacy___StyledRow",componentId:"sc-1c0fsh2-2"})(["margin-top:",";margin-bottom:",";"],(function(e){return e.theme.space.lg}),(function(e){return e.theme.space.lg})),b=Object(a.e)(m.c).withConfig({displayName:"privacy___StyledRow2",componentId:"sc-1c0fsh2-3"})(["margin-top:",";margin-bottom:",";"],(function(e){return e.theme.space.lg}),(function(e){return e.theme.space.lg})),w=Object(a.e)(m.c).withConfig({displayName:"privacy___StyledRow3",componentId:"sc-1c0fsh2-4"})(["margin-top:",";"],(function(e){return e.theme.space.lg})),E=Object(a.e)(m.c).withConfig({displayName:"privacy___StyledRow4",componentId:"sc-1c0fsh2-5"})(["margin-top:",";"],(function(e){return e.theme.space.sm})),v=Object(a.e)(m.c).withConfig({displayName:"privacy___StyledRow5",componentId:"sc-1c0fsh2-6"})(["margin-top:",";margin-bottom:",";"],(function(e){return e.theme.space.lg}),(function(e){return e.theme.space.lg})),k=Object(a.e)(m.c).withConfig({displayName:"privacy___StyledRow6",componentId:"sc-1c0fsh2-7"})(["margin-top:",";margin-bottom:",";"],(function(e){return e.theme.space.lg}),(function(e){return e.theme.space.lg})),I=Object(a.e)(m.c).withConfig({displayName:"privacy___StyledRow7",componentId:"sc-1c0fsh2-8"})(["margin-top:",";margin-bottom:",";"],(function(e){return e.theme.space.lg}),(function(e){return e.theme.space.lg})),j=Object(a.e)(m.c).withConfig({displayName:"privacy___StyledRow8",componentId:"sc-1c0fsh2-9"})(["margin-top:",";margin-bottom:",";"],(function(e){return e.theme.space.lg}),(function(e){return e.theme.space.lg})),O=Object(a.e)(m.c).withConfig({displayName:"privacy___StyledRow9",componentId:"sc-1c0fsh2-10"})(["margin-top:",";margin-bottom:",";"],(function(e){return e.theme.space.lg}),(function(e){return e.theme.space.lg})),x=Object(a.e)(m.c).withConfig({displayName:"privacy___StyledRow10",componentId:"sc-1c0fsh2-11"})(["margin-top:",";margin-bottom:",";"],(function(e){return e.theme.space.lg}),(function(e){return e.theme.space.lg})),C=Object(a.e)(m.c).withConfig({displayName:"privacy___StyledRow11",componentId:"sc-1c0fsh2-12"})(["margin-top:",";margin-bottom:",";"],(function(e){return e.theme.space.lg}),(function(e){return e.theme.space.lg})),_=Object(a.e)(m.c).withConfig({displayName:"privacy___StyledRow12",componentId:"sc-1c0fsh2-13"})(["margin-top:",";margin-bottom:",";"],(function(e){return e.theme.space.lg}),(function(e){return e.theme.space.lg})),S=Object(a.e)(m.c).withConfig({displayName:"privacy___StyledRow13",componentId:"sc-1c0fsh2-14"})(["margin-top:",";margin-bottom:",";"],(function(e){return e.theme.space.lg}),(function(e){return e.theme.space.lg})),R=Object(a.e)(m.c).withConfig({displayName:"privacy___StyledRow14",componentId:"sc-1c0fsh2-15"})(["margin-top:",";"],(function(e){return e.theme.space.lg})),P=Object(a.e)(m.c).withConfig({displayName:"privacy___StyledRow15",componentId:"sc-1c0fsh2-16"})(["margin-top:",";"],(function(e){return e.theme.space.sm}));t.default=function(){return Object(r.useEffect)((function(){Object(p.a)()})),o.a.createElement(i.a,null,o.a.createElement(l.a,{title:"Privacy Policy "}),o.a.createElement(s.a,null,o.a.createElement(f,{gutters:"lg"},o.a.createElement(m.c,null,o.a.createElement(g,null,o.a.createElement(y,null,o.a.createElement(h.e,{isBold:!0},"Privacy Policy of Coqui GmbH")),o.a.createElement(m.c,null,o.a.createElement(h.h,null,o.a.createElement(h.e,null,'This privacy policy applies to data processing by Coqui GmbH ("Coqui", "Controller", "we" or "us").')),o.a.createElement(h.h,null,o.a.createElement(h.e,null,'When you visit our website https://coqui.ai/ ("Website"), we collect and process personal data of you, however, only in compliance with the applicable data protection regulations. Personal data is any information relating to an identified or identifiable natural person, e.g. name, address, and email address. When processing your personal data, we observe the applicable data protection laws, in particular the European General Data Protection Regulation ("GDPR") and the Federal Data Protection Act ("BDSG").')),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"This privacy statement describes which personal data we process, for which purposes and on which legal basis."))),o.a.createElement(b,null,o.a.createElement(h.e,{isBold:!0},"1. Name and Contact Details of the Controller")),o.a.createElement(m.c,null,o.a.createElement(h.h,null,o.a.createElement(h.e,null,"Responsible for the processing of your data is:"))),o.a.createElement(w,null,o.a.createElement(h.h,null,o.a.createElement(h.e,null,o.a.createElement("address",null,"Coqui GmbH ",o.a.createElement("br",null),"Tile-Wardenberg-Straße 6 ",o.a.createElement("br",null),"10555 Berlin ",o.a.createElement("br",null),"Germany ",o.a.createElement("br",null))))),o.a.createElement(E,null,o.a.createElement(h.h,null,o.a.createElement(h.e,null,o.a.createElement(h.j,{isBold:!0},"Telephone:")," +49 (0)716 2476 3160 ",o.a.createElement("br",null),o.a.createElement(h.j,{isBold:!0},"EMail:")," privacy@coqui.ai ",o.a.createElement("br",null)))),o.a.createElement(v,null,o.a.createElement(h.e,{isBold:!0},"2. Collection and Processing of Personal Data, Purposes of Processing, relevant Legal Basis and Storage Period")),o.a.createElement(k,null,o.a.createElement(h.e,{isBold:!0},"2.1. Informative Use of our Website")),o.a.createElement(m.c,null,o.a.createElement(h.h,null,o.a.createElement(h.e,null,"During the visit on our Website, i.e. if you do not register or otherwise transfer information to us, we only collect data that your browser transmits to our server (so-called server log files), however, processing only occurs to the technically necessary extent. The following information is collected:")),o.a.createElement(h.h,null,o.a.createElement(h.k,null,o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"IP address of the requesting device")),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"date and time of access")),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"name and URL of the accessed file")),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"website from which the access comes (referrer URL)")),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"the browser you use and, if applicable, the operating system of your device as well as the name of the access provider.")))),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"The legal basis for the collection of this data is Art. 6 para. 1 lit. f) GDPR. Our legitimate interest in collecting this data results from the following purposes:")),o.a.createElement(h.h,null,o.a.createElement(h.k,null,o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"ensuring optimal use of our Website,")),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"ensuring a trouble free connection,")),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"evaluation of system security and stability.")))),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"The data is deleted as soon as it is no longer required to achieve the purpose for which it was collected. In the case of the collection of data for making the website available to you, this is the case when the respective session has ended. In the case of storage of data in log files, the data is deleted after 6 weeks at the latest."))),o.a.createElement(I,null,o.a.createElement(h.e,{isBold:!0},"2.2. Newsletter")),o.a.createElement(m.c,null,o.a.createElement(h.h,null,o.a.createElement(h.e,null,"If you give us your explicit consent, we will send you information about our services and offers by email. For this purpose, we process your email address. When you register for our newsletter, we use the double opt-in procedure. This means that after you have registered with your email address, we will send you an email to the specified email address in which we ask you to confirm that you actually wish to receive the newsletter.")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,'The legal basis for sending our information is Art. 6 para. 1 lit. a) GDPR. Your consent to receive our newsletter is voluntary. You can withdraw it at any time with effect for the future. You can withdraw by clicking on the "Unsubscribe" link in the respective email newsletter or by sending an informal message to the contact details mentioned in section 1.'))),o.a.createElement(j,null,o.a.createElement(h.e,{isBold:!0},"2.3. Contacting us per email")),o.a.createElement(m.c,null,o.a.createElement(h.h,null,o.a.createElement(h.e,null,"When you contact us by email, the data you provide (e.g. your email address, name and telephone number, if applicable) will be processed by us in order to answer your questions.")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"We use your data exclusively for the purpose of answering your inquiry. The legal basis for this is Art. 6 para. 1 lit. f) GDPR (legitimate interest of processing inquiries and other requests). Your data will be deleted after processing your request, unless further storage is necessary to properly respond to your inquiry."))),o.a.createElement(O,null,o.a.createElement(h.e,{isBold:!0},"2.4. Optimization of Website")),o.a.createElement(m.c,null,o.a.createElement(h.h,null,o.a.createElement(h.e,{isBold:!0},"(a) Cookies")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,'On our Website, we use cookies that are temporarily stored in the working memory ("session cookie") or permanently stored on the hard disk ("permanent cookie"). Cookies are small text files that are automatically created by the browser and stored on your end device (laptop, tablet, smartphone or similar) when you visit our Website. These files allow us to design the Website more efficiently. Most of the cookies we use are Session Cookies, which are only stored in the working memory, but not on your hard drive, and which expire when you close your internet browser and are therefore automatically deleted. Other cookies remain on the device you are using, so that you will be recognized the next time you visit.')),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"The setting of the aforementioned cookies is necessary for the proper functioning of the Website. We therefore have a legitimate interest in their use. The legal basis for the related data processing is therefore Art. 6 para. 1 lit. f) GDPR.")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"On the other hand, we use - in each case on the basis of Art. 6 para. 1 lit. a) GDPR - analytical cookies to statistically record the use of the Website and to optimize our offer, as well as marketing cookies to display information and personalized content tailored specifically to you. These cookies are only set if you have expressly consented to them. You can declare your withdrawal at any time by adjusting the cookie settings in your browser.")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"You can also configure your browser so that no cookies are stored on your device or a notice always appears before a new cookie is set. However, the complete deactivation of cookies can cause that you cannot use all the functions of our Website.")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"The storage period of cookies depends on their purpose and is therefore variable. In any case, cookies are automatically deleted after a defined period of time. Below you will find more detailed information on the analytical cookies and marketing cookies used on our Website.")),o.a.createElement(h.h,null,o.a.createElement(h.e,{isBold:!0},"(b) Google Analytics")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,'We use Google Analytics, a web analytics service provided by Google Inc, 1600 Amphitheatre Parkway, Mountainview, CA 94043, USA ("Google"), to design our services and Website and to optimize them on an ongoing basis.')),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"In this context, pseudonymised usage profiles are created and cookies are used. The information generated by the cookie about your use of our Website, such as browser type/version, operating system used, referrer URL (the previously visited page), host name of the accessing computer (IP address), time of server request, is transmitted to a Google server in the USA and stored there. The transfer of data to the USA is varied out on the basis of the European Standard Contractual Clauses. The information is used to evaluate the use of the Website, to compile reports on advertising activities and to provide other services associated with the use of the Website and the Internet for the purposes of market research and the design of the Website. Your IP address is anonymised so that an assignment is not possible (so-called IP masking).")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"Data processing in connection with Google Analytics is based on your explicit consent pursuant to Art. 6 para. 1 lit. a) GDPR.")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"You may reject the setting of cookies by selecting the appropriate settings in your browser. However, we would like to point out that in this case you may not be able to use all functions of the Website to their full extent. You can also prevent the collection of data generated by the cookie and related to your use of the Website (including your IP address) by Google and the processing of this data by Google by downloading and installing the browser plug-in available under the following link:"," ",o.a.createElement(c.a,{href:"http://tools.google.com/dlpage/gaoptout?hl=de"},"http://tools.google.com/dlpage/gaoptout?hl=de"),".")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"For more information on data protection with regard to Google Analytics, please visit the website of Google.")),o.a.createElement(h.h,null,o.a.createElement(h.k,null,o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"Data protection overview:"," ",o.a.createElement(c.a,{href:"http://www.google.com/intl/de/analytics/learn/privacy.html"},"http://www.google.com/intl/de/analytics/learn/privacy.html"))),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"Privacy statement:"," ",o.a.createElement(c.a,{href:"http://www.google.de/intl/de/policies/privacy"},"http://www.google.de/intl/de/policies/privacy"),"."))))),o.a.createElement(x,null,o.a.createElement(h.e,{isBold:!0},"3. Storage period")),o.a.createElement(m.c,null,o.a.createElement(h.h,null,o.a.createElement(h.e,null,"If no other storage periods are specified in the preceding sections, we store and process your personal data as long this is necessary for the aforementioned purposes. If your data is not needed any longer, we will delete the data except we are obliged by statutory law (commercial and tax law) to store the data for time periods determined by the respective statutes."))),o.a.createElement(C,null,o.a.createElement(h.e,{isBold:!0},"4. Recipients or categories of recipients of your personal data")),o.a.createElement(m.c,null,o.a.createElement(h.h,null,o.a.createElement(h.e,null,"We sometimes use external service providers to process your data. These service providers process your data on our behalf, in accordance with our instructions and under our supervision exclusively for the purposes described in this privacy policy. The external service providers can be assigned to the following categories in particular:")),o.a.createElement(h.h,null,o.a.createElement(h.k,null,o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"Email newsletter providers")),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"IT service providers")))),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"For sending the emails, we use the third-party provider"," ",o.a.createElement(h.j,{isBold:!0},"MailChimp"),", a newsletter platform of the US provider Rocket Science Group, LLC, 675 Ponce De Leon Ave NE #5000, Atlanta, GA 30308, USA. Email addresses of our newsletter recipients are stored on MailChimp's servers in the USA. MailChimp uses this information to send and evaluate the newsletters on our behalf. For this reason, we have concluded a data processing agreement with MailChimp.")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"The data processing agreement contains a reference to the European Standard Contractual Clauses, which provide a guarantee for the transfer of your personal data to the USA. Furthermore, according to its own information, MailChimp may use the data to optimize or improve its own services, e.g. for the technical optimization of the dispatch and presentation of the newsletters or for commercial purposes to determine from which countries the recipients come. However, MailChimp does not use the data of our newsletter recipients to contact them or to pass the data on to third parties.")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"You can read the privacy statement of MailChimp at"," ",o.a.createElement(c.a,{href:"https://mailchimp.com/legal/privacy/"},"https://mailchimp.com/legal/privacy/"),"."))),o.a.createElement(_,null,o.a.createElement(h.e,{isBold:!0},"5. Data Security")),o.a.createElement(m.c,null,o.a.createElement(h.h,null,o.a.createElement(h.e,null,"We use appropriate technical and organizational measures to protect stored personal data against manipulation, partial or complete loss and unauthorized access by third parties. Our security measures are continuously improved in line with technological developments."))),o.a.createElement(S,null,o.a.createElement(h.e,{isBold:!0},"6. Your Rights")),o.a.createElement(m.c,null,o.a.createElement(h.h,null,o.a.createElement(h.e,null,"In relation to the processing of your personal data, you are entitled to the following rights:")),o.a.createElement(h.h,null,o.a.createElement(h.e,{isBold:!0},"6.1. Right to Information pursuant to Art. 15 GDPR")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"You have the right to receive information from us about whether and which data we process about you. This includes information on how long and for what purpose we process the data, the source of the data and the recipients or categories of recipients to whom we pass on the data. We can also provide you with a copy of this data.")),o.a.createElement(h.h,null,o.a.createElement(h.e,{isBold:!0},"6.2. Right to Rectification pursuant to Art. 16 GDPR")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"You have the right to request that we rectify information about you that is not or no longer accurate without delay. In addition, you can request that we complete your incomplete personal data. If required by law, we will also inform third parties of this rectification if we have disclosed your personal data to them.")),o.a.createElement(h.h,null,o.a.createElement(h.e,{isBold:!0},"6.3. Right to Deletion pursuant to Art. 17 GDPR")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"You have the right to request that we delete your personal data without delay if one of the following cases applies:")),o.a.createElement(h.h,null,o.a.createElement(h.k,null,o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"your data is no longer necessary for the purposes for which it was collected or otherwise processed or the purpose has been achieved;")),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"you withdraw your consent and there is no other legal basis for the processing;")),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"you object to the processing and there are no prevailing legitimate grounds for the processing; in the case of the use of personal data for direct marketing, a mere objection by you to the processing is sufficient;")),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"your personal data has been processed unlawfully;")),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"the deletion of your personal data is necessary to comply with a legal obligation under European Union law or the law of a member state to which we are subject.")))),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"Your right to deletion may be restricted on the basis of statutory provisions. This includes in particular the restrictions listed in Article 17 GDPR and Section 35 BDSG.")),o.a.createElement(h.h,null,o.a.createElement(h.e,{isBold:!0},"6.4. Right to the Restriction of Processing pursuant to Art. 18 GDPR")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"You have the right to request us to restrict the processing of your personal data if one of the following reasons apply:")),o.a.createElement(h.h,null,o.a.createElement(h.k,null,o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"you dispute the correctness of your personal data for a period of time that allows us to verify the correctness of the personal data;")),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"the processing is unlawful and you object to the deletion of the personal data and request instead the restriction of the use of your personal data;")),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"we no longer need your personal data for the purposes of processing; however, you need them for the assertion, exercise or defence of legal claims, or")),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"you have objected to the processing as long as it has not yet been determined whether our legitimate reasons outweigh yours.")),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"If you have obtained a restriction on processing under the above list, we will inform you before the restriction is withdrawn.")))),o.a.createElement(h.h,null,o.a.createElement(h.e,{isBold:!0},"6.5. Right to Data Portability pursuant to Art. 20 GDPR")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"You have the right to obtain personal data concerning you that you have provided to us in a structured, commonly used and machine-readable format and to transmit this data to others. The exercise of this right does not affect your right to deletion.")),o.a.createElement(h.h,null,o.a.createElement(h.e,{isBold:!0},"6.6. Right to Object pursuant to Art. 21 GDPR")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"According to Art. 21 GDPR, you have in particular the right to object to the processing of your data at any time on the grounds of your particular situation, if we base this processing on legitimate interests on Art. 6 para. 1 lit. f) GDPR. If you object, we will no longer process your personal data, except in two cases:")),o.a.createElement(h.h,null,o.a.createElement(h.k,null,o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"we can prove that there are compelling legitimate grounds for the processing which outweigh your interests, rights and freedoms; or")),o.a.createElement(h.k.Item,null,o.a.createElement(h.e,null,"the processing serves the assertion, exertion or defence of legal claims.")))),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"In particular, if we process your personal data for direct marketing, you have the right to object at any time to the processing of your data for the purpose of such marketing. If you object to the processing of your data for direct marketing purposes, we will no longer use your personal data for this purpose.")),o.a.createElement(h.h,null,o.a.createElement(h.e,{isBold:!0},"6.7. Right of Withdrawal of Consent pursuant to Art. 7 GDPR")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"You can withdraw your consent given to us at any time with effect for the future. This withdrawal can be made in the form of an informal notification to the above-mentioned contact addresses. If you withdraw your consent, the legitimacy of the data processing carried out up to that point will not be affected.")),o.a.createElement(h.h,null,o.a.createElement(h.e,{isBold:!0},"6.8. Right to file a Complaint with the Supervisory Authority")),o.a.createElement(h.h,null,o.a.createElement(h.e,null,"If you believe that the processing of your data by us violates applicable data protection law, you have the right to file a complaint with one of the competent supervisory authorities. The supervisory authority responsible for us is:"))),o.a.createElement(R,null,o.a.createElement(h.h,null,o.a.createElement(h.e,null,o.a.createElement("address",null,"Berlin Commissioner for Data Security and Freedom of Information ",o.a.createElement("br",null),'("Berliner Beauftragte für Datenschutz und Informationsfreiheit")'," ",o.a.createElement("br",null),"Friedrichstr. 219 ",o.a.createElement("br",null),"10969 Berlin ",o.a.createElement("br",null),"Germany ",o.a.createElement("br",null))))),o.a.createElement(P,null,o.a.createElement(h.h,null,o.a.createElement(h.e,null,o.a.createElement(h.j,{isBold:!0},"Telephone:")," +49 (0)30 1388 9-0 ",o.a.createElement("br",null),o.a.createElement(h.j,{isBold:!0},"Fax:")," +49 (0)30 2155 050 ",o.a.createElement("br",null),o.a.createElement(h.j,{isBold:!0},"EMail:")," mailbox@datenschutz-berlin.de ",o.a.createElement("br",null)))))))),o.a.createElement(d.a,null))}},"hV/D":function(e,t,n){"use strict";var a=n("vOnD").e.div.withConfig({displayName:"MinWidth__MinWidthLayout",componentId:"sc-1q9uzcw-0"})(["margin-right:auto;margin-left:auto;max-width:960px;"]);t.a=a}}]);
//# sourceMappingURL=component---src-pages-privacy-tsx-f5bd3e34d1bc97fd041d.js.map