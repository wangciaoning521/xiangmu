
//1、定义类
function SlideShow(obj) {
    //1）、属性
    this.boxDom = obj.boxDom;
    this.height = obj.height;
    //要播放的图片数组
    this.imgs = obj.imgs;
    this.ord = 0;//代表当前图片的序号，从0开始。
    this.myTimer = null;

    this.timespace = obj.timespace;

    //轮播图中的按钮
    this.btnWidth = obj.btnWidth;
    this.btnHeight = obj.btnHeight;

    this.initUI();
    this.initEvent();
    this.autoChange();
}


    //2）、方法（函数）
SlideShow.prototype.initUI = function(){
        //一、创建所有的HTML元素，并设置css样式
        //1、创建img标记
        
        //2、创建ul
        let ulDom = document.createElement("ul");
        ulDom.style.cssText = "position:absolute;left:500px;bottom:10px;";
        //3、创建li
        for(let i=0;i<this.imgs.length;i++){
            let liDom = document.createElement("li");
            liDom.style.cssText = "float:left;margin:0 10px;";
            liDom.style.width=this.btnWidth+"px";
            liDom.style.height=this.btnHeight+"px";
            liDom.style.border="2px solid #898989";
            ulDom.appendChild(liDom);
        }
        //4、把ul添加到容器里
        this.boxDom.appendChild(ulDom);

        //二、初始化界面
        //1、把每张图片的透明度进行初始化
        // let imgDoms = this.boxDom.children;
        // imgDoms[0].style.opacity = 1;
        // for(let i=1;i<imgDoms.length-1;i++){
        //     imgDoms[i].style.opacity = 0;
        // }

        //第一按钮变成高亮
        let lis = this.boxDom.lastElementChild.children;
        lis[0].style.transform ="rotate(45deg)";
    };

    //初始事件
SlideShow.prototype.initEvent = function(){
        let obj = this;//把当前this保存到obj里。

        
        imgs[0].style.left = "0px";
        //让其它图片在div的左边。
        for(let i=1;i<imgs.length;i++){
            imgs[i].style.left = "-400px";
        }

        this.boxDom.onmouseout = function(){
            obj.autoChange();
        }
        let lis = this.boxDom.lastElementChild.children;
        for(let i=0;i<lis.length;i++){
            //赋值语句。
            lis[i].onclick = function(){//此函数的执行必须点击li。
                obj.goImg(i);//
            }
        }
    }

    //1、自动变换图片
SlideShow.prototype.autoChange=function(){
        this.myTimer=setInterval(()=>{
            //处理两个数据：一个是要淡出的图片序号，一个是要淡入的图片序号。
            let outord = this.ord;//ord++之前的ord就是要出去的ord
        //1、改变序号
        this.ord++;//4
        //2、处理边界
        if(this.ord>this.imgs.length-1){
            this.ord=0;
        }
        //3、改变外观；
        this.changeUI(outord,this.ord);
    },this.timespace);
    };


    //功能：给定出的序号和进的序号，完成两张图片的淡入淡出效果
SlideShow.prototype.changeUI=function(outord,inord){
        let currLeft = 0;
        let incLeft = 20;

        let imgs = this.boxDom.children; //document.getElementsByTagName("img");

        let myTimer = setInterval(function(){
            //1、改变数据
            currLeft=currLeft-incLeft;//0.1
            //2、数据合法性的判断（边界）
            if(currLeft<=-400){  //
                window.clearInterval(myTimer);
            }
            //3、改变外观
            imgs[outord].style.left = currLeft+"px";
            imgs[inord].style.left = (currLeft-400)+"px";
        },200);

        //2)、改变豆豆的背景颜色。
        let lis = this.boxDom.lastElementChild.children;
        //把所有的按钮变成橙色（初始颜色）
        for(let i=0;i<lis.length;i++){
            lis[i].style.transform ="rotate(0deg)";
            lis[i].style.transition ="transform .4s";
        }
        //把当前的变成红色
        lis[inord].style.transform ="rotate(45deg)";
        lis[inord].style.transition ="transform .4s";
    };



    //3、跳转到指定的图片上
SlideShow.prototype.goImg=function(transOrd){//0
        outord = this.ord;//ord改变之前的ord就是要出去的ord
        //1、改变序号（把当前图片序号ord的值改为跳转的图片序号；）
        this.ord = transOrd;
        //2、改变外观
        this.changeUI(outord,this.ord);
    };


