import{_ as e,r as o,o as c,c as i,a as n,b as t,d as s,e as p}from"./app.c2d46e23.js";const l={},u=n("hr",null,null,-1),r=n("hr",null,null,-1),k=s("\u8FD9\u662F\u6211\u53C2\u4E0E8\u6708\u66F4\u6587\u6311\u6218\u7684\u7B2C18\u5929\uFF0C\u6D3B\u52A8\u8BE6\u60C5\u67E5\u770B\uFF1A"),d={href:"https://juejin.cn/post/6987962113788493831",title:"https://juejin.cn/post/6987962113788493831",target:"_blank",rel:"noopener noreferrer"},v=s("8\u6708\u66F4\u6587\u6311\u6218"),m=n("h1",{id:"\u5F02\u6B65i-o",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5F02\u6B65i-o","aria-hidden":"true"},"#"),s(" \u5F02\u6B65I/O")],-1),b=n("p",null,[s("\u5728\u524D\u7AEF\uFF0C\u6700\u7ECF\u5178\u7684\u5F02\u6B65\u5C31\u662F"),n("strong",null,"Ajax")],-1),g=s("\u6587\u7AE0\u4ECB\u7ECD\uFF1A"),h={href:"https://blog.csdn.net/qq_36171287/article/details/117201363",target:"_blank",rel:"noopener noreferrer"},f=s("\u300A\u9AD8\u6027\u80FD JavaScript\u306E\u516D -- \u8001\u751F\u5E38\u8C08 Ajax\u300B"),_=p(`<p>Node\u662F\u9996\u4E2A\u5927\u89C4\u6A21\u5C06\u5F02\u6B65I/O\u5E94\u7528\u5728\u5E94\u7528\u5C42\u4E0A\u7684\u5E73\u53F0\uFF0C\u529B\u6C42\u5728\u5355\u7EBF\u7A0B\u4E0A\u5C06\u8D44\u6E90\u5206\u914D\u7684\u66F4\u9AD8\u6548</p><p>\u4E3A\u4E86\u5F25\u8865\u5355\u7EBF\u7A0B\u65E0\u6CD5\u5229\u7528\u591A\u6838CPU\u7684\u7F3A\u70B9\uFF0CNode\u63D0\u4F9B\u4E86\u7C7B\u4F3C\u524D\u7AEF\u6D4F\u89C8\u5668\u4E2DWeb Workers\u7684\u5B50\u8FDB\u7A0B\uFF0C\u5B50\u8FDB\u7A0B\u53EF\u4EE5\u901A\u8FC7\u5DE5\u4F5C\u8FDB\u7A0B\u9AD8\u6548\u7684\u5229\u7528CPU\u548CI/O</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f00747e021ca4e3c97257686bead7d46~tplv-k3u1fbpfcp-watermark.image" alt="\u5F02\u6B65IO\u8C03\u7528.png"></p><p>Node\u5F02\u6B65I/O\u57FA\u672C\u8981\u7D20\uFF1A</p><ul><li>\u4E8B\u4EF6\u5FAA\u73AF\uFF1A</li><li>\u89C2\u5BDF\u8005\uFF1A</li><li>\u8BF7\u6C42\u5BF9\u8C61</li><li>I/O\u7EBF\u7A0B\u6C60</li></ul><p>\u4E8B\u4EF6\u5FAA\u73AF\u662F\u4E00\u4E2A\u5178\u578B\u7684\u751F\u4EA7\u8005/\u6D88\u8D39\u8005\u6A21\u578B\u3002 \u5F02\u6B65I/O\u3001\u7F51\u7EDC\u8BF7\u6C42\u662F\u4E8B\u4EF6\u751F\u4EA7\u8005\uFF0C\u4E3ANode\u63D0\u4F9B\u4E0D\u540C\u7C7B\u578B\u7684\u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u88AB\u4F20\u9012\u5230\u5BF9\u5E94\u7684\u89C2\u5BDF\u8005\u90A3\u91CC\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u4ECE\u89C2\u5BDF\u8005\u90A3\u53D6\u51FA\u4E8B\u4EF6\u5E76\u5904\u7406</p><p>\u5B98\u65B9\u4ECB\u7ECD\uFF1Ahttp://nodejs.cn/learn/the-nodejs-event-loop</p><p>\u5F02\u6B65\u6D41\u7A0B</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74f82e6d48c24912b5f395504d9466e2~tplv-k3u1fbpfcp-watermark.image" alt="\u5F02\u6B65IO\u6D41\u7A0B.png"></p><p>node\u4E2D\u4F7F\u7528import\uFF1A https://blog.csdn.net/goutinga/article/details/108074649</p><p>\u6D4B\u8BD5\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> nextTick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;process&#39;</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u4F18\u5148\u7EA7\u7B2C\u4E8C</span>
    <span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u4F18\u5148\u7EA7\u6700\u4F4E</span>
    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4F18\u5148\u7EA7\u7B2C\u4E09</span>
    <span class="token function">queueMicrotask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u4F18\u5148\u7EA7\u7B2C\u56DB</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u4F18\u5148\u7EA7\u7B2C\u4E94</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>  <span class="token comment">// \u4F18\u5148\u7EA7\u6700\u9AD8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8F93\u51FA\u7684\u987A\u5E8F\uFF1A5 1 3 4 6 2</strong></p><p>\u8FD9\u91CC\u53EF\u4EE5\u53D1\u73B0\uFF0C<code>nextTick</code>\u4E2D\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\u4F18\u5148\u7EA7\u6700\u9AD8\uFF0C\u800C<code>setImmediate</code>\u7684\u6267\u884C\u4F18\u5148\u7EA7\u6700\u4F4E\u3002</p><blockquote><p>\u539F\u56E0\u5728\u4E8E\u4E8B\u4EF6\u5FAA\u73AF\u5BF9\u89C2\u5BDF\u8005\u7684\u68C0\u67E5\u662F\u6709\u5148\u540E\u987A\u5E8F\u7684\uFF0C <code>nextTick</code>\u5C5E\u4E8Eidle\u89C2\u5BDF\u8005\uFF0C <code>setImmediate</code>\u5C5E\u4E8Echeck\u89C2\u5BDF\u8005\u3002 idle\u89C2\u5BDF\u8005\u5148\u4E8EI/O\u89C2\u5BDF\u8005\uFF0C I/O\u89C2\u5BDF\u8005\u5148\u4E8Echeck\u89C2\u5BDF\u8005</p></blockquote><br><h2 id="\u5F02\u6B65\u7F16\u7A0B-\u{1F41F}" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u7F16\u7A0B-\u{1F41F}" aria-hidden="true">#</a> \u5F02\u6B65\u7F16\u7A0B \u{1F41F}</h2><h3 id="\u9AD8\u9636\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u9636\u51FD\u6570" aria-hidden="true">#</a> \u9AD8\u9636\u51FD\u6570</h3><p>\u5728\u901A\u5E38\u7684\u8BED\u8A00\u4E2D\uFF0C\u51FD\u6570\u7684\u53C2\u6570\u53EA\u63A5\u53D7\u57FA\u672C\u7684\u6570\u636E\u7C7B\u578B\u6216\u662F\u5BF9\u8C61\u5F15\u7528\uFF0C\u8FD4\u56DE\u503C\u4E5F\u53EA\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\u548C\u5BF9\u8C61\u5F15\u7528\u3002</p><p>\u57FA\u672C\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9AD8\u9636\u51FD\u6570\u662F\u53EF\u4EE5\u628A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u6216\u662F\u5C06\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C</p><p>\u9AD8\u9636\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u504F\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u504F\u51FD\u6570" aria-hidden="true">#</a> \u504F\u51FD\u6570</h3><p>\u504F\u51FD\u6570\u7528\u6CD5\u6307\u521B\u5EFA\u4E00\u4E2A\u8C03\u7528\u53E6\u5916\u4E00\u4E2A\u90E8\u5206\uFF08\u53C2\u6570\u6216\u53D8\u91CF\u5DF2\u7ECF\u9884\u7F6E\u7684\u51FD\u6570\uFF09\u7684\u51FD\u6570\u7528\u6CD5</p><p>\u4E3E\u4E2A\u7C92\u5B50, \u5B9A\u4E49\u5224\u65AD\u7C7B\u522B\u7684\u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> toString <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString<span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">isString</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&#39;[object String]&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">isFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&#39;[object Function]&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u9700\u8981\u91CD\u590D\u5B9A\u4E49\u4E00\u4E9B\u76F8\u4F3C\u7684\u51FD\u6570\uFF0C\u8FD9\u6837\u4EE3\u7801\u5C31\u4F1A\u5197\u4F59\u3002 \u4E3A\u4E86\u89E3\u51B3\u91CD\u590D\u5B9A\u4E49\u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u65B0\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">isType</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&#39;[object &#39;</span> <span class="token operator">+</span> type <span class="token operator">+</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> isString <span class="token operator">=</span> <span class="token function">isType</span><span class="token punctuation">(</span><span class="token string">&#39;String&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> isFunction <span class="token operator">=</span> <span class="token function">isType</span><span class="token punctuation">(</span><span class="token string">&#39;Function&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD<code>\u901A\u8FC7\u6307\u5B9A\u90E8\u5206\u53C2\u6570\u6765\u4EA7\u751F\u4E00\u4E2A\u65B0\u7684\u5B9A\u5236\u51FD\u6570\u7684\u5F62\u5F0F\u5C31\u662F</code><strong>\u504F\u51FD\u6570</strong></p><p><br><br></p><hr><h3 id="\u5F02\u5E38\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u5904\u7406" aria-hidden="true">#</a> \u5F02\u5E38\u5904\u7406</h3><p>\u5728\u666E\u901A\u5F02\u5E38\u5904\u7406\u5F53\u4E2D\uFF0C\u901A\u5E38\u4F7F\u7528<code>try/catch/final</code>\u8BED\u53E5\u5757\u8FDB\u884C\u5F02\u5E38\u6355\u83B7\u3002</p><p>\u4F46\u662F\u8FD9\u5728\u5F02\u6B65\u7F16\u7A0B\u4E2D\u5E76\u4E0D\u4E00\u5B9A\u4F7F\u7528\u3002 \u5F02\u6B65I/O\u5B9E\u73B0\u4E3B\u8981\u5305\u6DB5\u5728\u4E24\u4E2A\u9636\u6BB5\uFF1A1\u3001\u63D0\u4EA4\u8BF7\u6C42 2\u3001\u5904\u7406\u7ED3\u679C\u3002</p><p>\u8FD9\u4E24\u4E2A\u9636\u6BB5\u4E2D\u95F4\u6709<code>\u4E8B\u4EF6\u5FAA\u73AF</code>\u7684\u8C03\u5EA6\uFF0C\u6240\u4EE5\u5F7C\u6B64\u4E0D\u5173\u8054</p><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
    \u63D0\u4EA4\u8BF7\u6C42 <span class="token arrow operator">--&gt;</span> \u4E8B\u4EF6\u5FAA\u73AF <span class="token arrow operator">--&gt;</span> \u5904\u7406\u7ED3\u679C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div color="#f00" size="3">**Node\u5728\u5904\u7406\u5F02\u5E38\u4E0A\u5F62\u6210\u4E86\u4E00\u79CD\u7EA6\u5B9A\uFF0C\u5C06\u5F02\u5E38\u4F5C\u4E3A\u56DE\u8C03\u51FD\u6570\u7B2C\u4E00\u4E2A\u5B9E\u53C2\u4F20\u56DE\uFF0C\u5982\u679C\u4E3A\u63A7\u5236\uFF0C\u5219\u8868\u660E\u5F02\u6B65\u8C03\u7528\u6CA1\u6709\u5F02\u5E38\u629B\u51FA\u3002**</div><p>JavaScript\u7684 try\u2026catch \u673A\u5236\u4E0D\u80FD\u7528\u6765\u622A\u83B7\u5F02\u6B65\u65B9\u6CD5\u4EA7\u751F\u7684\u9519\u8BEF\u3002<strong>\u65B0\u624B\u7684\u5E38\u89C1\u9519\u8BEF\u4E4B\u4E00\u662F\u8BD5\u56FE\u5728\u9519\u8BEF\u4F18\u5148\u56DE\u8C03\u51FD\u6570\u4E2D\u4F7F\u7528 throw</strong></p>`,40),y=s("\u53C2\u8003\uFF1A"),j={href:"http://nodejs.cn/api/errors.html#errors_error_first_callbacks",target:"_blank",rel:"noopener noreferrer"},w=s("\u300A\u9519\u8BEF\u4F18\u5148\u7684\u56DE\u8C03\u300B"),x=p(`<p>\u9519\u8BEF\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;/some/file/that/does-not-exist&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9519\u8BEF\u7684\u5047\u8BBE\uFF1A\u5728\u8FD9\u91CC\u629B\u51FA\u9519\u8BEF\u3002</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD9\u91CC\u4E0D\u4F1A\u622A\u83B7\u56DE\u8C03\u51FD\u6570\u4E2D\u7684 throw\u3002</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F1A\u51FA\u73B0\u62A5\u9519\uFF1A</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/306b3162733746e8a8934b58f3d426ea~tplv-k3u1fbpfcp-watermark.image" alt="trycatch\u5F02\u6B65\u62A5\u9519.png"></p><hr><p>\u6B63\u786E\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">errorFirstCallback</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;\u51FA\u9519&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;./src/b.txt&#39;</span><span class="token punctuation">,</span> errorFirstCallback<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><hr><h2 id="\u5F02\u6B65\u7F16\u7A0B\u89E3\u51B3\u65B9\u6848-\u{1F433}" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u7F16\u7A0B\u89E3\u51B3\u65B9\u6848-\u{1F433}" aria-hidden="true">#</a> \u5F02\u6B65\u7F16\u7A0B\u89E3\u51B3\u65B9\u6848 \u{1F433}</h2><p>\u5F02\u6B65\u7F16\u7A0B\u4E3B\u8981\u89E3\u51B3\u65B9\u6848\u6709\u4E09\u79CD</p><ul><li>\u4E8B\u4EF6\u53D1\u5E03/\u8BA2\u9605\u6A21\u5F0F</li><li>Promise/Deferred\u6A21\u5F0F</li><li>\u6D41\u7A0B\u63A7\u5236\u5E93</li></ul><h3 id="\u4E8B\u4EF6\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F" aria-hidden="true">#</a> \u4E8B\u4EF6\u53D1\u5E03/\u8BA2\u9605\u6A21\u5F0F</h3><p>\u4E8B\u4EF6\u76D1\u542C\u5668\u6A21\u5F0F\u662F\u4E00\u79CD\u5E7F\u6CDB\u7528\u4E8E\u5F02\u6B65\u7F16\u7A0B\u7684\u6A21\u5F0F\uFF0C\u662F\u56DE\u8C03\u51FD\u6570\u7684\u4E8B\u4EF6\u5316\uFF0C\u53C8\u79F0\u53D1\u5E03/\u8BA2\u9605\u6A21\u5F0F\u3002</p><p>Node\u81EA\u8EAB\u63D0\u4F9B\u7684events\u4E8B\u4EF6\u89E6\u53D1\u5668\u6A21\u5757\u662F\u53D1\u5E03/\u8BA2\u9605\u6A21\u5F0F\u7684\u4E00\u4E2A\u7B80\u5355\u5B9E\u73B0\u3002</p><p><strong>\u6240\u6709\u89E6\u53D1\u4E8B\u4EF6\u7684\u5BF9\u8C61\u90FD\u662F <code>EventEmitter</code> \u7C7B\u7684\u5B9E\u4F8B</strong>\u3002 \u8FD9\u4E9B\u5BF9\u8C61\u66B4\u9732\u4E86 <code>eventEmitter.on()</code> \u51FD\u6570\uFF0C\u5141\u8BB8\u5C06\u4E00\u4E2A\u6216\u591A\u4E2A\u51FD\u6570\u7ED1\u5B9A\u5230\u5BF9\u8C61\u89E6\u53D1\u7684\u547D\u540D\u4E8B\u4EF6\u3002 \u901A\u5E38\uFF0C\u4E8B\u4EF6\u540D\u79F0\u662F\u9A7C\u5CF0\u5F0F\u5B57\u7B26\u4E32\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u6709\u6548\u7684 <code>JavaScript</code> \u5C5E\u6027\u952E\u3002</p><p>\u5F53 <code>EventEmitter</code> \u5BF9\u8C61\u89E6\u53D1\u4E8B\u4EF6\u65F6\uFF0C\u6240\u6709\u7ED1\u5B9A\u5230\u8BE5\u7279\u5B9A\u4E8B\u4EF6\u7684\u51FD\u6570\u90FD\u4F1A\u88AB\u540C\u6B65\u5730\u8C03\u7528\u3002 \u88AB\u8C03\u7528\u7684\u76D1\u542C\u5668\u8FD4\u56DE\u7684\u4EFB\u4F55\u503C\u90FD\u5C06\u88AB\u5FFD\u7565\u548C\u4E22\u5F03\u3002</p><p>\u4EE5\u4E0B\u793A\u4F8B\u5C55\u793A\u4E86\u4F7F\u7528\u5355\u4E2A\u76D1\u542C\u5668\u7684\u7B80\u5355\u7684 EventEmitter \u5B9E\u4F8B\u3002 <code>eventEmitter.on()</code> \u65B9\u6CD5\u7528\u4E8E\u6CE8\u518C\u76D1\u542C\u5668\uFF0C<code>eventEmitter.emit()</code> \u65B9\u6CD5\u7528\u4E8E\u89E6\u53D1\u4E8B\u4EF6</p><h3 id="\u7B80\u5355\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4F8B\u5B50" aria-hidden="true">#</a> \u7B80\u5355\u4F8B\u5B50</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> EventEmitter<span class="token punctuation">,</span> errorMonitor <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;events&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyEmitter</span> <span class="token keyword">extends</span> <span class="token class-name">EventEmitter</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> myEmitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u8BA2\u9605</span>
myEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;event1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u53D1\u5E03</span>
myEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;event1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello world!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\uFF1A\u5728\u8BA2\u9605\u4E2D\u8F93\u51FA hello world!</p><p>\u8BA2\u9605\u51FD\u6570\u5C31\u662F\u4E00\u4E2A\u9AD8\u9636\u51FD\u6570\u7684\u5E94\u7528\uFF0C \u4E8B\u4EF6\u53D1\u5E03/\u8BA2\u9605\u6A21\u5F0F\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E2A\u4E8B\u4EF6\u4E0E\u591A\u4E2A\u56DE\u8C03\u51FD\u6570\u7684\u5173\u8054\uFF0C\u8FD9\u4E9B\u56DE\u8C03\u51FD\u6570\u53C8\u88AB\u79F0\u4E3A<div color="#CE5CEA" size="2"><strong>\u4E8B\u4EF6\u76D1\u542C\u5668</strong></div></p><p>\u901A\u8FC7<code>emit()</code>\u53D1\u5E03\u4E8B\u4EF6\u540E\uFF0C\u6D88\u606F\u56DE\u7ACB\u5373\u4F20\u9012\u7ED9\u5F53\u524D\u4E8B\u4EF6\u7684\u6240\u6709\u76D1\u542C\u5668\u6267\u884C\uFF0C\u76D1\u542C\u5668\u53EF\u4EE5<div color="#65CE23">\u6DFB\u52A0\u548C\u5220\u9664</div>\u3002</p><p>\u5728Node\u4E2D\uFF0C <code>emit()</code>\u8C03\u7528\u591A\u534A\u662F\u4F34\u968F\u4E8B\u4EF6\u5FAA\u73AF\u800C\u5F02\u6B65\u89E6\u53D1\u7684\u3002</p><h3 id="\u76D1\u542C\u5668\u8FC7\u591A\u8B66\u544A" tabindex="-1"><a class="header-anchor" href="#\u76D1\u542C\u5668\u8FC7\u591A\u8B66\u544A" aria-hidden="true">#</a> \u76D1\u542C\u5668\u8FC7\u591A\u8B66\u544A</h3><blockquote><p>\u6CE8\u610F\uFF1A \u5982\u679C\u4E00\u4E2A\u4E8B\u4EF6\u6DFB\u52A0\u4E86\u8D85\u8FC710\u4E2A\u76D1\u542C\u5668\uFF0C\u5C06\u4F1A\u5F97\u5230\u4E00\u6761\u8B66\u544A\u3002 \u5E76\u4E14\u4E8B\u4EF6\u76F8\u5173\u7684\u76D1\u542C\u5668\u8FC7\u591A\uFF0C\u53EF\u80FD\u5B58\u5728\u8FC7\u591A\u5360\u7528CPU\u7684\u60C5\u666F\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">11</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;event1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u53D1\u5E03</span>
myEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;event1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello world!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8d8b85e393243d09ae317ad3cf9cfc2~tplv-k3u1fbpfcp-watermark.image" alt="\u76D1\u542C\u5668\u8FC7\u591A\u8B66\u544A.png"></p><p>\u5982\u679C\u60F3\u8981<div color="#CE9123"><strong>\u53BB\u9664\u8B66\u544A</strong></div>\uFF0C\u8C03\u7528<code>setMaxListeners(0);</code>\u53EF\u4EE5\u53BB\u9664\u9650\u5236</p><p><code>myEmitter.setMaxListeners(0);</code> \u6DFB\u52A0\u5728for\u5FAA\u73AF\u524D\u5373\u53EF</p>`,30);function E(I,O){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,r,n("p",null,[n("strong",null,[k,n("a",d,[v,t(a)])])]),m,b,n("p",null,[g,n("a",h,[f,t(a)])]),_,n("p",null,[y,n("a",j,[w,t(a)])]),x])}var S=e(l,[["render",E],["__file","NodeJs\u6DF1\u5165\u6D45\u51FA\u4E4B\u65C5\uFF1A\u5F02\u6B65I!O \uFF08\u4E0A\uFF09.html.vue"]]);export{S as default};
