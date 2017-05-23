function basic(){
  $('.mouseover').hide();
  $('.aboutme').hide();

  
  $('.illustration').on('mouseover', function(){

    $(this).next().slideToggle(400);
    
    $(this).toggleClass('active');
      });

  $('.portal').fadeIn(1000);
}
  $('#profile').on('click', function(){
  	$('.aboutme').show(500);
  });

  $(".aboutme").click(function(){
    $(".aboutme").hide(500);
});

$(document).ready(basic);