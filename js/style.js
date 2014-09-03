$(document).ready(function(){

	/* 表格条纹 */
	$("tbody>tr:odd").children().css("background-color","#EDEDED");
	/* 按钮效果 */
	$(".btn").mouseover(function(){
		$(this).removeClass("btn").addClass("btn_hover");
	}).mouseout(function(){
		$(this).removeClass("btn_hover").addClass("btn");
	});
	/* 全选 */
	$("th :checkbox").change(function(){		
			$("tr :checkbox").attr("checked",this.checked);;
	});
	/* 状态颜色 */
	$("td:contains(已发布)").css("color","green");
	$("td:contains(等待审核)").css("color","gray");
	$("td:contains(审核未通过)").css("color","red");
	$("td:contains(撤销发布)").css("color","red");
	/* 新增 */
	$("#add").click(function(){
		$(".alert_bg").css("display","block");
		$(".alert").fadeIn("fast");
	});
	$("td a").click(function(){
		if($(this).text()=="修改"){
			$(".alert_bg").css("display","block");
			$(".alert").not("#alert_2").fadeIn("fast");}
	});
	$("td a").click(function(){
		if($(this).text()=="紧急电话"){
			$(".alert_bg").css("display","block");
			$("#alert_2").fadeIn("fast");}
	});
	$("#cancel").click(function(){	
		$(".alert").fadeOut("fast");
		$(".alert_bg").css("display","none");
	});
	$("#cancel_2").click(function(){	
		$(".alert").fadeOut("fast");
		$(".alert_bg").css("display","none");
	});
	/* 获取图片路径并显示，可选删除*/
	$("#img_upload").change(function(){
		$("#img_display img").attr("src","images/u244.png");//修改此路径显示图片
		$("#img_display").append('<span class="text_gray tar wp100">[ <a id="img_display_delete" href="#" class="text_gray">删除</a> ]</span>');
	});
	$("#img_display a").click(function(){
		alert("111");
		$("#img_display img").remove();
	})；
});