$(window).on("load", function() {
    $(".loader").delay(1000).fadeOut("slow");
});

$(document).ready(function() {
    $("#currentYear").text((new Date()).getFullYear());
    attachTopScroller(".scrollUp");
});

function attachTopScroller (elementId){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(elementId).fadeIn();
        } else {
            $(elementId).fadeOut();
        }
    });
    // Scroll To Top Animation
    $(elementId).click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
};