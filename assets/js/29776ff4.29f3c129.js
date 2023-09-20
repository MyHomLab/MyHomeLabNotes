"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7383],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),k=n,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||a;return r?o.createElement(m,i(i({ref:t},s),{},{components:r})):o.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5362:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:3,title:"Installation",id:"Docker-Install",tags:["Installation","Docker","Docker-Compose"]},i="Docker",l={unversionedId:"General/docker/Docker-Install",id:"General/docker/Docker-Install",title:"Installation",description:"Getting Started with Docker",source:"@site/docs/General/docker/install.md",sourceDirName:"General/docker",slug:"/General/docker/Docker-Install",permalink:"/docs/General/docker/Docker-Install",draft:!1,tags:[{label:"Installation",permalink:"/docs/tags/installation"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"Docker-Compose",permalink:"/docs/tags/docker-compose"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Installation",id:"Docker-Install",tags:["Installation","Docker","Docker-Compose"]},sidebar:"tutorialSidebar",previous:{title:"Config",permalink:"/docs/General/docker/Docker-Config"},next:{title:"Conclusion",permalink:"/docs/General/docker/Docker-Conclusion"}},c={},p=[{value:"Getting Started with Docker",id:"getting-started-with-docker",level:2},{value:"Step 1: Install Docker",id:"step-1-install-docker",level:3},{value:"Step 2: Create a Dockerfile",id:"step-2-create-a-dockerfile",level:3},{value:"Step 3: Build a Docker Image",id:"step-3-build-a-docker-image",level:3},{value:"Step 4: Run a Docker Container",id:"step-4-run-a-docker-container",level:3},{value:"Step 5: Explore Docker Hub",id:"step-5-explore-docker-hub",level:3},{value:"Step 6: Learn Docker Compose",id:"step-6-learn-docker-compose",level:3}],s={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"docker"},"Docker"),(0,n.kt)("h2",{id:"getting-started-with-docker"},"Getting Started with Docker"),(0,n.kt)("p",null,"Here's a simple guide to getting started with Docker:"),(0,n.kt)("h3",{id:"step-1-install-docker"},"Step 1: Install Docker"),(0,n.kt)("p",null,"Install Docker for your operating system by following the instructions on the official Docker website."),(0,n.kt)("h3",{id:"step-2-create-a-dockerfile"},"Step 2: Create a Dockerfile"),(0,n.kt)("p",null,"Create a Dockerfile in your project directory that defines how to build your application image. Specify the base image, copy your application code, and configure any dependencies."),(0,n.kt)("h3",{id:"step-3-build-a-docker-image"},"Step 3: Build a Docker Image"),(0,n.kt)("p",null,"Use the docker build command to build a Docker image from your Dockerfile. For example: docker build -t my-app ."),(0,n.kt)("h3",{id:"step-4-run-a-docker-container"},"Step 4: Run a Docker Container"),(0,n.kt)("p",null,"Start a container from your image with the docker run command: docker run -d -p 80:80 my-app"),(0,n.kt)("h3",{id:"step-5-explore-docker-hub"},"Step 5: Explore Docker Hub"),(0,n.kt)("p",null,"Explore Docker Hub (",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"https://hub.docker.com/"),") to find pre-built images for common software components and services."),(0,n.kt)("h3",{id:"step-6-learn-docker-compose"},"Step 6: Learn Docker Compose"),(0,n.kt)("p",null,"Familiarize yourself with Docker Compose for managing multi-container applications. Create a docker-compose.yml file to define your application's services."))}u.isMDXComponent=!0}}]);