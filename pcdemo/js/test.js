/**
 * Created by T148 on 2016/11/11.
 */
;(function($,window, document,undefined){
    //定义Beautifier的构造函数
    var Beautifier=function(ele,opt){
        this.$element=ele,
        this.defaults={
            'color':'red',
            'fontSize':'12px',
            'textDecoration':'none'
        },
        this.options = $.extend({}, this.defaults, opt)
    }
    //定义Beautifier的方法  -->类方法
    Beautifier.prototype ={
        beautify:function(){
            //对象方法
            return this.$element.css({
                'color':this.options.color,
                'fontSize':this.options.fontSize,
                'textDecoration':this.options.textDecoration
            });
        }
    }
    //在插件中使用Beautifier对象
    $.fn.myPlugin=function(options){
        console.log("*********")
        //创建Beautifier的实体
        var beautifier=new Beautifier(this,options);
        //调用起方法
        return beautifier.beautify();
    };
})(jQuery,window,document)
