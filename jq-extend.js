
//用于扩展jQuery本身,然后就可以用$.的方式调用。将Dialog扩展到 $下，在控制打印this 下的$即可找到Dialog
//jQuery.extend() 的调用并不会把方法扩展到对象的实例上，引用它的方法也需要通过jQuery类来实现，如jQuery.init()

;(function($){
    $.extend({
        Dialog:function () {
            var css = {
                'padding':'20px 100px',
                'text-align': 'center',
                'border-radius': '5px',
                'background-color':'red'
            };
            var $div  = $('<div></div>').text('向body插入一个弹窗，并在1秒后消失').css(css);
            $('body').append($div);
            //注意jq对象，如果是原生需要用$()包裹，才能用jq提供的属性和方法
            setTimeout(function(){
                $div .fadeOut()
            },1000)
        }
    })
})(jQuery)

//我们平常写法,如$.ajax $.each ,从源码开出 $ 实际已经调用了jQuery.fn.init===jQuery.init()。
var openDialog = function(){
    $.Dialog()
 }