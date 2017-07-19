/**
 *模拟textarea
 */
//判断字数限制
function removeHTMLTag(str) {
    str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g, ''); //去除行尾空白
    str = str.replace(/ /ig, ''); //去掉
    return str;
}
function po_Last_Div(obj) {
    if (window.getSelection) {//ie11 10 9 ff safari
        obj.focus(); //解决ff不获取焦点无法定位问题
        var range = window.getSelection();//创建range
        range.selectAllChildren(obj);//range 选择obj下所有子内容
        range.collapseToEnd();//光标移至最后
    } else if (document.selection) {//ie10 9 8 7 6 5
        var range = document.selection.createRange();//创建选择对象
        //var range = document.body.createTextRange();
        range.moveToElementText(obj);//range定位到obj
        range.collapse(false);//光标移至最后
        range.select();
    }
}
function Maxlenght(obj) {
    var num = $(obj).attr('data-length');//获取最大数字
    var len = $(obj).text().length;
    if (len > num) {
        var newValue = $(obj).text().substring(0, num);
        $(obj).text(newValue);
        $(obj).addClass('error');
        po_Last_Div(document.getElementsByClassName('simulate')[0])

    } else {
        $(obj).removeClass('error');
    }
}
;
$('.simulate').on('keyup', function () {
    Maxlenght('.simulate');
    removeHTMLTag('.simulate');
});
$('.simulate').on('blur', function () {
    Maxlenght('.simulate');
    removeHTMLTag('.simulate');
});

//placeholder 效果
function placeholder(obj) {
    function empty(obj) {
        var demsg = obj.attr('data-tips');
        var str = obj.text();
        if (str == '') {
            obj.html(demsg).addClass('default');
            obj.keydown(function () {
                var str = obj.text();
                if (str == demsg) {
                    obj.html('').removeClass('default');
                }
            });
        }
    }
    $(obj).on('keyup', function () {
        var obj = $(this);
        empty(obj);
    });
    $(obj).on('keydown', function () {
        var demsg = $(this).attr('data-tips');
        var str = $(this).text();
        //alert(str +'==='+ demsg);
        if (str === demsg){
            $(this).html('').removeClass('default');;
        }
    });
}
;
//调用方式
placeholder('.simulate');