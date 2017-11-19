function resize(){
	$(".current-game-content").css({ 
		position: "absolute", 
		left: ($(window).width() - $(".current-game-content").outerWidth())/2, 
		top: ($(window).height() - $(".current-game-content").outerHeight())/2 
	});        
}; 

//var urlPath = "http://192.168.1.69:8080/login.json";
function query(){
	var urlPath = "/www/current-game.json";
	var code = sessionStorage.getItem("game-code");
	var userId = $('user-id').val();
	var datas = {'userId': userId, 'code': code};
	$.ajax({
		type: "POST",
		url: urlPath,
		data: datas,
		dataType: "json",
		success: function(obj){
			var awardInfo = "  当前活动奖池总金额为,";
			awardInfo = awardInfo + obj.data[0].awardAllAmount + "！ 已经中奖金额为："+obj.data[0].awardAmount + "元，奖池剩余金额为： ";
			awardInfo = awardInfo + obj.data[0].awardRemaining + "元，您的中奖金额为："+obj.data[0].myAward+"元";
			$('#awardInfo').val(awardInfo);
		},
		error: function(obj){
			alert("登陆失败")
		}		
	});		
}

$(document).ready(function(){
  resize();
  query();
});
