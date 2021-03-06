
$(function(){
	initNoSysRoleList();
	initHasSysRoleList();
	$.parser.parse();//重新加载样式
	initPagePermission(); //权限初始化
});

function initNoSysRoleList(){
	var suId=$('#suId').val();
	var myBasePath=basePath+'noSysRoleList';
	
	$('#noSysRoleList').empty();
	
	$.post(myBasePath,{ suId: suId },function (dt){
		dt=JSON.parse(dt);
		$.each(dt,function (index,el){
			$('#noSysRoleList').append('<option value="'+el.srId+'">'+el.srName+'</option>');
		});
	});
	
}

function initHasSysRoleList(){
	var suId=$('#suId').val();
	var myBasePath=basePath+'hasSysRoleList';
	
	$('#srIds').empty();
	
	$.post(myBasePath,{ suId: suId },function (dt){
		dt=JSON.parse(dt);
		$.each(dt,function (index,el){
			$('#srIds').append('<option value="'+el.srId+'">'+el.srName+'</option>');
		});
	});
}

function submitForm(){
	var suId=$('#suId').val();
	var srIds=getSelectValues('srIds');
	
	var myBasePath=$('#fm').attr("action");
	$.post(myBasePath,
			{
		suId: suId,
		srIds:srIds
		    },function (dt){
		    	toastr.info(dt, '添加结果');
		    	}
		    );
}

/**
 * 初始化权限,将没权限的按钮移除
 */
function initPagePermission(){
	isExistPermission('userRoleProc:post','saveBt');
}