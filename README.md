# inputTips
采用jquery开发多种形式的一个输入提示插件

# JQuery过时了吗
我也是从jquery年代过来的，那时2015年，是一个jquery繁华的年代，vue还没有开始流行，只听的到react和angular的声音，项目基本全是jquery，我想说的是，jquery给我了操作dom的兴趣，在兴趣的驱动下,写一个免费的东西，有欣喜，也还有汗水。它并没有过时，只是顺应了时代的产物，留下了经典的开发思想，都是值得我们学习的地方。用更少的代码，做更多的事情。

# dom-$.fn.prototype扩展
``` html
<input type="text" name="email" placeholder="请输入邮箱"/>
<div class="email-select">
    <ul></ul>
</div>
```

# init
``` js
$("#select1").inputTips({
    inputstrike:$('#input1'),//触发事件的输入框
});
```




# dom-$.extend扩展
``` html
<button onclick="openDialog()">点击测试</button>
```

# init
``` js
//我们平常写法,如$.ajax $.each ,从源码开出 $ 实际已经调用了jQuery.fn.init===jQuery.init()。
var openDialog = function(){
    $.Dialog()
}
```




# dom-$.fn.extend扩展
``` html
<button onclick="openDialogFn()">点击测试</button>
```

# init
``` js
//jQuery.fn.extend()的调用把方法扩展到了对象的prototype,所以实例化一个jQuery对象 $() 的时候，它下面就具有了这些方法
var openDialogFn = function(){
    $('#btn3').DialogFn()
}
```