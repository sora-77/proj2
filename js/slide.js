$(function(){

  $("#showing").slick({
    lazyLoad: 'ondemand', 
    infinite: true,
    dots: false,
    arrows : true
  });

  $("#main .lazy").slick({
    lazyLoad: 'ondemand', 
    infinite: true,
    dots: true,
    arrows : true
  });

  $(".regular").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

})