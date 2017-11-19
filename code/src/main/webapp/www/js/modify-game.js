function resize(){
	$(".create-game-content").css({ 
		position: "absolute", 
		left: ($(window).width() - $(".create-game-content").outerWidth())/2, 
		top: ($(window).height() - $(".create-game-content").outerHeight())/2 
	});        
}; 

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

function LoadData(obj){
	$('#game-id').val(obj.data.id);
	$('#game-code').val(obj.data.code);	
	$('#game-name').val(obj.data.name);
	
	var startTime = obj.data.startTime;
	$('#game-start-year').val(getCurYear(startTime));
	$('#game-start-month').val(getCurMonth(startTime));	
	$('#game-start-day').val(getCurDay(startTime));
	$('#game-start-hour').val(getCurHour(startTime));
	$('#game-start-minute').val(getCurMinute(startTime));
	var endTime = obj.data.endTime;
	$('#game-end-year').val(getCurYear(endTime));
	$('#game-end-month').val(getCurMonth(endTime));	
	$('#game-end-day').val(getCurDay(endTime));
	$('#game-end-hour').val(getCurHour(endTime));
	$('#game-end-minute').val(getCurMinute(endTime));	

	var enrollStartTime = obj.data.enrollStartTime;
	$('#game-enroll-start-year').val(getCurYear(enrollStartTime));
	$('#game-enroll-start-month').val(getCurMonth(enrollStartTime));	
	$('#game-enroll-start-day').val(getCurDay(enrollStartTime));
	$('#game-enroll-start-hour').val(getCurHour(enrollStartTime));
	$('#game-enroll-start-minute').val(getCurMinute(enrollStartTime));
/*
	var enrollEndTime = obj.data.enrollEndTime;
	$('#game-enroll-end-year').val(getCurYear(enrollEndTime));
	$('#game-enroll-end-month').val(getCurMonth(enrollEndTime));	
	$('#game-enroll-end-day').val(getCurDay(enrollEndTime));
	$('#game-enroll-end-hour').val(getCurHour(enrollEndTime));
	$('#game-enroll-end-minute').val(getCurMinute(enrollEndTime));	
*/
	$('#game-address').val(obj.data.address);	
	$('#all-num').val(obj.data.allNum);
	$('#contract-mobile').val(obj.data.contactMobile);
	$('#enroll-num').val(obj.data.enrollNum);	
	$('#reward-num').val(obj.data.rewardNum);
	$('#reward-amout').val(obj.data.rewardAmount);	
	$('#contract-name').val(obj.data.contactName);	
	$('#award-list').val(obj.data.nrewardAmoutList);
	$('#max-award-amount-List').val(obj.data.srewardAmountList);
	$('#award-name-list').val(obj.data.srewardMembernoList);
	$('#eqcoed-num').val(obj.data.eqcoedNum);	
	$('#note').val(obj.data.note);
	
};

$("#save-game").click(function(){
	
	if ($('#game-start-year').val() == '----' || $('#game-start-month').val() == '--' || 
		$('#game-start-day').val() == '--' || $('#game-start-hour').val() == '--' || $('#game-start-minute').val() == '--'){
		alert("请选择活动开始时间");
		return ;
	}

	if ($('#game-end-year').val() == '----' || $('#game-end-month').val() == '--' || 
		$('#game-end-day').val() == '--' || $('#game-end-hour').val() == '--' || $('#game-end-minute').val() == '--'){
		alert("请选择活动结束时间");
		return ;		
	}	
	
	if ($('#game-enroll-start-year').val() == '----' || $('#game-enroll-start-month').val() == '--' || 
		$('#game-enroll-start-day').val() == '--' || $('#game-enroll-start-hour').val() == '--' || $('#game-enroll-start-minute').val() == '--'){
		alert("请选择活动报名开始时间");
		return ;		
	}	
	
	if ($('#game-enroll-end-year').val() == '----' || $('#game-enroll-end-month').val() == '--' || 
		$('#game-enroll-end-day').val() == '--' || $('#game-enroll-end-hour').val() == '--' || $('#game-enroll-end-minute').val() == '--'){
		alert("请选择活动报名结束时间");
		return ;		
	}		
	
	var urlPath = "/updateCompetitionItem.json";		
	var startTime = $('#game-start-year').val()+"-"+
					$('#game-start-month').val()+'-'+
					$('#game-start-day').val()+' '+
					$('#game-start-hour').val()+':'+
					$('#game-start-minute').val()+':'+'00';

	var endTime = $('#game-end-year').val()+"-"+
					$('#game-end-month').val()+'-'+
					$('#game-end-day').val()+' '+
					$('#game-end-hour').val()+':'+
					$('#game-end-minute').val()+':'+'00';
	var enrollStartTime = $('#game-enroll-start-year').val()+"-"+
					$('#game-enroll-start-month').val()+'-'+
					$('#game-enroll-start-day').val()+' '+
					$('#game-enroll-start-hour').val()+':'+
					$('#game-enroll-start-minute').val()+':'+'00';	
	var enrollEndTime = $('#game-enroll-end-year').val()+"-"+
					$('#game-enroll-end-month').val()+'-'+
					$('#game-enroll-end-day').val()+' '+
					$('#game-enroll-end-hour').val()+':'+
					$('#game-enroll-end-minute').val()+':'+'00';					
	var data={
		"id": $('#game-id').val(),
		"code": $('#game-code').val(),
		'name': $('#game-name').val(),
		"startTime": startTime,
		"endTime": endTime,
		"enrollStartTime":enrollStartTime,
		"enrollEndTime":enrollEndTime,
		"address":$('#game-address').val(),
		"allNum":$('#all-num').val(),
		"contactMobile":$('#contract-mobile').val(),
		"enrollNum":$('#enroll-num').val(),
		"rewardNum":$('#reward-num').val(),
		"rewardAmount":$('#reward-amout').val(),
		"contactName":$('#contract-name').val(),
		"nrewardAmoutList": $('#award-list').val(),
		"srewardAmountList": $('#max-award-amount-List').val(),		
		"srewardMembernoList": $('#award-name-list').val(),
		"eqcoedNum": $('#eqcoed-num').val(),
		"note":$('#note').val()	
	}
	$.ajax({
		type: "POST",
		url: urlPath,
		data: data,
		dataType: "json",
		success: function(obj){
			window.location.href = "game-list.html"			
		}
	});	
});

$("#delete-game").click(function(){
	var urlPath = "/removeCompetitionItem.json";
	var datas={'id': $('#game-id').val()}

	$.ajax({
		type: "POST",
		url: urlPath,
		data: datas,
		dataType: "json",
		success: function(obj){
			window.location.href = "game-list.html"			
		}
	});		
});

$("#start-game").click(function(){
	var urlPath = "/beginCompetition.json";
	var datas={'competitionId': $('#game-id').val()}
	$.ajax({
		type: "POST",
		url: urlPath,
		data: datas,
		dataType: "json",
		success: function(obj){
			window.location.href = "game-list.html"			
		}
	});		
});

$("#generate-qr-code").click(function(){
	var urlPath = "/generateQrcode.json";
	var datas={'competitionId': $('#game-id').val()}
	$.ajax({
		type: "POST",
		url: urlPath,
		data: datas,
		dataType: "json",
		success: function(obj){
			alert("生成二维码成功");
		}
	});		
});


function query(){
	var urlPath = "/getCompetitionItem.json";
	var game_id = sessionStorage.getItem("game-id");	
	var datas={'id':game_id};
	$.ajax({
		type: "POST",
		url: urlPath,
		data: datas,
		dataType: "json",
		success: function(obj){
			console.log(obj);
			LoadData(obj);
		}
	});		
};

$(document).ready(function(){
  resize();
  query();
});