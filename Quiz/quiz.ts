interface questions {
    question : string
    option1 : string
    option2 : string
    option3 : string
    option4 : string
    correct : 1 | 2 | 3 | 4
}

export class MyQuiz {
    readonly questions : questions[] = [
    {
        question:"What does HTML stand for?",
        option1: "Hyper Text Preprocessor",
        option2: "Hyper Text Markup Language",
        option3: "Hyper Text Multiple Language",
        option4: "Hyper Tool Multi Language",
        correct: 2
    },
    {
        question:"What does CSS stand for?",
        option1: "Cascading Style Sheets",
        option2: "Cool Stylish Stuff",
        option3: "Computational Scanning System",
        option4: "CSS Styles Sheets",
        correct: 1
    },
    {
        question:"What programming language is used to add interactivity to websites?",
        option1: "Java",
        option2: "Python",
        option3: "JavaScript",
        option4: "AppleScript",
        correct: 3
    },
    {
        question:"What is the meaning of life?",
        option1: "Happiness",
        option2: "Love",
        option3: "Joy",
        option4: "42",
        correct: 4
    }
    ]
    currentquestion : number = 0
    lengthofquestions : number
    constructor() {
        this.lengthofquestions = this.questions.length
    }
    getcurrentquestion() {
        return this.questions[this.currentquestion]
    }
    answerquestion(answer : 1 | 2 | 3 | 4) : boolean {
        if (answer==this.questions[this.currentquestion].correct) {
            this.currentquestion++
            return true
        }
        else {
            return false
        }
    }
}