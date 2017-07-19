/**
 * jquery.area.js
 * 移动端省市区三级联动选择插件
 * author: 锐不可挡
 * date: 2016-06-17
 **/
var expressArea, areaCont, areaList = $("#areaList"), areaTop = areaList.offset().top;

/*初始化省份*/
function intProvince() {
    areaCont = "";
    for (var i=0; i<json.length; i++) {
        areaCont += '<li onClick="selectP(' + i + ');"><a href="javascript:;">' + json[i].name + '</a></li>';
    }
    areaList.html(areaCont);
    $("#areaBox").scrollTop(0);
    $("#backUp").removeAttr("onClick").hide();
}
intProvince();

/*选择省份*/
function selectP(p) {
    areaCont = "";
    areaList.html("");
    for (var j=0; j<json[p].child.length; j++) {
        areaCont += '<li onClick="selectC(' + p + ',' + j + ');"><a href="javascript:;">' + json[p].child[j].name + '</a></li>';
    }
    areaList.html(areaCont);
    $("#areaBox").scrollTop(0);
    expressArea = json[p].name + " > ";
    $("#backUp").attr("onClick", "intProvince();").show();
}

/*选择城市*/
function selectC(p,c) {
    areaCont = "";
    var sCity = json[p].child[c].name;
    if (json[p].child[c].child == undefined ) {
        clockArea();
        if(json[p].name == sCity){
            expressArea = json[p].name;
        }else{
            expressArea += sCity;
        }
        $(".J_detail").html(expressArea);
    }else{
        for (var k=0; k<json[p].child[c].child.length; k++) {
            areaCont += '<li onClick="selectD(' + p + ',' + c + ',' + k + ');"><a href="javascript:;">' + json[p].child[c].child[k].name + '</a></li>';
        }
        expressArea+= sCity + " > ";
    }
    areaList.html(areaCont);
    $("#areaBox").scrollTop(0);
    $("#backUp").attr("onClick", "selectP(" + p + ");");
}

/*选择区县*/
function selectD(p,c,d) {
    clockArea();
    expressArea += json[p].child[c].child[d].name;
    $(".J_detail").html(expressArea);
}

/*关闭省市区选项*/
function clockArea() {
    $(".mask").hide();
    $("#dialog").hide();
    intProvince();
}

$(function() {
    /*打开省市区选项*/
    $(".J_detail").click(function() {
        $(".mask").show();
        $("#dialog").show();
    });
    /*关闭省市区选项*/
    $(".mask, .J-close").click(function() {
        clockArea();
    });
});