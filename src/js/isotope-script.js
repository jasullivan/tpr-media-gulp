/******************************* 
// GALLERY ISOTOPE
********************************/
// $(window).on('load', function () {
var $grid = $(".grid").isotope({
  itemSelector: ".gallery-item",
  layoutMode: "fitRows"
});
// Unloaded images can throw off Isotope layouts and cause item elements to overlap.
// imagesLoaded resolves this issue.
$grid.imagesLoaded().progress(function() {
  $grid.isotope("layout");
});

// bind filter button click
$(".gallery-nav").on("click", "button", function() {
  var filterValue = $(this).attr("data-filter");
  console.log(filterValue);
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$(".gallery-nav").each(function(i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", "button", function() {
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
  });
});
// });
/******************************* 
// GALLERY ISOTOPE ENDS
********************************/
