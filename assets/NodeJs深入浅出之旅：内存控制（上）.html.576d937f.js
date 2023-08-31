import{_ as c,r as i,o as t,c as d,a as e,b as s,d as a,e as o}from"./app.bf64ff6a.js";const l={},r=e("hr",null,null,-1),p=e("hr",null,null,-1),h=a("\u5C0F\u77E5\u8BC6\uFF0C\u5927\u6311\u6218\uFF01\u672C\u6587\u6B63\u5728\u53C2\u4E0E\u201C"),u={href:"https://juejin.cn/post/7008476801634680869",title:"https://juejin.cn/post/7008476801634680869",target:"_blank",rel:"noopener noreferrer"},m=a("\u7A0B\u5E8F\u5458\u5FC5\u5907\u5C0F\u77E5\u8BC6"),b=a("\u201D\u521B\u4F5C\u6D3B\u52A8\u3002"),g=o('<h1 id="\u5185\u5B58\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u63A7\u5236" aria-hidden="true">#</a> \u5185\u5B58\u63A7\u5236</h1><p><code>JavaScript</code>\u901A\u8FC7<strong>\u5783\u573E\u56DE\u6536\u673A\u5236</strong>\u6765\u8FDB\u884C\u81EA\u52A8\u5185\u5B58\u7BA1\u7406\uFF0C\u4F7F\u5F97\u5F00\u53D1\u8005\u4E0D\u9700\u8981\u50CF<code>C/C++</code>\u4E00\u6837\u5728\u7F16\u5199\u4EE3\u7801\u7684\u8FC7\u7A0B\u4E2D\u65F6\u523B\u5173\u6CE8\u5185\u5B58\u7684\u5206\u914D\u548C\u91CA\u653E\u3002</p><p>\u5728\u6D4F\u89C8\u5668\u4E2D\u8FDB\u884C\u5F00\u53D1\u65F6\uFF0C\u51E0\u4E4E\u5F88\u5C11\u6709\u4EBA\u4F1A\u9047\u5230\u5783\u573E\u56DE\u6536\u5BF9\u5E94\u7528\u6784\u6210\u6027\u80FD\u5F71\u54CD\u7684\u60C5\u51B5\u3002</p><p><code>Node</code>\u6781\u5927\u5730\u62D3\u5BBD\u4E86<code>JavaScript</code>\u7684\u5E94\u7528\u573A\u666F\uFF0C\u5F53\u4E3B\u6D41\u5E94\u7528\u573A\u666F\u4ECE<strong>\u5BA2\u6237\u7AEF</strong>\u5EF6\u4F38\u5230<strong>\u670D\u52A1\u5668\u7AEF</strong>\u4E4B\u540E\uFF0C\u80FD\u53D1\u73B0\uFF0C\u5BF9\u4E8E\u6027\u80FD\u654F\u611F\u7684\u670D\u52A1\u5668\u7A0B\u5E8F\uFF0C\u5185\u5B58\u7BA1\u7406\u7684\u597D\u574F\u3001\u5783\u573E\u56DE\u6536\u72B6\u51B5\u662F\u5426\u4F18\u826F\uFF0C\u90FD\u4F1A\u5BF9\u670D\u52A1\u6784\u6210\u5F71\u54CD\u3002</p><h3 id="\u4E3A\u4EC0\u4E48\u5173\u6CE8\u5185\u5B58\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u5173\u6CE8\u5185\u5B58\u95EE\u9898" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u5173\u6CE8\u5185\u5B58\u95EE\u9898</h3><ul><li>\u9632\u6B62\u9875\u9762\u5360\u7528\u5185\u5B58\u8FC7\u5927\uFF0C\u5F15\u8D77\u5BA2\u6237\u7AEF\u5361\u987F\uFF0C\u751A\u81F3\u65E0\u54CD\u5E94\uFF08\u6D4F\u89C8\u5668\u7AEF\uFF09</li><li>Node\u4F7F\u7528\u7684\u4E5F\u662FV8\uFF0C\u5185\u5B58\u5BF9\u540E\u7AEF\u670D\u52A1\u7684\u6027\u80FD\u81F3\u5173\u91CD\u8981\u3002\u56E0\u4E3A\u670D\u52A1\u7684\u6301\u4E45\u6027\uFF0C\u540E\u7AEF\u5BB9\u6613\u9020\u6210\u5185\u5B58\u6EA2\u51FA</li></ul><hr><h2 id="node\u4E0Ev8" tabindex="-1"><a class="header-anchor" href="#node\u4E0Ev8" aria-hidden="true">#</a> Node\u4E0EV8</h2><p>\u5728<code>Node</code>\u4E2D\uFF0C\u8FD9\u4E00\u5207\u90FD\u4E0ENode\u7684JavaScript\u6267\u884C\u5F15\u64CEV8\u606F\u606F\u76F8\u5173\u3002 Node\u5728\u53D1\u5C55\u5386\u7A0B\u4E2D\u79BB\u4E0D\u5F00V8\uFF0C\u5728Node\u7684\u5B98\u7F51\u4ECB\u7ECD\u4E2D\u4E5F\u662F\u8BF4\uFF1A<code>Node.js \u662F\u4E00\u4E2A\u57FA\u4E8E Chrome V8 \u5F15\u64CE\u7684 JavaScript \u8FD0\u884C\u65F6</code></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c53574bccac24704ae2046ca495b3e0e~tplv-k3u1fbpfcp-watermark.image?" alt="Node\u5B98\u7F51.png"></p>',10),v=a("\u5728\u5F53\u521DNode\u521B\u59CB\u4EBA"),k=e("code",null,"Ryan Dahl",-1),_=a("\u9009\u62E9V8\u4F5C\u4E3ANode\u7684JavaScript\u811A\u672C\u5F15\u64CE\uFF0C\u539F\u56E0\u662F\u6765\u81EA\u5F53\u65F6\u7B2C\u4E09\u6B21\u6D4F\u89C8\u5668\u5927\u6218\uFF0C\u5728\u5176\u4E2DChrome\u4EE5JavaScript\u5F15\u64CEV8\u6210\u4E3A\u6027\u80FD\u4F18\u5F02\u7684\u7126\u70B9\uFF0C\u5E76\u4E14\u5728\u63A5\u4E0B\u6765\u7684\u6027\u80FD\u8DD1\u5206\u4E2D\uFF0CV8\u6301\u7EED\u9886\u8DD1\u3002 \u6211\u66FE\u7ECF\u5728"),f={href:"https://juejin.cn/post/6975821911678779406",target:"_blank",rel:"noopener noreferrer"},w=a("\u300A\u65F6\u4EE3\u53D8\u4E86\uFF0C\u7A0B\u5E8F\u5458\u306E\u8001\u51A4\u5BB6IE\u6D4F\u89C8\u5668\u79BB\u573A\u5566\uFF1F\uFF01\u300B"),y=a(" \u4E2D\u8BB2\u8FC7\u524D\u4E24\u6B21\u5927\u6218\uFF0C\u7B2C\u4E09\u6B21\u5927\u6218\u4E3B\u8981\u662F\u4EE5"),x=e("strong",null,"Chrome",-1),S=a("\u7684\u80DC\u5229\u4E3A\u7ED3\u675F\u3002"),j=e("h2",{id:"v8\u5F15\u64CE",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#v8\u5F15\u64CE","aria-hidden":"true"},"#"),a(" V8\u5F15\u64CE")],-1),V=e("p",null,[a("V8\u5F15\u64CE\u7684\u5F00\u53D1\u9886\u5BFC\u8005\u662F"),e("code",null,"Lars Bak"),a("\uFF0C\u7B2C\u4E00\u4E2A\u7248\u672C\u548CChrome\u7684\u7B2C\u4E00\u7248\u4E00\u8D77\u57282008\u5E749\u67082\u65E5\u53D1\u5E03\u3002")],-1),C=e("p",null,[e("code",null,"Lars Bak"),a("\u7684\u5DE5\u4F5C\u5C65\u5386\u5927\u90E8\u5206\u662F\u4ECE\u4E8B\u4E0E\u865A\u62DF\u673A\u76F8\u5173\u7684\u5DE5\u4F5C\uFF0C\u4E3B\u8981\u81F4\u529B\u4E8E\u5F00\u53D1\u9AD8\u6027\u80FD\u7684Java\u865A\u62DF\u673A\uFF0C\u5F00\u53D1\u8005\u7684\u8FD9\u4E9B\u7ECF\u5386\u4E5F\u8BA9V8\u8BDE\u751F\u65F6\u5C31\u8D85\u8D8A\u4E86\u5F53\u65F6\u6240\u6709\u7684JavaScript\u865A\u62DF\u673A\u3002")],-1),N=e("p",null,"V8\u5F15\u64CE\u662F\u7531C++\u7F16\u5199\u7684\u3002",-1),J=e("p",null,"V8\u5F15\u64CE\u7684\u5783\u573E\u56DE\u6536\u673A\u5236\uFF1A",-1),q=o("<li>\u5728V8\u7684\u5185\u5B58\u5206\u914D\u4E2D\u5206\u4E3A\u5806\u548C\u6808 <ul><li>\u6808\u5185\u5B58\u5B58\u50A8\u57FA\u672C\u7C7B\u578B\u6570\u636E\u4EE5\u53CA\u5F15\u7528\u7C7B\u578B\u6570\u636E\u7684\u5185\u5B58\u5730\u5740</li><li>\u5806\u5185\u5B58\u50A8\u5B58\u5F15\u7528\u7C7B\u578B\u7684\u6570\u636E</li></ul></li><li>\u5783\u573E\u56DE\u6536\u4E3B\u8981\u5B58\u5728\u4E8E\u5806\u7684\u65B0\u751F\u4EE3\u548C\u8001\u751F\u4EE3</li><li>\u65B0\u751F\u4EE3\u4E2D\u5206\u4E3A\u4E24\u4E2A\u7A7A\u95F4\uFF0C<code>Semi space from</code>\u548C<code>Semi space To</code>\uFF0C\u8FD9\u4E24\u4E2A\u7A7A\u95F4\u4E25\u683C\u5BF9\u534A\u5206</li><li>\u8001\u751F\u4EE3:\u4ECE\u65B0\u751F\u4EE3\u7A7A\u95F4\u7ECF\u8FC7\u81F3\u5C11\u4E24\u8F6E<code>Minor GC</code>\u4ECD\u7136\u5B58\u6D3B\u4E0B\u6765\u7684\u6570\u636E</li><li>\u5185\u5B58\u5927\u5C0F\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u6709\u5173\uFF0C<code>64\u4F4D</code>\u662F<code>1.4G</code>\uFF0C<code>32\u4F4D</code>\u662F<code>0.7G</code><ul><li>64\u4F4D\u65B0\u751F\u4EE3\u7A7A\u95F4\u662F<code>64MB</code>\uFF0C\u8001\u751F\u4EE3\u4E3A<code>1400MB</code></li><li>32\u4F4D\u65B0\u751F\u4EE3\u7A7A\u95F4\u662F<code>32MB</code>\uFF0C\u8001\u751F\u4EE3\u4E3A<code>700MB</code></li><li>\u65B0\u7248\u7684Node\u5728v14\u4E4B\u540E\uFF0C\u5185\u5B58\u5DF2\u7ECF\u67092G\u4E86</li></ul></li>",5),M=a("\u65B0\u751F\u4EE3\u548C\u8001\u751F\u4EE3\u7528\u7684\u662F\u4E24\u79CD\u5B8C\u5168\u4E0D\u540C\u7684\u5783\u573E\u56DE\u6536\u673A\u5236 "),B=e("li",null,[a("\u65B0\u751F\u4EE3"),e("code",null,"Scavenge"),a("\u7B97\u6CD5\uFF08\u65B0\u751F\u4EE3\u4E92\u6362\uFF09")],-1),G=e("li",null,[a("\u8001\u751F\u4EE3\u662F\u6807\u8BB0\u6574\u7406\u6E05\u9664\uFF1A"),e("code",null,"Mark-Sweep"),a("\uFF08\u6807\u8BB0\u6E05\u9664\uFF09\u3001 "),e("code",null,"Mark-Compact"),a("\uFF08\u6807\u8BB0\u6574\u7406\uFF09")],-1),L=a("\u53C2\u8003\u94FE\u63A5\uFF1A"),T={href:"https://blog.csdn.net/weixin_39987434/article/details/115375921",target:"_blank",rel:"noopener noreferrer"},E=a("https://blog.csdn.net/weixin_39987434/article/details/115375921"),I=o(`<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/50d6e216010e4937b8f8de586bf9eaef~tplv-k3u1fbpfcp-watermark.image?" alt="\u5806\u548C\u6808.png"></p><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">graph</span> RL<span class="token punctuation">;</span>
<span class="token keyword">subgraph</span> V8\u5185\u5B58\u5206\u914D
<span class="token keyword">subgraph</span> Heap memory\u5806
<span class="token keyword">subgraph</span> New space\u65B0\u751F\u4EE3
n<span class="token text string">[&quot;\u662F\u6700\u65B0\u4EA7\u751F\u7684\u6570\u636E\u5B58\u6D3B\u7684\u5730\u65B9\uFF0C\u8FD9\u4E9B\u6570\u636E\u5F80\u5F80\u90FD\u662F\u77ED\u6682\u7684&quot;]</span>
<span class="token keyword">subgraph</span> Semi space from
\u5904\u4E8E\u4F7F\u7528\u72B6\u6001\u7684\u7A7A\u95F4
<span class="token keyword">end</span>\\
<span class="token keyword">subgraph</span> Semi space To
\u5904\u4E8E\u95F2\u7F6E\u72B6\u6001\u7684\u7A7A\u95F4
<span class="token keyword">end</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Old space\u8001\u751F\u4EE3
o<span class="token text string">[\u4ECE\u65B0\u751F\u4EE3\u7A7A\u95F4\u7ECF\u8FC7\u81F3\u5C11\u4E24\u8F6EMinor GC\u4ECD\u7136\u5B58\u6D3B\u4E0B\u6765\u7684\u6570\u636E]</span>
<span class="token keyword">subgraph</span> Old pointer space
o1<span class="token text string">[&quot;\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u6709\u6307\u9488\u5F15\u7528\u6216\u8005\u6307\u5411\u5176\u4ED6\u5BF9\u8C61\uFF0C\u90A3\u4E48\u4FDD\u5B58\u5728pointer space&quot;]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Old data space
o2<span class="token text string">[&quot;\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u662F\u4E00\u4E2A\u539F\u59CB\u5BF9\u8C61\uFF0C\u6CA1\u6709\u6307\u9488\u5F15\u7528\uFF0C\u90A3\u4E48\u4FDD\u5B58\u5728data space&quot;]</span>
<span class="token keyword">end</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Large object space\u5927\u5BF9\u8C61\u7A7A\u95F4
d<span class="token text string">[&quot;\u6BD4\u7A7A\u95F4\u5927\u5C0F\u8FD8\u8981\u5927\u7684\u5BF9\u8C61, \u5927\u5BF9\u8C61\u4E0D\u4F1A\u88ABgc\uFF08\u5783\u573E\u56DE\u6536\uFF09\u5904\u7406&quot;]</span><span class="token arrow operator">--&gt;</span>d1<span class="token text string">[&quot;\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8D85\u8FC7\u4E86\u9ED8\u8BA4\u5B9A\u4E49\u7684\u5927\u5C0F\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5BF9\u8C61\u5C31\u4F1A\u653E\u5728\u5927\u5BF9\u8C61\u7A7A\u95F4\u4E2D&quot;]</span>
<span class="token keyword">end</span>
<span class="token keyword">subgraph</span> Code space\u4EE3\u7801\u7A7A\u95F4
d3<span class="token text string">[\u662FJIT\u6240\u7F16\u8BD1\u7684\u4EE3\u7801]</span> <span class="token arrow operator">--&gt;</span> \u9664\u4E86\u5728\u5927\u5BF9\u8C61\u7A7A\u95F4\u4E2D\u5206\u914D\u4EE3\u7801\u5E76\u6267\u884C\u4E4B\u5916\u7684\u552F\u4E00\u53EF\u6267\u884C\u7684\u7A7A\u95F4
<span class="token keyword">end</span>
<span class="token keyword">end</span>

<span class="token keyword">subgraph</span> Stack\u6808
\u6808\u5185\u5B58\u5B58\u50A8\u57FA\u672C\u7C7B\u578B\u6570\u636E\u4EE5\u53CA\u5F15\u7528\u7C7B\u578B\u6570\u636E\u7684\u5185\u5B58\u5730\u5740
<span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B0\u751F\u4EE3scavenge\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B0\u751F\u4EE3scavenge\u7B97\u6CD5" aria-hidden="true">#</a> \u65B0\u751F\u4EE3<code>Scavenge</code>\u7B97\u6CD5</h3><p>\u65B0\u751F\u4EE3\u5B58\u7684\u90FD\u662F\u751F\u5B58\u5468\u671F\u77ED\u7684\u5BF9\u8C61\uFF0C\u5206\u914D\u5185\u5B58\u4E5F\u5F88\u5BB9\u6613\uFF0C\u53EA\u4FDD\u5B58\u4E00\u4E2A\u6307\u5411\u5185\u5B58\u7A7A\u95F4\u7684\u6307\u9488\uFF0C\u6839\u636E\u5206\u914D\u5BF9\u8C61\u7684\u5927\u5C0F\u9012\u589E\u6307\u9488\u5C31\u53EF\u4EE5\u4E86\uFF0C<strong>\u5F53\u5B58\u50A8\u7A7A\u95F4\u5FEB\u8981\u6EE1\u65F6\uFF0C\u5C31\u8FDB\u884C\u4E00\u6B21\u5783\u573E\u56DE\u6536</strong></p><p>\u4E4B\u524D\u8BF4\u8FC7\u65B0\u751F\u4EE3\u4E2D\u5206\u4E3A\u4E24\u4E2A\u7A7A\u95F4\uFF0C<code>Semi space from</code>\u4F7F\u7528\u72B6\u6001\u7A7A\u95F4\u548C<code>Semi space To</code>\u95F2\u7F6E\u72B6\u6001\u7A7A\u95F4\u3002</p><p>\u5783\u573E\u56DE\u6536\u8FC7\u7A0B\uFF1A</p><ol><li>\u5F53\u5B9A\u4E49\u4E09\u4E2A\u53D8\u91CFA\u3001B\u3001C\u65F6\uFF0C\u4F1A\u5728<code>from</code>\u4F7F\u7528\u72B6\u6001\u7A7A\u95F4\u4E2D\u5F00\u8F9F\u4F4D\u7F6E\u8FDB\u884C\u5B58\u50A8\u3002</li></ol><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e26172d9956a4652a09bbba65d95f8a4~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><ol start="2"><li>\u5F53<code>from</code>\u7A7A\u95F4\u5C06\u6EE1\u65F6\uFF0C\u8FDB\u884C\u5783\u573E\u56DE\u6536\u5224\u65AD\uFF0C\u53D1\u73B0B\u6CA1\u6709\u88AB\u5176\u4ED6\u5F15\u7528\uFF0C\u53EF\u4EE5\u56DE\u6536\uFF0C\u5BF9B\u8FDB\u884C\u6807\u8BB0</li></ol><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c984128a8324ea7a9adccf911b67ee5~tplv-k3u1fbpfcp-watermark.image?" alt="scavenge2.png"></p><ol start="3"><li>\u5C06\u6CA1\u6709\u88AB\u6807\u8BB0\u7684A\u3001C\u62F7\u8D1D\u5230<code>To</code>\u95F2\u7F6E\u7A7A\u95F4\u5F53\u4E2D</li></ol><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43e72f0592d0467882a7caf8638a75ad~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><ol start="4"><li>\u6E05\u9664\u6389<code>from</code>\u7A7A\u95F4\u4E2D\u7684\u5168\u90E8\u5185\u5BB9</li></ol><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/068d79fffff64c0296313d2264182912~tplv-k3u1fbpfcp-watermark.image?" alt="scavenge4.png"></p><ol start="5"><li>\u5C06<code>from</code>\u7A7A\u95F4\u548C<code>to</code>\u7A7A\u95F4\u8EAB\u4EFD\u5BF9\u8C03\uFF0C\u5BF9\u8C03\u540E\u7684<code>from</code>\u7A7A\u95F4\u4E2D\u5C31\u5B58\u5728A\u3001C\uFF0C\u800CB\u6D88\u5931\u4E86\u3002<code>to</code>\u7A7A\u95F4\u4F9D\u65E7\u662F\u7A7A\u7684\u3002</li></ol><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc20b3b8490548058ab8927c1393c95b~tplv-k3u1fbpfcp-watermark.image?" alt="scavenge5.png"></p><p>\u8FD9\u5C31\u662F\u4E00\u6B21\u65B0\u751F\u4EE3\u5F53\u4E2D\u5783\u573E\u56DE\u6536\u7684\u8FC7\u7A0B\uFF0C\u7531\u4E8E<code>Scavenge</code>\u662F\u5178\u578B\u7684\u727A\u7272\u7A7A\u95F4\u6362\u53D6\u65F6\u95F4\u7684\u7B97\u6CD5\uFF0C\u6240\u4EE5\u65E0\u6CD5\u5927\u89C4\u6A21\u7684\u5E94\u7528\u5230\u6240\u6709\u7684\u5783\u573E\u56DE\u6536\u4E2D</p><p><code>Scavenge</code>\u4F18\u70B9\uFF1A\u7531\u4E8E\u53EA\u590D\u5236\u5B58\u6D3B\u7684\u5BF9\u8C61\uFF0C\u5E76\u4E14\u5BF9\u4E8E\u751F\u547D\u5468\u671F\u77ED\u7684\u573A\u666F\u5B58\u6D3B\u5BF9\u8C61\u53EA\u5360\u5C11\u90E8\u5206\uFF0C\u6240\u4EE5\u5B83\u5728\u65F6\u95F4\u6548\u7387\u4E0A\u6709\u4F18\u5F02\u7684\u4F53\u73B0\u3002 <code>Scavenge</code>\u7F3A\u70B9\uFF1A\u53EA\u80FD\u4F7F\u7528\u5806\u5185\u5B58\u7684\u4E00\u534A\uFF0C\u8FD9\u662F\u7531\u5212\u5206\u7A7A\u95F4\u548C\u590D\u5236\u673A\u5236\u6240\u51B3\u5B9A\u7684\u3002</p><blockquote><p><strong>\u5199\u5C4F\u969C</strong>\u5C0F\u77E5\u8BC6\uFF1A</p><ul><li>\u5728GC\u904D\u5386\u65B0\u751F\u4EE3\u4E2D\u5BF9\u8C61\u8FDB\u884C\u6807\u8BB0\u65F6\uFF0C\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u53EA\u6709\u4E00\u4E2A\u6307\u9488\u6307\u5411\u5B83\uFF0C\u5E76\u4E14\u6307\u9488\u5728\u8001\u751F\u4EE3\u7A7A\u95F4\u4E2D\uFF0C\u5982\u4F55\u5224\u65AD\u8BE5\u5BF9\u8C61\u662F\u5426\u6D3B\u8DC3\uFF1F</li><li>\u5982\u679C\u518D\u53BB\u904D\u5386\u8001\u751F\u4EE3\u4E2D\u5BF9\u8C61\u6548\u7387\u592A\u4F4E</li><li>\u5B9E\u9645\u4E0A\u5728\u5199\u7F13\u51B2\u533A\u4E2D\u6709\u4E00\u4E2A\u5217\u8868(\u6211\u4EEC\u79F0\u4E4B\u4E3A<code>CrossRefList</code>)\uFF0C\u5217\u8868\u4E2D\u8BB0\u5F55\u4E86\u6240\u6709\u8001\u751F\u533A\u5BF9\u8C61\u6307\u5411\u65B0\u751F\u533A\u7684\u60C5\u51B5</li><li>\u5F53\u6709\u8001\u751F\u533A\u4E2D\u7684\u5BF9\u8C61\u51FA\u73B0\u6307\u5411\u65B0\u751F\u533A\u5BF9\u8C61\u7684\u6307\u9488\u65F6\uFF0C\u6211\u4EEC\u4FBF\u8BB0\u5F55\u4E0B\u6765\u8FD9\u6837\u7684\u8DE8\u533A\u6307\u5411</li><li>\u65B0\u751F\u6210\u7684\u5BF9\u8C61\uFF0C\u5E76\u4E0D\u4F1A\u88AB\u8BB0\u5F55</li><li>\u8FD9\u79CD\u8BB0\u5F55\u884C\u4E3A\u603B\u662F\u53D1\u751F\u5728\u5199\u64CD\u4F5C\u65F6\uFF0C\u5B83\u88AB\u79F0\u4E3A\u5199\u5C4F\u969C\uFF0C\u6BCF\u4E2A\u5199\u64CD\u4F5C\u90FD\u4F1A\u8FDB\u884C\u5199\u5C4F\u969C</li><li>\u5F53\u65B0\u751F\u4EE3GC\u65F6\u9047\u5230\u8FD9\u6837\u7684\u5BF9\u8C61\uFF0C\u5C31\u56DE\u53BB\u8BFB\u4E00\u904D\u8BB0\u5F55\u5217\u8868</li></ul></blockquote><h3 id="\u65B0\u751F\u4EE3\u664B\u5347\u5230\u8001\u751F\u4EE3" tabindex="-1"><a class="header-anchor" href="#\u65B0\u751F\u4EE3\u664B\u5347\u5230\u8001\u751F\u4EE3" aria-hidden="true">#</a> \u65B0\u751F\u4EE3\u664B\u5347\u5230\u8001\u751F\u4EE3</h3><ul><li>\u5F53\u4E00\u4E2A\u5BF9\u8C61\u7ECF\u8FC7\u4E24\u6B21\u4EE5\u4E0A\u590D\u5236\u4ECD\u7136\u5B58\u6D3B\u65F6\uFF0C\u5B83\u5C31\u4F1A\u88AB\u8BA4\u4E3A\u662F\u751F\u547D\u5468\u671F\u8F83\u957F\u7684\u5BF9\u8C61\u3002</li><li>\u5E76\u4E14\u5F53\u65B0\u751F\u4EE3\u5185\u5B58\u7A7A\u95F4\u4E00\u65E6\u8D85\u8FC7\u5360\u7528\u4E34\u754C\u503C\uFF0C\u8FD9\u79CD\u8F83\u957F\u751F\u547D\u5468\u671F\u7684\u5BF9\u8C61\u968F\u540E\u4F1A\u88AB\u79FB\u52A8\u5230\u8001\u751F\u4EE3\u4E2D\uFF0C\u91C7\u7528\u65B0\u7684\u7B97\u6CD5\u8FDB\u884C\u7BA1\u7406\u3002</li></ul><h3 id="\u8001\u751F\u4EE3\u6807\u8BB0\u6574\u7406\u6E05\u9664" tabindex="-1"><a class="header-anchor" href="#\u8001\u751F\u4EE3\u6807\u8BB0\u6574\u7406\u6E05\u9664" aria-hidden="true">#</a> \u8001\u751F\u4EE3\u6807\u8BB0\u6574\u7406\u6E05\u9664</h3><p>\u7531\u4E8E\u8001\u751F\u4EE3\u4E2D\u5185\u5B58\u5927\uFF0C\u5B58\u653E\u7684\u5BF9\u8C61\u591A\uFF0C\u6240\u4EE5\u4E0D\u80FD\u50CF\u65B0\u751F\u4EE3\u4E00\u6837\u4F7F\u7528<code>Scavenge</code>\u3002</p><p>\u539F\u56E0\uFF1A</p><ul><li>\u7A7A\u95F4\u5BF9\u534A\u5206\u592A\u8FC7\u6D6A\u8D39\u7A7A\u95F4\uFF0C\u8001\u751F\u4EE3\u7684\u5360\u7528\u7A7A\u95F4\u8FDC\u5927\u4E8E\u65B0\u751F\u4EE3\uFF0C\u6D6A\u8D39\u4F1A\u975E\u5E38\u4E25\u91CD</li><li>\u5B58\u6D3B\u5BF9\u8C61\u8F83\u591A\uFF0C\u590D\u5236\u5B58\u6D3B\u5BF9\u8C61\u7684\u6548\u7387\u4F1A\u5F88\u4F4E</li></ul><h4 id="mark-sweep\u6807\u8BB0\u6E05\u9664" tabindex="-1"><a class="header-anchor" href="#mark-sweep\u6807\u8BB0\u6E05\u9664" aria-hidden="true">#</a> Mark-Sweep\u6807\u8BB0\u6E05\u9664</h4><p>\u6807\u8BB0\u6E05\u9664<strong>Mark-Sweep</strong>\u56FE\u793A\uFF1A</p><p>\u7B2C\u4E00\u6B65\uFF1A\u8FDB\u884C\u6807\u8BB0\uFF0C\u4ECE\u4E00\u7EC4<strong>\u6839\u5143\u7D20</strong>\u5F00\u59CB<code>\u5E7F\u5EA6\u904D\u5386</code>\u9012\u5F52\u8FD9\u7EC4\u6839\u5143\u7D20\uFF0C\u5728\u8FD9\u4E2A\u904D\u5386\u8FC7\u7A0B\u4E2D\uFF0C\u80FD\u591F\u5230\u8FBE\u7684\u5143\u7D20\u4E3A\u6D3B\u52A8\u5BF9\u8C61\uFF0C\u5230\u8FBE\u4E0D\u4E86\u7684\u5143\u7D20\u53EF\u4EE5\u5224\u65AD\u4E3A\u975E\u6D3B\u52A8\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u5783\u573E\u6570\u636E\uFF0C\u5C06\u975E\u6D3B\u52A8\u5BF9\u8C61\u8FDB\u884C\u6807\u8BB0\u3002 \u7B2C\u4E8C\u6B65\uFF1A\u7070\u8272\u90E8\u5206\u662F\u5783\u573E\u56DE\u6536\u524D\u88AB\u6807\u8BB0\u7684\u9700\u56DE\u6536\u6570\u636E\uFF0C\u5783\u573E\u56DE\u6536\u540E\uFF0C\u7070\u8272\u90E8\u5206\u88AB\u6E05\u7406\u6389\u3002</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c94ed614a3e34a47bad702526d8b0121~tplv-k3u1fbpfcp-watermark.image?" alt="\u6807\u8BB0\u6E05\u9664.png"></p><h4 id="mask-compact\u6807\u8BB0\u6574\u7406" tabindex="-1"><a class="header-anchor" href="#mask-compact\u6807\u8BB0\u6574\u7406" aria-hidden="true">#</a> Mask-Compact\u6807\u8BB0\u6574\u7406</h4><p>\u4F46\u662F\u8FD9\u79CD\u65B9\u5F0F\u6E05\u7406\u56DE\u6536\u540E\uFF0C\u4F1A\u4EA7\u751F\u5927\u91CF\u7684\u5185\u5B58\u788E\u7247\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4\u5982\u679C\u6709\u4E00\u4E2A\u5BF9\u8C61\u9700\u8981\u4E00\u5757\u5927\u7684\u8FDE\u7EED\u7684\u5185\u5B58\u51FA\u73B0\u5185\u5B58\u4E0D\u8DB3\u7684\u60C5\u51B5\u3002</p><p>\u6B64\u65F6\u5C31\u9700\u8981\u7B2C\u4E8C\u79CD\u6807\u8BB0\u6574\u7406<strong>Mask-Compact</strong>\u7B97\u6CD5\u51FA\u573A\u4E86\u3002</p><p>\u6807\u8BB0\u7684\u6B65\u9AA4\u662F\u4E00\u6837\u7684\uFF0C\u53EA\u662F\u540E\u7EED\u4E0D\u662F\u76F4\u63A5\u5BF9\u5783\u573E\u6570\u636E\u6E05\u7406\uFF0C\u800C\u662F\u5148\u5C06\u6240\u6709\u5B58\u6D3B\u7684\u5BF9\u8C61\u5411\u4E00\u7AEF\u79FB\u52A8\uFF0C\u7136\u540E\u76F4\u63A5\u6E05\u7406\u6389\u8FD9\u4E00\u7AEF\u4EE5\u5916\u7684\u5185\u5B58</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8751201d82374a3fbdccbadc1862368b~tplv-k3u1fbpfcp-watermark.image?" alt="\u6807\u8BB0\u6574\u7406.png"></p><p>\u867D\u7136Mask-Compact\u6807\u8BB0\u6574\u7406\u770B\u8D77\u6765\u6BD4\u6807\u8BB0\u6E05\u9664\u66F4\u52A0\u6E05\u6670\uFF0C\u5BF9\u7A7A\u95F4\u5229\u7528\u7387\u66F4\u9AD8\uFF0C\u4F46\u5728\u8001\u751F\u4EE3\u5F53\u4E2D\uFF0C\u662F\u8FD9\u4E24\u79CD\u65B9\u5F0F\u7ED3\u5408\u4F7F\u7528\u7684\uFF0C<strong>\u56E0\u4E3A</strong>Mark-Conpact\u9700\u8981\u79FB\u52A8\u5BF9\u8C61\uFF0C\u6240\u4EE5\u5B83\u7684\u6267\u884C\u901F\u5EA6\u4E0D\u53EF\u80FD\u5F88\u5FEB</p><h4 id="\u4E09\u8272\u6807\u8BB0\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E09\u8272\u6807\u8BB0\u6CD5" aria-hidden="true">#</a> \u4E09\u8272\u6807\u8BB0\u6CD5</h4><p>\u4E09\u8272\u4E3A\uFF1A</p><ul><li>\u767D\uFF1A\u672A\u88AB\u6807\u8BB0\u7684\u5BF9\u8C61\uFF0C\u5373\u4E0D\u53EF\u8FBE\u5BF9\u8C61\uFF08\u6CA1\u6709\u626B\u63CF\u5230\u7684\u5BF9\u8C61\uFF09\uFF0C\u53EF\u56DE\u6536</li><li>\u7070\uFF1A\u5DF2\u88AB\u6807\u8BB0\u7684\u5BF9\u8C61\uFF08\u53EF\u8FBE\u5BF9\u8C61\uFF09\uFF0C\u4F46\u662F\u5BF9\u8C61\u8FD8\u6CA1\u6709\u88AB\u626B\u63CF\u5B8C\uFF0C\u4E0D\u53EF\u56DE\u6536</li><li>\u9ED1\uFF1A\u5DF2\u88AB\u626B\u63CF\u5B8C\uFF08\u53EF\u8FBE\u5BF9\u8C61\uFF0C\u6D3B\u52A8\u5BF9\u8C61\uFF09\uFF0C\u4E0D\u53EF\u56DE\u6536</li></ul>`,38),A=a("\u53C2\u8003\u6587\u7AE0\uFF1A"),O={href:"https://blog.csdn.net/star1210644725/article/details/115712443",target:"_blank",rel:"noopener noreferrer"},R=a("https://blog.csdn.net/star1210644725/article/details/115712443"),z=o('<hr><h3 id="\u6E05\u7406\u6548\u7387" tabindex="-1"><a class="header-anchor" href="#\u6E05\u7406\u6548\u7387" aria-hidden="true">#</a> \u6E05\u7406\u6548\u7387</h3><h4 id="\u5168\u505C\u987F" tabindex="-1"><a class="header-anchor" href="#\u5168\u505C\u987F" aria-hidden="true">#</a> \u5168\u505C\u987F</h4><p>\u7531\u4E8E\u5783\u573E\u56DE\u6536\u662F\u5728JS\u5F15\u64CE\u4E2D\u8FDB\u884C\u7684\uFF0C\u800C<code>Mark-Compact\u7B97\u6CD5</code>\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u9700\u8981\u79FB\u52A8\u5BF9\u8C61\uFF0C\u800C\u5F53\u6D3B\u52A8\u5BF9\u8C61\u8F83\u591A\u7684\u65F6\u5019\uFF0C\u5B83\u7684\u6267\u884C\u901F\u5EA6\u4E0D\u53EF\u80FD\u5F88\u5FEB\uFF0C\u4E3A\u4E86\u907F\u514D<code>JavaScript</code>\u5E94\u7528\u903B\u8F91\u548C\u5783\u573E\u56DE\u6536\u5668\u7684\u5185\u5B58\u8D44\u6E90\u7ADE\u4E89\u5BFC\u81F4\u7684\u4E0D\u4E00\u81F4\u6027\u95EE\u9898\uFF0C\u5783\u573E\u56DE\u6536\u5668\u4F1A\u5C06<code>JavaScript</code>\u5E94\u7528\u6682\u505C\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u88AB\u79F0\u4E3A<code>\u5168\u505C\u987F\uFF08stop-the-world\uFF09</code>\u3002</p><p>\u8FD9\u4E5F\u662F<code>JavaScript</code>\u5355\u7EBF\u7A0B\u5BFC\u81F4\u7684\uFF0C<code>JavaScript</code>\u8FD0\u884C\u5728\u4E3B\u7EBF\u7A0B\u4E0A\uFF0C\u8FDB\u884C\u5783\u573E\u56DE\u6536\u5C31\u4F1A\u5BFC\u81F4<code>JavaScript</code>\u8FD0\u884C\u505C\u6B62\u3002</p><p>\u5BF9\u4E8E\u65B0\u751F\u4EE3\uFF0C\u5168\u505C\u987F\u5F71\u54CD\u6548\u7387\u4E0D\u5927\uFF0C\u4F46\u662F\u5728\u8001\u751F\u4EE3\u4E2D\uFF0C\u56E0\u4E3A\u6D3B\u52A8\u5BF9\u8C61\u4F17\u591A\uFF0C\u6240\u4EE5\u6807\u8BB0\u6574\u7406\u6E05\u9664\u65F6\u95F4\u8F83\u957F\uFF0C\u5168\u505C\u987F\u5F88\u5F71\u54CD\u6548\u7387\uFF0C\u4F1A\u6682\u505C\u4E3B\u7EBF\u7A0B\u8F83\u957F\u7684\u65F6\u95F4\uFF0C\u4F7F\u5F97\u9875\u9762\u53D8\u5F97\u5361\u987F\u3002</p><p>\u76EE\u524D<code>v8</code>\u5F15\u64CE\u5DF2\u7ECF\u91C7\u7528<strong>\u589E\u91CF\u6807\u8BB0</strong>\u3001<strong>\u5E76\u884C\u56DE\u6536</strong>\u3001<strong>\u5E76\u53D1\u56DE\u6536</strong>\u7B49\u6280\u672F\u6765\u66FF\u4EE3\u5168\u505C\u987F\u3002</p><p>\u8FD9\u91CC\u6709\u5173\u8FD9\u51E0\u79CD\u4F18\u5316\u6280\u672F\u53EF\u53C2\u8003\uFF1A</p>',8),D={href:"https://blog.csdn.net/weixin_34409741/article/details/91393265",target:"_blank",rel:"noopener noreferrer"},H=a("https://blog.csdn.net/weixin_34409741/article/details/91393265"),F={href:"https://www.cnblogs.com/cangqinglang/p/14214864.html",target:"_blank",rel:"noopener noreferrer"},K=a("https://www.cnblogs.com/cangqinglang/p/14214864.html"),P=o('<blockquote><p>\u9762\u8BD5\u4F1A\u9047\u5230\u7684\u95EE\u9898\uFF1A</p><ul><li>\u4E3A\u4EC0\u4E48\u8981\u6574\u7406\uFF1F <ul><li>\u5982\u679C\u5355\u7EAF\u6807\u8BB0\u6E05\u9664\uFF0C\u4F1A\u9020\u6210\u5927\u91CF\u788E\u7247\u5316\u7A7A\u95F4\uFF0C\u5982\u679C\u5BF9\u8C61\u9700\u8981\u7684\u8FDE\u7EED\u5185\u5B58\u5927\u5C31\u4F1A\u51FA\u9519</li></ul></li><li>\u6807\u8BB0\u6574\u7406\u65B9\u6CD5\u4E3A\u4EC0\u4E48\u5148\u6574\u7406\u540E\u6E05\u9664\uFF1F <ul><li>\u6574\u7406\u65F6\u6D3B\u52A8\u5BF9\u8C61\u4F1A\u8986\u76D6\u6389\u90E8\u5206\u6807\u8BB0\u5BF9\u8C61\uFF0C\u4E4B\u540E\u8FDB\u884C\u6E05\u9664\u65F6\u5C31\u53EF\u4EE5\u51CF\u5C11\u4E00\u6B21\u6027\u9700\u8981\u6E05\u9664\u7684\u6807\u8BB0\u5BF9\u8C61\uFF0C\u51CF\u5C11\u4E86\u7A7A\u95F4\u590D\u6742\u5EA6</li></ul></li></ul></blockquote><hr><h2 id="\u7F51\u9875\u6E32\u67D3\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7F51\u9875\u6E32\u67D3\u6D41\u7A0B" aria-hidden="true">#</a> \u7F51\u9875\u6E32\u67D3\u6D41\u7A0B</h2><p><code>Node</code>\u5728<code>JavaScript</code>\u7684\u6267\u884C\u76F4\u63A5\u53D7\u76CA\u4E8E<code>V8</code>\uFF0C\u5E76\u4E14\u53EF\u4EE5\u968F\u7740V8\u5347\u7EA7\u5C31\u4EAB\u53D7\u5230\u65B0\u7684\u8BED\u8A00\u7279\u6027\uFF08<code>ES6</code>\uFF09\uFF0C\u4F46\u662F\u540C\u65F6\u4E5F\u4F1A\u53D7\u5230<code>V8</code>\u7684\u4E00\u4E9B\u9650\u5236\u3002</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a46f799239f140bc97684cb15372af67~tplv-k3u1fbpfcp-watermark.image?" alt="\u7F51\u9875\u8BBF\u95EE.png"></p><h3 id="v8\u7684\u5185\u5B58\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#v8\u7684\u5185\u5B58\u9650\u5236" aria-hidden="true">#</a> V8\u7684\u5185\u5B58\u9650\u5236</h3><p>\u5728\u4E00\u822C\u7684\u540E\u7AEF\u5F00\u53D1\u8BED\u8A00\u4E2D\uFF0C\u57FA\u672C\u7684\u5185\u5B58\u4F7F\u7528\u4E0A\u6CA1\u6709\u4EC0\u4E48\u9650\u5236\uFF0C\u7136\u800C\u5728Node\u4E2D\uFF0C\u901A\u8FC7JavaScript\u4F7F\u7528\u5185\u5B58\u4F1A\u53D1\u73B0\u53EA\u80FD\u4F7F\u7528\u90E8\u5206\u5185\u5B58\u3002</p><p><strong>\u5BF9\u4E8EV8\u9650\u5236\u5806\u5927\u5C0F\u7684\u539F\u56E0</strong></p><ul><li>V8\u6700\u521D\u662F\u4E3A\u4E86\u6D4F\u89C8\u5668\u8BBE\u8BA1\u7684\uFF0C\u4E0D\u53EF\u80FD\u9047\u5230\u7528\u5927\u91CF\u5185\u5B58\u7684\u539F\u56E0</li><li>V8\u5783\u573E\u56DE\u6536\u673A\u5236\u7684\u9650\u5236\uFF0C\u4EE51.5G\u7684\u5783\u573E\u56DE\u6536\u5806\u5185\u5B58\u4E3A\u4F8B\uFF0CV8\u505A\u4E00\u6B21\u5C0F\u7684\u5783\u573E\u56DE\u6536\u9700\u898150\u6BEB\u79D2\u4EE5\u4E0A\uFF0C\u505A\u4E00\u6B21\u975E\u589E\u91CF\u5F0F\u7684\u5783\u573E\u56DE\u6536\u751A\u81F3\u9700\u89811\u79D2\u4EE5\u4E0A</li><li>\u53EF\u4EE5\u624B\u52A8\u8C03\u8282\u5185\u5B58\u9650\u5236\uFF0CNode\u4F7F\u7528<code>--max-old-space-size</code>\u6216\u8005<code>--max-new-space-size</code>\u53EF\u4EE5\u8C03\u6574\u5185\u5B58\u9650\u5236\u7684\u5927\u5C0F</li></ul>',9);function Q(U,W){const n=i("ExternalLinkIcon");return t(),d("div",null,[r,p,e("p",null,[h,e("a",u,[m,s(n)]),b]),g,e("p",null,[v,k,_,e("a",f,[w,s(n)]),y,x,S]),j,V,C,N,J,e("ul",null,[q,e("li",null,[M,e("ul",null,[B,G,e("li",null,[L,e("a",T,[E,s(n)])])])])]),I,e("p",null,[A,e("a",O,[R,s(n)])]),z,e("ul",null,[e("li",null,[e("a",D,[H,s(n)])]),e("li",null,[e("a",F,[K,s(n)])])]),P])}var Y=c(l,[["render",Q],["__file","NodeJs\u6DF1\u5165\u6D45\u51FA\u4E4B\u65C5\uFF1A\u5185\u5B58\u63A7\u5236\uFF08\u4E0A\uFF09.html.vue"]]);export{Y as default};
