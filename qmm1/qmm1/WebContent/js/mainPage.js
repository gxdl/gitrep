$(function() {
	menuClickAction();
	
	signOut();
	getRequestPrefix();
	
});

// 获取请求前缀
function getRequestPrefix(){
	requestPrefix = $('#requestPrefix').text();
}

// 加载欢迎界面


// 跳回首页


// 侧边栏连接点击动作
function menuClickAction() {
	$(".menu_item").click(function() {
		var url = $(this).attr("name");
		$('#panel').load(url);
	})
}

// 注销登陆
function signOut() {
	$("#signOut").click(function() {
		window.location.href = "Login.html"
	})
}