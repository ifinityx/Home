// ---- THIS IS PARALLAX ----
//about me function on load
$(window).on('load', function () {
    $('.abtKiri').addClass('abtShow');
    $('.abtKanan').addClass('abtShow'); 
});

//function on scroll
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    //jumbotron scroll pict
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
    });

    //projects image
    if (wScroll > $('#projects').offset().top -250) {
        $('#projects .card').each(function (i) {
            setTimeout(function() {
                $('#projects .card').eq(i).addClass('show');  
            },500 * (i+1));
        });
        
    }
});
// ---- THIS IS THE END OF PARALLAX ----