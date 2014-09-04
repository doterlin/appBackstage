$(document).ready(function(){

	/* 确认框方法*/
	jQuery.comfirmWindow = function(tittle,msg,footer){	
		$(".alert_bg").show();
		$(".comfirm").fadeIn("fast");
		$("#comfirm_msg").append(msg);
		$(".comfirm_header").append(tittle);
		$("#comfirm_footer").append(footer);
	};
	jQuery.comfirmWindowClose = function(tittle,msg){

		$("#comfirm_cencer").click(function(){	
			$(".comfirm").fadeOut("fast");
			$(".alert_bg").css("display","none");
			$("#comfirm_msg").html('');
			$(".comfirm_header").html('');
			$("#comfirm_footer").html('');
		});	/* 确认框 */
		$("#comfirm_comfirm").click(function(){	
					$(".comfirm").fadeOut("fast");
					$(".alert_bg").css("display","none");
					$("form").submit(); //提交表单.成功后下面显示提示
					$(".comfirm").queue(function(){
						$("#comfirm_msg").html('');
						$(".comfirm_header").html('');
						$("#comfirm_footer").html('');
						if(tittle!=undefined){ //若未定义参数则再次弾框
							$.comfirmWindow(tittle,msg,'<a href="#" class="btn" id="comfirm_cencer2">知道了</a>');
							$("#comfirm_cencer2").click(function(){	
								$(".comfirm").fadeOut("fast");
								$(".alert_bg").css("display","none");
								$("#comfirm_msg").html('');
								$(".comfirm_header").html('');
								$("#comfirm_footer").html('');
							});
						}
						$(this).dequeue();
					});	
				});
	};
	/* 表格条纹 */
	$("tbody>tr:odd").children().css("background-color","#EDEDED");
	/* 按钮效果 */
	$(".btn").mouseover(function(){
		$(this).removeClass("btn").addClass("btn_hover");
	}).mouseout(function(){
		$(this).removeClass("btn_hover").addClass("btn");
	});

	/*全局添加comfirm的html*/
	var comfirm_html='<div class="alert_bg" style="display: none;"></div><div class="comfirm" style="display: none;" ><div class="comfirm_header"></div><div class="comfirm_content"><form><div class="input_div" id="comfirm_msg" style="padding-top:0;"></div><div class="btn_center mt20" id="comfirm_footer"></div></form></div></div>';
	$("body").append(comfirm_html);

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

	/* 投放和等待审核中不可操作 */
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
			//保存并提交审核，审核
			$.comfirmWindow("提示","确认将该广告物料提交管理员审核？",'<a href="#" class="btn" id="comfirm_cencer">取消</a><a href="#" id="comfirm_comfirm" class="mr10 btn">确认</a>');
			$.comfirmWindowClose();$(".alert").fadeOut("fast");
		};
	});
	$("#cancel").click(function(){ //取消
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


});