(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"1Cwt":function(e,n,t){"use strict";var r=t("vOnD"),i=t("q1tI"),a=t.n(i);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c=["role"];function d(){return{getContainerProps:function(e){var n=void 0===e?{}:e,t=n.role;return o({role:void 0===t?"navigation":t,"aria-label":"Breadcrumb navigation","data-garden-container-id":"containers.breadcrumb","data-garden-container-version":"0.4.10"},function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(n,c))},getCurrentPageProps:function(e){return void 0===e&&(e={}),o({"aria-current":"page"},e)}}}var s=t("A0PP"),u=(t("K/os"),t("RUBk"),t("wx14"),t("JX7q")),l=t("dI71"),p=t("kHIg");t("MUpH");var f=function(e){function n(n){var t;return t=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this,Object(u.a)(t)}return Object(l.a)(n,e),n}(Object(p.a)(Error));function m(e,n){return e.substr(-n.length)===n}var b=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function g(e){return"string"!=typeof e?e:e.match(b)?parseFloat(e):e}var h=function(e){return function(n,t){void 0===t&&(t="16px");var r=n,i=t;if("string"==typeof n){if(!m(n,"px"))throw new f(69,e,n);r=g(n)}if("string"==typeof t){if(!m(t,"px"))throw new f(70,e,t);i=g(t)}if("string"==typeof r)throw new f(71,n,e);if("string"==typeof i)throw new f(72,t,e);return""+r/i+e}},O=h("em");function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){y(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var w,E=r.e.ol.attrs({"data-garden-id":"breadcrumbs.list","data-garden-version":"8.51.0"}).withConfig({displayName:"StyledBreadcrumb",componentId:"sc-11jrinn-0"})(["display:flex;margin:0;padding:0;list-style:none;font-size:",";direction:",";"],(function(e){return e.theme.fontSizes.md}),(function(e){return e.theme.rtl&&"rtl"}));function S(){return(S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}E.defaultProps={theme:s.DEFAULT_THEME};var $=function(e){return i.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",width:12,height:12,focusable:"false",viewBox:"0 0 12 12","aria-hidden":"true"},e),w||(w=i.createElement("path",{fill:"currentColor",d:"M3.646 10.354a.5.5 0 01-.057-.638l.057-.07L7.293 6 3.646 2.354a.5.5 0 01-.057-.638l.057-.07a.5.5 0 01.638-.057l.07.057 4 4a.5.5 0 01.057.638l-.057.07-4 4a.5.5 0 01-.708 0z"})))},P=["theme"],k=Object(r.e)((function(e){e.theme;var n=_(e,P);return a.a.createElement($,n)})).attrs({role:"presentation","aria-hidden":"true"}).withConfig({displayName:"StyledChevronIcon",componentId:"sc-9r9qrm-0"})(["transform:",";margin:0 ",";color:",";"],(function(e){return e.theme.rtl&&"rotate(180deg);"}),(function(e){return O(e.theme.space.base,e.theme.fontSizes.md)}),(function(e){return Object(s.getColor)("neutralHue",600,e.theme)}));k.defaultProps={theme:s.DEFAULT_THEME};var C=r.e.li.attrs({"data-garden-id":"breadcrumbs.item","data-garden-version":"8.51.0"}).withConfig({displayName:"StyledBreadcrumbItem",componentId:"sc-r0suq7-0"})(["line-height:",";white-space:nowrap;color:",";font-size:inherit;",";"],(function(e){return Object(s.getLineHeight)(5*e.theme.space.base,e.theme.fontSizes.md)}),(function(e){return e.isCurrent?Object(s.getColor)(e.theme.colors.neutralHue,600):"inherit"}),(function(e){var n=e.isCurrent;return Object(r.d)(["& > :link,& > :visited{white-space:inherit;}",""],n&&"\n      & > :link,\n      & > :visited,\n      & > :link:hover,\n      & > :visited:hover,\n      & > :link:focus,\n      & > :visited:focus {\n        color: inherit;\n      }\n    ")}));C.defaultProps={theme:s.DEFAULT_THEME};var x=Object(r.e)(C).attrs({"aria-hidden":!0}).withConfig({displayName:"StyledCenteredBreadcrumbItem",componentId:"sc-1ces9y2-0"})(["display:flex;align-items:center;"]);x.defaultProps={theme:s.DEFAULT_THEME};var I=a.a.forwardRef((function(e,n){var t=d(),r=t.getContainerProps,o=t.getCurrentPageProps,c=i.Children.count(e.children),s=i.Children.map(e.children,(function(e,n){return n===c-1?a.a.createElement(C,{isCurrent:!0},Object(i.cloneElement)(e,o())):a.a.createElement(a.a.Fragment,null,a.a.createElement(C,null,e),a.a.createElement(x,null,a.a.createElement(k,null)))}));return a.a.createElement("nav",r(v(v({},e),{},{ref:n,role:null})),a.a.createElement(E,null,s))}));I.displayName="Breadcrumb";var H=t("HMLE"),D=Object(r.e)("div").withConfig({displayName:"Breadcrumb___StyledDiv",componentId:"sc-1qbrgws-0"})(["background-color:#eff7f4;border-top:1px solid #5eae91;border-bottom:1px solid #5eae91;padding:","px ","px;"],(function(e){return 4*e.theme.space.base}),(function(e){return 4*e.theme.space.base}));n.a=function(e){var n=e.items;return a.a.createElement(D,null,a.a.createElement(I,null,null==n?void 0:n.map((function(e){var n=e[0],t=e[1];return a.a.createElement(H.a,{key:t,href:t},n)}))))}},"AQ/F":function(e,n,t){"use strict";t.d(n,"b",(function(){return d})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return u}));var r,i,a,o=t("MUpH"),c=t("UYTu"),d=Object(c.d)(r||(r=Object(o.a)(["\n  mutation createProject($name: String!, $description: String!) {\n    createProject(name: $name, description: $description) {\n      errors {\n        field\n        errors\n      }\n      project {\n        id\n        name\n        description\n        created_at\n      }\n    }\n  }\n"]))),s=Object(c.d)(i||(i=Object(o.a)(["\n  mutation createScene($project_id: String!, $name: String!, $description: String!) {\n    createScene(project_id: $project_id, name: $name, description: $description) {\n      errors {\n        field\n        errors\n      }\n      scene {\n        id\n        name\n        description\n        created_at\n      }\n    }\n  }\n"]))),u=Object(c.d)(a||(a=Object(o.a)(["\n  mutation createLine($scene_id: String!, $text: String!, $speaker_id: String!, $emotion_id: String!, $speed: Float!, $emotion_intensity: Float!) {\n    createLine(scene_id: $scene_id, text: $text, speaker_id: $speaker_id, emotion_id: $emotion_id, speed: $speed, emotion_intensity: $emotion_intensity) {\n      line {\n        id\n        text\n      }\n      take {\n        id\n        audio_url\n      }\n    }\n  }\n"])))},"B+wp":function(e,n,t){"use strict";var r=t("q1tI"),i=t.n(r),a=t("asXk"),o=t("rU9Z");n.a=function(e){var n=e.children,t=Object(a.f)(),r=t.data;t.loading;return t.error?"error":r?r.can_access_editor?i.a.createElement(o.a,null,n):"not allowed":"no profile"}},OUxy:function(e,n,t){"use strict";var r=t("vOnD"),i=t("q1tI"),a=t.n(i),o=Object(r.e)("div").withConfig({displayName:"ClientSide___StyledDiv",componentId:"sc-4likg3-0"})(["transition:opacity 100ms;opacity:",";"],(function(e){return e._css}));n.a=function(e){var n=e.children,t=Object(i.useState)(!1),r=t[0],c=t[1];return Object(i.useEffect)((function(){c(!0)}),[]),a.a.createElement(o,{_css:r?"1.0":"0.0"},n)}},POkg:function(e,n,t){"use strict";t.d(n,"d",(function(){return p})),t.d(n,"c",(function(){return f})),t.d(n,"f",(function(){return m})),t.d(n,"e",(function(){return b})),t.d(n,"b",(function(){return g})),t.d(n,"a",(function(){return h})),t.d(n,"g",(function(){return O}));var r,i,a,o,c,d,s,u=t("MUpH"),l=t("UYTu"),p=Object(l.d)(r||(r=Object(u.a)(["{\n  projects {\n    id\n    name\n    description\n    created_at\n  }\n}"]))),f=Object(l.d)(i||(i=Object(u.a)(["\n  query project($project_id: String!) {\n    project(id: $project_id) {\n      id\n      name\n      description\n      created_at\n    }\n  }\n"]))),m=Object(l.d)(a||(a=Object(u.a)(["\n  query scenes($project_id: String!) {\n    scenes(project_id: $project_id) {\n      id\n      name\n      description\n      created_at\n    }\n  }\n"]))),b=Object(l.d)(o||(o=Object(u.a)(["\n  query scene($scene_id: String!) {\n    scene(id: $scene_id) {\n      id\n      name\n      description\n      created_at\n    }\n  }\n"]))),g=Object(l.d)(c||(c=Object(u.a)(["\n  query lines($scene_id: String!) {\n    lines(scene_id: $scene_id) {\n      id\n      text\n      speaker {\n        id\n        name\n      }\n      emotion {\n        id\n        name\n      }\n      emotion_intensity\n      speed\n      takes {\n        id\n        audio_url\n      }\n    }\n  }\n"]))),h=Object(l.d)(d||(d=Object(u.a)(["{\n  emotions {\n    id\n    name\n  }\n}"]))),O=Object(l.d)(s||(s=Object(u.a)(["{\n  speakers {\n    id\n    name\n  }\n}"])))}}]);
//# sourceMappingURL=0949df409d0deda3970d9ae526730d72f108e50f-bef6c6829c2cdcee95ec.js.map