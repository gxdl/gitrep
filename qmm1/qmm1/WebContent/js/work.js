function passwordModifaction() {

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


function systemLog(){
	document.getElementById('panel').innerHTML=`

<div class="panel panel-default">
    <ol class="breadcrumb">
        <li>系统日志</li>
    </ol>
    <div class="panel-body">
        <div class="row">
            <div class="col-md-3">
                <form action="" class="form-inline">
                    <div class="form-group">
                        <label class="form-label">用户ID：</label>
                        <input type="text" id="user_id" class="form-control" placeholder="指定用户ID" style="width:50%">
                    </div>
                </form>
            </div>
            <div class="col-md-7">
                <form action="" class="form-inline">
                    <label class="form-label">日期范围：</label>
                    <input class="form_date form-control" id="start_date" placeholder="起始日期">
                    <label class="form-label">&nbsp;&nbsp;-&nbsp;&nbsp;</label>
                    <input class="form_date form-control" id="end_date" placeholder="结束日期">
                </form>
            </div>
            <div class="col-md-2">
                <button class="btn btn-success" id="search_button">
                    <span class="glyphicon glyphicon-search"></span> <span>查询</span>
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
        userOperationRecordTableInit();
        searchActionInit();

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

	// 表格初始化
	function userOperationRecordTableInit(){
	    $('#userOperationRecordTable').bootstrapTable({
	        columns:[{
	            field : 'id',
	            title : '记录ID'
	        },{
	            field : 'userID',
	            title : '用户ID'
	        },{
	            field : 'userName',
	            title : '用户名'
	        },{
	            field : 'operationName',
	            title : '操作'
	        },{
	            field : 'operationTime',
	            title : '时间'
	        },{
	            field : 'operationResult',
	            title : '操作结果'
	        }],
	        url : 'systemLog/getUserOperationRecords',
	        method : 'GET',
	        queryParams : queryParams,
            sidePagination : "server",
            dataType : 'json',
            pagination : true,
            pageNumber : 1,
            pageSize : 5,
            pageList : [ 5, 10, 25, 50, 100 ],
            clickToSelect : true
	    });
	}

	// 表格刷新
	function tableRefresh() {
		$('#userOperationRecordTable').bootstrapTable('refresh', {
			query : {}
		});
	}

	// 分页查询参数
	function queryParams(params) {
		var temp = {
			limit : params.limit,
			offset : params.offset,
			userID : search_user_id,
			startDate : search_start_date,
			endDate : search_end_date
		}
		return temp;
	}

    // 查询操作
    function searchActionInit(){
        $('#search_button').click(function(){
            search_user_id = $('#user_id').val();
            search_start_date = $('#start_date').val();
            search_end_date = $('#end_date').val();
            tableRefresh();
        })
    }
   

   


function accessLog(){
	document.getElementById('panel').innerHTML=`
	<div class="panel panel-default">
    <ol class="breadcrumb">
        <li>系统登陆日志</li>
    </ol>
    <div class="panel-body">
        <div class="row">
            <div class="col-md-4">
                <form action="" class="form-inline">
                    <div class="form-group">
                        <label class="form-label">用户ID：</label>
                        <input type="text" id="user_id" class="form-control" placeholder="指定用户ID" style="width:50%">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <form action="" class="form-inline">
                    <label class="form-label">记录过滤：</label>
                    <select name="" id="access_type" class="form-control">
                        <option value="all">显示所有</option>
                        <option value="loginOnly">仅显示登入记录</option>
                        <option value="logoutOnly">仅显示登出记录</option>
                    </select>
                </form>
            </div>
            <div class="col-md-4">
                <button class="btn btn-success" id="search_button">
                    <span class="glyphicon glyphicon-search"></span> <span>查询</span>
                </button>
            </div>
        </div>
        <div class="row" style="margin-top:20px">
            <div class="col-md-7">
                <form action="" class="form-inline">
                    <label class="form-label">日期范围：</label>
                    <input class="form_date form-control" id="start_date" placeholder="起始日期">
                    <label class="form-label">&nbsp;&nbsp;-&nbsp;&nbsp;</label>
                    <input class="form_date form-control" id="end_date" placeholder="结束日期">
                </form>
            </div>
        </div>
        <div class="row" style="margin-top:25px">
            <div class="col-md-12">
                <table class="table table-striped" id="accessRecordDOS"></table>
            </div>
        </div>
    </div>
</div>
	`
}

function wait(){
	document.getElementById('panel').innerHTML=`
	<h1>待开发！</h1>
	
	`
}
