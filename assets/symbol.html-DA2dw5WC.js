import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-qKmLr34n.js";const e={},o=t(`<p>为什么会出现Symbol原始数据类型？ ES5 的对象属性名都是字符串，这容易造成属性名的冲突。 Symbol表示独一无二的值</p><p>复习一下？数据类型有哪些？（8） null undefined String Number Boolean Object Symbol BigInt</p><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h2><p>下面证明Symbol表示独一无二的</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s1 <span class="token comment">// Symbol()</span>
s2 <span class="token comment">// Symbol()</span>
s1 <span class="token operator">==</span> s2 <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般都建议加参数，如下面代码所示</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> s3 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;s3&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> s4 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;s4&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> s5 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;s4&#39;</span><span class="token punctuation">)</span>
s3 <span class="token comment">// Symbol(s3)</span>
s4 <span class="token comment">// Symbol(s4)</span>

s4<span class="token operator">==</span>s5 <span class="token comment">// false</span>
<span class="token comment">// 转为字符串</span>
s3<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Symbol(s3)&#39;</span>
s4<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Symbol(s4)&#39; </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="symbol-prototype-description" tabindex="-1"><a class="header-anchor" href="#symbol-prototype-description"><span>Symbol.prototype.description</span></a></h2><p>Symbol 值的实例属性description，直接返回 Symbol 值的描述</p><p>description比toString()方便，代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;symbol1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;symbol2&#39;</span><span class="token punctuation">)</span>

s1<span class="token punctuation">.</span>description <span class="token comment">// &#39;symbol1&#39;</span>
s2<span class="token punctuation">.</span>description <span class="token comment">// &#39;symbol2&#39;</span>
s1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Symbol(symbol1)&#39;</span>
s2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Symbol(symbol2)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作为属性名的symbol" tabindex="-1"><a class="header-anchor" href="#作为属性名的symbol"><span>作为属性名的Symbol</span></a></h2><p>只要 Symbol 值作为标识符，用于对象的属性名，就能保证不会出现同名的属性。对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 作为属性名的Symbol</span>
<span class="token keyword">let</span> symName <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
obj<span class="token punctuation">[</span>symName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;helloSymbol&#39;</span>
<span class="token comment">// 或者</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>symName<span class="token punctuation">]</span><span class="token operator">:</span><span class="token string">&#39;helloSymbol&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 或者</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>symName<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token string">&#39;helloSymbol&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

obj<span class="token punctuation">[</span>symName<span class="token punctuation">]</span> <span class="token comment">// &#39;helloSymbol&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性名的遍历" tabindex="-1"><a class="header-anchor" href="#属性名的遍历"><span>属性名的遍历</span></a></h2><p><code>Object.getOwnPropertySymbols()</code>方法，可以获取当前对象的<strong>所有</strong>用作<strong>属性名的 Symbol 值</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;s1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;s2&#39;</span><span class="token punctuation">)</span>
obj<span class="token punctuation">[</span>s1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;symbol1&#39;</span>
obj<span class="token punctuation">[</span>s2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;symbol2&#39;</span>

Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// [Symbol(s1), Symbol(s2)]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),p=[o];function l(c,i){return s(),a("div",null,p)}const m=n(e,[["render",l],["__file","symbol.html.vue"]]),d=JSON.parse('{"path":"/zh/es6/symbol.html","title":"8. Symbol","lang":"zh-CN","frontmatter":{"title":"8. Symbol","icon":"object-group","order":8,"category":["Guide"],"tag":["Symbol"],"description":"为什么会出现Symbol原始数据类型？ ES5 的对象属性名都是字符串，这容易造成属性名的冲突。 Symbol表示独一无二的值 复习一下？数据类型有哪些？（8） null undefined String Number Boolean Object Symbol BigInt 基础 下面证明Symbol表示独一无二的 一般都建议加参数，如下面代码所示 ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://your.domain/es6/symbol.html"}],["meta",{"property":"og:url","content":"https://your.domain/zh/es6/symbol.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"8. Symbol"}],["meta",{"property":"og:description","content":"为什么会出现Symbol原始数据类型？ ES5 的对象属性名都是字符串，这容易造成属性名的冲突。 Symbol表示独一无二的值 复习一下？数据类型有哪些？（8） null undefined String Number Boolean Object Symbol BigInt 基础 下面证明Symbol表示独一无二的 一般都建议加参数，如下面代码所示 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:author","content":"ChorKiu"}],["meta",{"property":"article:tag","content":"Symbol"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8. Symbol\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ChorKiu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":2,"title":"Symbol.prototype.description","slug":"symbol-prototype-description","link":"#symbol-prototype-description","children":[]},{"level":2,"title":"作为属性名的Symbol","slug":"作为属性名的symbol","link":"#作为属性名的symbol","children":[]},{"level":2,"title":"属性名的遍历","slug":"属性名的遍历","link":"#属性名的遍历","children":[]}],"git":{},"readingTime":{"minutes":1.25,"words":375},"filePathRelative":"zh/es6/symbol.md","autoDesc":true}');export{m as comp,d as data};
