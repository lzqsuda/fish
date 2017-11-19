function resize(){
	$(".create-game-content").css({ 
		position: "absolute", 
		left: ($(window).width() - $(".create-game-content").outerWidth())/2, 
		top: ($(window).height() - $(".create-game-content").outerHeight())/2 
	});        
}; 

$(document).ready(function(){
  resize();
});

$("#create-game").click(function(){
	var urlPath = "/addCompetition.json";
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
	var srewardMembernoList = $('#award-name-list').val();			
	var data={
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
			alert("保存成功");
			window.location.href = "game-list.html";					
		}
		
	});	
});

$("#cancel-game").click(function(){
	window.location.href = "game-list.html";
});