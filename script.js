$(document).ready(function() {
 
  $('.product-color-choose input').on('click', function() {
      var tshirtColor = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.left img[data-image = ' + tshirtColor + ']').addClass('active');
      $(this).addClass('active');
  });
 
});