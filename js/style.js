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
	$("td:contains(编辑)").css("color","blue");
	$("td:contains(已发布)").css("color","green");
	$("td:contains(投放中)").css("color","green");
	$("td:contains(等待审核)").css("color","gray");
	$("td:contains(投放结束)").css("color","gray");
	$("td:contains(审核未通过)").css("color","red");
	$("td:contains(撤销发布)").css("color","red");
	$("td:contains(被退回)").css("color","red");

	/*投放和等待审核中不可操作*/
	$("td:contains(投放中)").siblings().children("a").parent().html('<span class="text_gray">不可操作</span>');

	/* 新增 */
	$("#add").click(function(){
		$(".alert_bg").css("display","block");
		$(".alert").fadeIn("fast");
	});
	$("td a").click(function(){
		var imgSrc=$(this).parent().prev().prev().prev().children().attr("src");
		if($(this).text()=="修改" && $(".alert_header").text()=="广告物料"){
			$("#img_display").children().attr("src",imgSrc);
			$(".alert_bg").css("display","block");
			$(".alert").not("#alert_2").fadeIn("fast");}
	});
	
	$("td a").click(function(){
		if($(this).text()=="紧急电话"){
			$(".alert_bg").css("display","block");
			$("#alert_2").fadeIn("fast");}
	});
	$(".btn_center a").click(function(){
		if($(this).text()=="保存"){
			$("form").submit();
			$(".alert").fadeOut("fast");
			$(".alert_bg").css("display","none");}
	});
	$(".btn_center a").click(function(){
		if($(this).text()=="保存并提交审核"){
			//预留位置，与“保存”区别对待
			$("form").submit();
			$(".alert").fadeOut("fast");
			$(".alert_bg").css("display","none");}
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
		$("#img_display img").attr("src","images/u244.png");//修改此路径
		$("#img_display").append('<span class="text_gray tar wp100">[ <a id="img_display_delete" href="#" class="text_gray">删除</a> ]</span>');
	});
	$("#img_display a").click(function(){
		alert("111");
		$("#img_display img").remove();
	});

	/* 确认框 */

	jQuery.comfirmWindow = function(tittle,msg,footer){	
		$(".alert_bg").show();
		$(".comfirm").fadeIn("fast");
		$("#comfirm_msg").append(msg);
		$(".comfirm_header").append(tittle);
		$("#comfirm_footer").append(footer);
	};
	jQuery.comfirmWindowClose = function(tittle,msg){
		var tittle=tittle;
		var msg=msg;
		$("#comfirm_cencer").click(function(){	
			$(".comfirm").fadeOut("fast");
			$(".alert_bg").css("display","none");
			$("#comfirm_msg").html('');
			$(".comfirm_header").html('');
			$("#comfirm_footer").html('');
		});
		$("#comfirm_comfirm").click(function(){	
			$(".comfirm").fadeOut("fast");
			$(".alert_bg").css("display","none");
			$("form").submit(); //提交表单.成功后下面显示提示
			$(".comfirm").queue(function(){
				$("#comfirm_msg").html('');
				$(".comfirm_header").html('');
				$("#comfirm_footer").html('');
				$.comfirmWindow(tittle,msg,'<a href="#" class="btn" id="comfirm_cencer2">知道了</a>');
				$("#comfirm_cencer2").click(function(){	
					$(".comfirm").fadeOut("fast");
					$(".alert_bg").css("display","none");
					$("#comfirm_msg").html('');
					$(".comfirm_header").html('');
					$("#comfirm_footer").html('');
				});
				$(this).dequeue();
			});	
		});
	};

});