(this["webpackJsonpblog-sanity-react"]=this["webpackJsonpblog-sanity-react"]||[]).push([[0],{129:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(43),a=c.n(r),i=(c(50),c(13)),l=c(8),j=c(12),d=c(44),o=c.n(d)()({projectId:"9kkh2oou",dataset:"production",useCdn:!0}),h=function(e){var t=new Date(e),c=t.getUTCDate();return t.getUTCMonth()+1+"/"+c+"/"+t.getUTCFullYear()+" @ "+(t.getUTCHours()+1)+":"+(t.getUTCMinutes()+1)},u=function(e){return e?"testcase"===e.title?"\ud83d\udcdd":"woops":"\ud83d\udcc4"},b=c(19),O=c.n(b),x=c(130),g=c(131),p=c(132),f=c(133),m=c(134),y=c(135),v=c(136),A=c(137),C=c(138),I=c(139),k=c(140),D=c(2);function N(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){o.fetch('*[_type == "post"]{\n          title,\n          slug,\n          publishedAt,\n          mainImage{\n            asset->{\n              _id,\n              url\n            }\n          },\n          categories[0] -> {\n            title\n          },\n        body,\n        publishedAt\n        }').then((function(e){return s(e.sort((function(e,t){return console.log(e.publishedAt),Date.parse(t.publishedAt)-Date.parse(e.publishedAt)})))})).catch(console.error)}),[]),Object(D.jsxs)(x.a,{className:"themed-container",fluid:"sm",children:[Object(D.jsx)(g.a,{children:Object(D.jsx)(p.a,{children:Object(D.jsxs)(f.a,{fluid:!0,children:[Object(D.jsx)(x.a,{fluid:!0,children:Object(D.jsx)("h1",{className:"display-3",children:"\ud83d\udc4b Hello."})}),Object(D.jsx)("p",{children:"This is a blog I made using React and Sanity. I also used Reactstrap for the layout. I don't like blogging."})]})})}),Object(D.jsx)(m.a,{children:c&&c.map((function(e,t){return Object(D.jsx)(y.a,{style:{marginBottom:"2%"},children:Object(D.jsxs)(v.a,{children:[Object(D.jsxs)(g.a,{children:[Object(D.jsx)(p.a,{children:Object(D.jsxs)(A.a,{tag:"h5",children:[u(e.categories),e.title]},t)}),Object(D.jsx)(p.a,{children:Object(D.jsx)(C.a,{tag:"h6",className:"text-muted",style:{textAlign:"right"},children:h(e.publishedAt)})})]}),Object(D.jsx)(I.a,{children:Object(D.jsx)(O.a,{blocks:e.body.slice(0,2),projectId:o.clientConfig.projectID,dataset:o.clientConfig.dataset})}),Object(D.jsx)(I.a,{style:{textAlign:"right"},children:Object(D.jsxs)(i.b,{to:"/"+e.slug.current,style:{color:"white"},children:[" ",Object(D.jsx)(k.a,{color:"dark",children:"Read more"})]},e.slug.current)})]})})}))})]})}var S=c(26),T=c.n(S),w=c(141);T()(o);function E(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(l.f)().slug;return Object(n.useEffect)((function(){o.fetch("*[slug.current == $slug] {\n          title,\n          slug,\n          mainImage{\n            asset->{\n              _id,\n              url\n            }\n          },\n          categories[0] -> {\n            title\n          },\n        body,\n        publishedAt\n      }",{slug:r}).then((function(e){return s(e[0])})).catch(console.error)}),[r]),c?Object(D.jsx)(x.a,{className:"themed-container",fluid:"sm",children:Object(D.jsxs)(g.a,{children:[Object(D.jsx)(g.a,{children:Object(D.jsx)(p.a,{children:Object(D.jsxs)("h2",{children:[u(c.categories),c.title]})})}),Object(D.jsx)(g.a,{children:Object(D.jsxs)("p",{className:"text-muted",children:["Posted at ",h(c.publishedAt)," to"," ",c.categories.title]})}),Object(D.jsx)(g.a,{children:Object(D.jsx)(p.a,{children:Object(D.jsx)(O.a,{blocks:c.body,projectId:o.clientConfig.projectID,dataset:o.clientConfig.dataset})})})]})}):Object(D.jsx)(x.a,{style:{padding:"10% 50% 50% 50%"},children:Object(D.jsx)(w.a,{children:""})})}var F=c(142),U=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){o.fetch('*[_type == "post"]{\n          title,\n          slug,\n          publishedAt,\n          categories[0] -> {\n            title\n          }\n        }').then((function(e){return s(e.sort((function(e,t){return Date.parse(t.publishedAt)-Date.parse(e.publishedAt)})))})).catch(console.error)}),[]),Object(D.jsx)(F.a,{striped:!0,hover:!0,children:Object(D.jsx)("tbody",{children:c&&c.map((function(e,t){return Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:Object(D.jsxs)(i.b,{to:"/"+e.slug.current,children:[Object(D.jsxs)("span",{children:[console.log(e),u(e.categories)," ",e.title]},t)," "]},e.slug.current)}),Object(D.jsx)("td",{className:"text-muted",style:{textAlign:"right"},children:h(e.publishedAt)})]})}))})})};function _(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){o.fetch('*[_type == "post"]{\n          title,\n          slug,\n          publishedAt,\n        }').then((function(e){return s(e)})).catch(console.error)}),[]),c?Object(D.jsx)(x.a,{className:"themed-container",fluid:"sm",children:Object(D.jsx)(g.a,{children:Object(D.jsxs)(p.a,{children:[Object(D.jsx)(x.a,{fluid:!0,children:Object(D.jsx)("h1",{className:"display-3",children:"\ud83d\uddc4\ufe0f Archive"})}),Object(D.jsx)(U,{})]})})}):Object(D.jsx)(x.a,{style:{padding:"10% 50% 50% 50%"},children:Object(D.jsx)(w.a,{children:""})})}var B=c(143),M=c(144),P=c(145),R=c(146),H=c(147),J=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2);t[0],t[1];return Object(D.jsxs)(B.a,{color:"dark",dark:!0,expand:"md",style:{padding:"1%"},children:[Object(D.jsx)(M.a,{href:"/",children:"dialectrical's blog"}),Object(D.jsxs)(P.a,{className:"mr-auto",navbar:!0,children:[Object(D.jsx)(R.a,{children:Object(D.jsx)(H.a,{href:"/about-me",children:"About"})}),Object(D.jsx)(R.a,{children:Object(D.jsx)(H.a,{href:"/archive",children:"Archive"})})]})]})};var L=function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)(J,{}),Object(D.jsx)(i.a,{children:Object(D.jsxs)(l.c,{children:[Object(D.jsx)(l.a,{component:N,path:"/",exact:!0}),Object(D.jsx)(l.a,{component:_,path:"/archive"}),Object(D.jsx)(l.a,{component:E,path:"/:slug"})]})})]})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,148)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};c(128);a.a.render(Object(D.jsx)(s.a.StrictMode,{children:Object(D.jsx)(L,{})}),document.getElementById("root")),Y()},50:function(e,t,c){}},[[129,1,2]]]);
//# sourceMappingURL=main.42b70718.chunk.js.map