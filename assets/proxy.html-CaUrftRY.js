import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,e as a}from"./app-qKmLr34n.js";const s={},o=a(`<h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy"><span>Proxy</span></a></h2><p>Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。</p><p>new Proxy ( target , handler )</p><ul><li>target 目标对象（可以是任何对象，包括数组、函数等）</li><li>一个拦截器对象handler（一个对象，支持一些方法，这些方法用来定义在访问代理对象时所进行的操作）</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> propKey<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">getting </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>propKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propKey<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> propKey<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">setting </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>propKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propKey<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// setting count!</span>
obj<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token comment">// getting count!</span>
<span class="token comment">// setting count!</span>
obj<span class="token punctuation">.</span>count<span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token comment">// getting count!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reflect" tabindex="-1"><a class="header-anchor" href="#reflect"><span>Reflect</span></a></h2><p>Reflect对象设计目的</p><ol><li>将<code>Object</code>对象的一些明显属于语言内部的方法（比如<code>Object.defineProperty</code>），放到<code>Reflect对象</code>上。现阶段，某些方法同时在<code>Object</code>和<code>Reflect对象</code>上部署，未来的新方法将只部署在<code>Reflect对象</code>上。也就是说，从<code>Reflect对象</code>上可以拿到语言内部的方法。</li><li>修改某些<code>Object方法</code>的返回结果，让其变得更合理。比如，<code>Object.defineProperty(obj, name, desc)</code>在无法定义属性时，会抛出一个错误，而<code>Reflect.defineProperty(obj, name, desc)</code>则会返回<code>false</code>。</li><li>让<code>Object</code>操作都变成函数行为。某些<code>Object</code>操作是命令式，比如<code>name in obj</code>和<code>delete obj[name]</code>，而<code>Reflect.has(obj, name)</code>和<code>Reflect.deleteProperty(obj, name)</code>让它们变成了函数行为。</li><li><code>Reflect对象</code>的方法与<code>Proxy对象</code>的方法一一对应，只要是<code>Proxy对象</code>的方法，就能在<code>Reflect对象</code>上找到对应的方法。这就让<code>Proxy对象</code>可以方便地调用对应的<code>Reflect方法</code>，完成默认行为，作为修改行为的基础。也就是说，不管<code>Proxy</code>怎么修改默认行为，你总可以在<code>Reflect</code>上获取默认行为。</li></ol><h3 id="reflect的静态方法" tabindex="-1"><a class="header-anchor" href="#reflect的静态方法"><span>Reflect的静态方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th><th>-</th></tr></thead><tbody><tr><td>Reflect.get(target, name, receiver)</td><td>查找并返回target对象的name属性，如果没有该属性，则返回undefined</td><td></td></tr><tr><td>Reflect.set(target, name, value, receiver)</td><td>设置target对象的name属性等于value</td><td></td></tr><tr><td>Reflect.has(target, name)</td><td>对应name in obj里面的in运算符</td><td></td></tr><tr><td>Reflect.deleteProperty(target, name)</td><td>等同于delete obj[name]，用于删除对象的属性</td><td></td></tr><tr><td>Reflect.construct(target, args)</td><td>等同于new target(...args)，这提供了一种不使用new，来调用构造函数的方法</td><td></td></tr><tr><td>Reflect.getPrototypeOf(target)</td><td>用于读取对象的__proto__属性，对应Object.getPrototypeOf(obj)</td><td></td></tr><tr><td>Reflect.setPrototypeOf(target, prototype)</td><td>用于设置目标对象的原型（prototype），对应Object.setPrototypeOf(obj, newProto)方法。它返回一个布尔值，表示是否设置成功。</td><td></td></tr><tr><td>Reflect.apply(target, thisArg, args)</td><td>等同于Function.prototype.apply.call(func, thisArg, args)，用于绑定this对象后执行给定函数</td><td></td></tr><tr><td>Reflect.defineProperty(target, name, desc)</td><td>等同于Object.defineProperty，用来为对象定义属性</td><td></td></tr><tr><td>Reflect.getOwnPropertyDescriptor(target, name)</td><td>等同于Object.getOwnPropertyDescriptor，用于得到指定属性的描述对象，将来会替代掉后者</td><td></td></tr><tr><td>Reflect.isExtensible(target)</td><td>对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展</td><td></td></tr><tr><td>Reflect.preventExtensions(target)</td><td>对应Object.preventExtensions方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功</td><td></td></tr><tr><td>Reflect.ownKeys(target)</td><td>用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和</td><td></td></tr></tbody></table><h2 id="proxy对象代理和object-defineproperty" tabindex="-1"><a class="header-anchor" href="#proxy对象代理和object-defineproperty"><span>Proxy对象代理和Object.defineProperty</span></a></h2><ul><li>Object.defineProperty，是vue2中双向数据绑定的原理，它是JavaScript中一个强大且常用的方法，用于定义对象属性，允许我们精确地控制属性的行为，包括读取、写入和删除等操作；</li><li>Proxy是vue3中双向数据绑定的原理，是ES6中一种用于创建代理对象的特殊对象，它允许我们拦截并自定义目标对象的操作，例如属性访问、赋值、函数调用等。Proxy提供了一种机制，可以在目标对象上设置拦截器，从而拦截对目标对象的操作。</li></ul><h3 id="object-defineproperty缺点" tabindex="-1"><a class="header-anchor" href="#object-defineproperty缺点"><span>Object.defineProperty缺点：</span></a></h3><ol><li>不能监听数组的变化</li></ol><blockquote><p>无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应</p></blockquote><ol start="2"><li>必须遍历对象的每个属性</li></ol><blockquote><p>只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历。 如果属性值是对象，还需要深度遍历。Proxy 可以劫持整个对象，并返回一个新的对象</p></blockquote><ol start="3"><li>必须深层遍历嵌套的对象</li></ol><h3 id="proxy代理优点" tabindex="-1"><a class="header-anchor" href="#proxy代理优点"><span>Proxy代理优点：</span></a></h3><ol><li>支持数组</li></ol><blockquote><p>针对整个对象，而不是对象的某个属性 ，所以也就不需要对 keys 进行遍历</p></blockquote><ol start="2"><li>支持数组</li></ol><blockquote><p>Proxy 不需要对数组的方法进行重载，省去了众多 hack，减少代码量等于减少了维护成本，而且标准的就是最好的</p></blockquote><ol start="3"><li>Proxy的第二个参数可以有 13 种拦截方法</li></ol><blockquote><p>不限于apply、ownKeys、deleteProperty、has等等，是Object.defineProperty不具备的</p></blockquote><ol start="4"><li>Proxy返回的是一个新对象</li></ol><blockquote><p>我们可以只操作新的对象达到目的。而Object.defineProperty只能遍历对象属性直接修改</p></blockquote><ol start="5"><li>Proxy作为新标准将受到浏览器厂商重点持续的性能优化</li></ol><blockquote><p>也就是传说中的新标准的性能红利</p></blockquote>`,29),p=[o];function c(r,l){return e(),n("div",null,p)}const u=t(s,[["render",c],["__file","proxy.html.vue"]]),k=JSON.parse('{"path":"/base/es6/proxy.html","title":"10. Proxy","lang":"en-US","frontmatter":{"title":"10. Proxy","icon":"object-group","order":10,"category":["Guide"],"tag":["Proxy"],"description":"Proxy Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。 new Proxy ( target , handler ) target 目标对象（可以是任何对象，...","head":[["meta",{"property":"og:url","content":"https://your.domain/base/es6/proxy.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:title","content":"10. Proxy"}],["meta",{"property":"og:description","content":"Proxy Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。 new Proxy ( target , handler ) target 目标对象（可以是任何对象，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"ChorKiu"}],["meta",{"property":"article:tag","content":"Proxy"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10. Proxy\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ChorKiu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Proxy","slug":"proxy","link":"#proxy","children":[]},{"level":2,"title":"Reflect","slug":"reflect","link":"#reflect","children":[{"level":3,"title":"Reflect的静态方法","slug":"reflect的静态方法","link":"#reflect的静态方法","children":[]}]},{"level":2,"title":"Proxy对象代理和Object.defineProperty","slug":"proxy对象代理和object-defineproperty","link":"#proxy对象代理和object-defineproperty","children":[{"level":3,"title":"Object.defineProperty缺点：","slug":"object-defineproperty缺点","link":"#object-defineproperty缺点","children":[]},{"level":3,"title":"Proxy代理优点：","slug":"proxy代理优点","link":"#proxy代理优点","children":[]}]}],"git":{},"readingTime":{"minutes":4.41,"words":1322},"filePathRelative":"base/es6/proxy.md","autoDesc":true}');export{u as comp,k as data};
