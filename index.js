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

    // var questionsArr = [
        
    //         'An object includes a variables and function',
    //         'There are for loops, while loops, and do...while loops',
    //         'For loops are the most commonly used',
    //         'If a variable is part of an object, it is called a property',
    //         'You can modify an array after it is created',
     
    //     ]




function runQuiz() {
//    var correctAns = 0
//     var totalQuest = 0
//     var finalScore = 0
    // var userResponse = true

    console.log ('started quiz')
    for ( let i = 0; i < questionsArr.length; i++) {
    // userResponse = confirm(questionsArr)
    //    correctAns += questionsArr[i][1]
    //     var score = (correctAns/questionsArr.length)
    //     alert ('Your score is' + score)

        var questions = questionsArr[i];
        console.log(questionsArr[0])
        var answer = confirm (questions);
        if (answer === true) {
            correctAns++
        }
        
    }
//    finalScore = Math.round((correctAns/totalQuest)*100)
//    alert ("Final Score: " + finalScore + "%")

    // if (correctAns >= Math.round (answer/questionsArr.length)) (
    //     alert ('Your score is ' + correctAns)
    // )
    
    
    
}

//quizScore = Math.round ((correctAns/totalQuest)*100)
//alert("Your score is" + quizScore + "%" )

//function percentage (partialValue,totalValue) {
  //  return (100*partialValue)/totalValue
// }
