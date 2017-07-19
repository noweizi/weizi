var activity = {
    notEditable:0,
    //页面初始化
    init:function (arr) {
        var funcName = '';
        for(var i in arr){
            if(Array.isArray(arr[i])){
                funcName = arr[i].shift();
                this[funcName].apply(this,arr[i]);
            }else {
                this[arr[i]]();
            }
        }
    },
    //后退按钮
    back:function(backUrl,notEditable) {
        if(notEditable){
            activity.notEditable = notEditable;
        }
        $('.back').on('click', function () {
            if (!activity.notEditable) {
                layer.open({
                    content: '您确定放弃此次编辑？',
                    btn: ['确认', '取消'],
                    shadeClose: false,
                    success: function () {
                        $('.layermchild').addClass('layer_tips');
                        shadeMask(0);
                    },
                    yes: function () {
                        location.href = backUrl;
                    },
                    no: function () {
                        shadeMask();
                    }
                });
            } else {
                location.href = backUrl;
            }
        });
    },
    //绑定是否关注
    followSwitch:function () {
        $('#followSwitch').on('click',function () {
            if($('input[name=wechat_follow]').attr('checked')){
                $('input[name=wechat_follow]').removeAttr('checked');
                $('span.switch.checked').removeClass('checked');
                $('input[name=wechat_qrcode]').parents('div.code_image').css('display','none');
            }else {
                $('input[name=wechat_follow]').attr('checked',true);
                $('input[name=wechat_qrcode]').parents('div.code_image').css('display','');
            }
        })
    },
    //上传图片
    upload:function () {
        var input = $('.J_file');
        if (typeof FileReader === 'undefined') {
            layer.open({
                content: '抱歉，你的浏览器不支持 FileReader',
                time: 2
            });
            input.setAttribute('disabled', 'disabled');
        } else {
            input.on('change', function () {
                activity.readFile.call(this);
            });
        }
    },
    //读取图片文件
    readFile:function () {
        var file = this.files[0];
        if (!/image\/\w+/.test(file.type)) {
            layer.open({
                content: '请确保文件为图像类型',
                time: 2
            });
            return false;
        }
        if (file.size / 1024 / 1024 > 2) {
            layer.open({content:"图片太大，建议上传2M以下的图片"});
            return false;
        }
        var _this = $(this);
        var fileType = _this.attr('data-type');
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            if(fileType == 'product') {
                var img = new Image,
                    width = 375, //图片resize宽度
                    canvas = document.createElement("canvas"),
                    drawer = canvas.getContext("2d");
                img.src = this.result;
                img.onload = function () {
                    canvas.width = width;
                    canvas.height = width * (img.height / img.width);
                    drawer.drawImage(img, 0, 0, canvas.width, canvas.height);
                    var src = canvas.toDataURL("image/PNG");
                    var html = '<span class="list_pic" id="p_count" >' +
                        '<img src="' + src + '" width="59" height="59">' +
                        '<input type="hidden" name="imgs[]" value="' + encodeURIComponent(src) + '" />' +
                        '<i class="icon_del"></i>' +
                        ' </span>';
                    $('.view_box').append(html);
                    $('.icon_del').on('click', function () {
                        $(this).closest('.list_pic').remove();
                        activity.delBtn();
                    });
                    activity.delBtn();
                    _this.val('');
                }
            }else {
                _this.siblings('.J_upload').html('<img src="'+this.result+'" width="40" height="40"/>');
            }
        }
    },
    //详情图片删除按钮
    delBtn:function () {
        var num = $('.list_pic').size();
        if (num >= 3) {
            $('.add_pic').css('display', 'none');
        } else {
            $('.add_pic').css('display', 'block');
        }
    },
    //表单错误函数
    formError:function(msg,fields) {
        var length = fields.length;
        for(var i = 0; i < length; i++){
            if(fields[i] == 'detail' || fields[i] == 'content' || fields[i] == 'rules') {
                var div = $('textarea[name=' + fields[i] + ']').parent();
                if (!div.hasClass('error')) {
                    div.addClass('error')
                }
            }else if(fields[i] == 'imgs') {
                var div = $('.preview');
                if (!div.hasClass('error')) {
                    div.addClass('error')
                }
            }else {
                var form = document.forms[0];
                var div = $(form[fields[i]]).parents('.unit');
                if (!div.hasClass('error')) {
                    div.addClass('error')
                }
            }
        }
        layer.open({content: msg, time: 2});
    },
    //是否可编辑
    isEditable:function (notEditable) {
        if(notEditable){
            $('input[type=file]').attr('disabled',true);
            $('input[type=checkbox]').attr('disabled',true);
            $('input[type=text]').attr('readonly',true);
            $('input[type=number]').attr('readonly',true);
            $('input[type=url]').attr('readonly',true);
            $('input[type=date]').attr('readonly',true);
            $('input[type=datetime-local]').attr('readonly',true);
            $('textarea').attr('readonly',true);
        }
    },
    //checkbox滑动选择
    switch:function () {
        $('input.chk').on('click',function () {
            var _this = $(this);
            if(_this.attr('checked')){
                _this.removeAttr('checked');
                _this.parents('div.list').next().css('display','none');
            }else {
                _this.attr('checked',true);
                _this.parents('div.list').next().css('display','');
            }
        })

    },
    //日期提示
    dateTips:function () {
        $('input[type=date],input[type=datetime-local]').each(function () {
            var _this = $(this);
            if(_this.val() ==''){
                _this.siblings().show();
            }else{
                _this.siblings().hide();
            }
        });
        $('.date').on({
            focus:function(){
                $(this).siblings().hide();
            },
            blur:function(){
                if (this.value == ""){
                    $(this).siblings().show();
                }
            }
        });

    },
    //图片右上角的删除按钮
    delImg:function () {
        $('.icon_del').on('click', function () {
            $(this).closest('.list_pic').remove();
            activity.delBtn();
        });
    }
};


