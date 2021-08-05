'use strict';

// introduction.html - 画像のフェードイン・フェードアウト
$('.d-inline-block').magnificPopup({
    type: 'image',
    gallery: { enabled: true },
    mainClass: 'mfp-fade',
    removalDelay: 300,
});

// animatedクラスの付いた要素にwaypointを登録
$('.animated').waypoint({
    handler(direction) {
      if (direction === 'down') {
        $(this.element).addClass('fadeInUp');
        this.destroy();
      }
    },
    // 要素が画面中央に来たらhandlerを実行
    offset: '80%',
  });
