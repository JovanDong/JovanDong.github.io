import{_ as t,r as e,o,c,a as n,b as l,e as a,d as s}from"./app.c2d46e23.js";const i={},u=a(`<h3 id="\u7EB9\u7406\u8D34\u56FE" tabindex="-1"><a class="header-anchor" href="#\u7EB9\u7406\u8D34\u56FE" aria-hidden="true">#</a> \u7EB9\u7406\u8D34\u56FE</h3><ul><li><a href="#%E8%B4%B4%E5%9B%BE%E4%BB%8B%E7%BB%8D">\u8D34\u56FE\u4ECB\u7ECD</a></li><li><a href="#%E7%AE%80%E5%8D%95%E7%9A%84%E7%BA%B9%E7%90%86%E8%B4%B4%E5%9B%BE">\u7B80\u5355\u7684\u7EB9\u7406\u8D34\u56FE</a></li><li><a href="#canvas%E7%BA%B9%E7%90%86%E8%B4%B4%E5%9B%BE">canvas\u7EB9\u7406\u8D34\u56FE</a></li><li><a href="#video%E8%A7%86%E9%A2%91%E7%BA%B9%E7%90%86%E8%B4%B4%E5%9B%BE">video\u89C6\u9891\u7EB9\u7406\u8D34\u56FE</a><ul><li><a href="#%E8%A7%86%E9%A2%91%E4%BD%9C%E4%B8%BAthreejs%E7%BA%B9%E7%90%86%E8%B4%B4%E5%9B%BEvideotexture">\u89C6\u9891\u4F5C\u4E3AThree.js\u7EB9\u7406\u8D34\u56FE(VideoTexture)</a></li></ul></li><li><a href="#%E5%87%B9%E5%87%B8%E8%B4%B4%E5%9B%BEbumpmap%E5%92%8C%E6%B3%95%E7%BA%BF%E8%B4%B4%E5%9B%BEnormalmap">\u51F9\u51F8\u8D34\u56FEbumpMap\u548C\u6CD5\u7EBF\u8D34\u56FEnormalMap</a></li></ul><h1 id="\u8D34\u56FE\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u8D34\u56FE\u4ECB\u7ECD" aria-hidden="true">#</a> \u8D34\u56FE\u4ECB\u7ECD</h1><p>\u7EB9\u7406\u8D34\u56FE\u662FThreejs\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u5185\u5BB9\uFF0C\u6E38\u620F\u3001\u4EA7\u54C1720\u5C55\u793A\u3001\u7269\u8054\u7F513D\u53EF\u89C6\u5316\u7B49\u9879\u76EE\u7A0B\u5E8F\u5458\u52A0\u8F7D\u6A21\u578B\u7684\u540C\u65F6\u9700\u8981\u5904\u7406\u7EB9\u7406\u8D34\u56FE\u3002</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1fba9506bafd4a149aae4b191afedfa3~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h1 id="\u7B80\u5355\u7684\u7EB9\u7406\u8D34\u56FE" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684\u7EB9\u7406\u8D34\u56FE" aria-hidden="true">#</a> \u7B80\u5355\u7684\u7EB9\u7406\u8D34\u56FE</h1><p>\u901A\u8FC7\u7EB9\u7406\u8D34\u56FE\u52A0\u8F7D\u5668<code>TextureLoader</code>\u7684load()\u65B9\u6CD5\u52A0\u8F7D\u4E00\u5F20\u56FE\u7247\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A<code>\u7EB9\u7406\u5BF9\u8C61Texture</code>\uFF0C<code>\u7EB9\u7406\u5BF9\u8C61Texture</code>\u53EF\u4EE5\u4F5C\u4E3A\u6A21\u578B\u6750\u8D28\u989C\u8272\u8D34\u56FE.map\u5C5E\u6027\u7684\u503C\u3002</p><p>\u6750\u8D28\u7684\u989C\u8272\u8D34\u56FE\u5C5E\u6027.map\u8BBE\u7F6E\u540E\uFF0C\u6A21\u578B\u4F1A\u4ECE\u7EB9\u7406\u8D34\u56FE\u4E0A\u91C7\u96C6\u50CF\u7D20\u503C\uFF0C\u8FD9\u65F6\u5019\u4E00\u822C\u6765\u8BF4\u4E0D\u9700\u8981\u5728\u8BBE\u7F6E\u6750\u8D28\u989C\u8272.color\u3002.map\u8D34\u56FE\u4E4B\u6240\u4EE5\u79F0\u4E4B\u4E3A\u989C\u8272\u8D34\u56FE\u5C31\u662F\u56E0\u4E3A\u7F51\u683C\u6A21\u578B\u4F1A\u83B7\u5F97\u989C\u8272\u8D34\u56FE\u7684\u989C\u8272\u503CRGB\u3002<br> \u4F8B\u5B50\uFF1A<br> \u4F7F\u7528\u5E73\u94FA\u7684\u65B9\u5F0F\uFF0C\u5C06\u8349\u5730\u56FE\u7247\u8D34\u5230<code>PlaneGeometry</code>\u4E0A\uFF0C\u56FE\u7247\u5982\u4E0B\uFF1A</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e526efb802c74371854eaed379285364~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p>\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span>
	<span class="token keyword">var</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PerspectiveCamera</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	render <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">antialias</span><span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	render<span class="token punctuation">.</span><span class="token function">setPixelRatio</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>devicePixelRatio<span class="token punctuation">)</span><span class="token punctuation">;</span>
	render<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span>
	<span class="token doc-comment comment">/********************************************************/</span>
	<span class="token keyword">var</span> app <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	app<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>render<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
	<span class="token keyword">var</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PlaneGeometry</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5E73\u9762</span>
	<span class="token keyword">var</span> textureLoader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>TextureLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7EB9\u7406\u52A0\u8F7D\u5668</span>
	<span class="token keyword">var</span> texture <span class="token operator">=</span> textureLoader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;./img/grass/grass.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token comment">// \u8BBE\u7F6E\u9635\u5217\u6A21\u5F0F   \u9ED8\u8BA4ClampToEdgeWrapping  RepeatWrapping\uFF1A\u9635\u5217  \u955C\u50CF\u9635\u5217\uFF1AMirroredRepeatWrapping</span>
	texture<span class="token punctuation">.</span>wrapS <span class="token operator">=</span> <span class="token constant">THREE</span><span class="token punctuation">.</span>RepeatWrapping<span class="token punctuation">;</span>
	texture<span class="token punctuation">.</span>wrapT <span class="token operator">=</span> <span class="token constant">THREE</span><span class="token punctuation">.</span>RepeatWrapping<span class="token punctuation">;</span>
	<span class="token comment">// uv\u4E24\u4E2A\u65B9\u5411\u7EB9\u7406\u91CD\u590D\u6570\u91CF</span>
	texture<span class="token punctuation">.</span>repeat<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">map</span><span class="token operator">:</span> texture<span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u7EB9\u7406\u8D34\u56FE</span>
		<span class="token literal-property property">side</span><span class="token operator">:</span> <span class="token constant">THREE</span><span class="token punctuation">.</span>DoubleSide
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> plane <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>
	scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>plane<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// \u76F8\u673A</span>
	camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8BBE\u7F6E\u76F8\u673A\u4F4D\u7F6E</span>
	camera<span class="token punctuation">.</span><span class="token function">lookAt</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token doc-comment comment">/********************************************************/</span>
	<span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		render<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span><span class="token punctuation">;</span>
		window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\uFF1A<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e38ed9e13f44898a58a58ad38bc84fc~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p>\u6B64\u65F6\u7EB9\u7406\u8D34\u56FE\u662F\u9759\u6B62\u72B6\u6001\uFF0C\u5982\u679C\u60F3\u8981\u4E00\u4E2A\u8FD0\u52A8\u7684\u7EB9\u7406\u8D34\u56FE\uFF0C\u53EF\u4EE5\u8BBE\u7F6E<code>texture.offset</code>\u4F4D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">// \u8BBE\u7F6E\u7EB9\u7406\u504F\u79FB</span>
	texture<span class="token punctuation">.</span>offset<span class="token punctuation">.</span>x <span class="token operator">-=</span> <span class="token number">0.06</span>
	render<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span><span class="token punctuation">;</span>
	window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\uFF1A<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c75d999283a4cb3b64c3b425ddd2510~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h1 id="canvas\u7EB9\u7406\u8D34\u56FE" tabindex="-1"><a class="header-anchor" href="#canvas\u7EB9\u7406\u8D34\u56FE" aria-hidden="true">#</a> canvas\u7EB9\u7406\u8D34\u56FE</h1><p>\u5728\u4F7F\u7528\u8D34\u56FE\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u8D34\u56FE\u4E0A\u53EF\u4EE5\u4F7F\u7528\u4E0D\u540C\u7684\u6750\u8D28</p><p>\u901A\u8FC7Three.js\u7C7B<code>CanvasTexture</code>\u53EF\u4EE5\u5206\u522B\u5B9E\u73B0\u628ACanvas\u753B\u5E03\u4F5C\u4E3A\u7EB9\u7406\u8D34\u56FE\u4F7F\u7528\u3002</p><p>Canvas\u753B\u5E03\u4F5C\u4E3AThree.js\u7EB9\u7406\u8D34\u56FE(<code>CanvasTexture</code>)<br> Canvas\u753B\u5E03\u53EF\u4EE5\u901A\u8FC72D API\u7ED8\u5236\u5404\u79CD\u5404\u6837\u7684\u51E0\u4F55\u5F62\u72B6\uFF0C\u53EF\u4EE5\u901A\u8FC7Canvas\u7ED8\u5236\u4E00\u4E2A\u8F6E\u5ED3\u540E\u7136\u540E\u4F5C\u4E3AThree.js\u7F51\u683C\u6A21\u578B\u3001\u7CBE\u7075\u6A21\u578B\u7B49\u6A21\u578B\u5BF9\u8C61\u7684\u7EB9\u7406\u8D34\u56FE\u3002</p><p>\u6838\u5FC3\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> textureLoader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>TextureLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7EB9\u7406\u52A0\u8F7D\u5668</span>
<span class="token keyword">var</span> texture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>CanvasTexture</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528canvas\u5F53\u4F5C\u8D34\u56FE\u7684\u56FE\u7247\uFF0C\u9996\u5148\u5148\u521B\u5EFA\u597Dcanvas\u7684\u5185\u5BB9\uFF0C\u4E0D\u9700\u8981\u5C06canvas\u52A0\u5165dom\u6811\u4E2D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">512</span><span class="token punctuation">;</span>
canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">128</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> c <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u77E9\u5F62\u533A\u57DF\u586B\u5145\u80CC\u666F</span>
c<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;#ff0000&quot;</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">512</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6587\u5B57</span>
c<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">;</span> <span class="token comment">//\u6587\u672C\u586B\u5145\u989C\u8272</span>
c<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">&quot;bold 28px \u5B8B\u4F53&quot;</span><span class="token punctuation">;</span> <span class="token comment">//\u5B57\u4F53\u6837\u5F0F\u8BBE\u7F6E</span>
c<span class="token punctuation">.</span>textBaseline <span class="token operator">=</span> <span class="token string">&quot;middle&quot;</span><span class="token punctuation">;</span> <span class="token comment">//\u6587\u672C\u4E0EfillText\u5B9A\u4E49\u7684\u7EB5\u5750\u6807</span>
c<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">;</span> <span class="token comment">//\u6587\u672C\u5C45\u4E2D(\u4EE5fillText\u5B9A\u4E49\u7684\u6A2A\u5750\u6807)</span>
c<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">&quot;jovnd  (\uFFE3\u03B5(#\uFFE3)\u2606\u2570\u256Eo(\uFFE3\u76BF\uFFE3///)&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PlaneGeometry</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> textureLoader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>TextureLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7EB9\u7406\u52A0\u8F7D\u5668</span>
<span class="token keyword">var</span> texture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>CanvasTexture</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// canvas\u505A\u753B\u5E03</span>

<span class="token comment">// \u8BBE\u7F6E\u9635\u5217\u6A21\u5F0F   \u9ED8\u8BA4ClampToEdgeWrapping  RepeatWrapping\uFF1A\u9635\u5217  \u955C\u50CF\u9635\u5217\uFF1AMirroredRepeatWrapping</span>
texture<span class="token punctuation">.</span>wrapS <span class="token operator">=</span> <span class="token constant">THREE</span><span class="token punctuation">.</span>RepeatWrapping<span class="token punctuation">;</span>
texture<span class="token punctuation">.</span>wrapT <span class="token operator">=</span> <span class="token constant">THREE</span><span class="token punctuation">.</span>RepeatWrapping<span class="token punctuation">;</span>
<span class="token comment">// uv\u4E24\u4E2A\u65B9\u5411\u7EB9\u7406\u91CD\u590D\u6570\u91CF</span>
texture<span class="token punctuation">.</span>repeat<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">map</span><span class="token operator">:</span> texture<span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u7EB9\u7406\u8D34\u56FE</span>
	<span class="token literal-property property">side</span><span class="token operator">:</span> <span class="token constant">THREE</span><span class="token punctuation">.</span>DoubleSide  <span class="token comment">// \u53CC\u9762</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> box <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>box<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\uFF1A<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00b3b4d5a6ce40759c4bba6c0b75c864~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h1 id="video\u89C6\u9891\u7EB9\u7406\u8D34\u56FE" tabindex="-1"><a class="header-anchor" href="#video\u89C6\u9891\u7EB9\u7406\u8D34\u56FE" aria-hidden="true">#</a> video\u89C6\u9891\u7EB9\u7406\u8D34\u56FE</h1><p>\u901A\u8FC7Three.js\u7C7B<code>VideoTexture</code>\u53EF\u4EE5\u5206\u522B\u5B9E\u73B0\u628A\u89C6\u9891\u4F5C\u4E3A\u7EB9\u7406\u8D34\u56FE\u4F7F\u7528\u3002</p><h2 id="\u89C6\u9891\u4F5C\u4E3Athree-js\u7EB9\u7406\u8D34\u56FE-videotexture" tabindex="-1"><a class="header-anchor" href="#\u89C6\u9891\u4F5C\u4E3Athree-js\u7EB9\u7406\u8D34\u56FE-videotexture" aria-hidden="true">#</a> \u89C6\u9891\u4F5C\u4E3AThree.js\u7EB9\u7406\u8D34\u56FE(VideoTexture)</h2><p>\u89C6\u9891\u672C\u8D28\u4E0A\u5C31\u662F\u4E00\u5E27\u5E27\u56FE\u7247\u6D41\u6784\u6210\uFF0C\u628A\u89C6\u9891\u4F5C\u4E3AThreejs\u6A21\u578B\u7684\u7EB9\u7406\u8D34\u56FE\u4F7F\u7528\uFF0C\u5C31\u662F\u4ECE\u89C6\u9891\u4E2D\u63D0\u53D6\u4E00\u5E27\u4E00\u5E27\u7684\u56FE\u7247\u4F5C\u4E3A\u6A21\u578B\u7684\u7EB9\u7406\u8D34\u56FE\uFF0C\u7136\u540E\u4E0D\u505C\u7684\u66F4\u65B0\u7684\u7EB9\u7406\u8D34\u56FE\u5C31\u53EF\u4EE5\u4EA7\u751F\u89C6\u9891\u64AD\u653E\u7684\u6548\u679C\u3002</p><p>\u4F7F\u7528\u89C6\u9891\u5F53\u4F5C\u8D34\u56FE\u7684\u56FE\u7247\uFF0C\u9996\u5148\u5148\u521B\u5EFA\u597Dvideo\u7684\u5185\u5BB9\uFF0C\u4E0D\u9700\u8981\u5C06video\u52A0\u5165dom\u6811\u4E2D<br> \u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> video <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;video&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u521B\u5EFAvideo\u5BF9\u8C61</span>
video<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&quot;../img/\u706D\u4E16 \u7B2C\u4E8C\u5B631.mp4&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBE\u7F6E\u89C6\u9891\u5730\u5740</span>
video<span class="token punctuation">.</span>autoplay <span class="token operator">=</span> <span class="token string">&quot;autoplay&quot;</span><span class="token punctuation">;</span> <span class="token comment">//\u8981\u8BBE\u7F6E\u64AD\u653E</span>
video<span class="token punctuation">.</span>loop <span class="token operator">=</span> <span class="token string">&quot;loop&quot;</span><span class="token punctuation">;</span>  <span class="token comment">//\u5FAA\u73AF\u64AD\u653E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6838\u5FC3\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> textureLoader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>TextureLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7EB9\u7406\u52A0\u8F7D\u5668</span>
<span class="token keyword">var</span> texture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>VideoTexture</span><span class="token punctuation">(</span>video<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u89C6\u9891\u5F53\u4F5C\u8D34\u56FE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\uFF1A\uFF08\u56E0\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u9650\u5236\uFF0C\u5220\u51CF\u4E86gif\u56FE\u7684\u5E27\u6570\uFF0C\u9020\u6210\u4E0B\u56FE\u663E\u793A\u6548\u679C\u5361\u987F\uFF09<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d4a1748c4e144c9a602ee88590e466d~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h1 id="\u51F9\u51F8\u8D34\u56FEbumpmap\u548C\u6CD5\u7EBF\u8D34\u56FEnormalmap" tabindex="-1"><a class="header-anchor" href="#\u51F9\u51F8\u8D34\u56FEbumpmap\u548C\u6CD5\u7EBF\u8D34\u56FEnormalmap" aria-hidden="true">#</a> \u51F9\u51F8\u8D34\u56FEbumpMap\u548C\u6CD5\u7EBF\u8D34\u56FEnormalMap</h1>`,35),r=s("\u4E00\u4E2A\u590D\u6742\u7684\u66F2\u9762\u6A21\u578B\uFF0C\u5F80\u5F80\u6A21\u578B\u9876\u70B9\u6570\u91CF\u6BD4\u8F83\u591A\uFF0C\u6A21\u578B\u6587\u4EF6\u6BD4\u8F83\u5927\uFF0C\u4E3A\u4E86\u964D\u4F4E\u6A21\u578B\u6587\u4EF6\u5927\u5C0F\uFF0C\u6CD5\u7EBF\u8D34\u56FE.normalMap\u7B97\u6CD5\u81EA\u7136\u5C31\u4EA7\u751F\u4E86\uFF0C\u590D\u6742\u7684\u4E09\u7EF4\u6A21\u578B3D\u7F8E\u672F\u53EF\u4EE5\u901A\u8FC7\u51CF\u9762\u64CD\u4F5C\u628A\u7CBE\u6A21\u7B80\u5316\u4E3A\u7B80\u6A21\uFF0C\u7136\u540E\u628A\u7CBE\u6A21\u8868\u9762\u7684\u590D\u6742\u51E0\u4F55\u4FE1\u606F\u6620\u5C04\u5230\u6CD5\u7EBF\u8D34\u56FE.normalMap\u4E0A"),k=n("br",null,null,-1),d=n("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a0453c7bf8941d0a53ebe6300321d47~tplv-k3u1fbpfcp-zoom-1.image",alt:"\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"},null,-1),m=n("br",null,null,-1),v=s(" \u5728\u4E4B\u524D\u7684\u4E00\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u5176\u5B9E\u5C31\u5DF2\u7ECF\u4F7F\u7528\u8D34\u56FE\u5236\u4F5C\u4E86\u4E00\u4E2A\u65CB\u8F6C\u7684\u5730\u7403\u6A21\u578B\u4E86\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\uFF1A"),b={href:"https://blog.csdn.net/qq_36171287/article/details/113955747?spm=1001.2014.3001.5501",target:"_blank",rel:"noopener noreferrer"},f=s("Three.js\u6742\u8BB0\uFF08\u4E5D\uFF09\u2014\u2014 \u7EC3\u4E60\uFF1A\u5730\u7403"),g=a(`<p>\u4E4B\u524D\u7684\u5730\u7403\u4E0A\u5E76\u6CA1\u6709\u4EC0\u4E48\u5C71\u8109\u7A81\u8D77\uFF0C\u53EA\u662F\u4E00\u4E2A\u5E73\u9762\u56FE\u3002\u800C\u73B0\u5728\uFF0C\u53EF\u4EE5\u4F7F\u7528\u53D1\u73B0\u8D34\u56FE\uFF0C\u6765\u9020\u6210\u5C71\u8109\u7684\u6548\u679C<br> \u6CD5\u7EBF\u8D34\u56FE\uFF1A<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0271ca6cf4946b8a6246de519c4c012~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p>\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> textureLoader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>TextureLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7EB9\u7406\u52A0\u8F7D\u5668</span>
<span class="token keyword">var</span> texture <span class="token operator">=</span> textureLoader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;./img/earth/css_globe_diffuse.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u52A0\u8F7D\u56FE\u7247\uFF0C\u8FD4\u56DETexture\u5BF9\u8C61</span>
<span class="token comment">// \u52A0\u8F7D\u6CD5\u7EBF\u8D34\u56FE</span>
<span class="token keyword">var</span> textureNormal <span class="token operator">=</span> textureLoader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;./img/earth/earth_normal_2048.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshPhongMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">map</span><span class="token operator">:</span> texture<span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u7EB9\u7406\u8D34\u56FE</span>
	<span class="token literal-property property">normalMap</span><span class="token operator">:</span> textureNormal<span class="token punctuation">,</span> <span class="token comment">//\u6CD5\u7EBF\u8D34\u56FE</span>
    <span class="token comment">//\u8BBE\u7F6E\u6DF1\u6D45\u7A0B\u5EA6\uFF0C\u9ED8\u8BA4\u503C(1,1)\u3002</span>
    <span class="token literal-property property">normalScale</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Vector2</span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> sphere <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>sphere<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\uFF1A<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c3992789c14a43609a4cfdfc914cb713~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p>`,4);function h(E,w){const p=e("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[r,k,d,m,v,n("a",b,[f,l(p)])]),g])}var x=t(i,[["render",h],["__file","Three.js\u6742\u8BB010.html.vue"]]);export{x as default};
