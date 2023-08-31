import{_ as n,o as s,c as a,e as p}from"./app.c2d46e23.js";const t={},e=p(`<h1 id="\u6CDB\u578B-generics" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B-generics" aria-hidden="true">#</a> \u6CDB\u578B Generics</h1><p>\u6CDB\u578B\uFF08<code>Generics</code>\uFF09\u662F\u6307\u5728\u5B9A\u4E49\u51FD\u6570\u3001\u63A5\u53E3\u6216\u7C7B\u7684\u65F6\u5019\uFF0C\u4E0D\u9884\u5148\u6307\u5B9A\u5177\u4F53\u7684\u7C7B\u578B\uFF0C\u800C\u5728\u4F7F\u7528\u7684\u65F6\u5019\u518D\u6307\u5B9A\u7C7B\u578B\u7684\u4E00\u79CD\u7279\u6027\u3002<strong>\u6CDB\u578B\u53EF\u4EE5\u521B\u5EFA\u53EF\u91CD\u7528\u7684\u7EC4\u4EF6\uFF0C\u4E00\u4E2A\u7EC4\u4EF6\u53EF\u4EE5\u652F\u6301\u591A\u79CD\u7C7B\u578B\u7684\u6570\u636E</strong>\uFF0C\u7528\u6237\u53EF\u4EE5\u4EE5\u81EA\u5DF1\u7684\u6570\u636E\u7C7B\u578B\u6765\u4F7F\u7528\u7EC4\u4EF6\u3002</p><p><code>TypeScript</code>\u4E2D\u5BF9\u6CDB\u578B\u7684\u8BF4\u660E\uFF1A\u8F6F\u4EF6\u5DE5\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u4E0D\u4EC5\u8981\u521B\u5EFA\u4E00\u81F4\u7684\u5B9A\u4E49\u826F\u597D\u7684API\uFF0C\u540C\u65F6\u4E5F\u8981\u8003\u8651\u53EF\u91CD\u7528\u6027\u3002 \u7EC4\u4EF6\u4E0D\u4EC5\u80FD\u591F\u652F\u6301\u5F53\u524D\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u540C\u65F6\u4E5F\u80FD\u652F\u6301\u672A\u6765\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u8FD9\u5728\u521B\u5EFA\u5927\u578B\u7CFB\u7EDF\u65F6\u4E3A\u4F60\u63D0\u4F9B\u4E86\u5341\u5206\u7075\u6D3B\u7684\u529F\u80FD</p><p>\u6CDB\u578B\u53EF\u4EE5\u4F7F\u7528\u5C16\u62EC\u53F7<code>&lt;&gt;</code>\u6765\u8FDB\u884C\u5B9A\u4E49\uFF0C\u5728\u4E0B\u9762\u7684\u4F8B\u5B50\u5F53\u4E2D\uFF0C<code>&lt;T&gt;</code>\u53EF\u4EE5\u5E2E\u52A9\u6355\u83B7\u7528\u6237\u4F20\u5165\u7684\u7C7B\u578B\uFF0CT\u53EF\u4EE5\u8D4B\u503C\u7ED9\u4E4B\u540E\u4F20\u5165\u53C2\u6570value\u548C\u8FD4\u56DE\u503C\uFF0C\u6765\u4F5C\u4E3A\u5B83\u4EEC\u7684\u7C7B\u578B\u3002</p><br><hr><br><h2 id="\u6CDB\u578B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u65B9\u6CD5" aria-hidden="true">#</a> \u6CDB\u578B\u65B9\u6CD5</h2><p>\u4F8B\u5B50\uFF1A \u5728\u4F8B\u5B50\u4E2D\uFF0C\u8C03\u7528getdata\u65B9\u6CD5\u65F6\u4F7F\u7528\u6CDB\u578B<code>&lt;T&gt;</code>\uFF0C\u5982\u679C\u6307\u5B9A\u6CDB\u578B\u7684\u7C7B\u578B\u662F<code>number</code>\uFF0C\u90A3\u4E48\u4F20\u5165\u5B57\u7B26\u4E32\u5C31\u4F1A\u51FA\u9519\uFF0C\u5982\u679C\u60F3\u8981\u4F20\u5165\u5B57\u7B26\u4E32\uFF0C\u90A3\u4E48\u4E45\u6307\u5B9A\u6CDB\u578BT\u4E3A<code>string</code>\u7C7B\u578B\u5373\u53EF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> getdata<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
getdata<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7C7B\u578B\u201Cstring\u201D\u7684\u53C2\u6570\u4E0D\u80FD\u8D4B\u7ED9\u7C7B\u578B\u201Cnumber\u201D\u7684\u53C2\u6570</span>
getdata<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
getdata<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CDB\u578B\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u7C7B" aria-hidden="true">#</a> \u6CDB\u578B\u7C7B</h2><p>\u6CDB\u578B\u4E5F\u53EF\u4EE5\u7528\u4E8E\u7C7B\u7684\u5B9A\u4E49\u4E2D\uFF0C\u6CDB\u578B\u7C7B\u4F7F\u7528\uFF08<code>&lt;&gt;</code>\uFF09\u62EC\u8D77\u6CDB\u578B\u7C7B\u578B\uFF0C\u8DDF\u5728\u7C7B\u540D\u540E\u9762\u3002</p><p>\u5B9A\u4E49\u4E00\u4E2A\u6CDB\u578B\u7C7B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">add</span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> <span class="token literal-property property">max</span><span class="token operator">:</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;=</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                max <span class="token operator">=</span> item<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> max<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u7C7B\u8FDB\u884C\u5B9E\u4F8B\u5316\uFF0C\u5E76\u4E14\u901A\u8FC7\u6CDB\u578B\u6765\u6307\u5B9A\u7C7BT\u4EE3\u8868\u7684\u7C7B\u578B\u662Fnumber\u3002 \u6BCF\u6B21add()\u65B9\u6CD5\u6DFB\u52A0\u6570\u636E\u540E\uFF0C\u8FD4\u56DE\u5F53\u524D\u7684\u6700\u5927\u503C\u3002\u5E76\u4E14\u6DFB\u52A0\u7684\u6570\u636E\u7C7B\u578B\u53EA\u80FD\u662Fnumber\u6570\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> myc1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myc1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myc1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myc1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myc1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u628A\u7C7B\u4F5C\u4E3A\u53C2\u6570\u7C7B\u578B\u7684\u6CDB\u578B\u7C7B\uFF0C\u5B9A\u4E49\u4E00\u4E2AApp\u7C7B\u4F5C\u4E3A\u4F20\u5165\u7684\u53C2\u6570\u7C7B\u578B\uFF0C\u5B9A\u4E49\u4E00\u4E2A<code>Test</code>\u5E76\u4E14\u4F7F\u7528\u6CDB\u578B\u8FDB\u884C\u7EA6\u675F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">say</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9A\u4E49<code>Test</code>\u7C7B\u7684\u5B9E\u4F8B\u65F6\uFF0C\u5C06<code>App</code>\u7C7B\u4F5C\u4E3A\u6CDB\u578B\u7EA6\u675F\u4F20\u5165\u3002\u8FD9\u6837\u4E00\u6765\uFF0C\u5982\u679C\u65B9\u6CD5\u4F20\u53C2\u7684\u7C7B\u578B\u4E0D\u662F<code>App</code>\u7C7B\u7684\u89C4\u8303\u5C31\u4F1A\u51FA\u9519\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token operator">&lt;</span>App<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
test<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><hr><br><h2 id="\u6CDB\u578B\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u63A5\u53E3" aria-hidden="true">#</a> \u6CDB\u578B\u63A5\u53E3</h2><p>\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3\uFF0C\u4F7F\u7528<code>&lt;T&gt;</code>\u89C4\u5B9A\u5176\u4E2Dname\u7684\u7C7B\u578B\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Inter</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span>number<span class="token punctuation">;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token literal-property property">newinter</span><span class="token operator">:</span> Inter<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span> <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\u5982\u679C\u6CDB\u578B\u63A5\u53E3\u662F\u7ED9\u51FD\u6570\u7528\u7684\uFF0C\u53EF\u4EE5\u5728\u5185\u90E8\u5B9A\u4E49\u5B9A\u4E49\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Inter</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>index<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token constant">K</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">newinter</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>index<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token constant">K</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token literal-property property">myinter</span><span class="token operator">:</span>Inter<span class="token operator">&lt;</span>number<span class="token punctuation">,</span> string<span class="token operator">&gt;</span> <span class="token operator">=</span> newinter<span class="token punctuation">;</span>
<span class="token function">myinter</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;\u674E\u56DB&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005\u53EF\u4EE5\u76F4\u63A5\u5728\u63A5\u53E3\u5185\u90E8\u5B9A\u4E49\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Inter</span> <span class="token punctuation">{</span>
    <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>index<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token constant">K</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token literal-property property">myinter</span><span class="token operator">:</span>Inter <span class="token operator">=</span> newinter<span class="token punctuation">;</span>
<span class="token function">myinter</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;\u674E\u56DB&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CDB\u578B\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u7EA6\u675F" aria-hidden="true">#</a> \u6CDB\u578B\u7EA6\u675F</h2><p>\u5728\u6CDB\u578B\u7684\u4F7F\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u7531\u4E8E\u4F7F\u7528\u6CDB\u578B\u53D8\u91CF\u65F6\u4E8B\u5148\u4E0D\u77E5\u9053\u662F\u90A3\u79CD\u7C7B\u578B\u7684\uFF0C\u6240\u4EE5\u4E0D\u80FD\u968F\u610F\u64CD\u4F5C\u5176\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><p>\u6BD4\u5982\u4E0A\u9762\u7684<code>Test</code>\u6CDB\u578B\u7C7B\uFF0C\u5728<code>say</code>\u65B9\u6CD5\u4E2D\u6253\u5370\u4F20\u5165\u53C2\u6570<code>value</code>\u5C31\u4E0D\u80FD\u4F7F\u7528<code>.length</code>\u5C5E\u6027\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u62A5\u9519\uFF1A <code>\u7C7B\u578B\u201CT\u201D\u4E0A\u4E0D\u5B58\u5728\u5C5E\u6027\u201Clength\u201D</code></p><p>\u8FD9\u6837\u662F\u56E0\u4E3A\u5982\u679C\u4F20\u5165\u7684\u503C\u662Fnumber\u6216\u8005Boolean\u7C7B\u578B\u7684\uFF0C\u662F\u6CA1\u6709<code>length</code>\u5C5E\u6027\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">say</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u6CDB\u578B\u7EA6\u675F\uFF08\u5BF9T\u5217\u51FA\u7EA6\u675F\u8981\u6C42\uFF09\u3002</p><p>\u6CDB\u578B\u7EA6\u675F\u4F7F\u7528\u7684\u5173\u952E\u5B57<code>extends</code>\uFF0C\u548C\u7C7B\u4E0E\u63A5\u53E3\u4E2D\u7684\u7EE7\u627F\u76F8\u4F3C</p><p>\u7F16\u5199\u4E00\u4E2A\u63A5\u53E3 <code>GenericsRules</code>\uFF0C\u5728\u5185\u90E8\u8BBE\u7F6E<code>length</code>\u5C5E\u6027\uFF0C\u7C7B\u578B\u4E3A<code>number</code>\u3002</p><p>\u73B0\u5728<code>Test</code>\u7684\u6CDB\u578BT\u4E2D\u5C31\u8981\u6C42\u5FC5\u987B\u6709<code>length</code>\u5C5E\u6027\u7684\u53D8\u91CF\uFF0C\u5426\u5219\u5C06\u4F1A\u51FA\u73B0\u62A5\u9519\u3002\u5B9A\u4E49<code>Test</code>\u7684\u5B9E\u4F8B\u65F6\u5C31\u4E0D\u80FD\u4F7F\u7528<code>new Test&lt;number&gt;()</code>\u8FD9\u6837\u7684\u65B9\u5F0F\u4E86\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">GenericsRules</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">length</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">GenericsRules</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">say</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><br><p>\u5199\u5728\u6700\u540E\uFF0C\u5176\u5B9E\u4E0D\u8BBA\u662F\u4E4B\u524D<code>TypeScript</code>\u7684\u63A5\u53E3\u7C7B\u77E5\u8BC6\uFF0C\u8FD8\u662F\u73B0\u5728\u7684\u6CDB\u578B\u77E5\u8BC6\u3002\u8FD9\u4E9B\u90FD\u662F\u6211\u521A\u521A\u5B66\u5230\u7684\uFF0C\u5982\u679C\u8981\u60F3\u7CBE\u901A\u638C\u63E1\uFF0C\u80AF\u5B9A\u9700\u8981\u81EA\u5DF1\u4E0D\u65AD\u7684\u53BB\u5B9E\u8DF5\u4F7F\u7528\uFF0C\u800C\u4E0D\u662F\u8FD9\u6837\u5B66\u4E60\u5C31\u597D\uFF0C\u6211\u81EA\u5DF1\u5199\u7684\u535A\u5BA2\u7FFB\u9605\u6700\u591A\u7684\u4E5F\u53EA\u662F\u6211\u81EA\u5DF1\u3002</p>`,43),o=[e];function c(l,i){return s(),a("div",null,o)}var u=n(t,[["render",c],["__file","\u4ECE0\u5F00\u59CB\u7684TypeScript\u306E\u5341\uFF1A\u6CDB\u578B.html.vue"]]);export{u as default};
