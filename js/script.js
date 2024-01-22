$(function () {
// slick slider
$('.slide1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  speed:1000,
  pauseOnHover: false,
  pauseOnFocus: false,
  prevArrow:".left",
  nextArrow:'.right',
  dots:true,
});
$('.slide2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true,
  focusOnSelect:true,
  autoplay: false,
  prevArrow:".left2",
  nextArrow:'.right2',
  });
//  counter up
$('.count').counterUp({
time:3000,
delay:50,
});
//  Count down timer
$('.count_down').countdown('2024/01/30 15:00:00', function(event) {
  $(this).html(event.strftime('<div class="counter"><div class="count_title"><h4>Your Pre-Test Exam Starting ...</h4></div><div class="count_table"><span class="weeks">%w</span><span class="week_label"> weeks </span><span class="days"> %d </span><span class="day_label"> days </span><span class="hours"> %H </span><span class="hours_label"> hours </span><span class="minutes"> %M </span><span class="minute_label"> minutes </span><span class="seconds"> %S </span><span class="second_label"> seconds </span></div></div>'));
});
// venu box
new VenoBox({
selector: '.my-image-links',
navSpeed:500,
numeration:true,
overlayClose:false,
popup:true,
share:true,
spinner:'swing',
});



});


// ========== custom js ========= //
// mixit up
var mixer = mixitup('.mixit');
// type js
new Typed('#typed',{
  strings : ['Vaia','Vabi','Apu'],
  typeSpeed : 200,
  delaySpeed : 90,
  backDelay:500,
  backSpeed:200,
  loop : true,
  showCursor:false,
});


