function resize(){
	$(".login-content").css({ 
		position: "absolute", 
		left: ($(window).width() - $(".login-content").outerWidth())/2, 
		top: ($(window).height() - $(".login-content").outerHeight())/2 
	});
}; 
/*
$(window).bind('resize load', function(){
	$("body").css("zoom", $(window).width() / 640);
	$("body").css("display" , "block");
});  
*/
$(document).ready(function(){
  resize();
});

var urlPath = "/login.json";

$("#game-button").click(function(){
	if (!$('#user-name').val()){
		alert("用户名不能为空");
	}
	if (!$('#user-password').val()){
		alert("密码不能为空");
	}
	var datas = {userid:$('#user-name').val(), pwd:$("#user-password").val()};
	console.log($('#user-name').val());
	$.ajax({
		type: "POST",
		url: urlPath,
		data: datas,
		dataType: "json",
		//async:false,
		success: function(obj){
			console.log(obj);
			console.log(obj.success);
			if (obj.success == true){
				window.location.href = "game-list.html";
			}
		},
		error: function(obj){
			alert("登陆失败")
		}
	});	
});