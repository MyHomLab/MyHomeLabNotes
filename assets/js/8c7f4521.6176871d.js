"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6886],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var i=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(a),p=o,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||n;return a?i.createElement(f,r(r({ref:t},c),{},{components:a})):i.createElement(f,r({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<n;u++)r[u]=a[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5402:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var i=a(7462),o=(a(7294),a(3905));const n={sidebar_position:1,title:"Authelia",id:"Authelia",tags:["Authelia","OAuth","Security"]},r=void 0,s={unversionedId:"containers/authelia/Authelia",id:"containers/authelia/Authelia",title:"Authelia",description:"I can write a markdown blog for Authelia. Here is an example:",source:"@site/docs/containers/authelia/authelia.md",sourceDirName:"containers/authelia",slug:"/containers/authelia/",permalink:"/docs/containers/authelia/",draft:!1,tags:[{label:"Authelia",permalink:"/docs/tags/authelia"},{label:"OAuth",permalink:"/docs/tags/o-auth"},{label:"Security",permalink:"/docs/tags/security"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Authelia",id:"Authelia",tags:["Authelia","OAuth","Security"]},sidebar:"tutorialSidebar",previous:{title:"Authelia",permalink:"/docs/category/authelia"},next:{title:"Config",permalink:"/docs/containers/authelia/Authelia-Config"}},l={},u=[{value:"What is Authelia?",id:"what-is-authelia",level:2},{value:"Why choose Authelia?",id:"why-choose-authelia",level:2},{value:"How to get started with Authelia?",id:"how-to-get-started-with-authelia",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u},h="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I can write a markdown blog for Authelia. Here is an example:"),(0,o.kt)("h1",{id:"authelia-the-ultimate-authentication-and-authorization-solution-for-your-web-applications"},"Authelia: The Ultimate Authentication and Authorization Solution for Your Web Applications"),(0,o.kt)("p",null,"Do you want to protect your web applications from unauthorized access and enhance your online security? Do you want to log in once and access multiple web applications without entering your credentials again and again? Do you want to choose the best authentication method that suits your needs and preferences?"),(0,o.kt)("p",null,"If you answered yes to any of these questions, then you need Authelia."),(0,o.kt)("h2",{id:"what-is-authelia"},"What is Authelia?"),(0,o.kt)("p",null,"Authelia is a powerful and open-source authentication and authorization server that provides multi-factor authentication and single sign-on for your web applications. It is designed to enhance the security and convenience of your online experience by verifying your identity and granting you access to the resources you need."),(0,o.kt)("p",null,"Authelia works as a companion for common reverse proxies, such as Nginx or Traefik, that act as the gateway between your users and your web applications. Authelia intercepts the requests from the reverse proxy and performs various checks before allowing or denying the access. These checks include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Login regulation: Authelia limits the number of login attempts per user and locks them out for a period of time if they exceed the limit. This prevents brute force attacks and protects your accounts from unauthorized access."),(0,o.kt)("li",{parentName:"ul"},"Password reset: Authelia allows users to reset their LDAP or internal passwords with email validation right from the web interface. This reduces the hassle of contacting the administrator or resetting the password manually."),(0,o.kt)("li",{parentName:"ul"},"Single sign-on: Authelia enables users to log in once to a wide range of web applications via a session cookie, OpenID Connect 1.0, or Trusted Headers. This saves time and improves the user experience."),(0,o.kt)("li",{parentName:"ul"},"Authorization policies: Authelia lets you control which users and groups have access to which specific resources or domains with granular policy definitions. You can also set different levels of authentication depending on the sensitivity of the resource."),(0,o.kt)("li",{parentName:"ul"},"Identity validation: Authelia requires users who have not configured a second-factor device to validate their identity via an email before accessing the web applications. This reduces the chance that an attacker could exploit a lazy or compromised user."),(0,o.kt)("li",{parentName:"ul"},"Multi-factor authentication: Authelia supports multiple second-factor methods, such as One Time Passwords, Mobile Push Notifications, and WebAuthn. You can choose the method that suits your preference and security needs.")),(0,o.kt)("h2",{id:"why-choose-authelia"},"Why choose Authelia?"),(0,o.kt)("p",null,"Authelia is not just another authentication and authorization server. It is a solution that offers many benefits over other alternatives. Here are some of the reasons why you should choose Authelia:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It is lightweight, fast, efficient, scalable, and secure by design. It has a compressed container size smaller than 20 megabytes and observed memory usage normally under 30 megabytes. It is written in Go and React, which makes it perform authorization policies and other backend tasks in milliseconds and load the login portal in 100 milliseconds. It has low CPU usage when idle or active, which saves electricity and reduces environmental impact. It is designed with high availability in mind, and can be deployed on platforms like Kubernetes with multiple parallel containers. It follows the best practices of security engineering, such as using secure protocols, encrypting sensitive data, hashing passwords, and applying security headers."),(0,o.kt)("li",{parentName:"ul"},"It is easy to install, configure, and use. It has a comprehensive documentation that guides you through the installation process on various platforms, such as Docker Compose, Kubernetes, or Bare Metal. It has a simple yet powerful configuration file that lets you customize every aspect of Authelia's behavior. It has a user-friendly web interface that allows you to log in, register, reset password, configure second-factor devices, and more."),(0,o.kt)("li",{parentName:"ul"},"It is open-source and community-driven. It is licensed under Apache License 2.0, which means you can use it for free for any purpose. It has an active GitHub repository where you can find the source code, report issues, request features, contribute code, or join discussions. It has a vibrant community of users and developers who support each other on Discord.")),(0,o.kt)("h2",{id:"how-to-get-started-with-authelia"},"How to get started with Authelia?"),(0,o.kt)("p",null,"If you are interested in trying out Authelia for yourself, you can follow these steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visit their website and read their documentation to learn more about Authelia's features and requirements."),(0,o.kt)("li",{parentName:"ul"},"Choose your preferred platform for deploying Authelia, such as Docker Compose, Kubernetes, or Bare Metal, and follow the installation instructions on their documentation."),(0,o.kt)("li",{parentName:"ul"},"Configure your reverse proxy to work with Authelia by following their examples for Nginx or Traefik on their documentation."),(0,o.kt)("li",{parentName:"ul"},"Configure your web applications to use Authelia as an authentication provider by following their examples for various applications on their documentation."),(0,o.kt)("li",{parentName:"ul"},"Enjoy your secure and convenient online experience with Authelia!")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"))}d.isMDXComponent=!0}}]);