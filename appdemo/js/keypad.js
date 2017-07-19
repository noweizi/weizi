/*
 * Created by suly on 2016/11/30. 纯数字安全键盘
 * data-val 0:空格键 1：带有小数点
 * data-maxlength 最大长度
 * data-minlength 最小长度
 * data-memo 提示值
 * data-maxmoney 最大金额
 * */
var app = {
    obj:0,
    //页面初始化
    init:function (isFocus) {
        var self = this;
        // 点击空白处 关闭数字键盘
        $(document).click(function(){
            $(".J_Clear").hide();
            self.isCursor();
            $("#J_kebox").hide();
        });
        // 点击输入框区域 阻止冒泡 阻止关闭数字键盘
        $('.kb-box').click(function(e){
            e.stopPropagation();
        });
        this.focus();
        this.keyClick();
        this.clearClick();
        if (isFocus){ //isFocus 为 “true”时，则默认聚焦 光标出现
            $(".half-part").eq(0).find(".J_InputClear").trigger("click");
        }
    },
    focus: function(){
        var self = this;
        $(".J_InputClear").click(function(){
            self.isCursor();
            /*光标处理*/
            $(this).addClass("defaults").removeClass("focus");
            if($(this).attr("data-memo") != $(this).html()){
                $(this).addClass("focus").removeClass("defaults");
                if($(this).html().length >= 1){
                    $(this).parent().find('.J_Clear').show();
                }
            }
            self.keyType($(this).attr("data-val"));
            app.obj = $(this);
            self.isClear($(this).html());
        });
    },
    keyType:function(type){
        if(type === '0'){ //空格键  &#12288;
            $(".keypoint").html("&nbsp;");
        }else{
            $(".keypoint").html(".");
        }
        $("#J_kebox").show();
    },
    //数字键盘 点击事件
    keyClick:function(){
        var self = this;
        var _this=$("#id_ul_num").find("li");
        _this.on('click',function(e){
            e.stopPropagation();
            var obj= app.obj;
            var data_memo=obj.attr("data-memo");
            var max_money=obj.attr("data-maxmoney");
            if($(this).html()!="&nbsp;"){ //非空白键
                if($(this).index()===11){ //删除键
                    if(obj.html() != '' && obj.html() != data_memo){
                        obj.html(obj.html().substring(0,obj.html().length-1));
                    }
                    if(obj.html()==''){
                        obj.html(data_memo);
                        /*光标处理*/
                        obj.addClass("defaults").removeClass("focus has");
                    }
                }else{
                    /*光标处理*/
                    obj.removeClass("defaults").addClass("focus");
                    if(obj.html()===data_memo){
                        obj.html('');
                    }
                    //判断最长的长度
                    if(obj.html().length>obj.attr('data-maxlength') - 1){
                        return false
                    }
                    var endNum=self.getPoint(obj.html()+$(this).html());
                    //判断最大的值
                    if(parseFloat(endNum)>parseFloat(max_money)){
                        obj.html(max_money);
                    }else{
                        obj.html(endNum);
                    }
                }
                self.isClear(obj.html());
            }
        });
    },
    //只能输入数字只能有一个小数点，小数点不能在开头，不能在结尾,且在小数点后面只能输入两个数字
    getPoint:function(str){
        //先把非数字的都替换掉，除了数字和.
        str = str.replace(/[^\d.]/g,"");
        //必须保证第一个为数字而不是.
        str = str.replace(/^\./g,"");
        //不能以00开头的。
        str =str.replace(/^0\d/," ");
        //保证只有出现一个.而没有多个.
        str = str.replace(/\.{2,}/g,".");
        //保证.只出现一次，而不能出现两次以上
        str= str.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
        //保证只能在小数点后输入两个
        str= str.replace(/^(.*\..{2}).*$/,"$1");
        return str;
    },
    //光标是否显示
    isCursor:function(){
        $(".J_InputClear").each(function(){
            if($(this).attr("data-memo") != $(this).html()){
                $(this).addClass("has").removeClass("defaults focus");
            }else{
                $(this).removeClass("defaults")
            }
        });
    },
    //清除键 点击事件
    clearClick:function(){
        $(".J_Clear").click(function(){
            var _this=$(this).parent().find(".J_InputClear");
            _this.html(_this.attr('data-memo')).addClass('defaults').removeClass('has focus');
            $(this).hide();
        });
    },
    //是否显示清除键
    isClear:function(str){
        $(".J_Clear").hide();
        var obj=app.obj;
        var obj_clear=obj.parent().find(".J_Clear");
        var tit=obj.attr('data-memo');
        if (str!=tit && str.length >= 1 && obj_clear){
            obj_clear.show();
        }else{
            obj_clear.hide();
        }
    }
};