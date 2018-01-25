// jQuery.fn.extend({
// 	"checkAll":function(){
// 		this.each(function(){
// 			this.checked=checked;
// 		})
// 	}
// })
$("#all").click(function(){
	$("input[type='checkbox']").prop({
	  checked: true;
	});

	// $("input:checked").each(function(){
	// 	$(this).prop({"checked":true});
	// })
})
// $(function(){
// 	$(".c").checkAll($(".c1"));
// })