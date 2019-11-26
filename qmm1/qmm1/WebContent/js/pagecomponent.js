
function passwordMode() {

	document.getElementById('panel').innerHTML=`
		<div class="panel panel-default">
		<!-- 面包屑 -->
		<ol class="breadcrumb">
		<li>修改密码</li>
		</ol>

		<div class="panel-body">
		<!--  修改密码主体部分 -->
		<div class="row">
		<div class="col-md-4 col-sm-2"></div>
		<div class="col-md-4 col-sm-8">

		<form action="" class="form-horizontal bv-form" style="" role="form" id="form" novalidate="novalidate">
		<div class="form-group">
		<label for="" class="control-label col-md-4 col-sm-4"> 用户ID: </label>
		<div class="col-md-8 col-sm-8">
		<span class="hidden" id="userID"></span>
		<p class="form-control-static"></p>
		</div>
		</div>

		<div class="form-group has-feedback" id="old">
		<label for="" class="control-label col-md-4 col-sm-4"> 输入原密码: </label>
		<div class="col-md-8 col-sm-8">
		<input type="password" class="form-control" id="oldPassword" name="oldPassword" data-bv-field="oldPassword" ><i  class="form-control-feedback" data-bv-icon-for="oldPassword" style="display: none;"></i>
		<small class="help-block" data-bv-validator="notEmpty" data-bv-for="oldPassword" data-bv-result="NOT_VALIDATED" style="display: none;">输入不能为空</small><small class="help-block" data-bv-validator="callback" data-bv-for="oldPassword" data-bv-result="NOT_VALIDATED" style="display: none;">Please enter a valid value</small></div>
		</div>

		<div class="form-group has-feedback">
		<label for="" class="control-label col-md-4 col-sm-4"> 输入新密码: </label>
		<div class="col-md-8 col-sm-8">
		<input type="password" class="form-control" id="newPassword" name="newPassword" data-bv-field="newPassword"><i class="form-control-feedback" data-bv-icon-for="newPassword" style="display: none;"></i>
		<small class="help-block" data-bv-validator="notEmpty" data-bv-for="newPassword" data-bv-result="NOT_VALIDATED" style="display: none;">输入不能为空</small><small class="help-block" data-bv-validator="stringLength" data-bv-for="newPassword" data-bv-result="NOT_VALIDATED" style="display: none;">密码长度为6~16位</small><small class="help-block" data-bv-validator="callback" data-bv-for="newPassword" data-bv-result="NOT_VALIDATED" style="display: none;">Please enter a valid value</small></div>
		</div>

		<div class="form-group has-feedback">
		<label for="" class="control-label col-md-4 col-sm-4"> 确认新密码: </label>
		<div class="col-md-8 col-sm-8 has-feedback">
		<input type="password" class="form-control" id="newPassword_re" name="newPassword_re" data-bv-field="newPassword_re"><i class="form-control-feedback" data-bv-icon-for="newPassword_re" style="display: none;"></i>
		<small class="help-block" data-bv-validator="notEmpty" data-bv-for="newPassword_re" data-bv-result="NOT_VALIDATED" style="display: none;">输入不能为空</small><small class="help-block" data-bv-validator="identical" data-bv-for="newPassword_re" data-bv-result="NOT_VALIDATED" style="display: none;">两次密码不一致</small></div>
		</div>

		<div>
		<div class="col-md-4 col-sm-4"></div>
		<div class="col-md-4 col-sm-4">
		<button type="submit" class="btn btn-success">
		&nbsp;&nbsp;&nbsp;&nbsp;确认修改&nbsp;&nbsp;&nbsp;&nbsp;</button>
		</div>
		<div class="col-md-4 col-sm-4"></div>
		</div>
		<input id="reset" type="reset" style="display:none">
		</form>

		</div>
		<div class="col-md-4 col-sm-2"></div>
		</div>

		<div class="row">
		<div class="col-md-3 col-sm-1"></div>
		<div class="col-md-6 col-sm-10">
		<div class="alert alert-info" style="margin-top: 50px">
		<p>登录密码修改规则说明：</p>
		<p>1.密码长度为6~16位，至少包含数字、字母、特殊符号中的两类，字母区分大小写</p>
		<p>2.密码不可与账号相同</p>
		</div>
		</div>
		<div class="col-md-3 col-sm-1"></div>
		</div>
		</div>
		</div>

		<div class="modal fade" id="passwordEditSuccess"
		tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
		<div class="modal-content">
		<div class="modal-header">
		<button type="button" class="close"
		data-dismiss="modal" aria-hidden="true">
		&times;
		</button>
		<h4 class="modal-title" id="myModalLabel">
		提示
		</h4>
		</div>
		<div class="modal-body">
		<div class="row">
		<div class="col-md-4"></div>
		<div class="col-md-4">
		<div style="text-align: center;">
		<img src="media/icons/success-icon.png" alt=""
		style="width: 100px; height: 100px;">
		</div>
		</div>
		<div class="col-md-4"></div>
		</div>
		<div class="row" style="margin-top: 10px">
		<div class="col-md-4"></div>
		<div class="col-md-4" style="text-align:center;"><h4>密码修改成功</h4></div>
		<div class="col-md-4"></div>
		</div>
		</div>
		<div class="modal-footer">
		<button type="button" class="btn btn-default" data-dismiss="modal">
		<span>关闭</span>
		</button>
		</div>
		</div>
		</div>
		</div>

		`
		bootstrapValidatorInit();
}

function bootstrapValidatorInit(){
	$('#form').bootstrapValidator({
		message:'This value is not valid',
		feedbackIcons:{
			valid:'glyphicon glyphicon-ok',
			invalid:'glyphicon glyphicon-remove',
			validating:'glyphicon glyphicon-refresh'
		},
		excluded: [':disabled'],
		fields:{// 字段验证
			oldPassword:{// 原密码
				validators:{
					notEmpty:{
						message:'输入不能为空'
					},
					callback:{}
				}
			},
			newPassword:{// 新密码
				validators:{
					notEmpty:{
						message:'输入不能为空'
					},
					stringLength:{
						min:6,
						max:16,
						message:'密码长度为6~16位'
					},
					callback:{}
				}
			},
			newPassword_re:{// 重复新密码
				validators:{
					notEmpty:{
						message:'输入不能为空'
					},
					identical:{
						field:'newPassword',
						message:'两次密码不一致'
					}
				}
			}
		}
	})
	.on('success.form.bv',function(e){
		// 禁用默认表单提交
		e.preventDefault();

		// 获取 form 实例
		var $form = $(e.target);
		// 获取 bootstrapValidator 实例
		var bv = $form.data('bootstrapValidator');

		var userID = $('#userID').html();
		var oldPassword = $('#oldPassword').val();
		var newPassword = $('#newPassword').val();
		var rePassword = $('#newPassword_re').val();



		// 将数据通过 AJAX 发送到后端
		$.ajax({
			type: "POST",
			url:"./qmm",
			data:{
				"userID" : userID,
				"oldPassword" : oldPassword,
				"newPassword" : newPassword,
				"rePassword" : rePassword
			},
			success:function(massge){


				if(massge == "passwordError" || massge=="passwordUnmatched"){
					var errorMessage;
					if(massge == "passwordError"){
						errorMessage = "密码错误";
						field = "oldPassword"
					}else if(massge == "passwordUnmatched"){
						errorMessage = "密码不一致";
						field = "newPassword"
					}

					$("#oldPassword").val("");
					$("#newPassword").val("");
					$("#newPassword_re").val("");
					bv.updateMessage(field,'callback',errorMessage);
					bv.updateStatus(field,'INVALID','callback');
				}else if(massge=="passwordSuccsee"){
					// 否则更新成功，弹出模态框并清空表单
					$('#passwordEditSuccess').modal('show');
					$('#reset').trigger("click");
					$('#form').bootstrapValidator("resetForm",true); 
				}

			},
			error:function(response){
				//window.location.href = "./";
				location.reload();
			}
		});

	})
}

function datePickerInit(){
	$('.form_date').datetimepicker({
		format:'yyyy-mm-dd',
		language : 'zh-CN',
		endDate : new Date(),
		weekStart : 1,
		todayBtn : 1,
		autoClose : 1,
		todayHighlight : 1,
		startView : 2,
		forceParse : 0,
		minView:2
	});
}

function chushihua(){
	var user_Id="0416160325";
	$.ajax({
		type:"POST",
		url:"./qmm1",
		data:{user_Id:user_Id},
		statusCode : {
			404 : function() {
				alert("404");
			},
			500 : function() {
				alert("500");
			}
		},
		success : function(massge, Status) {
			json=eval(massge);
			userOperationRecordTableInit();
		} 
	});
}

//表格初始化
function userOperationRecordTableInit(){
	$('#userOperationRecordTable').bootstrapTable({
		columns:[{
			field : 'id',
			title : '课程编号'
		},{
			field : 'userID',
			title : '课程名称'
		},{
			field : 'userName',
			title : '教师姓名'
		},{
			field : 'operationName',
			title : '选取情况'
		},{
			field : 'operationTime',
			title : '时间'
		},{
			field : 'resultNumber',
			title : '剩余可选取数量'
		}],
		data:json,
		sortable: false,   
		pageList : [ 5,10,20],
		pageSize : 10,
		sidePagination: "client",  
		clickToSelect : true,
		pagination : true,
	});

}
//表格刷新
//function tableRefresh() {
//
//	$('#userOperationRecordTable').bootstrapTable('refresh', {
//		query : {}
//	});
//}

//鍒嗛〉鏌ヨ鍙傛暟
//function queryParams(params) {
//	var temp = {
//			limit : params.limit,
//			offset : params.offset,
//			userID :  ,
//			startDate : search_start_date,
//			endDate : search_end_date
//	}
//	return temp;
//}

//鏌ヨ鎿嶄綔
//function searchActionInit(){
//	$('#search_button').click(function(){
//		search_user_id = $('#user_id').val();
//		search_start_date = $('#start_date').val();
//		search_end_date = $('#end_date').val();
//		tableRefresh();
//	})
//}
function myonclick(){
	var user_Id="0416160327";
	$.ajax({
		type:"POST",
		url:"./qmm2",
		data:{user_Id:user_Id},
		statusCode : {
			404 : function() {
				alert("404");
			},
			500 : function() {
				alert("500");
			}
		},
		success : function(massge, Status) {
			json2=eval(massge);
			$('#userOperationRecordTable').bootstrapTable('load',json2);
		} 
	});
}

function myclick() {

	document.getElementById('panel').innerHTML=`

		<div class="panel panel-default">
		<ol class="breadcrumb">
		<li>查询</li>
		</ol>
		<div class="panel-body">
		<div class="row">
		<div class="col-md-3">
		<form action="" class="form-inline">
		<div class="form-group">
		<label class="form-label">用户ID</label>
		<input type="text" id="user_id" class="form-control" placeholder="用户ID" style="width:50%">
		</div>
		</form>
		</div>
		<div class="col-md-7">
		<form action="" class="form-inline">
		<label class="form-label">日期范围</label>
		<input class="form_date form-control" id="start_date" placeholder="开始日期">
		<label class="form-label">&nbsp;&nbsp;-&nbsp;&nbsp;</label>
		<input class="form_date form-control" id="end_date" placeholder="结束日期">
		</form>
		</div>
		<div class="col-md-2">
		<button class="btn btn-success" id="search_button" onclick="myonclick()">
		<span class="glyphicon glyphicon-search"></span> <span>未通过查询</span>
		</button>
		</div>
		</div>
		<div class="row" style="margin-top:25px">
		<div class="col-md-12">
		<table class="table table-striped" id="userOperationRecordTable"></table>
		</div>
		</div>
		</div>
		</div>

		`
		datePickerInit();
	chushihua();
	searchActionInit();
}


function improtantkids() {
	document.getElementById('panel').innerHTML=`
		<div class="panel panel-default">
		<ol class="breadcrumb">
		<li>课程详情</li>
		</ol>
		<div class="panel-body">
		<div class="row">
		<div class="col-md-1 col-sm-2">
		<div class="btn-group">
		<button class="btn btn-default dropdown-toggle"
		data-toggle="dropdown">
		<span id="search_type">查询方式</span> <span class="caret"></span>
		</button>
		<ul class="dropdown-menu" role="menu">
		<li><a href="#" class="dropOption">所有</a></li>
		<li><a href="#" class="dropOption">课程ID</a></li>
		<li><a href="#" class="dropOption">课程名称</a></li>	
		<li><a href="#" class="dropOption">选取情况</a></li>
		</ul>
		</div>
		</div>
		<div class="col-md-9 col-sm-9">
		<div>
		<div class="col-md-3 col-sm-3">
		<input id="search_input_type" type="text" class="form-control"
		placeholder="所有">
		</div>
		<div class="col-md-2 col-sm-2">
		<button id="search_button" class="btn btn-success">
		<span class="glyphicon glyphicon-search"></span> <span>查询</span>
		</button>
		</div>
		</div>
		</div>
		</div>



		<div class="row" style="margin-top: 15px">
		<div class="col-md-12">
		<table id="storageList" class="table table-striped"></table>
		</div>
		</div>
		</div>
		</div>

		<!-- 导出库存信息模态框 -->

		<!-- 详细的库存模态框 -->
		<div id="detail_modal" class="modal fade" table-index="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true"
		data-backdrop="static">
		<div class="modal-dialog">
		<div class="modal-content">
		<div class="modal-header">
		<button class="close" type="button" data-dismiss="modal"
		aria-hidden="true">&times;</button>
		<h4 class="modal-title" id="myModalLabel">课程信息</h4>
		</div>
		<div class="modal-body">
		<!-- 模态框的内容 -->
		<div class="row">
		<div class="col-md-12">
		<form class="form-horizontal" role="form" id="storage_detail"
		style="margin-top: 25px">
		<div class="row">
		<div class="col-md-6 col-sm-6">
		<div class="form-group">
		<label for="" class="control-label col-md-6 col-sm-6"> <span>课程ID：</span>
		</label>
		<div class="col-md-4 col-sm-4">
		<p id="storage_goodsID" class="form-control-static"></p>
		</div>
		</div>
		<div class="form-group">
		<label for="" class="control-label col-md-6 col-sm-6"> <span>课程名称：</span>
		</label>
		<div class="col-md-4 col-sm-4">
		<p id="storage_goodsName" class="form-control-static"></p>
		</div>
		</div>
		<div class="form-group">
		<label for="" class="control-label col-md-6 col-sm-6"> <span>课程教师：</span>
		</label>
		<div class="col-md-4 col-sm-4">
		<p id="storage_goodsType" class="form-control-static"></p>
		</div>
		</div>
		<div class="form-group">
		<label for="" class="control-label col-md-6 col-sm-6"> <span>选取情况：</span>
		</label>
		<div class="col-md-4 col-sm-4">
		<p id="storage_goodsSize" class="form-control-static"></p>
		</div>
		</div>
		</div>
		<div class="col-md-6 col-sm-6">
		<div class="form-group">
		<label for="" class="control-label col-md-6 col-sm-6"> <span>上课时间：</span>
		</label>
		<div class="col-md-4 col-sm-4">
		<p id="storage_goodsValue" class="form-control-static"></p>
		</div>
		</div>
		<div class="form-group">
		<label for="" class="control-label col-md-6 col-sm-6"> <span>上课地点：</span>
		</label>
		<div class="col-md-4 col-sm-4">
		<p id="storage_repositoryBelong" class="form-control-static"></p>
		</div>
		</div>
		<div class="form-group">
		<label for="" class="control-label col-md-6 col-sm-6"> <span>库存数量：</span>
		</label>
		<div class="col-md-4 col-sm-4">
		<p id="storage_number" class="form-control-static"></p>
		</div>
		</div>
		</div>
		</div>
		</form>
		</div>
		</div>
		</div>
		<div class="modal-footer">
		<button class="btn btn-default" type="button" data-dismiss="modal">
		<span>关闭</span>
		</button>
		</div>
		</div>
		</div>
		</div>
		`

		optionAction();
	searchAction();
	storageListInit();


}

function infoModal(type, msg) {
	$('#info_success').removeClass("hide");
	$('#info_error').removeClass("hide");
	if (type == "success") {
		$('#info_error').addClass("hide");
	} else if (type == "error") {
		$('#info_success').addClass("hide");
	}
	$('#info_content').text(msg);
	$('#info_modal').modal("show");
}

function optionAction() {
	$(".dropOption").click(function() {
		var type = $(this).text();
		$("#search_input").val("");
		if (type == "所有") {
			$("#search_input_type").attr("readOnly", "true");
			search_type_storage = "c_all";
		} else if (type == "课程ID") {
			$("#search_input_type").removeAttr("readOnly");
			search_type_storage = "c_id";
		} else if (type == "课程名称") {
			$("#search_input_type").removeAttr("readOnly");
			search_type_storage = "c_name";
		} else if(type = "选取情况"){
			$("#search_input_type").removeAttr("readOnly");
			search_type_storage = "c_stat";
		}else {
			$("#search_input_type").removeAttr("readOnly");
		}

		$("#search_type").text(type);
		$("#search_input_type").attr("placeholder", type);
	})
}

//搜索动作
function searchAction() {
	$('#search_button').click(function() {
		
		search_keyWord = $('#search_input_type').val();
		$.ajax({
			type: "POST",
			url:"./qmm4",
			data:{
				"key1":search_type_storage,
				"key2":search_keyWord
			},
			success:function(massge){
				json3=eval(massge);
				
				$('#storageList').bootstrapTable('load',json3);

			}
			
		});
		
	})
}

//分页查询参数
function queryParams(params) {
	var temp = {
			limit : params.limit,
			offset : params.offset,
			searchType : search_type_storage,
			keyword : search_keyWord
	}
	return temp;
}

//表格初始化
function storageListInit() {
	var act="0416160325";
	$.ajax({
		type: "POST",
		url:"./qmm3",
		data:{
			"key1":act
		},
		success:function(massge){
			json1=eval(massge);
			$('#storageList')
			.bootstrapTable(
					{
						columns : [
							{
								field : 'c_id',
								title : '课程ID'
									//sortable: true
							},
							{
								field : 'c_name',
								title : '课程名称'
							},                  
							{
								field : 'goodsSize',
								title : '货物尺寸',
								visible : false
							},

							{
								field : 'repositoryID',
								title : '仓库ID',
								visible : false
							},
							{
								field : 'c_number',
								title : '剩余可选取'
							},
							{
								field : 'operation',
								title : '操作',
								formatter : function(value, row, index) {
									var s = '<button class="btn btn-info btn-sm edit"><span>详细</span> </button>';
									var fun = '';
									return s;
								},
								events : {
									// 操作列中编辑按钮的动作
									'click .edit' : function(e, value,
											row, index) {
										rowDetailOperation(row);
									},
									
								}
							} ],
							data: json1,
							sortable: false,   
							pageList : [ 1,5,10],
							pageSize : 10,
							sidePagination: "client",  
							clickToSelect : true,
							pagination : true,
							
					});
		}
	});
	

}

//表格刷新
function tableRefresh() {
	$('#storageList').bootstrapTable('load',json3);
}

//行编辑操作
function rowDetailOperation(row) {
	$('#detail_modal').modal("show");

	// load info
	$('#storage_goodsID').text(row.c_id);
	$('#storage_goodsName').text(row.c_name);
	$('#storage_goodsType').text(row.c_teacher);
	$('#storage_goodsSize').text(row.c_stat);
	$('#storage_goodsValue').text(row.c_time);
	$('#storage_repositoryBelong').text(row.c_room);
	$('#storage_number').text(row.c_number);
}