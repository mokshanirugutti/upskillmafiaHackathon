jQuery(window).scroll(function() {
    var scrollTop = jQuery(window).scrollTop();
    var windowHeight = jQuery(window).height();
    var blockPosition = jQuery('#block').offset().top;
    var newColor = (scrollTop > blockPosition) ? 'white' : 'black';
    jQuery("#bgcontainer").css("background-color", newColor);
  });