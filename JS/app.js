$(function(){
    new VenoBox({
        selector: ".venobox",
    });
    $(`.project_slider`).slick({
        slidesToShow: 3,
        speed: 800,
        slidesPerRow: 2,
        slidesToScroll: 2,
        autoplay:true,
        prevArrow:false,
        nextArrow:false,
        dots:true,
        autoplaySpeed:2000,
        // arrows:true,
    });

});