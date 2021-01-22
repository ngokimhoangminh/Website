 $(document).ready(function()
{
  getActive();
  next_section();
});
function getActive()
{
    
    $('.menuitem').click(function()
    {
      $('.menuitem').removeClass("actives");
      $(this).addClass("actives");
    });
}
////SLider
$(function(){
  
      slick_slider();     
  });
function slick_slider()
{
  $('.slider_customer').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autuplay:true,
        autoplaySpeed: 2000,
        dots:true,
        prevArrow:'<span class="priv_arrow"><i class="fa fa-chevron-circle-left"></i></span>',
    	nextArrow:'<span class="next_arrow"><i class="fa fa-chevron-circle-right"></i></span>'
      });
}

//animation
var wow = new WOW(
  {
    boxClass:     'wow',      
    animateClass: 'animated',
    offset:       0,         
    mobile:       true,       
    live:         true,       
    callback:     function(box) {
     
     
    },
    scrollContainer: null 
  }
);
wow.init();
///hambuger
var menu=document.getElementById('hambuger');
var btnclose=document.getElementById('btnclose');
var btnOpen=document.getElementById('btnOpen');
 function show()
{
   menu.classList.toggle("show_menu");
   btnclose.classList.toggle("show");
   btnOpen.classList.toggle("hide");
}
////// next_section
function next_section()
{
  $('.button__down').click(function() {
        $('html, body').animate({
            scrollTop: $("#our__story").offset().top
        }, 1000);
    });

}
////scroll_to_top
$(window).scroll(function(){
    if($(window).scrollTop() >= 10) {
      $('.button_scrolltop').show();
    } else {
      $('.button_scrolltop').hide();
    }
  });
  
  function page_scrolltop(){
    $('html,body').animate({
      scrollTop: 0
      }, 'fast');
  }
