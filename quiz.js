//opens initial anonymous function
$(document).ready(function() {

/*initialize some potential variables*/

var questionsAnswered = 0; // counter for number of questions answered
var response; //user response
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
     choices: ["A type of boat", "A sail", "a tacking downwind maneuver" ],
     answer: 2
},
{
     question: "The forestay applies to what?",
     choices: ["rigging", "hull construction", "sails" ],
     answer: 0
},
{
     question: "Coming about is...",
     choices: ["a type of tacking maneuver", "a man overboard procedure", "a way to board another vessel" ],
     answer: 0
},
{
     question: "The point of sail perpendicular to the wind (90 degrees off the wind) is:",
     choices: ["Beam Reach", "Running", "Broad Reach" ],
     answer: 0
},
{
     question: "A sheet is:",
     choices: ["a sail", "line that controls a sail", "a reefing line" ],
     answer: 1
},
{
     question: "If you are going to hit something, what should you do?",
     choices: ["Shout for help", "Luff your sails", "Turn the tiller towards trouble" ],
     answer: 2
},
{
     question: "When rigging your boat where should you point?",
     choices: ["Into the wind", "Downwind", "90 degrees to the wind" ],
     answer: 0
},
{
     question: "To get 'out of irons' what should you do?",
     choices: ["Trim your mainsail", "Pull the tiller towards you", "Trim your jib" ],
     answer: 1
},
{
     question: "To right your boat after capsizing you would:",
     choices: ["Stand on the centerboard", "Pull on the bowline", "Push from the stern" ],
     answer: 0
},
];

// begin quiz function
var quiz = function() {

        //begin resetQuiz function
    	var resetQuiz = function() { 
    		$("#correctAnswers").html("");
    		$("#incorrectAnswers").html("");
            currentQuestion = 0;
            correctAnswer = 0;
            wrongGuessCount = 0;

            newQuestion();
    	}; //closes the resetQuiz function

    	//begin newQuestion function
        var newQuestion = function() {
    		$("ul#question").html("");
    		$("ul#answers").html("");
    		$("#currentQuestion").html("Question #" + parseInt(currentQuestion + 1));

                //part that belongs in the main function not in event listener
                if (currentQuestion < questions.length) {
                $("#currentQuestion").html("Question #" + (currentQuestion + 1));
                } else {
                $("#currentQuestion").html("You have reached the end of the quiz. Start over...");
                }

    		$("ul#question").append("<li>" + questions[currentQuestion].question + "</li>");
    		for (n=0; n<questions[currentQuestion].choices.length; n++) {
    		$("ul#answers").append("<li><input type='radio' name='answer' value=' "+ n +" '>" + questions[currentQuestion].choices[n] + "</li>");
    		}
            
        };//closes the newQuestion function

    		$("#resetQuiz").click(function() { //why do you need a (function()) for this?
            resetQuiz();
            }); //closes resetQuiz click function


    // begin submit event listener function
	$("#form").submit(function(event) {
		event.preventDefault();
		//store what user clicked on in response
		$("input:radio").each(function(){
			if($(this).is(":checked")) {
				response = $(this).val();
			}
	   }); //closes the input radio button function

    	if (response == questions[currentQuestion].answer) {
            correctAnswer++;
    		$("#correctAnswers").html("<li>" + correctAnswer + "</li>")
    	} else {
    		wrongGuessCount++;
    		// console.log(wrongGuessCount);
    		$("#incorrectAnswers").html("<li>" + wrongGuessCount + "</li>")
    	}

		currentQuestion++; //make sure that ultimate number of current questions is equal to questions.length
		
		newQuestion();


	}); //closes the submit event listener function

resetQuiz();


}; //closes the quiz function
	
quiz(); //calls the main quiz function

}); // closes main anonymous function