let currentLanguage = 'en';
let currentQuestionIndex = 0;
let score = 0;

const translations = {
  en: {
    title: "Where Did Your Veggies Come From?",
    questions: [
      {
        q: "Which part of your salad is grown from HM.CLAUSE seeds?",
        options: ["Chicken", "Lettuce", "Croutons", "Cheese"],
        answer: 1
      },
      {
        q: "What makes a vegetable 'traceable'?",
        options: [
          "It’s grown in a glass house",
          "Labeled with a QR code",
          "It smells fresh",
          "It’s green"
        ],
        answer: 1
      }
    ],
    result: "You're a Traceability Pro!"
  },
  hi: {
    title: "आपकी सब्ज़ियाँ कहाँ से आईं?",
    questions: [
      {
        q: "आपके सलाद का कौन सा हिस्सा HM.CLAUSE बीजों से उगाया गया है?",
        options: ["चिकन", "सलाद पत्ता", "क्रूटोंस", "पनीर"],
        answer: 1
      },
      {
        q: "किसे ट्रेस करने योग्य सब्ज़ी माना जाता है?",
        options: [
          "जो ग्रीनहाउस में उगती है",
          "जिसपर QR कोड हो",
          "जो ताज़ा महके",
          "जो हरी हो"
        ],
        answer: 1
      }
    ],
    result: "आप हैं ट्रेसबिलिटी मास्टर!"
  },
  te: {
    title: "మీ కూరగాయలు ఎక్కడినుండి వచ్చాయి?",
    questions: [
      {
        q: "మీ సలాడ్‌లో HM.CLAUSE విత్తనాలతో ఏ భాగం ఉత్పత్తి అవుతుంది?",
        options: ["చికెన్", "లెట్యూస్", "క్రూటాన్స్", "చీజ్"],
        answer: 1
      },
      {
        q: "ఎటువంటి కూరగాయను ట్రేసబుల్‌గా పరిగణిస్తారు?",
        options: [
          "అది గ్లాస్ హౌస్‌లో పెరిగితే",
          "దానిపై QR కోడ్ ఉంటే",
          "దీని వాసన బాగుంటే",
          "ఆకుపచ్చగా ఉంటే"
        ],
        answer: 1
      }
    ],
    result: "మీరు ట్రేసబిలిటీ ప్రొ!"
  }
};

function switchLanguage(lang) {
  currentLanguage = lang;
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("quiz-title").innerText = translations[lang].title;
  document.getElementById("result").style.display = "none";
  renderQuestion();
}

function renderQuestion() {
  const questionData = translations[currentLanguage].questions[currentQuestionIndex];
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <div class="question">
      <p><strong>Q${currentQuestionIndex + 1}:</strong> ${questionData.q}</p>
      ${questionData.options.map((opt, i) =>
        `<button onclick="submitAnswer(${i})">${opt}</button>`
      ).join("<br>")}
    </div>
  `;
}

function submitAnswer(selectedIndex) {
  const questionData = translations[currentLanguage].questions[currentQuestionIndex];
  if (selectedIndex === questionData.answer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < translations[currentLanguage].questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").innerHTML = "";
  const resultText = translations[currentLanguage].result;
  const resultEl = document.getElementById("result");
  resultEl.style.display = "block";
  resultEl.innerHTML = `<h3>${resultText}</h3><p>Your score: ${score}</p>`;
}

// Initialize
switchLanguage("en");