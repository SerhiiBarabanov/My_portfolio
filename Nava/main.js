// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function() {

	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() {
	$('.js-overlay-campaign').fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();

	}
});

// открыть по таймеру
$(window).on('load', function () {
	setTimeout(function(){
		if($('.js-overlay-campaign').hasClass('disabled')) {
			return false;
		} else {

			$(".js-overlay-campaign").fadeIn();
		}
	}, 5000);
});

$(window, document, undefined).ready(function() {

  $('input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

  var $ripples = $('.ripples');

  $ripples.on('click.Ripples', function(e) {

    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');

  });

  $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
  	$(this).removeClass('is-active');
  });

});

