
$(document).ready(function() {
    var slideposition = 0;
    
    $("#back").click(function() {
      if (slideposition > 0) {
        slideposition--;
        $(".slider-boxen__box").css({
          transform: 'translateX(-' + (slideposition * 244) + 'px)'
        });
      }
    });  
  
    $("#forward").click(function() {
      if (slideposition < ($(".slider-boxen__box").length - 1) - 3) {
        slideposition++;
        $(".slider-boxen__box").css({
          transform: 'translateX(-' + (slideposition * 244) + 'px)'
        });
      }
    });   
  
    $(".slider-boxen__box").click(function() {
      $(".slider-boxen__box").removeClass("box-active");
      $(this).addClass("box-active");
    });
    
  });
  