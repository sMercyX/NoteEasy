(()=>{var e={};e.id=520,e.ids=[520],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},7937:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,pages:()=>u,routeModule:()=>c,tree:()=>d});var s=r(260),n=r(8203),i=r(5155),o=r.n(i),a=r(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3751)),"/Users/titipong/Documents/GitHub/NoteEasy/src/app/login/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"/Users/titipong/Documents/GitHub/NoteEasy/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/titipong/Documents/GitHub/NoteEasy/src/app/login/page.tsx"],p={require:r,loadChunk:()=>Promise.resolve()},c=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4114:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,6313,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},970:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,6013,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},720:()=>{},448:()=>{},9580:(e,t,r)=>{Promise.resolve().then(r.bind(r,3751))},6428:(e,t,r)=>{Promise.resolve().then(r.bind(r,6131))},6131:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(5512),n=r(8009),i=r(9334);function o(){let[e,t]=(0,n.useState)(""),[r,o]=(0,n.useState)(""),[a,l]=(0,n.useState)(""),d=(0,i.useRouter)();return(0,s.jsx)("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:(0,s.jsxs)("div",{className:"flex flex-col gap-4 bg-white p-8 rounded shadow-md w-96",children:[(0,s.jsx)("h1",{className:"flex justify-center text-2xl font-bold  ",children:"Login"}),a&&(0,s.jsx)("p",{className:"text-red-500 text-sm ",children:a}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Username"}),(0,s.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),className:"p-2 w-full border rounded"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Password"}),(0,s.jsx)("input",{type:"password",value:r,onChange:e=>o(e.target.value),className:"p-2 w-full border rounded"})]}),(0,s.jsx)("button",{onClick:()=>{"Guy"===e&&"123"===r?(localStorage.setItem("isAuthenticated","true"),localStorage.setItem("username",`${e}`),d.push("/")):l("Invalid username or password")},className:"py-3 px-4 text-lg hover:text-xl rounded transition-all bg-blue-400 hover:bg-blue-500 text-white",children:"Login"})]})})}},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>l});var s=r(2740),n=r(2067),i=r.n(n),o=r(4738),a=r.n(o);r(1135);let l={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${i().variable} ${a().variable} antialiased`,children:e})})}},3751:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/titipong/Documents/GitHub/NoteEasy/src/app/login/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/titipong/Documents/GitHub/NoteEasy/src/app/login/page.tsx","default")},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(8077);let n=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[989,843,720],()=>r(7937));module.exports=s})();