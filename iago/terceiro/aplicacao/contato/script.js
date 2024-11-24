$('.tabbar ul li a').click(function(e) {

    let link = $(this),
        li = link.parent();

    setActive(li.parent(), li);

    return false;

});

function setActive(nav, li) {
    nav.find('li').removeClass('active');
    li.addClass('active');
    nav.css('--x', li.position().left + li.outerWidth() / 2 + 'px');
}

$(".hover").mouseleave(function () {
    $(this).removeClass("hover");
  });
  