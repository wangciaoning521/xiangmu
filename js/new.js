function none(box){
	window.onmousemove=function(event){
		let evt=event||window.event;
		//鼠标距离页面的距离
		let left=evt.pageX;
		let top=evt.pageY;
		//Dom元素
		let b=document.getElementById(box);
		//盒子距离页面的距离
		let boxLeft=b.offsetLeft;//盒子左边
		let boxTop=b.offsetTop;//盒子上边
		let boxRight=boxLeft+$("#box").width();//盒子右边
		let boxBottom=boxTop+$("#box").height();//盒子下边
		//判断边界
		if(left<boxLeft||left>boxRight){
			$("#box").css({"display":"none"});
		}else if(top<boxTop||top>boxBottom){
			$("#box").css({"display":"none"});
		}
	}
	
}