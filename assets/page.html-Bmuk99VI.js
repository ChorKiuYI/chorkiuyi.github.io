import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as s,c as l,a as e,F as g,f as m,b as o,u as h,d as f,n as k,g as y,e as v,t as _,h as b,i as w,j as t}from"./app-qKmLr34n.js";const P=v(`<p>Content before <code>more</code> comment is regarded as page excerpt.</p><h2 id="page-title" tabindex="-1"><a class="header-anchor" href="#page-title"><span>Page Title</span></a></h2><p>The first H1 title in Markdown will be regarded as page title.</p><p>You can also set title in Markdown&#39;s Frontmatter:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> Page Title</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="page-information" tabindex="-1"><a class="header-anchor" href="#page-information"><span>Page Information</span></a></h2><p>You can set page information in Markdown&#39;s Frontmatter.</p><ul><li>The author is Ms.Hope.</li><li>The writing date is January 1, 2020</li><li>Category is &quot;Guide&quot;</li><li>Tags are &quot;Page Config&quot; and &quot;Guide&quot;</li></ul><h2 id="page-content" tabindex="-1"><a class="header-anchor" href="#page-content"><span>Page Content</span></a></h2><p>You are free to write your Markdown here.</p><div class="hint-container tip"><p class="hint-container-title">Assets</p><ul><li>You can place images besides your Markdown files nd use <strong>relative links</strong>.</li><li>For images in <code>.vuepress/public</code> directory, please use absolute links (i.e.: starting with <code>/</code>).</li></ul></div><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components"><span>Components</span></a></h2><p>Each markdown page is converted into a Vue component, which means you can use Vue syntax in Markdown:</p><p>2</p>`,14),C=e("p",null,"You can also create and import your own components.",-1),x=e("hr",null,null,-1),M=e("p",null,"The theme contains some useful components. Here are some examples:",-1),T=e("p",null,"A card:",-1),H={__name:"page.html",setup(F){const p=b({setup(){const a=w("Hello world!"),i=n=>{a.value=n.target.value};return()=>[t("p",[t("span","Input: "),t("input",{value:a.value,onInput:i})]),t("p",[t("span","Output: "),a.value])]}});return(a,i)=>{const n=r("Badge"),c=r("VPCard");return s(),l("div",null,[P,e("ul",null,[(s(),l(g,null,m(3,d=>e("li",null,_(d),1)),64))]),C,o(h(p)),x,M,e("ul",null,[e("li",null,[e("p",null,[f("A dark blue badge text badge at the end of line. "),o(n,{text:"Badge text",color:"#242378"})])]),e("li",null,[T,o(c,k(y({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",background:"rgba(253, 230, 138, 0.15)"})),null,16)])])])}}},q=u(H,[["__file","page.html.vue"]]),B=JSON.parse(`{"path":"/demo1/page.html","title":"Page Config","lang":"en-US","frontmatter":{"title":"Page Config","icon":"file","order":3,"author":"Ms.Hope","date":"2020-01-01T00:00:00.000Z","category":["Guide"],"tag":["Page config","Guide"],"sticky":true,"star":true,"footer":"Footer content for test","copyright":"No Copyright","description":"Content before more comment is regarded as page excerpt. Page Title The first H1 title in Markdown will be regarded as page title. You can also set title in Markdown's Frontmatt...","head":[["meta",{"property":"og:url","content":"https://your.domain/demo1/page.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:title","content":"Page Config"}],["meta",{"property":"og:description","content":"Content before more comment is regarded as page excerpt. Page Title The first H1 title in Markdown will be regarded as page title. You can also set title in Markdown's Frontmatt..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Ms.Hope"}],["meta",{"property":"article:tag","content":"Page config"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Page Config\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ms.Hope\\"}]}"]]},"headers":[{"level":2,"title":"Page Title","slug":"page-title","link":"#page-title","children":[]},{"level":2,"title":"Page Information","slug":"page-information","link":"#page-information","children":[]},{"level":2,"title":"Page Content","slug":"page-content","link":"#page-content","children":[]},{"level":2,"title":"Components","slug":"components","link":"#components","children":[]}],"git":{},"readingTime":{"minutes":1.14,"words":341},"filePathRelative":"demo1/page.md","localizedDate":"January 1, 2020","autoDesc":true}`);export{q as comp,B as data};
