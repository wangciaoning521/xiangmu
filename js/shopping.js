
$("#add").click(function(){
	var count = $("#txt").val();
	count++;
	$("#txt").val(count);
})

$("#btn").click(function(){

	var count = $("#txt").val();
	count--;
	if(count<=1){
		count=1;
	}
	$("#txt").val(count);
})


// $(".w1").click(function(){
// 	$(this).css({"border":"1px solid #ed6c00"});
// })
// $(".w2").click(function(){
// 	$(this).css({"border":"1px solid #ed6c00"});
// })
for(let i=0;i<$("#sd6 div").length;i++){
	
		$(".w"+i).click(function(){
			$("#sd6 div").css({"border":"1px solid #eeeeee"});
			$(".w"+i).fadeIn(1200,function(){
				$(this).css({"border":"1px solid #ed6c00"});
			})
	})
}

for(let i=0;i<$("#sd3 div").length;i++){
	$(".sd"+i).click(function(){
		$("#sd3 div").css({"border":"1px solid #eeeeee"});
		$(this).css({"border":"1px solid #ed6c00"});
	})
}