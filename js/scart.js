jQuery.fn.extend({
	"checkAll":function(isChecked){
		this.each(function(){
			this.checked=isChecked;
		})
	},
	"uncheck":function(){
		this.each(function(){
			this.checked = !this.checked;
		})
	},
	"checkRelation":function($sub){
		//全选
		$parent = this;
		//this还是全选
		this.click(function(){
			$sub.checkAll($parent[0].checked);
		});
		$sub.click(function(){
			let isChecked = true;
			$sub.each(function(){
				if(this.checked==false){
					isChecked=false;
				}
			})
			$parent[0].checked = isChecked;
		});
	}
});
$(function(){
	$(".c").checkRelation($(".p1 :checkbox"));
})

// $("#all").click(function(){
// 	$("input[type='checkbox']").prop({
// 	  checked: true;
// 	});

	// $("input:checked").each(function(){
	// 	$(this).prop({"checked":true});
	// })
// })
// $(function(){
// 	$(".c").checkAll($(".c1"));
// })
$(".s2 .add").each(function(i){
	$(this).click(function(){
		var count = $(".txt").eq(i).val();
		count++;
		$(".txt").eq(i).val(count);
		var price=$(".price").eq(i).text();
		var money=price*count;
		$(".p7").eq(i).val(money);
	})
})

$(".s2 .cut").each(function(i){
	$(this).click(function(){
		var count = $(".txt").eq(i).val();
		count--;
		if(count<=1){
			count=1;
		}
		$(".txt").eq(i).val(count);
		var price=$(".price").eq(i).text();
		var money=price*count;
		$(".p7").eq(i).val(money);
	})
})

// $(".s2 .add").click(function(){
// 	let index = $(this).index();
// 	var count = $(".txt").eq(index).val();
// 	count++;
// 	$(".txt").eq(index).val(count);
// 	var price=$(".price").eq(index).text();
// 	var money=price*count;
// 	$(".p7").eq(index).val(money);
// })
