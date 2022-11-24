$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    console.log(wScroll);

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
    });
})