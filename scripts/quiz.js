const questions = [
    {
        text: "What is the amount of your debt?",
        answers: ["$10k – $20k", "$20k – $50k", "$50k – $80k"]
    },
    {
        text: "How old are you?",
        answers: ["18 - 25 years", "26 -30 years", "Over 30 years"]
    }
];
let currentQuestion = 0;

function nextQuestion() {
    currentQuestion++;
    let question = document.getElementById("quiz-question");
    
    if (currentQuestion < questions.length) {
        question.innerText = questions[currentQuestion].text;
        document.getElementById("btn1").innerText = questions[currentQuestion].answers[0];
        document.getElementById("btn2").innerText = questions[currentQuestion].answers[1];
        document.getElementById("btn3").innerText = questions[currentQuestion].answers[2];
    } else {
        question.innerText = "Thank you for completing the quiz!";
        document.getElementById("answers").innerHTML = '<a href="/" class="call-button" style="margin-top: 0">Get started now<div><img src="images/phone-icon-p.png" alt="" /></div></a>';
    }
}