$(document).ready(function() {

	$(document).ready(function() {
  		$("body").fadeIn(5000);
	});

	$(document).on("click", "#switcher-large", function() {
		$(".speech").css("font-size", "16px");
	});

	$(document).on("click", "#switcher-small", function() {
		$(".speech").css("font-size", "10px");
	});

	$(document).on("click", "#switcher-default", function() {
		$(".speech").css("font-size", "13px");
	});

	$(document).on("mouseenter", "p", function() {
		$(this).css("background-color", "yellow");
	});

	$(document).on("mouseleave", "p", function() {
		$(this).css("background-color", "white");
	});

	$(document).on("click", "#header", function() {
		$("h2").animate({
            "margin-left": "+=20px", 
            "color": "rgba(0, 0, 0, 0.25)"
        }, 1000, "swing", function() {
            $("#header").css("color", "rgba(0, 0, 0, 0.50)");
        });
    });

    $(document).on("keypress","#switcher",function(e){
    	
    if(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40)
    console.log("Arrow key pressed");
})



});