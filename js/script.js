const quizData = [
  {
    question: "HTML stands for?",
    a: "Hyper Text Markup Language",
    b: "High Text Language",
    c: "Hyper Tool",
    d: "Home Text",
    correct: "a",
  },
  {
    question: "CSS stands for?",
    a: "Cascading Style Sheet",
    b: "Creative Style",
    c: "Color Sheet",
    d: "Computer Style",
    correct: "a",
  },
  {
    question: "JS stands for?",
    a: "JavaScript",
    b: "JavaSource",
    c: "Just Script",
    d: "Json Script",
    correct: "a",
  },
  {
    question: "Which runs in browser?",
    a: "Python",
    b: "Java",
    c: "JavaScript",
    d: "C++",
    correct: "c",
  },
  {
    question: "SQL stands for?",
    a: "Structured Query Language",
    b: "Simple Query",
    c: "Style Query",
    d: "Statement Query",
    correct: "a",
  },
  {
    question: "JS comment symbol?",
    a: "//",
    b: "#",
    c: "<!-- -->",
    d: "**",
    correct: "a",
  },
  {
    question: "Which tag for JS?",
    a: "<script>",
    b: "<js>",
    c: "<javascript>",
    d: "<code>",
    correct: "a",
  },
  {
    question: "Which is NOT language?",
    a: "HTML",
    b: "Java",
    c: "Python",
    d: "C",
    correct: "a",
  },
  {
    question: "Who made JS?",
    a: "Netscape",
    b: "Google",
    c: "Apple",
    d: "Microsoft",
    correct: "a",
  },
  {
    question: "Variable keyword?",
    a: "var",
    b: "int",
    c: "string",
    d: "float",
    correct: "a",
  },
];

// HTML se elements
const q = document.getElementById("question");
const o1 = document.getElementById("option-1");
const o2 = document.getElementById("option-2");
const o3 = document.getElementById("option-3");
const o4 = document.getElementById("option-4");
const answers = document.querySelectorAll(".answer");
const btn = document.getElementById("submit");

let i = 0;
let score = 0;

// pehla question
showQuestion();

function showQuestion() {
  answers.forEach((a) => (a.checked = false));

  q.innerText = quizData[i].question;
  o1.innerText = quizData[i].a;
  o2.innerText = quizData[i].b;
  o3.innerText = quizData[i].c;
  o4.innerText = quizData[i].d;
}

btn.onclick = function () {
  let selected;

  answers.forEach((a) => {
    if (a.checked) selected = a.id;
  });

  if (!selected) {
    alert("Select answer!");
    return;
  }

  if (selected === quizData[i].correct) {
    score++;
  }

  i++;

  if (i < quizData.length) {
    showQuestion();
  } else {
    document.querySelector(".quiz-section").innerHTML =
      "<h2>Score: " + score + " / " + quizData.length + "</h2>";
  }
};
