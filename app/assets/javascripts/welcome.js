// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$('.skills-title').on('click', function(event){
  $('.about-text').slideUp(400);
  $('.links-list').slideUp(400);
  $('.contact-list').slideUp(400);

  $('.skills-list').slideToggle(400, function() {
    var lightGreen  = 'hsla(113, 52%, 43%, 0.42)',
        skills      = $('.skills'),
        skillsTitle = $('.skills-title'); 

    if ($(this).is(':hidden')) {
      skills.css({
        'border-bottom': '0', 
        'background-color': 'transparent' }).animate({opacity: '0.5'}, 100);
      skillsTitle.css({
        'border-bottom': '3px solid white',
        'border-left': '3px solid white',
        'background-color': 'transparent'
      });

    } else {
      skills.animate({ opacity: '1' }, 100);
      skillsTitle.css({
        'border-left': '3px solid white'
      });
    }
  });
  event.preventDefault();
}); 

// $('.about-title').on('click', function(event){
//   $('.skills-list').slideUp(400);
//   $('.links-list').slideUp(400);
//   $('.contact-list').slideUp(400);

//   $('.about-text').slideToggle(300, function(){
//     var redTomato  = 'hsla(3, 52%, 43%, 0.42)',
//         about      = $('.about'),
//         aboutTitle = $('.about-title');

//     if ($(this).is(':hidden')) {
//       about.css({
//         'border-bottom': '0',
//         'background-color': 'transparent' }).animate({opacity: '0.5'}, 100);
//       aboutTitle.css({
//         'background-color': 'transparent'
//       });
//     } else {
//       about.css({ 
//         'background-color': 'tomato' }).animate({ opacity: '1' }, 100);
//       aboutTitle.css({
//         'border-bottom': '3px solid ' + redTomato,
//         'border-left': '0',
//         'background-color': redTomato
//       });
//     }
//   });
//   event.preventDefault();
// });


