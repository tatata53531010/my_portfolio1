'use strict';

// 第一問
const quiz = [
    {
      question: '猫は１日何時間寝る？',
      answers: [ '４時間〜５時間', '６時間〜９時間', '１０時間〜１２時間', '１２時間〜１６時間'],
      correct: '１２時間〜１６時間'
    }, {
      question: '猫の後ろ足の指は何本？',
      answers: [ '５本', '４本', '３本', '２本'],
      correct: '４本'
    }, {
      question: '猫の赤ちゃんの目の色は？',
      answers: [ '赤', '緑', '青', '茶'],
      correct: '青'
    }
  ];
  
  const doc = document;
  const question = doc.getElementById('js-question');
  const buttons = doc.querySelectorAll('.quiz-1');
  
  const quizLen = quiz.length;
  let quizCount = 0;
  let score = 0;
  
  const init = () => {
    question.textContent = quiz[quizCount].question;
    
    const buttonLen = buttons.length;
    let btnIndex = 0;
    
    while(btnIndex < buttonLen){
      buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
      btnIndex++;
    }
  };
  
  const goToNext = () => {
    quizCount++;
    if(quizCount < quizLen){
      init(quizCount);
    } else {
      showEnd();
    }
  };
  
  const judge = (elm) => {
    if(elm.textContent === quiz[quizCount].correct){
      alert('正解!');
      score++;
    } else {
      alert('不正解!');
    }
    goToNext();
  };
  
  const showEnd = () => {
    question.textContent = '終了！あなたは' + score + '/' + quizLen + '問正解しました！';
    
    const items = doc.getElementById('js-items');
    items.style.visibility = 'hidden';
  };
  
  init();
  
  let answersIndex = 0;
  let answersLen = quiz[quizCount].answers.length;
  
  while(answersIndex < answersLen){
    buttons[answersIndex].addEventListener('click', (e) => {
      judge(e.target);
    });
    answersIndex++;
  }

//   第二問
const quiz2 = [
    {
      question: '三毛猫のオスが生まれる確率はどれくらい？',
      answers: [ '１万分の１', '２万分の１', '３万分の１', '４万分の１'],
      correct: '３万分の１'
    }, {
      question: '猫にキウイフルーツをあげるとどうなる？',
      answers: [ 'マタタビのように酔う', 'トイレが近くなる', 'もがき苦しむ', '毛並みが綺麗になる'],
      correct: 'マタタビのように酔う'
    }, {
      question: '猫がゆっくりと歩く時、どの足から順に動き始める？',
      answers: [ '左前足', '右前足', '左後ろ足', '右後ろ足'],
      correct: '右後ろ足'
    }
  ];
  
  const question2 = doc.getElementById('js-question2');
  const buttons2 = doc.querySelectorAll('.quiz-2');
  
  const quizLen2 = quiz2.length;
  let quizCount2 = 0;
  let score2 = 0;
  
  const init2 = () => {
    question2.textContent = quiz2[quizCount2].question;
    
    const buttonLen2 = buttons2.length;
    let btnIndex2 = 0;
    
    while(btnIndex2 < buttonLen2){
      buttons2[btnIndex2].textContent = quiz2[quizCount2].answers[btnIndex2];
      btnIndex2++;
    }
  };
  
  const goToNext2 = () => {
    quizCount2++;
    if(quizCount2 < quizLen2){
      init2(quizCount2);
    } else {
      showEnd2();
    }
  };
  
  const judge2 = (elm) => {
    if(elm.textContent === quiz2[quizCount2].correct){
      alert('正解!');
      score2++;
    } else {
      alert('不正解!');
    }
    goToNext2();
  };
  
  const showEnd2 = () => {
    question2.textContent = '終了！あなたは' + score2 + '/' + quizLen + '問正解しました！';
    
    const items2 = doc.getElementById('js-items2');
    items2.style.visibility = 'hidden';
  };
  
  init2();
  
  let answersIndex2 = 0;
  let answersLen2 = quiz2[quizCount2].answers.length;
  
  while(answersIndex2 < answersLen2){
    buttons2[answersIndex2].addEventListener('click', (e) => {
      judge2(e.target);
    });
    answersIndex2++;
  }

// 第三問
const quiz3 = [
    {
      question: '「スコ座り」と言われるスコティッシュフォールド特有の座り方の別名は？',
      answers: [ 'おっさん座り', 'くたびれ座り', 'ぐにゃ座り', '社長座り'],
      correct: 'おっさん座り'
    }, {
      question: 'スコティッシュフォールドが生まれた国は？',
      answers: [ 'アイルランド', 'アメリカ', 'イギリス', 'フランス'],
      correct: 'イギリス'
    }, {
      question: 'スコティッシュフォールドを飼っている芸能人は？',
      answers: [ '徳井義実', '水原希子', '藤原紀香', '橋本環奈'],
      correct: '水原希子'
    }
  ];
  
  const question3 = doc.getElementById('js-question3');
  const buttons3 = doc.querySelectorAll('.quiz-3');
  
  const quizLen3 = quiz3.length;
  let quizCount3 = 0;
  let score3 = 0;
  
  const init3 = () => {
    question3.textContent = quiz3[quizCount3].question;
    
    const buttonLen3 = buttons3.length;
    let btnIndex3 = 0;
    
    while(btnIndex3 < buttonLen3){
      buttons3[btnIndex3].textContent = quiz3[quizCount3].answers[btnIndex3];
      btnIndex3++;
    }
  };
  
  const goToNext3 = () => {
    quizCount3++;
    if(quizCount3 < quizLen3){
      init3(quizCount3);
    } else {
      showEnd3();
    }
  };
  
  const judge3 = (elm) => {
    if(elm.textContent === quiz3[quizCount3].correct){
      alert('正解!');
      score3++;
    } else {
      alert('不正解!');
    }
    goToNext3();
  };
  
  const showEnd3 = () => {
    question3.textContent = '終了！あなたは' + score3 + '/' + quizLen + '問正解しました！';
    
    const items3 = doc.getElementById('js-items3');
    items3.style.visibility = 'hidden';
  };
  
  init3();
  
  let answersIndex3 = 0;
  let answersLen3 = quiz3[quizCount3].answers.length;
  
  while(answersIndex3 < answersLen3){
    buttons3[answersIndex3].addEventListener('click', (e) => {
      judge3(e.target);
    });
    answersIndex3++;
  }