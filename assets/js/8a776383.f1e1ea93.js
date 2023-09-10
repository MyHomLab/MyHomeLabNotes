"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},r="Authelia",s={unversionedId:"containers/authelia",id:"containers/authelia",title:"Authelia",description:"Authelia: The Single Sign-On Multi-Factor Portal for Web Apps",source:"@site/docs/containers/authelia.md",sourceDirName:"containers",slug:"/containers/authelia",permalink:"/docs/containers/authelia",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Docker Compose",permalink:"/docs/category/docker-compose"},next:{title:"Traefik",permalink:"/docs/containers/traefik"}},l={},c=[{value:"Authelia: The Single Sign-On Multi-Factor Portal for Web Apps",id:"authelia-the-single-sign-on-multi-factor-portal-for-web-apps",level:2},{value:"Features",id:"features",level:2},{value:"Docker-Compose",id:"docker-compose",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authelia"},"Authelia"),(0,i.kt)("h2",{id:"authelia-the-single-sign-on-multi-factor-portal-for-web-apps"},"Authelia: The Single Sign-On Multi-Factor Portal for Web Apps"),(0,i.kt)("p",null,"Authelia is an open-source authentication and authorization server and portal fulfilling the identity and access management (IAM) role of information security in providing multi-factor authentication and single sign-on (SSO) for your applications via a web portal. It acts as a companion for common reverse proxies."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"Open-source: Authelia is licensed under Apache 2.0 and hosted on GitHub, where you can contribute to its development and report issues.\nLightweight: Authelia has a compressed container size smaller than 20 megabytes and low memory usage, making it one of the most lightweight solutions available.\nFast: Authelia is written in Go and React, and can handle authorization policies and other backend tasks in milliseconds. The login portal has a loading time of 100 milliseconds, making it one of the fastest solutions available.\nSecure: Authelia is designed with security in mind, and offers features such as login regulation, password reset, identity validation, authorization policies, and multiple second-factor methods, including One Time Passwords, Mobile Push Notifications, and WebAuthn.\nScalable: Authelia is designed with high availability in mind, and supports deployment options that allow multiple parallel containers on lifecycle management platforms like Kubernetes.\nIntuitive: Authelia has a simple and user-friendly web interface that guides users through the login process and allows them to manage their settings.\nGetting Started\nTo get started with Authelia, you can follow the Getting Started guide on the official website. It will help you install Authelia using Docker or Kubernetes, configure it with your reverse proxy, set up your users and domains, and test it with some example applications."),(0,i.kt)("p",null,"You can also check out the basic syntax page on the Markdown Guide website to learn how to format your documents using Markdown. Markdown is a simple and easy-to-use markup language that you can use to create headings, lists, tables, links, images, code blocks, and more."),(0,i.kt)("h2",{id:"docker-compose"},"Docker-Compose"))}d.isMDXComponent=!0}}]);