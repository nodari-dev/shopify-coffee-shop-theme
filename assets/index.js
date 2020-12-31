var PostContent = $('div.post-info');
$(".post-info > p").has("iframe").addClass("video-post");
$(".post-info > p").has("img").addClass("image-post");
$("#read-more").on('click', function() {
    $(".product-description-block").addClass('read-mode');
    $("body").addClass('no-scroll');
});
$(".disable-read-mode").on('click', function() {
    $(".product-description-block").removeClass('read-mode');
    $("body").removeClass('no-scroll');
});
$(".open-menu").on('click', function() {
    $(".header-menu").removeClass('hidden');
    $("body").addClass('no-scroll');
});
$(".close-menu").on('click', function() {
    $(".header-menu").addClass('hidden');
    $("body").removeClass('no-scroll');
});