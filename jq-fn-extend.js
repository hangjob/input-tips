//用于扩展jQuery对象,然后就可以用$.的方式调用。将DialogFn扩展到 $.prototype下（因为$.fn===$.fn.prototype），在控制打印this 下 $ 下 prototype即可找到
//jQuery.fn.extend = jQuery.prototype.extend

;(function($){
    $.fn.extend({
        DialogFn:function () {
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
            //这里的 this 指向当前点击对象,返回后才可链式调用
           return this;
        }
    })
})(jQuery)

//jQuery.fn.extend()的调用把方法扩展到了对象的prototype,所以实例化一个jQuery对象 $() 的时候，它下面就具有了这些方法
var openDialogFn = function(){
    $('#btn3').DialogFn()
}
