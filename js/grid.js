function setHeights() {

  var gutterHeight = Number($('.gutter-sizer').width())

  $('.grid-item-large-square').height($('.grid-item-large-square').width());

  $('.grid-item-half-large-square').height(Number($('.grid-item-large-square').width())/2)

  var gridItemLargeSquareHeight = $('.grid-item-large-square').height();

  var gridItemLargeSquareHeightThird = (Number(gridItemLargeSquareHeight) - gutterHeight) / 3;

  var smallPercent = gridItemLargeSquareHeightThird * 0.15;

  $('.grid-item-small-pano').height(gridItemLargeSquareHeightThird-smallPercent)

  $('.grid-item-below-pano').height((gridItemLargeSquareHeightThird*2)-smallPercent)

  var leftHeight = Number($('.grid-item-large-square').height()) + Number($('.grid-item-half-large-square').height())
  var rightHeight = Number($('.grid-item-small-pano').height()) + Number($('.grid-item-below-pano').height())

  $('.grid-item-small-square').height(leftHeight - rightHeight - gutterHeight);
  $('.grid-item-small-square-birds').height($('.grid-item-small-square-birds').width());

  $('.grid-item-engagement').height($('.grid-item-small-square-birds').width() + ($('.grid-item-small-square-birds').width() * 0.15));

  $('.grid-item-adele').height($('.grid-item-adele').width());

  $('.grid-item-boat').height($('.grid-item-adele').width() - ($('.grid-item-small-square-birds').width() * 0.15))
  $('.grid-item-merchant').height($('.grid-item-boat').height())

}

setHeights();

$(window).on('resize', function(){
  setHeights();
});


var elem = document.querySelector('.grid');
imagesLoaded(elem, function() {
  var pckry = new Packery( elem, {
    // options
    itemSelector: '.grid-item',
    gutter: '.gutter-sizer',
    percentPosition: true
  });
})
