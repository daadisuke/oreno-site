$(function ($) {
    //メニューの開閉

    $(".btn-menu a").click(function () {
        $(this).toggleClass("open");
        // $("body").toggleClass("fixed");
        $(".wrap-sp-navi").toggle();
        $(".wrap-sp-navi").toggleClass("active-sp");
        $("#header").toggleClass("active-h");
        // $(".wrap-sp-navi").append('<h2 class="logo-sp"><img src="/img/common/logo_sp.svg" width="300" alt=""></h2>');
        // $(".wrap-sp-navi").prepend('<h2 class="logo-sp"><img src="/img/common/logo_sp.svg" width="300" alt=""></h2>');
        // $(".r-function-block").insertAfter("#navi");
    });

});

// $(window).on('load resize', function () {

//     if ($(window).width() > 1100) { 
//         $(".wrap-sp-navi").removeAttr("style");
//     } else if ($(window).width() < 1100) { 
//     } 
    
// });

$(function ($) {

    //idとaria-controls,accordion-panelに番号を割り振る
    $('.sp-p').attr({
        id: 'menu-tab1',
        'aria-controls': 'menu-panel1'
    });
    $('.sp-c').attr({
        'aria-labelledby': 'menu-tab1',
        id: 'menu-panel1'
    });
    // $('.sp-c').addClass("active-menu");

    //それぞれにrole属性、aria-selected、aria-expanded、aria-hiddenを付ける
    $('.sp-p').attr({
        'aria-selected': 'true',
        'aria-expanded': 'true',
    });
    $('.sp-c').attr('aria-hidden', 'false');

    //クリックした際のrole属性、aria-selected、aria-expanded、aria-hiddenを変更する
    $(".sp-p").click(function (e) {
        $('.sp-c').toggleClass("active-menu");
        if ($(".sp-c").hasClass('active-menu')) {
            $(this).attr({
                'aria-selected': 'true',
                'aria-expanded': 'true'
            });
            $(".sp-c").attr({
                'aria-hidden': 'false'
            });
        } else {
            $(this).attr({
                'aria-selected': 'false',
                'aria-expanded': 'false'
            });
            $(".sp-c").attr({
                'aria-hidden': 'true'
            });
        }

        //aタグ無効化
        e.preventDefault();

    });

});

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