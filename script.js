//top-bar 스크롤 감지
$(function(){
  let lastScrollTop = 0;
  const delta = 15;

  $(window).scroll(function(event){
    const st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta) return;
    
    if((st > lastScrollTop) && (lastScrollTop > 0)) {
      $('.top-bar').addClass('nav-up');
    } else {
      $('.top-bar').removeClass('nav-up');
    }
    lastScrollTop = st;
  });
});

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
    
    $('body').toggleClass('is-locked');
});

    //floating 
$('.main_home_floating > a').click(function(){
    let $this = $(this);

    $('.main_home_floating > a').removeClass('on');
    $this.addClass('on');
})

// 스크롤 시 플로팅 메뉴 활성화 (Scrollspy)
$(window).on('scroll', function() {
    let scrollTop = $(window).scrollTop() + 200; 

    $('.main_sec').each(function() {
        let $this = $(this);
        let sectionTop = $this.offset().top; 
        let sectionBottom = sectionTop + $this.outerHeight(); 
        let sectionId = $this.attr('id'); 

        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
            $('.main_home_floating > a').removeClass('on');
            $('.main_home_floating > a[href="#' + sectionId + '"]').addClass('on');
        }
    });
});

    //main_sec2 hover

    var i = 0;
    $('.main_sec2 .main_cont_box .list').mouseenter(function(){
        let $this = $(this);

        $('.main_sec2 .main_cont_box .list').removeClass('active');
        $this.addClass('active');

        let i = $this.index();

        $('.imgs_cont > .view_box').removeClass('on');
        $('.imgs_cont > .view_box').eq(i).addClass('on');

    });

    //.main_sec3 
    $(function() {
    $('.components_custom>li').on('mouseenter', function() {
        let $this = $(this);
        
        if ($this.hasClass('hover')) return;

        $('.components_custom>li').removeClass('hover');
        $this.addClass('hover');

        let t = $this.index();
        $('.sec3_box > a').removeClass('actived');
        $('.sec3_box > a').eq(t).addClass('actived');
    });
});
    

