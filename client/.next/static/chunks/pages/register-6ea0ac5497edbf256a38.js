_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{CfaW:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return r("pn/8")}])},M36i:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"c",(function(){return j})),r.d(t,"b",(function(){return O}));var n=r("nKUr"),a=r("o0o1"),c=r.n(a),o=r("HaE+"),s=r("rePB"),u=r("q1tI"),i=r("vDqi"),l=r.n(i);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=Object(u.createContext)({authenticated:!1,user:null,loading:!0}),b=Object(u.createContext)(null),h=function(e,t){var r=t.type,n=t.payload;switch(r){case"LOGIN":return p(p({},e),{},{authenticated:!0,user:n});case"LOGOUT":return p(p({},e),{},{authenticated:!1,user:null});case"STOP_LOADING":return p(p({},e),{},{loading:!1});default:throw new Error("Unknown action type: ".concat(r))}},v=function(e){var t=e.children,r=Object(u.useReducer)(h,{user:null,authenticated:!1,loading:!0}),a=r[0],s=r[1],i=function(e,t){return s({type:e,payload:t})};return Object(u.useEffect)((function(){function e(){return(e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("/auth/me");case 3:t=e.sent,i("LOGIN",t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,i("STOP_LOADING"),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.jsx)(b.Provider,{value:i,children:Object(n.jsx)(d.Provider,{value:a,children:t})})},j=function(){return Object(u.useContext)(d)},O=function(){return Object(u.useContext)(b)}},TSYQ:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===c)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),a=r("284h");t.__esModule=!0,t.default=void 0;var c=a(r("q1tI")),o=r("elyg"),s=r("nOHt"),u=r("vNVm"),i={};function l(e,t,r,n){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,s.useRouter)(),a=r&&r.pathname||"/",f=c.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),r=n(t,2),c=r[0],s=r[1];return{href:c,as:e.as?(0,o.resolveHref)(a,e.as):s||c}}),[a,e.href,e.as]),p=f.href,d=f.as,b=e.children,h=e.replace,v=e.shallow,j=e.scroll,O=e.locale;"string"===typeof b&&(b=c.default.createElement("a",null,b));var m=c.Children.only(b),g=m&&"object"===typeof m&&m.ref,y=(0,u.useIntersection)({rootMargin:"200px"}),x=n(y,2),w=x[0],N=x[1],P=c.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,c.useEffect)((function(){var e=N&&t&&(0,o.isLocalURL)(p),n="undefined"!==typeof O?O:r&&r.locale,a=i[p+"%"+d+(n?"%"+n:"")];e&&!a&&l(r,p,d,{locale:n})}),[d,p,N,O,t,r]);var E={ref:P,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,c,s,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(r))&&(e.preventDefault(),null==s&&(s=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:c,locale:u,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,r,p,d,h,v,j,O)},onMouseEnter:function(e){(0,o.isLocalURL)(p)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(r,p,d,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var k="undefined"!==typeof O?O:r&&r.locale,_=(0,o.getDomainLocale)(d,k,r&&r.locales,r&&r.domainLocales);E.href=_||(0,o.addBasePath)((0,o.addLocale)(d,k,r&&r.defaultLocale))}return c.default.cloneElement(m,E)};t.default=f},g4pe:function(e,t,r){e.exports=r("8Kt/")},"pn/8":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return g}));var n=r("nKUr"),a=r("o0o1"),c=r.n(a),o=r("rePB"),s=r("HaE+"),u=r("q1tI"),i=r("g4pe"),l=r.n(i),f=r("YFqc"),p=r.n(f),d=r("20a2"),b=r("vDqi"),h=r.n(b),v=r("uIqA"),j=r("M36i");function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(){var e=Object(u.useState)(""),t=e[0],r=e[1],a=Object(u.useState)(""),o=a[0],i=a[1],f=Object(u.useState)(""),b=f[0],O=f[1],g=Object(u.useState)(!1),y=g[0],x=g[1],w=Object(u.useState)({}),N=w[0],P=w[1],E=Object(j.c)().authenticated,k=Object(d.useRouter)();E&&k.push("/");var _=function(){var e=Object(s.a)(c.a.mark((function e(r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),y){e.next=4;break}return P(m(m({},N),{},{agreement:"You must agree to receiving our email!!!!"})),e.abrupt("return");case 4:return e.prev=4,e.next=7,h.a.post("/auth/register",{email:t,password:b,username:o});case 7:k.push("/login"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0),P(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"flex bg-white",children:[Object(n.jsx)(l.a,{children:Object(n.jsx)("title",{children:"Register"})}),Object(n.jsx)("div",{className:"h-screen bg-center bg-cover w-36",style:{backgroundImage:"url('".concat("http://localhost:5000","/images/karsten-winegeart.jpg')")}}),Object(n.jsx)("div",{className:"flex flex-col justify-center pl-6",children:Object(n.jsxs)("div",{className:"w-72",children:[Object(n.jsx)("h1",{className:"mb-2 text-lg font-medium",children:"Sign Up"}),Object(n.jsx)("p",{className:"mb-10 text-xs",children:"By continuing, you agree to our User Agreement and Privacy Policy."}),Object(n.jsxs)("form",{onSubmit:_,children:[Object(n.jsxs)("div",{className:"mb-6",children:[Object(n.jsx)("input",{type:"checkbox",className:"mr-1 cursor-pointer",id:"agreement",checked:y,onChange:function(e){return x(e.target.checked)}}),Object(n.jsx)("label",{htmlFor:"agreement",className:"text-xs cursor-pointer",children:"I agree to get emails about cool stuff on Readit"}),Object(n.jsx)("small",{className:"block font-medium text-red-600",children:N.agreement})]}),Object(n.jsx)(v.a,{className:"mb-2",type:"email",placeholder:"Email",value:t,error:N.email,setValue:r}),Object(n.jsx)(v.a,{className:"mb-2",type:"text",placeholder:"Username",value:o,error:N.username,setValue:i}),Object(n.jsx)(v.a,{className:"mb-4",type:"password",placeholder:"password",value:b,error:N.password,setValue:O}),Object(n.jsx)("button",{className:"w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border border-blue-500 rounded hover:bg-blue-400",children:"Sign Up"})]}),Object(n.jsxs)("small",{children:["Already a Readiter?",Object(n.jsx)(p.a,{href:"/login",children:Object(n.jsx)("a",{className:"ml-1 font-medium text-blue-500 uppercase hover:text-blue-400",children:"Log In"})})]})]})})]})}},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},uIqA:function(e,t,r){"use strict";var n=r("nKUr"),a=r("TSYQ"),c=r.n(a);t.a=function(e){var t=e.className,r=e.type,a=e.placeholder,o=e.value,s=e.error,u=e.setValue;return Object(n.jsxs)("div",{className:t,children:[Object(n.jsx)("input",{type:r,className:c()("w-full p-3 transition duration-200 border border-gray-300 rounded outline-none bg-gray-50 focused:bg-white hover:bg-white ",{"border-red-500":s}),placeholder:a,value:o,onChange:function(e){return u(e.target.value)}}),Object(n.jsx)("small",{className:"font-medium text-red-600",children:s})]})}},vNVm:function(e,t,r){"use strict";var n=r("J4zp"),a=r("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!s,a=(0,c.useRef)(),i=(0,c.useState)(!1),l=n(i,2),f=l[0],p=l[1],d=(0,c.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),r||f||e&&e.tagName&&(a.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=u.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,c=n.observer,o=n.elements;return o.set(e,t),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),u.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[r,t,f]);return(0,c.useEffect)((function(){s||f||(0,o.default)((function(){return p(!0)}))}),[f]),[d,f]};var c=r("q1tI"),o=a(r("0G5g")),s="undefined"!==typeof IntersectionObserver;var u=new Map}},[["CfaW",0,2,1,3]]]);