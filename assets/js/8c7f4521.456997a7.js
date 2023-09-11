"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1,title:"Authelia",id:"Authelia",tags:["Authelia","OAuth","Security"]},r="Authelia",l={unversionedId:"containers/authelia/Authelia",id:"containers/authelia/Authelia",title:"Authelia",description:"Introduction",source:"@site/docs/containers/authelia/authelia.md",sourceDirName:"containers/authelia",slug:"/containers/authelia/",permalink:"/docs/containers/authelia/",draft:!1,tags:[{label:"Authelia",permalink:"/docs/tags/authelia"},{label:"OAuth",permalink:"/docs/tags/o-auth"},{label:"Security",permalink:"/docs/tags/security"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Authelia",id:"Authelia",tags:["Authelia","OAuth","Security"]},sidebar:"tutorialSidebar",previous:{title:"Authelia",permalink:"/docs/category/authelia"},next:{title:"Config",permalink:"/docs/containers/authelia/Authelia-Config"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:2},{value:"Docker-Compose",id:"docker-compose",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authelia"},"Authelia"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Authelia is an open-source authentication and authorization server and portal fulfilling the identity and access management (IAM) role of information security in providing multi-factor authentication and single sign-on (SSO) for your applications via a web portal. It acts as a companion for common reverse proxies."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"Open-source: Authelia is licensed under Apache 2.0 and hosted on GitHub, where you can contribute to its development and report issues.\nLightweight: Authelia has a compressed container size smaller than 20 megabytes and low memory usage, making it one of the most lightweight solutions available.\nFast: Authelia is written in Go and React, and can handle authorization policies and other backend tasks in milliseconds. The login portal has a loading time of 100 milliseconds, making it one of the fastest solutions available.\nSecure: Authelia is designed with security in mind, and offers features such as login regulation, password reset, identity validation, authorization policies, and multiple second-factor methods, including One Time Passwords, Mobile Push Notifications, and WebAuthn.\nScalable: Authelia is designed with high availability in mind, and supports deployment options that allow multiple parallel containers on lifecycle management platforms like Kubernetes.\nIntuitive: Authelia has a simple and user-friendly web interface that guides users through the login process and allows them to manage their settings.\nGetting Started\nTo get started with Authelia, you can follow the Getting Started guide on the official website. It will help you install Authelia using Docker or Kubernetes, configure it with your reverse proxy, set up your users and domains, and test it with some example applications."),(0,i.kt)("p",null,"You can also check out the basic syntax page on the Markdown Guide website to learn how to format your documents using Markdown. Markdown is a simple and easy-to-use markup language that you can use to create headings, lists, tables, links, images, code blocks, and more."),(0,i.kt)("h2",{id:"docker-compose"},"Docker-Compose"))}p.isMDXComponent=!0}}]);