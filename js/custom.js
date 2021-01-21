 $(document).ready(function()
{
  getActive();
});
function getActive()
{
    
    $('.menuitem').click(function()
    {
      $('.menuitem').removeClass("actives");
      $(this).addClass("actives");
    });
}


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

