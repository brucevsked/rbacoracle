
$(function(){
    $.parser.parse();//重新加载样式
	initPagePermission(); //权限初始化
    $('#carrierName').textbox('textbox').focus(); 
});

function submitForm(){
	if(!$("#fm").form('validate')){
		return false;
    }
	
	var carrierId=$('#carrierId').val();
	var carrierName=$('#carrierName').val();
	var carrierNick=$('#carrierNick').val();
	var carrierShortName=$('#carrierShortName').val();
	var officialWebSite=$('#officialWebSite').val();
	var hotline=$('#hotline').val();
	
	var myBasePath=$('#fm').attr("action");
	
	$.post(myBasePath,
			{
		carrierId:carrierId,
		carrierName: carrierName,
		carrierNick:carrierNick,
		carrierShortName:carrierShortName,
		officialWebSite:officialWebSite,
		hotline:hotline
		
		    },function (dt){
		    	toastr.info(dt, '修改结果');
		    	}
		    );
}

/**
 * 初始化权限,将没权限的按钮移除
 */
function initPagePermission(){
	isExistPermission('carrierEditProc:post','editBt');
}