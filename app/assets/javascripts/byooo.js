function stickyFooter() {
  layoutHeight = $('.layout').height();
  windowHeight = $(window).height();
  if(layoutHeight < windowHeight) {
    $('.footer').addClass('sticky');
  } else {
    $('.footer').removeClass('sticky');
  }
}
function modal(modal) {
  if(modal == '#') {
    $('.modal').hide();
  } else {
    $(modal).show();
  }
}
$(window).resize(function() {
  stickyFooter();
});
$(document).ready(function() {
  stickyFooter();
  $('.btn').click(function() {
    modal($(this).attr('href'));
  });
});
