$(function(){
	$(".main-navigation").find("li").click(function(){
		$(".main-navigation").find("li").removeClass("navigation-click");
		$(".main-navigation").find("li").find("a").removeClass("navigation-click-a");
		$(this).addClass("navigation-click");
		$(this).find("a").addClass("navigation-click-a");
	});
});