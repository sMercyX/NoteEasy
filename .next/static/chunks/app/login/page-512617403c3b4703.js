(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{4356:(e,t,s)=>{Promise.resolve().then(s.bind(s,7527))},6046:(e,t,s)=>{"use strict";var r=s(6658);s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}})},7527:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(5155),a=s(2115),l=s(6046);function n(){let[e,t]=(0,a.useState)(""),[s,n]=(0,a.useState)(""),[u,o]=(0,a.useState)(""),d=(0,l.useRouter)();return(0,a.useEffect)(()=>{localStorage.getItem("isAuthenticated")&&d.push("/")},[]),(0,r.jsx)("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:(0,r.jsxs)("div",{className:"flex flex-col gap-4 bg-white p-8 rounded shadow-md w-96",children:[(0,r.jsx)("h1",{className:"flex justify-center text-2xl font-bold  ",children:"Login"}),u&&(0,r.jsx)("p",{className:"text-red-500 text-sm ",children:u}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Username"}),(0,r.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),className:"p-2 w-full border rounded"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Password"}),(0,r.jsx)("input",{type:"password",value:s,onChange:e=>n(e.target.value),className:"p-2 w-full border rounded"})]}),(0,r.jsx)("button",{onClick:()=>{"Guy"===e&&"123"===s?(localStorage.setItem("isAuthenticated","true"),localStorage.setItem("username","".concat(e)),d.push("/")):o("Invalid username or password")},className:"py-3 px-4 text-lg hover:text-xl rounded transition-all bg-blue-400 hover:bg-blue-500 text-white",children:"Login"})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(4356)),_N_E=e.O()}]);