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
    }
    ]

// objects, 5, 




var correctAns = 0
var totalQuest = 0

function runQuiz() {
    console.log ('started quiz')
    for ( var i = 0; i < questionsArr.length; i++) {
       // correctAns += questionsArr[i][1]
        //var score = (correctAns/questionsArr.length)
        // alert ('Your score is' + score)
        var questions = questionsArr[i];
        console.log(questions)
        var answer = confirm (questions);
        if (answer) {
            correctAns++
        }
        
    }
    
    
    
}

//quizScore = Math.round ((correctAns/totalQuest)*100)
//alert("Your score is" + quizScore + "%" )

//function percentage (partialValue,totalValue) {
  //  return (100*partialValue)/totalValue
// }
