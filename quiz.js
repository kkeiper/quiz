//opens initial anonymous function
$(document).ready(function() {


/*initialize some potential variables*/

var questionsAnswered = 0; // counter for number of questions answered
var status; // will convert a boolean to 'correct' or 'incorrect'
var response; //user response
var numChoices = 3; // stores how many choices each question will have so that if it changes, loops in program will automatically changes
var currentQuestion = 0; //marks the question that the user is on
var correctAnswer; //correct answer
var guessCount = 0; //current number of guesses
var wrongGuessCount = 0; //current number of wrong guesses
var result; //stores the value of whether the answer was answered correctly or incorrectly (true = correct, false = incorrect)

//Creates array of objects that have question and answer property and property values
var questions = [{
     question: "When a skipper yells 'starboard' what does that mean?",
     choices: ["They intend to tack to starboard", "They will pass on the starboard side", "They have the right of way" ],
     answer: 2
},
{
     question: "What is a jibe?",
     choices: ["A type of boat", "A sail", "tacking downwind" ],
     answer: 2
},
{
     question: "The forestay applies to what?",
     choices: ["rigging", "hull construction", "sails" ],
     answer: 0
},
{
     question: "coming about is...",
     choices: ["a type of tacking maneuver", "a man overboard procedure", "a way to board another vessel" ],
     answer: 0
},
{
     question: "question five here",
     choices: ["possible-answer-01", "possible-answer-02", "possible-answer-03" ],
     answer: 4
},
{
     question: "question six here",
     choices: ["possible-answer-01", "possible-answer-02", "possible-answer-03" ],
     answer: 5
},
{
     question: "question seven here",
     choices: ["possible-answer-01", "possible-answer-02", "possible-answer-03" ],
     answer: 6
},
{
     question: "question eight here",
     choices: ["possible-answer-01", "possible-answer-02", "possible-answer-03" ],
     answer: 7
},
{
     question: "question nine here",
     choices: ["possible-answer-01", "possible-answer-02", "possible-answer-03" ],
     answer: 8
},
{
     question: "question ten here",
     choices: ["possible-answer-01", "possible-answer-02", "possible-answer-03" ],
     answer: 9
},
];

// this is the main quiz function which should handle everything
var quiz = function() {

//resetGame function clears out two text fields and increments varialbe and puts question in #question <li>
	var resetQuiz = function() { 
		$("#correctAnswers").html("");
		$("#incorrectAnswers").html("");
		newQuestion();
		}; //closes the resetQuiz function

	var newQuestion = function() {
		$("ul#question").html("");
		$("ul#answers").html("");
		$("ul#question").append("<li>" + questions[currentQuestion].question + "</li>");
		for (n=0; n<questions[currentQuestion].choices.length; n++) {
		$("ul#answers").append("<li><input type='radio' name='answer' value=' "+ n +" '>" + questions[currentQuestion].choices[n] + "</li>");
		}
		};//closes the newQuestion function

	$("#form").submit(function(event) {
		event.preventDefault();
		//store what user clicked on in response
		$("input:radio").each(function(){
			if($(this).is(":checked")) {
				response = $(this).val();
			}
			
		});

    	if (response == questions[currentQuestion].answer) {
    		guessCount++;
    		console.log(guessCount);
    		$("#correctAnswers").html("<li>" + guessCount + "</li>")
    	} else {
    		wrongGuessCount++;
    		console.log(wrongGuessCount);
    		$("#incorrectAnswers").html("<li>" + wrongGuessCount + "</li>")

    	}

		currentQuestion++; //make sure that ultimate number of current questions is equal to questions.length
		newQuestion(); 
		});

resetQuiz();

} //closes the quiz function
	


quiz(); //calls the main quiz function

}); // closes main anonymous function