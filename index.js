// Your code here


var questionsArr = [

    {
        question:'An object includes a variables and function',
        answer: true 
    },
    { 
        question:'There are for loops, while loops, and do...while loops',
        answer: true 
    },
    {
        question: 'For loops are the most commonly used',
        answer: true
    },
    {
        question:'If a variable is part of an object, it is called a property',
        answer: true 
    },
    {
        question: 'You can modify an array after it is created',
        answer: true
    },
    {
        question: 'Hoisting is not something Javascript automatically does',
        answer: false
    }
    ]


function runQuiz() {
var correctAns = 0

    console.log ('started quiz')
    for ( let i = 0; i < questionsArr.length; i++) {
     correctAns = confirm(questionsArr)

        var questions = questionsArr[i];
        console.log(questionsArr)
        var answer = confirm (questions);
        if (answer === true) {
            correctAns++


        var quizScore = Math.round ( correctAns/questionsArr.length * 100 )
        alert ('Your score is ' + quizScore + '%')
        }
        
    }
    
    
}

