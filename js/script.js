$(function(){
  if (window.matchMedia( "(max-width: 1600px)" ).matches){
    $('.slider').slick({
      autoplay: true, //自動でスクロール
      autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
      speed: 5000, //スライドが流れる速度を設定
      cssEase: "linear", //スライドの流れ方を等速に設定
      slidesToShow: 5, //表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, //矢印非表示
      pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3, //画面幅750px以下でスライド3枚表示
          }
        }
      ]
    });
  }});

  // ヘッダー高さ
  $(function() {
    var height=$("header").height();
    $(".mainVisual").css("margin-top", height);
});

// アコーディオン
$(function(){
  $(".question").click(function(){
    $(this).next(".answer").slideToggle();
    $(this).toggleClass("open");
  });
});