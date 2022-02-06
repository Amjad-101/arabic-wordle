const messageDisplay = document.querySelector('.message-container');
document.addEventListener("DOMContentLoaded", () => {
  createSquares();
  getNewWord();
  WordOfTheDay();


  let guessedWords = [[]];
  let availableSpace = 1;


  function WordOfTheDay() {

    const word_list = ["ثلاثة", "خطوبة", "زرافة", "فراشة", "كلومة", "وزارة", "تخطيط", "اطلاق", "بسيطة", "عوائد", "عوائل", "ملعوب", "ملعون", "اطفال", "زوجيه", "فردية", "اتجاه", "ارواح", "اجساد", "اجسام", "اذهان", "مبتكر", "اعراب", "جماعة", "قاموس", "اطراف", "اتفاق", "عربية", "تفكير", "مصطلح", "ترجمة", "اندمج", "اجتهد", "رقمية", "عربات", "مفهوم", "مكتوب", "تمشيط", "مخطوط", "وسائل", "اعلام", "مراسل", "جزيرة", "صنطرة", "صناعي", "جراحي", "زراعي", "نظرية", "وليمة", "توقيت", "مراكز", "اجهزة", "زنديق", "اسلوب", "شخصية", "عفوية", "نصائح", "اسئلة", "انقاذ", "مركبة", "مكتبة", "اعياد", "نصيحة", "انسان", "اردون", "اسلام", "كفارة", "مساحة", "مقلمة", "عقيدة", "تلفاز", "مكسيك", "فضائح", "تاسعة", "توقيت", "منافق", "تجارب", "مسافة", "سلطنة", "أمامة", "استاذ", "مدرسة", "خرافي", "تنظيم", "متاهة", "اصحاب", "افلاس", "فائدة", "مرحبا", "اقراص", "عدسات", "عاكسة", "اكتئاب", "محامي", "مجازف", "محاول", "محارب", "مقاتل", "مجاهد", "معادي", "مسالم", "مناضل", "برامج", "برهان", "بركان"];


    console.log(word_list.length);

    let rand = Math.floor(Math.random() * (word_list.length + 1));;


    let chosen_word = word_list[rand];
    chosen_word;
  }





  let guessedWordCount = 0;


  const keys = document.querySelectorAll(".keyboard-row button");

  //words in word list array
  function getNewWord() {
    const word_list = ["ثلاثة", "خطوبة", "زرافة", "فراشة", "كلومة", "وزارة", "تخطيط", "اطلاق", "بسيطة", "عوائد", "عوائل", "ملعوب", "ملعون", "اطفال", "زوجيه", "فردية", "اتجاه", "ارواح", "اجساد", "اجسام", "اذهان", "مبتكر", "اعراب", "جماعة", "قاموس", "اطراف", "اتفاق", "عربية", "تفكير", "مصطلح", "ترجمة", "اندمج", "اجتهد", "رقمية", "عربات", "مفهوم", "مكتوب", "تمشيط", "مخطوط", "وسائل", "اعلام", "مراسل", "جزيرة", "صنطرة", "صناعي", "جراحي", "زراعي", "نظرية", "وليمة", "توقيت", "مراكز", "اجهزة", "زنديق", "اسلوب", "شخصية", "عفوية", "نصائح", "اسئلة", "انقاذ", "مركبة", "مكتبة", "اعياد", "نصيحة", "انسان", "اردون", "اسلام", "كفارة", "مساحة", "مقلمة", "عقيدة", "تلفاز", "مكسيك", "فضائح", "تاسعة", "توقيت", "منافق", "تجارب", "مسافة", "سلطنة", "أمامة", "استاذ", "مدرسة", "خرافي", "تنظيم", "متاهة", "اصحاب", "افلاس", "فائدة", "مرحبا", "اقراص", "عدسات", "عاكسة", "اكتئاب", "محامي", "مجازف", "محاول", "محارب", "مقاتل", "مجاهد", "معادي", "مسالم", "مناضل", "برامج", "برهان", "بركان"];
    console.log(word_list.length);

    let rand = Math.floor(Math.random() * (word_list.length));


    word = word_list[rand];
    console.log(word);
    return word;



  }

  function getCurrentWordArr() {
    const numberOfGuessedWords = guessedWords.length;
    return guessedWords[numberOfGuessedWords - 1];
  }

  function updateGuessedWords(letter) {
    const currentWordArr = getCurrentWordArr();

    if (currentWordArr && currentWordArr.length < 5) {
      currentWordArr.push(letter);

      const availableSpaceEl = document.getElementById(String(availableSpace));

      availableSpace = availableSpace + 1;
      availableSpaceEl.textContent = letter;
    }
  }

  function getTileColor(letter, index) {
    const isCorrectLetter = word.includes(letter);

    if (!isCorrectLetter) {
      return "rgb(58, 58, 60)";
    }

    const letterInThatPosition = word.charAt(index);
    const isCorrectPosition = letter === letterInThatPosition;

    if (isCorrectPosition) {
      return "rgb(83, 141, 78)";
    }

    return "rgb(181, 159, 59)";
  }

  function handleSubmitWord() {
    const currentWordArr = getCurrentWordArr();
    if (currentWordArr.length !== 5) {
      window.alert("يجب أن تتكون الكلمة من 5 أحرف");
    }

    const currentWord = currentWordArr.join("");



    const firstLetterId = guessedWordCount * 5 + 1;
    const interval = 200;
    currentWordArr.forEach((letter, index) => {
      setTimeout(() => {
        const tileColor = getTileColor(letter, index);

        const letterId = firstLetterId + index;
        const letterEl = document.getElementById(letterId);
        letterEl.classList.add("animate__flipInX");
        letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
      }, interval * index);
    });

    guessedWordCount += 1;

    if (currentWord === word) {
      window.alert("مبروك لقد فزت!");
    }

    if (guessedWords.length === 6) {
      window.alert(`آسف ، ليس لديك المزيد من التخمينات! كانت الكلمة (${word}).`);
    }

    guessedWords.push([]);


  };


  function createSquares() {
    const gameBoard = document.getElementById("board");

    for (let index = 0; index < 30; index++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("animate__animated");
      square.setAttribute("id", index + 1);
      gameBoard.appendChild(square);
    }
  }

  function handleDeleteLetter() {
    const currentWordArr = getCurrentWordArr();
    const removedLetter = currentWordArr.pop();

    guessedWords[guessedWords.length - 1] = currentWordArr;

    const lastLetterEl = document.getElementById(String(availableSpace - 1));

    lastLetterEl.textContent = "";
    availableSpace = availableSpace - 1;
  }

  for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
      const letter = target.getAttribute("data-key");

      if (letter === "enter") {
        handleSubmitWord();
        return;
      }

      if (letter === "del") {
        handleDeleteLetter();
        return;
      }

      updateGuessedWords(letter);
    };
  }
});

const showMessage = (message) => {
  const messageElement = document.createElement('p')
  messageElement.textContent = message
  messageDisplay.append(messageElement)
  setTimeout(() => messageDisplay.removeChild(messageElement), 2000)
}