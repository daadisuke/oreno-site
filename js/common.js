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

    if ($(window).width() > 768) { 
        $("#navi").removeAttr("style");
    } else if ($(window).width() < 768) { 
    } 
    
});

// ヘッダー追従
$(function($) {
    
    $(window).scroll(function () {
      if($(window).scrollTop() > 200) {
        $("#header").addClass('fixed-h');
        if ($(window).width() > 768) { 
            $("body").css("padding-top","171px");
        } else if ($(window).width() <= 768) {
            $("body").css("padding-top","57px");
        } 
      } else {
        $("#header").removeClass('fixed-h');
		$("body").css("padding-top","0px");
      }
    });

});

// アンカーリンク位置調整
$('#contents a[href*="#"],#navi a[href*="#"]').click(function () {
    const i = $(this).attr('href').indexOf('#');
    if (i !== -1) {
        const id = $(this)
        .attr('href')
        .substring(i)
        .replace('.', '')
        .replace('/', '');
        if (id) {
        const headerHight = $(window).width() <= 768 ? 57 : 130;
        const position = $(id).offset().top - headerHight;
        $('html, body').animate({ scrollTop: position }, 500, 'swing');

        if ($('.btn-menu a').hasClass('open')) {
            $('.btn-menu a').click();
        }
        }
    }
});
  
window.addEventListener('load', setPosition);

function setPosition() {
    if (location.hash.indexOf('#') !== -1) {
        const headerHight = $(window).width() <= 768 ? 57 : 130;
        const position = $(location.hash).offset().top - headerHight;
        $('html, body').animate({ scrollTop: position }, 500, 'swing');
    }
}

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