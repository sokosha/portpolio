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

















});