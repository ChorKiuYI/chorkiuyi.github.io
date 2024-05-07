import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-qKmLr34n.js";const p={},o=t(`<ul><li>数组</li><li>对象</li><li>字符串</li><li>数值和布尔值</li><li>函数参数</li><li>圆括号</li></ul><h2 id="一、数组解构赋值" tabindex="-1"><a class="header-anchor" href="#一、数组解构赋值"><span>一、数组解构赋值</span></a></h2><h3 id="_1、基本用法-直接赋值" tabindex="-1"><a class="header-anchor" href="#_1、基本用法-直接赋值"><span>1、基本用法（直接赋值）</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>


<span class="token keyword">let</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token operator">...</span>z<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;z&#39;</span><span class="token punctuation">,</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// []</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、默认赋值" tabindex="-1"><a class="header-anchor" href="#_2、默认赋值"><span>2、默认赋值</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">[</span>name <span class="token operator">=</span> <span class="token string">&#39;小明&#39;</span><span class="token punctuation">,</span>age<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 小明</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">[</span>name <span class="token operator">=</span> <span class="token string">&#39;小明&#39;</span><span class="token punctuation">,</span>age<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;小红&#39;</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 小红</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、对象解构赋值" tabindex="-1"><a class="header-anchor" href="#二、对象解构赋值"><span>二、对象解构赋值</span></a></h2><h3 id="基本用法-直接赋值" tabindex="-1"><a class="header-anchor" href="#基本用法-直接赋值"><span>基本用法（直接赋值）</span></a></h3><ul><li>数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span>a<span class="token punctuation">,</span>b<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token string">&#39;bb&#39;</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// aa</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bb</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。</li><li>foo是匹配的模式，boo1才是变量。真正被赋值的是变量boo1，而不是模式foo</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> foo1<span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> bar1 <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;aaa&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&#39;bbb&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//foo is not defined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo1&#39;</span><span class="token punctuation">,</span>foo1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// aaa</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bar is not defined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar1&#39;</span><span class="token punctuation">,</span>bar1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bbb</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Object.setPrototypeOf()</code> 静态方法可以将一个指定对象的原型(即内部的 [[Prototype]] 属性)设置为另一个对象或者 null</p><p>Object.setPrototypeOf(obj, proto);</p><ul><li>obj：要设置原型对象的对象。</li><li>proto：该对象的新原型对象或null，否则抛出TypeError异常。</li><li>返回值:设置了新的原型对象的对象。</li></ul><p>对象<code>obj1</code>的原型对象是<code>obj2</code>。<code>foo</code>属性不是<code>obj1</code>自身的属性，而是继承自<code>obj2</code>的属性，解构赋值可以取到这个属性。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token operator">=</span> obj1<span class="token punctuation">;</span>
foo <span class="token comment">// &quot;bar&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认值赋值" tabindex="-1"><a class="header-anchor" href="#默认值赋值"><span>默认值赋值</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>name<span class="token operator">=</span><span class="token string">&#39;小红&#39;</span><span class="token punctuation">,</span>age<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token string">&#39;13&#39;</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//小红</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 13</span>


<span class="token keyword">const</span> <span class="token punctuation">{</span>name1<span class="token operator">=</span><span class="token string">&#39;小红&#39;</span><span class="token punctuation">,</span>age1<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name1</span><span class="token operator">:</span><span class="token string">&#39;小明&#39;</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;name1&#39;</span><span class="token punctuation">,</span>name1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 小明</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;age1&#39;</span><span class="token punctuation">,</span>age1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串解构赋值" tabindex="-1"><a class="header-anchor" href="#字符串解构赋值"><span>字符串解构赋值</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">,</span>e<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解构赋值的作用" tabindex="-1"><a class="header-anchor" href="#解构赋值的作用"><span><strong>解构赋值的作用</strong></span></a></h2><ol><li>交换变量的值</li><li>从函数返回多个值</li><li>函数参数的定义</li><li>提取 JSON 数据</li><li>函数参数的默认值</li><li>遍历 Map 结构</li><li>輸入模块的指定方法</li></ol><h3 id="_1-交换变量的值" tabindex="-1"><a class="header-anchor" href="#_1-交换变量的值"><span>1. 交换变量的值</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>x<span class="token punctuation">,</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-从函数返回多个值" tabindex="-1"><a class="header-anchor" href="#_2-从函数返回多个值"><span>2. 从函数返回多个值</span></a></h3><p>函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">exmaple</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">exmaple</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>

<span class="token keyword">function</span> <span class="token function">exmaple1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;小红&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">13</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>age<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">exmaple1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 小红</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-函数参数的定义" tabindex="-1"><a class="header-anchor" href="#_3-函数参数的定义"><span>3. 函数参数的定义</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 参数是一组有次序的值</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 参数是一组无次序的值</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>提取 JSON 数据</li><li>函数参数的默认值</li><li>遍历 Map 结构</li><li>輸入模块的指定方法</li></ol>`,32),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","Destructuring.html.vue"]]),d=JSON.parse('{"path":"/base/es6/Destructuring.html","title":"2. 变量解构赋值","lang":"en-US","frontmatter":{"title":"2. 变量解构赋值","icon":"object-group","order":2,"category":["Guide"],"tag":["变量解构赋值"],"description":"数组 对象 字符串 数值和布尔值 函数参数 圆括号 一、数组解构赋值 1、基本用法（直接赋值） 2、默认赋值 二、对象解构赋值 基本用法（直接赋值） 数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是...","head":[["meta",{"property":"og:url","content":"https://your.domain/base/es6/Destructuring.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:title","content":"2. 变量解构赋值"}],["meta",{"property":"og:description","content":"数组 对象 字符串 数值和布尔值 函数参数 圆括号 一、数组解构赋值 1、基本用法（直接赋值） 2、默认赋值 二、对象解构赋值 基本用法（直接赋值） 数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"ChorKiu"}],["meta",{"property":"article:tag","content":"变量解构赋值"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2. 变量解构赋值\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ChorKiu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"一、数组解构赋值","slug":"一、数组解构赋值","link":"#一、数组解构赋值","children":[{"level":3,"title":"1、基本用法（直接赋值）","slug":"_1、基本用法-直接赋值","link":"#_1、基本用法-直接赋值","children":[]},{"level":3,"title":"2、默认赋值","slug":"_2、默认赋值","link":"#_2、默认赋值","children":[]}]},{"level":2,"title":"二、对象解构赋值","slug":"二、对象解构赋值","link":"#二、对象解构赋值","children":[{"level":3,"title":"基本用法（直接赋值）","slug":"基本用法-直接赋值","link":"#基本用法-直接赋值","children":[]},{"level":3,"title":"默认值赋值","slug":"默认值赋值","link":"#默认值赋值","children":[]}]},{"level":2,"title":"字符串解构赋值","slug":"字符串解构赋值","link":"#字符串解构赋值","children":[]},{"level":2,"title":"解构赋值的作用","slug":"解构赋值的作用","link":"#解构赋值的作用","children":[{"level":3,"title":"1. 交换变量的值","slug":"_1-交换变量的值","link":"#_1-交换变量的值","children":[]},{"level":3,"title":"2. 从函数返回多个值","slug":"_2-从函数返回多个值","link":"#_2-从函数返回多个值","children":[]},{"level":3,"title":"3. 函数参数的定义","slug":"_3-函数参数的定义","link":"#_3-函数参数的定义","children":[]}]}],"git":{},"readingTime":{"minutes":2.81,"words":843},"filePathRelative":"base/es6/Destructuring.md","autoDesc":true}');export{r as comp,d as data};
