import{_ as n,o as s,c as a,e as t}from"./app.c2d46e23.js";const p={},e=t(`<hr><hr><h1 id="socketio-\u306E-\u804A\u5929\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#socketio-\u306E-\u804A\u5929\u7EC3\u4E60" aria-hidden="true">#</a> SocketIO \u306E \u804A\u5929\u7EC3\u4E60</h1><p>\u597D\u4E45\u6CA1\u6709\u66F4\u65B0\u8FC7\u535A\u5BA2\uFF0C\u8FD9\u6B21\u52A8\u624B\u5199\u5199</p><h2 id="socketio" tabindex="-1"><a class="header-anchor" href="#socketio" aria-hidden="true">#</a> socketIO</h2><blockquote><p><strong>socketIO\u6982\u5FF5</strong></p><p>\u4E00\u4E2A\u5E93\uFF0C\u57FA\u4E8E Node.js \u7684\u5B9E\u65F6\u5E94\u7528\u7A0B\u5E8F\u6846\u67B6\u3002\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u5B9E\u73B0\u5B9E\u65F6\uFF0C\u53CC\u5411\u548C\u57FA\u4E8E\u4E8B\u4EF6\u7684\u901A\u4FE1\u3002\u5B83\u9002\u7528\u4E8E\u6BCF\u4E2A\u5E73\u53F0\u3001\u6D4F\u89C8\u5668\u6216\u8BBE\u5907\uFF0C\u540C\u6837\u6CE8\u91CD\u53EF\u9760\u6027\u548C\u901F\u5EA6\u3002</p></blockquote><blockquote><p><strong>\u4E0Ewebsocket\u5173\u7CFB</strong></p><p>\u5728<code>websocket</code>\u51FA\u73B0\u4E4B\u524D\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u5373\u65F6\u901A\u4FE1\u5F80\u5F80\u4F9D\u8D56\u4E8E\u5BA2\u6237\u7AEF\u8FDB\u884C\u8F6E\u8BE2\u64CD\u4F5C\uFF0C<code>websocket</code>\u4F7F\u5F97\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u6570\u636E\u4EA4\u6362\u53D8\u5F97\u66F4\u52A0\u7B80\u5355\uFF0C\u5141\u8BB8\u670D\u52A1\u7AEF\u4E3B\u52A8\u5411\u5BA2\u6237\u7AEF\u63A8\u9001\u6570\u636E\uFF0C\u540C\u65F6\u4E5F\u964D\u4F4E\u4E86\u670D\u52A1\u5668\u7684\u6027\u80FD\u6D88\u8017\u3002\u4F46\u662F\uFF0C<code>websocket</code>\u5E76\u4E0D\u80FD\u517C\u5BB9\u6240\u6709\u7684\u6D4F\u89C8\u5668\uFF0C\u6240\u4EE5<code>socketIO</code>\u662F\u4E0D\u4EC5\u5305\u542B\u4E86<code>websocket</code>,\u8FD8\u5BF9\u8F6E\u8BE2\uFF08Polling\uFF09\u673A\u5236\u4EE5\u53CA\u5176\u5B83\u7684\u5B9E\u65F6\u901A\u4FE1\u65B9\u5F0F\u5C01\u88C5\u6210\u4E86\u901A\u7528\u7684\u63A5\u53E3 <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0920294d7d2c4f4d80a7de674fe3faac~tplv-k3u1fbpfcp-watermark.image?" alt="socketio\u4E0Ewebsocket.png"></p></blockquote><hr><h2 id="\u804A\u5929\u7EC3\u4E60\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u804A\u5929\u7EC3\u4E60\u7ED3\u6784" aria-hidden="true">#</a> \u804A\u5929\u7EC3\u4E60\u7ED3\u6784</h2><p>\u57FA\u4E8EsocketIO\u7684\u53CC\u5411\u901A\u4FE1\uFF0C\u51C6\u5907\u5236\u4F5C\u4E00\u4E2A\u804A\u5929\u754C\u9762\u3002</p><p>\u524D\u7AEF\uFF1A\u804A\u5929\u754C\u9762\u7684\u5927\u4F53\u6837\u5F0F\u53C2\u8003\u4E8E\u5FAE\u4FE1\u754C\u9762 \u540E\u53F0\uFF1A\u4F7F\u7528<code>node.js</code> + <code>socketIO</code></p><p>\u5728\u52A8\u624B\u4E4B\u524D\uFF0C\u9996\u5148\u8981\u89C4\u5212\u4E00\u4E0B\u9700\u8981\u6709\u7684\u529F\u80FD\uFF08\u867D\u7136\u5F88\u591A\u662F\u6211\u81EA\u5DF1\u540E\u9762\u60F3\u5230\u518D\u52A0\u7684 \u{1F436} \uFF09</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ca1e3962e2c4162824ef48b301110db~tplv-k3u1fbpfcp-watermark.image?" alt="SocketIO\u804A\u5929.png"></p><hr><h2 id="\u9879\u76EE\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u6B65\u9AA4" aria-hidden="true">#</a> \u9879\u76EE\u6B65\u9AA4</h2><ol><li>\u9996\u5148\u4F7F\u7528<code>yarn init</code>\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE</li><li>\u4E0B\u8F7D\u9700\u8981\u7684express\u548Csocket.io, \u547D\u4EE4\uFF1A<code>yarn add socket.io express</code></li></ol><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2570daf1be1b45eb9886d2003076016a~tplv-k3u1fbpfcp-watermark.image?" alt="\u9879\u76EEinit.png"> 3. \u5728main.js\u4E2D\u5B9A\u4E49\u597D\u9700\u8981io, \u5E76\u4E14\u4E3A\u4E86\u9632\u6B62socketIO\u8FDE\u63A5\u65F6\u4EA7\u751F<strong>\u8DE8\u57DF\u95EE\u9898</strong>\uFF0C\u53EF\u4EE5\u4F7F\u7528<strong>cors</strong>\u8FDB\u884C\u8BBE\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Server <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;socket.io&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> io <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Server</span><span class="token punctuation">(</span>server<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">allowedHeaders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;chat-room&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// \u88AB\u5141\u8BB8\u7684\u8BF7\u6C42\u5934</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u5728main.js\u4E2D\u7F16\u5199io\u7684\u8FDE\u63A5\u76D1\u542C\uFF0C<strong>\u6D4B\u8BD5</strong>\u5BA2\u6237\u7AEF\u662F\u5426\u8FDE\u63A5\u5230\u670D\u52A1\u5668\uFF0C\u8FD9\u91CC\u4F7F\u7528<code>of</code>\u5EFA\u7ACB\u4E00\u4E2A\u623F\u95F4</li></ol><blockquote><p>\u8FD9\u91CC\u53EF\u4EE5\u53C2\u7167\u5B98\u65B9\u7684\u5B9E\u4F8B\uFF08\u4E0D\u8FC7\u662F\u975E\u8DE8\u57DF\u7684\uFF09\uFF1Ahttps://socket.io/get-started/chat</p><p>\u5982\u679C\u60F3\u8981\u5904\u7406\u8DE8\u57DF\u53EF\u53C2\u8003\uFF1Ahttps://socket.io/docs/v4/handling-cors/#cors-header-access-control-allow-origin-missing</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>io<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&#39;my-chatroom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connection&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">socket</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6709\u65B0\u7528\u6237\u8FDE\u63A5\u4E86&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//\u670D\u52A1\u5668\u672C\u5730\u4E3B\u673A\u7684\u6570\u5B57   \u6CE8\u610F\u8FD9\u91CC\u4E0D\u662Fapp</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3007</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;http:127.0.0.1:3007 \u542F\u52A8\u4E86\u3002\u3002\u3002&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u524D\u7AEF\u6D4B\u8BD5\u9875\u9762\uFF1A(\u8FD9\u91CC\u7684<code>socket.io.js</code>\u662F\u4ECE<code>node_module</code>\u4E2D\u62FF\u51FA\u6765\u7684)</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ec9fc42947f45c6b19c870b7382d106~tplv-k3u1fbpfcp-watermark.image?" alt="socketjs\u7684\u4F4D\u7F6E.png"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./js/socket.io.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        socket <span class="token operator">=</span> <span class="token function">io</span><span class="token punctuation">(</span><span class="token string">&#39;http://127.0.0.1:3007/my-chatroom&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u7528\u4E8E\u901A\u77E5\u670D\u52A1\u5668\u5728\u771F\u6B63\u7684\u8BF7\u6C42\u4E2D\u4F1A\u91C7\u7528chat-room\u8BF7\u6C42\u5934</span>
            <span class="token literal-property property">extraHeaders</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;chat-room&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456789&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u4F7F\u7528nodemon\u8FD0\u884Cmain.js, \u5E76\u4E14\u4F7F\u7528<code>live server</code>\u8FD0\u884C\u524D\u7AEF\u6D4B\u8BD5\u7684html\u9875\u9762\uFF0C\u53EF\u4EE5\u770B\u5230\u7EC8\u7AEF\u4E2D\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u5DF2\u7ECF\u901A\u8FC7socketIO\u8FDE\u63A5\u4E86\u3002</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a3f46fc05e874380a3d1589b09ddf66e~tplv-k3u1fbpfcp-watermark.image?" alt="\u6D4B\u8BD5\u8FDE\u63A5.png"></p><ol start="5"><li>\u672C\u6B21\u4F7F\u7528\u7684\u6570\u636E\u6CA1\u6709\u5199\u5165\u5728\u6570\u636E\u5E93\u6216\u5176\u4ED6\u6587\u4EF6\u5185\uFF0C\u800C\u662F\u76F4\u63A5\u5B9A\u4E49\u7684\u3002 \u6570\u636E\u683C\u5F0F\u57FA\u672C\u5982\u4E0B\u6240\u793A\uFF1A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6570\u636E\u683C\u5F0F</span>
<span class="token string-property property">&quot;userList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u7528\u6237</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>   <span class="token comment">// \u59D3\u540D</span>
        <span class="token string-property property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>   <span class="token comment">// \u5BC6\u7801</span>
        <span class="token string-property property">&quot;online&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>   <span class="token comment">// \u662F\u5426\u5728\u7EBF</span>
        <span class="token string-property property">&quot;nowSocketId&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>   <span class="token comment">// \u5F53\u524D\u7684socketid</span>
        <span class="token string-property property">&quot;headPortrait&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:3007/img/cherry.png&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u5934\u50CF</span>
        <span class="token comment">// \u804A\u5929\u4FE1\u606F</span>
        <span class="token string-property property">&quot;infos&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// \u804A\u5929\u5BF9\u8C61</span>
            <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">,</span>   <span class="token comment">// \u5BF9\u8C61\u540D</span>
                <span class="token comment">// \u6700\u540E\u4E00\u6B21\u4FE1\u606F</span>
                <span class="token string-property property">&quot;lastMsg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8FD9\u662F\u6700\u540E\u4E00\u6B21\u4E86&quot;</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token number">78495</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">// \u6240\u6709\u4FE1\u606F</span>
                <span class="token string-property property">&quot;allMsg&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token string-property property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8FD9\u662F\u6700\u540E\u4E00\u6B21\u4E86&quot;</span><span class="token punctuation">,</span>
                        <span class="token string-property property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token number">78495</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>\u540C\u65F6\u4E3A\u4E86\u907F\u514D\u4EE3\u7801\u8FC7\u591A\uFF0C\u65B0\u5EFA\u4E00\u4E2ArouterGet.js\u6765\u5E94\u5BF9http\u8BBF\u95EE\u7684\u8BF7\u6C42\uFF0C\u524D\u7AEF\u8BBF\u95EE\u7684get\u8BF7\u6C42\u65B9\u6CD5\u4E5F\u662F\u4F7F\u7528promise\u81EA\u5B9A\u4E49\u7684 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52899845cfb24e6bb613d8d5811a486b~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></li></ol><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07453053cca545ca81bce6211c25bcc5~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><ol start="7"><li>\u56E0\u4E3A\u4EE3\u7801\u8FC7\u957F\u7684\u7F18\u6545\uFF0C\u8FD9\u91CC\u90E8\u5206\u8FC7\u7A0B\u5C31\u5F00\u59CB\u7B80\u7565\uFF0C\u6D4B\u8BD5\u767B\u5F55http\u8BF7\u6C42\u662F\u5426\u6210\u529F\uFF0C\u5728<code>loginCheck</code>\u5224\u65AD\u65F6\uFF0C\u8FD8\u9700\u8981\u589E\u52A0\u4E00\u4E2A\u91CD\u590D\u767B\u5F55\u7684\u5224\u65AD\uFF0C\u4E3A\u4E86\u9632\u6B62\u7528\u6237\u8FDE\u7EED\u767B\u5F55</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;userName=&#39;</span> <span class="token operator">+</span> name<span class="token punctuation">,</span> <span class="token string">&#39;password=&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token punctuation">]</span>
<span class="token function">getAjaxNew</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&quot;http://127.0.0.1:3007/loginCheck&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">options</span><span class="token operator">:</span> options<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/710f7fac93454a17acd3f06a37916540~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u5982\u679C\u767B\u5F55\u6210\u529F\uFF0C\u518D\u83B7\u53D6\u7528\u6237\u5217\u8868\uFF0C\u5E76\u4E14\u8FD4\u56DE\u7528\u6237\u5217\u8868\u4FE1\u606F\u65F6\u4E3A\u4E86\u5B89\u5168\u6027\uFF0C\u9700\u8981\u5C06\u5217\u8868\u4E2D\u4E00\u4E9B\u5173\u952E\u6570\u636E\u6BD4\u5982password\u7B49\u8FDB\u884C\u9690\u85CF\uFF0C\u7F6E\u7A7A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9690\u85CF\u5173\u952E\u4FE1\u606F</span>
<span class="token keyword">function</span> <span class="token function">dataDeal</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> myName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> item <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        item<span class="token punctuation">.</span>password <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token keyword">of</span> item<span class="token punctuation">.</span>infos<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            p<span class="token punctuation">.</span>allMsg <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>myName <span class="token operator">==</span> item<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec051915f29e4f9599d0f08fad7c5491~tplv-k3u1fbpfcp-watermark.image?" alt="\u83B7\u53D6\u7528\u6237\u5217\u8868.gif"></p><ol start="8"><li>\u5728socketIO\u7684\u540E\u53F0\u65B9\u6CD5\u4E2D\uFF0C\u4ECB\u7ECD\u4E00\u4E0B\u6D88\u606F\u7684<strong>\u6536\u53D1</strong></li></ol><ul><li>\u540E\u53F0\u901A\u8FC7<code>socket.on</code>\u63A5\u6536\u524D\u7AEF\u4F20\u6765\u7684\u8BF7\u6C42\uFF0C\u5E76\u4E14\u901A\u8FC7<code>socket.emit</code>\u6765\u53D1\u9001\u6570\u636E\u7ED9\u8BF7\u6C42\u8005</li><li>\u767B\u5F55\u6216\u8005\u79BB\u7EBF\uFF0C\u90A3\u4E48\u5C31\u8981\u53D1\u9001\u7ED9\u9664\u81EA\u5DF1\u4E4B\u5916\u7684\u7528\u6237\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>.broadcast()</code>\u6765\u8FDB\u884C\u5E7F\u64AD\u6D88\u606F</li><li>\u53D1\u9001\u7ED9\u6307\u5B9A\u7684\u7528\u6237\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>.to()</code>\u65B9\u6CD5\uFF0C\u4F20\u5165\u7684\u53C2\u6570\u662F\u6307\u5B9A\u7528\u6237\u7684socketid</li></ul><p>\u66F4\u591A\u65B9\u6CD5\u53EF\u4EE5\u67E5\u770B\u5B98\u65B9API\uFF1Ahttps://socket.io/docs/v4/server-api/ \u6216\u8005\u4E66\u6808\u4E0A\u7684\u4E2D\u6587\u6587\u6863\uFF1A https://www.bookstack.cn/read/veaba-socket.io-docs/README.md</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>io<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&#39;my-chatroom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connection&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">socket</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// \u5F53\u6709\u7528\u6237\u767B\u5F55\u65F6</span>
    socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">info</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token comment">// uName\uFF1A\u767B\u5F55\u8005\u7684\u540D\u79F0  needToEmit:\u662F\u5426\u9700\u8981\u901A\u77E5\u5176\u4ED6\u7528\u6237</span>
        <span class="token keyword">let</span> uName <span class="token operator">=</span> info<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>name<span class="token punctuation">,</span> needToEmit <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token operator">...</span><span class="token operator">...</span>
        <span class="token comment">// \u901A\u77E5\u5176\u4ED6\u7528\u6237\u8C01\u767B\u5F55\u4E86  broadcast:\u9664\u81EA\u5DF1\u4EE5\u5916\u5E7F\u64AD\u6D88\u606F</span>
        socket<span class="token punctuation">.</span>broadcast<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;newUserLogin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">newUser</span><span class="token operator">:</span> uName
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// \u63A5\u6536\u65B0\u6D88\u606F\uFF0C\u5B58\u5165\u6570\u636E\uFF0C\u53D1\u9001\u7ED9\u9700\u8981\u63D0\u9192\u7684\u67D0\u4EBA</span>
    socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;chatSend&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token operator">...</span>
        <span class="token comment">// \u5982\u679C\u952E\u5B58\u5728\uFF0C\u5219\u53D1\u9001\u6D88\u606F</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>anotherid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// to \u53D1\u9001\u7ED9\u6307\u5B9Asocketid\u7528\u6237</span>
            socket<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span>anotherid<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;hasNewMsg&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">originName</span><span class="token operator">:</span> data<span class="token punctuation">.</span>myName<span class="token punctuation">,</span>
                <span class="token literal-property property">time</span><span class="token operator">:</span> data<span class="token punctuation">.</span>time<span class="token punctuation">,</span>
                <span class="token literal-property property">con</span><span class="token operator">:</span> data<span class="token punctuation">.</span>con
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\uFF1A</p><p>\u767B\u5F55\u548C\u79BB\u7EBF\u5DE6\u4FA7\u7684\u5934\u50CF\u680F\u4F1A\u6539\u53D8\u989C\u8272 \u804A\u5929\u7684\u8BDD\u4E5F\u4F1A\u65F6\u65F6\u8FDB\u884C</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d836c87fc6d94cacbd78fee3adef9f4c~tplv-k3u1fbpfcp-watermark.image?" alt="\u767B\u5F55\u804A\u5929\u79BB\u7EBF.gif"></p><hr><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u5176\u5B9E\u8FD9\u4E2A\u7EC3\u4E60\u4E0D\u8DB3\u4E4B\u5904\u8FD8\u662F\u633A\u591A\u7684\uFF0C\u6CA1\u6709\u628A\u6570\u636E\u4FDD\u5B58\u5230\u4E0B\u6765\uFF0C\u5E76\u4E14\u4E00\u4E9B\u5B89\u5168\u6027\u95EE\u9898\u548C\u4E00\u4E9B\u4EA4\u4E92\u95EE\u9898\u4E0A\u5176\u5B9E\u4E5F\u6709\u5F85\u8003\u8651\u3002\u4F46\u662F\u5927\u81F4\u4E0A\u4F7F\u7528socketIO\u505A\u597D\u4E86\uFF0C\u56E0\u4E3A\u672C\u6B21\u76EE\u7684\u8FD8\u662F\u4E3A\u4E86\u5B66\u4E60socketIO</p>`,46),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","SocketIO \u306E \u804A\u5929\u7EC3\u4E60.html.vue"]]);export{r as default};
