$(document).ready(function(){
	$('.main_2-scrol').slick({
		arrows:true,
		slidesToShow:4,
		autoplay: true,
		autoplaySpeed: 2000,
		appendArrows: '.main_2-scrol_lines',
		prevArrow: $('.main_2-scrol-prev'),
		nextArrow: $('.main_2-scrol-next'),
		
		 responsive: [
    {
      breakpoint: 1700, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1120, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 750, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
		
	});
});