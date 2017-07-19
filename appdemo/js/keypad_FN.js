/**
 * Created by suly on 2016/7/18. �����ְ�ȫ����
 * data-val 0:�ո�� 1������С����
 * data-maxlength ��󳤶�
 * data-minlength ��С����
 * data-memo ��ʾֵ
 * data-flag �����ʶ
 * data-maxmoney �����
 * data-type 1:�ֻ�����
 * **/
 // ����һ���հ�
(function($){
    $.fn.keypad_cncn = function(options) {
        var opts = $.extend({},$.fn.keypad_cncn.defaults, options);
        return this.each(function() {
            var isExec=opts.isExec;
            var isBtn=opts.isBtn;
            keypad();
            function keypad(){
                //��ʼ��
                var ulList=['1','2','3','4','5','6','7','8','9',' ','0','del'];//���ּ��̳�ʼ��
                var that=$("#id_ul_num").find("li");
                var _this=$(".half-part").find(".J_InputClear");
                var $btn = $('#J_Countdown').find('button'); //��ȡ��֤��
                //���ּ��������ж� �Ƿ���С���㡣
                function hasType(values){
                    if (values==1){
                        that.eq(9).html('.');
                    }else{
                        that.eq(9).html('&#12288;');
                    }
                }
                //�����[all]
                $(".J_Clear").click(function(){
                    var _thin=$(this).parent().find(".J_InputClear");
                    _thin.html(_thin.attr('data-memo')).addClass('tre').removeClass('trebe cl0');
                    $btn.removeClass('orange');
                    $(this).hide();
                });
                //�Ƿ���������
                function isDel(str,i){
                    var stxt=_this.eq(i).parent().find('.J_Clear');
                    var tit=_this.eq(i).attr('data-memo');
                    if (str!=tit&&str.length>=1&&_this.eq(i).parent().find('i').hasClass('J_Clear')&&_this.eq(i).attr('data-flag')=="true"){
                        stxt.show();
                    }else{
                        stxt.hide();
                    }
                }
                //�Ƿ�۽�
                function isFlag(obj){
                    _this.attr('data-flag',false);
                    obj.attr('data-flag',true);
                }
                //��ȡ��Ӧ�۽��������
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
                //�ֻ�������ȷ�Ļ� ��֤�밴ť������
                function hasPhone(){
                    var self = this;
                    if($('#J_Phone').html()!=$('#J_Phone').attr('data-memo')){
                        var phone=$('#J_Phone').html();
                        if (phone.length > 11) {
                            phone = phone.substr(0, 11);
                        }
                        var isPhone = /^1[3-9]\d{9}$/g; //�ж��ֻ������ʽ�Ƿ���ȷ
                        if(isBtn){
                            $btn[isPhone.test(phone)? 'addClass' : 'removeClass']('orange');
                            if($btn.hasClass('orange')){
                                $('.J_Clear').hide();
                                $(".J_OnlySixNum").click();
                            }
                        }
                    };
                }
                //ֻ����������ֻ����һ��С���㣬С���㲻���ڿ�ͷ�������ڽ�β,����С�������ֻ��������������
                function getpoint(str){
                    //�Ȱѷ����ֵĶ��滻�����������ֺ�.
                    str = str.replace(/[^\d.]/g,"");
                    //���뱣֤��һ��Ϊ���ֶ�����.
                    str = str.replace(/^\./g,"");
                    //������00��ͷ�ġ�
                    str =str.replace(/^0\d/," ");
                    //��ֻ֤�г���һ��.��û�ж��.
                    str = str.replace(/\.{2,}/g,".");
                    //��֤.ֻ����һ�Σ������ܳ�����������
                    str= str.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
                    //��ֻ֤����С�������������
                    str= str.replace(/^(.*\..{2}).*$/,"$1");
                    return str;
                }
                //��ʼ�����ּ��̼���ý���
                function init(obj){
                    $(".kb-box").find('.J_InputClear').removeClass('tre trebe');
                    obj.addClass('trebe');
                    if(obj.html()==obj.attr('data-memo')){
                        obj.addClass('tre').removeClass('trebe');
                    }
                    //�����ʾ����
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
                //��������¼�
                _this.click(function(){
                    init($(this));
                    selFlag();
                });
                //���ּ��� ����¼�
                that.click(function(e){
                    e.stopPropagation();
                    var keys=$(this).html();
                    var idx=selFlag();
                    var _then=_this.eq(idx)
                    var tit=_then.html();
                    var data_memo=_then.attr('data-memo');
                    var max_money=_then.attr('data-maxmoney');
                    var data_type=_then.attr('data-type');
                    //�����ո��
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
                            //�ж���ĳ���
                            if(_then.html().length>max_length - 1){
                                return false
                            }
                            //�ж�����ֵ
                            var endNum=getpoint(_then.html()+$(this).html());
                            if(parseFloat(endNum)>parseFloat(max_money)){
                                _then.html(max_money);
                            }else{
                                _then.html(endNum);
                            }
                            _then.removeClass('tre').addClass('trebe');
                        }
                        //�ֻ����������֤
                        if(data_type==1){
                            hasPhone();
                        }
                        isDel(_then.html(),idx);
                    }
                });
                // ����հ״� �ر����ּ���
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
                // ������������ ��ֹð�� ��ֹ�ر����ּ���
                $('.kb-box').click(function(e){
                    e.stopPropagation();
                });
                //ҳ��һ���� ����ʾ��꼰���ּ���
                function isCursor(idx){
                    $(".half-part").eq(idx).find(".J_InputClear").each(function(i){
                        if(i==0){
                            init($(this));
                        }
                    });
                }
                isCursor(0);
                if(isExec){
                    //�ڶ�������Ч��
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
        isBtn:true, //�Ƿ�ִ�л�ȡ��֤�밴ť����
        isExec:true //�Ƿ�ִ����һ��
    };
})(jQuery);