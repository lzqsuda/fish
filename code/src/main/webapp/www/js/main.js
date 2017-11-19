


function resize(){
	$(".main-content").css({ 
		position: "absolute", 
		left: ($(window).width() - $(".main-content").outerWidth())/2, 
		top: ($(window).height() - $(".main-content").outerHeight())/2 
	});        
}; 

var game_status = {"create-game":"101001","start-game":"101002", "end-game":"101003"};
var current_game = null;
var not_start_game = null;
var userid_is_null_not_start_game = null;

var htmlCurrentGameStr = null;
var htmlJoinGameStr = null;
var htmlCanJoinGameStr = null;

function queryCurrentGame(){
	var urlPath = "/getCompetitionList.json";
	var status = game_status["start-game"];
	var datas = {"isMe":1, "status": status}
	$.ajax({
		type: "POST",
		url: urlPath,
		data: datas,
		dataType: "json",
		async: false,
		success: function(obj){
			if (obj.data!=null){
				current_game = obj.data;				
			}
		}		
	});		
}

function queryNotStartGame(){
	var urlPath = "/getCompetitionList.json";
	var status = game_status["create-game"];
	var datas = {"isMe":1, "status": status}	
	$.ajax({
		type: "POST",
		url: urlPath,
		data: datas,
		dataType: "json",
		async: false,
		success: function(obj){
			if (obj.data!=null){
				not_start_game = obj.data;
			}
		}	
	});		
}

function queryUserIDIsNullNotStartGame(){
	var urlPath = "/getCompetitionList.json";
	var status = game_status["start-game"];
	var datas = {"isMe":null, "status": status}	
	$.ajax({
		type: "POST",
		url: urlPath,
		data: datas,
		dataType: "json",
		async: false,
		success: function(obj){
			if (obj.data!=null){
				userid_is_null_not_start_game = obj.data;
			}
		}	
	});		
}


function LoadCurrentGame(current_game){
	htmlCurrentGameStr = "";
	htmlCurrentGameStr = htmlCurrentGameStr + "<div class='space'><span>当前游戏</span></div>";		
	htmlCurrentGameStr = htmlCurrentGameStr + "<ul class='ul-game-list'> ";
	htmlCurrentGameStr = htmlCurrentGameStr + " 	<li class='li-game-list-nav'>";
	htmlCurrentGameStr = htmlCurrentGameStr + " 		<a class='li-game-list-nav-game-id li-game-list-nav-normal' style='display: none;'>";
	htmlCurrentGameStr = htmlCurrentGameStr + "			<p>游戏ID</p> " ;
	htmlCurrentGameStr = htmlCurrentGameStr + " 			<div class='cut-apart-line'></div> " ;		
	htmlCurrentGameStr = htmlCurrentGameStr + " 		</a>";	
	htmlCurrentGameStr = htmlCurrentGameStr + " 		<a class='li-game-list-nav-game-name li-game-list-nav-normal'>";
	htmlCurrentGameStr = htmlCurrentGameStr + "			<p>游戏名称</p> " ;
	htmlCurrentGameStr = htmlCurrentGameStr + " 			<div class='cut-apart-line'></div> " ;		
	htmlCurrentGameStr = htmlCurrentGameStr + " 		</a>";	
	htmlCurrentGameStr = htmlCurrentGameStr + " 		<a class='li-game-list-nav-game-content li-game-list-nav-normal'>";
	htmlCurrentGameStr = htmlCurrentGameStr + "			<p>开始时间</p> " ;
	htmlCurrentGameStr = htmlCurrentGameStr + " 			<div class='cut-apart-line'></div> " ;		
	htmlCurrentGameStr = htmlCurrentGameStr + " 		</a>";
	htmlCurrentGameStr = htmlCurrentGameStr + " 		<a class='li-game-list-nav-game-reward-amout li-game-list-nav-normal'>";
	htmlCurrentGameStr = htmlCurrentGameStr + "				<p>总金额</p> " ;		
	htmlCurrentGameStr = htmlCurrentGameStr + " 		</a>";	
	htmlCurrentGameStr = htmlCurrentGameStr + " 	</li>";
	
	var index = 0;
	var length = current_game.length;
	for (index = 0; index < length; index ++){
		//游戏ID
		htmlCurrentGameStr = htmlCurrentGameStr + " 	<li class='li-game-list-member-context' game-id="+ current_game[index].id +">" ;	
		htmlCurrentGameStr = htmlCurrentGameStr + " 		<a class='li-game-list-member-game-id' style='display: none;'>";
		htmlCurrentGameStr = htmlCurrentGameStr + "				<p>"+ current_game[index].id + "</p> " ;	
		htmlCurrentGameStr = htmlCurrentGameStr + " 		</a>";
		//游戏名称
		htmlCurrentGameStr = htmlCurrentGameStr + " 		<a class='li-game-list-member-game-name'>";
		htmlCurrentGameStr = htmlCurrentGameStr + "				<p>"+ current_game[index].name + "</p> " ;	
		htmlCurrentGameStr = htmlCurrentGameStr + " 		</a>";
		//游戏开始时间
		var startTime = current_game[index].startTime;
		var date = startTime.split(" ");	
		htmlCurrentGameStr = htmlCurrentGameStr + " 		<a class='li-game-list-member-game-start-time'>";
		htmlCurrentGameStr = htmlCurrentGameStr + "				<p>"+ date[0] + "</p> " ;	
		htmlCurrentGameStr = htmlCurrentGameStr + " 		</a>";
		//游戏参赛总金额
		htmlCurrentGameStr = htmlCurrentGameStr + " 		<a class='li-game-list-member-game-reward-amout'>";
		htmlCurrentGameStr = htmlCurrentGameStr + "				<p>"+ current_game[index].rewardNum + "</p> " ;	
		htmlCurrentGameStr = htmlCurrentGameStr + " 		</a>";
		htmlCurrentGameStr = htmlCurrentGameStr + " 	</li>";	
	}
	
	htmlCurrentGameStr = htmlCurrentGameStr + " </ul>";		
	
}

function LoadJoinGame(not_start_game){
	htmlJoinGameStr = "";
	htmlJoinGameStr = htmlJoinGameStr + "<div class='space'><span>已参加游戏</span></div>";			
	htmlJoinGameStr = htmlJoinGameStr + "<ul class='ul-game-list'> ";
	htmlJoinGameStr = htmlJoinGameStr + " 	<li class='li-game-list-nav'>";
	htmlJoinGameStr = htmlJoinGameStr + " 		<a class='li-game-list-nav-game-id li-game-list-nav-normal' style='display: none;'>";
	htmlJoinGameStr = htmlJoinGameStr + "			<p>游戏ID</p> " ;
	htmlJoinGameStr = htmlJoinGameStr + " 			<div class='cut-apart-line'></div> " ;		
	htmlJoinGameStr = htmlJoinGameStr + " 		</a>";	
	htmlJoinGameStr = htmlJoinGameStr + " 		<a class='li-game-list-nav-game-name li-game-list-nav-normal'>";
	htmlJoinGameStr = htmlJoinGameStr + "			<p>游戏名称</p> " ;
	htmlJoinGameStr = htmlJoinGameStr + " 			<div class='cut-apart-line'></div> " ;		
	htmlJoinGameStr = htmlJoinGameStr + " 		</a>";	
	htmlJoinGameStr = htmlJoinGameStr + " 		<a class='li-game-list-nav-game-content li-game-list-nav-normal'>";
	htmlJoinGameStr = htmlJoinGameStr + "			<p>开始时间</p> " ;
	htmlJoinGameStr = htmlJoinGameStr + " 			<div class='cut-apart-line'></div> " ;		
	htmlJoinGameStr = htmlJoinGameStr + " 		</a>";
	htmlJoinGameStr = htmlJoinGameStr + " 		<a class='li-game-list-nav-game-reward-amout li-game-list-nav-normal'>";
	htmlJoinGameStr = htmlJoinGameStr + "			<p>总金额</p> " ;	
	htmlJoinGameStr = htmlJoinGameStr + " 		</a>";	
	htmlJoinGameStr = htmlJoinGameStr + " 	</li>";
	
	var index = 0;
	var length = not_start_game.length;
	for (index = 0; index < length; index ++){
		//游戏ID
		htmlJoinGameStr = htmlJoinGameStr + " 	<li class='li-game-list-member-join-context' game-id="+ not_start_game[index].id +">" ;	
		htmlJoinGameStr = htmlJoinGameStr + " 		<a class='li-game-list-member-game-id' style='display: none;'>";
		htmlJoinGameStr = htmlJoinGameStr + "			<p>"+ not_start_game[index].id + "</p> " ;	
		htmlJoinGameStr = htmlJoinGameStr + " 		</a>";
		//游戏名称
		htmlJoinGameStr = htmlJoinGameStr + " 		<a class='li-game-list-member-game-name'>";
		htmlJoinGameStr = htmlJoinGameStr + "			<p>"+ not_start_game[index].name + "</p> " ;	
		htmlJoinGameStr = htmlJoinGameStr + " 		</a>";
		//游戏开始时间
		var startTime = not_start_game[index].startTime;
		var date = startTime.split(" ");	
		htmlJoinGameStr = htmlJoinGameStr + " 		<a class='li-game-list-member-game-start-time'>";
		htmlJoinGameStr = htmlJoinGameStr + "			<p>"+ date[0] + "</p> " ;	
		htmlJoinGameStr = htmlJoinGameStr + " 		</a>";
		//游戏参赛总金额
		htmlJoinGameStr = htmlJoinGameStr + " 		<a class='li-game-list-member-game-reward-amout'>";
		htmlJoinGameStr = htmlJoinGameStr + "			<p>"+ not_start_game[index].rewardNum + "</p> " ;	
		htmlJoinGameStr = htmlJoinGameStr + " 		</a>";
		htmlJoinGameStr = htmlJoinGameStr + " 	</li>";	
	}
	
	htmlJoinGameStr = htmlJoinGameStr + " </ul>";		
	
}


function LoadCanJoinGame(game){
	htmlCanJoinGameStr = "";
	htmlCanJoinGameStr = htmlCanJoinGameStr + "<div class='space'><span>可参加游戏</span></div>";		
	htmlCanJoinGameStr = htmlCanJoinGameStr + "<ul class='ul-game-list'> ";
	htmlCanJoinGameStr = htmlCanJoinGameStr + " 	<li class='li-game-list-nav'>";
	htmlCanJoinGameStr = htmlCanJoinGameStr + " 		<a class='li-game-list-nav-game-id li-game-list-nav-normal' style='display: none;'>";
	htmlCanJoinGameStr = htmlCanJoinGameStr + "				<p>游戏ID</p> " ;
	htmlCanJoinGameStr = htmlCanJoinGameStr + " 			<div class='cut-apart-line'></div> " ;		
	htmlCanJoinGameStr = htmlCanJoinGameStr + " 		</a>";	
	htmlCanJoinGameStr = htmlCanJoinGameStr + " 		<a class='li-game-list-nav-game-name li-game-list-nav-normal'>";
	htmlCanJoinGameStr = htmlCanJoinGameStr + "				<p>游戏名称</p> " ;
	htmlCanJoinGameStr = htmlCanJoinGameStr + " 			<div class='cut-apart-line'></div> " ;		
	htmlCanJoinGameStr = htmlCanJoinGameStr + " 		</a>";	
	htmlCanJoinGameStr = htmlCanJoinGameStr + " 		<a class='li-game-list-nav-game-content li-game-list-nav-normal'>";
	htmlCanJoinGameStr = htmlCanJoinGameStr + "				<p>开始时间</p> " ;
	htmlCanJoinGameStr = htmlCanJoinGameStr + " 			<div class='cut-apart-line'></div> " ;		
	htmlCanJoinGameStr = htmlCanJoinGameStr + " 		</a>";
	htmlCanJoinGameStr = htmlCanJoinGameStr + " 		<a class='li-game-list-nav-game-reward-amout li-game-list-nav-normal'>";
	htmlCanJoinGameStr = htmlCanJoinGameStr + "				<p>总金额</p> " ;		
	htmlCanJoinGameStr = htmlCanJoinGameStr + " 		</a>";	
	htmlCanJoinGameStr = htmlCanJoinGameStr + " 	</li>";
	
	var index = 0;
	var length = game.length;
	for (index = 0; index < length; index ++){
		//游戏ID
		htmlCanJoinGameStr = htmlCanJoinGameStr + " 	<li class='li-game-list-member-can-join-context' game-id="+ game[index].id +">" ;	
		htmlCanJoinGameStr = htmlCanJoinGameStr + " 		<a class='li-game-list-member-game-id' style='display: none;'>";
		htmlCanJoinGameStr = htmlCanJoinGameStr + "			<p>"+ game[index].id + "</p> " ;	
		htmlCanJoinGameStr = htmlCanJoinGameStr + " 		</a>";
		//游戏名称
		htmlCanJoinGameStr = htmlCanJoinGameStr + " 		<a class='li-game-list-member-game-name'>";
		htmlCanJoinGameStr = htmlCanJoinGameStr + "			<p>"+ game[index].name + "</p> " ;	
		htmlCanJoinGameStr = htmlCanJoinGameStr + " 		</a>";
		//游戏开始时间
		var startTime = game[index].startTime;
		var date = startTime.split(" ");	
		htmlCanJoinGameStr = htmlCanJoinGameStr + " 		<a class='li-game-list-member-game-start-time'>";
		htmlCanJoinGameStr = htmlCanJoinGameStr + "			<p>"+ date[0] + "</p> " ;	
		htmlCanJoinGameStr = htmlCanJoinGameStr + " 		</a>";
		//游戏参赛总金额
		htmlCanJoinGameStr = htmlCanJoinGameStr + " 		<a class='li-game-list-member-game-reward-amout'>";
		htmlCanJoinGameStr = htmlCanJoinGameStr + "			<p>"+ game[index].rewardNum + "</p> " ;	
		htmlCanJoinGameStr = htmlCanJoinGameStr + " 		</a>";
		htmlCanJoinGameStr = htmlCanJoinGameStr + " 	</li>";	
	}
	htmlCanJoinGameStr = htmlCanJoinGameStr + " </ul>";	
}


function showGame(){
	var htmlStr = ""
	if ( current_game != null ){
		LoadCurrentGame(current_game);	
		htmlStr = htmlStr + htmlCurrentGameStr;		
	}

	if ( not_start_game != null ){
		LoadJoinGame(not_start_game);	
		htmlStr = htmlStr + htmlJoinGameStr;			
	}	
	
	if ( userid_is_null_not_start_game != null ){
		LoadCanJoinGame(userid_is_null_not_start_game);	
		htmlStr = htmlStr + htmlCanJoinGameStr;		
	}	
	$(".main-title").after(htmlStr);		
}

$(document).ready(function(){
  resize();
  queryCurrentGame();
  queryNotStartGame();
  queryUserIDIsNullNotStartGame();
  showGame();
});

$("body").on("click",".li-game-list-member-context",function(){
	var game_id = $(this).attr('game-id');
	sessionStorage.setItem("game-id",$(this).attr('game-id'));
	window.location.href = "current-game.html";
});

$("body").on("click",".li-game-list-member-join-context",function(){
	debugger;
	var game_id = $(this).attr('game-id');	
	sessionStorage.setItem("game-id",$(this).attr('game-id'));	
	window.location.href = "join-game-info.html";
});

$("body").on("click",".li-game-list-member-can-join-context",function(){
	debugger;
	var game_code = $(this).attr('game-id');	
	sessionStorage.setItem("game-id",$(this).attr('game-id'));	
	window.location.href = "game-info.html";
});

