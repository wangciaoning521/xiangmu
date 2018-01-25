function checkAll(type,str){
	switch(type){
		case "phoneId":var reg = /^1(3|4|5|7|8|9)\d{9}$/;break;
		case "pass":var reg = /^(\w){6,20}$/;break;
		default:;
	}
	if(reg){
		return reg.test(str);
	}else{
		return false;
	}
}

function checkAllandUI(type,str,domObj){
	if(checkAll(type,str)){
		domObj.style.color = "green";
		domObj.innerHTML = "√";
	}else{
		domObj.style.color = "red";
		domObj.innerHTML = "×您输入的有误";
	}
}