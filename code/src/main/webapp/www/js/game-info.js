function resize(){
	$(".game-info-content").css({ 
		position: "absolute", 
		left: ($(window).width() - $(".game-info-content").outerWidth())/2, 
		top: ($(window).height() - $(".game-info-content").outerHeight())/2 
	});        
}; 

//var urlPath = "http://192.168.1.69:8080/login.json";

function getCurDate(curTime){
	var splitData = curTime.split(' ');
	return splitData[0];
};
function getCurTime(curTime){
	var splitData = curTime.split(' ');
	return splitData[1];
};

function getCurYear(curTime){
	var date = getCurDate(curTime).split('-');
	return date[0];
};
function getCurMonth(curTime){
	var date = getCurDate(curTime).split('-');
	return date[1];
};
function getCurDay(curTime){
	var date = getCurDate(curTime).split('-');
	return date[2];
};

function getCurHour(curTime){
	var curTime = getCurTime(curTime).split(':');
	return curTime[0];
};
function getCurMinute(curTime){
	var curTime = getCurTime(curTime).split(':');
	return curTime[1];
};

function query(){
	var urlPath = "/getCompetitionItem.json";
	var datas = {'id':sessionStorage.getItem('game-id')};
	$.ajax({
		type: "POST",
		url: urlPath,
		data: datas,
		dataType: "json",
		success: function(obj){
			//$('#user-id').val(obj.userId);
			$('#game-id').val(obj.data.id);		
			var gameInfo = "  当前游戏：" + obj.data.name;
			gameInfo = gameInfo + "、地址为：" + obj.data.address;
			var startTime = obj.data.startTime;			
			gameInfo = gameInfo + "。游戏开始时间：" + getCurYear(startTime) + '-' + getCurMonth(startTime) + '-' + getCurDay(startTime) + ' ' + getCurHour(startTime) + ":" + getCurMinute(startTime);			
			var endTime = obj.data.endTime;	
			gameInfo = gameInfo + "、结束时间：" + getCurYear(endTime) + '-' + getCurMonth(endTime) + '-' + getCurDay(endTime) + ' ' + getCurHour(endTime) + ":" + getCurMinute(endTime);			
			var enrollStartTime = obj.data.enrollStartTime;	
			gameInfo = gameInfo + "。报名开始时间：" + getCurYear(enrollStartTime) + '-' + getCurMonth(enrollStartTime) + '-' + getCurDay(enrollStartTime) + ' ' + getCurHour(enrollStartTime) + ":" + getCurMinute(enrollStartTime);			
			/*
			var enrollEndTime = obj.data[0].enrollEndTime;	
			gameInfo = gameInfo + "、报名结束时间：" + getCurYear(enrollEndTime) + '-' + getCurMonth(enrollEndTime) + '-' + getCurDay(enrollEndTime) + ' ' + getCurHour(enrollEndTime) + ":" + getCurMinute(enrollEndTime);			
			*/
			gameInfo = gameInfo + "。游戏总人数：" + obj.data.allNum ;
			gameInfo = gameInfo + "、已报名人数：" + obj.data.enrollNum ;			
			gameInfo = gameInfo + "、奖池总金额：" + obj.data.rewardAmount ;	
			gameInfo = gameInfo + "、获奖人数：" + obj.data.rewardNum ;				
			$('#gameInfo').val(gameInfo);
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

$("#join-game-button").click(function(){
	var urlPath = "/joinCompetition.json";
	var datas = {'id':sessionStorage.getItem('game-id')};	
	$.ajax({
		type: "POST",
		url: urlPath,
		data: datas,
		dataType: "json",
		success: function(obj){
			alert("参加游戏成功");
			window.location.href = "main.html";
		},
		error: function(obj){
			alert("参加游戏失败")
		}		
	});		
});

$("#return-game-button").click(function(){
	window.location.href = "main.html";	
});