$(document).ready(function(){

	/*表格条纹*/
	$("tbody>tr:odd").children().css("background-color","#EDEDED");
	/*按钮效果*/
	$(".btn").mouseover(function(){
		$(this).removeClass("btn").addClass("btn_hover");
	}).mouseout(function(){
		$(this).removeClass("btn_hover").addClass("btn");
	});
	/*状态颜色*/

	/*新增*/
	$("#add").click(function(){
		$(".alert_bg").css("display","block");
		$(".alert").fadeIn("fast");
	});
	$("td a").click(function(){
		if($(this).text()=="修改"){
			$(".alert_bg").css("display","block");
			$(".alert").fadeIn("fast");}
	});
	$("#cancel").click(function(){	
		$(".alert").fadeOut("fast");
		$(".alert_bg").css("display","none");
	});
	/*返回*/
});