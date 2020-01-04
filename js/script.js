$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        autoWidth: true,
        margin: 44,
        merge: true,
        dots: false,
        nav: true,
        responsive: {
            1000: {
                mergeFit: false
            },
            678: {
                nav: false,
                mergeFit: true,
                margin: 24,
                autoWidth: false,
            }
        }
    });
});