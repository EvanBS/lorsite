$(document).ready(function() {
	$("a.scrollto").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
	});



	var $window = $(window);
    
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 1760) {
            $(".info").removeClass("hvr-grow");
        }
        else {
        	$(".info").addClass("hvr-grow");
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});



window.onload = function() {
	
	jssor_1_slider_init();

	// top button
	document.getElementById("top").onclick = function() {
		// scroll-behavior: smooth; CSS
		window.scrollTo(0, 0);
	}

}