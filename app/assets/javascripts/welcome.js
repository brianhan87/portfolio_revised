// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$('div.skills-title').on('click', function(){
  $(this).next('div').slideToggle(300);
  return false;
});