$('aside').toggleClass('open');
$('body').toggleClass('overflow-h');

(function($) {
  $(function() {
    $('.toggle-overlay').click(function() {
      $('aside').toggleClass('open');
      $('body').toggleClass('overflow-v');

    });
  });
})(jQuery);
