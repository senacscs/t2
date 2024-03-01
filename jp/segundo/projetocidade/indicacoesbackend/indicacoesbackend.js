var lastScrollTop = 0;
var backgroundImages = $('.backgroundImage'); 

$(window).scroll(function(e){
  var st = $(this).scrollTop();
  var ah = $(this).height();
  backgroundImages.each(function(i){
    var img = $(this);
    var pos = img.position().top;
    var hei = img.height();
    if ((st + ah) > pos && st < (pos + hei)){
      var p = ((pos - st)/ah) + 0.25;
      if(i == 1) console.log(p);
      img.css('background-position', '50%'+(p*100)+'%');
    }
  });
  lastScrollTop = st;
});

$(window).scroll();