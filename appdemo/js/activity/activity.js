var num=-1;
$(function(){
	nextPage();
	$(document).on('swipedown', '.section_box', function () {
   		prevPage();
	});
	$(document).on('swipeup', '.section_box', function () {
   		nextPage();
	});
	$(document).on('swiperight', '.section_box', function () {
   		prevPage();
	});
	$(document).on('swipeleft', '.section_box', function () {
   		nextPage();
	});
	$("#J_btn_prev").click(function(){prevPage()});
	$("#J_btn_next").click(function(){nextPage()});
})
function nextPage(){
	if(num<=1){
		num++;
		TweenMax.to($(".section_box"), 1.5,{css:{top:num*-100+"%"},ease:Expo.easeOut})	
		showP(num);
	}
}
function prevPage(){
	if(num>=1){
		num--;
		TweenMax.to($(".section_box"), 1.5,{css:{top:num*-100+"%"},ease:Expo.easeOut})	
		showP(num);
	}
}
function showP(num){
	$('section').eq(num).siblings().removeClass('cur').end().addClass('cur');
	switch (num){
		case 0:showPage0(); $("#J_btn_next").show();$("#J_btn_prev").hide();break;
		case 1:showPage1(); $("#J_btn_next").show();$("#J_btn_prev").show();break;
		case 2:showPage2(); $("#J_btn_next").hide();$("#J_btn_prev").show();break;
	}
}
function showPage0(){
}
function showPage1(){
}
function showPage2(){
}