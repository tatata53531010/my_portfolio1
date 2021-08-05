'use strict';

// index.html
// スクロールしたら現れる矢印
// ボタンの表示／非表示を切り替える関数
const updateButton = () => {
    if ($(window).scrollTop() >= 300) {
      // 300px以上スクロールされたらボタンを表示
      $('.back-to-top').fadeIn();
    } else {
      // ボタンを非表示
      $('.back-to-top').fadeOut();
    }
  };
  
  // スクロールされる度にupdateButtonを実行
  $(window).on('scroll', updateButton);
  
  // ボタンをクリックしたらページトップに戻る
  $('.back-to-top').on('click', (e) => {
    e.preventDefault();
  
    // 600ミリ秒かけてトップに戻る
    $('html, body').animate({ scrollTop: 0 }, 600);
  });
  
  updateButton();


//access.html - Googleマップ
let map;

function initMap() {
  let target = document.getElementById('map');
  let miku = {lat: 34.7049176, lng: 135.4886810}; //緯度と軽度
  map = new google.maps.Map(target, {
    center: miku,
    zoom: 14
  });
 
  let marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    icon: 'https://maps.google.com/mapfiles/ms/micons/red-dot.png'
  });
}; 


// contact.html - フォームが送信された時に実行される
$('.my-form').on('submit', (e) => {
    const name = $('.text1').val();
    const email1 = $('.text2').val();
    const email2 = $('.text3').val();
    const subject = $('.text4').val();
    const message = $('.text5').val();
    
    if (name === '') {
        // ページ遷移を止める
        e.preventDefault();
        $('.error').html('※名前が入力されていません');
        $('html, body').animate({ scrollTop: 0 }, 300);
      } else if (email1 === '') {
        e.preventDefault();
        $('.error').html('※メールアドレスが入力されていません');
        $('html, body').animate({ scrollTop: 0 }, 300);
      } else if (email1 !== email2) {
        e.preventDefault();
        $('.error').html('※メールアドレスが一致しません');
        $('html, body').animate({ scrollTop: 0 }, 300);
      } else if (subject === '') {
        e.preventDefault();
        $('.error').html('※お問い合わせの件名が入力されていません');
        $('html, body').animate({ scrollTop: 0 }, 300);
      } else if (message === '') {
        e.preventDefault();
        $('.error').html('※お問い合わせの具体的な内容が入力されていません');
        $('html, body').animate({ scrollTop: 0 }, 300);
      }
});
