$(function(){

  /*メニュー関連*/
  $(".openbtn,.scroll-btn").on('click',function () {

    /*メニューボタン*/
    $(this).toggleClass('active');

    /*メニューリスト*/
    if($('header').hasClass('open')){
      $('header').removeClass('open');
      $('nav').animate({'marginLeft':'0px'},500);
    }else{
      $('header').addClass('open');
      $('nav').animate({'marginLeft':'300px'},500);
    }

    /*メニュースクロール*/
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({'scrollTop':position},500);
    $(".openbtn").toggleClass('active');
    
  }); 


  /*スライダー*/
  $('.slider').slick({
    centerMode: true,
    centerPadding: '60px',
    dots:true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  /*fade in*/
  $(window).scroll(function () {
    var wHeight = $(window).height();
    var scrollAmount = $(window).scrollTop();
    $('.scrollanime').each(function () {
        var targetPosition = $(this).offset().top;
        if(scrollAmount > targetPosition - wHeight + 60) {
            $(this).addClass("fadeInDown");
        }
    });
});

});