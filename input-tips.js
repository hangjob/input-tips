;(function($){

    //构造私有方法
    var privateFun = function(){

    };
    var inputTips = (function(){
        //构造inputTips 函数
        var inputTips = function(element,options){
            //this 对象
            this.element = element;
            //合并参数
            this.options = $.extend(true,$.fn.inputTips.default,options||{});
            //初始化函数
            this.init();
        };
        //构造inputTips原型--扩展功能函数
        inputTips.prototype = {
            init:function(){
                this.selectors = this.element;
                this.inputstrike = $(this.options.inputstrike);
                // this.emailArr = this.options.emailArr;
                this.listLi = '';//li的dom
                this.lenLi = '';//li的长度
                this.index = '';//当前下标
                this.html = '';//插入html
                this.arr = [];//创建新的数组
                this.inputChange();
                this.mouseover();
                this.mouseout();
                this.mouseup();
                //开启键盘事件
                if(this.options.keydown){
                    this.keydownDoc();
                }
            },
            //input触发事件
            inputChange:function(){
               var _this = this;
               _this.inputstrike.bind('change paste keyup',function(event){
                   _this.selectors.css('display','block');
                   var inuputText = _this.inputstrike.val();//获取输入值
                   if(inuputText){
                       //在这里切割字符串---否则直接按下enter有bug
                       inuputText = inuputText.split('@')[0];
                   }
                   var emailArr = _this.options.emailArr;//获取邮件种类数组

                   if(event.keyCode!=37 && event.keyCode!=38 && event.keyCode!=39 && event.keyCode!=40 && event.keyCode!=13 ){
                       _this.arr = [];
                       _this.html = '';
                       for(var i in emailArr){
                           _this.arr.push(inuputText + emailArr[i]);
                       };
                       for(var n in _this.arr){
                           _this.html += '<li>'+_this.arr[n]+'</li>';
                       };
                       _this.selectors.find('ul').empty();//清空之前插入的数据
                       _this.selectors.find('ul').append(_this.html);

                       //解决异步出现dom找不到
                       _this.listLi =  _this.selectors.find('li');
                       _this.lenLi = _this.listLi.length;
                   }
               })
            },
            //键盘事件
            keydownDoc:function(){
                var _this = this;
                $(document).bind('keyup',function(event){
                    if(_this.listLi===''){
                        return false;
                    }
                    //enter和方向键
                    _this.listLi.each(function(i,item){
                        if($(item).hasClass('active')){
                            _this.index = i;
                        }
                    });
                    if(event.keyCode==38){
                        //向上
                        if( _this.index <= _this.lenLi && _this.index != 0 ){
                            _this.index = parseInt(_this.index-1);
                            _this.listLi.removeClass('active').eq(_this.index).addClass('active');
                        }
                    }else if(event.keyCode==40){
                        //向下
                        if( _this.index <= _this.lenLi && (_this.lenLi-1) > _this.index ) {
                            _this.index = parseInt(_this.index+1);
                            _this.listLi.removeClass('active').eq(_this.index).addClass('active');
                        }
                    }else if(event.keyCode==13){
                        var text = _this.listLi.eq(_this.index).text();
                        _this.inputstrike.val(text);
                        _this.selectors.css('display','none');
                    }
                })
            },
            mouseover:function(){
                var _this = this;
                _this.selectors.find('li').livequery('mouseover',function(){
                    //鼠标移入
                    _this.index =  $(this).index();
                    $(this).addClass('active');
                });
            },
            mouseout:function(){
                var _this = this;
                _this.selectors.find('li').livequery('mouseout',function(){
                    //鼠标移开
                    _this.index =  $(this).index();
                    $(this).removeClass('active');
                });
            },
            click:function(){
                var _this = this;
                _this.selectors.find('li').livequery('click',function(){
                    //确认
                    var text = $(this).text();
                    $(this).addClass('active').siblings('li').removeClass('active');
                    _this.inputstrike.val(text);
                    _this.selectors.css('display','none');
                });
            },
            mouseup:function(){
                var _this = this;
                _this.selectors.find('li').livequery('mouseup',function(){
                    //确认
                    var text = $(this).text();
                    $(this).addClass('active').siblings('li').removeClass('active');
                    _this.inputstrike.val(text);
                    _this.selectors.css('display','none');
                })
            }
        };
        //返回构造函数就等于 function(element,options){}
        return inputTips;
    })();

    //扩展jq 插件 inputTips
    //$.fn === jQuery.fn === jQuery.prototype  挂载到原型上
    $.fn.inputTips = function(options){
        this.each(function(){
            //采用单列模式，储层在data中，这样不用每次去new，
            //jquery的单例模式就是说，首先判断对象有没有当前实例，没有再添加，需要用到jquery的data（）方法 ，此模式对于给对象添加方法比较管用，起到省资源的作用
            var me = $(this),
                instance = me.data('inputTips');
            //me 就是指向当前的调用着
            
            if(!instance){
                instance = me.data('inputTips',(new inputTips(me,options)));
            }
            //从外面调用函数单个函数
            if($.type(options)==='string') return instance[options]();
        })
        return this;
    }

    //配置inputTips默认参数
    $.fn.inputTips.default = {
        selectors:'.inputTips',//下拉菜单包裹的div
        inputstrike:'.email',//触发input的输入框
        emailArr:['@sina.com','@qq.com','@163.com','@126.com','@gmail.com','@139.com','@yahoo.com'],
        keydown:true,//是否开开启键盘
    }

})(jQuery)
