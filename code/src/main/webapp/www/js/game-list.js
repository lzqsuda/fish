status = {"":"100002","":""};
function resize(){
	$(".game-list-content").css({ 
		position: "absolute", 
		left: ($(window).width() - $(".game-list-content").outerWidth())/2, 
		top: ($(window).height() - $(".game-list-content").outerHeight())/2 
	});        
}; 

function query(){
	//var urlPath = "http://192.168.1.69:8080/getCompetitionList.json";
	var urlPath = "/getCompetitionList.json";
	$.ajax({
		type: "POST",
		url: urlPath,
		data: {},
		dataType: "json",
		success: function(obj){
			console.log(obj);
			if (obj.data.length > 0){
				LoadData(obj);				
			}
		}
	});		
}

function LoadData(obj){
	var htmlstr = "";
	htmlstr = "<ul class='ul-game-list' style = 'margin-top: 40px;'> ";
	htmlstr = htmlstr + " 	<li class='li-game-list-nav'>";
	htmlstr = htmlstr + " 		<a class='li-game-list-nav-game-id li-game-list-nav-normal' style='display: none;'>";
	htmlstr = htmlstr + "			<p>游戏ID</p> " ;
	htmlstr = htmlstr + " 			<div class='cut-apart-line'></div> " ;		
	htmlstr = htmlstr + " 		</a>";	
	htmlstr = htmlstr + " 		<a class='li-game-list-nav-game-name li-game-list-nav-normal'>";
	htmlstr = htmlstr + "			<p>游戏名称</p> " ;
	htmlstr = htmlstr + " 			<div class='cut-apart-line'></div> " ;		
	htmlstr = htmlstr + " 		</a>";	
	htmlstr = htmlstr + " 		<a class='li-game-list-nav-game-content li-game-list-nav-normal'>";
	htmlstr = htmlstr + "			<p>开始时间</p> " ;
	htmlstr = htmlstr + " 			<div class='cut-apart-line'></div> " ;		
	htmlstr = htmlstr + " 		</a>";		
	htmlstr = htmlstr + " 		<a class='li-game-list-nav-game-content li-game-list-nav-normal'>";
	htmlstr = htmlstr + "			<p>结束时间</p> " ;
	htmlstr = htmlstr + " 			<div class='cut-apart-line'></div> " ;		
	htmlstr = htmlstr + " 		</a>";
	htmlstr = htmlstr + " 		<a class='li-game-list-nav-game-address li-game-list-nav-normal'>";
	htmlstr = htmlstr + "			<p>地址</p> " ;
	htmlstr = htmlstr + " 			<div class='cut-apart-line'></div> " ;		
	htmlstr = htmlstr + " 		</a>";
	htmlstr = htmlstr + " 		<a class='li-game-list-nav-game-all-num li-game-list-nav-normal'>";
	htmlstr = htmlstr + "			<p>参赛总人数</p> " ;
	htmlstr = htmlstr + " 			<div class='cut-apart-line'></div> " ;		
	htmlstr = htmlstr + " 		</a>";	
	htmlstr = htmlstr + " 		<a class='li-game-list-nav-game-reward-amout li-game-list-nav-normal'>";
	htmlstr = htmlstr + "			<p>总金额</p> " ;	
	htmlstr = htmlstr + " 			<div class='cut-apart-line'></div> " ;			
	htmlstr = htmlstr + " 		</a>";	
	htmlstr = htmlstr + " 		<a class='li-game-list-nav-game-status li-game-list-nav-normal'>";
	htmlstr = htmlstr + "			<p>状态</p> " ;
	htmlstr = htmlstr + " 		</a>";		
	htmlstr = htmlstr + " 	</li>";
	
	var index = 0;
	var length = obj.data.length;
	for (index = 0; index < length; index ++){
		//游戏ID
		htmlstr = htmlstr + " 	<li class='li-game-list-member-context' game-id="+ obj.data[index].id +">" ;	
		htmlstr = htmlstr + " 		<a class='li-game-list-member-game-id' style='display: none;'>";
		htmlstr = htmlstr + "			<p>"+ obj.data[index].code + "</p> " ;	
		htmlstr = htmlstr + " 		</a>";
		//游戏名称
		htmlstr = htmlstr + " 		<a class='li-game-list-member-game-name'>";
		htmlstr = htmlstr + "			<p>"+ obj.data[index].name + "</p> " ;	
		htmlstr = htmlstr + " 		</a>";
		//游戏开始时间
		var startTime = obj.data[index].startTime;
		var date = startTime.split(" ");	
		htmlstr = htmlstr + " 		<a class='li-game-list-member-game-start-time'>";
		htmlstr = htmlstr + "			<p>"+ date[0] + "</p> " ;	
		htmlstr = htmlstr + " 		</a>";				
		//游戏结束时间
		var endTime = obj.data[index].endTime;
		date = endTime.split(" ");		
		htmlstr = htmlstr + " 		<a class='li-game-list-member-game-end-time'>";
		htmlstr = htmlstr + "			<p>"+ date[0] + "</p> " ;	
		htmlstr = htmlstr + " 		</a>";	
		//游戏地址
		htmlstr = htmlstr + " 		<a class='li-game-list-member-game-address'>";
		htmlstr = htmlstr + "			<p>"+ obj.data[index].address + "</p> " ;	
		htmlstr = htmlstr + " 		</a>";
		//游戏参赛总人数
		htmlstr = htmlstr + " 		<a class='li-game-list-member-game-all-num'>";
		htmlstr = htmlstr + "			<p>"+ obj.data[index].allNum + "</p> " ;	
		htmlstr = htmlstr + " 		</a>";
		//游戏参赛总金额
		htmlstr = htmlstr + " 		<a class='li-game-list-member-game-reward-amout'>";
		htmlstr = htmlstr + "			<p>"+ obj.data[index].rewardNum + "</p> " ;	
		htmlstr = htmlstr + " 		</a>";
		//游戏状态
		htmlstr = htmlstr + " 		<a class='li-game-list-member-game-status'>";
		htmlstr = htmlstr + "			<p>"+ obj.data[index].status + "</p> " ;	
		htmlstr = htmlstr + " 		</a>";
		
		htmlstr = htmlstr + " 	</li>";		
	}

	htmlstr = htmlstr + " </ul>";	
	$(".game-list-title").after(htmlstr);	
}

$(document).ready(function(){
  resize();
  query();
});

$("body").on("click",".li-game-list-member-context",function(){
	sessionStorage.setItem("game-id",$(this).attr('game-id'));	
	window.location.href = "modify-game.html";
});

$("body").on("click","#create-game",function(){
	window.location.href = "create-game.html";
});
$("body").on("click","#exit-game",function(){
	window.location.href = "login.html";
});




