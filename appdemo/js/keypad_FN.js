/**
 * Created by suly on 2016/7/18. 纯数字安全键盘
 * data-val 0:空格键 1：带有小数点
 * data-maxlength 最大长度
 * data-minlength 最小长度
 * data-memo 提示值
 * data-flag 焦点标识
 * data-maxmoney 最大金额
 * data-type 1:手机号码
 * **/
 // 创建一个闭包
(function($){
    $.fn.keypad_cncn = function(options) {
        var opts = $.extend({},$.fn.keypad_cncn.defaults, options);
        return this.each(function() {
            var isExec=opts.isExec;
            var isBtn=opts.isBtn;
            keypad();
            function keypad(){
                //初始化
                var ulList=['1','2','3','4','5','6','7','8','9',' ','0','del'];//数字键盘初始化
                var that=$("#id_ul_num").find("li");
                var _this=$(".half-part").find(".J_InputClear");
                var $btn = $('#J_Countdown').find('button'); //获取验证码
                //数字键盘类型判断 是否有小数点。
                function hasType(values){
                    if (values==1){
                        that.eq(9).html('.');
                    }else{
                        that.eq(9).html('&#12288;');
                    }
                }
                //清除键[all]
                $(".J_Clear").click(function(){
                    var _thin=$(this).parent().find(".J_InputClear");
                    _thin.html(_thin.attr('data-memo')).addClass('tre').removeClass('trebe cl0');
                    $btn.removeClass('orange');
                    $(this).hide();
                });
                //是否出现清除键
                function isDel(str,i){
                    var stxt=_this.eq(i).parent().find('.J_Clear');
                    var tit=_this.eq(i).attr('data-memo');
                    if (str!=tit&&str.length>=1&&_this.eq(i).parent().find('i').hasClass('J_Clear')&&_this.eq(i).attr('data-flag')=="true"){
                        stxt.show();
                    }else{
                        stxt.hide();
                    }
                }
                //是否聚焦
                function isFlag(obj){
                    _this.attr('data-flag',false);
                    obj.attr('data-flag',true);
                }
                //获取对应聚焦的输入框
                function selFlag(){
                    var idx=0;
                    _this.each(function(i){
                        if($(this).attr('data-flag')=='true'){
                            idx=i;
                        }else{
                            if($(this).attr('data-memo')!=$(this).html()){
                                $(this).addClass('cl0');
                            }
                        }
                    });
                    return idx;
                }
                //手机号码正确的话 验证码按钮点亮。
                function hasPhone(){
                    var self = this;
                    if($('#J_Phone').html()!=$('#J_Phone').attr('data-memo')){
                        var phone=$('#J_Phone').html();
                        if (phone.length > 11) {
                            phone = phone.substr(0, 11);
                        }
                        var isPhone = /^1[3-9]\d{9}$/g; //判断手机号码格式是否正确
                        if(isBtn){
                            $btn[isPhone.test(phone)? 'addClass' : 'removeClass']('orange');
                            if($btn.hasClass('orange')){
                                $('.J_Clear').hide();
                                $(".J_OnlySixNum").click();
                            }
                        }
                    };
                }
                //只能输入数字只能有一个小数点，小数点不能在开头，不能在结尾,且在小数点后面只能输入两个数字
                function getpoint(str){
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
                }
                //初始化数字键盘及获得焦距
                function init(obj){
                    $(".kb-box").find('.J_InputClear').removeClass('tre trebe');
                    obj.addClass('trebe');
                    if(obj.html()==obj.attr('data-memo')){
                        obj.addClass('tre').removeClass('trebe');
                    }
                    //点击显示键盘
                    var type=obj.attr('data-val');
                    hasType(type);
                    isFlag(obj);
                    if(!$("#J_kebox").hasClass("cur")){
                        $("#J_kebox").show().addClass('cur');
                    }
                    $('.J_Clear').hide();
                    if(obj.html().length>=1&&obj.html()!=obj.attr('data-memo')){
                        obj.parent().find('.J_Clear').show();
                    }
                }
                //输入框点击事件
                _this.click(function(){
                    init($(this));
                    selFlag();
                });
                //数字键盘 点击事件
                that.click(function(e){
                    e.stopPropagation();
                    var keys=$(this).html();
                    var idx=selFlag();
                    var _then=_this.eq(idx)
                    var tit=_then.html();
                    var data_memo=_then.attr('data-memo');
                    var max_money=_then.attr('data-maxmoney');
                    var data_type=_then.attr('data-type');
                    //遇到空格键
                    if(keys==''){
                        return false;
                    }else{
                        if(ulList[$(this).index()]=='del'){
                            if(tit!=''&&tit!=data_memo){
                                _then.html(tit.substring(0,tit.length-1));
                                if(_then.html()==''){
                                    _then.html(data_memo);
                                    _then.removeClass('trebe cl0').addClass('tre');
                                }
                            }
                        }else{
                            var max_length=_then.attr('data-maxlength');
                            if(_then.html()==data_memo){
                                _then.html('');
                            }
                            //判断最长的长度
                            if(_then.html().length>max_length - 1){
                                return false
                            }
                            //判断最大的值
                            var endNum=getpoint(_then.html()+$(this).html());
                            if(parseFloat(endNum)>parseFloat(max_money)){
                                _then.html(max_money);
                            }else{
                                _then.html(endNum);
                            }
                            _then.removeClass('tre').addClass('trebe');
                        }
                        //手机号码进行验证
                        if(data_type==1){
                            hasPhone();
                        }
                        isDel(_then.html(),idx);
                    }
                });
                // 点击空白处 关闭数字键盘
                $(document).click(function(){
                    $("#J_kebox").hide().removeClass('cur');
                    $(".J_Clear").hide();
                    $(".J_InputClear").each(function(i){
                        if($(this).html()!=$(this).attr('data-memo')){
                            $(this).addClass('cl0');
                            $(this).removeClass('tre trebe');
                        }else{
                            $(this).removeClass('cl0');
                        }
                    });
                });
                // 点击输入框区域 阻止冒泡 阻止关闭数字键盘
                $('.kb-box').click(function(e){
                    e.stopPropagation();
                });
                //页面一进来 就显示光标及数字键盘
                function isCursor(idx){
                    $(".half-part").eq(idx).find(".J_InputClear").each(function(i){
                        if(i==0){
                            init($(this));
                        }
                    });
                }
                isCursor(0);
                if(isExec){
                    //第二步动画效果
                    $(".J_firstnext").on("click" ,function(e){
                        $("#J_kebox").hide().removeClass('cur');
                        e.stopPropagation();
                        var $this = $(this);
                        $this.parents("#J_frist").addClass('fadeInRighthide').next("#J_two").removeClass('hide').addClass('fadeInRight');
                        setInterval(isCursor(1),500);
                    });
                }
            };
        });
    };
    $.fn.keypad_cncn.defaults = {
        isBtn:true, //是否执行获取验证码按钮点亮
        isExec:true //是否执行下一步
    };
})(jQuery);