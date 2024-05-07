import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,e as t}from"./app-qKmLr34n.js";const a={},o=t(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// ES6模块</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> stat<span class="token punctuation">,</span> exists<span class="token punctuation">,</span> readFile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// export-default.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="export和import" tabindex="-1"><a class="header-anchor" href="#export和import"><span>export和import</span></a></h2><ul><li>export命令用于规定模块的对外接口【export default】</li><li>import命令用于输入其他模块提供的功能。</li></ul><h2 id="es6和commonjs的区别" tabindex="-1"><a class="header-anchor" href="#es6和commonjs的区别"><span>ES6和CommonJS的区别</span></a></h2><ul><li>CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。</li><li>CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。</li><li>CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段 CommonJS 模块使用require()和module.exports，ES6 模块使用import和export</li></ul>`,6),p=[o];function i(l,r){return e(),s("div",null,p)}const u=n(a,[["render",i],["__file","module.html.vue"]]),d=JSON.parse('{"path":"/base/es6/module.html","title":"12. module模块","lang":"en-US","frontmatter":{"title":"12. module模块","icon":"object-group","order":12,"category":["Guide"],"tag":["module模块"],"description":"介绍 export和import export命令用于规定模块的对外接口【export default】 import命令用于输入其他模块提供的功能。 ES6和CommonJS的区别 CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。 CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。 CommonJS 模块的r...","head":[["meta",{"property":"og:url","content":"https://your.domain/base/es6/module.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:title","content":"12. module模块"}],["meta",{"property":"og:description","content":"介绍 export和import export命令用于规定模块的对外接口【export default】 import命令用于输入其他模块提供的功能。 ES6和CommonJS的区别 CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。 CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。 CommonJS 模块的r..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"ChorKiu"}],["meta",{"property":"article:tag","content":"module模块"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"12. module模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ChorKiu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"export和import","slug":"export和import","link":"#export和import","children":[]},{"level":2,"title":"ES6和CommonJS的区别","slug":"es6和commonjs的区别","link":"#es6和commonjs的区别","children":[]}],"git":{},"readingTime":{"minutes":0.62,"words":185},"filePathRelative":"base/es6/module.md","autoDesc":true}');export{u as comp,d as data};
