/**
 * Created by T148 on 2016/11/11.
 */
;(function($,window, document,undefined){
    //����Beautifier�Ĺ��캯��
    var Beautifier=function(ele,opt){
        this.$element=ele,
        this.defaults={
            'color':'red',
            'fontSize':'12px',
            'textDecoration':'none'
        },
        this.options = $.extend({}, this.defaults, opt)
    }
    //����Beautifier�ķ���  -->�෽��
    Beautifier.prototype ={
        beautify:function(){
            //���󷽷�
            return this.$element.css({
                'color':this.options.color,
                'fontSize':this.options.fontSize,
                'textDecoration':this.options.textDecoration
            });
        }
    }
    //�ڲ����ʹ��Beautifier����
    $.fn.myPlugin=function(options){
        console.log("*********")
        //����Beautifier��ʵ��
        var beautifier=new Beautifier(this,options);
        //�����𷽷�
        return beautifier.beautify();
    };
})(jQuery,window,document)
