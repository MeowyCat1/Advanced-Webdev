export class MyQuiz {
    questions = [
        {
            question: "What does HTML stand for?",
            option1: "Hyper Text Preprocessor",
            option2: "Hyper Text Markup Language",
            option3: "Hyper Text Multiple Language",
            option4: "Hyper Tool Multi Language",
            correct: 2
        },
        {
            question: "What does CSS stand for?",
            option1: "Cascading Style Sheets",
            option2: "Cool Stylish Stuff",
            option3: "Computational Scanning System",
            option4: "CSS Styles Sheets",
            correct: 1
        },
        {
            question: "What programming language is used to add interactivity to websites?",
            option1: "Java",
            option2: "Python",
            option3: "JavaScript",
            option4: "AppleScript",
            correct: 3
        },
        {
            question: "What is the meaning of life?",
            option1: "Happiness",
            option2: "Love",
            option3: "Joy",
            option4: "42",
            correct: 4
        }
    ];
    currentquestion = 0;
    lengthofquestions;
    constructor() {
        this.lengthofquestions = this.questions.length;
    }
    getcurrentquestion() {
        return this.questions[this.currentquestion];
    }
    answerquestion(answer) {
        if (answer == this.questions[this.currentquestion].correct) {
            this.currentquestion++;
            return true;
        }
        else {
            return false;
        }
    }
}
