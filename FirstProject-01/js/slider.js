var $links = $(".itemLinks");

$links.click(function(e){
  $links.removeClass("active");
  var clickedLink = e.target;
  clickedLink = $(this);
  var position = clickedLink.attr("data-pos");
  var translateValue = "translateX(" + (position * 20) + "%)";
  $("#wrapper").css({
    transform: translateValue
  });
  clickedLink.addClass("active");
});
 $($links[0]).addClass("active");

