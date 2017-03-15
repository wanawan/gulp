 function Ajax1(){
		  	
		  	this.xmlHttp=null;
			//创建ajax对象存储到xmlHttp中
		  	if(window.XMLHttpRequest){
		  		this.xmlHttp=new XMLHttpRequest();
		  	}else if(window.ActiveXObject){
		  		this.xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		  	}
			//创建自己的open方法
		  	this.ajaxOpen=function(method,target){
		  		this.xmlHttp.open(method,target,true);
		  	}
			//创建自己的设置头部信息编码方法
		  	this.ajaxSetHeader=function(){
		  		this.xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		  	}
			//创建自己的绑定readyState事件的方法，注意参数是一个函数
		  	this.bindReadyState=function(fun){
		  		this.xmlHttp.onreadystatechange=fun;
		  	}
			//创建自己的send方法
		  	this.ajaxSend=function(post_data){
		  		this.xmlHttp.send(post_data);
		  	}
		  }