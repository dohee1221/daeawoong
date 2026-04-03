// customer_menu 열고 닫기
$('.top-bar-menu__npall > ul > li:nth-child(1), .top-bar-menu__npall > ul > li:nth-child(2)').click(function(){

    if($(this).find('.customer').hasClass('actived')){
        $('.customer').removeClass('actived');
    }
    else{
        $('.customer').removeClass('actived');
        $(this).find('.customer').addClass('actived');
    }

});

// top-bar_depth-wrap 열고 닫기
$('.top-bar__menu > li').mouseenter(function() {
    let $this = $(this);
    let $depthWrap = $this.closest('.top-bar').find('.top-bar_depth-wrap');

    $depthWrap.addClass('active');
});

$('.top-bar').mouseleave(function() {
    $(this).find('.top-bar_depth-wrap').removeClass('active');
});

// site-map close 버튼으로 변경
$('.top-bar-menu__npall .btn').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('close');
});

//site-map-modal 열고 닫기
$('.top-bar-menu__npall .btn').click(function(){
    let $this = $(this);
    let $topBar = $this.closest('.top-bar');

    $topBar.find('.top-bar__site-map-modal').toggleClass('open');
});

    //main_sec2 hover

    var i = 0;
    $('.main_sec2 .main_cont_box .list').hover(function(){
        let $this = $(this);

        $('.main_sec2 .main_cont_box .list').removeClass('active');
        $this.addClass('active');

        let i = $this.index();

        $('.imgs_cont > .view_box').removeClass('on');
        $('.imgs_cont > .view_box').eq(i).addClass('on');

    });

