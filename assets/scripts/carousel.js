$(document).ready(function () {
  $(".owl-theme").owlCarousel({
    items: 1,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],

    margin: 10,
    loop: true,

    autoplay: true, // Ativar autoplay
    autoplayTimeout: 5000, // Tempo de exibição de cada slide (em m
  });
});

$(document).ready(function () {
  $(".news-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],

    pagination: true,

    margin: 10,
    loop: true,
    autoplay: true, // Ativar autoplay
    autoplayTimeout: 6000, // Tempo de exibição de cada slide (em m
  });
});
