(function($){

    $('.show-menu').on('click', showMenu);

    function closeMenu(){
        $('.navigation').slideUp();
        setTimeout(function(){
            $('header').removeClass('active-menu');
            $('.b-popup').addClass('d-none');
            $('.show-menu').removeClass('close');
        }, 400);
        $('.show-menu').off('click', closeMenu);
        $('.show-menu').on('click', showMenu);
    }
    function showMenu(){
        $('.b-popup').removeClass('d-none');
        setTimeout(function(){
            $('.navigation').slideDown('slow');
            $('header').addClass('active-menu');
            $('.show-menu').addClass('close');
        }, 150);
        $('.show-menu').off('click', showMenu);
        $('.show-menu').on('click', closeMenu);
    }

    $('#carouselReasons').carousel({ interval: false });

    $('.view-more').click(function(event){
        event.preventDefault();
        $(this).parent().find('.workflow-content_hidden').slideToggle();
    })

    $(window).scroll(function(){

        scrollAnimation();

    });
    function scrollAnimation(){
        $('section').each(function(t,a){
            var i = $(a).offset().top - 300,
            e=i+$(a).height(),
            o=$(window).scrollTop();
            if(o>i&&o<e){
                $(this).find('.animate').each(function(){
                    var animation = $(this).data('animation-name');
                    var animateDelay = $(this).data('delay');

                    $(this).delay(+animateDelay).addClass(animation);
                    $(this).css('animation-name', animation);
                    $(this).css('visibility', 'visible');
                    if(animateDelay){
                        $(this).css('animation-delay', animateDelay);
                    }
                })
            }
        })
    }
})(jQuery)
