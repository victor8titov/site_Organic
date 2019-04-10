/*
*           Custom code javaScript
*           Место для твоего кода  
*/



$(function(){
    $('.quote').slick({
        autoplay: true,
        fade: true,
      });
    
    
    if( $(window).width() < 768) {
      $('#menu').prepend('<div id="menu-toggle"></div>');
      $('#menu-toggle').on('click', function() {
        $('#menu ul').slideToggle();
      });
      $('.circle-effect').removeClass('circle-effect');
    }  
});

