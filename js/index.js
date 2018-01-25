var arr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
var ord=0;//的代表对当前 图片的序号，从0开始
var myTimer=null;

//初始化界面  首页加载时第一个的豆豆为红色
function initUI(){
	$("#box li:first").css({"background":"red"});
}

//事件处理程序
function initEvent(){
	//鼠标进入时停止
	$("#box").mouseenter(function(){
		stopPlay();
	});
	//鼠标离开时自动播放
	$("#box").mouseleave(function(){
		autoPlay();
	});

	//点击豆豆自动跳转
	$("#box li").click(function(){
		goImg($("#box li").index(this));
	});


}
//自动播放
function autoPlay(){
	myTimer=setInterval(function(){
		//记录进入时的图片序号
		let outOrd=ord;
		ord++
		if(ord>arr.length-1){
			ord=0;
		}
	//淡入淡出
	let $img=$("#box img");
	//淡入
	$img.eq(outOrd).animate({"opacity":0},2000);
	//淡出
	$img.eq(ord).animate({"opacity":1},2000);
	//改变豆豆的颜色
	$("#box li").eq(ord).css({"background":"red"}).siblings().css({"background":"orange"});
	},3000);
}
//停止播放
function stopPlay(){
	window.clearInterval(myTimer);
}
//指定图片自动跳转
function goImg(transOrd){
	let outOrd=ord;
	ord=transOrd;
	if(ord>arr.length-1){
		ord=0;
	}
	//淡入淡出
	let $img=$("#box img");
	//淡入
	$img.eq(outOrd).animate({"opacity":0},2000);
	//淡出
	$img.eq(ord).animate({"opacity":1},2000);
	//改变豆豆的颜色
	$("#box li").eq(ord).css({"background":"red"}).siblings().css({"background":"orange"});
}
//逻辑部分
$(function(){
	//初始化界面
	initUI();
	//绑定事件
	initEvent();
	//自动播放
	autoPlay();

	//滑过微信  为避免bug  用on绑定事件(事件委托)
	// $("#WeChat").on("mouseenter",function(){
	// 	$("#none").fadeIn();
	// });
	// $("#none").on("mouseleave",function(){
	// 	$("#none").fadeOut(200);
	// });
	$("#WeChat").mouseenter(function(){
		$("#none").css({"display":"block"});
	});
	$("#WeChat").mouseleave(function(){
		$("#none").css({"display":"none"});
	});

	//青橙VOGA系列
	// $("#first").mouseenter(function(){
	// 	$(this).css({"transform":"scale(1.04)","transition":".6s"});
	// })
	// $("#first").mouseleave(function(){
	// 	$(this).css({"transform":"scale(1)","transition":".6s"});
	// })
	// $(".q1").mouseenter(function(){
	// 		$("#first").animate({"left":"0px"},340);
	// 		$(".none").css({"display":"block","z-index":"99"});
	// 	});
		// $(".none div").animate({"left":"50px"},800);
		
	// $(".q1").mouseleave(function(){
	// 	iTimer=setTimeout(function(){
	// 		$(".none #first").css({"left":"150px"});
	// 		$(".none").css({"display":"none"});
	// 	},100);
	// });

	

});

$(function(){
	
	for(let i=0;i<$(".d1 ul li").length;i++){
		$(".d1 ul li").eq(i).mouseenter(function(){
			$(".none").css({"display":"block","z-index":"99"});
			$(".none .as").css({"display":"none"});
			$(".none .as"+i).css({"display":"block"});
			$(".none .as"+i+" .F1").animate({"left":"0px"},340);
			setTimeout(function(){
				$(".none .as"+i+" .F2").animate({"left":"150px"},340);
			},2000);
			
			
			// $(".none .as"+i+" .first").mouseenter(function(){
			// 	$(".none .as"+i+" .first").mouseenter(function(){
			// 		$(this).css({"transform":"scale(1.04)","transition":".6s"});
			// 	})
			// 	$(".none .as"+i+" .first").mouseleave(function(){
			// 		$(this).css({"transform":"scale(1)","transition":".6s"});
			// 	})
			// });
		});
		$(".d1 ul li").eq(i).mouseleave(function(){
			// iTimer=setTimeout(function(){
			// 	$(".none").css({"display":"none"});
			// },2000);
			$(".none").css({"display":"none"});
			// none("no1");
			$(".none .as"+i+" .F1").animate({"left":"150px"},340);
			$(".none .as"+i+" .F2").animate({"left":"350px"},340);
		});
	}
	// var num=0;
	// $(".none").children().each(function(i){
	// 	$(this).mouseenter(function(){
	// 		$(".none").children().css({display:"none"});
	// 		// $("#list span").eq(i).animate(function(){
	// 		// 	$("#list span").eq(i).css({"border-bottom":"2px solid #ed6c00"});
	// 		// },200);
	// 		$(".as"+i).css({"display":"block"});
	// 	})
	// })
})



window.onscroll=function(){
	var up=document.getElementById("up");
	var _top=document.body.scrollTop||document.documentElement.scrollTop;
	if(_top>=500){
		up.style.display="block";
		up.style.zIndex="99";
	}else{
		up.style.display="none";
	}
}

$(function(){
	$("#d5").click(function(){
    	$("#d4").css({"display":"none"});
    	$("#d3").css({"display":"none"});
    	$("#d2").css({"display":"none"}); 
    	$("#up").css({"height":"80px"});
    })
     $("#d5").dblclick(function(){
    	$("#d4").css({"display":"block"});
    	$("#d3").css({"display":"block"});
    	$("#d2").css({"display":"block"}); 
    	$("#up").css({"height":"160px"});
    })
})