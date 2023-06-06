"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1769],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),g=l,k=s["".concat(p,".").concat(g)]||s[g]||m[g]||i;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:l,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7513:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=n(7462),l=n(3366),i=(n(7294),n(4137)),a=["components"],o={slug:"Git_operations",title:"Git\u57fa\u672c\u64cd\u4f5c",date:new Date("2023-05-07T00:00:00.000Z"),authors:"bennett",tags:["program","shell"],keywords:["shell","git"],description:"\u4e00\u4e9bgit\u57fa\u672c\u64cd\u4f5c"},p=void 0,u={permalink:"/en/Git_operations",editUrl:"https://github.com/DawnEver/blog/edit/main/blog/program/git_operations.md",source:"@site/blog/program/git_operations.md",title:"Git\u57fa\u672c\u64cd\u4f5c",description:"\u4e00\u4e9bgit\u57fa\u672c\u64cd\u4f5c",date:"2023-05-07T00:00:00.000Z",formattedDate:"May 7, 2023",tags:[{label:"program",permalink:"/en/tags/program"},{label:"shell",permalink:"/en/tags/shell"}],readingTime:1.9233333333333333,hasTruncateMarker:!0,authors:[{name:"Bennett",title:"full stack elecronical engineer / HUSTer",url:"https://github.com/DawnEver",imageURL:"/img/logo.webp",key:"bennett"}],frontMatter:{slug:"Git_operations",title:"Git\u57fa\u672c\u64cd\u4f5c",date:"2023-05-07T00:00:00.000Z",authors:"bennett",tags:["program","shell"],keywords:["shell","git"],description:"\u4e00\u4e9bgit\u57fa\u672c\u64cd\u4f5c"},nextItem:{title:"\u5982\u4f55\u7528Python\u7ed8\u5236\u7ed5\u7ec4\u8fde\u63a5\u56fe-\u4e0a",permalink:"/en/How-to-draw-winding-connection-diagram-1"}},c={authorsImageUrls:[void 0]},s=[{value:"\u5f00\u59cb",id:"\u5f00\u59cb",level:2},{value:"\u5de5\u4f5c\u6d41\u7a0b",id:"\u5de5\u4f5c\u6d41\u7a0b",level:2},{value:"\u62c9\u53d6",id:"\u62c9\u53d6",level:3},{value:"\u4fee\u6539",id:"\u4fee\u6539",level:3},{value:"\u63a8\u9001",id:"\u63a8\u9001",level:3},{value:"\u5206\u652f\u7ba1\u7406",id:"\u5206\u652f\u7ba1\u7406",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"ssl\u62a5\u9519",id:"ssl\u62a5\u9519",level:3}],m={toc:s},g="wrapper";function k(e){var t=e.components,n=(0,l.Z)(e,a);return(0,i.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5f00\u59cb"},"\u5f00\u59cb"),(0,i.kt)("p",null,"\u8fd9\u91cc\u5e76\u4e0d\u662f\u4e00\u4e2a\u4e25\u8c28\u5168\u9762\u7684git\u6559\u7a0b\uff0c\u53ea\u662f\u4e00\u4e9b\u7ecf\u9a8c\u5206\u4eab\u3002"),(0,i.kt)("p",null,"1.\u4e0b\u8f7d",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/download"},"git")),(0,i.kt)("p",null,"2.\u914d\u7f6e\u4e2a\u4eba\u4fe1\u606f"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'git config --global user.name  "username"  ')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'git config --global user.email  "email"')),(0,i.kt)("p",null,"\u53ea\u8981\u6539\u4e00\u6b21\uff0c\u5f15\u53f7\u91cc\u7684\u4e1c\u897f\u4e0d\u7528\u771f\u5b9e\u4fe1\u606f\uff0c\u5728git log\u91cc\u9762\u663e\u793a\uff0c\u8ba9\u5176\u4ed6\u4eba\u77e5\u9053\u662f\u4f60\u5c31\u884c"),(0,i.kt)("h2",{id:"\u5de5\u4f5c\u6d41\u7a0b"},"\u5de5\u4f5c\u6d41\u7a0b"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6bcf\u6b21\u4fee\u6539\u524d"),"\n",(0,i.kt)("strong",{parentName:"p"},"\u5148\u628a\u670d\u52a1\u5668\u4ee3\u7801\u62c9\u5230\u672c\u5730")),(0,i.kt)("h3",{id:"\u62c9\u53d6"},"\u62c9\u53d6"),(0,i.kt)("p",null,"\u7b2c\u4e00\u79cd"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git fetch")," #\u5c06\u8fdc\u7a0b\u4ee3\u7801\u62c9\u81f3\u672c\u5730"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git diff")," #\u67e5\u770b\u4e24\u4e2a\u4ee3\u7801\u7684\u533a\u522b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git merge")," #\u5408\u5e76"),(0,i.kt)("p",null,"\u7b2c\u4e8c\u79cd"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git pull")," #\u5c06\u670d\u52a1\u5668\u7684\u4ee3\u7801\u76f4\u63a5\u62c9\u5230\u672c\u5730"),(0,i.kt)("p",null,"\u4fee\u6539\u65f6\uff0c\u4f60\u7684\u4fee\u6539\u90fd\u5728\u672c\u5730\u7684\u5de5\u4f5c\u533a"),(0,i.kt)("h3",{id:"\u4fee\u6539"},"\u4fee\u6539"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git add ."),"  #\u5c06\u5de5\u4f5c\u533a\u6240\u6709\u6587\u4ef6\u6dfb\u52a0\u5230\u7f13\u5b58\u533a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git commit -m \u2018blabla\u2019")," #\u5c06\u7f13\u5b58\u533a\u5185\u6587\u4ef6\u63d0\u4ea4\u5230\u672c\u5730\u7248\u672c\u5e93\uff0c\u5f15\u53f7\u91cc\u7684\u4e1c\u897f\u662f\u8fd9\u4e00\u6b21\u63d0\u4ea4\u7684\u5907\u6ce8"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git log")," #\u67e5\u770b\u7248\u672c\u5e93\u7684\u63d0\u4ea4\u8bb0\u5f55\uff08\u6211\u4e00\u822c\u7528\u8fd9\u4e2a\u547d\u4ee4\u548c\u770breadme.md\u6587\u6863\u7684\u53d8\u5316\u6765\u786e\u5b9a\u6709\u6ca1\u6709\u6210\u529f\u540c\u6b65\uff09"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u64cd\u4f5c\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"git log"),"\u4e4b\u540e\uff0c\u8f93\u5165\u884c\u524d\u9762\u662f\u4e00\u4e2a\u5192\u53f7\uff0c\u6b64\u65f6\u8f93\u5165wq\u5c31\u884c\uff0cvim\u64cd\u4f5c")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git reset [hash]")," #\u56de\u5230\u4e4b\u524d\u67d0\u4e2a\u7248\u672c\uff0c","[hash]","\u662f\u4e4b\u524d\u7248\u672c\u7684hash\u503c\uff0c\u53ef\u4ee5\u5728git log\u91cc\u67e5\u770b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git checkout .")," # \u6e05\u9664\u5de5\u4f5c\u533a\u6587\u4ef6"),(0,i.kt)("h3",{id:"\u63a8\u9001"},"\u63a8\u9001"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git push")," #\u5c06\u672c\u5730\u4ee3\u7801\u63a8\u5411\u4e91\u7aef"),(0,i.kt)("h2",{id:"\u5206\u652f\u7ba1\u7406"},"\u5206\u652f\u7ba1\u7406"),(0,i.kt)("p",null,"vscode\u548cpycharm\u90fd\u96c6\u6210\u4e86git\u5de5\u5177\uff08vscode\u5728\u5de6\u4e0b\u89d2\uff0cpycharm\u53ef\u4ee5\u770b\u4e00\u4e0b\uff09"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u672c\u5730\u5206\u652f"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"git branch"),"    #\u663e\u793a\u5f53\u524d\u5206\u652f\n",(0,i.kt)("inlineCode",{parentName:"p"},"git branch [\u5206\u652f\u540d]"),"   #\u521b\u5efa\u5206\u652f\n",(0,i.kt)("inlineCode",{parentName:"p"},"git branch -d [\u5206\u652f\u540d]"),"    #\u5220\u9664\u5206\u652f\n",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout [\u5206\u652f\u540d]")," #\u5207\u6362\u5206\u652f"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4fee\u6539\u4e4b\u540e\u9700\u8981\u63d0\u4ea4\u4fee\u6539\u4e4b\u540e\u624d\u80fd\u5207\u6362\u5206\u652f")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4e91\u7aef\u5206\u652f")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git branch -r")," #\u67e5\u770b\u4e91\u7aef\u5206\u652f"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git push origin [\u672c\u5730\u5206\u652f\u540d]\uff1a[\u8fdc\u7aef\u4ed3\u5e93\u7684\u5206\u652f\u540d\uff0c\u4e5f\u5c31\u662f\u76ee\u6807\u4ed3\u5e93]"),"  #\u63a8\u9001\u5206\u652f\u5230\u4e91\u7aef"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4ed3\u5e93\u64cd\u4f5c"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"git remote remove origin"),"  # \u5220\u9664\uff0c\u4e00\u822c\u4e0d\u7528\u5230\n",(0,i.kt)("inlineCode",{parentName:"p"},"git remote add origin xxx")," # \u6dfb\u52a0\u8fdc\u7a0b\u4ed3\u5e93\n",(0,i.kt)("inlineCode",{parentName:"p"},"git remote set-url origin xxx")," # \u8bbe\u7f6e\u539f\u7a0b\u4ed3\u5e93"),(0,i.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,i.kt)("h3",{id:"ssl\u62a5\u9519"},"ssl\u62a5\u9519"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"warning: ----------------- SECURITY WARNING ----------------\nwarning: | TLS certificate verification has been disabled! |\nwarning: ---------------------------------------------------\nwarning: HTTPS connections may not be secure. See https://aka.ms/gcmcore-tlsverify for more information.\n")),(0,i.kt)("p",null,"\u89e3\u51b3\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git config --global http.sslVerify false\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u53c2\u8003\u9605\u8bfb\n",(0,i.kt)("a",{parentName:"p",href:"https://csdiy.wiki/%E5%BF%85%E5%AD%A6%E5%B7%A5%E5%85%B7/Git/"},"CS\u81ea\u5b66\u6307\u5357git")))}k.isMDXComponent=!0}}]);