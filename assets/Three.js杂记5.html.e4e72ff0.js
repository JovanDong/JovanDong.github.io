import{_ as n,o as s,c as a,e as t}from"./app.bf64ff6a.js";const e={},i=t(`<h2 id="\u5750\u6807\u8F74" tabindex="-1"><a class="header-anchor" href="#\u5750\u6807\u8F74" aria-hidden="true">#</a> \u5750\u6807\u8F74</h2><p>\u4E4B\u524D\u6709\u5173\u4E0E\u7269\u4F53\u4E0E\u573A\u666F\u7684\u70B9\u7EBF\u9762\u4E2D\u5750\u6807\u53EF\u4EE5\u8FDB\u884C\u4E00\u4E0B\u8865\u5145\uFF1A<br> \u53EF\u4EE5\u4F7F\u7528THREE.AxisHelper(); \u53BB\u7ED8\u5236\u51FA\u5750\u6807\u8F74\u7EBF\uFF0C\u91CC\u9762\u586B\u5199\u7684\u53C2\u6570\u662F\u5750\u6807\u8F74\u7EBF\u7684\u957F\u5EA6<br> \u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span>
			<span class="token keyword">var</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PerspectiveCamera</span><span class="token punctuation">(</span><span class="token number">105</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			render <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
				<span class="token literal-property property">antialias</span><span class="token operator">:</span> <span class="token boolean">true</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			render<span class="token punctuation">.</span><span class="token function">setPixelRatio</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>devicePixelRatio<span class="token punctuation">)</span><span class="token punctuation">;</span>
			render<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span>
			
			<span class="token keyword">var</span> app <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			app<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>render<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			<span class="token comment">// \u5750\u6807\u8F74</span>
			<span class="token keyword">var</span> axisHelper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>AxisHelper</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>axisHelper<span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>
			camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
			camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
			
			<span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				render<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span><span class="token punctuation">;</span>
				window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\uFF1A<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/edd6c69b914b4d43944bf5f30319680d~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"><br> \u53EF\u4EE5\u4F7F\u7528object3D\u5C06\u7269\u4F53\u548C\u5750\u6807\u8F74\u7ED1\u5B9A\u8D77\u6765\uFF0C\u4E09\u7EF4\u7269\u4F53\uFF08Object3D\uFF09\u662FThree.js\u4E2D\u5927\u90E8\u5206\u5BF9\u8C61\u7684\u57FA\u7C7B\uFF0C\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u6765\u5BF9\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u7684\u7269\u4F53\u8FDB\u884C\u64CD\u7EB5\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7.add( object )\u65B9\u6CD5\u6765\u5C06\u5BF9\u8C61\u8FDB\u884C\u7EC4\u5408\uFF0C\u8BE5\u65B9\u6CD5\u5C06\u5BF9\u8C61\u6DFB\u52A0\u4E3A\u5B50\u5BF9\u8C61\uFF0C\u4F46\u4E3A\u6B64\u6700\u597D\u4F7F\u7528Group\uFF08\u6765\u4F5C\u4E3A\u7236\u5BF9\u8C61\uFF09\u3002</p><h3 id="\u6784\u9020\u5668" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u5668" aria-hidden="true">#</a> \u6784\u9020\u5668</h3><p>Object3D() \uFF1A \u6784\u9020\u5668\u4E2D\u4E0D\u5E26\u6709\u53C2\u6570\u3002</p><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u603B\u7269\u4F53\u5BF9\u8C61\u96C6\u5408</span>
<span class="token keyword">var</span> objectTotal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Object3D</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> material1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PointsMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">&quot;yellow&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> meshs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material1<span class="token punctuation">)</span><span class="token punctuation">;</span>
objectTotal<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>meshs<span class="token punctuation">)</span>
<span class="token comment">// scene.add(meshs);</span>
<span class="token comment">// \u5750\u6807\u8F74</span>
<span class="token keyword">var</span> axisHelper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>AxisHelper</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
objectTotal<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>axisHelper<span class="token punctuation">)</span>
<span class="token comment">// scene.add(axisHelper);</span>

scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>objectTotal<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5149\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5149\u6E90" aria-hidden="true">#</a> \u5149\u6E90</h2><p>\u4F5C\u4E3A3D\u4EFF\u771F\u6280\u672F\u6765\u8BF4\uFF0C\u5149\u6E90\u7684\u7167\u5C04\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\u3002\u5C31\u50CFunity3d\u4E2D\u4E00\u6837\uFF0C\u5149\u7EBF\u53EF\u4EE5\u4ECE\u4E0D\u540C\u89D2\u5EA6\u7167\u5C04\u8FC7\u6765\uFF0C\u8BA9\u7269\u4F53\u5448\u73B0\u5728\u76F8\u673A\u4E2D\u7684\u6548\u679C\u4E5F\u662F\u4E0D\u4E00\u6837\u3002\u4E00\u4E2A\u597D\u7684\u5149\u6E90\u80FD\u591F\u8BA9\u7269\u4F53\u6E32\u67D3\u51FA\u6765\u66F4\u52A0\u771F\u5B9E\u3002</p><h3 id="\u5149\u6E90\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5149\u6E90\u7C7B\u578B" aria-hidden="true">#</a> \u5149\u6E90\u7C7B\u578B</h3><table><thead><tr><th>\u5149\u6E90</th><th>\u7B80\u4ECB</th></tr></thead><tbody><tr><td>AmbientLight</td><td>\u73AF\u5883\u5149</td></tr><tr><td>PointLight</td><td>\u70B9\u5149\u6E90</td></tr><tr><td>DirectionalLight</td><td>\u5E73\u884C\u5149\uFF0C\u6BD4\u5982\u592A\u9633\u5149</td></tr><tr><td>SpotLight</td><td>\u805A\u5149\u6E90</td></tr></tbody></table><h3 id="\u5149\u6E90\u57FA\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5149\u6E90\u57FA\u7C7B" aria-hidden="true">#</a> \u5149\u6E90\u57FA\u7C7B</h3><p>\u5728Threejs\u4E2D\uFF0C\u5149\u6E90\u7528Light\u8868\u793A\uFF0C\u5B83\u662F\u6240\u6709\u5149\u6E90\u7684\u57FA\u7C7B\u3002\u5B83\u7684\u6784\u9020\u51FD\u6570\u662F\uFF1A</p><p>THREE.Light ( hex )</p><p>\u5B83\u6709\u4E00\u4E2A\u53C2\u6570hex\uFF0C\u63A5\u53D7\u4E00\u4E2A16\u8FDB\u5236\u7684\u989C\u8272\u503C\u3002\u4F8B\u5982\u8981\u5B9A\u4E49\u4E00\u79CD\u7EA2\u8272\u7684\u5149\u6E90\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u6765\u5B9A\u4E49\uFF1A</p><p>var redLight = new THREE.Light(0xFF0000);</p><h5 id="\u6CE8\u610F-\u6B64\u5904\u7ED8\u5236\u7269\u4F53\u65F6-\u4E0D\u80FD\u4F7F\u7528new-meshbasicmaterial-\u8BBE\u7F6E\u6750\u6599\u5C5E\u6027\u3002" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F-\u6B64\u5904\u7ED8\u5236\u7269\u4F53\u65F6-\u4E0D\u80FD\u4F7F\u7528new-meshbasicmaterial-\u8BBE\u7F6E\u6750\u6599\u5C5E\u6027\u3002" aria-hidden="true">#</a> \u6CE8\u610F\uFF1A\u6B64\u5904\u7ED8\u5236\u7269\u4F53\u65F6\uFF0C\u4E0D\u80FD\u4F7F\u7528new MeshBasicMaterial()\u8BBE\u7F6E\u6750\u6599\u5C5E\u6027\u3002</h5><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc4e5e5be6984499ac591380bcaab42e~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"><br> \u6B64\u5904\u53EF\u4EE5\u4F7F\u7528MeshLambertMaterial\u6765\u6DFB\u52A0\u7269\u4F53\u7684\u6750\u8D28<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88f0feb431a34958a655dd912b143a0d~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h3 id="\u5176\u4ED6\u5149\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u5149\u6E90" aria-hidden="true">#</a> \u5176\u4ED6\u5149\u6E90</h3><h4 id="\u73AF\u5883\u5149ambientlight" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u5149ambientlight" aria-hidden="true">#</a> \u73AF\u5883\u5149AmbientLight</h4><p>\u73AF\u5883\u5149\u662F\u7ECF\u8FC7\u591A\u6B21\u53CD\u5C04\u800C\u6765\u7684\u5149\u79F0\u4E3A\u73AF\u5883\u5149\uFF0C\u65E0\u6CD5\u786E\u5B9A\u5176\u6700\u521D\u7684\u65B9\u5411\u3002\u73AF\u5883\u5149\u662F\u4E00\u79CD\u65E0\u5904\u4E0D\u5728\u7684\u5149\u3002\u73AF\u5883\u5149\u6E90\u653E\u51FA\u7684\u5149\u7EBF\u88AB\u8BA4\u4E3A\u6765\u81EA\u4EFB\u4F55\u65B9\u5411\u3002\u56E0\u6B64\uFF0C\u5F53\u4F60\u4EC5\u4E3A\u573A\u666F\u6307\u5B9A\u73AF\u5883\u5149\u65F6\uFF0C\u6240\u6709\u7684\u7269\u4F53\u65E0\u8BBA\u6CD5\u5411\u91CF\u5982\u4F55\uFF0C\u90FD\u5C06\u8868\u73B0\u4E3A\u540C\u6837\u7684\u660E\u6697\u7A0B\u5EA6\u3002 \uFF08\u8FD9\u662F\u56E0\u4E3A\uFF0C\u53CD\u5C04\u5149\u53EF\u4EE5\u4ECE\u5404\u4E2A\u65B9\u5411\u8FDB\u5165\u60A8\u7684\u773C\u775B\uFF09</p><p>\u73AF\u5883\u5149\u7528THREE.AmbientLight\u6765\u8868\u793A\uFF0C\u5B83\u7684\u6784\u9020\u51FD\u6570\u5982\u4E0B\u6240\u793A\uFF1A</p><p>THREE.AmbientLight( \u989C\u8272 )</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var light = new THREE.AmbientLight( 0xff0000 );

scene.add( light );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\u5B50\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script src=&quot;js/three.js&quot;&gt;&lt;/script&gt;
	&lt;style type=&quot;text/css&quot;&gt;
		*{
			margin: 0;
			padding: 0;
		}
	&lt;/style&gt;
&lt;body&gt;
	&lt;div id=&quot;app&quot;&gt;
		
	&lt;/div&gt;
	
	&lt;script type=&quot;text/javascript&quot;&gt;
		var scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(105, window.innerWidth / window.innerHeight, 1, 1000);
		render = new THREE.WebGLRenderer({
			antialias: true
		});
		render.setPixelRatio(window.devicePixelRatio);
		render.setSize(window.innerWidth, window.innerHeight)
		/********************************************************/
		var app = document.getElementById(&quot;app&quot;);
		app.appendChild(render.domElement);
		
		var geometry = new THREE.BoxGeometry(10, 10, 10);
		var textureLoader = new THREE.TextureLoader();
		var texture = textureLoader.load(&#39;img/back.jpg&#39;); //\u52A0\u8F7D\u7EB9\u7406\u8D34\u56FE\uFF0C\u5C31\u662F\u7531\u56FE\u7247\u7EC4\u6210\u4E00\u4E2A\u7EB9\u7406
		var basicMaterial = new THREE.MeshLambertMaterial({
			map: texture //\u8BBE\u7F6E\u989C\u8272\u8D34\u56FE\u5C5E\u6027\u503C
		})
		var meshs = new THREE.Mesh(geometry, basicMaterial);
		scene.add(meshs);
		
		// \u5149\u6E90
		var ambient = new THREE.AmbientLight(&quot;white&quot;);
		scene.add(ambient);
		
		// \u76F8\u673A
		camera.position.set(20, 20, 40); //\u8BBE\u7F6E\u76F8\u673A\u4F4D\u7F6E
		camera.lookAt(new THREE.Vector3(0, 0, 0))
		
		/********************************************************/
		function animate(){
			meshs.rotation.y += 0.03;  //\u8F6C\u52A8
			render.render(scene, camera);
			window.requestAnimationFrame(animate);
		}
		animate();
	&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\uFF1A<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f3bbd6f620241449ef2a284d8a55e25~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p><br> #### \u70B9\u5149PointLight \u70B9\u5149\u6E90\uFF1A\u7531\u8FD9\u79CD\u5149\u6E90\u653E\u51FA\u7684\u5149\u7EBF\u6765\u81EA\u540C\u4E00\u70B9\uFF0C\u4E14\u65B9\u5411\u8F90\u5C04\u81EA\u56DB\u9762\u516B\u65B9\u3002\u4F8B\u5982\u8721\u70DB\u653E\u51FA\u7684\u5149\uFF0C\u8424\u706B\u866B\u653E\u51FA\u7684\u5149\u3002</p><p>\u70B9\u5149\u6E90\u7528PointLight\u6765\u8868\u793A\uFF0C\u5B83\u7684\u6784\u9020\u51FD\u6570\u5982\u4E0B\u6240\u793A\uFF1A</p><p>PointLight( color, intensity, distance )</p><ul><li>Color\uFF1A\u5149\u7684\u989C\u8272</li><li>Intensity\uFF1A\u5149\u7684\u5F3A\u5EA6\uFF0C\u9ED8\u8BA4\u662F1.0,\u5C31\u662F\u8BF4\u662F100%\u5F3A\u5EA6\u7684\u706F\u5149</li><li>distance\uFF1A\u5149\u7684\u8DDD\u79BB\uFF0C\u4ECE\u5149\u6E90\u6240\u5728\u7684\u4F4D\u7F6E\uFF0C\u7ECF\u8FC7distance\u8FD9\u6BB5\u8DDD\u79BB\u4E4B\u540E\uFF0C\u5149\u7684\u5F3A\u5EA6\u5C06\u4ECEIntensity\u8870\u51CF\u4E3A0\u3002 \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A\u503C\u4E3A0.0\uFF0C\u8868\u793A\u5149\u6E90\u5F3A\u5EA6\u4E0D\u8870\u51CF\u3002</li></ul><p>\u4F8B\u5B50\uFF1A \u5C06\u4E0A\u9762\u4F8B\u5B50\u4E2D\u73AF\u5883\u5149\u6E90\u8FDB\u884C\u66FF\u6362</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>			// \u5149\u6E90
			var point = new THREE.PointLight(&quot;white&quot;, 10, 100);
			point.position.set(40, 30, 30);
			scene.add(point);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\uFF1A</p><ul><li>\u5149\u6E90\u5F3A\u5EA6\u4E3A10<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ec7aba836744a8f8c64a5c6083a3dd7~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li><li>\u5149\u6E90\u5F3A\u5EA6\u4E3A5<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d32f850cad3241bbabbb2ba39fdaea8e~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li></ul><p>\\</p><h4 id="\u5E73\u884C\u5149directionallight" tabindex="-1"><a class="header-anchor" href="#\u5E73\u884C\u5149directionallight" aria-hidden="true">#</a> \u5E73\u884C\u5149DirectionalLight</h4><p>\u5E73\u884C\u5149\u662F\u6CBF\u7740\u7279\u5B9A\u65B9\u5411\u53D1\u5C04\u7684\u5149\u3002\u8FD9\u79CD\u5149\u7684\u8868\u73B0\u50CF\u662F\u65E0\u9650\u8FDC,\u4ECE\u5B83\u53D1\u51FA\u7684\u5149\u7EBF\u90FD\u662F\u5E73\u884C\u7684\u3002\u5E38\u5E38\u7528\u5E73\u884C\u5149\u6765\u6A21\u62DF\u592A\u9633\u5149 \u7684\u6548\u679C; \u592A\u9633\u8DB3\u591F\u8FDC\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u8BA4\u4E3A\u592A\u9633\u7684\u4F4D\u7F6E\u662F\u65E0\u9650\u8FDC\uFF0C\u6240\u4EE5\u6211\u4EEC\u8BA4\u4E3A\u4ECE\u592A\u9633\u53D1\u51FA\u7684\u5149\u7EBF\u4E5F\u90FD\u662F\u5E73\u884C\u7684</p><p>Three.js \u7684\u5E73\u884C\u5149\u5E38\u89C1\u7684\u56F0\u60D1\u662F\u8BBE\u7F6E\u65CB\u8F6C\u6CA1\u6709\u6548\u679C\u3002\u8FD9\u662F\u56E0\u4E3A three.js \u7684\u5E73\u884C\u5149\u7C7B\u4F3C\u4E0E\u5176\u4ED6\u5F15\u64CE\u7684&quot;\u76EE\u6807\u5E73\u884C\u5149&quot;<br> \u4F8B\u5B50\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5149\u6E90
var directionalLight = new THREE.DirectionalLight( 0xffffff, 5 );
directionalLight.position.set(1, 1, 1)  //\u65B9\u5411
scene.add(directionalLight);
			
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\uFF1A</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/718cf4e30fde435695848f2b8050953e~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h4 id="\u805A\u5149spotlight" tabindex="-1"><a class="header-anchor" href="#\u805A\u5149spotlight" aria-hidden="true">#</a> \u805A\u5149SpotLight</h4><p>\u805A\u5149\u706F\uFF1A\u8FD9\u79CD\u5149\u6E90\u7684\u5149\u7EBF\u4ECE\u4E00\u4E2A\u9525\u4F53\u4E2D\u5C04\u51FA\uFF0C\u5728\u88AB\u7167\u5C04\u7684\u7269\u4F53\u4E0A\u4EA7\u751F\u805A\u5149\u7684\u6548\u679C\u3002\u4F7F\u7528\u8FD9\u79CD\u5149\u6E90\u9700\u8981\u6307\u5B9A\u5149\u7684\u5C04\u51FA\u65B9\u5411\u4EE5\u53CA\u9525\u4F53\u7684\u9876\u89D2\u03B1</p><p>\u662F\u4ECE\u4E00\u4E2A\u65B9\u5411\u4E0A\u7684\u4E00\u4E2A\u70B9\u53D1\u51FA\uFF0C\u6CBF\u7740\u4E00\u4E2A\u5706\u9525\u4F53\uFF0C\u5B83\u79BB\u5149\u8D8A\u8FDC\uFF0C\u5B83\u7684\u5C3A\u5BF8\u5C31\u8D8A\u5927<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c3d8c28883042b5af79084cb3d8c728~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"><br> \u805A\u5149\u706F\u7684\u6784\u9020\u51FD\u6570\u662F\uFF1A</p><p>THREE.SpotLight( hex, intensity, distance, angle, exponent )</p><p>\u51FD\u6570\u7684\u53C2\u6570\u5982\u4E0B\u6240\u793A\uFF1A</p><ul><li>Hex\uFF1A\u805A\u5149\u706F\u53D1\u51FA\u7684\u989C\u8272\uFF0C\u59820xFFFFFF</li><li>Intensity\uFF1A\u5149\u6E90\u7684\u5F3A\u5EA6\uFF0C\u9ED8\u8BA4\u662F1.0\uFF0C\u5982\u679C\u4E3A0.5\uFF0C\u5219\u5F3A\u5EA6\u662F\u4E00\u534A\uFF0C\u610F\u601D\u662F\u989C\u8272\u4F1A\u6DE1\u4E00\u4E9B\u3002\u548C\u4E0A\u9762\u70B9\u5149\u6E90\u4E00\u6837\u3002</li><li>Distance\uFF1A\u5149\u7EBF\u7684\u5F3A\u5EA6\uFF0C\u4ECE\u6700\u5927\u503C\u8870\u51CF\u52300\uFF0C\u9700\u8981\u7684\u8DDD\u79BB\u3002 \u9ED8\u8BA4\u4E3A0\uFF0C\u8868\u793A\u5149\u4E0D\u8870\u51CF\uFF0C\u5982\u679C\u975E0\uFF0C\u5219\u8868\u793A\u4ECE\u5149\u6E90\u7684\u4F4D\u7F6E\u5230Distance\u7684\u8DDD\u79BB\uFF0C\u5149\u90FD\u5728\u7EBF\u6027\u8870\u51CF\u3002\u5230\u79BB\u5149\u6E90\u8DDD\u79BBDistance\u65F6\uFF0C\u5149\u6E90\u5F3A\u5EA6\u4E3A0.</li><li>Angle\uFF1A\u805A\u5149\u706F\u7740\u8272\u7684\u89D2\u5EA6\uFF0C\u7528\u5F27\u5EA6\u4F5C\u4E3A\u5355\u4F4D\uFF0C\u8FD9\u4E2A\u89D2\u5EA6\u662F\u548C\u5149\u6E90\u7684\u65B9\u5411\u5F62\u6210\u7684\u89D2\u5EA6\u3002</li><li>exponent\uFF1A\u5149\u6E90\u6A21\u578B\u4E2D\uFF0C\u8870\u51CF\u7684\u4E00\u4E2A\u53C2\u6570\uFF0C\u8D8A\u5927\u8870\u51CF\u7EA6\u5FEB\u3002</li></ul><p>\u4F8B\u5B50\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5149\u6E90
var spotLight = new THREE.SpotLight( &quot;#fff&quot;, 10, 100, 0.1, 0.8 )
spotLight.position.set(30,30,30)
scene.add(spotLight);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\uFF1A<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ac417a5245248978b88f5a795cd986a~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p>`,53),p=[i];function c(l,o){return s(),a("div",null,p)}var r=n(e,[["render",c],["__file","Three.js\u6742\u8BB05.html.vue"]]);export{r as default};
