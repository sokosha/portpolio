$(function(){

$('.js-toggle').on('click',function(){
    $(this).toggleClass('on');
    $(this).siblings().slideToggle();
  });

$('.js-scroll').on('click',function(){
    $('body,html').animate({ scrollTop:0 },500);
  });

//モーダルウィンドウ表示させる
$('.js-modal').on('click',function(){
  $('.modal-content').fadeIn('slow');
  $('#modal-bg').fadeIn('slow');
});
$('.js-modal-close').on('click',function(){
  $('.modal-content').fadeOut(1000);
  $('#modal-bg').fadeOut(1000);
  });



$('#js-show-btn').on('click',function(){
    
    $('#js-target-element').fadeIn(1000, function(){
      $('.description').fadeOut(1000);
    });
    
  });

  $('#js-hide-btn').on('click',function(){
    
    $('#js-target-element').fadeOut(1000, function(){
      $('.description').fadeIn(1000);
    });
    
  });













});