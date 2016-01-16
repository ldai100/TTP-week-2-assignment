$(document).ready(function(){
	
	$("li").click(   function(){     alert('imclicked!');   } );
	console.log("oops");
	//hides the paragraph text on click
	$("p").click(function(){
		$("p").fadeOut(3000).fadeIn(3000);
	})
	$("#home").fadeOut(3000).fadeIn(3000);
	$("#about").slideUp(3000).slideDown(3000);
	$("#contract").animate({opacity:.5});
	$("#donate").animate({width:"300px"}, 3000);
	$("h1").css("background","yellow");
	$("#toggle").click(function(){
		$("#chaining").animate({width:"60%"}).animate({fontSize:"30px"}).animate({borderWidth:30});
		
	});
	
	$("h1").animate({width:"100%"}).animate({width:"50%"});
	
});



