# inputTips
采用jquery开发多种形式的一个输入提示插件

#JQuery过时了吗
我也是从jquery年代过来的，那时2015年，是一个jquery繁华的年代，vue还没有开始流行，只听的到react和angular的声音，项目基本全是jquery，我想说的是，jquery给我了操作dom的兴趣，在兴趣的驱动下,写一个免费的东西，有欣喜，也还有汗水。它并没有过时，只是顺应了时代的产物，留下了经典的开发思想，都是值得我们学习的地方。用更少的代码，做更多的事情。
#dom
``` html
<input type="text" name="email" placeholder="请输入邮箱"/>
<div class="email-select">
    <ul></ul>
</div>
```
``` js
$(".email-select").inputTips({
    selectors:$('.email-select'),//显示邮箱列表元素
    inputstrike:$('input'),//触发事件的输入框
});
```