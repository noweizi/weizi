/**
 * Created by T148 on 2016/12/15.
 */
var EventListener = function(obj,type,handle){
    try { //chromr,firefox,opera,safari,IE9.0及其以上版本
        obj.addEventListener(type,handle,false);
    }catch(e){
        try { //IE8.0及以下版本
            obj.attachEvent('on'+type,handle);
        }catch (e){ //早期版本
            obj['on'+type] = handle;
        }
    }
}
var PATTERN = [];//存放校验规则
var extend = function(){

}
var validator = function(opt){
    this.opt = extend({
        el:null,
        events:[]
    });
    this.el = this.opt.el;
    if (!el){
        throw new Error("校验规则需要有元素哦");
    }
    this._status=false;
    var pattern = this.el.getAttribute("data-jvalidator") || "";
    this.pattern = pattern.replace(/\s+/g,'').split("&");
    this.addEvent();
}
validator.prototype ={
    addEvent:function(){
        var events = this.opt.events || [];
        for (var i = events.length -1;i > -1;i--){
            EventListener(el,events[i],function(e){
                //判断是否校验通过
                me.check();
            })
        }
    },
    check:function(callback){
        var me = this;
        var value = this.el.value;
        var pattern = this.pattern;
        for (var i= 0,len = pattern.length;i<len;i++){
            var ruleName = pattern[i];
            var realRule = PATTERN[ruleName];
            if(!realRule){
                console.error("不存在校验规则："+pattern[i]+",请确认后提交");
            }else{
                realRule.callback.call(this.el,value,function(result){
                    me.opts.on[result?"valid":"invalid"].call(me.el,PATTERN[ruleName]);
                    callback && callback(result);
                })
            }
        }
    }
}