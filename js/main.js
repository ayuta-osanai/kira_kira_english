// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // console.log('click');
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // console.log('resize');
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});

//カルーセル
$('.cover-slick').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  speed: 1000,
  infinite: true,
  dots: true,
  arrows: false,
});

// タブ
$('#smarttab').smartTab({
  enableUrlHash: false,
  autoAdjustHeight: false
});

// アニメーション
  //左方向
$('.left').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeOutUpを削除して
       * fadeInUpアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInLeft');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});

//右方向
$('.right').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeOutUpを削除して
       * fadeInUpアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInRight');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});

// アコーディオンメニュー
$('.question-section').on('click', function(e) {

  $(this).children('.qa-accordion-mark').toggleClass('open');
  // .accordion-contentを選択

  var content =  $(this).next('.answer-section');

  // .accordion-contentを表示・非表示
  content.slideToggle();

});


//ヘッダーのメニューをクリックしたら該当箇所にスクロール
$(function(){
  $("a[href^='#section']").click(function(){
    var target = $(this.hash);
    var position = $(target).offset().top;
    $('html,body').animate({scrollTop: position}, 400);
    return false;
  });
});


// ハンバーガーメニューのリンクをクリックしたらページを閉じる
$(function () {
  $(".hamburger-menu ul li a").on("click", function () {
      hamburger.removeClass('hamburger-menu-active');
  });
});