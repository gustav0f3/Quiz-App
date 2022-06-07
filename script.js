const quizData= [
  {
    question: 'How old is Campo Grande - MS?',
    a:'100',
    b:'102',
    c:'116',
    d:'122',
    correct: 'd',
  },{
    question: 'What is the value of f(x) = 4x^2 + 6x - 10 ?',
    a:'x=1',
    b:'x=4',
    c:'x=2',
    d:'x=6',
    correct: 'a',
  },{
    question: 'How many countries are there in the world?',
    a:'156',
    b:'185',
    c:'193',
    d:'205',
    correct: 'c',
  },{
    question: 'What is the largest organ in the human body?',
    a:'femur',
    b:'lung',
    c:'leg',
    d:'skin',
    correct: 'd',
  },{
    question:'Who discovered Brazil?',
    a:'Cristóvão Colombo',
    b:'Marquinhos Trade',
    c:'Pedro Álvares Cabral',
    d:'Michael Jackson',
    correct: 'c',
  }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});