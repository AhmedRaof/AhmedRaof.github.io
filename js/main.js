// visit.html => accordion
var allPanels = $(".accordion > dd").hide();
$(".accordion > dt > a").click(function () {
    $(this).parent().next().slideToggle();
    return false;
});

// index.html => search icon => will show box
$(".search-button").on("click", function () {
    $(".search-box").toggleClass("active");
});
