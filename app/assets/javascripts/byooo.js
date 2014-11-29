function stickyFooter() {
  var layoutHeight = $('.layout').height();
  var windowHeight = $(window).height();
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
    containerHeight = $(modal).find('.container').height()+20;
    $(modal).find('.container').css('margin-top', -containerHeight/2 + 'px');
  }
}

function infiniteScroll(row, column) {
  body = $('#Articles');
  for(var f = 1; f <= column; f ++) {
    body.append('<li></li>');
  }
  for(var i = 1; i <= row * column; i ++) {
    img = ['sloth', 'koala', 'alpaca'];
    content =  '<div class="article' + (Math.round(Math.random()*5) == 0? ' mine' : '') + '">' +
               '  <img src="/img/' + img[Math.round(Math.random()*2)] + '.jpg">' +
               '  <h3>이응 +1</h3>' +
               '  <p>' +
               '    이응' +
               '  </p>' +
               '  <h5>이응</h5>' +
               '</div>';
    article = body.find('li:nth-child(' + (i%5+1) + ')');
    article.append(content);
  }
}

$(window).resize(function() {
  stickyFooter();
});

$(window).scroll(function() {
  if($(document).scrollTop() >= $(document).height() - $(window).height()) {
    infiniteScroll(5, 5);
  }
});

$(document).ready(function() {
  infiniteScroll(5, 5);
  stickyFooter();
});
