// JavaScript Document

//fontsize
jQuery(function($){
	
	//クッキーがあればfontsizeを取得
	var fz = $.cookie('fontSize');
	if(fz) {
		if(fz == 'fzS') {
			$('html').css('fontSize', '50%');
		}else if(fz == 'fzL') {
			$('html').css('fontSize', '85%');
		}
	}
	
	//クッキーがあればopenedを取得
	n = $.cookie('opened');
	if ( n == null ) { n = 1;}
	$('.fontSize dd a').eq(n).addClass("active");
	
	//サイズ変更時にクッキーに保存
	$('.fontSize dd a').click(function() {
		
		//idを取得する
		var thisSize = this.id;
		var thisIndex = $(this).parent("dl").children("dd").index(this);
		
		$('.fontSize dd a').removeClass('active');
		$(this).addClass('active');
		
		//クッキーに保存
		$.cookie('fontSize', thisSize);
		$.cookie('opened',thisIndex);
		
		//クリックしたサイズを反映
		if(thisSize == 'fzS') {
			$('html').css('font-size', '50%');
		}else if(thisSize == 'fzM') {
			$('html').css('font-size', '62.5%');
		}else if(thisSize == 'fzL') {
			$('html').css('font-size', '80%');
		}
	});
	
});