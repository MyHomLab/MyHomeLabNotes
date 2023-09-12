"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5523],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>y});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(o),p=r,y=d["".concat(c,".").concat(p)]||d[p]||h[p]||a;return o?n.createElement(y,s(s({ref:t},l),{},{components:o})):n.createElement(y,s({ref:t},l))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=o[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7660:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:1,title:"Introduction",id:"Dashy-Introduction",tags:["Introduction"]},s="Introduction",i={unversionedId:"containers/dashy/Dashy-Introduction",id:"containers/dashy/Dashy-Introduction",title:"Introduction",description:"Dashy: The Ultimate Homepage for Your Homelab",source:"@site/docs/containers/dashy/intro.md",sourceDirName:"containers/dashy",slug:"/containers/dashy/Dashy-Introduction",permalink:"/docs/containers/dashy/Dashy-Introduction",draft:!1,tags:[{label:"Introduction",permalink:"/docs/tags/introduction"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",id:"Dashy-Introduction",tags:["Introduction"]},sidebar:"tutorialSidebar",previous:{title:"Dashy",permalink:"/docs/category/dashy"},next:{title:"Config",permalink:"/docs/containers/dashy/Dashy-Config"}},c={},u=[{value:"Dashy: The Ultimate Homepage for Your Homelab",id:"dashy-the-ultimate-homepage-for-your-homelab",level:2},{value:"What is Dashy?",id:"what-is-dashy",level:2}],l={toc:u},d="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("h2",{id:"dashy-the-ultimate-homepage-for-your-homelab"},"Dashy: The Ultimate Homepage for Your Homelab"),(0,r.kt)("p",null,"Do you have a lot of self-hosted services that you want to access from a single place? Do you want to customize the look and feel of your homepage with themes, icons, widgets, and more? Do you want to monitor the status of your services and display dynamic content from various sources?"),(0,r.kt)("p",null,"If you answered yes to any of these questions, then you need Dashy."),(0,r.kt)("h2",{id:"what-is-dashy"},"What is Dashy?"),(0,r.kt)("p",null,"Dashy is an open source, highly customizable, easy to use, privacy-respecting dashboard app that helps you organize your self-hosted services by making them accessible from a single place\xb9. Dashy lets you create multiple pages with different categories and subcategories of apps or links, and launch them with various methods. Dashy also provides features such as status-checking, widgets, themes, icon packs, a UI editor and tons more\xb9."),(0,r.kt)("p",null,"Dashy is not just another dashboard app. It is a solution that offers many benefits over other alternatives. Here are some of the reasons why you should choose Dashy:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is lightweight, fast, efficient, scalable, and secure by design. It has a compressed container size smaller than 20 megabytes and observed memory usage normally under 30 megabytes\xb2. It is written in Go and React, which makes it perform backend tasks in milliseconds and load the web UI in 100 milliseconds\xb2. It has low CPU usage when idle or active, which saves electricity and reduces environmental impact\xb2. It is designed with high availability in mind, and can be deployed on platforms like Kubernetes with multiple parallel containers\xb2. It follows the best practices of security engineering, such as using secure protocols, encrypting sensitive data, hashing passwords, and applying security headers\xb3."),(0,r.kt)("li",{parentName:"ul"},"It is easy to install, configure, and use. It has a comprehensive documentation that guides you through the installation process on various platforms, such as Docker Compose, Kubernetes, or Bare Metal\xb9. It has a simple yet powerful configuration file that lets you customize every aspect of Dashy's behavior. It has a user-friendly web UI that allows you to monitor the status of your services and routes."),(0,r.kt)("li",{parentName:"ul"},"It is open-source and community-driven. It is licensed under Apache License 2.0, which means you can use it for free for any purpose. It has an active GitHub repository where you can find the source code, report issues, request features, contribute code, or join discussions\xb2. It has a vibrant community of users and developers who support each other on Discord.")))}h.isMDXComponent=!0}}]);