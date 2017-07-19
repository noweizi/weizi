//防止遮罩层随页面滚动
function shadeMask(status){
    if(status==0){
        $('html').addClass('prevent_bodyscroll');
    }else{
        $('html').removeClass('prevent_bodyscroll');
    }
}