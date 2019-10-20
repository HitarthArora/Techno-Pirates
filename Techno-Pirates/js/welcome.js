var sign=document.getElementById(signin);
sign.addEventListener("click",function(){
	if(document.getElementsByClass(apple)==="true")
	{
		window.location.href = "loginrestaurant.html";
	}
	else{
		window.location.href = "loginngo.html";
	}
});
var signup=document.getElementById(signup);
signup.addEventListener("click",function(){
		if(document.getElementsByClass(apple)==="true")
	{
		window.location("loginrestaurant.html");
	}
	else{
		window.location("loginngo.html");
	}
});