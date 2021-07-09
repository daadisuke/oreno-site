// // // メニュー用js // // //

// _header_normalver
// $(function ($) {
//     //メニューの開閉

//     $(".btn-menu a").click(function () {
//         $(this).toggleClass("open");
//         $("body").toggleClass("fixed-body");
//         $(".wrap-sp-navi").toggle();
//         $(".wrap-sp-navi").toggleClass("active-sp");
//     });

// });

// $(window).on('load resize', function () {

//     if ($(window).width() >= 768) { 
//         $(".wrap-sp-navi").removeAttr("style");
//     } else if ($(window).width() < 768) { 
//     } 
    
// });

// 追従ver
$(function ($) {
    //メニューの開閉

    $(".btn-menu a").click(function () {
        $(this).toggleClass("open");
        $("body").toggleClass("fixed-body");
        $("#navi").slideToggle();
        // $(".wrap-sp-navi").toggleClass("active-sp");
    });

});

$(function ($) {

    $(".r-function-block").clone().appendTo("#navi .inner");

});

$(window).on('load resize', function () {

    if ($(window).width() >= 768) { 
        $(".wrap-sp-navi").removeAttr("style");
    } else if ($(window).width() < 768) { 
    } 
    
});

// // // メニュー用js // // //


// よくある質問
$(function() {
	//アコーディオンjs
	$('.list-qa > .col-qa > div').hide();
	$('.list-qa > .col-qa > h4').click(function (e) {
		$(this).next("div").slideToggle();
		$(this).toggleClass("active");
	});
});

//backnumber
$(window).on('load', function () {

	if ($(window).innerWidth() <= 768) {

		$(".back-number h3").click(function(){
			$(this).next(".list-year").slideToggle();
			$(this).toggleClass("open");
		});

	}
	
});

// $(window).on('load', function () {

//     if($(window).innerWidth() > 768) {
//         $(".list-year").removeAttr("style");
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