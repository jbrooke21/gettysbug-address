$(document).ready(function() {

	//Fade in on load
	$(document).ready(function() {
  		$("body").fadeIn(5000);
	});

	//On click, change text to large
	$(document).on("click", "#switcher-large", function() {
		$(".speech").css("font-size", "16px");
	});
	//On click change text to small
	$(document).on("click", "#switcher-small", function() {
		$(".speech").css("font-size", "10px");
	});
	//On click change back to default
	$(document).on("click", "#switcher-default", function() {
		$(".speech").css("font-size", "13px");
	});
	//On mouse over the BG changes to yellow
	$(document).on("mouseenter", "p", function() {
		$(this).css("background-color", "yellow");
	});
	//On mouse leave it goes back to white
	$(document).on("mouseleave", "p", function() {
		$(this).css("background-color", "white");
	});
	//Custom animation to move the hearder and change the opacity
	$(document).on("click", "#header", function() {
		$("h2").animate({
            "margin-left": "+=20px", 
            "opacity": ".25"
        }, function() {
            $(".speech").animate({
            	"opacity": ".50"
        	});
        });
    });





});