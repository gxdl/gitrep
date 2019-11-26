function tableSearch(){
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
        dataSerach();
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

function dataSerach(){
	var str="aa";
	
	
	
	$.ajax({
		type:"post",
		
		url:"./qmm2",
		
		data:{key1:str},
		
		success:function(data,Status){
			
			var g = eval(data);
			
			$('#userOperationRecordTable').bootstrapTable({
				columns:[{
		            field : 'id',
		            title : '学生编号'
		        },{
		            field : 'studentName',
		            title : '学生姓名'
		        },{
		            field : 'teacherName',
		            title : '老师姓名'
		        },{
		            field : 'class1',
		            title : '选课情况'
		        },{
		            field : 'time',
		            title : '时间'
		        },{
		            field : 'resultNumber',
		            title : '剩余数量'
		        }],
		        data:g,
		        sortable: false,   
		        pageList : [ 1,5,10],
		        pageSize : 10,
		        sidePagination: "client",  
		        clickToSelect : true,
		        pagination : true,
			});
		
		}
		
	})
	
		
	
	
	
}


//function queryParams(params) {
//	var temp = {
//		limit : params.limit,
//		offset : params.offset,
//		userID : search_user_id,
//		startDate : search_start_date,
//		endDate : search_end_date
//	}
//	return temp;
//}

 function searchActionInit(){
	
	var user_id= $('#user_id');
	 
        $('#search_button').click(function(){
        	
        	
        	$.ajax({
        		type:"POST",
        		
        		url:"./ajax1",
        		
        		data:{user_Id:user_id.val()},
        		statusCode : {
        			404 : function() {
        				alert("404");
        			},
        			500 : function() {
        				alert("500");
        			}
        		},
        		success : function(massge, Status) {
        			
        			var json2=eval(massge);
        			$('#userOperationRecordTable').bootstrapTable('load',json2);
        		} 
        		
        	});
        
            
        })
    }


//function tableRefresh() {
//		$('#userOperationRecordTable').bootstrapTable('refresh', {
//			query : {}
//		});
//	}

 
 
 function getOrDelete(){
		document.getElementById('panel').innerHTML=`
		
		<div class="col-md-12">
		<h1>选课列表</h1>
	        <table class="table table-striped" id="getOrDeleteTable"></table>
	    </div>

	    <div class="row">

	    	<div><button class="but col-md-3" id="getClass1">选课</button></div>


			
			<div><button class="but col-md-3" id="deleteClass1">退课</button></div>
	    </div>

		<div class="col-md-12">
			<h1>你的课程</h1>
	        <table class="table table-striped" id="yourTable"></table>
	    </div>

		`
		getTableData();
		yourTableData();
		deleteTable();
	}


	function getTableData(){
		var zz = "zz";
		$.ajax({
			
			type : "post",
			
			url : "./qmm6",
				
			data:{key6:zz},
			
			success:function(data,staus){
				
				var zzz=eval(data);
				
				$('#getOrDeleteTable').bootstrapTable({

					data:zzz,
			        sortable: false, //是否排序  
			        pageList : [ 1,5,10],
			        pageSize : 10,
			        sidePagination: "client",  
			        clickToSelect : true,
			        pagination : true,
			        singleSelect: true,
			        checkboxHeader: true,
			        showColumns: true,

			        columns:[{
			            field : 'class1',
			            title : '课程'
			        },{
			            field : 'teacherName',
			            title : '老师姓名'
			        },{
			            field : 'place1',
			            title : '上课地点'
			        },{
			            field : 'time',
			            title : '上课时间'
			        },{
			        
			        	checkbox : true,
			        	visible : true
			        }],

				});
				
			}
			
		})
		
		
		
		var $getClass1 =$('#getClass1');
		
		$getClass1.click(function(){
			var data=JSON.stringify($('#getOrDeleteTable').bootstrapTable('getSelections'));
			alert("success");
			
			$.ajax({
				
				type : "post",
				
				url : "./qmm7",
				
				data : {key7:data},
				
				success:function(data){
					console.log(data);
				}
				
				
			});
			
		});
		
	}

 
 function yourTableData(){
	 
	 var zz = "str";
	
		$.ajax({
			
			type : "post",
			
			url : "./qmm8",
			
			data : {key8:zz},
			
			success:function(data){
				var json=eval(data);
				
				$('#yourTable').bootstrapTable({

					data:json,
			        sortable: false, //是否排序  
			        pageList : [ 1,5,10],
			        pageSize : 10,
			        sidePagination: "client",  
			        clickToSelect : true,
			        pagination : true,
			        singleSelect: true,
			        checkboxHeader: true,
			        showColumns: true,

			        columns:[{
			            field : 'class1',
			            title : '课程'
			        },{
			            field : 'teacherName',
			            title : '老师姓名'
			        },{
			            field : 'place1',
			            title : '上课地点'
			        },{
			            field : 'time',
			            title : '上课时间'
			        },{
			        	checkbox : true,
			        	visible : true
			        }
			        ],

				});
			}
			
			
		});
	 
	 
	 
 }
 
 function deleteTable(){
	 
	 var $deleteClass1 =$('#deleteClass1');
		
		$deleteClass1.click(function(){
			var data=JSON.stringify($('#yourTable').bootstrapTable('getSelections'));
			alert("success");
			
			$.ajax({
				
				type : "post",
				
				url : "./qmm9",
				
				data : {key9:data},
				
				success:function(data){
					console.log(data);
				}
				
				
			});
			
		});
 }
 
 
 
 function importKits(){

		document.getElementById('panel').innerHTML=`
		<div class="panel panel-default">
		<ol class="breadcrumb">
			<li>学生信息管理</li>
		</ol>
		<div class="panel-body">
		<form action="qmm5" method="post" id="importForm">
			<div class="row">
			<div class="col-md-12"><span>学生编号 : </span><input type="text" id="id" name="id" placeholder="学生编号"/></div>
			<div class="col-md-12"><span>学生姓名 : </span><input type="text" id="studentName" name="studentName" placeholder="学生姓名"/></div>
			<div class="col-md-12"><span>教师姓名 : </span><input type="text" id="teacherName" name="teacherName" placeholder="教师姓名"/></div>
			<div class="col-md-12"><span>选课情况 : </span><input type="text" id="class1" name="class1" placeholder="选课情况"/></div>
			<div class="col-md-12"><span>选课时间 : </span><input type="text" id="time" name="time" placeholder="时间"/></div>
			<div class="col-md-12"><span>剩余数量 : </span><input type="text" id="resultNumber" name="resultNumber" placeholder="剩余数量"/></div>
			</div>	
			<div><button class="but" type="submit" onclick="importsuccess()" >导入</button></div>
		</form>	
			
		</div>


		`

			
	}

 function importsuccess(){
		alert("success");
		}
	

 
 function score(){
		document.getElementById('panel').innerHTML=`
		<div class = "panel panel-default">
			<div class="row" style="margin-top:25px">
	            <div class="col-md-12" style="float:left">
	                <table class="table table-striped" id="score_Table"></table>

	            </div>

	            
	        </div>
			<button id="getTableData" class="but">提交</button>
				
		</div>

		`
		score_TableInit();
	}

	function score_TableInit(){
		
		var str2 ="bb";
		
		$.ajax({
			type:"post",
			
			url:"./qmm3",
			
			data:{key2:str2},
			
			success:function(data,Staus){
				
				var gg = eval(data);
				
				$('#score_Table').bootstrapTable({
					columns:[
					{
			            field : 'c_Id',
			            title : '课程编号'
			        },{
			            field : 'c_Name',
			            title : '课程名'
			        },{
			            field : 't_Name',
			            title : '老师姓名'
			        },{
			        	field : 'score1',
			        	title : '评分'	
			        }
			        
			        ],
			        
			        data:gg,
			        sortable: false,   
			        pageList : [ 1,5,10],
			        pageSize : 10,
			        sidePagination: "client",  
			        clickToSelect : true,
			        pagination : true,
			        
			        onClickCell: function(field, value, row, $element) {
			            $element.attr('contenteditable', true);
			            $element.blur(function() {
			                let index = $element.parent().data('index');
			                let tdValue = $element.html();

			                saveData(index, field, tdValue);
			            })
			        }
			      
			        
				});
				
			}
			
			
		})
		
		
		
		
		
		
		

		var $getTableData = $('#getTableData');

		$getTableData.click(function() {
		    var data=JSON.stringify($('#score_Table').bootstrapTable('getData'));
		    alert("success");
			$.ajax({
				type : "post",
				
				url : "./qmm4",
				
				data:{key1:data} ,
				
				success:function(data){
					console.log(data);
				}
			});
		});	
		
	function saveData(index, field, value) {
	        $('#score_Table').bootstrapTable('updateCell', {
	            index: index,       //行索引
	            field: field,       //列名
	            value: value        //cell值
	        });
	}
	
	

}








	
	
	
	