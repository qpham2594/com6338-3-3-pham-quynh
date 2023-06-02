// Your code here

// global variable = questionsArr - each question is a string, and each answer is a boolean, each set of question and answer is an object, so there are 6 objects total, each separated by a comma

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
    },
    ]

function runQuiz() { // funciton runQuiz will work with the id in HTML page
var correctAns = 0  // variable correctAns acts as a score counter and it set to equal 0 

    console.log ('started quiz') // console log here to make sure it is working when the button is clicked

    // for loop is used with three statements; statement 1 is the index = 0, statement 2 states the index is to be less than the length of the questionsArr (so 6 questions in this case), and statement 3 states that each time a code block is done, it will go to the next one
    for ( let i = 0; i < questionsArr.length; i++) {

        var questions = questionsArr[i]; //defining variable questions as questionsArr
        var answer = confirm (questions.question); // defining answer as the confirm popup box specifically with just the question by using dot operator to access the question property, without the dot operator, questions = questionsArr which would pop up both questions and the answers
        if (answer === questions.answer) { // statement is that if the answer (by user) is the same as the answer from questionsArr (once again using dot operator here), then the correctAns (the score counter that was set at 0 originally) will add 1 
            correctAns++
        }    
    }
    
    var quizScore = Math.round(correctAns/questionsArr.length * 100) // to round a number to the closest interger, use math.round; define quizScore as Math.round with the equation; essentially like y = x
    alert ('Your score is ' + quizScore + '%') // give alert box with the statement in quotation marks plus the quizScore plus the percentage sign to form a sentence
    
}


