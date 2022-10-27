/* $(document).ready */
$(function() {

    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    
    /* burger */
    $('.header__burger').click(function() {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });


    /* fixed header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /* smooth scroll */
    $("[data-scroll]").on("click", function (event) {  
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop : blockOffset
        }, 800);
    });

});