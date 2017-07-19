/*
 * Created by suly on 2016/11/30. �����ְ�ȫ����
 * data-val 0:�ո�� 1������С����
 * data-maxlength ��󳤶�
 * data-minlength ��С����
 * data-memo ��ʾֵ
 * data-maxmoney �����
 * */
var app = {
    obj:0,
    //ҳ���ʼ��
    init:function (isFocus) {
        var self = this;
        // ����հ״� �ر����ּ���
        $(document).click(function(){
            $(".J_Clear").hide();
            self.isCursor();
            $("#J_kebox").hide();
        });
        // ������������ ��ֹð�� ��ֹ�ر����ּ���
        $('.kb-box').click(function(e){
            e.stopPropagation();
        });
        this.focus();
        this.keyClick();
        this.clearClick();
        if (isFocus){ //isFocus Ϊ ��true��ʱ����Ĭ�Ͼ۽� ������
            $(".half-part").eq(0).find(".J_InputClear").trigger("click");
        }
    },
    focus: function(){
        var self = this;
        $(".J_InputClear").click(function(){
            self.isCursor();
            /*��괦��*/
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
        if(type === '0'){ //�ո��  &#12288;
            $(".keypoint").html("&nbsp;");
        }else{
            $(".keypoint").html(".");
        }
        $("#J_kebox").show();
    },
    //���ּ��� ����¼�
    keyClick:function(){
        var self = this;
        var _this=$("#id_ul_num").find("li");
        _this.on('click',function(e){
            e.stopPropagation();
            var obj= app.obj;
            var data_memo=obj.attr("data-memo");
            var max_money=obj.attr("data-maxmoney");
            if($(this).html()!="&nbsp;"){ //�ǿհ׼�
                if($(this).index()===11){ //ɾ����
                    if(obj.html() != '' && obj.html() != data_memo){
                        obj.html(obj.html().substring(0,obj.html().length-1));
                    }
                    if(obj.html()==''){
                        obj.html(data_memo);
                        /*��괦��*/
                        obj.addClass("defaults").removeClass("focus has");
                    }
                }else{
                    /*��괦��*/
                    obj.removeClass("defaults").addClass("focus");
                    if(obj.html()===data_memo){
                        obj.html('');
                    }
                    //�ж���ĳ���
                    if(obj.html().length>obj.attr('data-maxlength') - 1){
                        return false
                    }
                    var endNum=self.getPoint(obj.html()+$(this).html());
                    //�ж�����ֵ
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
    //ֻ����������ֻ����һ��С���㣬С���㲻���ڿ�ͷ�������ڽ�β,����С�������ֻ��������������
    getPoint:function(str){
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
    },
    //����Ƿ���ʾ
    isCursor:function(){
        $(".J_InputClear").each(function(){
            if($(this).attr("data-memo") != $(this).html()){
                $(this).addClass("has").removeClass("defaults focus");
            }else{
                $(this).removeClass("defaults")
            }
        });
    },
    //����� ����¼�
    clearClick:function(){
        $(".J_Clear").click(function(){
            var _this=$(this).parent().find(".J_InputClear");
            _this.html(_this.attr('data-memo')).addClass('defaults').removeClass('has focus');
            $(this).hide();
        });
    },
    //�Ƿ���ʾ�����
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