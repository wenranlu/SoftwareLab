var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('.topnav').stop().fadeOut();
        $('.nav').stop().fadeIn();
        up = !up;
        console.log(up);
    } else if(newscroll < mypos && up) {
        $('.topnav').stop().fadeIn();
        $('.nav').stop().fadeOut();
        up = !up;
    }
    mypos = newscroll;
});