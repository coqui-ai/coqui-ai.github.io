(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"512y":function(n,e,t){"use strict";t.r(e);var i=t("q1tI"),r=t.n(i),c=t("O9mE"),a=t("HaE+"),d=t("o0o1"),o=t.n(d),s=t("+TN3"),u=t("pZLH"),l=t("Wbzz"),p=t("B+wp"),_=t("OUxy"),j=t("AQ/F"),m=t("POkg"),f=function(n){var e=n.projectId,t=Object(s.b)(m.f,{variables:{project_id:e}}),c=t.data,d=(t.loading,Object(u.a)(j.c,{update:function(n){n.evict({id:"ROOT_QUERY",fieldName:"scenes"})}})),f=d[0],$=d[1],b=($.createdScene,$.creating,$.error,function(){var n=Object(a.a)(o.a.mark((function n(){var t,i,r,c,a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f({variables:{project_id:e,name:"Scene 1",description:""}});case 2:null!=(r=n.sent)&&null!==(t=r.createScene)&&void 0!==t&&null!==(i=t.scene)&&void 0!==i&&i.id&&Object(l.d)("/editor/project/"+e+"/scene/"+(null==r||null===(c=r.createScene)||void 0===c||null===(a=c.scene)||void 0===a?void 0:a.id)+"/");case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}());return Object(i.useEffect)((function(){var n;c&&(null!==(n=c.scenes)&&void 0!==n&&n.length?Object(l.d)("/editor/project/"+e+"/scene/"+c.scenes[0].id+"/"):b())}),[c]),r.a.createElement(_.a,null,r.a.createElement(p.a,null,"Project ",e))},$=t("7cfw");e.default=function(n){var e=n.project_id;return r.a.createElement(c.a,{hasSkipNav:!1},r.a.createElement(f,{projectId:e}),r.a.createElement($.a,null))}},"AQ/F":function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return l})),t.d(e,"a",(function(){return p})),t.d(e,"d",(function(){return _})),t.d(e,"e",(function(){return j}));var i,r,c,a,d,o=t("MUpH"),s=t("UYTu"),u=Object(s.d)(i||(i=Object(o.a)(["\n  mutation createProject($name: String!, $description: String!) {\n    createProject(name: $name, description: $description) {\n      errors {\n        field\n        errors\n      }\n      project {\n        id\n        name\n        description\n        created_at\n      }\n    }\n  }\n"]))),l=Object(s.d)(r||(r=Object(o.a)(["\n  mutation createScene($project_id: String!, $name: String!, $description: String!) {\n    createScene(project_id: $project_id, name: $name, description: $description) {\n      errors {\n        field\n        errors\n      }\n      scene {\n        id\n        name\n        description\n        created_at\n      }\n    }\n  }\n"]))),p=Object(s.d)(c||(c=Object(o.a)(["\n  mutation createLine($scene_id: String!, $text: String!, $speaker_id: String!, $emotion_id: String!, $speed: Float!, $emotion_intensity: Float!) {\n    createLine(scene_id: $scene_id, text: $text, speaker_id: $speaker_id, emotion_id: $emotion_id, speed: $speed, emotion_intensity: $emotion_intensity) {\n      line {\n        id\n      }\n      take {\n        id\n        text\n        audio_url\n      }\n    }\n  }\n"]))),_=Object(s.d)(a||(a=Object(o.a)(["\n  mutation createTake($line_id: String!, $text: String!, $speaker_id: String!, $emotion_id: String!, $speed: Float!, $emotion_intensity: Float!) {\n    createTake(line_id: $line_id, text: $text, speaker_id: $speaker_id, emotion_id: $emotion_id, speed: $speed, emotion_intensity: $emotion_intensity) {\n      line {\n        id\n      }\n      take {\n        id\n        text\n        saved\n        audio_url\n      }\n    }\n  }\n"]))),j=Object(s.d)(d||(d=Object(o.a)(["\n  mutation deleteLine($line_id: String!) {\n    deleteLine(line_id: $line_id) {\n      success\n      errors\n    }\n  }\n"])))},"B+wp":function(n,e,t){"use strict";var i=t("q1tI"),r=t.n(i),c=t("asXk"),a=t("rU9Z");e.a=function(n){var e=n.children,t=Object(c.f)(),i=t.data;t.loading;return t.error?"error":i?i.can_access_editor?r.a.createElement(a.a,null,e):"not allowed":"no profile"}},OUxy:function(n,e,t){"use strict";var i=t("vOnD"),r=t("q1tI"),c=t.n(r),a=Object(i.e)("div").withConfig({displayName:"ClientSide___StyledDiv",componentId:"sc-4likg3-0"})(["transition:opacity 100ms;opacity:",";"],(function(n){return n._css}));e.a=function(n){var e=n.children,t=Object(r.useState)(!1),i=t[0],d=t[1];return Object(r.useEffect)((function(){d(!0)}),[]),c.a.createElement(a,{_css:i?"1.0":"0.0"},e)}},POkg:function(n,e,t){"use strict";t.d(e,"d",(function(){return p})),t.d(e,"c",(function(){return _})),t.d(e,"f",(function(){return j})),t.d(e,"e",(function(){return m})),t.d(e,"b",(function(){return f})),t.d(e,"a",(function(){return $})),t.d(e,"g",(function(){return b}));var i,r,c,a,d,o,s,u=t("MUpH"),l=t("UYTu"),p=Object(l.d)(i||(i=Object(u.a)(["{\n  projects {\n    id\n    name\n    description\n    created_at\n  }\n}"]))),_=Object(l.d)(r||(r=Object(u.a)(["\n  query project($project_id: String!) {\n    project(id: $project_id) {\n      id\n      name\n      description\n      created_at\n    }\n  }\n"]))),j=Object(l.d)(c||(c=Object(u.a)(["\n  query scenes($project_id: String!) {\n    scenes(project_id: $project_id) {\n      id\n      name\n      description\n      created_at\n    }\n  }\n"]))),m=Object(l.d)(a||(a=Object(u.a)(["\n  query scene($scene_id: String!) {\n    scene(id: $scene_id) {\n      id\n      name\n      description\n      created_at\n    }\n  }\n"]))),f=Object(l.d)(d||(d=Object(u.a)(["\n  query lines($scene_id: String!) {\n    lines(scene_id: $scene_id) {\n      id\n      last_render {\n        text\n        speaker {\n          id\n          name\n        }\n        emotion {\n          id\n          name\n        }\n        emotion_intensity\n        speed\n        audio_url\n      }\n      takes {\n        id\n        audio_url\n      }\n    }\n  }\n"]))),$=Object(l.d)(o||(o=Object(u.a)(["{\n  emotions {\n    id\n    name\n  }\n}"]))),b=Object(l.d)(s||(s=Object(u.a)(["{\n  speakers {\n    id\n    name\n  }\n}"])))}}]);
//# sourceMappingURL=component---src-pages-editor-project-project-id-tsx-d459cdedef04fce58b54.js.map