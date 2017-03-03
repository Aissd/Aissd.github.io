var chosed_checkbox = [];
$(function(){
	// 点击单选框
	$(".label-radio").on("click", '.radio', function(){
		// 清除所有tick图标
		$(".label-radio").removeClass("label-item-active").find("em").removeClass("icon-tick");
		// 给当前添加tick图标
		$(this).parent().addClass("label-item-active").find("em").addClass("icon-tick");
	});

	// 点击确认单选框按钮
	$("#btn-radio").bind("click", function(){
		var val = $('input:radio[name="direction"]:checked').val();
		if(!val) return;
		console.log(val);
	});

	// 点击选框
	$(".label-checkbox").on("click", '.checkbox', function(){
		// 给当前添加tick图标
		$(this).parent().toggleClass("label-item-active").find("em").toggleClass("icon-tick");
	});

	// 点击确认复选框按钮
	$("#btn-checkbox").bind("click", function(){
		var checkboxs = $(".checkbox");
		for(var i = 0, len = checkboxs.length; i < len; i++) {
			console.log(checkboxs.attr('checked'));
			// console.log(checkboxs.attr('checked') === true);
		}
		// var val = $('input:checkbox[name="flower"]:checked').val();
		// if(!val) return;
		// console.log(val);
	});
});