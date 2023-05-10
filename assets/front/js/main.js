$(document).ready(function() {

    // Logo Slider
    $(".owl-logo-slider").each(function() {
        $(this).owlCarousel({
            autoplay: true,
            autoplayTimeout: 1500,
            loop: true,
            smartSpeed: 250,
            nav: true,
            items: 4,
            margin: 15,


            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                520: {
                    items: 2
                },
                575: {
                    items: 3
                },
                767: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1199: {
                    items: 5
                }
            }

        });
    });


});