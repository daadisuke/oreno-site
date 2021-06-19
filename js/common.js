$(function ($) {
    //メニューの開閉

    $(".btn-menu a").click(function () {
        $(this).toggleClass("open");
        // $("body").toggleClass("fixed");
        $(".wrap-sp-navi").toggle();
        $(".wrap-sp-navi").toggleClass("active-sp");
        $("#header").toggleClass("active-h");
    });

});

// $(window).on('load resize', function () {

//     if ($(window).width() > 1100) { 
//         $(".wrap-sp-navi").removeAttr("style");
//     } else if ($(window).width() < 1100) { 
//     } 
    
// });

//page-top
$(function() {
    var topBtn = $('.page-top');
    topBtn.hide();
    //消える
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});
	
$(function(){
	var topBtn = $(".page-top");
	//スクロールしてトップ
	topBtn.click(function () {
		$('body,  html').animate({
			scrollTop: 0
		},500);
		return false;
	});
});